import { useState } from "react";
// import Signup from "./Components/Signup";
import Getdata from "./Components/Getdata";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* <Signup /> */}
      <Getdata/>
    </div>
  );
}

export default App;
