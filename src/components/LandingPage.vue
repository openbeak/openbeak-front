<template>
  <div>
    <div>OpenBeak</div>
    <div>
      <input v-model="beakId" placeholder="백준 ID를 입력해줘요.">
    </div>
    <div>
      <button @click="sendID">입력</button>
    </div>
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
      console.log(this.beakId);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
