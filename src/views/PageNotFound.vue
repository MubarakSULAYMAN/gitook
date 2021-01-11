<template>
  <div @mouseover="visible = true" @mouseleave="visible = false">
    <div class="intro">We understand how embarrassing it can be when lost.</div>

    <img src="../assets/images/lookup.svg" alt="Image showing a woman on a lookout." />

    <div class="return-home" v-if="visible" >
      Let's help you <span @click="goTo('/')">return</span> safely.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },

  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.intro,
.return-home {
  position: absolute;
  display: inline-block;
  padding: 10px;
  font-size: 30px;
  color: #7272ff;
}

.intro {
  top: 75%;
  left: 1%;
}

.return-home {
  top: 10%;
  right: 1%;
}

span {
  display: inline-block;
  padding: 0 5px;
  border-radius: 5px;
  background-color: #7272ff;
  color: white;
  font-weight: bolder;
  text-decoration: none;
  cursor: pointer;
}

.return-home:hover span {
  font-weight: normal;
  transform: scale(1.1);
}

img {
  width: 98vw;
  height: 97vh;
  transform: scale(0.75);
}

@media (max-width: 768px) {
  .intro,
  .return-home {
    position: absolute;
    display: inline-block;
    font-size: 25px;
  }

  .intro {
    top: 85%;
  }

  .return-home {
    top: 5%;
  }

  /* img {
    width: 98vw;
  } */
}

@media (max-width: 420px) {
  .intro {
    top: 70%;
  }
}
</style>
