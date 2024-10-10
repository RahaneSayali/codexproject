import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

const Routes=
[
    {
        path:'/',
        element:<Home></Home>
    },
    {
        path:'/profile/:id',
        element:<Profile></Profile>
    }
]

export default Routes