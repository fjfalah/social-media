import React from 'react'
import { Container } from 'reactstrap'
import { connect } from 'react-redux'
import NavigationBar from './containers/NavigationBar'
import { actionGetPostsAll } from '../../store/actions/postsActions'

class Home extends React.Component {
  componentDidMount = () => {
    this.props.actionGetPostsAll()
  }

  render() {
    return (
      <>
        <NavigationBar />
        <Container />
      </>
    )
  }
}

export default connect(null, {
  actionGetPostsAll,
})(Home)
