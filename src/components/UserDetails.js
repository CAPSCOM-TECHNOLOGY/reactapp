import {useParams} from 'react-router-dom'
import userList from "../collections/userList"
function UserDetails(){
    let {id}=useParams()
    let user_id=parseInt(id)
    let user=userList.filter(item=>item.id===user_id)
    return(
        <>
       Welcome {user[0].name}
        </>
    )
}
export default UserDetails