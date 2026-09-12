import materialJSON from "./json_configs/material.json";
import themeAuroraJSON from "./json_configs/themeAurora.json";
import themeEmberJSON from "./json_configs/themeEmber.json";
import themeEmeraldJSON from "./json_configs/themeEmerald.json";
import themeVioletJSON from "./json_configs/themeViolet.json";
import themeCoralJSON from "./json_configs/themeCoral.json";
import midnightEmberJSON from "./json_configs/midnightEmber.json";

import type { Theme } from "@/lib/themes/types/Theme";

function withId(theme: any, fallbackName: string): Theme {
  return {
    id: theme.id || fallbackName,
    name: theme.name || fallbackName,
    font: theme.font,
    styles: theme.styles,
  };
}

export const materialTheme = withId(materialJSON, "materialTheme");
export const themeAurora = withId(themeAuroraJSON, "themeAurora");
export const themeEmber = withId(themeEmberJSON, "themeEmber");
export const themeEmerald = withId(themeEmeraldJSON, "themeEmerald");
export const themeViolet = withId(themeVioletJSON, "themeViolet");
export const themeCoral = withId(themeCoralJSON, "themeCoral");
export const midnightEmber = withId(midnightEmberJSON, "midnightEmber");

export const Themes: Record<string, Theme> = {
  materialTheme,
  themeAurora,
  themeEmber,
  themeEmerald,
  themeViolet,
  themeCoral,
  midnightEmber,
};

export const ThemeArray: Theme[] = Object.values(Themes);

export default ThemeArray;