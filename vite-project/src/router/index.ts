import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/routes';

const router = createRouter({
    history: createWebHistory(),
    routes,
});

/** 監聽頁面轉跳行為(Router Guard) */
router.beforeEach(async (to, from) => {
    console.log("to", to);
    console.log("from", from);
});

export default router;