import { useState } from "react";
import User from "./User";
import usersList from "../collections/userList"

function Users(){

    const [users,setUsers]=useState(usersList)

    return(
        <>
            <ol>
                {users.map((item)=>{
                    return <li><User user={item}/></li>
                })}
            </ol>
        </>
    )
}
export default Users;