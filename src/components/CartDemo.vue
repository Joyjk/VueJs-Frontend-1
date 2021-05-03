<template>
    <div>
        <h1>Customer Cart</h1>

         <div style="margin: 0 auto">
             <table border="1" style="margin: 0 auto">
                <tr>
                    <td>Customer Id</td>
                    <td>Product Id</td>
                    <td>Product Name</td>
                    <td>Quantity</td>
                    <td>Price (Unit)</td>
                    <td>Picture</td>
                    
                    <td>Delete</td>


                </tr>
                <tr v-for="item in list" v-bind:key="item.productId">
                    <td>{{item.customerId}}</td>
                    <td>{{item.productId}}</td>
                    <td>{{item.productName}}</td>
                    <td>{{item.quantity}}</td>
                    <td>{{item.price_unit_}}</td>
                    <td>{{item.picture}}</td>
                    
                    <td><router-link :to="'/productdelete/'+item.id">Delete</router-link></td>

                </tr>
                <tr>
                    <td colspan="7">Total Price (Inc.Vat): $ {{calcu().totalPrice.toFixed(2)}}</td>
                </tr>


            </table>


            <br>
            <br>

            <h3>Confirm Checkout</h3>
            <form  @submit.prevent="handleSubmit">
                <input type="text" name="" v-model="address" placeholder="Address" />
                <br>
                <span v-if="errMsg.address.length" style="color:red">{{errMsg.address}}</span>
                <br>
                <input type="text" name=""  v-model="district" placeholder="District" />
                <br>
                <span v-if="errMsg.district.length" style="color:red">{{errMsg.district}}</span>
                <br>
                <input type="hidden" name="" v-model="date"  />
                <input type="hidden" name="" v-model="amount"  />
                <input type="hidden" name="" v-model="customerId"  />
                <span>Payment type:</span>
                <select v-model="payment_Type">
                    
                    <option value="Visa" selected>Visa</option>
                    <option value="MasterCard">MasterCard</option>
                </select>
                <br>
                <br>

                    <input type="submit" name="" id="">
            </form>




         </div>
            <!-- <h3>Total Price:{{calcu().totalPrice.toFixed(2)}} </h3> -->
            <h3>Total price from amount variable: {{amount}}</h3>
            <h3>Todays date: {{date}}</h3>
            

    </div>
</template>



<script>

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios,axios)



export default {
    name:'CartDemo',
    data(){
        return{
            list:undefined,
            customerId:this.$store.state.username,
            token:this.$store.state.token,
            amount:undefined,
            date: new Date().toDateString(),
            address:undefined,
            district:undefined,
            payment_Type:undefined,

            errMsg:{
                address:'',
                district:''
            },
            list22:undefined


        }
    },
     mounted(){
        Vue.axios.get("http://localhost:2293/api/Cart/"+this.customerId,{
            headers: {
                            'Authorization': `Basic ${this.token}` 
                     }
        })
        .then((resp)=>{
            this.list=resp.data;
            console.warn(resp.data)
        })
    },
    methods:{
        calcu(){
            var totalPrice = 0.0
             this.list.forEach(i => {
                totalPrice+=(i.quantity* i.price_unit_);
            })
            totalPrice+=totalPrice*0.05
            this.amount = totalPrice.toFixed(2)
            return{
                totalPrice
            }
        },
        handleSubmit(){
          

          const allValues = {
              
                date: this.date,
                address: this.address,
                district: this.district,
                amount: this.amount,
                payment_Type: this.payment_Type,
                customerId: this.customerId
            }
                var validate = true;

                if(!allValues.address){
                    this.errMsg.address = "Address  is required"
                    validate=false
                }
                else{
                    this.errMsg.address = ""
                }

                 if(!allValues.district){
                    this.errMsg.district = "District  is required"
                    validate=false
                }
                else{
                    this.errMsg.district = ""
                }

                 if(validate==false){
                    this.msgError = 'Error happned'
                 }
                 else{
                     console.log(allValues)



                          axios.post('http://localhost:2293/api/Checkout/Confirm',allValues,
                        {
                            headers: {
                        'Authorization': `Basic ${this.token}` 
                        }
                        }
                        
                        )
                        .then(
                            res=>{
                                console.log(res);
                                this.list22=res.data;

                                const dataRes = res.data;

                                this.$store.dispatch('retrieveOrderList',dataRes)

                                this.$router.push('/orders')
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