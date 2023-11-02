import {contactList} from './data.js';
const {createApp} = Vue;

createApp({
    data(){
        return {
            contacts : contactList,
            activeContact : 'Michele'
        }
    },
    methods : {
        
        
    },
    computed : {
        
    },
}).mount('#app')