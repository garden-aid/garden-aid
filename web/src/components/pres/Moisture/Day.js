import React from 'react';
import { Line } from 'react-chartjs-2';

export default function Day({ days }) {
  const items = days.day || [];

  if (days.loading) {
    return (
      <p>Loading...</p>
    );
  }

  const data = {
    labels: items.map((d) => d.hour, []),
    datasets: [{
      label: 'Moisture',
      fill: true,
      data: items.map((d) => d.moisture, []),
    }],
  };

  return (
    <div className="container">
      <h2>Day</h2>
      <div className="row">
        <div className="col-md-6">
          <Line data={data} />
        </div>
      </div>
    </div>
  );
}
