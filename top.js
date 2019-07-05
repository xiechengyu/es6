if (document.body.clientWidth > 767) {
    (function () {
        if (typeof window.jQuery == "undefined") {
            var jq = document.createElement('script')
            jq.src = 'http://static.wangxiao.cn/zhuanti/commonResoures/jquery1.12.4.js'
            jq.async = false
            document.head.appendChild(jq)
        }
        $(function () {
            $('body').prepend(`
            <link rel="stylesheet" href="http://at.alicdn.com/t/font_996696_xjn70qp2fwh.css" />
            <link rel="stylesheet" href="http://static.wangxiao.cn/newPC/css/top4others.css">
            <script src="http://static.wangxiao.cn/newPC/lib/template-web.js"></script>
            <div class="top v2018">
                <div class="top__box container">
                    <ul class="topEntry">
                        <li class="topEntry__item">
                            <a href="http://www.wangxiao.cn/" class="topEntry__link">首页</a>
                        </li>
                        <li class="topEntry__item">
                            <i class="iconfont icon-live"></i>
                            <a href="http://live.wangxiao.cn/" target="_blank" class="topEntry__link topEntry__link--live">直播</a>
                        </li>
                        <li class="topEntry__item">
                            <i class="iconfont icon-phone"></i>
                            <a href="http://zhuntiku.com/" target="_blank" class="topEntry__link topEntry__link--app">APP</a>
                        </li>
                    </ul>
                    <ul class="topTools">
                        <div class="topTools__temp"></div>
                        <div class="topTools__allExams">
                            <i class="iconfont icon-menu-1"></i> <span>全部考试</span>
                            <div class="wx_ks">
                                <div class="wx_ks_gc">
                                    <h2>建筑工程考试</h2>
                                    <a target="_blank" href="http://www.wangxiao.cn/jz1/">一级建造师</a>
                                    <a href="http://www.wangxiao.cn/aq/" target="_blank" class="fred">安全工程师</a>
                                    <a href="http://www.wangxiao.cn/chs/" target="_blank">注册测绘师</a>
                                    <a href="http://www.wangxiao.cn/jz2/" target="_blank" class="fred">二级建造师</a>
                                    <a href="http://www.wangxiao.cn/zj/" target="_blank">造价工程师</a>
                                    <a href="http://www.wangxiao.cn/zbs/" target="_blank" class="fred">招标师考试</a>
                                    <a href="http://www.wangxiao.cn/jl/" target="_blank">监理工程师</a>
                                    <a href="http://www.wangxiao.cn/hps/" target="_blank" class="fred">环境评价师</a>
                                    <a href="http://www.wangxiao.cn/jls/" target="_blank" class="fred">注册计量师</a>
                                    <a href="http://www.wangxiao.cn/gysb/" target="_blank" class="fred">设备工程师</a>
                                    <a href="http://www.wangxiao.cn/wy/" target="_blank">物业管理师</a>
                                    <a href="http://www.wangxiao.cn/cfe/" target="_blank" class="fred">消防工程师</a>
                                    <a href="http://www.wangxiao.cn/dqs/" target="_blank" class="fred">电气工程师</a>
                                    <a href="http://www.wangxiao.cn/zx/" target="_blank" class="fred">咨询工程师</a>
                                    <a href="http://www.wangxiao.cn/gjs/" target="_blank">房产估价师</a>
                                    <a href="http://www.wangxiao.cn/yt/" target="_blank">岩土工程师</a>
                                    <a href="http://www.wangxiao.cn/jg/" target="_blank">结构工程师</a>
                                    <a href="http://www.wangxiao.cn/gujia/" target="_blank">土地估价师</a>
                                    <a href="http://www.wangxiao.cn/hbs/" target="_blank">环保工程师</a>
                                    <a href="http://www.wangxiao.cn/hgs/" target="_blank">化工工程师</a>
                                    <a href="http://www.wangxiao.cn/kcs/" target="_blank">勘察师考试</a>
                                    <a href="http://www.wangxiao.cn/zl/" target="_blank">质量工程师</a>
                                    <a href="http://www.wangxiao.cn/ghs/" target="_blank">城乡规划师</a>
                                    <a href="http://www.wangxiao.cn/zjy/" target="_blank">造价员考试</a>
                                    <a href="http://www.wangxiao.cn/jjr/" target="_blank">房产经纪人</a>
                                    <a href="http://www.wangxiao.cn/imcp/" target="_blank">项目管理师</a>
                                    <a href="http://www.wangxiao.cn/dl/" target="_blank">土地代理人</a>
                                    <a href="http://www.wangxiao.cn/shebei/" target="_blank">设备监理师</a>
                                    <a href="http://www.wangxiao.cn/glzj/" target="_blank">公路造价师</a>
                                    <a href="http://www.wangxiao.cn/gljl/" target="_blank">公路监理师</a>
                                    <a href="http://www.wangxiao.cn/txs/" target="_blank">通信工程师</a>
                                    <a href="http://www.wangxiao.cn/jzs/" target="_blank">注册建筑师</a>
                                    <a href="http://www.wangxiao.cn/ap/" target="_blank">安全评价师</a>
                                </div>
                                <div class="wx_ks_ck">
                                    <h2>财会金融考试</h2>
                                    <a href="http://www.wangxiao.cn/jjs/" target="_blank" class="fred">经济师考试</a>
                                    <a href="http://www.wangxiao.cn/ccbp/" target="_blank">银行从业</a>
                                    <a href="http://www.wangxiao.cn/sj/" target="_blank">审计师考试</a>
                                    <a href="http://www.wangxiao.cn/zq/" target="_blank">证券从业</a>
                                    <a href="http://www.wangxiao.cn/cy/" target="_blank" class="fred">会计从业证</a>
                                    <a href="http://www.wangxiao.cn/qh/" target="_blank">期货从业</a>
                                    <a href="http://www.wangxiao.cn/kjzc/chuji/" target="_blank" class="fred">初级会计职称</a>
                                    <a href="http://www.wangxiao.cn/tj/" target="_blank">统计师考试</a>
                                    <a href="http://www.wangxiao.cn/kjzc/zhongji/" target="_blank">中级会计职称</a>
                                    <a href="http://www.wangxiao.cn/cpa/" target="_blank" class="fred">注册会计师</a>
                                    <a href="http://www.wangxiao.cn/cta/" target="_blank">注册税务师</a>
                                    <a href="http://www.wangxiao.cn/cpv/" target="_blank">资产评估师</a>
                                    <a href="http://www.wangxiao.cn/jgjz/" target="_blank">价格鉴证师</a>
                                    <a href="http://www.wangxiao.cn/js/" target="_blank">精算师考试</a>
                                    <a href="http://www.wangxiao.cn/gaoji/" target="_blank">高级会计师</a>
                                    <a href="http://www.wangxiao.cn/cia/" target="_blank">内部审计师</a>
                                    <a href="http://www.wangxiao.cn/jijin/" target="_blank">基金从业</a>
                                    <a href="http://www.wangxiao.cn/acca/" target="_blank">ACCA/CAT</a>
                                </div>
                                <div class="wx_ks_ck">
                                    <h2>资格类考试</h2>
                                    <li class="show">
                                        <a href="http://www.wangxiao.cn/shg/" target="_blank" class="fred">社会工作师</a>
                                        <a href="http://www.wangxiao.cn/gl/" target="_blank" class="fred">管理咨询师</a>
                                        <a href="http://www.wangxiao.cn/cbzg/" target="_blank">出版资格考试</a>
                                        <a href="http://www.wangxiao.cn/jsz/" target="_blank" class="fred">教师资格证</a>
                                        <a href="http://www.wangxiao.cn/ads/" target="_blank">广告师考试</a>
                                        <a href="http://www.wangxiao.cn/fl/" target="_blank">企业法律顾问</a>
                                        <a href="http://www.wangxiao.cn/xl/" target="_blank">心理咨询师</a>
                                        <a href="http://www.wangxiao.cn/hr/" target="_blank" class="fred">人力资源师</a>
                                        <a href="http://www.wangxiao.cn/yys/" target="_blank">公共营养师</a>
                                        <a href="http://www.wangxiao.cn/sifa/" target="_blank">司法考试</a>
                                        <a href="http://www.wangxiao.cn/qypxs/" target="_blank">企业培训师</a>
                                        <a href="http://www.wangxiao.cn/licai/" target="_blank">理财规划师</a>
                                        <a href="http://www.wangxiao.cn/dz/" target="_blank">电子商务师</a>
                                        <a href="http://www.wangxiao.cn/pm/" target="_blank">项目管理师</a>
                                        <a href="http://www.wangxiao.cn/dy/" target="_blank">导游资格</a>
                                        <a href="http://www.wangxiao.cn/bx/" target="_blank">保险从业</a>
                                        <a href="http://www.wangxiao.cn/ms/" target="_blank">秘书资格</a>
                                        <a href="http://www.wangxiao.cn/we/" target="_blank">网络编辑</a>
                                        <a href="http://www.wangxiao.cn/jigong/" target="_blank">技工证考试</a>
                                    </li>
                                </div>
                                <div class="wx_ks_ck">
                                    <h2>医药类考试</h2>
                                    <a title="执业药师考试" href="http://www.wangxiao.cn/yaoshi/" target="_blank" class="fred">执业药师考试</a>
                                    <!--<a title="执业医师考试" href="http://www.wangxiao.cn/yishi/" target="_blank">执业医师考试</a>-->
                                    <a href="http://www.wangxiao.cn/lcys/" target="_blank" title="执业医师临床执业医师" class="fred">临床执业医师</a>
                                    <a title="卫生资格考试" href="http://www.wangxiao.cn/weisheng/" target="_blank">卫生资格考试</a>
                                    <a title="护士资格考试" href="http://www.wangxiao.cn/hszg/" target="_blank" class="fred">护士资格考试</a>
                                    <a title="执业中药师" href="http://www.wangxiao.cn/zyzys/" target="_blank">执业中药师</a>
                                    <a title="执业西药师" href="http://www.wangxiao.cn/zyxys/" target="_blank">执业西药师</a>
                                    <a title="临床助理医师" href="http://www.wangxiao.cn/lczl/" target="_blank" class="fred">临床助理医师</a>
                                    <a href="http://www.wangxiao.cn/zyys/" target="_blank" class="fred" title="执业医师中医执业医师">中医执业医师</a>
                                    <a title="中医助理医师" href="http://www.wangxiao.cn/zyzlys/" target="_blank" class="fred">中医助理医师</a>
                                    <a title="中西医执业医师" href="http://www.wangxiao.cn/zxy/" target="_blank">中西医执业</a>
                                    <a title="中西医助理医师" href="http://www.wangxiao.cn/zxyzl/" target="_blank">中西助理医师</a>
                                    <a title="口腔执业医师" href="http://www.wangxiao.cn/kqys/" target="_blank">口腔执业医师</a>
                                    <a title="口腔助理医师" href="http://www.wangxiao.cn/kqzlys/" target="_blank">口腔助理医师</a>
                                    <a title="公共卫生执业医师" href="http://www.wangxiao.cn/gwzyys/" target="_blank">公卫执业医师</a>
                                    <a title="公共卫生助理医师" href="http://www.wangxiao.cn/gwzlys/" target="_blank">公卫助理医师</a>
                                    <a title="卫生资格考试" href="http://www.wangxiao.cn/weisheng/" target="_blank">卫生资格考试</a>
                                    <a title="护理职称考试" href="http://www.wangxiao.cn/hushi/" target="_blank">护理职称考试</a>
                                    <a title="药学职称考试" href="http://www.wangxiao.cn/yxzyks/" target="_blank">药学职称考试</a>
                                    <a title="中药学职称考试" href="http://www.wangxiao.cn/zyxzyks/" target="_blank">中药学职称</a>
                                    <a title="临床医学医学检验职称" href="http://www.wangxiao.cn/jyzyks/" target="_blank">医学检验职称</a>
                                    <a title="外科主治医师" href="http://www.wangxiao.cn/wkzzys/" target="_blank">外科主治医师</a>
                                    <a title="内科主治医师" href="http://www.wangxiao.cn/nkzzys/" target="_blank">内科主治医师</a>
                                    <a title="妇产科主治医师" href="http://www.wangxiao.cn/fckzzys/" target="_blank">妇产主治医师</a>
                                </div>
                                <div class="wx_ks_ck">
                                    <h2>外语外贸考试</h2>
                                    <a href="http://www.wangxiao.cn/zc/" target="_blank" class="fred">职称英语</a>
                                    <a href="http://www.wangxiao.cn/qypx/" target="_blank" class="fred">管理培训</a>
                                    <a href="http://www.wangxiao.cn/bjy/" target="_blank">报检员考试</a>
                                    <a href="http://www.wangxiao.cn/gwy/" target="_blank" class="fred">公务员考试</a>
                                    <a href="http://www.wangxiao.cn/zcj/" target="_blank">职称计算机</a>
                                    <a href="http://www.wangxiao.cn/cryysj/" target="_blank">成英三级</a>
                                    <a href="http://www.wangxiao.cn/zkyy/" target="_blank">自考英语</a>
                                    <a href="http://www.wangxiao.cn/catti/" target="_blank" class="fred">翻译资格</a>
                                    <a href="http://www.wangxiao.cn/wxy/" target="_blank">外销员考试</a>
                                    <a href="http://www.wangxiao.cn/hd/" target="_blank">货运代理</a>
                                    <a href="http://www.wangxiao.cn/sws/" target="_blank">国际商务师</a>
                                    <a href="http://www.wangxiao.cn/wl/" target="_blank">物流师考试</a>
                                    <a href="http://www.wangxiao.cn/dzy/" target="_blank">单证员考试</a>
                                    <a href="http://www.wangxiao.cn/gdy/" target="_blank">跟单员考试</a>
                                    <a href="http://www.wangxiao.cn/jp/" target="_blank">日语学习</a>
                                    <a href="http://www.wangxiao.cn/kr/" target="_blank">韩语学习</a>
                                    <a href="http://www.wangxiao.cn/ger/" target="_blank">德语学习</a>
                                    <a href="http://www.wangxiao.cn/fr/" target="_blank">法语学习</a>
                                    <a href="http://www.wangxiao.cn/rus/" target="_blank">俄语学习</a>
                                    <a href="http://www.wangxiao.cn/italy/" target="_blank">意大利语学习</a>
                                    <a href="http://www.wangxiao.cn/bec/" target="_blank">BEC</a>
                                    <a href="http://www.wangxiao.cn/pets/" target="_blank">PETS</a>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            <script id="temp_topTool_unlogin" type="text/html">
                <a href="http://users.wangxiao.cn/Passport/login.aspx?url={{url}}" class="topTools__login" id="_login1">登录</a><a href="http://users.wangxiao.cn/Passport/Reg.aspx?url={{url}}" class="topTools__reg" id="_login2">注册</a><a href="http://order.wangxiao.cn/cart.aspx?url={{url}}" target="_blank" class="topTools__shoppingCart"><i class="iconfont icon-shoppingcard-1"></i><span>购物车</span></a>
            </script>
            <script id="temp_topTool_login" type="text/html">
                <a href="//users.wangxiao.cn/manage/" target="_blank" class="topTools__login" id="_login1" data-login="true">{{data.Username2}}</a><a href="//users.wangxiao.cn/passport/logout.aspx?url={{url}}" class="topTools__reg" id="_login2">退出</a><a href="http://order.wangxiao.cn/cart.aspx?url={{url}}" target="_blank" class="topTools__shoppingCart"><i class="iconfont icon-shoppingcard-1"></i><span>购物车</span></a>
            </script>
            <script>
                var loginFun = (function () {
                    function loginStatus() {
                        $.ajax({
                            url: "http://users.wangxiao.cn/Passport/GetLoginInfo.ashx",
                            dataType: "jsonp",
                            success: function (data) {
                                if (data !== null) {
                                    if ($(".userCard").length) {
                                        $(".userCard").html(
                                            template.compile(strTmpl.temp_login_login)({
                                                data: data,
                                                url: encodeURIComponent(location.href)
                                            })
                                        );
                                    }
                                    if ($(".topTools__temp").length) {
                                        $(".topTools__temp").html(
                                            template("temp_topTool_login", {
                                                data: data,
                                                url: encodeURIComponent(location.href)
                                            })
                                        );
                                    }
                                } else {
                                    if ($(".userCard").length) {
                                        $(".userCard").html(
                                            template.compile(strTmpl.temp_login_unlogin)({
                                                data: data,
                                                url: encodeURIComponent(location.href)
                                            })
                                        );
                                    }
                                    if ($(".topTools__temp").length) {
                                        $(".topTools__temp").html(
                                            template("temp_topTool_unlogin", {
                                                data: data,
                                                url: encodeURIComponent(location.href)
                                            })
                                        );
                                    }
                                }
                            }
                        });
                    }
                    return { loginStatus: loginStatus };
                })();
                $(function () {
                    loginFun.loginStatus();
                });
            </script>
            `)
        })
    })()
}
