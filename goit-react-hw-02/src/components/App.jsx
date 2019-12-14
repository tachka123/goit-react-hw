import React from 'react';
import variableCSS from './variables.module.css';
import Section from './Feedback/Section';
import Reader from './Reader/Reader';
import PhoneBook from './PhoneBook/PhoneBook';

const App = () => {
  return (
    <div className={variableCSS.container}>
      <Section title="Please leave feedback" />
      <Reader />
      <PhoneBook />
    </div>
  );
};

export default App;
