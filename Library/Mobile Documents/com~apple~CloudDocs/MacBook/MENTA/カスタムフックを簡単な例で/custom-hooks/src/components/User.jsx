import useFetchData from "../hooks/useFetchData";

const User = () => {
    const { data } = useFetchData('https://jsonplaceholder.typicode.com/users');

    return (
        <div>
            <h1>ユーザー一覧</h1>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default User;