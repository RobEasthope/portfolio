import React from 'react';
import PrismicReact from 'prismic-reactjs';
import { Helmet } from 'react-helmet';
import Error404Page from '../../components/pages/Error404Page';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getPrismicDoc } from './actions';
import { selectPrismicDoc } from './selectors';

class Project extends React.Component {
  constructor() {
    super();

    this.state = {
      doc: null,
      notFound: false,
    };
  }

  componentWillMount() {
    this.fetchPage(this.props);
    this.props.actions.getPrismicDoc();
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
      return props.prismicCtx.api.getByUID('landing', props.match.params.uid, {}, (err, doc) => {
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
      return (
        <div>
          <Helmet>
            <title>{PrismicReact.RichText.asText(this.state.doc.data.title)}</title>
          </Helmet>

          <div data-wio-id={this.state.doc.id}>
            {/* This is how to get an image into your template */}
            {/* <img alt="cover" src={this.state.doc.data.your_image_field_id.url} /> */}
            {/* This is how to insert a Rich Text field as plain text */}
            <h1>{PrismicReact.RichText.asText(this.state.doc.data.title)}</h1>
            {/* This is how to insert a Rich Text field into your template as html */}
            {PrismicReact.RichText.render(
              this.state.doc.data.text,
              this.props.prismicCtx.linkResolver,
            )}
          </div>
        </div>
      );
    } else if (this.state.notFound) {
      return <Error404Page />;
    }
    return <h1>Loading</h1>;
  }
}

const mapStateToProps = state => ({
  apiData: selectPrismicDoc(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getPrismicDoc }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);
