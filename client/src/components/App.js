import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login'

function App(){
  return (
  
    <BrowserRouter>
    <Switch>
    <Route exact path="/"><Login /> </Route> 
    <Route path="/login"><Login/>  </Route>
  </Switch>
</BrowserRouter> 
  
    )

}
export default App;