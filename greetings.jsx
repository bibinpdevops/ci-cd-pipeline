import React from 'react';

const Greeting = ({ name }) => {
  const hour = new Date().getHours();
  let timeOfDay;

  if (hour < 12) {
    timeOfDay = 'morning';
  } else if (hour < 18) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'evening';
  }

  return (
    <div style={{ marginTop: '20px', fontSize: '1.2rem' }}>
      <p>Hello, {name}! 👋</p>
      <p>Good {timeOfDay}! Hope you're having a great day.</p>
    </div>
  );
};

export default Greeting;