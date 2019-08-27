import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import NavigationBar from './containers/NavigationBar'
import { actionGetPostsAll } from '../../store/actions/postsActions'
import Posts from './containers/Posts'
import PostForm from '../../containers/PostForm'
import { Box } from '../../components'

class Home extends React.Component {
  componentDidMount = () => {
    this.props.actionGetPostsAll()
  }

  render() {
    const { posts, users } = this.props
    return (
      <>
        <NavigationBar users={users} />
        <Container>
          <Box h="66" />
          <PostForm />
          <Posts posts={posts} />
        </Container>
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
