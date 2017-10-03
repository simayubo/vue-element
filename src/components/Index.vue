<template>
    <div id="Main">
        <div class="sep20"></div>
        <div class="box">
            <div class="inner" style="background-color: #fff; border-top-left-radius: 3px; border-top-right-radius: 3px;" id="Tabs">
                <a href="#" :class="{'tab_current': indexData.pid == 0, 'tab': true}" v-on:click="setCid(0)">全部</a>
                <template v-for="item in indexData.one_category">
                    <a href="#" :class="{'tab_current': indexData.pid == item.id, 'tab': true}" v-on:click="setCid(item.id)">{{item.name}}</a>
                </template>
            </div>

            <div class="cell" v-if="indexData.two_category != ''" style="background-color: #f9f9f9; padding: 10px 10px 10px 20px;">
                <template v-for="item in indexData.two_category">
                    <router-link :to="{path: '/category', query: {id: item.id}}">{{item.name}}</router-link>&nbsp; &nbsp;
                </template>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/vitovan"><img src="../static/images/normal/28986_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392994#reply30">Facebook 要改 React 协议为 MIT 了</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"><li class="fa fa-chevron-up"></li> &nbsp;1 &nbsp;&nbsp; </div><a class="node" href="/go/programmer">程序员</a> &nbsp;•&nbsp; <strong><a href="/member/vitovan">vitovan</a></strong> &nbsp;•&nbsp; 1 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/ltux">ltux</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392994#reply30" class="count_livid">30</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/alwayshere"><img src="../static/images/normal/158237_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/393071#reply24">自己花了很久写的一个功能型 js 代码，怎么防止被窃取用在别人的项目上？</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/programmer">程序员</a> &nbsp;•&nbsp; <strong><a href="/member/alwayshere">alwayshere</a></strong> &nbsp;•&nbsp; 1 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/sublime">sublime</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/393071#reply24" class="count_livid">24</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/lotux"><img src="../static/images/normal/34905_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/393055#reply29">摩拜单车，我对你的好感瞬间就消耗殆尽</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/gts">全球工单系统</a> &nbsp;•&nbsp; <strong><a href="/member/lotux">lotux</a></strong> &nbsp;•&nbsp; 2 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/lotux">lotux</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/393055#reply29" class="count_livid">29</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/pq"><img src="../static/images/normal/233234_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/393058#reply2">能够让 Linux kernel 中自带的 amdgpu 驱动的入门级显卡有哪些？</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/linux">Linux</a> &nbsp;•&nbsp; <strong><a href="/member/pq">pq</a></strong> &nbsp;•&nbsp; 3 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/hjc4869">hjc4869</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/393058#reply2" class="count_livid">2</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/vodo"><img src="../static/images/normal/8704_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392732#reply99">阿里云要完的节奏，工单系统各种拖延 甩锅，就是不解决问题</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/gts">全球工单系统</a> &nbsp;•&nbsp; <strong><a href="/member/vodo">vodo</a></strong> &nbsp;•&nbsp; 22 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/vodo">vodo</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392732#reply99" class="count_livid">99</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/nsgit"><img src="../static/images/normal/149168_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/393054#reply18">90 后程序员的中年危机</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/programmer">程序员</a> &nbsp;•&nbsp; <strong><a href="/member/nsgit">nsgit</a></strong> &nbsp;•&nbsp; 33 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/coolan">coolan</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/393054#reply18" class="count_livid">18</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/hyperxu"><img src="../static/images/normal/192255_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/393074#reply0">MAC 下有哪些运维常用工具？求推荐</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/programmer">程序员</a> &nbsp;•&nbsp; <strong><a href="/member/hyperxu">hyperxu</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/gap"><img src="../static/images/normal/123350_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/393003#reply20">如何限制只允许用户在表单中输入十进制的数呢？</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/js">JavaScript</a> &nbsp;•&nbsp; <strong><a href="/member/gap">gap</a></strong> &nbsp;•&nbsp; 1 小时 1 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/SingeeKing">SingeeKing</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/393003#reply20" class="count_livid">20</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/fendouai_com"><img src="../static/images/normal/5316_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/393066#reply0">pix2code：从截图生成图形用户界面代码</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/python">Python</a> &nbsp;•&nbsp; <strong><a href="/member/fendouai_com">fendouai_com</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/silverkt"><img src="../static/images/normal/176998_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392850#reply61">求助各位道友： 开发狗一枚，公司让外地出差 3 个月，不想去怎么破？</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/programmer">程序员</a> &nbsp;•&nbsp; <strong><a href="/member/silverkt">silverkt</a></strong> &nbsp;•&nbsp; 1 小时 28 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/lantianziyun">lantianziyun</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392850#reply61" class="count_livid">61</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/vansouth"><img src="../static/images/normal/242927_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392999#reply16">今天更新了下 Xcode 9 运行了下模拟器 吓我一跳 mmp</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/programmer">程序员</a> &nbsp;•&nbsp; <strong><a href="/member/vansouth">vansouth</a></strong> &nbsp;•&nbsp; 1 小时 44 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/Marfal">Marfal</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392999#reply16" class="count_livid">16</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/KentY"><img src="../static/images/normal/62449_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392866#reply46">今天 stackoverflow 推出了程序员工资计算...</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/programmer">程序员</a> &nbsp;•&nbsp; <strong><a href="/member/KentY">KentY</a></strong> &nbsp;•&nbsp; 1 小时 45 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/wekw">wekw</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392866#reply46" class="count_livid">46</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>
            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/l0o0"><img src="../static/images/normal/163471_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392964#reply14">我的 Ubuntu 用户列表出现了一个陌生的用户，让我很担心</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/ubuntu">Ubuntu</a> &nbsp;•&nbsp; <strong><a href="/member/l0o0">l0o0</a></strong> &nbsp;•&nbsp; 2 小时 13 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/chcx">chcx</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392964#reply14" class="count_livid">14</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/xiaoc19"><img src="../static/images/normal/95937_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392993#reply6">大家使用 CDN 的时候对于机密信息会再加一次密吗</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/programmer">程序员</a> &nbsp;•&nbsp; <strong><a href="/member/xiaoc19">xiaoc19</a></strong> &nbsp;•&nbsp; 5 小时 41 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/mytsing520">mytsing520</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392993#reply6" class="count_livid">6</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/zhjits"><img src="../static/images/normal/66289_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392998#reply0">萤石云监控的 Wi-Fi 连接策略有毒</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/gts">全球工单系统</a> &nbsp;•&nbsp; <strong><a href="/member/zhjits">zhjits</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/syoubaku"><img src="../static/images/normal/211545_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392543#reply338">有一波 github 的项目组期待各位的加入，如果下面的 group 正好有你感兴趣的，可以留下你的 github 帐号和想加入的项目组，一起来写一些有意思的开源项目。</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/programmer">程序员</a> &nbsp;•&nbsp; <strong><a href="/member/syoubaku">syoubaku</a></strong> &nbsp;•&nbsp; 39 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/shawncheung">shawncheung</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392543#reply338" class="count_livid">338</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/kkk123"><img src="../static/images/normal/199245_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392807#reply46">京东 iOS app 每次启动都要看 5 秒以上的图片</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/gts">全球工单系统</a> &nbsp;•&nbsp; <strong><a href="/member/kkk123">kkk123</a></strong> &nbsp;•&nbsp; 2 小时 43 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/haoyu0023">haoyu0023</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392807#reply46" class="count_livid">46</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/cevincheung"><img src="../static/images/normal/21824_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392835#reply40">所以 Python 是并没有多少官方发布的轮子，对么？</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/python">Python</a> &nbsp;•&nbsp; <strong><a href="/member/cevincheung">cevincheung</a></strong> &nbsp;•&nbsp; 4 小时 8 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/xiaoyao9933">xiaoyao9933</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392835#reply40" class="count_livid">40</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/coffeecat"><img src="../static/images/normal/96279_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392945#reply8">阿里云修改流量包规则</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/cloud">云计算</a> &nbsp;•&nbsp; <strong><a href="/member/coffeecat">coffeecat</a></strong> &nbsp;•&nbsp; 7 小时 1 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/wingxv">wingxv</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392945#reply8" class="count_livid">8</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/kunimi"><img src="../static/images/normal/17716_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392897#reply21">以后使用`pip install`命令的时候要小心了</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/python">Python</a> &nbsp;•&nbsp; <strong><a href="/member/kunimi">kunimi</a></strong> &nbsp;•&nbsp; 6 小时 19 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/lybtongji">lybtongji</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392897#reply21" class="count_livid">21</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/xcatliu"><img src="../static/images/normal/45395_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392337#reply86">运行一个脚本，看看你的项目的代码质量吧</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"><li class="fa fa-chevron-up"></li> &nbsp;2 &nbsp;&nbsp; </div><a class="node" href="/go/programmer">程序员</a> &nbsp;•&nbsp; <strong><a href="/member/xcatliu">xcatliu</a></strong> &nbsp;•&nbsp; 17 小时 30 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/Maic">Maic</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392337#reply86" class="count_livid">86</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/Technetiumer"><img src="../static/images/normal/148599_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392649#reply45">Skype 已经废了吧？</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/gts">全球工单系统</a> &nbsp;•&nbsp; <strong><a href="/member/Technetiumer">Technetiumer</a></strong> &nbsp;•&nbsp; 13 小时 30 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/yjxjn">yjxjn</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392649#reply45" class="count_livid">45</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/fendouai_com"><img src="../static/images/normal/5316_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392943#reply0">SSD-Tensorflow： 3 步运行 TensorFlow 单图片多盒目标检测器</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/python">Python</a> &nbsp;•&nbsp; <strong><a href="/member/fendouai_com">fendouai_com</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/todshen"><img src="../static/images/normal/153459_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392800#reply23">三星手机的智障省电模式</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"><li class="fa fa-chevron-up"></li> &nbsp;1 &nbsp;&nbsp; </div><a class="node" href="/go/android">Android</a> &nbsp;•&nbsp; <strong><a href="/member/todshen">todshen</a></strong> &nbsp;•&nbsp; 10 小时 31 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/congeec">congeec</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392800#reply23" class="count_livid">23</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/cnqncom"><img src="../static/images/normal/180207_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392645#reply53">正则把头都搞大了</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/php">PHP</a> &nbsp;•&nbsp; <strong><a href="/member/cnqncom">cnqncom</a></strong> &nbsp;•&nbsp; 5 小时 45 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/Wicked">Wicked</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392645#reply53" class="count_livid">53</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/boboliu"><img src="../static/images/normal/171317_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392892#reply5">度盘 CDN 的证书过期？这运维不走心啊</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/gts">全球工单系统</a> &nbsp;•&nbsp; <strong><a href="/member/boboliu">boboliu</a></strong> &nbsp;•&nbsp; 21 小时 20 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/bclerdx">bclerdx</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392892#reply5" class="count_livid">5</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/luckyscript"><img src="../static/images/normal/158671_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392856#reply15">阿里云注册不了.me 的域名了么？还可以续费吗</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/cloud">云计算</a> &nbsp;•&nbsp; <strong><a href="/member/luckyscript">luckyscript</a></strong> &nbsp;•&nbsp; 21 小时 24 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/shansing">shansing</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392856#reply15" class="count_livid">15</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/gogobody"><img src="../static/images/normal/166543_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392745#reply8">在 xshell 中运行 Python 代码 print 出错求助</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/python">Python</a> &nbsp;•&nbsp; <strong><a href="/member/gogobody">gogobody</a></strong> &nbsp;•&nbsp; 4 小时 15 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/fearme">fearme</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392745#reply8" class="count_livid">8</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="cell item" style="">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody><tr>

                        <td width="48" valign="top" align="center"><a href="/member/shendaowu"><img src="../static/images/normal/233858_normal.png" class="avatar" border="0" align="default"></a></td>
                        <td width="10"></td>

                        <td width="auto" valign="middle"><span class="item_title"><a href="/t/392737#reply10">如何才能像 AdBlock 那样用 js 或者 css 让被屏蔽的内容完全消失而不是先显示一下再消失？</a></span>
                            <div class="sep5"></div>
                            <span class="small fade"><div class="votes"></div><a class="node" href="/go/js">JavaScript</a> &nbsp;•&nbsp; <strong><a href="/member/shendaowu">shendaowu</a></strong> &nbsp;•&nbsp; 22 小时 30 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong><a href="/member/dunn">dunn</a></strong></span>
                        </td>
                        <td width="70" align="right" valign="middle">

                            <a href="/t/392737#reply10" class="count_livid">10</a>

                        </td>
                    </tr>
                    </tbody></table>
            </div>

            <div class="inner"><div class="fr"><a href="/feed/tab/tech.xml" target="_blank"><img src="../static/images/rss.png" align="absmiddle" style="margin-top:-3px;" border="0"></a>&nbsp; <a href="/feed/tab/tech.xml" target="_blank">通过 Atom Feed 订阅</a></div>
                <span class="chevron">→</span> <a href="/recent">更多新主题</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                indexData: {
                    pid: 0,
                    one_category: '',
                    two_category: '',
                    topic: ''
                }
            }
        },
        methods: {
            initIndexData: function () {
                this.$http.get(HOST+'/index/getIndexData?cid='+this.indexData.pid, {}, {emulateJSON:true}).then(
                    function (res) {
                        if (res.body.success == true){
                            this.indexData = res.body.data
                        }else{
                            this.$message({
                                message: res.body.msg,
                                type: 'warning'
                            });
                        }
                    }
                );
            },
            setCid: function (cid) {
                this.indexData.pid = cid;
                this.initIndexData();
            }
        },
        created: function () {
            this.initIndexData()
        }
    }
</script>