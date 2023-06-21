// import PreviousSearches from "../components/PreviousSearches"
// // import RecipeCard from "../components/RecipeCard"
// import TypingText from "../components/typetext"
// const Recipes = () => {
 


//   return (
//     <div>
//           <PreviousSearches /> 
//           <div className="recipescontainer">


//           <h1>  <span  className="head">
//           <TypingText text=" Recipes are the moments we capture in a delicious time capsule." />
//           </span>
//           </h1>


//           <div class="box">
//           <img  className="image"    src="https://th.bing.com/th/id/OIP.wMDVs4VEbhS52cyl3CNqGQHaGE?pid=ImgDet&w=400&h=328&rs=1" alt="Ladoo" />
//           <a class="link" href="view_recipe.html">View Recipe</a>
//           <a class="link" href="recipe_video.html">Recipe Video</a>
// </div>


// <div class="box2">
//           <img  className="image2"   src="https://b.zmtcdn.com/data/pictures/8/18441658/f7e2061d9d6ee4a8b0f77536b6911805.jpg?" alt="Chole Kulche" />
//           <a class="link2" href="view_recipe.html">View Recipe</a>
//           <a class="link2" href="recipe_video.html">Recipe Video</a>
// </div>
             
// <div class="box3">
//           <img  className="image3"   src="https://www.gourmandize.com/uploads/media/aloo_tikki_chaat.jpg?1394660639" alt="Aloo Tikki" />
//           <a class="link3" href="view_recipe.html">View Recipe</a>
//           <a class="link3" href="recipe_video.html">Recipe Video</a>
// </div> 

// <div class="box4">
//           <img  className="image4"   src="https://th.bing.com/th/id/R.3755613d6893f81ed9fff4c96498c38a?rik=UP3V85xRGSWXTA&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2017%2f06%2fOrange-Juice-Best-Wallpaper.jpg&ehk=Q4tWb0gjNv9iiPGRGhXzZhCjn6mf0fZval3k93KKl%2fM%3d&risl=&pid=ImgRaw&r=0" alt="Orange Juice" />
//           <a class="link4" href="view_recipe.html">View Recipe</a>
//           <a class="link4" href="recipe_video.html">Recipe Video</a>
// </div>

// <div class="box5">
//           <img  className="image5"   src="https://fitelo.co/wp-content/uploads/elementor/thumbs/Pav-Bhaji-1-p10mrpsol6m0k06409eo26o7t99l954hcfm9lpf18w.jpg" alt="Pav Bhaji" />
//           <a class="link5" href="view_recipe.html">View Recipe</a>
//           <a class="link5" href="recipe_video.html">Recipe Video</a>
// </div>


// <div class="box6">
//           <img  className="image6"   src="https://www.whiskaffair.com/wp-content/uploads/2014/07/Bhel-Puri-4.jpg" alt="Bhel Puri" />
//           <a class="link6" href="view_recipe.html">View Recipe</a>
//           <a class="link6" href="recipe_video.html">Recipe Video</a>
// </div>


// <div class="box7">
//           <img  className="image7"   src="https://en-media.thebetterindia.com/uploads/2017/03/PAGE-PANIPURI-SLIDER.jpg?compress=true&quality=90" alt="Pani Puri" />
//           <a class="link7" href="view_recipe.html">View Recipe</a>
//           <a class="link7" href="recipe_video.html">Recipe Video</a>
// </div>


// <div class="box8">
//           <img  className="image8"   src="https://th.bing.com/th/id/OIP.lE86OU_WUxoxMh29XqgVTQAAAA?pid=ImgDet&rs=1" alt="Cake" />
//           <a class="link8" href="view_recipe.html">View Recipe</a>
//           <a class="link8" href="recipe_video.html">Recipe Video</a>
// </div>
            
            
//               {/* <RecipeCard /> */}
//               {/* <RecipeCard />
//               <RecipeCard />
//               <RecipeCard />
//               <RecipeCard />
//               <RecipeCard />
//               <RecipeCard /> */}
//           </div>
       
          
//     </div>
//   )
// }

// export default Recipes


import { Link } from 'react-router-dom';


import PreviousSearches from '../components/PreviousSearches';
import TypingText from '../components/typetext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';


const Recipes = () => {
  
  

  return (
    <div>
      <PreviousSearches />
      <div className="recipescontainer">
        <h1>
          <span className="head">
            <TypingText text="Recipes are the moments we capture in a delicious time capsule." />
          </span>
        </h1>

        <div className="box">
          <img
            className="image"
            src="https://th.bing.com/th/id/OIP.wMDVs4VEbhS52cyl3CNqGQHaGE?pid=ImgDet&w=400&h=328&rs=1"
            alt="Ladoo"
          />
          <a className="link" href="https://www.vegrecipesofindia.com/motichoor-ladoo-recipe-motichur-laddu/"  target="blank">
            View Ladoo Recipe
          </a>
          <a className="link" href="https://www.youtube.com/watch?v=M7vbHUOgAKw&ab_channel=CookingShookingHindi"  target="blank">
            Recipe Video
          </a>
          <Link
          to={{ pathname: '/My_Recipes' }}
          
        >
          <FontAwesomeIcon icon={faSave} className="save-icon" />
        </Link>
        
        </div>

        <div className="box2">
          <img
            className="image2"
            src="https://b.zmtcdn.com/data/pictures/8/18441658/f7e2061d9d6ee4a8b0f77536b6911805.jpg?"
            alt="Chole Kulche"
          />
          <a className="link2" href="https://www.indianmasalarecipe.com/chole-kulche-recipe/" target="blank">
            View Chole Kulche Recipe
          </a>
          <a className="link2" href="https://www.youtube.com/watch?v=GEa-mVawvCI&ab_channel=FlavoursOfMyKitchen"  target="blank">
            Recipe Video
          </a>
          <FontAwesomeIcon
            className="save-icon"
            icon={faSave}
           
          />
        </div>

        <div className="box3">
          <img
            className="image3"
            src="https://www.gourmandize.com/uploads/media/aloo_tikki_chaat.jpg?1394660639" alt="Aloo Tikki"
          />
          <a className="link3" href="https://www.vegrecipesofindia.com/aloo-tikki-aloo-pattice-recipe-made-from-leftover-potatoes/"  target="blank">
            View Aloo Tikki Recipe
          </a>
          <a className="link3" href="https://www.youtube.com/watch?v=3mKhDopPXZg&ab_channel=MasalaKitchen"  target="blank">
            Recipe Video
          </a>
          <FontAwesomeIcon
            className="save-icon"
            icon={faSave}
           
          />
        </div>


        <div className="box4">
          <img
            className="image4"
            src="https://th.bing.com/th/id/R.3755613d6893f81ed9fff4c96498c38a?rik=UP3V85xRGSWXTA&riu=http%3a%2f%2fyesofcorsa.com%2fwp-content%2fuploads%2f2017%2f06%2fOrange-Juice-Best-Wallpaper.jpg&ehk=Q4tWb0gjNv9iiPGRGhXzZhCjn6mf0fZval3k93KKl%2fM%3d&risl=&pid=ImgRaw&r=0" alt="Orange Juice"
          />
          <a className="link4" href="https://www.vegrecipesofindia.com/orange-juice-in-mixer-blender/"  target="blank">
            View Orange Juice Recipe
          </a>
          <a className="link4" href="https://www.youtube.com/watch?v=fMN22KFQbtM&ab_channel=RawNaturalLife"  target="blank">
            Recipe Video
          </a>
          <FontAwesomeIcon
            className="save-icon"
            icon={faSave}
           
          />
        </div>


        <div className="box5">
          <img
            className="image5"
            src="https://fitelo.co/wp-content/uploads/elementor/thumbs/Pav-Bhaji-1-p10mrpsol6m0k06409eo26o7t99l954hcfm9lpf18w.jpg" alt="Pav Bhaji"
          />
          <a className="link5" href="https://www.vegrecipesofindia.com/pav-bhaji-recipe-mumbai-pav-bhaji-a-fastfood-recipe-from-mumbai/"  target="blank">
            View Pav Bhaji Recipe
          </a>
          <a className="link5" href="https://www.youtube.com/watch?v=Gbuse4WX01I&ab_channel=YourFoodLab"  target="blank">
            Recipe Video
          </a>
          <FontAwesomeIcon
            className="save-icon"
            icon={faSave}
           
          />
        </div>


        <div className="box6">
          <img
            className="image6"
            src="https://www.whiskaffair.com/wp-content/uploads/2014/07/Bhel-Puri-4.jpg" alt="Bhel Puri" 
          />
          <a className="link6" href="https://www.vegrecipesofindia.com/bhel-puri-mumbai-bhel-puri/" target="blank">
            View Bhel Puri Recipe
          </a>
          <a className="link6" href="https://www.youtube.com/watch?v=mcYP-XTT6QY&ab_channel=OurkitchenLife"  target="blank"> 
            Recipe Video
          </a>
          <FontAwesomeIcon
            className="save-icon"
            icon={faSave}
            
          />
        </div>


        <div className="box7">
          <img
            className="image7"
            src="https://en-media.thebetterindia.com/uploads/2017/03/PAGE-PANIPURI-SLIDER.jpg?compress=true&quality=90" alt="Pani Puri"
          />
          <a className="link7" href="https://www.vegrecipesofindia.com/pani-puri-recipe-mumbai-pani-puri-recipe/"  target="blank">
            View Pani Puri Recipe
          </a>
          <a className="link7" href="https://www.youtube.com/watch?v=Lno88iU9J4w&ab_channel=HebbarsKitchen"  target="blank">
            Recipe Video
          </a>
          <FontAwesomeIcon
            className="save-icon"
            icon={faSave}
           
          />
        </div>


        <div className="box8">
          <img
            className="image8"
            src="https://th.bing.com/th/id/OIP.lE86OU_WUxoxMh29XqgVTQAAAA?pid=ImgDet&rs=1" alt="Cake"
          />
          <a className="link8" href="https://www.vegrecipesofindia.com/recipes/eggfree-cakes/"  target="blank">
            View Cake Recipe
          </a>
          <a className="link8" href="https://www.youtube.com/watch?v=J7bjH5IdMjc&ab_channel=AnyoneCanCookwithDr.Alisha"  target="blank">
            Recipe Video
          </a>
          <FontAwesomeIcon
            className="save-icon"
            icon={faSave}
            
          />
        </div>

       
        
      </div>

      

    </div>
  );
};

export default Recipes;

