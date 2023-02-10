
// export const promiseTest = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Process finished'), 2000);
// });

import axios from "axios";

export const wait2Seconds = (showError = false) => {
    const promiseTest = new Promise((resolve, reject) => {
        setTimeout(() => !showError ? resolve('Process finished') : reject('Process error'), 2000);
    });
    return promiseTest;
};

export const wait2SecondsAsync = async (showError = false) => {
    const promiseTest = new Promise((resolve, reject) => {
        setTimeout(() => !showError ? resolve('Process finished') : reject('Process error'), 2000);
    });
    return promiseTest;
};

export const reqAPI = axios.create({
    baseURL: 'https://reqres.in/api',
});
