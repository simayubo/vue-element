import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    isLoading: false,
    user: false,
    count: {
        topic: 0,
        post: 0,
        follow: 0,
        message: 0,
        score: 0
    },
    rightSidebar: true
};
export default new Vuex.Store({
    state,
    mutations: {
        UPDATE_LOADING(state, status) {
            state.isLoading = status
        },
        SET_COUNT(state, count){
            if (count.topic){
                state.count.topic = count.topic
            }
            if (count.post){
                state.count.post = count.post
            }
            if (count.follow){
                state.count.follow = count.follow
            }
            if (count.message){
                state.count.message = count.message
            }
            if (count.score){
                state.count.score = count.score
            }
        },
        SET_USER(state, user){
            state.user = user
        },
        SET_RIGHT_SIDEBAR(state, status){
            state.rightSidebar = status
        }
    }
})