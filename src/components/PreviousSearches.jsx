import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const PreviousSearches = () => {
    const searches = ['pizza', 'burger', 'cookies', 'Juice', 'Pav-Bhaji', 'salad', 'ice cream', 'Chole Bhature', 'Chole Kulche' , 'Bhel Puri', 'Dal Pakwan', 'Tomoto Soup' , 'Mango Juice', 'Aloo Roll', 'Pancake', 'Butter Paneer', 'Dal Makani']
  return (
    <div>
        <div className="previoussearches">
       <h2>Previous Searches</h2>
          <div className="previoussearchescontainer ">
            {
                searches.map((search, index) => (  <div key={index} style={{animationDelay: index * 0.1 + "s"}}    className="searchitem">
                    {search}
                </div>  ))
            }
          </div>
          <div className="searchbox">
            <input type="text" placeholder="Serach ...." />
            <button className="btn">
                <FontAwesomeIcon icon={faSearch}   />
            </button>
          </div>
       </div>
    </div>
  )
}

export default PreviousSearches