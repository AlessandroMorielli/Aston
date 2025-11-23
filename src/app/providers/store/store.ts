import {configureStore} from "@reduxjs/toolkit";
import {postsApi} from "../../../entities/post/api/postsApi";
import {commentsApi} from "../../../entities/comments/api/commentsApi";
import {todosApi} from "../../../entities/todos/api/todosApi";
import {albumsApi} from "../../../entities/albums/api/albumsApi";
import {usersApi} from "../../../entities/users/api/usersApi";

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat([
            postsApi.middleware,
            commentsApi.middleware,
            todosApi.middleware,
            albumsApi.middleware,
            usersApi.middleware
        ])
})