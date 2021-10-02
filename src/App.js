import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Header from "./components/Header/Header";
import Inventory from "./components/Invertory/Inventory";
import Main from "./components/Main/Main";
import NotFound from "./components/Not-Found/NotFound";
import Orders from "./components/Orders/Orders";


// Main component
function App() {

  const [valu , setValue] = useState('');
  const getinputValue = (e) => {
    const valu = e.target.value;
    setValue(valu);

  }

  return (
    <Router> 
    <Header fnc={getinputValue}> </Header>

      <Switch>

        <Route path='/home'>
           <Main inputValue={valu}></Main>
        </Route>

        <Route path='/orders'>
           <Orders inputValue={valu}></Orders>
        </Route>

        <Route path='/inventory'>
           <Inventory inputValue={valu}></Inventory>
        </Route>

        <Route exact path='/'>
           <Main inputValue={valu}></Main>
        </Route>

        <Route exact path='*'>
           <NotFound inputValue={valu}></NotFound>
        </Route>


       </Switch>      
    </Router>
  );
}

export default App;
