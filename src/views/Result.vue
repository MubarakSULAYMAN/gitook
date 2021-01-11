<template>
  <div>
    <div class="nav">
      <p class="app-logo" @click="goTo('/')">Git <span>8</span> k</p>
    </div>

    <div class="parent">
      <div>
        <input
          placeholder="e.g MubarakSULAYMAN"
          class="small-search-bar"
          v-model="queryTerm"
          @keyup.enter="requeryRepo"
        />
        <button type="submit" class="submit-search" @click="requeryRepo">
          <img
            src="../assets/fonts/remixicon/search-eye-line.svg"
            alt="Search Icon"
            width="16"
            height="16"
            v-if="searchStatus === 'Search'"
          />
          <font-awesome-icon
            :icon="['fas', 'spinner']"
            spin
            size="lg"
            :style="{ color: '#7272ff' }"
            v-if="searchStatus === 'Searching'"
          />
        </button>
      </div>

      <div class="filters" v-if="totalCount > 0">
        <div class="filter-group">Filter Group</div>
        <div class="categories">
          <ul>
            <li class="users">Users</li>
            <li @click="showWarning('Feature not available')">Repositories</li>
            <li @click="showWarning('Feature not available')">Commits</li>
            <li @click="showWarning('Feature not available')">Issues</li>
            <li @click="showWarning('Feature not available')">Packages</li>
          </ul>
        </div>
        <div class="others">
          <div class="title">Filters</div>
          <div class="radio-toolbar">
            <input
              type="radio"
              name="radio"
              id="radioMostFollowers"
              value="Most Followers"
              @click="showWarning('Feature not available')"
            />
            <label for="radioMostFollowers"> Most followers </label>

            <input
              type="radio"
              name="radio"
              id="radioMostRepos"
              value="Most Repos"
              @click="showWarning('Feature not available')"
            />
            <label for="radioMostRepos"> Most repositories </label>

            <input
              type="radio"
              name="radio"
              id="radioLeastFollowers"
              value="Least Followers"
              @click="showWarning('Feature not available')"
            />
            <label for="radioLeastFollowers"> Least followers </label>

            <input
              type="radio"
              name="radio"
              id="radioLeastRepos"
              value="Least Repos"
              @click="showWarning('Feature not available')"
            />
            <label for="radioLeastRepos"> Least repositories </label>
          </div>
          <!-- <p>&nbsp;</p> -->
        </div>
      </div>

      <img
        src="../assets/images/github4O4.png"
        alt="No result found"
        class="no-result"
        v-if="emptyPage && $route.query.name"
      />

      <font-awesome-icon
        :icon="['fas', 'sync-alt']"
        spin
        size="10x"
        :style="{ color: '#7272ff' }"
        class="sync"
        v-if="searchStatus === 'Searching'"
      />

      <img
        src="../assets/images/githubHome.png"
        alt="Custom welcome page, with github octocat and two squirrels."
        class="welcome-image"
        v-if="emptyPage && !$route.query.name"
      />

      <div v-if="totalCount > 0">
        <div class="result-count">
          <strong> {{ totalCount | formatNum() }} results found </strong> /
          <span> showing {{ searchResult.length }} </span>
        </div>

        <div class="pagination" v-if="numOfPages !== 0">
          <button class="previous" @click="gotoPrevious">
            <img
              src="../assets/fonts/remixicon/arrow-left-s-line.svg"
              alt="Followers Icon"
              width="16"
              height="16"
            />
            Previous
          </button>
          <button @click="gotoFirst">First</button>
          <span class="page-progress">
            Page {{ $route.query.page }} of {{ numOfPages }}
          </span>
          <button @click="gotoLast">Last</button>
          <button class="next" @click="gotoNext">
            Next
            <img
              src="../assets/fonts/remixicon/arrow-right-s-line.svg"
              alt="Followers Icon"
              width="16"
              height="16"
            />
          </button>
        </div>

        <div class="query-result">
          <div
            class="card-layers"
            v-for="(item, index) in searchResult"
            :key="index"
          >
            <div class="card">
              <div class="img-wrap">
                <img
                  :src="item.avatar_url | replaceEmpty('Image URL')"
                  :alt="item.name | replaceEmpty('Image ALT')"
                />
              </div>
              <div class="mini-details">
                <h2>{{ item.name | truncateName() }}</h2>
                <p class="title">
                  {{ item.location | replaceEmpty("Location") }}
                </p>
                <div class="classified-details">
                  <p class="description">
                    {{ item.bio | truncateBio }}
                  </p>
                  <p class="id">{{ item.login | replaceEmpty("Name") }}</p>

                  <div class="extra-details">
                    <div class="followers">
                      <span class="value"> {{ item.followers || "No" }} </span>
                      <img
                        src="../assets/fonts/remixicon/group-line.svg"
                        alt="Followers Icon"
                        width="16"
                        height="16"
                      />
                      <span class="name"> Followers </span>
                    </div>
                    <div class="repos">
                      <span class="value">
                        {{ item.public_repos || "No" }}
                      </span>
                      <img
                        src="../assets/fonts/remixicon/book-2-line.svg"
                        alt="Repo Icon"
                        width="16"
                        height="16"
                      />
                      <span class="name"> Repos </span>
                    </div>
                  </div>

                  <a
                    :href="item.html_url | replaceEmpty('Profile URL')"
                    target="_blank"
                    rel="noopener noreferrer"
                    class=""
                  >
                    <button>Open</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition name="fly">
      <div class="warning" v-if="isWarning">
        <p>{{ message }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import apiRequest from "@/utils/apiUtils";

export default {
  data() {
    return {
      queryTerm: "",
      page: 1,
      searchStatus: "Search",
      totalCount: 0,
      currentPage: 1,
      stepBack: false,
      stepUp: false,
      isWarning: false,
      message: "",

      // searchFilters: [
      //   {
      categoryFilters: [
        {
          name: "Users",
          class: "users",
          active: true,
        },
        {
          name: "Repositories",
          class: "repositories",
          active: false,
        },
        {
          name: "Commits",
          class: "commits",
          active: false,
        },
        {
          name: "Issues",
          class: "issues",
          active: false,
        },
        {
          name: "Packages",
          class: "packages",
          active: false,
        },
      ],
      // },
      // {
      otherFilters: [
        {
          id: "radioMostFollowers",
          value: "Most Followers",
        },
        {
          id: "radioMostRepos",
          value: "Most Repos",
        },
        {
          id: "radioLeastFollowers",
          value: "Least Followers",
        },
        {
          id: "radioLeastRepos",
          value: "Least Repos",
        },
      ],
      //   },
      // ],

      filters: [],
    };
  },

  methods: {
    goTo(route) {
      this.$router.push(route);
    },

    showWarning(message) {
      this.message = message;
      this.isWarning = true;
      setTimeout(() => (this.isWarning = false), 5000);
    },

    async queryRepo(name, page, s, o) {
      const searchTerm = name;

      if (searchTerm) {
        this.searchStatus = "Searching";

        try {
          let response = await apiRequest.get(
            `/search/users?q=${name}&per_page=10&page=${page}&sort=${s}&order=${o}`
          );

          if ([200, 201].includes(response.status)) {
            let items = response.data.items;

            if (items.length === 0) {
              // alert(`Zero (0) results found for ${searchTerm}.`);
              this.showWarning(`Zero (0) results found for ${searchTerm}.`);
              this.searchStatus = "Search";
              return;
            }

            // x = items.map((user, i) => {
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

            this.totalCount = response.data.total_count;
            await this.$store.dispatch("updateSearchResult", response.data);
            this.searchStatus = "Search";
          }
        } catch (e) {
          // alert("Error fetching data. Please try again.");
          this.showWarning("Error fetching data. Please try again.");
          // console.log(e);
          this.searchStatus = "Search";
        }
        return;
      }

      this.showWarning("A valid name is required to start a search.");
    },

    async requeryRepo() {
      if (this.queryTerm) {
        this.page = 1;
        await this.queryRepo(this.queryTerm, 1, "", "");

        this.changePage(this.queryTerm, 1, "", "");
      }
    },

    changePage(user, page, s, o) {
      this.$router.push({
        path: "/search",
        query: {
          name: user,
          page: page,
          s: s,
          o: o,
        },
      });
    },

    async gotoPrevious() {
      let currentPage = parseInt(this.$route.query.page);

      if (currentPage > 1) {
        this.stepBack = true;

        await this.queryRepo(
          this.$route.query.name,
          currentPage - 1,
          this.$route.query.s,
          this.$route.query.o
        );

        this.changePage(
          this.$route.query.name,
          currentPage - 1,
          this.$route.query.s,
          this.$route.query.o
        );

        this.stepBack = false;
      } else {
        this.showWarning("No page before this.");
        return;
      }
    },

    async gotoNext() {
      let currentPage = parseInt(this.$route.query.page);

      if (currentPage < this.numOfPages) {
        this.stepUp = true;

        await this.queryRepo(
          this.$route.query.name,
          currentPage + 1,
          this.$route.query.s,
          this.$route.query.o
        );

        this.changePage(
          this.$route.query.name,
          currentPage + 1,
          this.$route.query.s,
          this.$route.query.o
        );

        this.stepUp = false;
      } else {
        this.showWarning("No page after this.");
        return;
      }
    },

    async gotoFirst() {
      await this.queryRepo(
        this.$route.query.name,
        1,
        this.$route.query.s,
        this.$route.query.o
      );

      this.changePage(
        this.$route.query.name,
        1,
        this.$route.query.s,
        this.$route.query.o
      );
    },

    async gotoLast() {
      await this.queryRepo(
        this.$route.query.name,
        this.numOfPages,
        this.$route.query.s,
        this.$route.query.o
      );

      this.changePage(
        this.$route.query.name,
        this.numOfPages,
        this.$route.query.s,
        this.$route.query.o
      );
    },

    // loadFilters() {
    //   this.filters = this.searchFilters.map((filters) => {
    //     return {
    //       categories: filters.categories,
    //       others: filters.others,
    //     };
    //   });
    //   // this.summary = response.data.map((expense_group) => {
    //   //         return {
    //   //           name: expense_group.name,
    //   //           expenses: expense_group.expenses,
    //   //           total_expense: expense_group.expenses.reduce(
    //   //             (total, expense) =>
    //   //               parseInt(total) + parseInt(expense.amount),
    //   //             0
    //   //           ),
    //   //         };
    //   //       });
    // },
  },

  computed: {
    ...mapState(["searchResult"]),

    numOfPages() {
      return Math.round(this.totalCount / 10);
    },

    getToday() {
      const now = new Date();
      let dd = String(now.getDate()).padStart(2, "0");
      let mm = String(now.getMonth() + 1).padStart(2, "0");
      let yyyy = now.getFullYear();
      let today = `${dd}_${mm}_${yyyy}`;
      return today;
    },

    emptyPage() {
      return !this.totalCount && this.searchStatus !== "Searching";
    },
  },

  watch: {
    $route() {
      this.queryRepo(
        this.$route.query.name,
        this.$route.query.page,
        this.$route.query.s,
        this.$route.query.o
      );
    },
  },

  filters: {
    replaceEmpty(value, title) {
      if (!value) {
        return `No ${title} Provided.`;
      } else return value;
    },

    truncateName(value) {
      if (!value) {
        return "No Name here";
      }

      value = value.toString();

      if (value.length > 21) {
        value = value.slice(0, 19) + "...";
        return value;
      } else return value;
    },

    truncateBio(value) {
      if (!value) {
        return "No Bio Provided";
      }

      value = value.toString();

      if (value.length > 37) {
        value = value.slice(0, 34) + "...";
        return value;
      } else return value;
    },

    formatNum(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },

  // created() {
  //   this.loadFilters();
  // },

  mounted() {
    this.totalCount = this.$store.state.totalResultCount;
    if (!this.searchResult.length) {
      this.queryRepo(
        this.$route.query.name,
        this.$route.query.page,
        this.$route.query.s,
        this.$route.query.o
      );
    }
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.nav {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: linear-gradient(
    45deg,
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
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 50;
}

.app-logo {
  width: 10rem;
  margin: 0;
  margin-left: 20px;
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

.small-search-bar {
  position: fixed;
  top: 15px;
  right: 70px;
  display: block;
  width: 400px;
  margin: auto;
  margin-top: 10px;
  margin-left: 10px;
  padding: 5px 5px 5px 20px;
  background-color: white;
  border-radius: 15px;
  outline: none;
  border: none;
  color: #7272ff;
  font-size: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 50;
}

.submit-search {
  position: fixed;
  top: 25px;
  right: 20px;
  display: block;
  outline: none;
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  z-index: 100;
  transition: all 0.5s;
}

.submit-search:hover,
.submit-search:focus {
  background-color: white;
  border: 1px solid #7272ff;
  color: white;
  outline: none;
  transform: scale(1.1);
}

/* .submit-search:hover img,
  .submit-search:focus img {
    color: white !important;
    background-color: white;
  } */

/* input.submit-search::placeholder,
  input.submit-search:-moz-placeholder,
  input.submit-search:-ms-input-placeholder,
  input.submit-search::-webkit-input-placeholder {
    color: #7272FF;
  } */

.filters {
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
  margin: 4rem;
  display: block;
  width: 23rem;
  background-color: white;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: default;
}

/* .filters .categories ul li {
  cursor: grab;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
} */

.filter-group {
  display: inline-block;
  margin-left: 20px;
  font-weight: bold;
}

.categories,
.others {
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.others {
  margin-top: 3rem;
  padding: 10px;
}

img.no-result {
  position: absolute;
  top: 150px;
  right: 250px;
  width: 250px;
  /* width: 250px; */
}

img.welcome-image {
  position: absolute;
  top: 200px;
  right: 75px;
  width: 1200px;
}

.result-count {
  position: fixed;
  top: 90px;
  right: 0;
  padding: 10px 20px;
  border-radius: 20px 0 0 20px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  color: #7272ff;
  font-size: 12px;
  z-index: 100;
}

.pagination {
  position: fixed;
  bottom: 0;
  right: 60px;
  width: 700px;
  padding: 5px 10px;
  border-radius: 10px 10px 0 0;
  background-color: #7272ff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  /* color: #7272FF; */
  font-size: 14px;
  z-index: 100;
}

.pagination button {
  margin: 0 5px;
  background-color: transparent;
  border: none;
  outline: none;
}

.pagination button.previous {
  padding: 1px 10px 5px 5px;
}

.pagination button.next {
  padding: 1px 5px 5px 10px;
}

.pagination .page-progress {
  display: inline-block;
  margin: 0 140px;
}

.pagination :nth-child(1),
.pagination :nth-child(5) {
  border: 1px dashed white;
  border-radius: 15px;
  color: white;
  font-weight: 600;
  transition: all 0.5s;
}

.pagination :nth-child(1) img,
.pagination :nth-child(5) img {
  position: relative;
  top: 4px;
  border: 1px solid #7272ff;
  /* background-color: red;
  background-clip: content-box;
  background-size: cover;
  fill: red; */
}

.pagination :nth-child(1):hover,
.pagination :nth-child(5):hover {
  background-color: white;
  color: #7272ff;
}

.pagination :nth-child(2),
.pagination :nth-child(4) {
  border: 1px solid transparent;
  color: white;
  font-size: 16px;
  transition: all 0.5s;
}

.pagination :nth-child(2) {
  margin-left: 15px;
}

.pagination :nth-child(2):hover {
  border-right-color: white;
  border-bottom-color: white;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 10px;
}

.pagination :nth-child(4) {
  margin-right: 15px;
}

.pagination :nth-child(4):hover {
  border-left-color: white;
  border-bottom-color: white;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 10px;
}

/* .pagination :nth-child(4):hover {
  } */

.query-result {
  margin-top: -34rem;
  margin-left: 30rem;
  margin-bottom: 50px;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
}

.others .title {
  color: #7272ff;
  font-size: 20px;
  font-weight: 600;
}

a {
  text-decoration: none;
  display: inline-block;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px 0;
  border-bottom: 1px solid #f3f3f3;
  text-align: center;
  transition: all 0.3s;
}

li:first-child {
  border-radius: 10px 10px 0 0;
}

li:last-child {
  border-bottom: none;
  border-radius: 0 0 10px 10px;
}

li:hover {
  background-color: #7272ff;
  color: white;
  font-weight: 600;
}

li:focus {
  background-color: #7272ff;
  color: white;
  font-weight: 600;
  outline: none;
}

li.users {
  background-color: #7272ff;
  color: white;
  font-weight: 600;
}

.radio-toolbar {
  display: inline-block;
  margin: 10px;
}

.radio-toolbar input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}

.radio-toolbar label {
  display: inline-block;
  background-color: #e3e3e3;
  padding: 10px 20px;
  font-family: sans-serif, Arial;
  font-size: 16px;
  border: 2px solid transparent;
  border-radius: 5px;
  margin: 1px;
  transition: all 1s;
}

.radio-toolbar label:hover {
  background-color: #f3f3f3;
  border: 2px dashed #7272ff;
  color: #7272ff;
}

/* .radio-toolbar input[type="radio"]:focus+label {
    border: 2px dashed red;
  } */

.radio-toolbar input[type="radio"]:checked + label {
  background-color: #7272ff;
  border-color: transparent;
  color: white;
}

.card-layers {
  margin: 3rem;
}

.card {
  position: relative;
  width: 300px;
  height: 350px;
  background: #fff;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.card:before,
.card:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: #fff;
  transition: 0.5s;
  z-index: -1;
}

.card:hover:before {
  transform: rotate(20deg);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid blue;
  background-color: blue;
}

.card:hover:after {
  transform: rotate(10deg);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid red;
  background-color: red;
}

.card .img-wrap {
  position: absolute;
  top: 10px;
  left: 20px;
  bottom: 80px;
  right: 20px;
  border-radius: 4px;
  background: linear-gradient(
    135deg,
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
    135deg,
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
    135deg,
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
    135deg,
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
  transition: all 0.5s;
  z-index: 1;
}

/* bottom: 80px; */
.card:hover .img-wrap {
  /* bottom: 360px; */
  position: absolute;
  top: -50px;
  left: -50px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

.card .img-wrap img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: contain;
  transition: all 0.5s;
}

/* img.mat {
  width: 50%;
  height: auto;
  display: block;
  margin: 4rem auto;
  padding: 10%;
  background-color: #A67B5B;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/cardboard.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  border: 6px double #483C32;
  box-shadow: 0 0 0 50px rgba(244, 240, 236, 0.4) inset, 0 0 0 11px rgb(180, 130, 90), 0 0 30px rgba(0, 0, 0, 0.8) inset;
  outline: 2px solid #333;
  outline-offset: 0px;
} */

.card:hover .img-wrap img {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.card .mini-details {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  height: 40px;
  padding: 5px;
  overflow: hidden;
  text-align: center;
  transition: all 0.5s;
}

.card:hover .mini-details {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 20px;
  height: 160px;
  text-align: center;
}

.card .mini-details h2 {
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 20px;
  /* color: #777; */
  color: #000000;
  text-transform: uppercase;
}

.card:hover .mini-details h2 {
  color: blue;
}

.card .mini-details .title {
  font-weight: 500;
  font-size: 12px;
  color: #333333;
  display: block;
  margin-top: 2px;
}

.card .mini-details .id {
  margin-bottom: 4px;
  font-size: 10px;
  color: #b3b3b3;
}

.card:hover .mini-details .title {
  color: red;
}

.card .mini-details .description {
  font-weight: 500;
  font-size: 12px;
  display: block;
  margin-top: 5px;
  opacity: 0;
  transition: all 0.5s;
}

.card .extra-details {
  display: flex;
  font-size: 14px;
}

.card .extra-details .followers,
.card .extra-details .repos {
  flex-basis: 50%;
}

.card .extra-details img {
  position: relative;
  top: 2px;
}

.value {
  color: blue;
}

.name {
  color: red;
}

.card .mini-details button {
  font-weight: 900;
  font-size: 14px;
  color: #7272ff;
  padding: 8px 16px;
  display: block;
  background-color: transparent;
  /* border: none; */
  border: 0.5px dashed #7272ff;
  border-radius: 20px;
  /* visibility: hidden; */
  margin-top: 5px;
  margin-right: auto;
  margin-left: auto;
  opacity: 1;
  transition: all 0.5s;
}

.card:hover .mini-details .description,
.card:hover .mini-details button {
  opacity: 1;
}

.classified-details {
  display: none;
  transition: all 3s cubic-bezier(0.165, 0.84, 0.44, 1) 2s;
}

.card:hover .classified-details {
  display: block;
}

.mini-details button:hover {
  color: white;
  background-color: #7272ff;
  border: none;
  transform: scale(1.2);
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
  z-index: 1111;
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

.sync {
  position: fixed;
  top: 40%;
  left: 61.25%;
  transform: translate(-50%, -50%);
  z-index: 2222;
}

@media (max-width: 768px) {
  .small-search-bar {
    position: fixed;
    /* top: 15px; */
    right: 60px;
    width: 250px;
    font-size: 14px;
  }

  .submit-search {
    position: fixed;
    top: 24px;
    right: 10px;
  }

  img.no-result {
    position: absolute;
    top: 150px;
    right: 200px;
    width: 250px;
    width: 250px;
  }

  img.welcome-image {
    /* position: absolute; */
    top: 250px;
    right: 25px;
    width: 575px;
  }

  .result-count {
    position: fixed;
    top: 100px;
  }

  .pagination {
    position: fixed;
    right: 25px;
    width: 550px;
  }

  .pagination .page-progress {
    display: inline-block;
    margin: 0 90px;
  }

  .pagination :nth-child(2),
  .pagination :nth-child(4) {
    font-size: 12px;
  }

  .pagination img {
    width: 0;
    height: 0;
  }

  .filters {
    width: fit-content;
    padding: 5px;
    padding-right: 20px;
    border-radius: 20px;
    background-color: #7272ff;
    transition: all 0.2s;
    z-index: 999;
  }

  .filters:hover {
    width: 550px;
    height: 250px;
    padding: 10px;
    margin-bottom: 80px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 999;
  }

  .categories {
    position: absolute;
    top: -999px;
    left: -999px;
    width: 150px;
    margin-top: -50px;
    transition: all 0.2s;
    z-index: 50;
  }

  .filters:hover .categories {
    position: relative;
    top: 50px;
    left: 0;
    width: 150px;
    margin-top: -50px;
    z-index: 50;
  }

  .others {
    position: absolute;
    top: -999px;
    left: -999px;
    width: 350px;
    transition: all 0.2s;
    z-index: 50;
  }

  .filters:hover .others {
    top: 10px;
    left: 180px;
  }

  .filter-group {
    color: white;
    transition: all 0.2s;
  }

  .filters:hover .filter-group {
    color: black;
  }

  .query-result {
    margin-top: -4rem;
    margin-left: 0rem;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
  }

  .others .title {
    color: #7272ff;
    font-size: 20px;
    font-weight: 600;
  }

  .card-layers {
    margin: 3rem;
  }

  .card {
    position: relative;
    width: 200px;
    height: 250px;
  }

  .card .img-wrap {
    position: absolute;
    top: 8px;
    left: 8px;
    bottom: 80px;
    right: 8px;
    z-index: 1;
  }

  .card:hover .img-wrap {
    position: absolute;
    top: -40px;
    left: -30px;
    width: 100px;
    height: 100px;
  }

  .card .mini-details h2 {
    font-size: 18px;
  }

  .card .extra-details {
    font-size: 12px;
  }

  .card .extra-details .followers,
  .card .extra-details .repos {
    flex-basis: 50%;
  }

  .name {
    display: none;
  }

  .card .mini-details button {
    padding: 6px 12px;
    font-size: 12px;
  }

  .sync {
    left: 36.25%;
  }
}

@media (max-width: 425px) {
  .app-logo {
    width: 10rem;
    font-size: 1.5rem;
  }

  .app-logo span {
    font-size: 2.5rem;
  }

  .small-search-bar {
    position: fixed;
    top: 60px;
    display: block;
    width: 70%;
    margin: auto;
    margin-top: 10px;
    margin-left: 20px;
    /* padding: 5px 10px; */
    background-color: white;
    border-radius: 15px;
    outline: none;
    border: none;
    color: #7272ff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 50;
  }

  .submit-search {
    position: fixed;
    top: 70px;
    right: 10px;
    display: block;
    outline: none;
    border: none;
    /* padding: 4px 8px; */
    /* border-radius: 15px;
      border: 1px dashed #7272FF;
      color: #7272FF; */
    font-size: 10px;
    z-index: 100;
  }

  .submit-search:hover,
  .submit-search:focus {
    background-color: white;
    border: 1px solid #7272ff;
    color: white;
    outline: none;
  }

  .query-result {
    margin-top: 80px;
    /* margin-left: 30rem;
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem; */
  }

  img.no-result {
    position: absolute;
    top: 200px;
    right: 50px;
    width: 250px;
    width: 250px;
  }

  img.welcome-image {
    /* position: absolute; */
    top: 350px;
    right: 25px;
    width: 320px;
  }

  .result-count {
    position: fixed;
    top: 140px;
    padding: 5px 10px;
  }

  .pagination {
    font-size: 10px;
    /* position: fixed; */
    /* top: 50px; */
    left: 10px;
    /* width: 320px; */
    width: 90%;
    /* transform: rotate(90deg); */
  }

  .pagination button {
    padding: 2px 5px;
    font-size: 12px;
  }

  .pagination .page-progress {
    /* display: inline-block; */
    margin: 0 20px;
  }

  .pagination :nth-child(2),
  .pagination :nth-child(4) {
    font-size: 12px;
  }

  .pagination :nth-child(2) {
    margin-left: 5px;
  }

  .pagination :nth-child(4) {
    margin-right: 5px;
  }

  .filters {
    position: fixed;
    top: 45px;
    left: -50px;
    /* width: fit-content;
      margin-top: 50px;
      margin-left: 15px; */
    padding: 5px;
    padding-right: 20px;
    border-radius: 20px;
    background-color: #7272ff;
    font-size: 14px;
    transition: all 0.5s;
    z-index: 999;
  }

  .filters:hover {
    width: 320px;
    height: 390px;
    padding: 10px;
    margin-bottom: 50px;
  }

  .others {
    width: 290px;
  }

  .filters:hover .others {
    top: 210px;
    left: 10px;
  }

  .radio-toolbar {
    display: inline-block;
    /* margin: 5px; */
  }

  .radio-toolbar label {
    padding: 4px 8px;
  }

  .card {
    /* margin: auto !important; */
    position: relative;
    left: 10%;
  }

  .card:hover .mini-details button {
    margin-top: 150px;
  }

  .sync {
    left: 30%;
  }
}
</style>
