import React from 'react';
import { Route } from "react-router-dom";
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';

/** VendingMachine
 * 
 * App -> VendingMachine -> (Soda, Chips, Sardines)
 */
function VendingMachine() {
  return (
    <>
      <Route exact path="/">
        <h1>Welcome!</h1>
      </Route>
      <Route exact path="/soda">
        <Soda />
      </Route>
      <Route exact path="/chips">
        <Chips />
      </Route>
      <Route exact path="/sardines">
        <Sardines />
      </Route>
    </>
  )
}

export default VendingMachine;