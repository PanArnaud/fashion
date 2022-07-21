import {createBox, createText, createTheme} from '@shopify/restyle';

const theme = createTheme({
  colors: {
    primary: '#2CB9B0',
    secondary: '#0C0D34',
    danger: '#FF0058',
    text: 'rgba(12, 13, 52, 0.7)',
    white: 'white',
    grey: "#F4F0EF",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    none: 0,
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: 'SFProDisplay-Bold',
      color: 'white',
      textAlign: 'center',
    },
    title1: {
      fontSize: 28,
      fontFamily: 'SFProDisplay-SemiBold',
      color: 'secondary',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'SFProDisplay-SemiBold',
      color: 'secondary',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'SFProDisplay-Regular',
      color: 'text',
    },
    button: {
      fontSize: 15,
      fontFamily: 'SFProDisplay-Medium',
      color: 'text',
    }
  },
  breakpoints: {},
});

export type Theme = typeof theme;

export const Text = createText<Theme>();
export const Box = createBox<Theme>();

export default theme;
