import { Carousel } from "react-bootstrap";
import Navbars from "./components/Navbars";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Team from "./pages/Team";

function App() {
    return (
        <>
            <Navbars />
            <Hero />
            <Team />
            <Services />
        </>
    );
}

export default App;
