import {useEffect} from 'react'
function Contact(){

    useEffect(()=>{
        document.title="Contact us"
    },[])

    return(
        <>
        <h3>Contact page:</h3>
        <p>
            Mobile: 7579237515, 9557167340 <br/>
            Email: capscomtech@gmail.com <br/>
            Website: www.capscom-technology.com <br/>
        </p>
        </>
    )
}

export default Contact