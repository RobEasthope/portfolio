import React from 'react';
import PropTypes from 'prop-types';
import PrismicReact from 'prismic-reactjs';
import Error404Page from '../../components/pages/Error404Page';
import PlaceholderText from '../../components/typography/PlaceholderText';
// import { Helmet } from 'react-helmet';

import LandingBkg from './LandingBkg';

class Placeholder extends React.Component {
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
      return props.prismicCtx.api.getByUID('placeholder', 'placeholder', {}, (err, doc) => {
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
          <LandingBkg bkg={doc.data.placeholder_image.url}>
            <PlaceholderText>
              {PrismicReact.RichText.render(
                doc.data.placeholder_text,
                this.props.prismicCtx.linkResolver,
              )}
            </PlaceholderText>
          </LandingBkg>
          {/* {PrismicReact.RichText.asText(doc.data.placeholder_tagline)} */}
          {/* This is how to insert a Rich Text field as plain text */}
          {/* This is how to insert a Rich Text field into your template as html */}
        </div>
      );
    } else if (this.state.notFound) {
      return <Error404Page />;
    }
    return '';
  }
}

Placeholder.propTypes = {
  prismicCtx: PropTypes.isRequired,
};

export default Placeholder;
