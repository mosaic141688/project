<template>
  <div id="app">
  <div class="phone-viewport">
<md-whiteframe md-tag="md-toolbar" md-elevation="2" md-theme="light-blue" class="md-large">
  <div class="md-toolbar-container">
    <md-button class="md-icon-button" @click.native="$refs.sidenav.toggle()">
      <md-icon>menu</md-icon>
    </md-button>
    <span style="flex: 1"></span>
    <md-button class="md-icon-button">
      <md-icon>search</md-icon>
    </md-button>
    <md-button class="md-icon-button">
      <md-icon>view_module</md-icon>
    </md-button>
  </div>
  <div class="md-toolbar-container">
    <h2 class="md-title">For Rent Web</h2>

    <!-- Dialogs here -->
    <md-dialog  md-open-from="#fab" md-close-to="#fab" ref="dialog_tenent">
      <md-dialog-title>New Tenent</md-dialog-title>
        <md-dialog-content>
          <form>
            <md-subheader class="md-inset"> <span><md-icon>deatails</md-icon> Tenant Details</span></md-subheader>
            <md-layout class="" :md-gutter="32" id="personal">
              <md-layout md-flex="30">
                <md-input-container>
                  <label><span>Full Name</span></label>
                  <md-textarea v-model="selectedTenant.name"></md-textarea>
                </md-input-container>
              </md-layout>
              <md-layout md-flex="30" md-flex-offset="5">
                <md-input-container>
                  <label><span>Email</span></label>
                  <md-textarea v-model="selectedTenant.email"></md-textarea>
                </md-input-container>
              </md-layout>
              <md-layout md-flex="30" md-flex-offset="5">
                <md-input-container>
                  <label><span>Password</span></label>
                  <md-textarea v-model="selectedTenant.password"></md-textarea>
                </md-input-container>
              </md-layout>
            </md-layout>
          </form>
        </md-dialog-content>
        <md-dialog-actions>
          <md-button class="md-primary" @click.native="closeDialog('dialog_tenent')">Cancel</md-button>
          <md-button class="md-primary" @click.native="saveTenant('dialog_tenent')">Create</md-button>
        </md-dialog-actions>
    </md-dialog>
    <md-dialog  md-open-from="#fab" md-close-to="#fab" ref="dialog_agent">
      <md-dialog-title>New Estate Agent</md-dialog-title>
        <md-dialog-content>
          <form>
            <md-subheader class="md-inset"> <span><md-icon>details</md-icon>Details</span></md-subheader>
            <md-layout class="" :md-gutter="32" id="personal">
              <md-layout md-flex="30">
                <md-input-container>
                  <label><span>Full Name</span></label>
                  <md-textarea v-model="selectedAgent.name"></md-textarea>
                </md-input-container>
              </md-layout>
              <md-layout md-flex="30" md-flex-offset="5">
                <md-input-container>
                  <label><span>National Id</span></label>
                  <md-textarea v-model="selectedAgent.natId"></md-textarea>
                </md-input-container>
              </md-layout>
              <md-layout md-flex="30" md-flex-offset="5">
                <md-input-container>
                  <label><span>Agency</span></label>
                  <md-textarea v-model="selectedAgent.agency"></md-textarea>
                </md-input-container>
              </md-layout>
            </md-layout>
          </form>
        </md-dialog-content>
        <md-dialog-actions>
          <md-button class="md-primary" @click.native="closeDialog('dialog_agent')">Cancel</md-button>
          <md-button class="md-primary" @click.native="saveAgent('dialog_agent')">Create</md-button>
        </md-dialog-actions>
    </md-dialog>
    <md-dialog  md-open-from="#fab" md-close-to="#fab" ref="dialog2">
      <md-dialog-title>New House</md-dialog-title>
        <md-dialog-content>
          <form>
            <md-subheader class="md-inset"> <span><md-icon>home</md-icon> House Details</span></md-subheader>
            <md-layout class="" :md-gutter="32" id="personal">
              <md-layout md-flex="30">
                <md-input-container>
                  <label><span>Description</span></label>
                  <md-textarea v-model="newHouse.title"></md-textarea>
                </md-input-container>
              </md-layout>
              <md-layout md-flex="30" md-flex-offset="5">
                <md-input-container>
                  <label><span>City</span></label>
                  <md-textarea v-model="newHouse.city"></md-textarea>
                </md-input-container>
              </md-layout>
              <md-layout md-flex="30" md-flex-offset="5">
                <md-input-container>
                  <label><span>Address</span></label>
                  <md-textarea v-model="newHouse.address"></md-textarea>
                </md-input-container>
              </md-layout>
              <md-layout md-flex="30" md-flex-offset="5">
                <md-input-container>
                  <label><span>Description</span></label>
                  <md-textarea v-model="newHouse.description"></md-textarea>
                </md-input-container>
              </md-layout>
            </md-layout>
            <md-subheader class="md-inset"><span><md-icon>map</md-icon>gps</span></md-subheader>
            <md-layout class="" :md-gutter="32" id="personal">
              <md-layout md-flex="30">
                <md-input-container>
                  <label><span>Latitude</span></label>
                  <md-textarea v-model="selectedHouse.lat"></md-textarea>
                </md-input-container>
              </md-layout>
              <md-layout md-flex="30" md-flex-offset="5">
                <md-input-container>
                  <label><span>Longitude</span></label>
                  <md-textarea v-model="selectedHouse.lng"></md-textarea>
                </md-input-container>
              </md-layout>

            </md-layout>
            </md-input-container>
          </form>
        </md-dialog-content>
        <md-dialog-actions>
          <md-button class="md-primary" @click.native="closeDialog('dialog2')">Cancel</md-button>
          <md-button class="md-primary" @click.native="saveHouse('dialog2')">Create</md-button>
        </md-dialog-actions>
      </md-dialog>
  </div>
</md-whiteframe>
<md-layout :md-gutter="32">
  <md-layout md-flex="25">
    <md-speed-dial md-open="hover" class="md-fab-bottom-right" md-direction="top" md-theme="purple">
    <md-button class="md-fab" md-fab-trigger>
      <md-icon md-icon-morph>close</md-icon>
      <md-icon>add</md-icon>
    </md-button>
    <md-button class="md-fab md-mini md-clean" @click.native="openDialog('dialog2')">
      <md-icon>home</md-icon>
    </md-button>

    <md-button class="md-fab md-mini md-clean" @click.native="openDialog('dialog_tenent')">
      <md-icon>person</md-icon>
    </md-button>
    <md-button class="md-fab md-mini md-clean" @click.native="openDialog('dialog_agent')">
      <md-icon>people</md-icon>
    </md-button>
  </md-speed-dial>
    <md-list>
      <md-list-item>
        <router-link to="/">
        <md-icon>home</md-icon> <span>Home</span>
      </router-link>
      </md-list-item>

      <md-list-item>
        <router-link to="/tenants">
        <md-icon>person</md-icon> <span>Tenants</span>
      </router-link>
      </md-list-item>

      <md-list-item>
        <router-link to="/houses">
        <md-icon>home</md-icon> <span>Houses</span>
      </router-link>
      </md-list-item>

      <md-list-item>
        <router-link to="/">
        <md-icon>people</md-icon> <span>Agents</span>
      </router-link>
      </md-list-item>
    </md-list>
  </md-layout>
  <md-layout md-flex="60">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </md-layout>
</md-layout>

<md-sidenav md-theme="blue" class="md-left" ref="sidenav">
  <md-toolbar class="md-account-header">
    <md-list class="">
      <md-list-item class="md-avatar-list">
        <md-avatar class="md-large">
          <img src="https://placeimg.com/64/64/people/8" alt="People">
        </md-avatar>
        <span style="flex: 1"></span>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/3" alt="People">
        </md-avatar>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/4" alt="People">
        </md-avatar>
      </md-list-item>

      <md-list-item>
        <div class="md-list-text-container">
          <span>John Doe</span>
          <span>johndoe@email.com</span>
        </div>
        <md-button class="md-icon-button md-list-action">
          <md-icon>arrow_drop_down</md-icon>
        </md-button>
      </md-list-item>
    </md-list>
  </md-toolbar>
</md-sidenav>
</div>
<a href="https://msg91.com/startups/?utm_source=startup-banner"><img src="https://msg91.com/images/startups/msg91Badge.png" width="120" height="90" title="MSG91 - SMS for Startups" alt="Bulk SMS - MSG91"></a>
     </div>
</template>
<script>
var Vue = require('vue')
import { mapGetters, mapActions, mapState } from 'vuex'
var VueMaterial = require('vue-material')
import Datepicker from 'vue-material-datepicker';
Vue.default.use(VueMaterial)

export default {
  name: 'app',
  data () {
      return {
        center: {lat: 10.0, lng: 10.0},
        markers: [{
          position: {lat: 10.0, lng: 10.0}
        }, {
          position: {lat: 11.0, lng: 11.0}
        }]
      }
    },
  created: function created() {
    //do something after creating vue instance
    console.log("HELLO WORLD");
  },
  computed:mapState([
  'classes',
  'selectedTenant',
  'selectedAgent',
  'selectedHouse',
  'selectedTenant',
  'newHouse'
]),
components: { datepicker: Datepicker },
created: function created() {
  //do something after creating vue instance
  this.initState()
},
  methods:{
    openDialog(ref) {
      this.$refs[ref].open();
    },
    saveTenant(ref){
      this.$refs[ref].close();
      this.newTenant();
    },
    saveHouse(ref){
      this.createNewHouse();
      this.closeDialog(ref)
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
    ...mapActions(['addTenant','newTenant','initState','createNewHouse'])
  }
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  border: 0;
}
.md-card{
  width: 100%;
  top: -20px;
  padding:20px;
}
.md-dialog{
  width: 100%;
}

#map{
  z-index: 100;
  display: none;
}

.md-fab{
    background: #9C27B0;
}

.wrap-content{
  width: 10%;
}

</style>
