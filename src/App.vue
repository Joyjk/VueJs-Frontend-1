<template>
  <div id="app">
    <!-- <h1> Hello Joy</h1> -->

    <!-- <ul style="list-style-type:none">
      <li>
        <router-link to="/">Home </router-link>
      </li>
      <li>
        <router-link to="/registration">Customer Registration</router-link>
      </li>
      <li>
        <router-link to="/test1">Test 1</router-link>
      </li>
      
      <li>
        <router-link to="/test2">Test 2</router-link>
      </li> 
      <li>
        <router-link to="/login">Login</router-link>
      </li> 

      <li>
        <router-link to="/cart">Cart</router-link>
      </li> 

    </ul> -->



    <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/">DayTide</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item  to="/">Home</b-nav-item>
        <b-nav-item  v-if="!isLoggedIn" to="/login">Login</b-nav-item>
        <b-nav-item v-if="!isLoggedIn" to="/registration">Customer Registration</b-nav-item>
        <b-nav-item v-if="isLoggedIn" to="/cart">Cart</b-nav-item>
        <!-- <b-nav-item v-if="isLoggedIn" to="/test1">Test 1</b-nav-item> -->
        <!-- <b-nav-item v-if="!isLoggedIn" to="/test2">Test 2</b-nav-item> -->
        <b-nav-item v-if="isLoggedIn" to="/orders">Orders</b-nav-item>
        <b-nav-item v-if="isLoggedIn" to="/profile">My Profile</b-nav-item>
        <!-- <b-nav-item v-if="isLoggedIn" to="/changepassword">Change Password</b-nav-item> -->
        
         
        
        <b-nav-item v-if="isLoggedIn" to="/logout">Logout</b-nav-item>
      
        

        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

        <!-- <b-nav-item-dropdown right >
         
          <template #button-content>
            <em>{{this.$store.getters.getUserName}}</em>
          </template>
           <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item> 
        </b-nav-item-dropdown>  -->

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
  },
  computed:{
      isLoggedIn(){
      return  this.$store.getters.loggedIn;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
