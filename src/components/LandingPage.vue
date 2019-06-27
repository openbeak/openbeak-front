<template>

  <div id="background" v-bind:style="{backgroundColor : black}">
    <p id="title">Algoreader</p>
    <p id="description">그만큼 풀어서 리더가 될 수 있겠어?</p>
    <div class="inputTap">
      <input @input="typing" type='text' v-model='message' class="passCode"><br><br>
      <p v-if="valid" class="idInput">아이디를 입력하세요</p>
      <input v-model="baekId" v-if="valid" class="searchBar"><br><br>
      <button @click="sendID" id="submit" v-if="valid">입력</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LandingPage',
  data() {
    return {
      baekId: '',
      valid : false
    }
  },
  methods: {
    sendID() {
      this.$route.params.id = this.baekId;
      console.log(this.$route.params.id);
      this.$router.push(
        {
          name: 'UserMap'
        }
      )
      console.log(this.baekId);
    },
    typing: function(e){
        let message = e.target.value
        this.valid = message.toLowerCase() == 'algoreader';
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #description{
    margin : 10px auto 0 auto;
    width: 500px;
    height: 29px;
    font-family: AppleSDGothicNeo-Bold, serif;
    font-size: 24px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
  }
  #title{
    margin : 0px auto 0 auto;
    padding-top : 125px;
    width: 295px;
    height: 72px;
    font-family: AppleSDGothicNeo-Bold, serif;
    font-size: 60px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
  }
  #background {
    width : 1920px;
    height : 1080px;
    background-image : url("../assets/main-bg.png" );
    background-repeat : no-repeat;
    background-position : center;
    background-color : black;
  }

  input:focus{
    outline : none;
  }

  @keyframes appear {
    from {
      opacity : 0;
    }

    to {
      opacity : 1;
    }
  }
  passCode::placeholder{
    /*color : #git zzffffff;*/
    color : black;
    font-size : 20px;
  }
  .title {
    width: 240px;
    height: 72px;
    border: solid 1px #979797;
    background-color: #d8d8d8;
    margin : 240px auto 116px auto;
  }
  .passCode{
    width : 150px;
    position : relative;
    top : 200px;
    left : 95px;
    color : white;
    background : transparent;
    border : none;
    border-bottom : 1px solid white;
    font-size : 20px;
    animation-name: bbanjjak;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  .searchBar{
    position : relative;
    top : 153px;
    left : 95px;
    color : white;
    background : transparent;
    border : none;
    font-size : 20px;
    border : none;
    border-bottom : 1px solid white;
    width :150px;
    animation-name: appear;
    animation-duration: 2s;
  }
  #submit {
    position : relative;
    top : 100px;
    left : 230px;
    width: 110px;
    height: 30px;
    border-radius: 39.5px;
    border: solid 2px #ffffff;
    background-color: #ffff66;
    animation-name: appear;
    animation-duration: 2s;
  }
  .idInput{
    position : relative;
    color : white;
    top : 170px;
    left : 100px;
    font-size : 20px;

  }
  /*#line {*/
  /*  width : 20px;*/
  /*  border : 0.5px solid white;*/
  /*  clear : both ;*/
  /*  margin : 0 auto 20px auto;*/
  /*}*/
  /*.description{*/
  /*  margin-top : 144px;*/
  /*  margin : 144px auto 0 auto;*/
  /*  width: 552px;*/
  /*  height: 48px;*/
  /*  font-family: AppleSDGothicNeo, serif;*/
  /*  font-size: 16px;*/
  /*  font-weight: 300;*/
  /*  font-style: normal;*/
  /*  font-stretch: normal;*/
  /*  line-height: 1.5;*/
  /*  letter-spacing: normal;*/
  /*  text-align: center;*/
  /*  color: white;*/
  /*  margin-bottom : 160px;*/
  /*}*/
  footer {
    margin : 0 auto 0 auto;
    width: 1920px;
    height: 56px;
    background-color: #2a2b2e;
  }
  footer p {
    margin-left : auto;
    margin-right : auto;
    padding-top : 16px;
    padding-bottom : 16px;
    /*width: 333px;*/
    /*height: 24px;*/
    font-family: AppleSDGothicNeo, serif;
    font-size: 14px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    /*line-height: 1.71;*/
    /*letter-spacing: normal;*/
    text-align: center;
    color: #adadad;
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  @import url("https://www.findmyfont.com/fonts/font-preview?fset=Mac-OS-Fonts&ffam=&fid=e69f76c16ba46d8e1f5b09296e8a24bb&width=800&fsize=48&text=The%20quick%20brown%20fox%20jumps%20over%20the%20lazy%20dog&wrap=2?family=AppleSDGothicNeo-Bold");
</style>

