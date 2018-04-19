import React from 'react';
import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getPrismicDoc } from './actions';

import Title from '../../components/typography/Title';

class Portfolio extends React.Component {
  componentWillMount() {
    this.props.actions.getPrismicDoc();
  }

  render() {
    return <Title>Portfolio</Title>;
  }
}

const mapStateToProps = state => ({
  // apiData: selectPrismicDoc(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getPrismicDoc }, dispatch),
});

Portfolio.propTypes = {
  actions: PropTypes.isRequired,
  getPrismicDoc: PropTypes.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
