import React from 'react'
import { connect } from 'react-redux'
import NavigationBar from './containers/NavigationBar'
import { actionGetPostsAll } from '../../store/actions/postsActions'
import Posts from './containers/Posts'

class Home extends React.Component {
  componentDidMount = () => {
    this.props.actionGetPostsAll()
  }

  render() {
    const { posts, users } = this.props
    return (
      <>
        <NavigationBar users={users} />
        <Posts posts={posts} />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.list,
  users: state.users.list,
})

export default connect(mapStateToProps, {
  actionGetPostsAll,
})(Home)
