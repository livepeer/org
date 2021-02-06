import { Box } from "theme-ui";
import Line, { AnimatedLineProps } from "./line";
import { useCallback, useState } from "react";

type Props = {
  lines: AnimatedLineProps[];
};

const CodeStoryAnimation = ({ lines }: Props) => {
  const [staggeredLines, setStaggeredLines] = useState<AnimatedLineProps[]>(
    lines.map((l, i) => {
      if (i === 0) return { ...l, status: "active" };
      return { ...l, status: "queued" };
    })
  );

  const handleDone = useCallback(() => {
    setStaggeredLines((prev) => {
      const nextUpIndex = prev.findIndex(
        (_l, i) => prev[i - 1]?.status === "active"
      );
      return prev.map((line, i, { length }) => {
        switch (line.status) {
          case "queued":
            if (i === nextUpIndex) return { ...line, status: "active" };
            break;
          case "active":
            if (i + 1 === length) return { ...line, status: "done" };
            return { ...line, status: "done", withoutCaret: true };
        }
        return line;
      });
    });
  }, []);

  return (
    <Box sx={{ fontFamily: "mono" }}>
      {staggeredLines.map((line, i) => (
        <Line
          key={`code-story-animation-line-${i}`}
          {...line}
          onDone={handleDone}
        />
      ))}
    </Box>
  );
};

export default CodeStoryAnimation;
