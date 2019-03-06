import styled from "styled-components";
import rem from "../../../utils/rem";

const ProjectDetailText = styled("div")`
  display: block;
  padding: 0.75em 0;
  border-bottom: 1px solid #000;
  font-size: 22px;
  font-size: 1.375rem;
  line-height: 1.6em;

  span {
    margin: 0 ${rem(6)};
  }

  &:first-child {
    border-top: 1px solid #000;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export default ProjectDetailText;
