import { XYPlot, XAxis, YAxis, LabelSeries, MarkSeries } from 'react-vis';

const RiskChart = ({ data }) => {
  return (
    <XYPlot yDomain={[0, 1]} xDomain={[0, 1]} width={800} height={600}>
      <XAxis title="Impact" />
      <YAxis title="Probability" />
      <MarkSeries sizeRange={[5, 15]} data={data} />
      <LabelSeries data={data} />
    </XYPlot>
  );
};

export default RiskChart;
