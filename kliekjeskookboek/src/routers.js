import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/components/DefaultLayout.vue";
import Home from "@/views/Home.vue";

const routes = [
    {
        component: DefaultLayout,
        path: "/",
        children: [
            {
                name: "Home",
                component: Home,
                path: "/",
            },
        ]
    },
    // {
    //     name: "Sign up",
    //     component: Home,
    //     path: "/sign_up",
    // },
    // {
    //     name: "Sign in",
    //     component: Home,
    //     path: "/sign_in",
    // },
    // {
    //     name: "Recipes",
    //     component: Home,
    //     path: "/recipes",
    // },
    // {
    //     name: "Recipe",
    //     component: Home,
    //     path: "/recipes/{recipeId}",
    // },
    // {
    //     name: "My account",
    //     component: Home,
    //     path: "/my_account",
    // },
    // {
    //     name: "User",
    //     component: Home,
    //     path: "/user/{userId}",
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router