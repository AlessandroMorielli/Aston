import {useGetUsersQuery} from '../../entities/users/api/usersApi'

function Users() {
    const {data: users, isLoading, error} = useGetUsersQuery();

    return (

        error ? <div>Loading error</div> :
            isLoading ? <div>Loading...</div> :
                users.map((user) => <div key={user.id}>{user.name}</div>)

    )
}

export default Users