import React, { Component } from 'react';
import '../node_modules/react-vis/dist/style.css';
import RiskChart from '../components/risk-chart';
import { problemMassager } from '../utils/massager';
import problems from '../data/problems';
import tags from '../data/tags';

const TAGS_VALUES = Object.values(tags);

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crosshairValues: [],
      filterTag: 'none',
    };
    this.onFilterChange = this.onFilterChange.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._onNearestX = this._onNearestX.bind(this);
  }
  onFilterChange(event) {
    this.setState({ filterTag: event.target.name });
  }

  _onNearestX(value) {
    this.setState({ crosshairValues: [value] });
  }
  _onMouseLeave() {
    this.setState({ crosshairValues: [] });
  }

  render() {
    const data = problemMassager(problems, this.state.filterTag);
    return (
      <div className="App">
        <h1>Freask</h1>
        <h3>Proactive list of exploding problems</h3>

        <p>
          Obsess with how to avoid exploding problems. play the chess and be
          moves ahead.
        </p>

        <RiskChart
          crosshair={{
            onMouseLeave: this._onMouseLeave,
            onNearestX: this._onNearestX,
            values: this.state.crosshairValues,
          }}
          data={data}
        />
        {['none', ...TAGS_VALUES].map(tag => (
          <button name={tag} key={tag} onClick={this.onFilterChange}>
            {tag}
          </button>
        ))}
      </div>
    );
  }
}

export default Index;
