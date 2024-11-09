export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('m_token');

    if (!token.value) {
        return navigateTo('/login');
    }
});