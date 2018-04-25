import React from 'react';
import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet';

import Title from '../../components/typography/Title';

class Placeholder extends React.Component {
  componentWillMount() {
    // this.props.actions.getPrismicDoc();
  }

  render() {
    return <Title>Placeholder</Title>;
  }
}

export default Placeholder;
