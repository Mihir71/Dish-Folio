import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Sidebar = ({links, close}) => {
  const location = useLocation()
  return (
    <div className="Sidebar"  onClick={close}>
         {
          links.map(link => (
            <Link to={link.path} className={location.pathname === link.path}      href="#!" key={link.name}>
                <FontAwesomeIcon icon={link.icon} />
                {link.name}
                </Link>
          ))
        }
        </div>
  )
}

export default Sidebar
