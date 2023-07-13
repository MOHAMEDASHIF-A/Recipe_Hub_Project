import React, { useState } from 'react';
import Navbar from './navbar';
import "./upload.css"
const Upload = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredient1, setIngredient1] = useState('');
  const [ingredient2, setIngredient2] = useState('');
  const [ingredient3, setIngredient3] = useState('');
  const [ingredient4, setIngredient4] = useState('');
  const [ingredient5, setIngredient5] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the recipe data (e.g., send it to an API)
    console.log({
      recipeName,
      ingredient1,
      ingredient2,
      ingredient3,
      ingredient4,
      ingredient5,
      instructions
    });

    // Clear the form
    setRecipeName('');
    setIngredient1('');
    setIngredient2('');
    setIngredient3('');
    setIngredient4('');
    setIngredient5('');
    setInstructions('');
  };

  return (
    <div className='imgi'>
    <Navbar/>
    <br/>
    <br/>
    <br/>
    <div className='upload-container '>

    <form onSubmit={handleSubmit}>
      <h1 className='upload-heading' > Add Recipe</h1>
      <label className='form-label' htmlFor="recipeName">Recipe Name:</label>
      <input
      className='input-field'
        type="text"
        id="recipeName"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        required
      />

      <label className='form-label' htmlFor="ingredients">Ingredient 1:</label>
      <textarea
      className='textarea-field'
        id="ingredients"
        value={ingredient1}
        onChange={(e) => setIngredient1(e.target.value)}
        required
      ></textarea>
      <label className='form-label' htmlFor="ingredients">Ingredient 2:</label>
      <textarea
      className='textarea-field'
        id="ingredients"
        value={ingredient2}
        onChange={(e) => setIngredient2(e.target.value)}
        required
      ></textarea>
      <label className='form-label' htmlFor="ingredients">Ingredient 3:</label>
      <textarea
      className='textarea-field'
        id="ingredients"
        value={ingredient3}
        onChange={(e) => setIngredient3(e.target.value)}
        required
      ></textarea>
      <label className='form-label' htmlFor="ingredients">Ingredient 4:</label>
      <textarea
      className='textarea-field'
        id="ingredients"
        value={ingredient4}
        onChange={(e) => setIngredient4(e.target.value)}
        required
      ></textarea>
      <label className='form-label' htmlFor="ingredients">Ingredient 5:</label>
      <textarea
      className='textarea-field '
        id="ingredients"
        value={ingredient5}
        onChange={(e) => setIngredient5(e.target.value)}
        required
      ></textarea>

      <label className='form-label' htmlFor="instructions">Cooking Tips and Technique:</label>
      <textarea
      className='textarea-field '
        id="instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
      ></textarea>

      <button className="submit-button" type="submit">Upload</button>
    </form>
    </div>
    </div>
  );
};

export default Upload;
