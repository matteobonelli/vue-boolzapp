const dt = luxon.DateTime

import {contactList} from './data.js';
const {createApp} = Vue;


createApp({
    data(){
        return {
            contacts : contactList,
            activeContact : '',
            newMessage : '',
            searchTerm : '',
            activeIndex : 0,
            isActiveDropdown : false,
            clickedMessageId : null,
        }
    },
    methods : {
       addMessage(){
        
            if(this.newMessage !== '' && this.newMessage.trim() !== ''){
                const newMsg = {
                    date : dt.now().setLocale('it').toLocaleString(dt.TIME_SIMPLE),
                    message : this.newMessage,
                    status : 'sent'
                }
                this.activeContactIn.messages.push(newMsg)  
                this.newMessage = ''
                setTimeout(() =>{
                    const answer = {
                        date : dt.now().setLocale('it').toLocaleString(dt.TIME_SIMPLE),
                        message : 'ok',
                        status : 'received'
                    }
                    return this.activeContactIn.messages.push(answer)
                   }, 1000)
            }
            
        ;
       },
       searchContact(contact){
        if(contact.name.toUpperCase().includes(this.searchTerm.toUpperCase())){
            return contact
        }
       },
       selectContact(id){
            const index = this.contacts.findIndex((contact) => contact.id === id)
            if(index !== -1){
                this.activeIndex = index
                this.clickedMessageId = null
                this.isActiveDropdown = false
            }
       },
       removeMessage(index){
            if(this.clickedMessageId === index){
                this.contacts[this.activeIndex].messages.splice(this.clickedMessageId, 1)
                this.isActiveDropdown = false
            }
       },
       showDropdown(index){
            if(this.clickedMessageId === index && this.isActiveDropdown){
                return this.activeContactIn.messages[this.clickedMessageId]
            }
       }
               
    },
    computed : {
        activeContactIn(){
            return this.contacts[this.activeIndex]
        },
    }
}).mount('#app')