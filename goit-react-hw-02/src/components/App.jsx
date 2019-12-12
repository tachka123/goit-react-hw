import React from 'react';
import variableCSS from './variables.module.css';
import Section from './Feedback/Section';

const App = () => {
  return (
    <div className={variableCSS.container}>
      <Section />
    </div>
  );
};

export default App;
