import React from 'react'
import { connect } from 'react-redux'
import { } from 'reactstrap'
import { actionGetUserPhoto } from '../../store/actions/albumsActions'
import { actionGetUserDetail } from '../../store/actions/usersActions'
import NavigationBar from './containers/NavigationBar'
import { Loading } from '../../components'
import PhotoList from './containers/PhotoList'

class UserPhoto extends React.Component {
  componentDidMount = () => {
    const { albumId, userId } = this.props.match.params
    this.props.actionGetUserPhoto({ albumId })
    this.props.actionGetUserDetail(userId)
  }

  render() {
    const { selectedAlbum, user } = this.props

    if (selectedAlbum === null && user === null) {
      return <Loading marginTop="66" />
    }


    return (
      <>
        <NavigationBar user={user} />
        <PhotoList photos={selectedAlbum} />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedAlbum: state.albums.selectedAlbum,
  user: state.users.selectedUser,
})

export default connect(mapStateToProps, {
  actionGetUserPhoto,
  actionGetUserDetail,
})(UserPhoto)
