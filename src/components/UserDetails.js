import {useParams} from 'react-router-dom'
import userList from "../collections/userList"
function UserDetails(){
    let {id}=useParams()
    let user_id=parseInt(id)
    let userdata=userList.filter(item=>item.id===user_id)

    return(
        <>
       Hey, I am {userdata[0].name}, thanks for visiting my profile <br/>
       I have {userdata[0].likes} likes. <br/>       
        </>
    )
}
export default UserDetails