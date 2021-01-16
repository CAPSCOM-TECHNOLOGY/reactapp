import {useEffect} from 'react'
function Home(){
    useEffect(()=>{
        document.title="Capscom technology almora"
    },[])

    return(
        <>
         <h1>Welcome to capscom technology almora</h1>
        </>
    )
}

export default Home