import profile from "./data/user.json"
import ProfilePage from "./components/Profile/Profile"

import statisticalData from "./data/statistical-data.json"
import StatisticPage from "./components/Statistic/Statistic"

const App = () =>
  <>
    <ProfilePage profile={profile} />;
    <StatisticPage title="Upload stats" statisticalData={statisticalData} />;
  </>
  
export default App;
