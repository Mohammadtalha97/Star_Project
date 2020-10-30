import React from 'react';
import utils from '../math-utils';
const StartDisplay = (props) => (
  <>
    {utils.range(1, props.stars).map((startId) => (
      <div key={startId} className="star" />
    ))}
  </>
);

export default StartDisplay;
