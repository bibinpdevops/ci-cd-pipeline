import React from 'react';
import Greeting from './Greeting';

function App() {
  const buildVersion = process.env.REACT_APP_BUILD_VERSION;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hello DevOps 🚀</h1>
      <p>Welcome to your CI/CD practice app.</p>
      <p><strong>Build Version:</strong> {buildVersion}</p>
      <Greeting name="Bibin" />
    </div>
  );
}

export default App;