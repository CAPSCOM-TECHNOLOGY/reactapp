import User from "./User";
import usersList from "../collections/userList"
import { Switch, useRouteMatch,Route} from "react-router-dom";
import UserDetails from "./UserDetails";
import { useState } from "react";

function Users(){
    let {path,url}=useRouteMatch()

    let [users,setUsers]=useState(usersList)

    const likeHandler=(id)=>{
            let updatedUsers=users.map((user)=>{
                if(user.id===id){
                    return {...user,likes:user.likes+1}
                }
                return user
            })
            setUsers(updatedUsers)
    }

    return(
        <>  
            {users.map((item)=>{
                return <User url={url} item={item} likeHandler={likeHandler}/>
            })}

            <Switch>               
                <Route path={`${path}/:id`} component={UserDetails}></Route>                                    
            </Switch>
        </>
    )
}
export default Users;