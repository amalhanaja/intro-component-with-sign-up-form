import * as styledComponents from 'styled-components';

export interface Theme {
  colors: {
    background: string;
    primary: string;
    textPrimary: string;
    textSecondary: string;
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
