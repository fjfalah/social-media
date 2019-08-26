import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import NavigationBar from './containers/NavigationBar'
import { actionGetUserDetail } from '../../store/actions/usersActions'
import UserHeader from './containers/UserHeader'
import { Box, Loading } from '../../components'
import UserTabs from './containers/UserTabs'
import UserPosts from './containers/UserPosts'
import UserInfo from './containers/UserInfo'

class UserDetail extends React.Component {
  state = {
    activeTab: 'post',
  }

  componentDidMount = () => {
    const { userId } = this.props.match.params
    this.props.actionGetUserDetail(userId)
  }

  handleActiveTab = (activeTab) => {
    this.setState({ activeTab })
  }

  render() {
    const { user } = this.props
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
              <UserTabs activeTab={activeTab} handleActiveTab={this.handleActiveTab} />
              <Box h="10" />
              {
                activeTab === 'post' && <UserPosts user={user} />
              }
              {
                activeTab === 'info' && <UserInfo user={user} />
              }
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
