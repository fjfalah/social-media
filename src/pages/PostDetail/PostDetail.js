import React from 'react'
import { connect } from 'react-redux'
import { actionGetPostsDetail } from '../../store/actions/postsActions'
import NavigationBar from './containers/NavigationBar'
import PostContent from './containers/PostContent'

class PostDetail extends React.Component {
  componentDidMount = () => {
    const { postId } = this.props.match.params
    this.props.actionGetPostsDetail(postId)
  }

  render() {
    const { postDetail } = this.props
    return (
      <>
        <NavigationBar />
        <PostContent post={postDetail} />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  postDetail: state.posts.selectedPost,
})

export default connect(mapStateToProps, {
  actionGetPostsDetail,
})(PostDetail)
