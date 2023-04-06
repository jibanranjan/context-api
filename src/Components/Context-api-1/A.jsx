
import { useState } from "react";
import B from "./B";
import myContext from "./context";

function A() {
  const [data, setData] = useState("Geekster");
  return (
    <div>
      <h2>A Component</h2>
      <button onClick={()=>{setData("React context")}}>Send Data to D</button>
      <myContext.Provider value={data}>
         <B />
      </myContext.Provider>
    </div>
  );
}

export default A;