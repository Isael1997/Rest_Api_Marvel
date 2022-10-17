import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import '../src/Master.css'
import { WavyContainer, WavyLink } from "react-wavy-transitions";
import App from '../App';

const Home = () => <div><App/></div>
const About = () => <div>About</div>
const Contact = () => <div>Contact</div>
const Hello =() => <div>Hello World!!!</div>

function Master() {
    return (
        <BrowserRouter>
            <WavyContainer />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                        
                            <WavyLink to="/" color="#ff44fd">
                                Home
                            </WavyLink>
                            <WavyLink direction="up" to="/about" color="#8f44fd">
                                About
                            </WavyLink>
                            <WavyLink duration={1000} to="/contact" color="#2f44fd">
                                Contact
                            </WavyLink>
                            <WavyLink to='/hello'>Hello</WavyLink>
                            <Outlet />
                            
                        </>
                    }
                className="Nav">
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="hello" element={<Hello/>}/>
                    <Route path="*" element={<>No Match</>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


export default Master;