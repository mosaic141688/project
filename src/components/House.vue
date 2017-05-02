<template>
  <md-layout class="" md-gutter id="personal">
    <md-layout class="house-container" md-flex="40" :md-gutter="8" v-for="house in houses" :key="house.key">
      <div >
        <md-card class="md-accent">
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{house.title}}</div>
            <div class="md-subhead">{{house.address}}</div>
          </md-card-header-text>
          <md-menu md-size="4" md-direction="top left">
            <md-button class="md-icon-button" md-menu-trigger>
              <md-icon>more_vert</md-icon>
            </md-button>
            <md-menu-content>
              <md-menu-item>
                <span>Call</span>
                <md-icon>phone</md-icon>
              </md-menu-item>
              <md-menu-item>
                <span>Send a message</span>
                <md-icon>message</md-icon>
              </md-menu-item>
            </md-menu-content>
          </md-menu>
        </md-card-header>

        <md-card-media>
          <img :src="house.img" alt="People">
          <md-button class="on-image" @click.native="openEditImageDialog(house)">
              <md-icon>edit</md-icon>
          </md-button>
        </md-card-media>
        <md-card-content>
            {{house.description}}
      </md-card-content>
      </md-card>
    </div>
    </md-layout>
    <md-dialog  md-open-from="#fab" md-close-to="#fab" ref="edit_image">
      <md-dialog-title>New Tenent</md-dialog-title>
        <md-dialog-content>
          <form>
            <md-input-container>
                <label>Only Images</label>
                <md-file accept="image/*" id="house-image"></md-file>
              </md-input-container>
          </form>
        </md-dialog-content>
        <md-dialog-actions>
          <md-button class="md-primary" @click.native="closeDialog('edit_image')">Cancel</md-button>
          <md-button class="md-primary" @click.native="loadImage('edit_image')">Create</md-button>
        </md-dialog-actions>
    </md-dialog>
  </md-layout>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      onlyImages:null
    }
  },
  computed:mapState([
  'classes',
  'houses',
  'selectedPerson',
  'selectedHouse'
]),
  methods: {
   openDialog(ref) {
     this.$refs[ref].open();
   },
   openEditImageDialog(h){
     this.setSelectedHouse(h);
     this.$refs['edit_image'].open();
   },
   closeDialog(ref) {
     this.$refs[ref].close();
   },
   onOpen() {
     console.log('Opened');
   },
   onClose(type) {
     console.log('Closed', type);
   },
   loadImage(ref){
     this.saveImage();
     this.closeDialog(ref)
   },
   ...mapActions(['saveImage','newHouse','setSelectedHouse'])
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
.on-image{
  position: relative;
  top:-50px;
}
.house-container{
  margin: 10px;
}
</style>
