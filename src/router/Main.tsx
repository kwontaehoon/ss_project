import React from 'react'
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import App from '../App'
import MyPage from '../components/MyPage'

export const router = createBrowserRouter([
    {  path: "/",
        element: <App />,
        children: [
            { path: "/mypage", element: <MyPage />}
        ] 
    },
])