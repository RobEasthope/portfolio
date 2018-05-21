import React from 'react';
import PropTypes from 'prop-types';
import PrismicReact from 'prismic-reactjs';

import MetaData from '../../components/MetaData';
import Error404Page from '../../components/pages/Error404Page';
import OrgName from './OrgName';
import ProjectBodyContent from './ProjectBodyContent';
import ProjectHeader from './ProjectHeader';

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
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  componentDidUpdate() {
    // this.props.prismicCtx.toolbar();
  }

  uid() {
    if (this.props.match) {
      return this.props.match.params.uid;
    }
    return '';
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      // We are using the function to get a document by its uid
      return props.prismicCtx.api.getByUID('project', this.uid(), {}, (err, doc) => {
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
    // const uid = () => this.props.match.params.uid;

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

          {/* Project header */}
          <ProjectHeader bkg={doc.data.header_image.url} type="bg" fluid>
            <div>{PrismicReact.RichText.asText(doc.data.project_title)}</div>
          </ProjectHeader>

          {/* Project details */}
          <OrgName title={doc.data.client} url={doc.data.client_url} />
          <OrgName title={doc.data.agency} url={doc.data.agency_url} />

          {/* Project content */}
          <div>
            <br />
            <ProjectBodyContent content={doc.data.body} />
          </div>
        </div>
      );
    } else if (this.state.notFound) {
      return <Error404Page />;
    }
    return '';
  }
}

Project.propTypes = {
  prismicCtx: PropTypes.shape(PropTypes.shape),
  match: PropTypes.shape(PropTypes.shape),
};

export default Project;
