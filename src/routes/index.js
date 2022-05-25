import Home from "../pages/Home";
import Library from "../pages/Library";
import Search from "../pages/Search";

const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/search",
        component: Search,
    },
    {
        path: "/collection/playlists",
        component: Library,
    },
    {
        path: "//playlist/:id",
        component: Library,
    },
    {
        path: "/collection/tracks",
        component: Library,
    },
];
const privateRoutes = [];

export { privateRoutes, publicRoutes };
