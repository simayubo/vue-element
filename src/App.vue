<template>
  <div id="app" class="wrapper">
    <div id="Top">
      <div class="content">
        <div style="padding-top: 6px;">
          <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tbody>
            <tr>
              <td width="110" align="left">
                <router-link name="top" to="/"><img src="./static/images/logo@2x.png" border="0" align="default" alt="V2EX" width="94" height="30"></router-link></td>
              <td width="auto" align="left">
                <div id="Search"><form action="https://www.google.com/" onsubmit="return dispatch()" target="_blank"><div class="search-input"><input type="text" maxlength="40" name="q" id="q" value=""></div></form></div>
              </td>
              <td width="570" align="right" style="padding-top: 2px;">
                <router-link  class="top" to="/">首页</router-link>&nbsp;&nbsp;&nbsp;
                <span v-if="user == false">
                  <router-link  class="top" to="/register">注册</router-link>&nbsp;&nbsp;&nbsp;
                  <router-link  class="top" to="/login">登录</router-link>
                </span>
                <span v-else-if="user">
                  <router-link  class="top" to="/user">{{user.username}}</router-link>&nbsp;&nbsp;&nbsp;
                  <router-link  class="top" to="/setting">设置</router-link>&nbsp;&nbsp;&nbsp;
                  <a style="cursor: pointer;" class="top" v-on:click="logout">退出</a>
                </span>
              </td>
            </tr>
            </tbody>
            </table>
        </div>
      </div>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <div id="Wrapper" v-loading.fullscreen.lock="isLoading">
        <div class="content">
          <div id="Leftbar"></div>
          <div id="Rightbar" v-if="getRgihtSidebar">
            <div class="sep20"></div>
            <div class="box" v-if="user == false">
              <div class="cell">
                <strong>V2EX = way to explore</strong>
                <div class="sep5"></div>
                <span class="fade">V2EX 是一个关于分享和探索的地方</span>
              </div>
              <div class="inner">
                <div class="sep5"></div>
                <div align="center"><a href="/signup" class="super normal button">现在注册</a>
                  <div class="sep5"></div>
                  <div class="sep10"></div>
                  已注册用户请 &nbsp;<a href="/signin">登录</a></div>
              </div>
            </div>
            <div class="box" v-else-if="user">
              <div class="cell">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tbody>
                  <tr>
                    <td width="48" valign="top">
                      <router-link to="/user">
                        <img :src="files_url+user.avatar" class="avatar" border="0" align="default" style="max-width: 48px; max-height: 48px;">
                      </router-link>
                    </td>
                    <td width="10" valign="top"></td>
                    <td width="auto" align="left">
                      <span class="bigger">
                        <router-link to="/user">
                          {{user.username}}
                        </router-link>
                      </span>
                    </td>
                  </tr>
                  </tbody></table>
                <div class="sep10"></div>
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tbody>
                  <tr>
                    <td width="33%" align="center"><a href="/my/nodes" class="dark" style="display: block;"><span class="bigger">{{getCount.topic}}</span><div class="sep3"></div><span class="fade">我的主题</span></a></td>
                    <td width="34%" style="border-left: 1px solid rgba(100, 100, 100, 0.4); border-right: 1px solid rgba(100, 100, 100, 0.4);" align="center"><a href="/my/topics" class="dark" style="display: block;"><span class="bigger">{{getCount.post}}</span><div class="sep3"></div><span class="fade">我的帖子</span></a></td>
                    <td width="33%" align="center"><a href="/my/following" class="dark" style="display: block;"><span class="bigger">{{getCount.follow}}</span><div class="sep3"></div><span class="fade">我的关注</span></a></td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="cell">
                <div style="width: 250px; background-color: #f0f0f0; height: 3px; display: inline-block; vertical-align: middle;"><div style="width: 28px; background-color: #ccc; height: 3px; display: inline-block;"></div></div>
              </div>
              <div class="cell" style="padding: 5px;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tbody><tr>
                    <td width="32">
                      <router-link to="/new-topic">
                        <img src="./static/images/flat_compose.png" width="32" border="0">
                      </router-link>
                    </td>
                    <td width="10"></td>
                    <td width="auto" valign="middle" align="left">
                      <router-link to="/new-topic">
                        创作新主题
                      </router-link>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <div class="inner"><div class="fr" id="money"><a href="/balance" class="balance_area" style="">{{getCount.score}} <img src="//v2ex.assets.uxengine.net/static/img/bronze.png" alt="B" align="absmiddle" border="0"></a></div><a href="/notifications" class="fade">{{getCount.message}} 条未读提醒</a></div>
            </div>
          </div>
          <router-view></router-view>
        </div>
      <div class="c"></div>
      <div class="sep20"></div>
    </div>
    <div id="Bottom">
      <div class="content">
        <div class="inner">
          <div class="sep10"></div>
          <div class="fr">
            <a href="https://www.digitalocean.com/?refcode=1b51f1a7651d" target="_blank"><img src="//v2ex.assets.uxengine.net/assets/logos/do_blue.png" width="60" border="0" alt="DigitalOcean"></a>
          </div>
          <strong><a href="/about" class="dark" target="_self">关于</a> &nbsp; <span class="snow">·</span> &nbsp; <a href="/faq" class="dark" target="_self">FAQ</a> &nbsp; <span class="snow">·</span> &nbsp; <a href="/p/7v9TEc53" class="dark" target="_self">API</a> &nbsp; <span class="snow">·</span> &nbsp; <a href="/mission" class="dark" target="_self">我们的愿景</a> &nbsp; <span class="snow">·</span> &nbsp; <a href="/advertise" class="dark" target="_self">广告投放</a> &nbsp; <span class="snow">·</span> &nbsp; <a href="/advertise/2016.html" class="dark" target="_self">鸣谢</a> &nbsp; <span class="snow">·</span> &nbsp; 2619 人在线</strong> &nbsp; <span class="fade">最高记录 3541</span> &nbsp; <span class="snow">·</span>
          <div class="sep20"></div>
          创意工作者们的社区
          <div class="sep5"></div>
          World is powered by solitude
          <div class="sep20"></div>
          <span class="small fade">VERSION: 3.9.7.5 · 19ms · UTC 02:41 · PVG 10:41 · LAX 19:41 · JFK 22:41<br>♥ Do have faith in what you're doing.</span>
          <div class="sep20"></div>
          <span class="f12 gray"><a href="http://www.miibeian.gov.cn/" target="_blank" rel="nofollow">沪ICP备16043287号-1</a></span>
          <div class="sep10"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import store from './vuex/store'
    export default {
        data() {
            return {
                activeIndex: 'no',
                user: false,
                files_url: FILES_URL,
//                count: this.$store.state.count
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            getUser:function(){
                const _user = localStorage.getItem('user');
                if (_user){
                    this.user = JSON.parse(_user)
                }
                this.$store.commit('SET_COUNT', {
                    message: 18,
                    topic: 2
                });
                this.$store.commit('SET_USER', this.user);
            },
            logout:function () {
                localStorage.clear();
                if (!localStorage.getItem('token')){
                    window.location.href = '/'
                }else {
                    this.$message.error('退出失败');
                }
            }
        },
        created:function(){
//            console.log(getCount);
            this.getUser();
        },
        store: store,
        computed: {
            isLoading (){
                return this.$store.state.isLoading;
            },
            getCount(){
                return this.$store.state.count;
            },
            getRgihtSidebar(){
                return this.$store.state.rightSidebar
            }
        }
    }
</script>