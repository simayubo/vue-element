<template>
    <div id="Main">
        <div class="sep20"></div>
        <div class="box">
            <div class="header"><a href="/">V2EX</a> <span class="chevron">&nbsp;›&nbsp;</span> 登录 &nbsp;<li class="fa fa-lock"></li></div>
            <div class="cell">
                <form>
                    <table cellpadding="5" cellspacing="0" border="0" width="100%">
                        <tbody><tr>
                            <td width="120" align="right">邮箱</td>
                            <td width="auto" align="left"><input type="text" class="sl" name="username" v-model="form.email" autofocus="autofocus" autocorrect="off" spellcheck="false" autocapitalize="off" placeholder="电子邮箱地址"></td>
                        </tr>
                        <tr>
                            <td width="120" align="right">密码</td>
                            <td width="auto" align="left"><input type="password" class="sl" name="password" v-model="form.password" autocorrect="off" spellcheck="false" autocapitalize="off"></td>
                        </tr>
                        <tr>
                            <td width="120" align="right"></td>
                            <td width="auto" align="left"><input type="hidden" value="78089" name="once"><input type="button" class="super normal button" v-on:click="submit()" value="登录"></td>
                        </tr>
                        <tr>
                            <td width="120" align="right"></td>
                            <td width="auto" align="left"><a href="/forgot">我忘记密码了</a></td>
                        </tr>
                        </tbody></table>

                    <input type="hidden" value="/" name="next">

                </form>
            </div>

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    'email': '',
                    'password': ''
                }
            };
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
            if (this.$store.state.user){
                this.$router.push('/user')
            }
        }
    }
</script>