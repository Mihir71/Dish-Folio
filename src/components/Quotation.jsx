import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

const Quotation = () => {
  return (
    <div className="Quote">
        <p className="Quote-text"><FontAwesomeIcon icon = {faQuoteLeft}/>Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors - it's how you combine them that sets you apart.</p>
        <p className="text-author">-Wolfgang Puck</p>
    </div>
  )
}

export default Quotation