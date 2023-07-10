import "./App.css";

import Dashboard from "./components/Dashboard/Dashboard";
import Sider from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Sider />
        <Dashboard />
        {/* <PieGraph /> */}
        {/* <PieGraphCard/> */}
      </div>
    </>
  );
}

export default App;
