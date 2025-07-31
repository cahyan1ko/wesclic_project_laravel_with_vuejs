import "./bootstrap";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";

const app = createApp(App);
app.use(router);

import TodaySales from "./components/Graph/TodaySales.vue";
import TotalRevenue from "./components/Graph/TotalRevenue.vue";
import TopProducts from "./components/Graph/TopProducts.vue";
import TargetReality from "./components/Graph/TargetReality.vue";
import VisitorInsight from "./components/Graph/VisitorInsight.vue";
import VolumeService from "./components/Graph/VolumeService.vue";
import SalesMapping from "./components/Graph/SalesMapping.vue";
import CustomerSatisfaction from "./components/Graph/CustomerSatisfaction.vue";
import HeaderDashboard from "./layouts/Header/Header.vue";
import Button from "./components/Button.vue";

app.component("TodaySales", TodaySales);
app.component("TotalRevenue", TotalRevenue);
app.component("TopProducts", TopProducts);
app.component("TargetReality", TargetReality);
app.component("VisitorInsight", VisitorInsight);
app.component("VolumeService", VolumeService);
app.component("SalesMapping", SalesMapping);
app.component("CustomerSatisfaction", CustomerSatisfaction);
app.component("HeaderDashboard", HeaderDashboard);

app.component("Button", Button)

app.mount("#app");
