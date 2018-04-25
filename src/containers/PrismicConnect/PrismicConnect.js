import React from 'react';
import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { prismicApiConnectionRequest } from './actions';

class PrismicConnect extends React.Component {
  componentWillMount() {
    this.props.actions.prismicApiConnectionRequest();
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

const mapStateToProps = state => ({
  // apiData: selectPrismicDoc(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ prismicApiConnectionRequest }, dispatch),
});

PrismicConnect.propTypes = {
  // actions: PropTypes.shape.isRequired,
  // getPrismicDoc: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PrismicConnect);
