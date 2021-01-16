import {useEffect} from 'react'
function About(){

    useEffect(()=>{
        document.title="About us"
    },[])

    return(
        <>
            <h2>About page:</h2>
            <p>
            Global Education Excellence Award Winner 2019
Capscom technology is awarded for Best computer education for programming & software development in almora uttarakhand india at holiday Inn International airport Mumbai.
            </p>
        </>
    )
}
export default About