import React from 'react';
import './recipe.css'
import recipe1 from './Briyani.jpg'
import book2 from "./pizza.jpg"
import book3 from "./burger.jpg"
import book4 from "./butterchicken.jpg"
import book5 from "./chickentikka.jpg"
import book6 from "./tandoori.jpg"
import book7 from "./meals.jpg"
import book8 from "./vegrice.webp"
import book9 from "./gobi.jpg"




export default function Std()
{
    function search_books() {
		let input = document.getElementById('searchbar').value
		input=input.toLowerCase();
		let x = document.getElementsByClassName('gallery');
		  
		for (var i = 0; i < x.length; i++) { 
			if (!x[i].innerHTML.toLowerCase().includes(input)) {
				x[i].style.display="none";
			}
			else {
				x[i].style.display="list-item";                 
			}
		}
	}
    return (
      
        <div className='body1'>
        <div className='budy'>
                        
                        <h3>RECIPES</h3>
                        <div className='searchbar1'>
                        <input id="searchbar" onkeyup="search_animal()" type="text"
        name="search" placeholder="Search Recipe" onChange={search_books}/>
                        </div>
                    <div class="gallery">
                <a className='aa' >
                    <img src={recipe1} alt="Briyani" width="192" height="262"/>
                </a>
                <div class="desc">Briyani</div>
                </div>
                    
                 <div class="gallery">
                <a className='aa'>
                    <img src={book2} alt="pizza" width="192" height="262"/>
                </a>
                <div class="desc">Pizza</div>
                </div>
                 <div class="gallery">
                <a className='aa' >
                    <img src={book3} alt="Burger" width="192" height="262"/>
                </a>
                <div class="desc">Burger</div>
                </div>
                 <div class="gallery">
                <a className='aa' >
                    <img src={book4} alt="Butter Chicken" width="192" height="262"/>
                </a>
                <div class="desc">Butter Chicken</div>
                </div>
                 <div class="gallery">
                <a className='aa' >
                    <img src={book5} alt="Chicken Tikka" width="192" height="262"/>
                </a>
                <div class="desc">Chicken Tikka</div>
                </div>
                 <div class="gallery">
                <a className='aa' >
                    <img src={book6} alt="Tandoori Chicken" width="192" height="262"/>
                </a>
                <div class="desc">Tandoori Chicken</div>
                </div>
                 <div class="gallery">
                <a className='aa' >
                    <img src={book7} alt="Meals" width="192" height="262"/>
                </a>
                <div class="desc">Meals</div>
                </div>
                 <div class="gallery">
                <a className='aa' >
                    <img src={book8} alt="Veg FriedRice" width="192" height="262"/>
                </a>
                <div class="desc">Veg FriedRice</div>
                </div>
                 <div class="gallery">
                <a className='aa' >
                    <img src={book9} alt="Gobi Manchurian" width="192" height="262"/>
                </a>
                <div class="desc">Gobi Manchurian</div>
                </div>
                    
        </div>
        </div>
        
    )
}