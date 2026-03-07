// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import {useState} from "react";

import Login from "./components/Login";
import Form from "./components/Form";
import Cards from "./components/Cards";

function App(){

const [page,setPage]=useState("login");
const [user,setUser]=useState("");

return(

<div>

{page==="login" &&
<Login
setPage={setPage}
setUser={setUser}
/>
}

{page==="form" &&
<Form
user={user}
setPage={setPage}
/>
}

{page==="cards" &&
<Cards
user={user}
setPage={setPage}
/>
}

</div>

)

}

export default App;
