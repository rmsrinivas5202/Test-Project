import { Button } from 'bootstrap';
import React from 'react'
import Button from './Button';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Contact from './components/Contact';
export default function Home() {
  return (
   <Switch>
    <Route path="/" component={Button}/>

    
   </Switch>
    
  );
}
