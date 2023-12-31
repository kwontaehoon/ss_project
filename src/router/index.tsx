import React from 'react'
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import App from '../App'
import Main from '../components/main'
import SignUp from '../components/signup'
import IdSearch from '../components/signup/idSearch'
import PwdSearch from '../components/signup/pwdSearch'
import ToDoList from '../components/todoList'
import MyPage from '../components/myPage'
import TodoListDetails from '../constants/TodoList/TodoListDetails'

export const router = createBrowserRouter([
    {  path: "/",
        element: <App />,
        children: [
            { index: true, element: <Main /> },
            { path: "/mypage", element: <MyPage /> },
            { path: "/signup", element: <SignUp /> },
            { path: "/idSearch", element: <IdSearch /> },
            { path: "/pwdSearch", element: <PwdSearch /> },
            { path: "/to_do_list",
                children: [
                    { index: true, element: <ToDoList /> },
                    { path: ":id", element: <TodoListDetails />}
                ]},
        ]
    },
    
])