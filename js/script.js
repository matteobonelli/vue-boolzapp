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
            activeIndex : null,
            isActiveDropdown : false,
            clickedMessageId : null,
            showChat : false
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
                this.$nextTick(() => {
                    this.$refs.messages[this.$refs.messages.length - 1].scrollIntoView({ behavior: 'smooth'})
                });
                this.newMessage = ''
                setTimeout(() =>{
                    const answer = {
                        date : dt.now().setLocale('it').toLocaleString(dt.TIME_SIMPLE),
                        message : 'ok',
                        status : 'received'
                    }
                    this.activeContactIn.messages.push(answer)
                    this.$nextTick(() => {
                        this.$refs.messages[this.$refs.messages.length - 1].scrollIntoView({ behavior: 'smooth'})
                    });
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
                this.showChat = true
            }
       },
       removeMessage(){
            
                this.activeContactIn.messages.splice(this.clickedMessageId, 1)
                this.isActiveDropdown = false
            
       },
       showDropdown(index){
            if(this.clickedMessageId === index && this.isActiveDropdown){
                return this.activeContactIn.messages[this.clickedMessageId]
            }
       },
       
               
    },
    computed : {
        activeContactIn(){
            if(this.activeIndex !== null){
                return this.contacts[this.activeIndex]
            }
            
        },
    },
    mounted () {
        console.log()
    }
}).mount('#app')