import React from 'react'

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
    export default search_books
