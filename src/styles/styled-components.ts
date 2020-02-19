import * as styledComponents from 'styled-components';

export interface Theme {
  colors: {
    primaryRed: string;
    primaryGreen: string;
    accentBlue: string;
    darkBlue: string;
    grayishBlue: string;
    white: string;
  };
  fontSize: {
    base: string;
  };
}
const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export {
  css, createGlobalStyle, keyframes, ThemeProvider,
};
export default styled;
