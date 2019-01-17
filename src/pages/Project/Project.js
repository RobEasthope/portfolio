import React from "react";
import PropTypes from "prop-types";
import PrismicReact from "prismic-reactjs";

import MetaData from "../../components/MetaData/MetaData";
import Error404 from "../Error404/Error404";

import ProjectBodyContent from "../../components/ProjectBodyContent/ProjectBodyContent";
import ProjectTitle from "./ProjectTitle/ProjectTitle";

class Project extends React.Component {
  constructor() {
    super();

    this.state = {
      doc: null,
      notFound: false
    };
  }

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  uid() {
    const match = this.props;

    if (match) {
      return match.params.uid;
    }
    return "";
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      return props.prismicCtx.api.getByUID(
        "project",
        this.uid(),
        {},
        (err, doc) => {
          if (doc) {
            this.setState({ doc });
          } else {
            this.setState({ notFound: !doc });
          }
        }
      );
    }
    return null;
  }

  render() {
    const { doc, notFound } = this.state;
    const match = this.props;

    if (doc) {
      return (
        <div data-wio-id={doc.id}>
          <MetaData
            metaTitle={doc.data.meta_title}
            metaDescription={doc.data.meta_title}
            metaImage={doc.data.meta_image.url}
            currentUrl={match.url}
          />

          {/* Project header */}
          <ProjectTitle>
            {PrismicReact.RichText.asText(doc.data.project_title)}
          </ProjectTitle>

          <ProjectBodyContent content={doc.data.body} />
        </div>
      );
    }
    if (notFound) {
      return <Error404 />;
    }
    return "";
  }
}

Project.propTypes = {
  prismicCtx: PropTypes.shape(PropTypes.shape),
  match: PropTypes.shape(PropTypes.shape)
};

export default Project;
