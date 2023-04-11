import groq from "groq";

export const BASIC_TEXT_QUERY_BODY = groq`
  ...,
  markDefs[]{
    ...,
    _type == "InternalLink" => {
      "page": @.internalUID->
    }
  }
`;
