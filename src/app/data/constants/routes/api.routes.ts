import { environment as ENV } from '@env/environment';

const url = ENV.url;

export const API_ROUTES = {
    AUTH: {
        LOGIN : `${url}/auth/user/signin`,
        REGISTER : `${url}/auth/signup`,
        USER_ME: `${url}/user/me`,
        RESET_PASSWORD: `${url}/auth/password/reset`,
        RESTORE_PASSWORD: `${url}/auth/password/restore`,
    },
    ECOMMERCE: {
        PRODUCTS: `${url}/products`,
        CATEGORIES: `${url}/products/categories`,
        CATEGORY: `${url}/products/category`,
    }
}