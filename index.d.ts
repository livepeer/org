import { SxStyleProp } from "theme-ui";

declare module "react" {
  interface Attributes {
    sx?: SxStyleProp;
  }
}

declare module "*.gql" {
  const content: any;
  export default content;
}
