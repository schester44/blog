import React from "react"
import { Link } from "gatsby"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { rhythm } from "../utils/typography"
import "./layout.css"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 style={{ margin: 0, paddingBottom: 3, lineHeight: 1 }}>
          <Link
            style={{
              boxShadow: `none`,
              borderBottom: `none`,
              color: `inherit`,
              color: `#000`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 style={{ margin: 0, marginTop: 27, lineHeight: 1 }}>
          <Link
            style={{
              boxShadow: `none`,
              borderBottom: `none`,
              color: `inherit`,
              color: `#000`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
        }}
      >
        <header style={{ marginBottom: rhythm(1.5) }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {header}
            <div>
              <Link style={{ marginRight: 14, border: "none" }} to="https://twitter.com/schester44">
                <FaTwitter />
              </Link>
              <Link style={{ border: "none" }} to="https://github.com/schester44">
                <FaGithub />
              </Link>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
