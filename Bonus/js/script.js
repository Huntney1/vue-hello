const {createApp} = Vue

createApp({

    data(){

        return{
            message: 'Hello Vuejs!',
            url: 'https://picsum.photos/id/200/300',
        }
    }
})
.mount('#app')