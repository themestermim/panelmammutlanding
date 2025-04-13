// export const numberWithCommas = (price) => {
//     return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// export const isObjEmpty = (obj) => {
//     return Object.getOwnPropertyNames(obj).length == 0;
// }

// export const validateField = (state, condition, field, message) => {
//     if (condition) {
//         state[field] = message;
//     } else {
//         delete state[field];
//     }
// };

// export const convertPersianAndArabicNumbersToEnglish = input => {
//     const persianNums = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
//     const arabicNums = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
//     const englishNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//
//     return input.split('').map(char => {
//         let index = persianNums.indexOf(char);
//         if (index === -1) {
//             index = arabicNums.indexOf(char);
//         }
//         return index !== -1 ? englishNums[index] : char;
//     }).join('');
// }
//
// export const saveTokenCookie = data => {
//     return new Promise((resolve, reject) => {
//         try {
//             useCookie("ajiline_token").value = data;
//             resolve("Cookies cleared successfully");
//         } catch (error) {
//             reject("Failed to clear cookies");
//         }
//     });
// }
//
// export const goToPrevPage = () => {
//     if (window.history.length > 1) {
//         window.history.back();
//     } else if (document.referrer) {
//         window.location.href = document.referrer;
//     } else {
//         window.location.href = "/";
//     }
// }
//
// export const scrollToTop = () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// }
//
export const scrollToElem = (id, margin) => {
    const element = document.getElementById(id);
    if (element) {
        const offset = margin;
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
    }
}