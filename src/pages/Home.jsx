import Herosection from "../components/Herosection";
import JoinUs from "../components/JoinUs";
import Quotation from "../components/Quotation";
import Chef from "../components/Chef";

const Home = () => {
  return (
    <div>
          <div className="herohead"><Herosection /></div>
                <JoinUs />
                <Quotation />
                <Chef />
       
    </div>
  )
}

export default Home