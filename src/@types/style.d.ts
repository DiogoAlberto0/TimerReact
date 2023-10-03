import 'styled-components'
import { defaultThemes } from '../style/themes/default'

type ThemeType = typeof defaultThemes

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}