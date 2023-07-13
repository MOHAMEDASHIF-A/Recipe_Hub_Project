import React from 'react';
import './recipe.css'
import book1 from './Briyani.jpg'
import book2 from "./pizza.jpg"
// import book3 from "./book3.png"
// import book4 from "./book4.jpg"
// import book5 from "./book5.jpg"
// import book6 from "./book6.jpg"
// import book7 from "./book7.jpg"
// import book8 from "./book8.webp"
// import book9 from "./book9.jpg"


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
                    
                        <h3>BOOK CATEGORIES</h3>
                        <div className='searchbar1'>
                        <input id="searchbar" onkeyup="search_animal()" type="text"
        name="search" placeholder="Search Books.." onChange={search_books}/>
                        </div>
                    <div class="gallery">
                <a className='aa'>
                    <img src={book1} alt="Briyani" width="192" height="262"/>
                </a>
                <div class="desc">Briyani</div>
                </div>
                    {/* <div class="gallery">
                <a className='aa'>
                    <img src={book1} alt="Briyani" width="192" height="262"/>
                </a>
                <div class="desc">Briyani</div>
                </div> */}
                 <div class="gallery">
                <a className='aa'>
                    <img src={book2} alt="pizza" width="192" height="262"/>
                </a>
                <div class="desc">Pizza</div>
                </div>
                 <div class="gallery">
                <a className='aa' >
                    <img src={book1} alt="Adventures Books" width="192" height="262"/>
                </a>
                <div class="desc">Briyani</div>
                </div>
                    
        </div>
        </div>
        
    )
}