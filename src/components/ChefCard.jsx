import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram,  } from "@fortawesome/free-brands-svg-icons"

export default function ChefCard ({chief}){
   
  return (
    <div className="ChefCard">
    <img className="ChefImage"   src={chief.img} alt={chief.name} />
        <div className="ChefInfo">
           <h3 className="Name">{chief.name} </h3>
       <p className="norecipe">Recipes: <b>{chief.norecipe}</b></p>
           <p className="cusine">Cusine: <b>{chief.cusine}</b></p>
           <p className="cheficons">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} /> 
                

             </p>
        </div>
    </div>
   
  )
}

