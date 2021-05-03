<template>
    <div>
        <h1>Confirm Checkout</h1>

        <div>
                <table>
                    <tr>
                        <td>Order Id</td>
                        <td>Date</td>
                        <td>District</td>
                        <td>Address</td>
                        <td>Payment Type</td>
                        <td>Amount</td>
                        <td>Customer Id</td>
                    </tr>
                    <tr v-for="items in list22" v-bind:key="items.orderId">
                        <td>{{items.orderId}}</td>
                        <td>{{items.date}}</td>
                        <td>{{items.district}}</td>
                        <td>{{items.address}}</td>
                        <td>{{items.payment_Type}}</td>
                        <td>{{items.amount}}</td>
                        <td>{{items.customerId}}</td>
                    </tr>
                </table>
            </div>
    </div>
</template>
<script>
export default {
    name:'CheckoutConfirm',
    data(){
        return{
            list22:this.$store.state.orderList
        }
    }
}
</script>