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
    },
  },
};
</script>

<style scoped>
/* @import url("https://fonts.gstatic.com"); */
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");

* {
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
}

::-moz-selection {
  background: white;
  outline: thin;
  outline-color: #7272ff;
  text-shadow: 
        -1px -1px 0 #7272ff,
        1px -1px 0 #7272ff,
        -1px 1px 0 #7272ff,
        1px 1px 0 #7272ff;
}

::selection {
  background: white;
  outline: thin;
  outline-color: #7272ff;
  text-shadow: 
        -1px -1px 0 #7272ff,
        1px -1px 0 #7272ff,
        -1px 1px 0 #7272ff,
        1px 1px 0 #7272ff;
}

/* p {
  position: relative;
  color: #fff;
}

p:after {
  content: attr(data-content);
  position: absolute;
  color: #000;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: #fff;
}

p::selection {
  background: rgba(76, 125, 225, 0.18);
} */

/* h1:after {
  content: attr(data-content);
  position: absolute;
  color: #000;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(#fff, #fff) top/100% 50% no-repeat;
} */


/* theme: {
    extend: {
      fontFamily: {
        'ubuntu': ["'Ubuntu'", 'sans-serif']
      },
    },
  }, */
</style>
