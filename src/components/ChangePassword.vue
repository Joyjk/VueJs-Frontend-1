<template>
    <div>
        <h1>Change Password</h1>

        <form @submit.prevent="handleSubmit">
            <input type="hidden" name="" id="" v-model="userId">
            <input type="hidden" name="" id="" v-model="status">
            <input type="hidden" name="" id="" v-model="type">
            <label>Customer ID: {{userId}}</label>
            <br>
            <br>
            <input type="text" name="" v-model="password">
            <br>
            <span v-if="errorMsg.password.length" style="color:red">{{errorMsg.password}}</span>
            <br>

            <input type="submit" value="Change">
        </form>

    </div>
</template>

<script>

import axios from 'axios'

//changepassword
export default {
    name:'ChangePassword',
    data(){
        return{
            token:this.$store.state.token,
            userId:this.$store.state.username,
            password:'',
            type:'Customer',
            status:'valid',
            errorMsg:{
                password:''
            },
            msgError:''

        }
    },
    methods:{
        handleSubmit(){
            var userDetail={
                userId:this.userId,
                password:this.password,
                type:this.type,
                status:this.status
            }


            
            
            var validate = true;

                if(!userDetail.password){
                this.errorMsg.password = "password is required"
                validate=false
                }
                else{
                this.errorMsg.password = ""
                }

                 if(validate==false){
                    this.msgError = 'Error happned'
                 }
                 else
                 {
                        console.log(userDetail)



                          axios.put('http://localhost:2293/api/customer/ChangePassword',userDetail,
                        {
                            headers: {
                                'Authorization': `Basic ${this.token}` 
                        }
                        }
                        
                        )
                        .then(
                            res=>{
                                console.log(res);
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