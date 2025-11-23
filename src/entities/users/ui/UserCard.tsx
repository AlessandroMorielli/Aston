import {User} from "../model/types";
import {useLocation} from "react-router-dom";
import {FC} from 'react'

function UserCard({userId, name, username}: User):FC {
    const location = useLocation()

    return (
        <>
            <div>{name}</div>
            <div>{username}</div>
        </>
    )
}

export default UserCard