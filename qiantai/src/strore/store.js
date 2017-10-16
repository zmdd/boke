import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        onedata: '',
        twodata: '',
        states: false,
        tablefrom: "",
        states1: false,
    },
    mutations: {
        changeone(state, data) {
            state.onedata = data;
        },
        changetwo(state, data) {
            state.twodata = data;
        },
        changestate(state, data) {
            state.states = data;
        },
        changefrom(state, data) {
            state.tablefrom = data
        },
        changestate1(state, data) {
            state.states1 = data;
        }
    },
    actions: {
        getOne({ dispatch, commit }) {
            return new Promise((resolve, reject) => {
                console.log(this)
                this.axios.get("/api/front_article/getNav").then(data => {
                    commit("changeone", data.data.data)
                    resolve()
                })
            })

        },
        getTwo({ dispatch, commit }) {
            return new Promise((resolve, reject) => {
                this.axios.get("/api/front_article/getArticleAll").then(data => {
                    commit("changetwo", data.data.data);
                    resolve();
                })
            })
        },
        getAllData({ dispatch, commit }, data) {
            Promise.all([dispatch("getOne"), dispatch("getTwo")]).then(() => {
                commit("changestate", true)
                data._this.$router.push({ path: data.id })
            })
        },
        getfrom({ dispatch, commit }) {
            return new Promise((resolve, reject) => {
                this.axios.get("/api/front_article/getArticleAll").then(data => {
                    commit("changefrom", data.data.data);

                    resolve();
                })
            })
        },
        sedfrom({ dispatch, commit }, datas) {
            dispatch("getfrom").then(() => {
                commit("changestate1", true)
                datas._this.$router.push({ path: datas.id })
            })
        }


    }
})

export default store;