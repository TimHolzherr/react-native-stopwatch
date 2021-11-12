import React, {memo} from 'react';

import LapRow from './LapRow';

type OtherLapsProps = {
  laps: string[];
};

const calculateColor = (index: number, length: number) => {
  if (length < 2) {
    return '#fff';
  }
  if (index === 0) {
    return 'green';
  }
  if (index === length - 1) {
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
        color={calculateColor(index, laps.length)}
      />
    );
  });
  return <>{rows.reverse()}</>;
};

export default memo(OtherLaps);
