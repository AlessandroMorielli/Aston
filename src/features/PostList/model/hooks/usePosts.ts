import {useEffect, useMemo, useState} from "react";

export function usePosts() {
    const [posts, setPosts] = useState<string[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => console.log(err))
    }, [posts])

    return useMemo(() => posts, [posts])
}

