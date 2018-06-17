import {
  Crosshair,
  LabelSeries,
  MarkSeries,
  XAxis,
  XYPlot,
  YAxis,
} from 'react-vis';

const RiskChart = ({ crosshair, data }) => {
  return (
    <XYPlot
      onMouseLeave={crosshair.onMouseLeave}
      yDomain={[0, 1]}
      xDomain={[0, 1]}
      width={800}
      height={600}
    >
      <XAxis title="Impact" />
      <YAxis title="Probability" />
      <MarkSeries
        data={data}
        onNearestXY={crosshair.onNearestX}
        sizeRange={[5, 15]}
      />
      <LabelSeries allowOffsetToBeReversed={true} animation data={data} />
      <Crosshair values={crosshair.values}>
        <div
          style={{
            background: 'white',
            border: '1px solid #1af',
            color: '#333',
            padding: '0.5rem 1rem',
          }}
        >
          {crosshair.values.map(value => <h3>{value.label}</h3>)}
        </div>
      </Crosshair>
    </XYPlot>
  );
};

export default RiskChart;
