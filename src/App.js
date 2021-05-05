import React from 'react';
import './App.css';
import ClientComponent from "./ClientComponent";

function App() {
  const [loadClient,setLoadClient] = React.useState(true);

  return (
    <div>
       <button onClick={()=>setLoadClient(prevState=> !prevState)}>
           STOP client
       </button>
        {loadClient ? <ClientComponent/> : null}
    </div>
  );
}

export default App;
