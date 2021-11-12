import React, {memo} from 'react';

import LapRow from './LapRow';

type OtherLapsProps = {
  laps: string[];
};

const calculateColor = (index: number, laps: string[]) => {
  if (laps.length < 2) {
    return '#fff';
  }
  // TODO: Performance
  const sortedLaps = [...laps].sort();
  let minIndex = laps.indexOf(sortedLaps[0]);
  let maxIndex = laps.indexOf(sortedLaps[sortedLaps.length - 1]);
  if (index === minIndex) {
    return 'green';
  }
  if (index === maxIndex) {
    return 'red';
  }
  return '#fff';
};

const OtherLaps = ({laps}: OtherLapsProps) => {
  const withColor = laps.length > 1;
  const rows = laps.map((lap, index) => {
    return (
      <LapRow
        key={index}
        index={index + 1}
        lap={lap}
        color={calculateColor(index, laps)}
      />
    );
  });
  return <>{rows.reverse()}</>;
};

export default memo(OtherLaps);
