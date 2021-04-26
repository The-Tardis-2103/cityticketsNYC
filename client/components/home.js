import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

/**
 * COMPONENT
 */
export const Home = props => {
  const { username} = props
  return (
    <div>
      <h3>Welcome, {username}</h3>
      <Link to="/products">Events </Link>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username,
  }
}

export default connect(mapState)(Home)
