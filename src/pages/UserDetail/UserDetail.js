import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import { Route } from 'react-router-dom'
import NavigationBar from './containers/NavigationBar'
import { actionGetUserDetail } from '../../store/actions/usersActions'
import UserHeader from './containers/UserHeader'
import { Box, Loading } from '../../components'
import UserTabs from './containers/UserTabs'
import UserPosts from './containers/UserPosts'
import UserInfo from './containers/UserInfo'
import UserAlbum from './containers/UserAlbum'

class UserDetail extends React.Component {
  state = {
    activeTab: '',
  }

  componentDidMount = () => {
    const { match, location } = this.props
    this.props.actionGetUserDetail(match.params.userId)
    this.handleDefaultActiveTab(location.pathname)
  }

  handleDefaultActiveTab = (pathname) => {
    let activeTab = ''
    if (pathname.indexOf('info') > -1) {
      activeTab = 'info'
    }

    if (pathname.indexOf('album') > -1) {
      activeTab = 'album'
    }

    this.handleActiveTab(activeTab)
  }

  handleActiveTab = (activeTab) => {
    this.setState({ activeTab })
  }

  render() {
    const { user, match } = this.props
    const { activeTab } = this.state

    return (
      <>
        <NavigationBar user={user} />
        {
          user === null && <Loading />
        }
        {
          user !== null && (
            <Container>
              <Box h="66" />
              <UserHeader user={user} />
              <Box h="10" />
              <UserTabs path={match.url} activeTab={activeTab} handleActiveTab={this.handleActiveTab} />
              <Box h="10" />
              <Route exact path={`${match.url}`} component={() => <UserPosts user={user} />} />
              <Route exact path={`${match.url}/info`} component={() => <UserInfo user={user} />} />
              <Route exact path={`${match.url}/album`} component={() => <UserAlbum user={user} />} />

              {/* {
                activeTab === 'post' && <UserPosts user={user} />
              }
              {
                activeTab === 'info' && <UserInfo user={user} />
              } */}
            </Container>
          )
        }
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.users.selectedUser,
})

export default connect(mapStateToProps, {
  actionGetUserDetail,
})(UserDetail)
