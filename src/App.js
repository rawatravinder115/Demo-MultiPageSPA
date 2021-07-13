import {Route} from 'react-router-dom';

import MainHeader from './components/MainHeader';
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

function App() {
  return (
    <div>
       <MainHeader/>
      <Route path="./welcome">
        <Welcome />
      </Route>
      <Route path="./products">
        <Products/>
      </Route>
    </div>
  );
}

export default App;

// our-domain.com/welcome => welcome component
// our-domain.com/products => products Component 

// we have to bind the <App /> in index.js file with <BrowserRoute>