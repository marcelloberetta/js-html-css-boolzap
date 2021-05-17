const app = new Vue({

   el: '#app',
   data:{
     user:{
       name: 'Nome utente',
       avatar: '_io'
     },
     contacts: [
     {
       name: 'Michele',
       avatar: '_1',
       visible: true,
       messages: [
         {
           date: '10/01/2020 15:30:55',
           text: 'Hai portato a spasso il cane?',
           status: 'sent'
         },
         {
           date: '10/01/2020 15:50:00',
           text: 'Ricordati di dargli da mangiare',
           status: 'sent'
         },
         {
           date: '10/01/2020 16:15:22',
           text: 'Tutto fatto!',
           status: 'received'
         }
       ],
     },
     {
       name: 'Fabio',
       avatar: '_2',
       visible: true,
       messages: [
         {
           date: '20/03/2020 16:30:00',
           text: 'Ciao come stai?',
           status: 'sent'
         },
         {
           date: '20/03/2020 16:30:55',
           text: 'Bene grazie! Stasera ci vediamo?',
           status: 'received'
         },
         {
           date: '20/03/2020 16:35:00',
           text: 'Mi piacerebbe ma devo andare a fare la spesa.',
           status: 'sent'
         }
       ],
     },
 
     {
       name: 'Samuele',
       avatar: '_3',
       visible: true,
       messages: [
         {
           date: '28/03/2020 10:10:40',
           text: 'La Marianna va in campagna',
           status: 'received'
         },
         {
           date: '28/03/2020 10:20:10',
           text: 'Sicuro di non aver sbagliato chat?',
           status: 'sent'
         },
         {
           date: '28/03/2020 16:15:22',
           text: 'Ah scusa!',
           status: 'received'
         }
       ],
     },
     {
       name: 'Luisa',
       avatar: '_4',
       visible: true,
       messages: [
         {
           date: '10/01/2020 15:30:55',
           text: 'Lo sai che ha aperto una nuova pizzeria?',
           status: 'sent'
         },
         {
           date: '10/01/2020 15:50:00',
           text: 'Si, ma preferirei andare al cinema',
           status: 'received'
         }
       ],
     },
   ],
   contactActive: 0,
   contactMessage:'',
   risposte: ['Va bene','non ci penso neanche!!','Per chi mi prendi?!?!?','ooook!!!','NO!!','Questa casa non è un albergo!']
 
 
   },
   methods:{
 
     
     sentMessage(){
 
       
       if(this.contactMessage.length > 0){
         
         this.pushMessage(this.contactMessage, 'sent');
         this.contactMessage = '';
 
         
         setTimeout(()=>{
           let risp = this.risposte[Math.floor(Math.random() * this.risposte.length-1)+1]
           this.pushMessage(risp, 'received');
         },1000);
       }
 
     },
     pushMessage(text, status){
       this.contacts[this.contactActive].messages.push({
         date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
         text: text,
         status: status
       });
     },
     lastAccess(index){
       
       let contactMsgs  =  this.contacts[index].messages;
       return contactMsgs[contactMsgs.length-1].date;
     },
     lastMessage(index){
       
       let contactMsgs  =  this.contacts[index].messages;
       
       if(contactMsgs[contactMsgs.length-1].text.length > 30){
         
         let splicedMsg = contactMsgs[contactMsgs.length-1].text.slice(0, 30) + "...";
         return splicedMsg;
       }
       
       return contactMsgs[contactMsgs.length-1].text;
     }
 
   },
   mounted(){
 
     
   }
 });