function User({user}){
    let url="user/"+user.id
    return(
        <>  
        Name: {user.name} <br/>
        Age: {user.age} <br/>
        Address: {user.address}<br/>
        <a href={url}>Profile</a>        
        </>
    )
}
export default User;