import {useEffect} from 'react'
import { Link } from 'react-router-dom'
function Home(){
    useEffect(()=>{
        document.title="Capscom technology almora"
    },[])

    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/about-us">About us</Link>
                </li>
                <li>
                    <Link to="/contact-us">Contact us</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
            </ul>
        </nav>
         <h1>Welcome to capscom technology almora</h1>
        </>
    )
}

export default Home