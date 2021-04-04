import profile from "./data/user.json"
import ProfilePage from "./components/Profile/Profile"

import statisticalData from "./data/statistical-data.json"
import StatisticPage from "./components/Statistic/Statistic"

import friends from "./data/friends.json"
import FriendList from "./components/FriendList/FriendList"

import transactions from "./data/transactions.json"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"

const App = () =>
  <>
    <ProfilePage profile={profile} />
    <StatisticPage title="Upload stats" statisticalData={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </>
  
export default App;
