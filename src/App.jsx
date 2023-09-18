import Navbars from "./components/Navbars";
import Hero from "./pages/Hero";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Tools from "./pages/Tools";
import Contacts from "./pages/Contacts";
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
    return (
        <>
            <Navbars />
            <Hero />
            <Team />
            <Services />
            <Tools />
            <Contacts />
        </>
    );
}

export default App;
