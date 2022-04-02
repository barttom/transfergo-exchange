import { MainTheme } from './mainTheme';

declare module 'styled-components' {
  import { MainTheme } from './mainTheme';

  export interface DefaultTheme extends MainTheme {}
}
