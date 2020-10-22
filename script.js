const app= Vue.createApp({
    data: ()=>({
        users: [],
    }),
    created(){
        this.getUsuarios()
    },
    methods:{
        getUsuarios(){
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    this.users=json;    
                })
        }
    }
})
const vm=app.mount('#app')