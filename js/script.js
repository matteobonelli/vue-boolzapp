import {contactList} from './data.js';
const {createApp} = Vue;

createApp({
    data(){
        return {
            contacts : contactList,
            activeContact : '',
            newMessage : '',
            searchTerm : ''
        }
    },
    methods : {
       addMessage(){
        this.contacts.forEach(element => {
            if(this.activeContact === element.name && this.newMessage !== ''){
                const newMsg = {
                    date : '03/11/2023 00:06:01',
                    message : this.newMessage,
                    status : 'sent'
                }
                element.messages.push(newMsg)
                this.newMessage = ''
                setTimeout(() =>{
                    const answer = {
                        date : '03/11/2023 00:06:02',
                        message : 'ok',
                        status : 'received'
                    }
                    return element.messages.push(answer)
                   }, 1000)
            }
            
        });
       },
       searchContact(contact){
        if(contact.name.toUpperCase().includes(this.searchTerm.toUpperCase())){
            return contact
        }
       }
               
    },
    computed : {
        
    },
}).mount('#app')