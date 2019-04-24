import React from 'react'
import PersonCircle from '../PersonCircle'
import { Container, H3, SecondContainer } from './elements'

export default class Cohort extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}

  render() {
    const { cohortName } = this.props
    const peopleArray = ['Angeliki', 'Daniel', 'Aaron', 'Meyer']
    return (
      <Container>
        <H3>{cohortName}</H3>
        <SecondContainer>
          {peopleArray.map(person => <PersonCircle person={person} />)}
        </SecondContainer>
      </Container>
    )
  }
}
