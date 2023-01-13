import { useEffect, useState } from "react"
import { getUsers } from "../api"
import UserCard from "./UserCard"

export const Users = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsloading] = useState(true)

    useEffect(()=>{
        setIsloading(true)
        getUsers().then((data) => {
            setUsers(data)
            setIsloading(false)
        })
    },[])

    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <main>
            {users.map((user) => {
                return (<UserCard 
                className='UserCard'
                key = {user.username}
                username = {user.username}
                name = {user.name}
                avatar_url = {user.avatar_url}
                />)
            })}
        </main>
    )
}