import React from 'react';
import './recipe.css'
import recipe1 from './mango.jpg'
import recipe2 from "./mint.jpg"
import recipe3 from "./soda.jpg"
import recipe4 from "./halwa.jpg"
import recipe5 from "./tikka.jpg"
import recipe6 from "./ragi.jpg"
import recipe7 from "./lemon.webp"
import recipe8 from "./keema.jpg"
import recipe9 from "./fish.jpg"
import Navbar from './navbar';




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
      <>
      <Navbar/>
        <div className='body1'>
        <div className='budy'>
                        
                        <h3>RECIPES</h3>
                        <div className='searchbar1'>
                        <input id="searchbar" onkeyup="search_animal()" type="text"
        name="search" placeholder="Search Recipe" onChange={search_books}/>
                        </div>
                        <h1 className='season'>Summer Special Recipes</h1>
                    <div class="gallery">
                <a className='aa' href='/briyani'>
                    <img src={recipe1} alt="mango" width="192" height="262"/>
                </a>
                <div class="desc">Kesar Mango Lassi</div>
               
                </div>
                    
                 <div class="gallery">
                <a className='aa' href='/Pizza'>
                    <img src={recipe2} alt="mint" width="192" height="262"/>
                </a>
                <div class="desc">Sweet Mint Lassi</div>
                </div>
                 <div class="gallery">
                <a className='aa' href='/Burger'>
                    <img src={recipe3} alt="soda" width="192" height="262"/>
                </a>
                <div class="desc">Masala Soda</div>
                </div>
                <h1 className='season'>Winter Special Recipes</h1>
                 <div class="gallery">
                <a className='aa' href='/Butter'>
                    <img src={recipe4} alt="Butter Chicken" width="192" height="262"/>
                </a>
                <div class="desc">Badam Halwa</div>
                </div>
                 <div class="gallery">
                <a className='aa' href='/Tikka'>
                    <img src={recipe5} alt="Tikka" width="192" height="262"/>
                </a>
                <div class="desc">Hot kand Tikkes</div>
                </div>
                 <div class="gallery">
                <a className='aa' href='/Tandoori'>
                    <img src={recipe6} alt="ragi" width="192" height="262"/>
                </a>
                <div class="desc">Ragi Roti</div>
                </div>
                
                <h1 className='season'> Special Recipes</h1>
                 <div class="gallery">
                <a className='aa' href='/Meals'>
                    <img src={recipe7} alt="Lemon Chicken" width="192" height="262"/>
                </a>
                <div class="desc">Lemon Chicken</div>
                </div>
                 <div class="gallery">
                <a className='aa' href='/Veg'>
                    <img src={recipe8} alt="keema biryani" width="192" height="262"/>
                </a>
                <div class="desc">Keema Biryani</div>
                </div>
                 <div class="gallery">
                <a className='aa' href='/Gobi'>
                    <img src={recipe9} alt="Fish fry" width="192" height="262"/>
                </a>
                <div class="desc">Chettinad Fish Fry</div>
                </div>
                    
        </div>
        </div>
        </>
    )
}