import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
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
        <div>
          <div>
            <Link to="/soda">Soda</Link>
          </div>
          <div>
            <Link to="/chips">Chips</Link>
          </div>
          <div>
            <Link to="/sardines">Sardines</Link>
          </div>
        </div>
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