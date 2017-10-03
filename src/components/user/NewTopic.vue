<template>
    <div>
        <div class="sep20"></div>
        <div id="edit">
            <el-form ref="form" label-position="top" :model="form" label-width="80px" id="form">
                <el-form-item label="标题">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="内容：（请用Makedown语法）">
                    <mavon-editor v-model="form.value"  id="editor"/>
                </el-form-item>
                <el-form-item label="其它选项">
                    登录可见：<el-switch on-text="" off-text="" v-model="form.is_login">登录可见</el-switch> &nbsp;
                    回复可见：<el-switch on-text="" off-text="" v-model="form.is_reply">回复可见</el-switch>
                </el-form-item>
            </el-form>
            <div class="c"></div>
        </div>
    </div>
</template>
<script>
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
//    import Highlight from '../../vendor/highlight'
    export default {
        data() {
            return {
                img_file: {},
                form: {
                    name: '',
                    value: '',
                    is_login: false,
                    is_reply: false,
                }
            };
        },
        components: {
            mavonEditor,
//            Highlight
        },
        methods:{
            submit:function () {
                this.$http.post(HOST+'/auth/login', this.form, {emulateJSON:true}).then(
                    function (res) {
                        if (res.body.success == true){
                            localStorage.setItem('Authorization', res.body.data.token)
                            localStorage.setItem('user', JSON.stringify(res.body.data.user))
                            this.$message({
                                message: '登录成功！',
                                type: 'success'
                            });
                            window.location.href = '/'
                        }else{
                            this.$message({
                                message: res.body.msg,
                                type: 'warning'
                            });
                        }
                    }
                );
            }
        },
        created: function () {
            this.$store.commit('SET_RIGHT_SIDEBAR', false)
            if (this.$store.state.user == false){
                this.$router.push('/login')
            }
        }
    }
</script>
<style>
    #edit {
        text-align: left;
    }
    #editor{
        height: 480px;
    }
</style>