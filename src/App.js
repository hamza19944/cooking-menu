import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import axios from "axios"
import { useEffect, useState } from "react";

function App() {
  const URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  const [newData, setNewData] = useState([])
  useEffect(() => {
    axios.get(URL)
    .then(res => {
      setNewData(res.data.meals)
    }).catch(err => {
      if (err) {
        console.log(err);
      }
    })
  },[])
  return (
    <div className="App">
      <Header />
      <Body mealData={newData}/>
      <Footer/>
    </div>
  );
}

export default App;
