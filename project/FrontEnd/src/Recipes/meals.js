import React from 'react'
import "../Tips.css"
import Navbar from '../navbar'
function Meals() {
  return (
    <div className='simp'>
    <Navbar/>
    <div className='struc'>
         <h1 className="recipe">Meals</h1>
         <h2>Ingredients</h2>
         <p>
            Rice,
            Vegetables,
           Masala,
            Ghee,
            GingerPaste
         </p>
         <h2>Cooking Technique and Tips</h2>
         <p>Get started by boiling 2 cups of water in a covered pot. When the water has reached a boil, add 1/4 teaspoon salt and 1 cup of white rice.<br/>
         Cover the pot and let it simmer for 18-20 minutes. As tempting as it may be, try not to stir or lift the lid while the rice is cooking.<br/>
         Once the rice looks as fluffy as can be, take it off the burner and let it sit for 5 minutes. This cooling process allows the rice to steam and become the soft — but not too soft — consistency that we all strive for.<br/>
         Add more texture to the rice by fluffing it with a fork. Before serving, top it off with 1/2 cup of chopped herbs (we love cilantro and parsley!).</p>

      </div>  

    </div>
  )
}

export default Meals 