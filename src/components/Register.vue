<template>
    <div id="Main">
        <div class="sep20"></div>
        <div class="box">
            <div class="header"><a href="/">V2EX</a> <span class="chevron">&nbsp;›&nbsp;</span> 注册</div>
            <div class="inner">
                <form id="form">
                    <table cellpadding="5" cellspacing="0" border="0" width="100%">
                        <tbody>
                        <tr>
                            <td width="120" align="right" valign="top"><div class="sep5"></div>用户名</td>
                            <td width="auto" align="left">
                                <input type="text" class="sl" name="username" v-model="form.username" autocorrect="off" spellcheck="false" autocapitalize="off"><div class="sep5"></div><span class="fade">请使用半角的 a-z 或数字 3-15</span></td>
                        </tr>
                        <tr>
                            <td width="120" align="right">密码</td>
                            <td width="auto" align="left">
                                <input type="password" class="sl" name="password" v-model="form.password" autocorrect="off" spellcheck="false" autocapitalize="off"></td>
                        </tr>
                        <tr>
                            <td width="120" align="right" valign="top"><div class="sep5"></div>电子邮件</td>
                            <td width="auto" align="left"><input type="email" class="sl" name="email" v-model="form.email" autocorrect="off" spellcheck="false" autocapitalize="off"><div class="sep5"></div><span class="fade">请使用真实电子邮箱注册，我们不会将你的邮箱地址分享给任何人</span></td>
                        </tr>
                        <!--<tr>-->
                            <!--<td width="120" align="right">你是机器人么？</td>-->
                            <!--<td width="auto" align="left"><div style="background-image: url('/_captcha?once=78089'); background-repeat: no-repeat; width: 320px; height: 80px; border-radius: 3px; border: 1px solid #ccc;"></div><div class="sep10"></div><input type="text" class="sl" name="ecfa20ebca3d4b5bbad2eee07ccef96f916b9e5f7400f5212bdc20eb8da99942" value="" autocorrect="off" spellcheck="false" autocapitalize="off" placeholder="请输入上图中的验证码"></td>-->
                        <!--</tr>-->
                        <tr>
                            <td width="120" align="right"></td>
                            <td width="auto" align="left">
                                <input type="button" class="super normal button" v-on:click="submit()" value="注册"></td>
                        </tr>
                        </tbody></table>
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
                    'username': '',
                    'password': '',
                    'email': ''
                }
            };
        },
        methods:{
            submit:function () {
                this.$http.post(HOST+'/auth/register', this.form, {emulateJSON:true}).then(
                    function (res) {
                        if (res.body.success == true){
                            localStorage.setItem('Authorization', res.body.data.token)
                            localStorage.setItem('user', JSON.stringify(res.body.data.user))
                            this.$message({
                                message: '注册成功！',
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