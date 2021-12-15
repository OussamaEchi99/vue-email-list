// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina
// all'interno di una lista.

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            randomEmail: [],
        },
        methods: {
            verify: function (serverRandomEmail) {
                this.randomEmail.includes(serverRandomEmail);
            }
        },
        created: function() {
            // axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            // .then((response) => {
            //     const serverRandomEmail = response.data.response;
            //     // for (let index = 0; index < 10; index++) {
            //     //     if ( this.verify(serverRandomEmail) ) {
                        
            //     //     } else {
            //     //         this.randomEmail.push(serverRandomEmail);
            //     //     }
            //     // }
            // });
            for (let index = 0; index < 10 ; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response ) => {
                    const serverRandomEmail = response.data.response;
                    if ( !this.verify(serverRandomEmail) ) {
                        this.randomEmail.push(serverRandomEmail);
                    }
                });
                
            }
        }
    }
)

// if ( this.randomEmail.icludes(serverRandomEmail) ) {
//     this.randomEmail.push(serverRandomEmail);
// }