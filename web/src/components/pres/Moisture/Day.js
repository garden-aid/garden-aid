import React from 'react';

export default function Day({ days }) {
  const items = days.day || [];
  console.log(days);
  console.log(items);
  if(days.loading) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <div className="container">
      <h2>Day</h2>
      <ul>

      {items.map((day) => {
        return (<li key={day.hour}>
          {day.hour}pm: {day.moisture}
        </li>)
      })}
      </ul>
    </div>
  );
}
