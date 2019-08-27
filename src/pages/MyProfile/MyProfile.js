import React from 'react'
import { connect } from 'react-redux'
import NavigationBar from './containers/NavigationBar'
import ProfileHeader from './containers/ProfileHeader'
import { Box, Loading } from '../../components'
import ProfileInfo from './containers/ProfileInfo'
import { actionGetAccountData } from '../../store/actions/accountActions'
import { ACCOUNT_ID } from '../../constants/common'

class MyProfile extends React.Component {
  componentDidMount = () => {
    this.props.actionGetAccountData({ id: ACCOUNT_ID })
  }

  render() {
    const { account } = this.props
    if (account === null) {
      return <Loading />
    }

    return (
      <>
        <NavigationBar />
        <Box h="66" />
        <ProfileHeader account={account} />
        <Box h="10" />
        <ProfileInfo account={account} />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  account: state.account.data,
})

export default connect(mapStateToProps, {
  actionGetAccountData,
})(MyProfile)
