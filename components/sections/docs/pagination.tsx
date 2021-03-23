/** @jsx jsx */

import { jsx, Box } from "theme-ui";
import NextStep from "./next-step";
import PreviousStep from "./previous-step";

type Step = {
  title: string;
  href: string;
  label?: string;
};

type Props = {
  nextStep: Step;
  previousStep: Step;
};

const Pagination = ({ previousStep, nextStep }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
      {previousStep && (
        <PreviousStep
          href={previousStep.href}
          title={previousStep.title}
          label={previousStep.label ? previousStep.label : "Previous"}
        />
      )}
      {nextStep && (
        <NextStep
          href={nextStep.href}
          title={nextStep.title}
          label={nextStep.label ? nextStep.label : "Next"}
        />
      )}
    </Box>
  );
};

export default Pagination;
