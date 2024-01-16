import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/components/DefaultLayout.vue";
import Home from "@/views/Home.vue";
import Recipes from "@/views/recipe/Recipes.vue";
import RecipeDetail from "@/views/recipe/RecipeDetail.vue"
import About from "@/views/About.vue";
import MyAccount from "@/views/MyAccount.vue";
import Test from "@/views/test.vue";
import PageNotFound from "@/views/PageNotFound.vue";

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
                name: "Recipes",
                component: Recipes,
                path: "/recipes",
            },
            {
                name: "RecipesDetails",
                component: RecipeDetail,
                path: "/recipes-details/:id",
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
            {
                path: ":notFound",
                name: "Page not found",
                component: PageNotFound
            }
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