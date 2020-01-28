import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"
kirkhamTheme.overrideStyles = ({ rhythm }, options) => ({
  code: {
    whiteSpace: "pre-wrap",
    display: "block",
    padding: "10px",
    fontFamily: "Fira Code",
  },
})

const typography = new Typography(kirkhamTheme)

export const { scale, rhythm, options } = typography
export default typography
