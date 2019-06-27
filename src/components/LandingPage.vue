<template>
  <div>
    <div class="title">OpenBeak</div>
    <div>
      <input v-model="beakId" placeholder="백준 ID를 입력해줘요." class="searchBar">
    </div>
    <div>
      <button @click="sendID" id="submit">입력</button>
    </div>
    <div class="description">
      <div id="line"></div>
      백준 알고리즘 문제들을 태그별로 분류하여 알려줍니다.<br>
      분류별로 알고리즘 문제를 얼마나 풀었는지, 그리고 어떤 부분이 부족한지 알 수 있습니다.
    </div>
    <footer>
      <p>© 2019 서비스이름. Data based on Baekjoon Online Judge</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      beakId: ''
    }
  },
  methods: {
    sendID() {
      //bbb
      console.log(this.beakId);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input::placeholder{
    color : #ffffff;
    font-size : 20px;
  }
  .title {
    width: 240px;
    height: 72px;
    border: solid 1px #979797;
    background-color: #d8d8d8;
    margin : 240px auto 116px auto;
  }
  .searchBar{
    width: 600px;
    height: 60px;
    border-radius: 39.5px;
    border: solid 2px #ffffff;
    background-color: rgba(255, 255, 255, 0.35);
    padding-left : 40px;
    color : white;
    font-size : 20px;
  }
  #submit {
    position : relative;
    top : -59px;
    left : 255px;
    width: 120px;
    height: 52px;
    border-radius: 39.5px;
    border: solid 2px #ffffff;
    background-color: #ffff66;
  }
  #line {
    width : 20px;
    border : 0.5px solid white;
    clear : both ;
    margin : 0 auto 20px auto;
  }
  .description{
    margin-top : 144px;
    margin : 144px auto 0 auto;
    width: 552px;
    height: 48px;
    font-family: AppleSDGothicNeo, serif;
    font-size: 16px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: white;
    margin-bottom : 160px;
  }
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
