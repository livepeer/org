import { SxStyleProp } from "theme-ui";
declare module "react" {
  interface Attributes {
    sx?: SxStyleProp;
  }
}
