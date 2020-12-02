import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import Table from '../components/Table';
import Legend from '../components/Legend';
import { startAnalysis, resetResults } from '../modules/genee';

const Entrance = ({ dispatch, results }) => {

  useEffect(() => { }, [results]);

  const lables = getLabels();

  return (
    <div style={{ overflow: 'hidden' }}>
      <Navigation path="entrance" />
      <div className="entrance-content">
        <div className="analysis-commands">
          <button onClick={() => dispatch(startAnalysis(results))}>Start Analysis</button>
          <button onClick={() => dispatch(resetResults())}>Reset</button>
        </div>
        <div className="analysis-results">
          <Table data={results} lables={lables} />
          <div className="analysis-legend">
            <Legend lables={lables} />
          </div>
        </div>
      </div>
    </div>
  );
};

const s2p = state => ({
  results: state.genee.results
});
const getLabels = () => {
  return [{ value: 0, lable: 'No Result', color: "#ebf0e6" },
  { value: 1, lable: 'KWS_KERIDOS', color: "#70D6FF" },
  { value: 2, lable: 'KWS_KERIDOS_YG', color: "#fc9003" },
  { value: 3, lable: 'Unknown', color: "#fcdf03" },
  { value: 4, lable: 'Error', color: "#615f4d" },
];
};

export default connect(s2p)(Entrance);
