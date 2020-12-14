<template>
  <div>
    <div class="nav">
      <p class="app-logo" @click="goTo('/')">Git <span>8</span> k</p>
    </div>

    <div class="parent">
      <input type="search" name="" id=""  placeholder="MubarakSULAYMAN" class="small-search-bar">
      <button class="submit-search"> Search </button>
      <div class="filters">
        <div class="filter-group"> Filter Group </div>
        <div class="categories">
          <ul>
            <li> Users </li>
            <li> Repositories </li>
            <li> Commits </li>
            <li> Issues </li>
            <li> Packages </li>
          </ul>
        </div>
        <div class="others">
          <span>Filters</span>
          <div class="radio-toolbar">
            <input type="radio" name="radio" id="radioMostFollowers" value="Most Followers">
            <label for="radioMostFollowers"> Most followers </label>

            <input type="radio" name="radio" id="radioMostRepos" value="Most Repos">
            <label for="radioMostRepos"> Most repositories </label>

            <input type="radio" name="radio" id="radioLeastFollowers" value="Least Followers">
            <label for="radioLeastFollowers"> Least followers </label>

            <input type="radio" name="radio" id="radioLeastRepos" value="Least Repos">
            <label for="radioLeastRepos"> Least repositories </label>
          </div>
          <!-- <p>&nbsp;</p> -->
        </div>
      </div>

      <div class="query-result">
        <div class="card-layers">
          <div class="card">
            <div class="img-wrap">
              <img src="" alt="">
            </div>
            <div class="mini-details">
              <h2> Lim Fou </h2>
              <p class="title"> Ghana </p>
              <p class="description"> I am you when I am not me. But always, I am a better replica of myself. </p>
              <p class="id"> ID:1234567890 </p>

              <div class="extra-details">
                <div class="followers">
                  <span class="icon"></span>
                  <span class="name"> Followers </span>
                </div>
                <div class="repos">
                  <span class="icon"></span>
                  <span class="name"> Repos </span>
                </div>
              </div>

              <a href="" target="_blank" rel="noopener noreferrer" class=""><button>Open</button></a>
            </div>
          </div>
        </div>

        <div class="card-layers">
          <div class="card">
            <div class="img-wrap">
              <img src="" alt="">
            </div>
            <div class="mini-details">
              <h2> Lim Fou </h2>
              <p class="title"> Ghana </p>
              <p class="description"> I am you when I am not me. But always, I am a better replica of myself. </p>
              <p class="id"> ID:1234567890 </p>

              <div class="extra-details">
                <div class="followers">
                  <span class="icon"></span>
                  <span class="name"> Followers </span>
                </div>
                <div class="repos">
                  <span class="icon"></span>
                  <span class="name"> Repos </span>
                </div>
              </div>

              <a href="" target="_blank" rel="noopener noreferrer" class=""><button>Open</button></a>
            </div>
          </div>
        </div>

        <div class="card-layers">
          <div class="card">
            <div class="img-wrap">
              <img src="" alt="">
            </div>
            <div class="mini-details">
              <h2> Lim Fou </h2>
              <p class="title"> Ghana </p>
              <p class="description"> I am you when I am not me. But always, I am a better replica of myself. </p>
              <p class="id"> ID:1234567890 </p>

              <div class="extra-details">
                <div class="followers">
                  <span class="icon"></span>
                  <span class="name"> Followers </span>
                </div>
                <div class="repos">
                  <span class="icon"></span>
                  <span class="name"> Repos </span>
                </div>
              </div>

              <a href="" target="_blank" rel="noopener noreferrer" class=""><button>Open</button></a>
            </div>
          </div>
        </div>

        <div class="card-layers">
          <div class="card">
            <div class="img-wrap">
              <img src="" alt="">
            </div>
            <div class="mini-details">
              <h2> Lim Fou </h2>
              <p class="title"> Ghana </p>
              <p class="description"> I am you when I am not me. But always, I am a better replica of myself. </p>
              <p class="id"> ID:1234567890 </p>

              <div class="extra-details">
                <div class="followers">
                  <span class="icon"></span>
                  <span class="name"> Followers </span>
                </div>
                <div class="repos">
                  <span class="icon"></span>
                  <span class="name"> Repos </span>
                </div>
              </div>

              <a href="" target="_blank" rel="noopener noreferrer" class=""><button>Open</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
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

<style>
  body {
    margin: 0;
    padding: 0;
  }

  .nav {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    background: linear-gradient(90deg, rgba(114, 114, 255, 1) 0%, rgba(120, 120, 255, 1) 10%, rgba(136, 136, 255, 1) 20%, rgba(147, 147, 255, 1) 30%, rgba(153, 153, 255, 1) 40%, rgba(170, 170, 255, 1) 50%, rgba(179, 179, 255, 1) 60%, rgba(187, 187, 255, 1) 70%, rgba(210, 210, 255, 1) 80%, rgba(221, 221, 255, 1) 90%);
    box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
    z-index: 50;
  }

  .app-logo {
    width: 10rem;
    margin: 0;
    margin-left: 20px;
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

  .small-search-bar {
    position: absolute;
    top: 15px;
    right: 100px;
    display: block;
    width: 400px;
    margin: auto;
    margin-top: 10px;
    margin-left: 10px;
    padding: 5px 10px;
    background-color: white;
    border-radius: 15px;
    outline: none;
    border: none;
    color: #7272FF;
    font-size: 16px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
      z-index: 50;
  }

  .submit-search {
    position: absolute;
    top: 26px;
    right: 26px;
    display: block;
    outline: none;
    border: none;
    padding: 5px 10px;
    border-radius: 15px;
    border: 1px dashed #7272FF;
    color: #7272FF;
    font-size: 12px;
    font-weight: bold;
    z-index: 100;
    transition: all 0.5s;
  }

  .submit-search:hover,
  .submit-search:focus {
    background-color: #7272FF;
    border: 1px solid #7272FF;
    color: white;
    transform: scale(1.1);
  }

  /* input.submit-search::placeholder,
  input.submit-search:-moz-placeholder,
  input.submit-search:-ms-input-placeholder,
  input.submit-search::-webkit-input-placeholder {
    color: #7272FF;
  } */

  .filters {
    margin: 3rem;
    display: block;
    width: 23rem;
    background-color: white;
    position: -webkit-sticky;
    position: sticky;
    top: 100px;
  }

  .filter-group {
    display: inline-block;
    margin-left: 20px;
    font-weight: bold;
  }

  .categories,
  .others {
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
  }

  .others {
    margin-top: 3rem;
    padding: 10px;
  }

  .query-result {
    margin-top: -34rem;
    margin-left: 30rem;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
  }

  .others span {
    color: #7272FF;
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
    border-bottom: 1px solid #F3F3F3;
    text-align: center;
    transition: all .5s;
  }

  li:first-child {
    border-radius: 10px 10px 0 0;
  }

  li:last-child {
    border-bottom: none;
    border-radius: 0 0 10px 10px;
  }

  li:hover {
    background-color: #7272FF;
    color: white;
    font-weight: 600;
  }

  li:focus {
    background-color: #7272FF;
    color: white;
    font-weight: 600;
  }

  .radio-toolbar {
    margin: 10px;
  }

  .radio-toolbar input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }

  .radio-toolbar label {
    display: inline-block;
    background-color: #E3E3E3;
    padding: 10px 20px;
    font-family: sans-serif, Arial;
    font-size: 16px;
    border: 2px solid transparent;
    border-radius: 5px;
    margin: 1px;
    transition: all 1s;
  }

  .radio-toolbar label:hover {
    background-color: #F3F3F3;
    border: 2px dashed #7272FF;
    color: #7272FF;
  }

  /* .radio-toolbar input[type="radio"]:focus+label {
    border: 2px dashed red;
  } */

  .radio-toolbar input[type="radio"]:checked+label {
    background-color: #7272FF;
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
    box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
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
    box-shadow: 0 2px 20px rgba(0, 0, 0, .2);
    border: 1px solid blue;
    background-color: blue;
  }

  .card:hover:after {
    transform: rotate(10deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, .2);
    border: 1px solid red;
    background-color: red;
  }

  .card .img-wrap {
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 80px;
    right: 10px;
    border-radius: 4px;
    background: linear-gradient(90deg, rgba(114, 114, 255, 1) 0%, rgba(120, 120, 255, 1) 10%, rgba(136, 136, 255, 1) 20%, rgba(147, 147, 255, 1) 30%, rgba(153, 153, 255, 1) 40%, rgba(170, 170, 255, 1) 50%, rgba(179, 179, 255, 1) 60%, rgba(187, 187, 255, 1) 70%, rgba(210, 210, 255, 1) 80%, rgba(221, 221, 255, 1) 90%);
    background: -webkit-linear-gradient(90deg, rgba(114, 114, 255, 1) 0%, rgba(120, 120, 255, 1) 10%, rgba(136, 136, 255, 1) 20%, rgba(147, 147, 255, 1) 30%, rgba(153, 153, 255, 1) 40%, rgba(170, 170, 255, 1) 50%, rgba(179, 179, 255, 1) 60%, rgba(187, 187, 255, 1) 70%, rgba(210, 210, 255, 1) 80%, rgba(221, 221, 255, 1) 90%);
    background: -moz-linear-gradient(90deg, rgba(114, 114, 255, 1) 0%, rgba(120, 120, 255, 1) 10%, rgba(136, 136, 255, 1) 20%, rgba(147, 147, 255, 1) 30%, rgba(153, 153, 255, 1) 40%, rgba(170, 170, 255, 1) 50%, rgba(179, 179, 255, 1) 60%, rgba(187, 187, 255, 1) 70%, rgba(210, 210, 255, 1) 80%, rgba(221, 221, 255, 1) 90%);
    background: -o-linear-gradient(90deg, rgba(114, 114, 255, 1) 0%, rgba(120, 120, 255, 1) 10%, rgba(136, 136, 255, 1) 20%, rgba(147, 147, 255, 1) 30%, rgba(153, 153, 255, 1) 40%, rgba(170, 170, 255, 1) 50%, rgba(179, 179, 255, 1) 60%, rgba(187, 187, 255, 1) 70%, rgba(210, 210, 255, 1) 80%, rgba(221, 221, 255, 1) 90%);
    transition: all .5s;
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
    box-shadow: 0 2px 20px rgba(0, 0, 0, .5);
  }

  .card .img-wrap img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all .5s;
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
    top: 10px;
    left: 10px;
    width: 90%;
    height: 90%;
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
    transition: all .5s;
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
    color: red;
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
    transition: all .5s;
  }

  .card .extra-details {
    display: flex;
    font-size: 14px;
  }

  .card .extra-details .followers,
  .card .extra-details .repos {
    flex-basis: 50%;
  }

  .card .mini-details button {
    font-weight: 900;
    font-size: 14px;
    color: #7272FF;
    padding: 10px 20px;
    display: block;
    background-color: transparent;
    /* border: none; */
    border: .5px dashed #7272FF;
    border-radius: 20px;
    /* visibility: hidden; */
    margin-top: 5px;
    margin-right: auto;
    margin-left: auto;
    opacity: 1;
    transition: all .5s;
  }

  .card:hover .mini-details .description,
  .card:hover .mini-details button {
    opacity: 1;
  }

  .mini-details button:hover {
    color: white;
    background-color: #7272FF;
    border: none;
    transform: scale(1.2);
  }

  @media (max-width: 768px) {

  .small-search-bar {
    position: absolute;
    top: 15px;
    right: 90px;
    width: 250px;
    font-size: 14px;
  }

  .submit-search {
    position: absolute;
    top: 26px;
    right: 15px;
  }

    .filters {
      width: fit-content;
      padding: 5px;
      padding-right: 20px;
      border-radius: 20px;
      background-color: #7272FF;
      transition: all .2s;
      z-index: 999;
    }

    .filters:hover {
      width: 550px;
      height: 250px;
      padding: 10px;
      margin-bottom: 80px;
      border-radius: 5px;
      background-color: white;
      box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
      z-index: 999;
    }

    .categories {
      position: absolute;
      top: -999px;
      left: -999px;
      width: 150px;
      margin-top: -50px;
      transition: all .2s;
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
      transition: all .2s;
      z-index: 50;
    }

    .filters:hover .others {
      top: 10px;
      left: 180px;
    }

    .filter-group {
      color: white;
      transition: all .2s;
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

    .others span {
      color: #7272FF;
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

    .card .mini-details button {
      padding: 8px 15px;
      font-size: 12px;
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
    position: sticky;
    position: -webkit-sticky;
    top: 60px;
    display: block;
    width: 90%;
    margin: auto;
    margin-top: 10px;
    margin-left: 10px;
    padding: 5px 10px;
    background-color: white;
    border-radius: 15px;
    outline: none;
    border: none;
    color: #7272FF;
      box-shadow: 0 2px 10px rgba(0, 0, 0, .2);
      z-index: 50;
  }

  .submit-search {
    position: absolute;
    top: 95px;
    right: 30px;
    display: block;
    outline: none;
    border: none;
    padding: 5px 10px;
    border-radius: 15px;
    border: 1px dashed #7272FF;
    color: #7272FF;
    font-size: 10px;
    z-index: 100;
  }

  .submit-search:hover,
  .submit-search:focus {
    background-color: #7272FF;
    border: 1px solid #7272FF;
    color: white;
  }

    .filters {
      width: fit-content;
      margin-top: 10px;
      margin-left: 15px;
      padding: 5px;
      padding-right: 20px;
      border-radius: 20px;
      background-color: #7272FF;
      transition: all .2s;
      z-index: 999;
    }

    .filters:hover {
      width: 310px;
      height: 370px;
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
      margin: 5px;
    }

    .radio-toolbar label {
      padding: 4px 8px;
    }
  }

</style>
