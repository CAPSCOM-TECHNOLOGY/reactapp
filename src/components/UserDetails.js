import { useParams } from "react-router-dom"
import usersList from "../collections/userList"


function UserDetails(){
    let {id}=useParams()
    id=parseInt(id)
    const user=usersList.filter(item=>item.id===id)    
    return(
        <>
            <h1>Hii, I am {user[0].name}</h1>
        </>
    )
}
export default UserDetails