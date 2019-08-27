import React from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { actionGetUserAlbum } from '../../../store/actions/albumsActions'
import { Loading } from '../../../components'

class UserAlbum extends React.Component {
  state = {
    selectedAlbumId: null,
  }

  componentDidMount = () => {
    const { user } = this.props
    this.props.actionGetUserAlbum({ userId: user.id })
  }

  handleSelectAlbum = (selectedAlbumId) => {
    this.setState({ selectedAlbumId })
  }

  render() {
    const { albums } = this.props
    const { selectedAlbumId } = this.state

    if (albums === null) {
      return <Loading />
    }

    return (
      <ListGroup>
        {
          albums.map((album, index) => {
            return (
              <ListGroupItem
                key={index}
                className="list-group-item-action"
                onClick={() => this.handleSelectAlbum(album.id)}
              >{album.title}
              </ListGroupItem>
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
