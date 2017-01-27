import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="footerSection" id="footer">
        <ul className="footerList">
          <Link to="/projects" className="footerLinks">PROJECTS</Link>
          <Link to="/resume" className="footerLinks">RESUME</Link>
            <Link to="/blog" className="footerLinks">BLOG POSTS</Link>
          <Link to="/" className="footerLinks">HOME</Link>
        </ul>
      </div>
    )
  }
})
