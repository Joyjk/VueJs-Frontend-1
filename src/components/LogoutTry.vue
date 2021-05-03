<template>
    <div>

    </div>
</template>


<script>
export default {
    name:'LogoutTry',
    created(){
        this.$store.dispatch('distroyAccessToken')
        this.$store.dispatch('distroyAccessUserID')
        this.$router.push('/')

    }
}
</script>