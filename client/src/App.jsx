import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`/api/v1/getUser`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      });
  }, []);
  return (
    <main className="">
      <h1>Hii this is app main component</h1>
      <ul>
        {data.map((item, index)=>(
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
