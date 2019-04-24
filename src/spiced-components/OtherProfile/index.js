import React from 'react'
import { connect } from 'react-redux'
import axios from '../../axios'
import { FriendButton } from './friendButton'
import { getUserPinInfo, selectActionBycategory } from '../../actions'
import {
  Container,
  Cover,
  SecondContainer,
  Project,
  ProjectsContainer
} from './elements'
import { H1, H2, H3 } from '../elements'

export default class OtherProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      portfolio: 'portfolio url',
      projects: ['Project 1', 'Project 2']
    }

    // this.checkedCategory = this.checkedCategory.bind(this)
    // this.pinClick = this.pinClick.bind(this)
    // this.togglePinClick = this.togglePinClick.bind(this)
    // this.showListComponent = this.showListComponent.bind(this)
    // this.closeListComponent = this.closeListComponent.bind(this)
  }
  // componentDidMount() {
  //   this.whatToDoOnLoad(this.props.match.params.id)
  // }
  // whatToDoOnLoad(id) {
  //   axios
  //     .get(`/getUser/${id}`)
  //     .then(response => {
  //       this.setState({ user: response.data.user })
  //     })
  //     .catch(err => {
  //       console.log(`error in getUser: ${err}`)
  //     })
  //   axios
  //     .get(`/getUserPins`, {
  //       params: { id: id }
  //     })
  //     .then(response => {
  //       this.setState({
  //         copyOfPinsArray: response.data.marker
  //       })
  //     })
  //     .catch(err => {
  //       console.log(`error in getPinInfo (otherProfile): ${err}`)
  //     })
  //   this.props.dispatch(getUserPinInfo(id))
  // }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.match.params.id !== this.props.match.params.id) {
  //     this.whatToDoOnLoad(nextProps.match.params.id)
  //     return
  //   }
  //   return
  // }
  // pinClick(e) {
  //   this.clickedPinId = e.name
  //   this.setState({
  //     clickedPinId: e.name,
  //     pinClickVisible: !this.state.pinClickVisible
  //   })
  // }
  // togglePinClick() {
  //   this.setState({
  //     pinClickVisible: !this.state.pinClickVisible
  //   })
  // }
  // checkedCategory(e) {
  //   if (e.target.checked) {
  //     this.state.arrayOfCategory.push(e.target.value)
  //     document.querySelector(`label[for=${e.target.name}]`).style.color =
  //       '#b52519'
  //     document.querySelector(`label[for=${e.target.name}]`).style.fontWeight =
  //       '900'
  //   } else {
  //     this.state.arrayOfCategory = this.state.arrayOfCategory.filter(item => {
  //       return item !== e.target.value
  //     })
  //     document.querySelector(`label[for=${e.target.name}]`).style.color =
  //       'black'
  //     document.querySelector(`label[for=${e.target.name}]`).style.fontWeight =
  //       '400'
  //   }
  //   this.props.dispatch(
  //     selectActionBycategory(
  //       this.state.arrayOfCategory,
  //       this.state.copyOfPinsArray
  //     )
  //   )
  // }
  // showListComponent() {
  //   console.log('setting to true')
  //   this.setState({
  //     showListComponent: true
  //   })
  // }
  // closeListComponent(e) {
  //   this.setState({
  //     showListComponent: false
  //   })
  // }
  // categoryItems(color, text, variable, myFunction) {
  //   const style = {
  //     backgroundSize: 'contain'
  //   }
  //   let str = '/pins/' + color + 'Pin.png'
  //   return (
  //     <div className="categoryItem">
  //       <input
  //         style={style}
  //         type="checkbox"
  //         id={variable}
  //         name={variable}
  //         value={variable}
  //         className="check"
  //         onClick={myFunction}
  //       />
  //       <img
  //         src={str}
  //         className="categoryItemPinIcon"
  //         alt="categoryItemPinIcon"
  //       />
  //       <label htmlFor={variable} className="pinText">
  //         {text}
  //       </label>
  //     </div>
  //   )
  // }
  render() {
    // console.log(this.props.match.params.id)
    const { portfolio, projects } = this.state
    return (
      <Container>
        <Cover>
          <H1>{this.props.match.params.id}</H1>
          <H3>Portfolio: {portfolio}</H3>
        </Cover>
        <SecondContainer>
          <H2>Projects:</H2>
          <ProjectsContainer>
            {projects.map(project => <Project>{project}</Project>)}
          </ProjectsContainer>
        </SecondContainer>
      </Container>
    )
  }
}
