<template>
  <div class="container">
    <div class="profile">
      <div class="name">
        <p>name</p>
        <!--        <button id="show-modal" @click="modalOn">Show Modal</button>-->

      </div>
      <div class="problem">
        <div class="line">
          <p>푼 문제 수</p>
          <p id="probnumber">000 문제</p>
        </div>
      </div>
      <div class="ranking">
        <p class="subranking">랭킹</p>
        <p id="rankingnumber">00위</p>
      </div>
    </div>
    <div class="recommend">
      <h1>추천 문제</h1>
      <div class="recolist">
        <p class="category">dfs</p>
        <p class="probnum">0000</p>
        <p class="probname">문제이름</p>
        <a href=""><img src="../assets/icon-link.png"></a>
      </div>
      <div class="recolist">
        <p class="category">dfs</p>
        <p class="probnum">0000</p>
        <p class="probname">문제이름</p>
        <a href=""><img src="../assets/icon-link.png"></a>
      </div>
      <div class="recolist">
        <p class="category">dfs</p>
        <p class="probnum">0000</p>
        <p class="probname">문제이름</p>
        <a href=""><img src="../assets/icon-link.png"></a>
      </div><div class="recolist">
      <p class="category">dfs</p>
      <p class="probnum">0000</p>
      <p class="probname">문제이름</p>
      <a href=""><img src="../assets/icon-link.png"></a>
    </div>
      <div class="recolist">
        <p class="category">dfs</p>
        <p class="probnum">0000</p>
        <p class="probname">문제이름</p>
        <a href=""><img src="../assets/icon-link.png"></a>
      </div>

        <v-btn
          color="primary"
          dark
          @click.stop= "modalState == true"
          @click = "modalOn"
          id="goGit"
        >
          Push to Git
        </v-btn>



    </div>
  </div>
</template>

<script>
  export default {
    name: "Hamburger",
    computed:{
      modalState(){
        return this.$store.getters.getShowModal;
      }
    },
    methods:{
      modalOn(){
        console.log('setmodal!')
        this.$store.commit('setModalOn')
      }
    }
  }
</script>

<style scoped>
  #goGit {
    width : 333px;
    height : 100px;
    font-size : 32px;
    border-radius : 16px;
  }
  .container *{
    font-family: 'Noto Sans KR', sans-serif;
  }
  .name p {
    padding-top : 25px;
    border : none;
    font-size : 32px;
    display : inline-block;
  }
  .name img{
    position : relative;
    top : -85px;
    left : 200px;
  }
  .name{
    height : 80px;
  }
  * {
    border: 1px solid grey;
  }
  .container{
    padding : 0 0 0 0;
    width : 350px;
    height : 1080px;
  }
  .profile {
    background-color : #fff226;
    width : 100%;
    height : 230px;
    padding-bottom : 0px;
  }
  .profile *{
    font-size : 24px;
  }
  .name{
    padding-left : 10%;
    /*padding-right : 10%;*/
    text-align : left;
    height : 80px;
    border : none;
  }
  .line{
    margin : 0 auto 0 auto;
    border : none;
    width : 80%;
    padding-top : 20px;
    border-top : 1px solid black;
    border-bottom : 1px solid black;
    text-align : left;
  }
  .line p{
    border : none;
  }
  .problem{
    height : 75px;
    border : none;
  }
  .problem p{
    font-size : 24px;
    display : inline-block;
  }
  .problem #probnumber {
    float : right;
  }
  .ranking{
    padding-top : 20px;
    padding-left : 10%;
    height : 75px;
    border : none;
  }
  .subranking {
    float : left;
    display : inline-block;
    font-size : 24px;
    border : none;
  }
  .ranking #rankingnumber {
    float : right;
    font-size : 24px;
    border : none;
    position : relative;
    right : 50px;
  }
  .recommend{
    height : 800px;
    background-color : black;
    overflow-y: scroll;
  }
  .recommend h1{
    color : white;
    border : none;
    text-align : left;
    letter-spacing: 3px;
    padding : 15px 0 10px 20px;
  }
  .recolist {
    border-radius: 16px;
    height : 100px;
    margin : 5px 5px 5px 5px;
    background-color : #ffffff;
  }
  .recolist img{
    border : none;
    position : relative;
    bottom : 57px;
    left : 270px;
  }
  .recolist a{
    border : none;
  }
  .recolist .category {
    color : black;
    position : relative;
    top : 14px;
    left : 10px;
    display : inline-block;
    padding : 3px 15px 1px 15px;
    background-color : #fff226;
    border-radius : 12px;
  }
  .probnum{
    color : black;
    position : relative;
    top : 14px;
    padding-left : 13px;
    display : inline-block;
    border : none;
    claer : both;
  }
  .probname{
    margin-top : 8px;
    border : none;
    font-size : 24px;
    text-align : left;
    padding-left : 14px;
  }

</style>
<link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet">
