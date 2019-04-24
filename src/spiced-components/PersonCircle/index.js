import React from 'react'
import { Container, H3 } from './elements'

export default class PersonCircle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { person: '' }
  }
  componentDidMount() {}
  personClicked(person) {
    this.setState({
      person: person
    })
    location.replace(`people/${person}`)
    //this should be the person id
  }
  render() {
    const { person } = this.props
    console.log(this.state)
    return (
      <Container
        onClick={() => {
          console.log('clicked on', person)
          this.personClicked(person)
        }}
      >
        <H3>{person}</H3>
      </Container>
    )
  }
}
