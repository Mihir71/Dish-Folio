import React from 'react';

const Recipe = ({ title, image, recipeUrl }) => {
  return (
    <div className="recipe-card">
      <h2>{title}</h2>
      <img src={image} alt={title} className="recipe-image" />
      <a href={recipeUrl} target="_blank" rel="noopener noreferrer" className="view-recipe-button">
        View Recipe
      </a>
    </div>
  );
};

export default Recipe;
