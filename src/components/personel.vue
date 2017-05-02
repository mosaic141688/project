<template>
  <md-card class="hello">
      <md-subheader>Personel</md-subheader>
  <md-list v-for="user in users" :key="user.key"class="md-double-line">
    <md-list-item>
      <md-avatar  id="user_head" @click.native="" class="md-avatar-icon">
        <md-icon>person</md-icon>
      </md-avatar>
      <div class="md-list-text-container">
        <span>{{user.name}} {{user.surname}}</span>
        <p>Jan 9, 2014</p>
      </div>
      <md-button class="md-icon-button md-list-action">
        <md-icon>info</md-icon>
      </md-button>
      <md-button class="md-icon-button md-list-action">
          <md-icon md-theme="light-blue" class="md-primary">home</md-icon>
      </md-button>
    </md-list-item>
  </md-list>
  </md-card>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:mapState([
  'classes',
  'users',
  'selectedPerson'
]),
  methods: {
   openDialog(ref) {
     this.$refs[ref].open();
   },
   closeDialog(ref) {
     this.$refs[ref].close();
   },
   onOpen() {
     console.log('Opened');
   },
   onClose(type) {
     console.log('Closed', type);
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
