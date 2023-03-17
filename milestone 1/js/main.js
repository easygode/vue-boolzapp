// Vue
const { createApp } = Vue;

const boolzApp = createApp({
    data() {
        return{
            activeUser: 0,
            contacts: [
                {
                    name: "Michele",
                    avatar: "img/avatar_1.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "17/03/2023 15:30:50",
                            message: "Hai portato a spasso il cane?",
                            status: "sent"
                        },
                        {
                            date: "17/03/2023 15:50:00",
                            message: "Ricordati di stendere i panni",
                            status: "sent"
                        },
                        {
                            date: "17/03/2023 16:15:22",
                            message: "Tutto fatto!",
                            status: "received"
                        }
                    ],
                },
                {
                    name: "Fabio",
                    avatar: "img/avatar_2.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "20/02/2023 12:20:00",
                            message: "Ciao che aria tira?",
                            status: "sent"
                        },
                        {
                            date: "20/02/2023 16:30:45",
                            message: "Bon, tutto rego! Stasera?",
                            status: "received"
                        },
                        {
                            date: "20/02/2023 17:25:00",
                            message: "Dai bueno, ci si vede al solito",
                            status: "sent"
                        }
                    ],
                },
                {
                    name: "Samuele",
                    avatar: "img/avatar_3.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "28/02/2023 20:30:40",
                            message: "Non fare finta di niente, lo sai che mi hai offeso",
                            status: "received"
                        },
                        {
                            date: "28/02/2023 23:45:10",
                            message: "Meglio che non ci sentiamo chiù",
                            status: "received"
                        },
                        {
                            date: "03/03/2023 22:15:10",
                            message: "Aaaahhhh, mea culpa!",
                            status: "sent"
                        }
                    ],
                },
                {
                    name: "Alessandro B.",
                    avatar: "img/avatar_4.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2023 18:20:10",
                            message: "La befana sta in cantina una settimana",
                            status: "sent"
                        },
                        {
                            date: "10/01/2023 18:21:10",
                            message: "E l'uomo nero un mese intero",
                            status: "received"
                        }
                    ],
                },
                {
                    name: "Alessandro L.",
                    avatar: "img/avatar_5.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "17/01/2023 19:20:20",
                            message: "Hai visto Sanremo? Mengoni spacca",
                            status: "sent"
                        },
                        {
                            date: "17/01/2023 20:45:10",
                            message: "Urka, se me li ha scassati",
                            status: "received"
                        }
                    ],
                },
                {
                    name: "Claudia",
                    avatar: "img/avatar_6.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "15/12/2022 13:10:25",
                            message: "Meraviglia, ho un nuovo lavoro",
                            status: "sent"
                        },
                        {
                            date: "15/12/2022 13:12:15",
                            message: "Che gioia, complimenti se la meglio",
                            status: "received"
                        },
                        {
                            date: "15/12/2022 13:15:10",
                            message: "Sono troppo felice",
                            status: "sent"
                        }
                    ],
                },
                {
                    name: "Federico",
                    avatar: "img/avatar_7.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/09/2022 09:45:24",
                            message: "Vado in biblioteca a studiare, vieni?",
                            status: "sent"
                        },
                        {
                            date: "10/09/2022 09:48:14",
                            message: "Ai voglia, mica ci vado a squola",
                            status: "received"
                        }
                    ],
                },
                {
                    name: "Davide",
                    avatar: "img/avatar_8.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "17/03/2023 18:20:30",
                            message: "Buonasera, le segnalo la nostra nuova offerta",
                            status: "received"
                        },
                        {
                            date: "17/03/2023 18:30:45",
                            message: "Grazie, non mi interessa",
                            status: "sent"
                        },
                        {
                            date: "17/03/2023 18:35:02",
                            message: "Nulla di male ad essere astemio, caro Eusebio!",
                            status: "received"
                        }
                    ],
                },
                
            ]
        }
    },
    methods: {

    }
});
boolzApp.mount('#app');