import { Route, Switch, Redirect } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book

// our-domain.com/welcome => welcome component
// our-domain.com/products => products Component
/* dynamic ROute */
// our-domian.com/product-detail/any-value

// we have to bind the <App /> in index.js file with <BrowserRoute>
// when we use react routes its behaviour to fetch all relaed data by using switch we prevent it 
// insures that the exact api should be hit
// prevent the browser default behaviour pf refresh and give power to apply css on it  when clivk to the link bcoz it losses the state.
