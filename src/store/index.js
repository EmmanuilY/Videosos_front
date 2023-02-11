import { createStore } from 'vuex'


export default createStore({

  state: () => ({
        backendUrl: "http://194.226.121.80:8000/api/v1",
        films: [],
        token: '',
        access: '',
        isAuthenticated: false,
        name: "google-signin-client_id",
        content: ""

    }),
    getters: {
    getServerUrl: state => {
            return state.backendUrl
        }
    },
    mutations: {

        initializeStore(state) {
          if (localStorage.getItem('access')) {
              state.access = localStorage.getItem('access')
              state.isAuthenticated = true
          } else {
              this.state.access = ''
              this.state.refresh = ''
              state.isAuthenticated = false
          }
      },
          setAccess(state,access){
              state.access = access
              state.isAuthenticated = false
          },

      },


    actions: {

        },

})
