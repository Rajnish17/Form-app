import { useState } from "react";
import Getdata from "./Components/Getdata";
import ShowData from "./Components/ShowData";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Getdata/>
      <ShowData/>
    </div>
  );
}

export default App;
