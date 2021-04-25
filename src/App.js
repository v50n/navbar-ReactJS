
import './css/App.css';
import Navbar from './components/Navbar';
import {links} from './data';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Children from './components/Children';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
        {
          links.map((link,index)=> 
          link.url === "/" ? (<Route exact path={link.url} key={index}  children={<Children  key={index} name={link.text} />} />) : (<Route  path={link.url} key={index}  children={<Children  key={index} name={link.text} />} />)
          )
        }
        </Switch>     
      </div>
    </Router>
  );
}


export default App;
