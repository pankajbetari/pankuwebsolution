import Image from "next/image";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
import Aboutcom from "./component/Aboutcom";
import Servicecom from "./component/Servicecom";
import Technolog from "./component/Technolog";
import Experian from "./component/Experian";
import Customerreview from "./component/Customerreview";


export default function Home() {
  return (
    <>
      <Header />
      {/* banner section */}
      <Banner />

      {/* Company detail secttion */}
      <Aboutcom />


      {/* Company  service detail secttion */}
      <Servicecom />



      {/* Company  Technology detail secttion */}
      <Technolog />

      {/* Company  Technology detail secttion */}
      <Experian/>

      
      {/* Company  Customer Review detail secttion */}
      {/* <Customerreview/> */}

      <Footer />
    </>
  );
}
