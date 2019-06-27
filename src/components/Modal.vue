<template>
  <v-layout row justify-center id="card">
    <v-dialog v-model="modalState" persistent max-width="600px">
      <v-card>
        <v-card-title id="title">
          <span class="headline">Who is the awesome reader?</span>
        </v-card-title>
        <v-card-text id="content">
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="you"  type="text" v-model="you" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="friend" type="text" v-model="friend" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions id="footer">
          <v-spacer></v-spacer>
          <v-btn color="white" flat @click="modalOff" id="button">Close</v-btn>
          <v-btn color="#1c1d20" flat @click="getVictory" id="button2">Go!</v-btn>
        </v-card-actions>
        <v-card-actions id="footer2">
          <div v-if="flag" style="margin-left : 30px; margin-right : 40px">
            <img src="../assets/smile.png" style="width:240px ; height:240px ">
            <center><h2><p class="idwin">{{this.winner}}</p>is winner!</h2></center>
          </div>
        <div v-if="flag">
          <img src="../assets/sad.png" style="width:240px ; height:240px;">
          <center><h2><p class="idlose">{{this.loser}}</p> is loser!</h2></center>
        </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>


<script>
  export default {
    name: "Modal",
    data() {
      return {
        you: '',
        friend: '',
        winner: '',
        loser: '',
        flag : false
      }
    },
    computed:{
      modalState(){
        return this.$store.getters.getShowModal;
      }
    },
    methods:{
      close(){
        this.$emit('close');
      },
      modalOff(){
        this.$store.commit('setModalOff');
      },
      getVictory(){
        console.log("http.get method");
        this.$http.get(`http://ec2-18-191-120-181.us-east-2.compute.amazonaws.com:8080/api/fightProblems/${this.you}/${this.friend}`)
          .then(res => {
            console.log(res.data);
            this.winner = res.data["winner"]["id"];
            this.loser = res.data["loser"]["id"];
            this.flag = true;
          });
      }
    }
  }
</script>
<style>
  v-card *{
    font-family: 'Noto Sans KR', sans-serif;
  }
  v-card-title {
    width : 400px;
    border-radius : 30px;
  }
  .headline{
    font-weight : bold;
    padding-left : 24px;
    font-size : 24px;
    display : block;
    clear : both;
    color : white;
  }
  #title {
    background-color : #1c1d20;
  }
  #content{
    /*background-color : #aaaaaa;*/
    background-color: rgba( 100, 100, 100, 0.1 );
  }
  #footer{
    padding-bottom : 30px;
    padding-right : 30px;
    background-color: rgba( 100, 100, 100, 0.1 );
  }
  #footer2{
    padding-bottom : 50px;
    padding-right : 30px;
    background-color: rgba( 100, 100, 100, 0.1 );
  }
  #button {
    font-size : 24px;
    padding : 12px 98px 40px 98px;
    background-color : #1c1d20;
    border-radius : 15px;
    border : 1px solid #333333;
  }
  #button2 {
    font-size : 24px;
    padding : 12px 98px 40px 98px;
    background-color : #fff226;
    border-radius : 15px;
    border : 1px solid #333333;
    margin-right : 15px;
  }
  .idwin{
    color : blue;
    font-size : 50px;
  }
  .idlose {
    color : red;
    font-size : 50px;
  }
</style>
<link href="https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap" rel="stylesheet">
