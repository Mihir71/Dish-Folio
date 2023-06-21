import React, { useState } from 'react';
import TypingText from '../components/typetext';



function Share_Your_Dish() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dishName, setDishName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // Access form values using the state variables

    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email);
    console.log('Dish Name:', dishName);
    console.log('Ingredients:', ingredients);
    console.log('Instructions:', instructions);

    // Reset form fields after submission
    setName('');
    setPhone('');
    setEmail('');
    setDishName('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="share-your-dish-container">

      <h1>
          <span className="heads">
            <TypingText text="Food is meant to be shared and enjoyed together. Share your dish and create memories around the table that will be cherished forever." />
          </span>
        </h1>
      <h2>Share Your Dish</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dishName">Dish Name:</label>
          <input
            type="text"
            id="dishName"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Share_Your_Dish;

