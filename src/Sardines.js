import React from 'react';
import { Link } from 'react-router-dom';

/** Sardines
 * 
 * VendingMachine -> Route /sardines -> Sardines
 */
function Sardines() {
  return (
    <div>
      <h1>You don't eat sardines, sardines eat you!</h1>
      <Link to="/">GO BACK</Link>
    </div>
  )
}

export default Sardines;