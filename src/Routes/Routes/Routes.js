import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from '../../Page/Home/Home'
import Category from '../../Page/Category/Category/Category'
import News from "../../Page/News/News/News";
import Login from "../../Form/Login";
import Register from "../../Form/Register";
import Private from "../../Private/Private";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
              path:'/',
              element:<Home></Home>,
              loader:() => fetch('https://dragon-news-server-nu-henna.vercel.app/news')
            },
            {
                path:'/home',
                element:<Home></Home>,
                loader:() => fetch('https://dragon-news-server-nu-henna.vercel.app/news')
              },
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader: ({params}) => fetch(`https://dragon-news-server-nu-henna.vercel.app/category/${params.id}`)
            },
            {
                path:'/news/:id',
                element:<Private><News></News></Private>,
                loader: ({params}) => fetch(`https://dragon-news-server-nu-henna.vercel.app/news/${params.id}`)
            },
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/regester',
        element:<Register></Register>
    }
    
])