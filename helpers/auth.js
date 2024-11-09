import Cookies from 'universal-cookie';

export const isUserLoggedIn = () => {
    const cookies = new Cookies(null, { path: '/' });
    const token = cookies.get('pToken');
    const tokenExpires = cookies.get('pTokenExpires');

    if (!token || !tokenExpires) {
        return false;
    }

    const now = Date.now();
    return now < tokenExpires;
};