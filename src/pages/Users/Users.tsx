import {useGetUsersQuery} from '../../entities/users/api/usersApi'
import ItemList from "../../shared/ui/ItemList/ItemList";
import {FC} from 'react'

function Users():FC {
    const {data: users, isLoading, error} = useGetUsersQuery();

    return (

        error ? <div>Loading error</div> :
            isLoading ? <div>Loading...</div> :
                // users.map((user) => <div key={user.id}>{user.name}</div>)
                <ItemList items={users} renderItem={(user) => <div>{user.name} - {user.username}</div>} />

    )
}

export default Users