import { MainTheme } from './mainTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends MainTheme {}
}
