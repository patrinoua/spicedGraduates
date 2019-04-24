import React from 'react'
import Cohort from '../Cohort'
import { Container, Title, H3 } from './elements'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const cohorts = ['Cilantro', 'Jasmin']
    return (
      <Container>
        <Title>Hello :) </Title>
        <H3>
          This is a Board for all Spiced Graduates to show their Portfolio and
          Projects
        </H3>
        {cohorts.map(cohort => <Cohort cohortName={cohort} />)}
      </Container>
    )
  }
}
