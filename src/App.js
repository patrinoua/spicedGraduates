import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MapContainer from './components/MapContainer'
import { connect } from 'react-redux'
import axios from './axios'
import { EditProfile, UploadProfilePic } from './spiced-components/EditProfile'
import Header from './components/Header'
import Home from './spiced-components/Home'
import OtherProfile from './spiced-components/OtherProfile'
import About from './components/About'
import Friends from './components/Friends'
import { saveUserInfo } from './actions'
import PinClick from './components/PinClick'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.changeImage = this.changeImage.bind(this)
    this.hideUploader = this.hideUploader.bind(this)
    this.toggleUploader = this.toggleUploader.bind(this)
    this.fileToUpload = {}
    this.state.toggleUploader = false
    this.changeInputValues = this.changeInputValues.bind(this)
    this.togglePinClick = this.togglePinClick.bind(this)
  }
  togglePinClick() {
    location.replace('/')
  }
  toggleUploader() {
    this.setState({
      toggleUploader: !this.state.toggleUploader
    })
  }
  changeImage(img) {
    this.setState({
      profilepic: img
    })
  }
  changeInputValues(inputValues) {
    let { id, first, last, email, bio } = inputValues
    this.setState({
      id,
      first,
      last,
      email,
      bio
    })
  }
  hideUploader() {
    this.setState({
      uploaderIsVisible: false
    })
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    })
    axios.get('/getUser').then(response => {
      if (response.data.success) {
        this.props.dispatch(saveUserInfo(response.data.user))
        this.setState(response.data.user)
      } else {
        console.log('response.data in getUser had an error ', response.data)
      }
    })
  }

  render() {
    return (
      <div className="routeContainer">
        <BrowserRouter>
          <div className="appContainer">
            {/*<Header
              {...this.state}
              toggleUploader={this.toggleUploader}
              makeUploaderVisible={this.showUploader}
              hideUploader={this.hideUploader}
              userMenuPopUpStatus={this.state.toggleUserMenu}
            />*/}
            <Route
              exact
              path="/home"
              render={() => (
                <Home
                  {...this.state}
                  toggleUploader={this.toggleUploader}
                  makeUploaderVisible={this.showUploader}
                  hideUploader={this.hideUploader}
                  changeInputValues={this.changeInputValues}
                  changeImage={this.changeImage}
                />
              )}
            />
            <Route
              exact
              path="/people/:id"
              render={x => (
                <OtherProfile
                  {...this.state}
                  id={this.state.id}
                  match={x.match}
                  toggleUploader={this.toggleUploader}
                  makeUploaderVisible={this.showUploader}
                  hideUploader={this.hideUploader}
                  changeInputValues={this.changeInputValues}
                  changeImage={this.changeImage}
                />
              )}
            />

            <Route path="/about" component={About} />
            <Route path="/friends" component={Friends} />

            <Route
              exact
              path="/user/:id"
              render={x => (
                <React.Fragment>
                  <OtherProfile
                    lat={this.state.lat}
                    lng={this.state.lng}
                    match={x.match}
                    history={x.history}
                    id={this.state.id}
                  />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/pin/:encryptedPinId"
              render={x => (
                <PinClick
                  match={x.match}
                  history={x.history}
                  togglePinClick={this.togglePinClick}
                  flag={true}
                />
              )}
            />
            <Route
              exact
              path="/sharedpin/:encryptedPinId"
              render={x => (
                <PinClick
                  match={x.match}
                  history={x.history}
                  togglePinClick={this.togglePinClick}
                  flag={true}
                />
              )}
            />
            {/*<Route exact path="/onlineUsers" component={OnlineUsers} />*/}
            {/*<Route exact path="/chat" component={Chat} />*/}
            <Route
              exact
              path="/"
              render={() => (
                <MapContainer
                  lat={this.state.lat}
                  lng={this.state.lng}
                  {...this.state}
                />
              )}
            />
            <Route
              exact
              path="/map"
              render={() => (
                <MapContainer
                  lat={this.state.lat}
                  lng={this.state.lng}
                  {...this.state}
                />
              )}
            />
          </div>
        </BrowserRouter>

        {this.state.toggleUploader && (
          <UploadProfilePic
            changeImage={this.changeImage}
            hideUploader={this.hideUploader}
            toggleUploader={this.toggleUploader}
          />
        )}
      </div>
    )
  }
}
const mapStateToProps = function(state) {
  return {
    markersArray: state.markersArray
  }
}
export default connect(mapStateToProps)(App)
