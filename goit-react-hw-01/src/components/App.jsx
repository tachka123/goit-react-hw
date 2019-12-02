import React from 'react'
import user from './Profile/data.json'
import variableCSS from './variables.module.css'
import Profile from './Profile/Profile.jsx'
import Statistics from './Statistics/Statistics.jsx'
import statisticalData from './Statistics/data.json'
import FriendList from './FriendList/FriendList.jsx'
import friendListToRender from './FriendList/data.json'
import Transaction from './Transaction-history/Transaction.jsx'
import transactionData from './Transaction-history/data'

function App () {
  return (
    <div className={variableCSS.container}>
      <Profile user={user} />
      <Statistics title='File Upload' stats={statisticalData} />
      <FriendList friendList={friendListToRender} />
      <Transaction data={transactionData} />
    </div>
  )
}

export default App
