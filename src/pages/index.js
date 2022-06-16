import Banner from "../components/banner/Banner";
import Navegation from "../components/navegation/Navegation";

export default function Home() {
    return (
    <div className="pageContainer">
      <Navegation />
      <Banner />
    </div>
    )
  }