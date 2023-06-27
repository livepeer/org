import { StatProps } from "components/primitives/stat";
import SectionLayout from "components/layouts/section";
import StatsGrid from "components/layouts/stats-grid";
import { nFormatter } from "lib/document-helpers";

const LetTheNumbersTalkSection = ({
  title = null,
  subtitle = null,
  totalActiveNodes,
  totalVolume,
  totalMinutes,
  label1,
  label2,
  label3,
}) => {
  const stats: StatProps[] = [
    {
      title: totalActiveNodes,
      label: label1,
    },
    {
      title: `${nFormatter(totalVolume, 1)} USD`,
      label: label2,
      color: "gradient",
    },

    {
      title: `${nFormatter(totalMinutes, 1)}`,
      label: label3,
    },
  ];

  return (
    <SectionLayout
      title={title ? title : null}
      subtitle={title ? title : null}
      pushSx={{ py: ["80px", null, null, "160px"] }}>
      <StatsGrid stats={stats} />
    </SectionLayout>
  );
};

export default LetTheNumbersTalkSection;
