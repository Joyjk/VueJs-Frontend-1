import Vue from 'vue';
import Vuex from 'vuex'


Vue.use(Vuex);

// const state ={
//     user: null
// };

const store = new Vuex.Store({

    state:{
        appName:'Try1 Vuex By joy Karmakar',
        token:  null, //localStorage.getItem('access_token') ||
        username:null,
        orderList:null
    },
    getters: {
        getAppName: state =>{
            return state.appName;
        },
        getUserName: state=>{
            return state.username;
        },
        getAccessToken: state=>{
            return state.token;
        },
        loggedIn(state){
            return state.token != null
        },
        getOrderList(state){
            return state.orderList
        }
       
    },
    actions: {
        retrieveToken(context,credentials){

            const token_here = credentials.tokens;
            const uname = credentials.customerId;
            
            console.log(token_here)
            localStorage.setItem('access_token',token_here)
            context.commit('retrieveToken',token_here)
            context.commit('retrieveName',uname)

        },
        distroyAccessToken(context){

            //if

            localStorage.removeItem('access_token')
            context.commit('distroyAccessToken')


        },
        distroyAccessUserID(context){

            //if

            localStorage.removeItem('access_token')
            context.commit('distroyAccessUserID')


        },
        retrieveOrderList(context,credentials){
            const orderList = credentials.dataRes
            context.commit('retrieveOrderList',orderList)
        }

    },
    mutations: {
        retrieveToken(state,token){
            state.token=token
        },
        retrieveName(state,name){
            state.username=name
        },
        distroyAccessToken(state){
            state.token=null
        },
        distroyAccessUserID(state){
            state.username=null
        },

        retrieveOrderList(state,dataRes){
            state.orderList=dataRes
        }


    }

});


export default store;