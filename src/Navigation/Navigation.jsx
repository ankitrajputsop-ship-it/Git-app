import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home";
import UserProfile from "../Pages/user-profile/User-profile";
import Followers from "../Pages/user-follower/user-follower";
import Following from "../Pages/user-following/user-following";
import Gists from "../Pages/user-gists/user-gists";
import Repos from "../Pages/repo/repo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user/:username",
    element: <UserProfile />,
  },
  {
    path: "/user/:username/follower",
    element: <Followers />,
  },
  {
    path: "/user/:username/following",
    element: <Following />,
  },
  {
    path: "/user/:username/gists",
    element: <Gists />,
  },
  {
    path: "/user/:username/repos",
    element: <Repos />,
  },
]);

const GitRouter = () => {
  return <RouterProvider router={router} />;
};

export default GitRouter;
