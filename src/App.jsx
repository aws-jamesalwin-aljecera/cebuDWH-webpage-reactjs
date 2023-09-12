import { Carousel } from "react-bootstrap";
import Navbars from "./components/Navbars";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Tools from "./pages/Tools";

function App() {
    return (
        <>
            <Navbars />
            <Hero />
            <Team />
            <Services />
            <Tools/>
        </>
    );
}

export default App;
