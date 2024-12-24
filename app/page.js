import About from "./about/page";
import Footer from "./components/footer/page";
import Navbar from "./components/navbar/page";
import Contact from "./contact/page";
import Skills from "./skills/page";
import Projects from "./projects/page";


export default function Home() {
  return (
   <>
<Navbar/>
<About/>
<Skills/>
<Projects/>
<Contact/>
<Footer/> 
   </>
  );
}
