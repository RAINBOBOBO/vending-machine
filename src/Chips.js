import { Link } from 'react-router-dom';
import React, { useState } from 'react';

/** Chips
 * 
 * State:
 * - bagsEaten: count of bags eaten
 * 
 * VendingMachine -> Route /chips -> Chips
 */
function Chips() {
  const [bagsEaten, setBagsEaten] = useState(0);

  function eatBag() {
    setBagsEaten(b => b + 1);
  }

  return (
    <div>
      <h1>Chips COOL</h1>
      <button onClick={eatBag} >Eat bag!</button>
      <p>Bags eaten: {bagsEaten}</p>
      <Link to="/">GO BACK</Link>
    </div>
  )
}

export default Chips;