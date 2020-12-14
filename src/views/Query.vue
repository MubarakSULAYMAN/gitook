<template>
  <div class="gridlines">
    <div class="gridnav">
      <p class="app-logo" @click="goTo('/')">Git <span>8</span> k</p>
    </div>

    <div class="grid-content">
      <p class="app-name">Gitook</p>
      <p class="app-motto">Explore GitHub user's data in your own way</p>
      <input type="text" placeholder="e.g. MubarakSULAYMAN">
      <button @click="goTo('/result')">Search</button>
    </div>

    <div class="line-1"></div>
    <div class="line-2"></div>
    <div class="line-3"></div>
    <div class="line-4"></div>
    <div class="line-5"></div>
    <div class="line-6"></div>
    <div class="line-7"></div>
    <div class="line-8"></div>
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
    font-family: 'Ubuntu', sans-serif;
  }

  .gridlines {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-left: .5px dashed #E8E8FA;
    margin-bottom: 10rem;
    display: flex;
    flex-flow: row nowrap;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .app-logo {
    width: 10rem;
    font-size: 2.5rem;
    color: white;
    font-weight: 700;
  }

  .app-logo span {
    display: inline-block;
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
    transform: translate(0, .35rem) rotate(90deg);
    background: linear-gradient(90deg, rgba(114, 114, 255, 1) 0%, rgba(120, 120, 255, 1) 10%, rgba(136, 136, 255, 1) 20%, rgba(147, 147, 255, 1) 30%, rgba(153, 153, 255, 1) 40%, rgba(170, 170, 255, 1) 50%, rgba(179, 179, 255, 1) 60%, rgba(187, 187, 255, 1) 70%, rgba(210, 210, 255, 1) 80%, rgba(221, 221, 255, 1) 90%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .gridnav {
    position: absolute;
    top: 0;
    left: 0;
    width: 97.6%;
    padding: 1rem;
    border-bottom: .5px dashed #E8E8FA;
    z-index: 5;
  }

  .grid-content {
    position: absolute;
    top: 20vh;
    left: 25vw;
    width: 50vw;
    height: 50vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    color: white;
    z-index: 5;
  }

  [class*="app"] {
    margin: 0;
  }

  .app-name {
    font-size: 3.5rem;
    font-weight: bold;
  }

  .app-motto {
    font-size: 1.75rem;
    font-weight: 600;
    margin: 2rem 0;
  }

  input {
    width: 30rem;
    padding: 1rem;
    margin: 1rem;
    font-size: 1.5rem;
    text-align: center;
    color: white;
    font-weight: bold;
    border-radius: 10rem;
    background-color: transparent;
    border-color: transparent;

    -webkit-backdrop-filter: blur(1.5px);
    backdrop-filter: blur(1.5px);
    box-shadow:
      0 2.8px 2.2px rgba(0, 0, 0, .034),
      0 6.7px 5.3px rgba(0, 0, 0, .048),
      0 12.5px 10px rgba(0, 0, 0, .06),
      0 22.3px 17.9px rgba(0, 0, 0, .072),
      0 41.8px 33.4px rgba(0, 0, 0, .086),
      0 100px 80px rgba(0, 0, 0, .12);
  }

  input::placeholder {
    color: white;
  }

  input:focus {
    outline: none;
  }

  /* // Chrome/Opera/Safari */
  :hover::-webkit-input-placeholder {
    color: transparent;
    transition: transform 2s ease-in-out;
    transition-delay: 1.5s;
  }

  /* // Firefox 19+ */
  :hover::-moz-placeholder {
    color: transparent;
    transition: transform 2s ease-in-out;
    transition-delay: 1.5s;
  }

  /* // IE 10+ */
  :hover:-ms-input-placeholder {
    color: transparent;
    transition: transform 2s ease-in-out;
    transition-delay: 1.5s;
  }

  /* // Firefox 18- */
  :hover:-moz-placeholder {
    color: transparent;
    transition: transform 2s ease-in-out;
    transition-delay: 1.5s;
  }

  input:focus::placeholder {
    color: transparent;
    transition: transform 2s ease-in-out;
    transition-delay: 1.5s;
  }

  .grid-content button {
    font-size: 1rem;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    padding: 1rem 2rem;
    margin-top: 1rem;
    background: linear-gradient(90deg, rgba(114, 114, 255, 1) 0%, rgba(120, 120, 255, 1) 10%, rgba(136, 136, 255, 1) 20%, rgba(147, 147, 255, 1) 30%, rgba(153, 153, 255, 1) 40%, rgba(170, 170, 255, 1) 50%, rgba(179, 179, 255, 1) 60%, rgba(187, 187, 255, 1) 70%, rgba(210, 210, 255, 1) 80%, rgba(221, 221, 255, 1) 90%);
    border-radius: 10rem;
    border: 5px solid white;
  }

  button:focus {
    outline: none;
    transform: scale(1.1);
    transition: transform 2s ease-in-out;
  }

  button:hover {
    transform: scale(.9);
    transition: transform 2s ease-in-out;
  }

  [class*="line-"] {
    width: 12.5vw;
    border-right: .5px dashed #E8E8FA;
  }

  .line-1 {
    background-color: #7272FF;
  }

  .line-2 {
    background-color: #7878FF;
  }

  .line-3 {
    background-color: #8888FF;
  }

  .line-4 {
    background-color: #9393FF;
  }

  .line-5 {
    background-color: #9999FF;
  }

  .line-6 {
    background-color: #AAAAFF;
  }


  .line-7 {
    background-color: #B3B3FF;
  }

  .line-8 {
    background-color: #BBBBFF;
  }

  .line-9 {
    background-color: #D2D2FF;
  }

  .line-10 {
    background-color: #DDDDFF;
  }

  @media (max-width: 768px) {
    .grid-content {
      left: 10vw;
      width: 80vw;
    }

    .app-name {
      font-size: 2.5rem;
    }

    .app-motto {
      font-size: 1.25rem;
    }

    input {
      font-size: 1.25rem;
    }

    .grid-content button {
      padding: .5rem 1rem;
      margin-top: .2rem;
      border-radius: 5rem;
      border-width: 4px;
    }
  }

  @media (max-width: 425px) {
    .gridnav {
      padding: .5rem;
    }

    .app-logo {
      font-size: 2rem;
    }

    .grid-content {
      left: 10vw;
      width: 80vw;
    }

    .app-name {
      font-size: 2rem;
    }

    .app-motto {
      font-size: 1rem;
      text-align: center;
    }

    input {
      width: 18rem;
      font-size: 1rem;
    }
  }

</style>
