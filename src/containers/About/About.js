import React from 'react';
import PropTypes from 'prop-types';
import PrismicReact from 'prismic-reactjs';

import MetaData from '../../components/MetaData/MetaData';
import Error404 from '../../components/Error404/Error404';
import SlimWrapper from '../../components/SlimWrapper/SlimWrapper';

class About extends React.Component {
  constructor() {
    super();

    this.state = {
      doc: null,
      notFound: false,
    };
  }

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  componentDidUpdate() {
    // this.props.prismicCtx.toolbar();
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      // We are using the function to get a document by its uid
      return props.prismicCtx.api.getByUID('about', 'about-page', {}, (err, doc) => {
        if (doc) {
          // We put the retrieved content in the state as a doc variable
          this.setState({ doc });
        } else {
          // We changed the state to display error not found if no matched doc
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

  render() {
    if (this.state.doc) {
      const { doc } = this.state;
      return (
        <div data-wio-id={this.state.doc.id}>
          <MetaData
            metaTitle={doc.data.meta_title}
            metaDescription={doc.data.meta_title}
            metaImage={doc.data.meta_image.url}
            currentUrl={this.props.match.url}
          />

          <SlimWrapper>
            <p>Hello,</p>
            <p>
              I'm Rob Easthope, a front end developer based in London. I specialise in clean code
              and smooth, drama free development.
            </p>
            <p>
              If you want to say hello you contact me via
              <a href="mailto:hello@robeasthope.com"> hello@robeasthope.com</a> or on
              <a href="https://www.linkedin.com/in/rob-easthope-9b0bb436/"> LinkedIn</a>
            </p>
            <p>Thanks</p>
            <p>
              Rob Easthope
              <br /> London, England
            </p>
          </SlimWrapper>
        </div>
      );
    } else if (this.state.notFound) {
      return <Error404 />;
    }
    return '';
  }
}

About.propTypes = {
  prismicCtx: PropTypes.shape(PropTypes.shape),
  match: PropTypes.shape(PropTypes.shape),
};

export default About;
