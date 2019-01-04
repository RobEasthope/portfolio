import React from 'react'
import PrismicReact from 'prismic-reactjs'

import LinkOrNoLink from '../../../components/LinkOrNoLink/LinkOrNoLink'
import ProjectDetailText from '../ProjectDetailText/ProjectDetailText'

const ProjectDetail = props => {
  if (props.title) {
    return (
      <ProjectDetailText>
        {PrismicReact.RichText.asText(props.detailType)}
        <span> × </span>
        <LinkOrNoLink title={props.title} url={props.url} />
      </ProjectDetailText>
    )
  }
  return null
}

export default ProjectDetail
