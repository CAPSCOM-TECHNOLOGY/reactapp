import User from "./User";
import usersList from "../collections/userList"
import { Switch, useRouteMatch,Route} from "react-router-dom";
import UserDetails from "./UserDetails";

function Users(){
    let {path,url}=useRouteMatch()
    return(
        <>  
            {usersList.map((item)=>{
                return <User url={url} item={item}/>
            })}

            <Switch>               
                <Route path={`${path}/:id`} component={UserDetails}></Route>                                    
            </Switch>
        </>
    )
}
export default Users;