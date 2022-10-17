import { WavyLink } from 'react-wavy-transitions';

export const NavBar = () => (
    <NavBar>
        <WavyLink to="/" color="#ff44fd">
            Home
        </WavyLink>
        <WavyLink direction="up" to="/about" color="#8f44fd">
            About
        </WavyLink>
        <WavyLink duration={1000} to="/contact" color="#2f44fd">
            Contact
        </WavyLink>

    </NavBar>
);