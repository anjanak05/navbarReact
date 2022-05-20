import logo from "./logo.svg";
import "./App.css";
import { Logo, Links, Button } from "../src/components/navbarHeader";

function App() {
  let name = [
    {links:"Services"}, 
    {links:"Projects"}, 
    {links:"About"},
  ];

  return (
    <div className="App">
      <div className="App-header">
        <Logo></Logo>
        {name.map((user) => (
          <div className="App-Links" key={user.links} >
            <Links{...user}/>
          </div>
        ))}

        <Button></Button>
      </div>
    </div>
  );
}

export default App;
