import React from 'react';
import variableCSS from './variables.module.css';
import Section from './Feedback/Section';
import Reader from './Reader/Reader';

const App = () => {
  return (
    <div className={variableCSS.container}>
      <Section title="Please leave feedback" />
      <Reader />
    </div>
  );
};

export default App;
