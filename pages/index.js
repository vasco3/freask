import React, { Component } from 'react';
import '../node_modules/react-vis/dist/style.css';
import RiskChart from '../components/risk-chart';
import { problemMassager } from '../utils/massager';
import problems from '../data/problems';

class Index extends Component {
  render() {
    const data = problemMassager(problems);
    return (
      <div className="App">
        <h1>Freask</h1>
        <h3>Proactive list of exploding problems</h3>

        <p>
          Obsess with how to avoid exploding problems. play the chess and be
          moves ahead.
        </p>
        <RiskChart data={data} />
      </div>
    );
  }
}

export default Index;
