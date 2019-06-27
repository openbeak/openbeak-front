<template>
  <div id="background">
    <div class="inputTap">
      <input @input="typing" type='text' v-model='message' class="passCode"><br><br>
      <p v-if="valid" class="idInput">아이디를 입력하세요</p>
      <input v-model="beakId" v-if="valid" class="searchBar"><br><br>
      <button @click="sendID" id="submit" v-if="valid">입력</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LandingPage',
  data() {
    return {
      beakId: '',
      valid : false
    }
  },
  methods: {
    sendID() {
      this.$route.params.id = this.beakId;
      console.log(this.$route.params.id);
      this.$router.push(
        {
          name: 'UserMap'
        }
      )
      console.log(this.beakId);
    },
    typing: function(e){
        console.log(e.target.value)
        let message = e.target.value
        this.valid = message.toLowerCase() == 'openbeak';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#background {
  background-color : black;
  background-image : url("../assets/main-bg.png" );
  background-repeat : no-repeat;
  background-position : center top;
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
    /*color : #ffffff;*/
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
    top : 710px;
    right : 795px;
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
    top : 660px;
    right : 795px;
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
    top : 612px;
    right : 650px;
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
    top : 680px;
    right : 790px;
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
    font-family: AppleSDGothicNeo;
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
</style>
