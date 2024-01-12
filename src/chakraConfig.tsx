import { extendTheme } from "@chakra-ui/react"

export const myTheme = extendTheme({
  colors: {
    brand: {
      10: "#00A9FF",
      20: "#89CFF3",
      30: "#92C7CF",
      40: "#AAD7D9",
      50: "#FBF9F1",
      60: "#E5E1DA",
      70: "#DED0B6",
      80: "#BBAB8C",
    },
    currencyCode: {
      negative: "#FF8080", 
      positive: "#79AC78"
    }
  },
})
