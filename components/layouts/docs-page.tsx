/** @jsx jsx */
import { jsx } from "theme-ui";

import Head, { HeadProps } from "components/primitives/head";

type Props = {
  headProps?: HeadProps;
};

const DocsPageLayout: React.FC<Props> = ({ children, headProps }) => (
  <div sx={{ overflowX: "hidden" }}>
    <Head {...headProps} />
    {children}
  </div>
);

export default DocsPageLayout;
