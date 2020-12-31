<template>
  <div class="body">
    <!-- <img src="../assets/images/githubWrongDestination.png" alt=""> -->

    <div class="home"> Home </div>
</div>
</template>

<script>
export default {
  components: {
  },
};
</script>

<style scoped>
.body {
  width: 99vw;
  height: 99vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: linear-gradient(
    45deg,
    rgba(114, 114, 255, 1) 0%,
    /* rgba(114, 114, 255, 1) 50%, */
    /* rgba(120, 120, 255, 1) 10%,
    rgba(136, 136, 255, 1) 20%,
    rgba(147, 147, 255, 1) 30%,
    rgba(153, 153, 255, 1) 40%, */
    /* rgba(170, 170, 255, 1) 50%,
    rgba(179, 179, 255, 1) 60%,
    rgba(187, 187, 255, 1) 70%,
    rgba(210, 210, 255, 1) 80%, */
    /* rgba(221, 221, 255, 1) 50% */
    rgba(221, 221, 255, 1) 100%
  );
}

.home {
  position: fixed;
  bottom: 0;
  left: 0;
}

img {
  width: 99vw;
  height: 97vh;
}

@media (max-width: 768px) {
img {
  width: 98vw;
  height: 97vh;
}
}

@media (max-width: 420px) {
img {
  width: 99vw;
  height: 97vh;
}
}
</style>
