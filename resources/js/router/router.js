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
        meta: { title: "Dashboard" },
    },
    {
        path: "/leaderboard",
        name: "leaderboard",
        component: Leaderboard,
        meta: { title: "Leaderboard" },
    },
    {
        path: "/message",
        name: "message",
        component: Message,
        meta: { title: "Messages" },
    },
    {
        path: "/order",
        name: "order",
        component: Order,
        meta: { title: "Orders" },
    },
    {
        path: "/products",
        name: "products",
        component: Products,
        meta: { title: "Products" },
    },
    {
        path: "/sales-report",
        name: "sales-report",
        component: SalesReport,
        meta: { title: "Sales Report" },
    },
    {
        path: "/settings",
        name: "settings",
        component: Settings,
        meta: { title: "Settings" },
    },
    {
        path: "/signout",
        name: "signout",
        component: Signout,
        meta: { title: "Sign Out" },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const defaultTitle = "Wesclic Intern Projects";
    document.title = to.meta.title
        ? `${to.meta.title} | ${defaultTitle}`
        : defaultTitle;
    next();
});

export default router;
