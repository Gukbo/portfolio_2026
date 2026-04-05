import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar.jsx";
import Welcome from "./components/Welcome.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills.jsx";

function App() {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Navbar />
      <section>
        <Welcome />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Skills />
      </section>
    </>
  );
}

export default App;
