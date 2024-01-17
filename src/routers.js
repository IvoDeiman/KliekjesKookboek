import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/components/layout/DefaultLayout.vue";
import Home from "@/views/Home.vue";
import Recipes from "@/views/recipe/Recipes.vue";
import RecipeDetail from "@/views/recipe/RecipeDetail.vue"
import AddRecipe from "@/views/recipe/AddRecipe.vue"
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
                name: "AddRecipe",
                component: AddRecipe,
                path: "/add-recipes",
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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: "exact-active",
    scrollBehavior() {
        return new Promise((resolve) => {
            resolve({ left: 0, top: 0 })
        })
    }
});

export default router
