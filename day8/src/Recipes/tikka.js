import React from 'react'
import "../Tips.css"
import Navbar from '../navbar'
function Tikka() {
  return (
    <div className='simp'>
    <Navbar/>
    <div className='struc'>
         <h1 className="recipe">Chicken Tikka</h1>
         <h2>Ingredients</h2>
         <ul>
            <li>Chicken</li>
            <li>Yogurt</li>
            <li>Masala</li>
            <li>Mustard Oil</li>
            <li>GingerPaste</li>
         </ul>
         <h2>Cooking Technique and Tips</h2>
         <p>Place the chicken pieces into a bowl with yogurt, garlic, ginger, lemon juice, coriander, turmeric, cumin, paprika, chilli powder, cinnamon, salt and pepper.
         <br/>Mix together, cover and marinate in the fridge for 2-3 hours.<br/>Thread onto skewers, then brush with oil.<br/>
         Cook on a griddle plate, under the grill (broiler) or on the barbecue for 8-10 minutes until cooked through.<br/>Serve with a sprinkling of freshly chopped coriander.</p>

        

    </div>
    </div>
  )
}

export default Tikka