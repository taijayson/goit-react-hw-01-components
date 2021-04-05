import profile from "./data/user.json"
import statisticalData from "./data/statistical-data.json"
import friends from "./data/friends.json"
import transactions from "./data/transactions.json"

import ProfilePage from "./components/Profile/Profile"
import StatisticPage from "./components/Statistic/Statistic"
import FriendList from "./components/FriendList/FriendList"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"



const App = () =>
  <>
    <ProfilePage name={profile.name} tag={profile.tag} location={profile.location} avatar={profile.avatar} stats={profile.stats} />
    <StatisticPage title="Upload stats" statisticalData={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory transactions={transactions} />
  </>
  
export default App;
