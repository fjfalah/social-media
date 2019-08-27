import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import NavigationBar from './containers/NavigationBar'
import { actionGetPostsAll } from '../../store/actions/postsActions'
import { actionGetAccountData } from '../../store/actions/accountActions'
import Posts from './containers/Posts'
import PostForm from '../../containers/PostForm'
import { Box } from '../../components'
import { ACCOUNT_ID } from '../../constants/common'

class Home extends React.Component {
  componentDidMount = () => {
    this.props.actionGetPostsAll()
    this.props.actionGetAccountData({ id: ACCOUNT_ID })
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
  actionGetAccountData,
})(Home)
