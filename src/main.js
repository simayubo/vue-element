import Vue from 'vue'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource';
import App from './App.vue'
import VueRouter from 'vue-router'
import config from './config/config';
import store from './vuex/store';
import { sync } from 'vuex-router-sync'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import Highlight from './vendor/highlight.js'

//引入静态资源
//css
import 'element-ui/lib/theme-default/index.css'
import './static/css/common.css';
import './static/css/basic.css';
import './static/css/desktop.css';
import './static/css/font-awesome.min.css';
import './static/css/jquery.textcomplete.css';
import './static/css/select2.css';
import './static/css/selectboxit.css';
import './static/css/style.css';
import './static/css/tomorrow.css';
import './static/css/zocial.css';
//js
import './static/js/jquery.js'
import './static/js/analytics.js'
import './static/js/common.js'
import './static/js/highlight.pack.js'
import './static/js/jquery.autosize.js'
import './static/js/jquery.textcomplete.min.js'
import './static/js/jquery-ui.js'
import './static/js/lscache.min.js'
import './static/js/select2.min.js'
import './static/js/selectboxit.min.js'
import './static/js/v2ex.js'

//路由
import Index from './components/Index.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import NotFoundComponent from './components/NotFoundComponent.vue'
import NewTopic from './components/user/NewTopic.vue'

Vue.use(ElementUI);
// 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.use(Highlight);

// 定义路由
const routes = [
    { path: '/', component: Index },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/new-topic', component: NewTopic },
    { path: '*', component: NotFoundComponent }
];

// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({routes});

const commit = store.commit || store.dispatch;

//加上进度条
//路由加载前
router.beforeEach((to, from, next) => {
    NProgress.start();
    commit('SET_RIGHT_SIDEBAR', true);
    next();
});
//路由加载结束
router.afterEach((to, from) => {
    setTimeout(function(){
        NProgress.done();
    }, LOADING_TIME);
});

new Vue({
  el: '#app',
  // render: h => h(App)
  template: '<App/>',
    components: { App },
    router
});

//ajax请求拦截器
Vue.http.interceptors.push((request, next) => {
    commit('UPDATE_LOADING', true);
    //请求前加上 Authorization
    const authorization = localStorage.getItem('Authorization');
    if(authorization){
        Vue.http.headers.common.Authorization = authorization
    }

    // continue to next interceptor 请求后
    next((response) => {

        // setTimeout(function () {
            commit('UPDATE_LOADING', false)
        // }, 100);
        if(response.status >= 200 && response.status < 300){
            return response;
        }else if (response.status === 400 || response.status === 401) {
            ElementUI.Message.error('用户认证失败');

        } else if (response.status === 422){
            var _error = response.body.data.error;
            var _error_msg = '';
            for(var i in _error) {
                _error_msg += _error[i][0]+"\r\n"
            }
            ElementUI.Message({
                message: _error_msg,
                type: 'warning'
            });

        }else if (response.status === 404){
            ElementUI.Message.error('请求资源不存在！');
        }else if(response.status === 500 || response.status === 0){
            ElementUI.Message.error('服务器内部错误！('+response.body.msg+')');
        }else {
            ElementUI.Message.error('未知错误！');
        }
    });
});

//更改标题
Vue.directive('title', {
    inserted: function (el, binding) {
        document.title = el.dataset.title
    }
});
