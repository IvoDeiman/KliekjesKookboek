import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/components/DefaultLayout.vue";
import Home from "@/views/Home.vue";
import Recipes from "@/views/Recipes.vue";
import About from "@/views/About.vue";
import MyAccount from "@/views/MyAccount.vue";
import Test from "@/views/test.vue";
import RecipeInfo from "@/views/RecipeInfo.vue";

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
            {
              name: "RecipeInfo",
              component: RecipeInfo,
              path: "/recipe-info/:id"
            },
            {
                name: "Recipes",
                component: Recipes,
                path: "/recipes",
            },
            {
                name: "About us",
                component: About,
                path: "/about",
            },
            {
                name: "My account",
                component: MyAccount,
                path: "/my_account",
            },
            {
                name: "Test",
                component: Test,
                path: "/test",
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
    //     name: "User",
    //     component: Home,
    //     path: "/user/{userId}",
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: "exact-active",
});

export default router