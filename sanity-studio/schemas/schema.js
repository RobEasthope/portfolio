// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
// Objects
import blockContent from './blockContent';
import seoMetaData from './seoMetaData';
import altImage from './altImage';

// Documents
import tech from './tech';
import project from './project';
import organisation from './organisation';
import education from './education';
import portfolio from './portfolio';
import sandbox from './sandbox';
import landing from './landing';
import about from './about';
import details from './details';
import gig from './gig';
import cv from './cv';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    project,
    tech,
    organisation,
    gig,
    education,
    cv,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    portfolio,
    sandbox,
    landing,
    about,
    details,
    blockContent,
    seoMetaData,
    altImage,
  ]),
});
