import Typography from "typography"

const config = {
  title: "Wordpress Theme 2016",
  baseFontSize: "22px",
  baseLineHeight: 1.75,
  scaleRatio: 2.5,
  headerFontFamily: ["Ubuntu", "system-ui", "sans-serif"],
  bodyFontFamily: ["Ubuntu", "system-ui", "sans-serif"],
  bodyColor: "#3A465D",
  headerWeight: 700,
  bodyWeight: 100,
  boldWeight: 700
}

config.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`
    }
  }
}

const typography = new Typography(config)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
