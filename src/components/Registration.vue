<template>
  <div style="margin-left:500px;margin-right:500px">
      <h2>Customer Registration</h2>
      <br>
       <form action="" @submit.prevent="handleSubmit">
            <input type="text" name="" v-model="customerId" placeholder="Enter Customer ID" />
            <br>
             <span v-if="errorMsg.customerId.length" style="color:red">{{errorMsg.customerId}}</span>
            <br>
            <input type="text" name="" v-model="name" placeholder="Enter Customer Name" />
            <br>
            <span v-if="errorMsg.name.length" style="color:red">{{errorMsg.name}}</span>
            <br>
            <input type="text" name="" v-model="email" placeholder="Enter Email" />
            <br>
            <span v-if="errorMsg.email.length" style="color:red">{{errorMsg.email}}</span>
            <br>
            <input type="text" name="" v-model="phone" placeholder="Enter Phone" />
            <br>
            <span v-if="errorMsg.phone.length" style="color:red">{{errorMsg.phone}}</span>
            <br>
            <input type="text" name="" v-model="address" placeholder="Enter Address" />
            <br>
            <span v-if="errorMsg.address.length" style="color:red">{{errorMsg.address}}</span>
            <br>
            <input type="text" name="" v-model="password" placeholder="Enter Password" />
            <br>
            <span v-if="errorMsg.password.length" style="color:red">{{errorMsg.password}}</span>
            <input type="hidden" name="" v-model="picture"  />
            <br>
            <input type="submit" name="" id="">
       </form>
     <!-- <input type="password"  placeholder="Password"/> -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Registration',
    data(){
        return {
                customerId:'',
                name:'',
                email:'',
                phone:'',
                address:'',
                password:'',
                picture:'picDef',

                errorMsg:{
                     customerId:'',
                        name:'',
                        email:'',
                        phone:'',
                        address:'',
                        password:''
                     },
                     msgError:''


        }
    },
    methods:{
        handleSubmit(){
            const allData={
                customerId:this.customerId,
                password:this.password,
                name:this.name,
                email:this.email,
                phone:this.phone,
                address:this.address,
                picture:this.picture
            }

                var validate = true;

                if(!allData.customerId){
                this.errorMsg.customerId = "Customer Id is required"
                validate=false
                }
                else{
                this.errorMsg.customerId = ""
                }

                if(!allData.password){
                this.errorMsg.password = "Password Id is required"
                validate=false
                }
                else{
                this.errorMsg.password = ""
                }

                if(!allData.name){
                this.errorMsg.name = "Name Id is required"
                validate=false
                }
                else{
                this.errorMsg.name = ""
                }

                if(!allData.email){
                this.errorMsg.email = "Email  is required"
                validate=false
                }
                else{
                this.errorMsg.email = ""
                }
                
                
                if(!allData.phone){
                this.errorMsg.phone = "Phone  is required"
                validate=false
                }
                else{
                this.errorMsg.phone = ""
                }

                if(!allData.address){
                this.errorMsg.address = "Address  is required"
                validate=false
                }
                else{
                this.errorMsg.address = ""
                }

                 if(validate==false){
                    this.msgError = 'Error happned'
                 }

                else{


                      console.log("Sumitted Sign up");
                      console.log(allData);



                        axios.post('http://localhost:2293/api/Customer',allData,
                        {
                            headers: {
                        'Authorization': `Basic abc` 
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