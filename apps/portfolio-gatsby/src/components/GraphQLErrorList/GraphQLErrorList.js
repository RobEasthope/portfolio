import React from 'react';
import PropTypes from 'prop-types';

const GraphQLErrorList = ({ errors }) => (
  <div>
    <h1>GraphQL Error</h1>
    {errors.map(error => (
      <pre key={error.message}>{error.message}</pre>
    ))}
  </div>
);

GraphQLErrorList.defaultProps = {
  errors: [],
};

GraphQLErrorList.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
};

export default GraphQLErrorList;
