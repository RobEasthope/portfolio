import groq from "groq";
import { BASIC_TEXT_QUERY_BODY } from "ui-pkg/base/Prose/components/BasicText/BasicText.query";

export const TEXT_QUERY = groq`{
  _type,
  _key,
  heading,
  blockHeading,
  text[]{${BASIC_TEXT_QUERY_BODY}},
  blockID,
}`;
