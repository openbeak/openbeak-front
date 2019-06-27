<template>
  <div class="container">
    <div class="profile">
      <div class="name">
        <p>name</p>
        <v-btn
          color="primary"
          dark
          @click.stop= "modalState == true"
          @click = "modalOn"
          id="goGit"
        >
          Push to Git
<!--          <img src="../assets/icon-git.png">-->
        </v-btn>
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
        <img src="../assets/icon-link.png">
      </div>
      <div class="recolist">
        <p class="category">dfs</p>
        <p class="probnum">0000</p>
        <p class="probname">문제이름</p>
        <img src="../assets/icon-link.png">
      </div>
      <div class="recolist">
        <p class="category">dfs</p>
        <p class="probnum">0000</p>
        <p class="probname">문제이름</p>
        <img src="../assets/icon-link.png">
      </div><div class="recolist">
      <p class="category">dfs</p>
      <p class="probnum">0000</p>
      <p class="probname">문제이름</p>
      <img src="../assets/icon-link.png">
      </div>
      <div class="recolist">
        <p class="category">dfs</p>
        <p class="probnum">0000</p>
        <p class="probname">문제이름</p>
        <img src="../assets/icon-link.png">
      </div>
      <div class="recolist">
        <p class="category">dfs</p>
        <p class="probnum">0000</p>
        <p class="probname">문제이름</p>
        <img src="../assets/icon-link.png">
      </div>
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
    font-size : 18px;
    position : relative;
    left : 40px;
    border-radius : 20px;
    padding : 2px 20px 2px 20px;
  }
  .container *{
    font-family : AppleSDGothicNeo-Bold, serif;
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
    background-color : #ffff66;
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
  .recolist .category {
    position : relative;
    right : 100px;
    display : inline-block;
    padding : 1px 15px 1px 15px;
    background-color : #ffff66;
    border-radius : 12px;
  }
  .probnum{
    position : relative;
    right : 100px;
    padding-left : 10px;
    display : inline-block;
    border : none;
    claer : both;
  }
  .probname{
    margin-top : 0px;
    border : none;
    font-size : 24px;
    text-align : left;
    padding-left : 10px;
  }
  @import url("https://www.findmyfont.com/fonts/font-preview?fset=Mac-OS-Fonts&ffam=&fid=e69f76c16ba46d8e1f5b09296e8a24bb&width=800&fsize=48&text=The%20quick%20brown%20fox%20jumps%20over%20the%20lazy%20dog&wrap=2?family=AppleSDGothicNeo-Bold");
</style>
