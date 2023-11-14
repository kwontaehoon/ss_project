import React from 'react'
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import App from '../App'
import Main from '../components/main'
import MyPage from '../components/myPage'

export const router = createBrowserRouter([
    {  path: "/",
        element: <App />,
        children: [
            { index: true, element: <Main /> },
            { path: "/mypage", element: <MyPage />}
        ] 
    },
])