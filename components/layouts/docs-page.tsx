import Head, { HeadProps } from "components/primitives/head";

type Props = {
  headProps?: HeadProps;
};

const DocsPageLayout: React.FC<Props> = ({ children, headProps }) => (
  <>
    <Head {...headProps} />
    {children}
  </>
);

export default DocsPageLayout;
