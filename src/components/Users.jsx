import { useEffect, useState } from "react";
import Counter from "./Counter";

function Users() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(false)
    const [id, setId] = useState("")
    useEffect(() => {
        const controller = new AbortController()
        const fetchUsers = async () => {
            try {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/photos/${id}`,
                    { signal: controller.signal }
                );
                const json = await res.json();
                setUsers(json)
                console.log(json);

            } catch (error) {
                if (error.name !== "AbortError") {
                    setError(true)
                }
            }
        };
        // console.log("Use effect runs");
        fetchUsers();
        return () => {
            controller.abort()
        }
    }, [id])

    // const searchHandler = async () => {
    //     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     const json = await res.json();
    //     console.log(json);
    // }
    return (
        <div>
            {/* {id>10 &&<Counter/>} */}
            <input
                type="text"
                placeholder="enter id"
                value={id} onChange={e => setId(e.target.value)} />
            {/* <button onClick={searchHandler}>search</button> */}

            {!users.length && !error && <h3>Loading . . .</h3>}

            {/* <ul>
                {users.map((user) => <li key={user.id}>{user.name}</li>)}
            </ul> */}

            {error && <h3>Something went wrong</h3>}

        </div>
    );
}

export default Users;
