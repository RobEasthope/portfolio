import React from 'react';
import PropTypes from 'prop-types';
import PrismicReact from 'prismic-reactjs';
import Grid from 'styled-components-grid';

import imgixUrl from '../../utils/imgixUrl';

import PortfolioWrapper from './PortfolioWrapper';
import MetaData from '../../components/MetaData';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import Error404Page from '../../components/pages/Error404Page';

class Portfolio extends React.Component {
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
      return props.prismicCtx.api.getByUID('portfolio', 'portfolio-page', {}, (err, doc) => {
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

          <PortfolioWrapper>
            <Grid>
              {doc.data.body.map((slice) => {
                switch (slice.slice_type) {
                  case 'portfolio_cards':
                    return slice.items.map(project_card => (
                      <PortfolioCard
                        key={PrismicReact.RichText.asText(project_card.project_title)}
                        title={PrismicReact.RichText.asText(project_card.project_title)}
                        bkg={project_card.project_thumbnail.url}
                      />
                    ));

                  default:
                    return 'Error?';
                }
              })}
            </Grid>
          </PortfolioWrapper>
        </div>
      );
    } else if (this.state.notFound) {
      return <Error404Page />;
    }
    return '';
  }
}

Portfolio.propTypes = {
  prismicCtx: PropTypes.shape(PropTypes.shape),
  match: PropTypes.shape(PropTypes.shape),
};

export default Portfolio;
