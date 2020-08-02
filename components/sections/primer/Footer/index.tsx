/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { Link } from "react-scroll"

const Footer = () => {
  return (
    <div
      css={css`
        padding: 40px 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
      `}
    >
      <div>Livepeer: A 10-minute Primer</div>
      <Link
        style={{
          textDecoration: "none",
          backgroundImage: "none",
          color: "#000000"
        }}
        to="top"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            cursor: pointer;
          `}
        >
          Back to the top{" "}
          <img
            style={{ margin: "0 0 0 8px" }}
            src="/images/primer/arrow-up.svg"
          />
        </div>
      </Link>
    </div>
  )
}

export default Footer
