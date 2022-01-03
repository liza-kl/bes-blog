/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "footerColor",
    }}
  >
    <div className="container">
      <p>
        This blog was created with love{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by <Link to="/">li54.dev</Link>
      </p>
    </div>
  </footer>
)

export default Footer
