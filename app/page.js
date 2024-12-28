import About from "./about/page";
import Contact from "./contact/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Head from "next/head";
export default function Home() {
  return (
   <>

<About/>
<Skills/>
<Projects/>
<Contact/>
 
   </>
  );
}
