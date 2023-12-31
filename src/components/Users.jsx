import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const json = await res.json();
            setUsers(json)
            //   .then((res) => res.json())
            //     .then((json) => setUsers(json))
        }
        fetchUsers()
    }, [])
    return (
        <div>
            {!users.length && <h3>Loading . . .</h3>}
            <ul>{users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
        </div>
    );
}

export default Users;
