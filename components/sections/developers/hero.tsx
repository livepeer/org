import IconHero from "components/layouts/icon-hero";
import IllustratedBackgroundBox from "components/layouts/illustrated-background-box";
import CodeEditorBox from "components/layouts/code-editor-box";
import Typist from "react-typist";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";

const CodeTyper = () => {
  return (
    <Typist cursor={{ show: false }} avgTypingDelay={8}>
      <SyntaxHighlighter language="jsx" style={docco}>
        {`import { Broadcast } from '@livepeer/react'

function BroadcastComponent() {
  return (
    <Broadcast streamKey="0800-itva-mtfa-ah6l" />
  )
}
`}
      </SyntaxHighlighter>
    </Typist>
  );
};

const DevelopersHero = ({ title, subtitle, background }) => {
  return (
    <IconHero
      withAnimation
      title={title}
      subtitle={subtitle}
      background={background}
      cta={{
        isExternal: true,
        href: "https://docs.livepeer.org",
        label: "Read the docs ↗",
      }}
      illustration={
        <IllustratedBackgroundBox
          pushSx={{
            height: ["360px", "282px"],
            mt: "48px",
            width: "100%",
            maxWidth: "700px",
          }}
          pushContentSx={{
            p: 0,
            height: ["376px", "298px"],
            boxShadow: "magical",
            mt: "-48px",
          }}>
          <CodeEditorBox
            tabs={[{ label: "index.tsx", isSelected: true }]}
            sx={{
              pre: { bg: "black !important" },
              bg: "black !important",
              height: "100%",
            }}>
            <CodeTyper />
          </CodeEditorBox>
        </IllustratedBackgroundBox>
      }
    />
  );
};

export default DevelopersHero;
