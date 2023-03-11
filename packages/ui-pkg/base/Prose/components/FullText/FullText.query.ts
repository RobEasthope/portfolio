import groq from "groq";

export const FULL_TEXT_QUERY_BODY = groq`
  ...,
  markDefs[]{
    ...,
    _type == "InternalLink" => {
      "page": @.internalUID->
    }
  }
`;
