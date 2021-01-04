<template>
  <div class="gridlines">
    <div class="gridnav">
      <p class="app-logo">Git <span>8</span> k</p>
    </div>

    <div class="grid-content">
      <p class="app-name">Gitook</p>
      <p class="app-motto">Explore GitHub users' data in your own way</p>
      <input
        placeholder="e.g. MubarakSULAYMAN"
        v-model="queryTerm"
        @keyup.enter="queryRepo"
      />
      <button type="button" @click="queryRepo">{{ btnTxt }}</button>
    </div>

    <div class="line-1"></div>
    <div class="line-2"></div>
    <div class="line-3"></div>
    <div class="line-4"></div>
    <div class="line-5"></div>
    <div class="line-6"></div>
    <div class="line-7"></div>
    <div class="line-8"></div>

    <transition name="fly">
      <div class="warning" v-if="isWarning">
        <p>{{ message }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import apiRequest from "@/utils/apiUtils";

export default {
  data() {
    return {
      queryTerm: "",
      btnTxt: "Search",
      isWarning: false,
      message: "",
    };
  },

  methods: {
    showWarning(message) {
      this.message = message;
      this.isWarning = true;
      setTimeout(() => (this.isWarning = false), 5000);
    },

    async queryRepo() {
      if (this.queryTerm !== "") {
        this.btnTxt = "Searching...";

        try {
          let response = await apiRequest.get(
            `/search/users?q=${this.queryTerm}&per_page=10&page=1`
          );

          if ([200, 201].includes(response.status)) {
            let items = response.data.items;

            if (items.length === 0) {
              alert(`Zero (0) results found for ${this.queryTerm}.`);
              this.btnTxt = "Search";
              return;
            }

            // items.map((user, i) => {
            //   apiRequest.get(`/users/${user.login}`).then((userInfo) => {
            //     console.log(userInfo.data, i)
            //   });
            // });

            for (let i = 0; i < items.length; i++) {
              let newReq = await apiRequest(`/users/${items[i].login}`);
              items[i] = newReq.data;

              if (items[i].bio) {
                items[i].bio = items[i].bio.substring(0, 35);
              }
            }

            await this.$store.dispatch("updateSearchResult", response.data);

            this.$router.push({
              path: "/search",
              query: {
                name: this.queryTerm,
                page: 1,
                // queried_on: `${this.modifiedToday}`,
              },
            });
          }
        } catch (e) {
          // console.log(e);
          // alert("Error fetching data. Please try again.");
          this.showWarning("Error fetching data. Please try again.");
          this.btnTxt = "Search";
        }
        return;
      }

      // alert("Please enter a valid name");
      this.showWarning("Please enter a valid name");
    },

    getYear() {
      const now = new Date();
      let yyyy = now.getFullYear();
      return yyyy;
    },

    getToday() {
      const now = new Date();
      let dd = String(now.getDate()).padStart(2, "0");
      let mm = String(now.getMonth() + 1).padStart(2, "0");
      let today = `${dd}_${mm}_${this.getYear()}`;
      return today;
    },
  },

  computed: {
    thisYear() {
      return this.getYear;
    },
    modifiedToday() {
      return this.getToday().split(" ").join("_");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.gstatic.com");
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");

* {
  font-family: "Ubuntu", sans-serif;
}

/* @keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
} */

.gridlines {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-left: 0.5px dashed #e8e8fa;
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
  cursor: grab;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.app-logo span {
  display: inline-block;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
  transform: translate(0, 0.35rem) rotate(90deg);
  background: linear-gradient(
    90deg,
    rgba(114, 114, 255, 1) 0%,
    rgba(120, 120, 255, 1) 10%,
    rgba(136, 136, 255, 1) 20%,
    rgba(147, 147, 255, 1) 30%,
    rgba(153, 153, 255, 1) 40%,
    rgba(170, 170, 255, 1) 50%,
    rgba(179, 179, 255, 1) 60%,
    rgba(187, 187, 255, 1) 70%,
    rgba(210, 210, 255, 1) 80%,
    rgba(221, 221, 255, 1) 90%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gridnav {
  position: absolute;
  top: 0;
  left: 0;
  width: 97.6%;
  padding: 1rem;
  border-bottom: 0.5px dashed #e8e8fa;
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
  -webkit-text-stroke: white 1px #7272ff;
  text-shadow: -1px -1px 0 #7272ff, 1px -1px 0 #7272ff, -1px 1px 0 #7272ff,
    1px 1px 0 #7272ff;
  font-weight: bold;
  border-radius: 10rem;
  background-color: rgba(255, 255, 255, 0.1);
  /* backdrop-filter: saturate(2.5) blur(10px); */
  /* -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
  filter: alpha(opacity=50); */
  border-color: transparent;

  -webkit-backdrop-filter: blur(1px);
  backdrop-filter: blur(1px);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}

@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  input {
    background-color: transparent;
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
  }
}

input::placeholder {
  color: white;
  /* -webkit-text-stroke: white 1px #7272ff;
  text-shadow:
    -1px -1px 0 #7272ff,  
    1px -1px 0 #7272ff,
    -1px 1px 0 #7272ff,
    1px 1px 0 #7272ff; */
}

input:focus {
  outline: none;
}

/* // Chrome/Opera/Safari */
:hover::-webkit-input-placeholder {
  color: transparent;
  text-shadow: none;
  transition: transform 2s ease-in-out 1.5s;
}

/* // Firefox 19+ */
:hover::-moz-placeholder {
  color: transparent;
  text-shadow: none;
  transition: transform 2s ease-in-out 1.5s;
}

/* // IE 10+ */
:hover:-ms-input-placeholder {
  color: transparent;
  text-shadow: none;
  transition: transform 2s ease-in-out 1.5s;
}

/* // Firefox 18- */
:hover:-moz-placeholder {
  color: transparent;
  text-shadow: none;
  transition: transform 2s ease-in-out 1.5s;
}

input:focus::placeholder {
  color: transparent;
  text-shadow: none;
  transition: transform 2s ease-in-out 1.5s;
}

.grid-content button {
  font-size: 1rem;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1rem 2rem;
  margin-top: 1rem;
  background: linear-gradient(
    90deg,
    rgba(114, 114, 255, 1) 0%,
    rgba(120, 120, 255, 1) 10%,
    rgba(136, 136, 255, 1) 20%,
    rgba(147, 147, 255, 1) 30%,
    rgba(153, 153, 255, 1) 40%,
    rgba(170, 170, 255, 1) 50%,
    rgba(179, 179, 255, 1) 60%,
    rgba(187, 187, 255, 1) 70%,
    rgba(210, 210, 255, 1) 80%,
    rgba(221, 221, 255, 1) 90%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(114, 114, 255, 1) 0%,
    rgba(120, 120, 255, 1) 10%,
    rgba(136, 136, 255, 1) 20%,
    rgba(147, 147, 255, 1) 30%,
    rgba(153, 153, 255, 1) 40%,
    rgba(170, 170, 255, 1) 50%,
    rgba(179, 179, 255, 1) 60%,
    rgba(187, 187, 255, 1) 70%,
    rgba(210, 210, 255, 1) 80%,
    rgba(221, 221, 255, 1) 90%
  );
  background: -moz-linear-gradient(
    90deg,
    rgba(114, 114, 255, 1) 0%,
    rgba(120, 120, 255, 1) 10%,
    rgba(136, 136, 255, 1) 20%,
    rgba(147, 147, 255, 1) 30%,
    rgba(153, 153, 255, 1) 40%,
    rgba(170, 170, 255, 1) 50%,
    rgba(179, 179, 255, 1) 60%,
    rgba(187, 187, 255, 1) 70%,
    rgba(210, 210, 255, 1) 80%,
    rgba(221, 221, 255, 1) 90%
  );
  background: -o-linear-gradient(
    90deg,
    rgba(114, 114, 255, 1) 0%,
    rgba(120, 120, 255, 1) 10%,
    rgba(136, 136, 255, 1) 20%,
    rgba(147, 147, 255, 1) 30%,
    rgba(153, 153, 255, 1) 40%,
    rgba(170, 170, 255, 1) 50%,
    rgba(179, 179, 255, 1) 60%,
    rgba(187, 187, 255, 1) 70%,
    rgba(210, 210, 255, 1) 80%,
    rgba(221, 221, 255, 1) 90%
  );
  border-radius: 10rem;
  border: 5px solid white;
}

.grid-content button:hover {
  background: linear-gradient(
    90deg,
    rgba(114, 114, 255, 1) 100%,
    rgba(114, 114, 255, 1) 50%,
    rgba(221, 221, 255, 1) 50% rgba(221, 221, 255, 1) 0%
  );
  transition: transform all 2s ease-in-out;
  transform: scale(0.9);
}

.grid-content button:focus {
  outline: none;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  transform: scale(1.1);
  transition: transform all 5s cubic-bezier(0.35, 0.85, 0.85, 0.35);
}

[class*="line-"] {
  width: 12.5vw;
  border-right: 0.5px dashed #e8e8fa;
  /* border-right: 0.5px dashed red; */
}

.line-1 {
  background-color: #7272ff;
}

.line-2 {
  background-color: #7878ff;
}

.line-3 {
  background-color: #8888ff;
}

.line-4 {
  background-color: #9393ff;
}

.line-5 {
  background-color: #9999ff;
}

.line-6 {
  background-color: #aaaaff;
}

.line-7 {
  background-color: #b3b3ff;
}

.line-8 {
  background-color: #bbbbff;
}

.line-9 {
  background-color: #d2d2ff;
}

.line-10 {
  background-color: #ddddff;
}

@keyframes rotate {
  0% {
    opacity: 0;
    transform: scale(0) rotate(-180deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

/* .fly-enter-active {
    animation: rotate .5s;
} */

.fly-leave-active {
  animation: rotate 0.5s reverse;
}

/* .fly-enter-active,
  .fly-leave-active { */
.warning {
  position: fixed;
  bottom: 34px;
  left: 66px;
  display: inline-block;
  padding: 5px 10px;
  border: 2px solid red;
  border-radius: 5px;
  font-size: 20px;
  color: red;
  box-shadow: 4px 4px red;
  background-color: transparent;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  transition: all 0.5s;
  z-index: 999;
}

.fly-enter,
.fly-leave-to {
  transform: scaleY(0);
  position: fixed;
  bottom: -999px;
  left: -999px;
}

.warning:hover {
  transform: translate(4px, 4px);
  box-shadow: none;
}

/* .warning .active {
    position: fixed;
    top: 999px;
    right: -999px;
  } */

.warning p {
  margin: 0;
}

.warning p .active {
  position: fixed;
  bottom: -999px;
  left: 999px;
}

/* .fly-enter-active,
  .fly-leave-active {
    transition: transform 0.5s ease-in-out;
  } */

@media (max-width: 768px) {
  .gridnav {
    /* position: absolute;
  top: 0;
  left: 0; */
    width: 95%;
    /* padding: 1rem; */
    /* border-bottom: 0.5px dashed red; */
    /* z-index: 5; */
  }

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
    width: 25rem;
    padding: 0.75rem;
    margin: -1rem 0 1rem 0;
    font-size: 1.5rem;
  }
  /* .grid-content button {
  font-size: 1rem;
  color: white; */
  .grid-content button {
    padding: 0.5rem 1rem;
    margin-top: 0.2rem;
    border-radius: 5rem;
    border-width: 4px;
    font-size: 0.85rem;
  }

  .gridnav {
    /* position: absolute;
  top: 0;
  left: 0; */
    width: 95%;
    /* padding: 1rem; */
    /* border-bottom: 0.5px dashed red; */
    /* z-index: 5; */
  }
}

@media (max-width: 425px) {
  .gridnav {
    padding: 0.5rem;
  }

  .app-logo {
    font-size: 2rem;
  }

  .gridlines {
    /* position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-left: 0.5px dashed #e8e8fa; */
    margin-bottom: 0;
    /* display: flex;
  flex-flow: row nowrap;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  }

  .grid-content {
    left: 10vw;
    width: 80vw;
  }

  .app-name {
    font-size: 2rem;
  }

  .app-motto {
    font-size: 0.9rem;
    text-align: center;
  }

  input {
    width: 19rem;
    padding: 0.5rem;
    font-size: 1.25rem;
  }
}
</style>
