import React from 'react';
import PropTypes from 'prop-types';
import PrismicReact from 'prismic-reactjs';
import Image from '../../components/Image/Image';

import MetaData from '../../components/MetaData/MetaData';
import Error404 from '../../components/Error404/Error404';

import ProjectDetails from '../../components/ProjectDetails/ProjectDetails';
import ProjectBodyContent from '../../components/ProjectBodyContent/ProjectBodyContent';
import ProjectTitle from '../../components/ProjectTitle/ProjectTitle';

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

  uid() {
    if (this.props.match) {
      return this.props.match.params.uid;
    }
    return '';
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      return props.prismicCtx.api.getByUID('project', this.uid(), {}, (err, doc) => {
        if (doc) {
          this.setState({ doc });
        } else {
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

          {/* Project header */}
          <ProjectTitle>{PrismicReact.RichText.asText(doc.data.project_title)}</ProjectTitle>

          <ProjectBodyContent content={doc.data.body} />
        </div>
      );
    } else if (this.state.notFound) {
      return <Error404 />;
    }
    return '';
  }
}

Project.propTypes = {
  prismicCtx: PropTypes.shape(PropTypes.shape),
  match: PropTypes.shape(PropTypes.shape),
};

export default Project;
