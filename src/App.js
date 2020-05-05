import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center"><div className="sk-spinner sk-spinner-pulse" /></div>;

// Containers
const PublicHome = React.lazy( () => import( './components/public/home' ) );

function App() {

  return (
    <HashRouter>
      <React.Suspense fallback={ loading() }>
        <Switch>
          {/*
          <Route exact path="/login" name="Login Page" render={ ( props ) => <Login { ...props } /> } />
          <Route exact path="/register" name="Register Page" render={ ( props ) => <Register { ...props } /> } />
          <Route exact path="/404" name="Page 404" render={ ( props ) => <Page404 { ...props } /> } />
          <Route exact path="/500" name="Page 500" render={ ( props ) => <Page500 { ...props } /> } />
          */}
          <Route path="/" name="Home" render={ ( props ) => <PublicHome { ...props } /> } />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );

}

export default App;
