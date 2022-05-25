import Home from "../pages/Home";
import Library from "../pages/Library";
import Search from "../pages/Search";

const publicRoutes = [
    {
        path: "/",
        component: Home,
        header: false,
    },
    {
        path: "/search",
        component: Search,
        header: true,
    },
    {
        path: "/collection/playlists",
        component: Library,
        header: false,
    },
    {
        path: "//playlist/:id",
        component: Library,
        header: false,
    },
    {
        path: "/collection/tracks",
        component: Library,
        header: false,
    },
];
const privateRoutes = [];

export { privateRoutes, publicRoutes };
