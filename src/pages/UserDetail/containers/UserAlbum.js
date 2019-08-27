import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'
import { actionGetUserAlbum } from '../../../store/actions/albumsActions'
import { Loading } from '../../../components'

class UserAlbum extends React.Component {
  componentDidMount = () => {
    const { user } = this.props
    this.props.actionGetUserAlbum({ userId: user.id })
  }

  render() {
    const { albums, user } = this.props

    if (albums === null) {
      return <Loading />
    }

    return (
      <ListGroup>
        {
          albums.map((album, index) => {
            return (
              <Link
                key={index}
                to={`/album/${album.id}/user/${user.id}`}
                className="list-group-item list-group-item-action"
              >
                {album.title}
              </Link>
            )
          })
        }
      </ListGroup>
    )
  }
}

const mapStateToProps = (state) => ({
  albums: state.albums.list,
})

export default connect(mapStateToProps, {
  actionGetUserAlbum,
})(UserAlbum)
