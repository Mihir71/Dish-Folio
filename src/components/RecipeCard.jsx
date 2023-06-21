// import Recipe from "./CustomImage"

const RecipeCard = () => {
//   return (
//     <div className="recipecard">
//       <img src="https://dragon.img2go.com/download-file/c93c5c00-5981-49c7-87bc-784b1c896506/f99b4487-da10-4260-b1b3-e101457ba8ba" alt="" />
//     </div>
//   )
// }


const recipes = [
  {
    "title": "Pizza",
    "image": "https://recipes.timesofindia.com/thumb/53351352.cms?imgsize=151967&width=800&height=800",
    "recipeUrl": "https://example.com/recipes/pizza"
  },
  {
    "title": "Burger",
    "image": "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS.jpg",
    "recipeUrl": "https://example.com/recipes/burger"
  },
  {
    "title": "Pasta",
    "image": "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?cs=srgb&dl=basil-blur-close-up-1437267.jpg&fm=jpg",
    "recipeUrl": "https://example.com/recipes/pasta"
  },
  {
    "title": "Salad",
    "image": "https://www.tasteofhome.com/wp-content/uploads/2017/10/exps6498_MRR133247D07_30_5b_WEB-2.jpg",
    "recipeUrl": "https://example.com/recipes/salad"
  },
  {
    "title": "Sushi",
    "image": "https://th.bing.com/th/id/R.7d1ae23118b4b677e031628e4b4b3e05?rik=N988lqHu2JPTSA&riu=http%3a%2f%2fwww.readersdigest.ca%2fwp-content%2fuploads%2f2011%2f11%2fjapanese-sushi-rolls.jpg&ehk=eYdY2WFHz%2fC8vb%2fQT0P8jnjrP941mY9BvoDxCDEciR8%3d&risl=&pid=ImgRaw&r=0",
    "recipeUrl": "https://example.com/recipes/sushi"
  },
  {
    "title": "Tacos",
    "image": "https://example.com/tacos.jpg",
    "recipeUrl": "https://example.com/recipes/tacos"
  },
  {
    "title": "Curry",
    "image": "https://example.com/curry.jpg",
    "recipeUrl": "https://example.com/recipes/curry"
  },
  {
    "title": "Steak",
    "image": "https://example.com/steak.jpg",
    "recipeUrl": "https://example.com/recipes/steak"
  },
  {
    "title": "Sushi",
    "image": "https://example.com/sushi.jpg",
    "recipeUrl": "https://example.com/recipes/sushi"
  },
  {
    "title": "Ice Cream",
    "image": "https://example.com/ice-cream.jpg",
    "recipeUrl": "https://example.com/recipes/ice-cream"
  }
];


return (
  <div className="app">
    {/* {recipes.map((recipe, index) => (
      // <Recipe
      //   key={index}
      //   title={recipe.title}
      //   image={recipe.image}
      //   recipeUrl={recipe.recipeUrl}
      // />
    ))} */}
  </div>
);
};

export default RecipeCard