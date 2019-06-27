<template>
  <v-layout row justify-center id="card">
    <v-dialog v-model="modalState" persistent max-width="600px">
      <v-card >
        <v-card-title id="title">
          <span class="headline">Git hub 로그인<br><small>푸쉬를 대신 해드립니다.</small></span>
        </v-card-title>
        <v-card-text id="content">
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Github ID" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Repository" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions id="footer">
          <v-spacer></v-spacer>
          <v-btn color="white" flat @click="modalOff" id="button">Close</v-btn>
          <v-btn color="#1c1d20" flat @click="modalOff" id="button2">Push</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>


<script>
  export default {
    name: "Modal",
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
      }
    }
  }
</script>
<style>
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
    background-color: rgba( 100, 100, 100, 0.1 );
  }
  #footer{
    padding-bottom : 30px;
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
  }
</style>
