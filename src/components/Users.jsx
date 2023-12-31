import { useEffect } from "react";

function Users() {
    useEffect(() => { 
        console.log("Mounted");
    },[])
    return (
        <div>
            <h1>users</h1>
        </div>
    );
}

export default Users;
