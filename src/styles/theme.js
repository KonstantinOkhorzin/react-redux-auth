export const theme = Object.freeze({
  colors: {
    primary: '#F0F7FF',
    secondary: '#9c27b0',
    accent: '#01579b',
    warning: '#FFF9EB',
    text: {
      primary: '#1A2027',
      secondary: '#3E5060',
    },
    background: '#fff',
  },
  spacing: (value = 0) => `${value * 4}px`,
  fonts: {
    body: 'system ui, sans-serif',
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    extraSmall: '12px',
    small: '14px',
    medium: '16px',
    large: '24px',
    extraLarge: '32px',
    giant: '48px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '4px',
    round: '50%',
  },
  shadows: {
    small: '0 1px 3px rgba(0, 0, 0, 0.12)',
    regular: '0 2px 5px rgba(0, 0, 0, 0.12)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.12)',
  },
  animation: {
    cubicBezier: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '992px',
  },
});
