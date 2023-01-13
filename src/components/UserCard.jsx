export default function UserCard ({username, name, avatar_url}){
    return (
        <section id={'UserCard'}>
            <p><strong>Username:</strong>
                {username}</p>
            <p><strong>Name:</strong>
                {name}</p>
            <img src={avatar_url} alt={username} width='200px' height='200px'/>
        </section>
    )
}