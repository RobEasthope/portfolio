import React from 'react';
import PropTypes from 'prop-types';
import PrismicReact from 'prismic-reactjs';
import ValidImage from '../../components/ValidImage/ValidImage';

import MetaData from '../../components/MetaData/MetaData';
import Error404 from '../../components/Error404/Error404';

import ProjectDetails from '../../components/ProjectDetails/ProjectDetails';
import ProjectBodyContent from '../../components/ProjectBodyContent/ProjectBodyContent';
import ProjectHeader from '../../components/ProjectHeader/ProjectHeader';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import ProjectTitle from '../../components/ProjectTitle/ProjectTitle';

import { Row, Block } from '../../components/Grid/Grid';

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

          <ContentWrapper>
            <Row>
              <Block size={1 / 1}>
                <ValidImage src={doc.data.initial_image} />
              </Block>
              <Block size={1 / 1}>
                <ProjectBodyContent content={doc.data.body} />
              </Block>
              <Block size={1 / 1}>
                <ProjectDetails content={doc.data} />
              </Block>
            </Row>
          </ContentWrapper>
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
