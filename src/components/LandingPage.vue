<template>
  <div id="background">
    <link href="https://fonts.googleapis.com/css?family=VT323&display=swap" rel="stylesheet">
    <div class="inputTap">
      <p class="idInput">openBaek's AlgoreaderShell</p>
      <p class="idInput">Copyright (C) OpenBaek organization. All rights reserved.</p>
      <p class="idInput">Wellcome!!!</p><br>
      <p class="idInput">[OPENHACK@openBeak~] $ Please enter password.</p>
      
      <p class="idInput">
        [OPENHACK@openBeak~] $
        <input @keyup.enter="typing" type='text' v-model='message' class="passCode">
      </p>
      <p v-if="valid" class="idInput2">[OPENHACK@openBeak~] $ Please enter Baekjoon's ID.</p>
      <p v-if="valid" class="idInput2">[OPENHACK@openBeak~] $ 
        <input @keyup.enter="sendID" v-model="baekId" v-if="valid" class="searchBar">
      </p>
    </div>
  </div>
  
</template>

<script>
  import mojs from 'mo-js'
  var first = new mojs.Shape({
      shape: 'circle',
      radius: {
        0: 40
      },
      stroke: '#00b3ff',
      strokeWidth: {
        20: 0
      },
      fill: 'none',
      left: 0,
      top: 0,
      duration:300
    });
    var seconds = [];
    var colors = ['#fff226', '#fc515b', '#60efdf', '#ba03ed'];
    for (var i = 0; i < 4; i++) {
      var second = new mojs.Shape({
        parent: first.el,
        shape: 'circle',
        radius: {
          0: 'rand(10,30)'
        },
        stroke: colors[i],
        strokeWidth: {
          10: 0
        },
        fill: 'none',
        left: '50%',
        top: '50%',
        x:'rand(-50, 50)',
        y:'rand(-50, 50)',
        delay:250
      });
      seconds.push(second);
    }
    document.addEventListener('click', function (e) {
      first.tune({
        x: e.pageX,
        y: e.pageY
      }).replay();
      for(var i=0; i<seconds.length; i++){
        seconds[i].generate().replay();
      }
    })

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
      this.$store.state.user_id = this.baekId;
      console.log(this.$route.params.id);
      this.$router.push(
        {
          name: 'UserMap'
        }
      )
      console.log(this.baekId);
    },
    typing: function(e){
        //console.log(e.target.value)
        let message = e.target.value;
        this.valid = message.toLowerCase() == 'algoreader';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*#description{*/
  /*  margin : 100px auto 0 auto;*/
  /*  padding-left : 50px;*/
  /*  width: 500px;*/
  /*  height: 29px;*/
  /*  font-family: AppleSDGothicNeo, serif;*/
  /*  font-size: 24px;*/
  /*  font-weight: bold;*/
  /*  font-style: normal;*/
  /*  font-stretch: normal;*/
  /*  line-height: normal;*/
  /*  letter-spacing: normal;*/
  /*  color: #ffffff;*/
  /*}*/
  /*#title{*/
  /*  margin : 0px auto 0 auto;*/
  /*  padding-top : 125px;*/
  /*  width: 295px;*/
  /*  height: 72px;*/
  /*  font-family: AppleSDGothicNeo, serif;*/
  /*  font-size: 60px;*/
  /*  font-weight: bold;*/
  /*  font-style: normal;*/
  /*  font-stretch: normal;*/
  /*  line-height: normal;*/
  /*  letter-spacing: normal;*/
  /*  color: #ffffff;*/
  /*}*/
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
    font-size : 30px;
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
    top : 0px;
    left : 0px;
    color : #4AF626;
    background : transparent;
    border : none;
    font-size : 30px;
    animation-name: bbanjjak;
    animation-duration: 1s;
    animation-iteration-count: infinite;
  }
  .searchBar{
    position : relative;
    top : 0px;
    left : 0px;
    color : #4AF626;
    background : transparent;
    border : none;
    font-size : 30px;
    border : none;
    width :150px;
    animation-name: appear;
    animation-duration: 2s;
  }
  #submit {
    position : relative;
    top : 350px;
    left : 1500px;
    width: 110px;
    height: 30px;
    border-radius: 39.5px;
    border: solid 2px #fff226;
    background-color: #fff226;
    animation-name: appear;
    animation-duration: 2s;
  }
  .idInput{
    font-family: 'VT323', monospace;
    position : relative;
    color : #4AF626;
    top : 395px;
    left : 980px;
    font-size : 30px;
  }
   .idInput2{
     font-family: 'VT323', monospace;
    position : relative;
    color : #4AF626;
    top : 395px;
    left : 980px;
    font-size : 30px;
    /* animation-name: appear; */
    /* animation-duration: 2s; */
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
