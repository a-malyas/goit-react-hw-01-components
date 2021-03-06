import React from 'react';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import FriendList from './components/friendList/FriendList';
import TransactionHistory from './components/transaction/TransactionHistory';
import user from './user.json';
import statisticDatas from './statistical-data.json';
import friendDatas from './friends.json';
import transactions from './transactions.json';
import './App.css';

function App() {
  return (
    <div>
      <Profile
        avatar = {user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers = {user.stats.followers}
        views =  {user.stats.views}
        likes = {user.stats.likes}
      />

      <div className="box">
        <Statistics title="Upload stats" stats={statisticDatas} />
      </div>

      <div className="box">
        <FriendList friends={friendDatas} />
      </div>

      <div className="box">
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}

export default App;
