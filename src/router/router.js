import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MovieListContainer from "../components/main/movieListContainer/MovieListContainer";
import Favs from "../components/main/favs/Favs"
import Register from "../components/main/forms/Register";
import Login from "../components/main/forms/Login";
import Logout from "../components/main/Logout";
import MovieDetailContainer from "../components/main/movieDetail/MovieDetailContainer";
import EditProfile from "../components/main/forms/EditProfile";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            // errorElement: "Error: Así No WEY!",
            children: [
                {
                    path: "/",
                    element: <MovieListContainer/>,
                },
                {
                    path: "/favs",
                    element:<Favs/>,
                },
                {
                    path: "/editProfile",
                    element: <EditProfile/>,
                },
                {
                    path: "/movie/:id",
                    element: <MovieDetailContainer/>
                },
                {
                    path:"/logout",
                    element: <Logout/>
                },
                {
                    path: "/register",
                    element: <Register/>,
                },
                {
                    path: "/login",
                    element: <Login/>,
                },
            ]
        }
    ]
)
export default router