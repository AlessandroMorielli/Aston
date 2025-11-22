import {useGetAlbumsQuery} from '../../entities/albums/api/albumsApi'

function Albums() {
    const {data: albums, isLoading, error} = useGetAlbumsQuery();

    return (

        error ? <div>Loading error</div> :
            isLoading ? <div>Loading...</div> :
                albums.map((album) => <div key={album.id}>{album.id} {album.title}</div>)

    )
}

export default Albums