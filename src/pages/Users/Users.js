import React from 'react'
import { connect } from 'react-redux'
import NavigationBar from './containers/NavigationBar'
import { actionGetUsersAll } from '../../store/actions/usersActions'
import UserList from './containers/UserList'

class Users extends React.Component {
  componentDidMount = () => {
    const { users } = this.props
    if (users === null) {
      this.props.actionGetUsersAll()
    }
  }

  render() {
    return (
      <>
        <NavigationBar />
        <UserList users={this.props.users} />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users.list,
})

export default connect(mapStateToProps, {
  actionGetUsersAll,
})(Users)
