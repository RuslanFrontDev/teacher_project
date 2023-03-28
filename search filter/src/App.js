import { useState } from "react";
import "./App.css";
import Card from './components/Card';
import { userData } from "./data";

const App = () => {
  const [filterData, setFilterData] = useState(userData);
  const inputStyle = {
    padding: 10,
    width: "30%",
    fontSize: "22px",
  };


  const searchHandleChange = (e) => {
    const filteredData = userData.filter((userInfo) => {
     return  userInfo.name.toLowerCase().includes(e.target.value.toLowerCase())
     || userInfo.order.includes(e.target.value)
    })
    setFilterData(filteredData)
  }
  return (
    <div className="App">
      <h1>User Data</h1>
      <input type="search" placeholder="Search...." style={inputStyle} onChange = {searchHandleChange} />
      {filterData.map((item) => {
        return <Card key={item.id} order = {item.order} name = {item.name}/> 
      })}
    </div>
  );
};

export default App;
