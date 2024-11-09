export const numberWithCommas = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const isObjEmpty = (obj) => {
    return Object.getOwnPropertyNames(obj).length == 0;
}

export const validateField = (state, condition, field, message) => {
    if (condition) {
        state[field] = message;
    } else {
        delete state[field];
    }
};