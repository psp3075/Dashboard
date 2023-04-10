//eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string; //extending palettes from mui
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}
