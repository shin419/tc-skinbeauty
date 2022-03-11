const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "home", component: () => import("pages/Index.vue") },
      {
        path: "",
        component: () => import("pages/ReviewSanpham/serum.vue"),
      }
    ],
  },
  {
    path: "/dangkys",
    component: () => import("pages/Admin/DangKy.vue"),
  },
  {
    path: "/hoadons",
    component: () => import("pages/Admin/HoaDon.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
