import React from "react"
import { css } from "@emotion/core"

const Footer = () => (
  <div
    css={css`
      text-align: center;
      height: 20px;
    `}
  >
    <h4>© Max Monis {new Date().getFullYear()}</h4>
  </div>
)

export default Footer
