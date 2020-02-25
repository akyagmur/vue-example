require('./bootstrap');


import Vue from 'vue';
import BookPage from './Pages/BookPage'
import UserPage from './Pages/UserPage'


// 1. yol
const app = new Vue({
    components: {
        BookPage,
        UserPage,
    },
    el: '#app',
});

