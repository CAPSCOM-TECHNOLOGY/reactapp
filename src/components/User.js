import {Link} from 'react-router-dom'
function User({url,item,likeHandler}){        
    return(
        <>  
        <div>    
        <h1>{item.name}</h1>          
        <h3>{item.likes} likes</h3>  
        <Link to={`${url}/${item.id}`}>Profile</Link> <br/>
        <button type="button" onClick={()=>{
            likeHandler(item.id)}}>Like me</button>
            </div>
        </>
    )
}
export default User;