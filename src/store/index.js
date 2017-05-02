import Vue from 'vue'
import Vuex from 'vuex'
import Socketio from 'socket.io-client';
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

// Dont Leave out Storage
require("firebase/storage");
Vue.use(Vuex)

var config = {
  apiKey: "AIzaSyDU65YuG2mUCa_5tH9BMY1V1adNUjMnvfY",
  authDomain: "forent-e2176.firebaseapp.com",
  databaseURL: "https://forent-e2176.firebaseio.com",
  projectId: "forent-e2176",
  storageBucket: "forent-e2176.appspot.com",
  messagingSenderId: "475018166067"
};
firebase.initializeApp(config);
var database = firebase.database();
var storage = firebase.storage();

var ref = database.ref("default");
var tenantsRef = database.ref('tenants');
var agentsRef= database.ref('agents');
var landLordsRef=database.ref('landlords');
var houseRef = database.ref('houses');

const state = {
  count: 0,
  users:[],
  selectedUser:null,
  newUser:null,
  newHouse:{},
  houses:[],
  tenants:[], //Classes here
  selectedHouse:{
    name:'',
    address:'',
    city:'',
    lat:'',
    lng:'',
    img:{url:""}
  },
  selectedTenant:{
    name:'',
    email:'',
    password:''
  },
  selectedAgent:{
    name:'',
    natId:'',
    agency:''
  },
  selectedTenant:{
    name:'Sihle',
    secondNames:'',
    surname:'',
    employeeNo:'',
    dateEmployed:'',
    department:'',
    bank:'',
    bankBranch:'',
    bankAccount:'',
    tax:''
  },
  selectedSubject:{
    name:'',
    sh:''
  }
}


// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  addTenant(state){
    console.log(state.selectedTenant);
    if(state.selectedTenant==null) return console.log("User Is Null");
    console.log("New User");
  state.users.push(state.selectedTenant);
  },
  addTenant(state){
    console.log(state.selectedTenant);
    if(state.selectedTenant==null) return console.log("User Is Null");
    console.log("New User");
    var tenant={
      name:state.selectedTenant.name,
      email:state.selectedTenant.email,
      password:state.selectedTenant.password
    }
  state.users.push(tenant);
  },
  saveImage(state){
  },
  increment (state) {
    state.users.push({name:"Name1",surname:"Surname 1",uname:"user"});
    socket.emit("new-user",state.users);
    state.count++
  },
  decrement (state) {
    state.count--
  },
  loadTenants(state,tnts){
    state.tenants=[];
    for(var i in tnts){
      state.tenants.push(tnts[i]);
    }
  },
  loadHouses(state,hs){
    state.houses=[];
    for(var i in hs){
      var _hs = hs[i]
      _hs.id=i;
      state.houses.push(_hs);
    }
  },
  selectHouse(state,hs){
    state.selectedHouse=hs;
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  },
  addTenant({commit}){
      commit('addTenant')
  },
  deleteClass(id){
    console.log("DELETCLASS "+id);
    window.socket.emit("delete-class",id);
  },
  createNewHouse({state}){
    console.log(state.newHouse);
    var ref = houseRef.push();
    ref.set(state.newHouse);
  },
  saveImage({commit,state}){
    const _hs=state.selectedHouse;
    var storageRef = firebase.storage().ref();

    var mountainsRef = storageRef.child('img'+_hs.id);
    mountainsRef.put(document.getElementById('house-image').files[0]).then(function(snapshot) {
      console.log('uploaded');
      mountainsRef.getMetadata().then(function(metadata) {
          state.selectedHouse.img=metadata.downloadURLs[0];
          console.log(metadata.downloadURLs[0]);
          houseRef.child(_hs.id).child("img").set(metadata.downloadURLs[0]);
      }).catch(function(error) {
  // Uh-oh, an error occurred!
}     );
    });
  },
  setSelectedHouse({commit},h){
    commit('selectHouse',h);
  },
  newClass({state}){
    console.log("New Class"+JSON.stringify((state.selectedTenant)));
     socket.emit("create-class",state.selectedTenant);
  },
  newTenant({commit,state}){
    var newTenant = tenantsRef.push();
    newTenant.set(state.selectedTenant);
  },
  initState({commit,state}){
    tenantsRef.on('value',(snap)=>{
      var tenants = snap.val();
      commit('loadTenants',tenants);
    })
    houseRef.on('value',(snap)=>{
      var houses = snap.val();
        commit('loadHouses',houses)
    })
    console.log('initState');
    return('Sucess')
  }
}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
