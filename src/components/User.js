import {Link} from 'react-router-dom'
function User({url,item}){        
    return(
        <>      
        <h1>{item.name}</h1>            
        <Link to={`${url}/${item.id}`}>Profile</Link>
        </>
    )
}
export default User;