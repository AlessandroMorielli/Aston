import {createBrowserRouter} from "react-router-dom";
import PostList from "../../../widgets/PostList/PostList";
import MainLayout from "../../../shared/layouts/MainLayout/MainLayout";
import Header from "../../../widgets/LayoutHeader/Header";
import Footer from "../../../widgets/LayoutFooter/Footer";
import PostCard from "../../../entities/post/ui/PostCard/PostCard";
import Users from "../../../pages/Users/Users";
import Albums from "../../../pages/Albums/Albums";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <><Header /><MainLayout /><Footer /></>,
        children: [
            {
                path: '/posts',
                element: <PostList />,

            },
            {
                path: '/posts/:id',
                element: <PostCard />,
            },
            {
                path: '/users/',
                element: <Users />
            },
            {
                path: '/users/:id/albums',
                element: null
            },
            {
                path: '/users/:id/todos',
                element: null
            },
            {
                path: '/users/:id/posts',
                element: null
            },
            {
                path: '/albums',
                element: <Albums />
            },
            {
                path: '/albums/:id/photos',
                element: null
            },
        ]
    }
])