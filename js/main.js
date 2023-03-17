// Vue
const { createApp } = Vue;

const contacts = [
    {
        name: "Michele",
        avatar: "/img/avatar_1.jpg",
        visible: true,
        messages: [
            {
                date: "10/01/2020 15:30",
                message: "Hai portato a spasso il cane?",
                status: "sent"
            },
            {
                date: "10/01/2020 15:50",
                message: "Ricordati di stendere i panni",
                status: "sent"
            },
            {
                date: "10/01/2020 16:15",
                message: "Tutto fatto!",
                status: "received"
            }
        ],
    },
    ]

  createApp({
    data() {
      return {

      }
    },
    methods:{
       
    }
  }).mount('#app')