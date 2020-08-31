import React from 'react';
import { Link } from 'react-router-dom';

/** Soda
 * 
 * VendingMachine -> Route /soda -> Soda
 */
function Soda() {
  return (
    <div>
      <h1>SODA WOW</h1>
      <Link to="/">GO BACK</Link>
    </div>
  )
}

export default Soda;