import {
  baseFontSize,
  breakpoints,
  container,
  gridSize,
  gutterWidth,
  outerMargin
} from '../../config/flexgrid'

export const colors = {
  m01: '#ec0059',
  m02: '#ec0059b0',
  g01: `linear-gradient(225deg, #ec0059 0%, #fff4f8 100%)`,
  g02: `linear-gradient(-225deg, #ec0059 0%, #fff4f8 100%)`,

  neu01: '#f5f5f5',
  neu02: '#eaeaea',
  neu03:' #d2d2d2',
  neu04: '#b7b7b7',
  neu05: '#9c9c9c',
  neu06: '#ef8fb2',
  neu07: '#191919'
};

export default {
  flexboxgrid: {
    gridSize, // columns
    gutterWidth: gutterWidth / baseFontSize, // rem
    outerMargin: outerMargin / baseFontSize, // rem
    mediaQuery: 'only screen',
    container: {
      sm: container.sm / baseFontSize, // rem
      md: container.md / baseFontSize, // rem
      lg: container.lg / baseFontSize, // rem
    },
    breakpoints: {
      xs: breakpoints.xs / baseFontSize, // em
      sm: breakpoints.sm / baseFontSize, // em
      md: breakpoints.md / baseFontSize, // em
      lg: breakpoints.lg / baseFontSize, // em
    }
  },
 }