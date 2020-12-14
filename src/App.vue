<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        methods: {
            goTo(route) {
                this.$router.push(route);
            }
        }
    }

</script>

<style scoped>
    @import url("https://fonts.gstatic.com");
    @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");

    * {
        box-sizing: border-box;
        font-family: 'Ubuntu', sans-serif;
    }
    
    /* theme: {
    extend: {
      fontFamily: {
        'ubuntu': ["'Ubuntu'", 'sans-serif']
      },
    },
  }, */

</style>
