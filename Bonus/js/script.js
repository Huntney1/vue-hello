const { createApp } = Vue

createApp({

    data() {

        return {
            message: 'Hello Vuejs!',
            url: 'https://picsum.photos/400/300',
            giorno: new Date().getDate(),
            mese: new Date().getMonth()+1,
            anno: new Date().getFullYear(),
        }
    }
})
    .mount('#app')
