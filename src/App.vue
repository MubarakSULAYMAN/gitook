<template>
  <div class="gridlines">
    <div class="gridnav">
      <p class="app-logo">GitHub Ninja</p>
    </div>
    <div class="grid-content">
      <p class="app-name">GitHub Ninja</p>
      <p class="app-motto">Explore and Query GitHub in your own way</p>
      <!-- <div class="input-wrap"> -->
      <input type="text" placeholder="e.g. MubarakSULAYMAN">
      <!-- </div> -->
      <button>Search</button>
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
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
</template>

<style lang="scss">

.gridlines {
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* border-top: 1px dashed white;
  border-bottom: 1px dashed white; */
  border-left: 0.5px dashed #E8E8FA;
  margin-bottom: 10rem;
  display: flex;
  flex-flow: row nowrap;
  /* background-attachment: fixed; */
}

.gridnav {
  position: absolute;
  top: 0;
  left: 0;
  width: 98.2%;
  padding: 1rem;
  border-bottom: 0.5px dashed #E8E8FA;
  /* background: rgb(114, 114, 255); */
  /* background: linear-gradient(90deg, rgba(114, 114, 255, 1) 0%, rgba(120, 120, 255, 1) 10%, rgba(136, 136, 255, 1) 20%, rgba(147, 147, 255, 1) 30%, rgba(153, 153, 255, 1) 40%, rgba(170, 170, 255, 1) 50%, rgba(179, 179, 255, 1) 60%, rgba(187, 187, 255, 1) 70%, rgba(210, 210, 255, 1) 80%, rgba(221, 221, 255, 1) 90%); */
  /* background-color: transparent; */
  font-size: 2rem;
  font-weight: 700;
  z-index: 5;
}

.grid-content {
  position: absolute;
  top: 20vh;
  left: 25vw;
  /* border: 3px dashed blue; */
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
  /* padding: 0; */
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

.input-wrap {

  /* width: 100%;
  height: 100%;
  left: 4px;
  top: 4px; */
  background: rgba(180, 180, 180, 0.3);
  filter: blur(2px);
  z-index: 999;
}

input {
  width: 30rem;
  padding: 1rem;
  margin: 1rem;
  font-size: 2rem;
  text-align: center;
  color: white;
  font-weight: bold;
  border-radius: 10rem;
  background-color: transparent;
  /* background-color: blue; */
  border-color: transparent;

  -webkit-backdrop-filter: blur(1.5px);
  backdrop-filter: blur(1.5px);
  box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  /* filter: blur(2px); */
  /* border-top-left-radius: 5px; */
}

/* ::-webkit-input-placeholder {
  color: orange;
}

::-moz-placeholder {
  color: orange;
} */

input::placeholder {
  color: white;
}

input:focus {
  outline: none;
}

/* Chrome/Opera/Safari */
/* ::-webkit-input-placeholder {
  color: transparent;
} */

/* Firefox 19+ */
/* ::-moz-placeholder {
  color: transparent;
} */

/* IE 10+ */
/* :-ms-input-placeholder {
  color: transparent;
} */

/* Firefox 18- */
/* :-moz-placeholder {
  color: transparent;
} */
:hover::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: transparent;
  transition-delay: 0.5s;
}

:hover::-moz-placeholder {
  /* Firefox 19+ */
  color: transparent;
  transition-delay: 0.5s;
}

:hover:-ms-input-placeholder {
  /* IE 10+ */
  color: transparent;
  transition-delay: 0.5s;
}

:hover:-moz-placeholder {
  /* Firefox 18- */
  color: transparent;
  transition-delay: 0.5s;
}

input:focus::placeholder {
  color: transparent;
}

.grid-content button {
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1rem 2rem;
  background: linear-gradient(90deg, rgba(114, 114, 255, 1) 0%, rgba(120, 120, 255, 1) 10%, rgba(136, 136, 255, 1) 20%, rgba(147, 147, 255, 1) 30%, rgba(153, 153, 255, 1) 40%, rgba(170, 170, 255, 1) 50%, rgba(179, 179, 255, 1) 60%, rgba(187, 187, 255, 1) 70%, rgba(210, 210, 255, 1) 80%, rgba(221, 221, 255, 1) 90%);
  border-radius: 10rem;
  border: 5px solid white;
}

[class*="line-"] {
  width: 12.5vw;
  border-right: 0.5px dashed #E8E8FA;
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
  // #app {
  //   font-family: Avenir, Helvetica, Arial, sans-serif;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale;
  //   text-align: center;
  //   color: #2c3e50;
  // }

  // #nav {
  //   padding: 30px;

  //   a {
  //     font-weight: bold;
  //     color: #2c3e50;

  //     &.router-link-exact-active {
  //       color: #42b983;
  //     }
  //   }
  // }

</style>
