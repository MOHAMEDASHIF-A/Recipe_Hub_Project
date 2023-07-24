import React from 'react'
import "../Tips.css"
import Navbar from '../navbar'
function Veg() {
  return (
    <div className='simp'>
    <Navbar/>
    <div className='struc'>
         <h1 className="recipe">Veg FriedRice</h1>
         <h2>Ingredients</h2>
         <p>
            Rice,
            Vegetables,
            Masala,
           Cooking Oil,
            Tomato Sauce
         </p>
         <h2>Cooking Technique and Tips</h2>
         <p>firstly, in a large kadai heat 2 tbsp oil and stir-fry 2 clove garlic.
also, saute ½ onion and 2 tbsp spring onion until they sweat.<br/>furthermore add vegetables of your choice like ¼ carrot, 2 tbsp cabbage, 2 tbsp peas, 5 beans, ¼ capsicum and ½ tsp salt.
stir fry on high flame without overcooking vegetables.<br/>now add 2 tbsp soy sauce and 1 tbsp vinegar. stir-fry until the sauce is combined well.
keeping the flame on high, add cooked rice.<br/>also, add 1 tsp pepper and ¼ tsp salt. adjust the salt as soy sauce has salt.
stir-fry by mixing well making sure rice grains won't break.<br/>further, add 2 tbsp spring onions and mix well.
finally, enjoy veg fried rice</p>

        
    </div>
    </div>
  )
}

export default Veg 