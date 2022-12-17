const {createApp} = Vue

createApp({

    data(){

        return{
            message: 'Hello Vuejs!',
            url: 'https://picsum.photos/400/300',
        }
    }
})
.mount('#app')