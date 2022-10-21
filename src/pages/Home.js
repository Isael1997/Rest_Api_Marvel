import '../styles/Home.css'
import {Link, NavLink} from 'react-router-dom'



export default function Home() {
    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <div className='row'>
                <div className='col-md'>
                    <li><NavLink to='/pages/page_marvel'>Page Marvel</NavLink></li>
                    <li><NavLink to='/pages/page_rick_and_morty'>Page Rick and Morty</NavLink></li>
                    
                </div>
            </div>
        </div>
    );
}

