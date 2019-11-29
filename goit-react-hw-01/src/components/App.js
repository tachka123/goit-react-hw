import React from 'react';
import user from './Profile/data.json'
import variableCSS from './variables.module.css'
import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import statisticalData from './Statistics/data.json'
import FriendList from './FriendList/FriendList'
import friendListToRender from './FriendList/data.json'
import Transaction from './Transaction-history/Transaction'
import transactionData from './Transaction-history/data'
function App() {
  return (
    <div className={variableCSS.container}>
      <Profile user={user} />
      <Statistics title={'File Upload'} stats={statisticalData} />
      <FriendList friendList={friendListToRender} />
      <Transaction data={transactionData} />
    </div>
  );
}

export default App;
