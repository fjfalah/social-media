import React from 'react'
import { connect } from 'react-redux'
import NavigationBar from './containers/NavigationBar'
import ProfileHeader from './containers/ProfileHeader'
import { Box } from '../../components'
import ProfileInfo from './containers/ProfileInfo'

const MyProfile = ({ account }) => {
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

const mapStateToProps = (state) => ({
  account: state.account,
})

export default connect(mapStateToProps)(MyProfile)
