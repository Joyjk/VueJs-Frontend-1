<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <input type="text" name="" v-model="customerId" placeholder="User ID" />
            <br>
            <span v-if="errorMsg.customerId.length" style="color:red">{{errorMsg.customerId}}</span>
            <br>
            <input type="text" name="" v-model="password"  placeholder="Password" />
            <br>
            <span v-if="errorMsg.password.length" style="color:red">{{errorMsg.password}}</span>
            <br>
            <input type="hidden" name="" v-model="type" />

            <input type="submit" name="" />
        </form>
    </div>
</template>
<script>

import axios from 'axios'

export default {
    name:'LoginTry',
    data(){
        return{
            customerId:'',
            password:'',
            type:'customer',

             errorMsg:{
                 customerId:'',
                 password:'',
             },
             msgError:''
        }
    },
    methods:{
        handleSubmit(){

            const loginData = {
                customerId: this.customerId,
                password:this.password,
                
            }

            var validate = true;

                if(!loginData.customerId){
                this.errorMsg.customerId = "Customer Id is required"
                validate=false
                }
                else{
                this.errorMsg.customerId = ""
                }


                if(!loginData.password){
                this.errorMsg.password = "Password Id is required"
                validate=false
                }
                else{
                this.errorMsg.password = ""
                }

                if(validate==false){
                    this.msgError = 'Error happned'
                 }


                 else{

                         var baseData = btoa(loginData.customerId+':'+loginData.password);
            console.log(loginData)
            console.log(baseData)
             var sendData ={
                customerId:loginData.customerId,
                tokens:baseData
            }
            console.log(sendData)




            axios.post('http://localhost:2293/api/Home/Login',baseData,{
                     headers: {
                            'Authorization': `Basic ${baseData}` 
                            }
               })
             .then(
                 res=>{
                     
                     console.log(res);

                     //this.$store.dispatch('user',baseData);
                    localStorage.setItem('myDatas', baseData);
                    localStorage.setItem('userNamee',loginData.name);

                     //console.log(res.data.data);
                     //document.cookie = loginData.name;
                     this.$store.dispatch('retrieveToken',sendData)
                     
                    this.$router.push('/')
                 }
             ).catch(
                err=>{
                   console.log("Api Error: "+err)
                }
             )


                 }






           



        }
    }
}
</script>