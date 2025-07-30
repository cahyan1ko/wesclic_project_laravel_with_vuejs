import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../Pages/Dashboard.vue";
import Products from "../Pages/Products.vue";
import SalesReport from "../Pages/SalesReport.vue";
import Leaderboard from "../Pages/Leaderboard.vue";
import Order from "../Pages/Order.vue";
import Settings from "../Pages/Settings.vue";
import Message from "../Pages/Message.vue";
import Signout from "../Pages/Signout.vue";

const routes = [
    {
        path: "/",
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: "/leaderboard",
        name: "leaderboard",
        component: Leaderboard,
    },
    {
        path: "/message",
        name: "message",
        component: Message,
    },
    {
        path: "/order",
        name: "order",
        component: Order,
    },
    {
        path: "/products",
        name: "products",
        component: Products,
    },
    {
        path: "/sales-report",
        name: "sales-report",
        component: SalesReport,
    },
    {
        path: "/settings",
        name: "settings",
        component: Settings,
    },
    {
        path: "/signout",
        name: "signout",
        component: Signout,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
