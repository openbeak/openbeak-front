<template>
  <v-layout row justify-center>
    <v-dialog v-model="modalState" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Git hub 로그<br><small>푸쉬를 대신 해드립니다.</small></span>
        </v-card-title>
        <v-card-text>
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
        <v-card-actions style="padding-bottom : 30px; padding-right : 30px">
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="modalOff">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="modalOff">Push</v-btn>
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
