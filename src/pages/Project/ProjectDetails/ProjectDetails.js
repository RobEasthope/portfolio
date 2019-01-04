import React from 'react'

import SlimWrapper from '../../../components/SlimWrapper/SlimWrapper'
import ProjectDetail from '../ProjectDetail/ProjectDetail'

const ProjectDetails = props => (
  <SlimWrapper>
    <ProjectDetail
      detailTitle="Client"
      title={props.content.client}
      url={props.content.client_url}
    />
    <ProjectDetail
      detailTitle="Agency"
      title={props.content.agency}
      url={props.content.agency_url}
    />
  </SlimWrapper>
)

export default ProjectDetails
