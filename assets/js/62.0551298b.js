(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{394:function(e,v,t){"use strict";t.r(v);var a=t(0),_=Object(a.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"vue-computed-和-watched-区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue-computed-和-watched-区别"}},[e._v("#")]),e._v(" Vue computed 和 watched 区别")]),e._v(" "),v("ul",[v("li",[e._v("功能上：computed用于计算产生新数据 watch用于监听现有数据然后执行相应的回调")]),e._v(" "),v("li",[e._v("是否调用缓存：computed中的函数所依赖的属性没有发生变化，那么调用当前的函数的时候会从缓存中读取，而watch在每次监听的值发生变化的时候都会执行回调。")]),e._v(" "),v("li",[e._v("是否调用return：computed中的函数必须要用return返回，watch中的函数不是必须要用return。")]),e._v(" "),v("li",[e._v("computed默认第一次加载的时候就开始监听；watch默认第一次加载不做监听，如果需要第一次加载做监听，添加immediate属性，设置为true（immediate:true）")]),e._v(" "),v("li",[e._v("使用场景：computed----当一个属性受多个属性影响的时候，使用computed-----购物车商品结算。watch–当一条数据影响多条数据的时候，使用watch-----搜索框.")])]),e._v(" "),v("h2",{attrs:{id:"vue组件通信方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue组件通信方式"}},[e._v("#")]),e._v(" Vue组件通信方式")]),e._v(" "),v("ul",[v("li",[e._v("props和$emit")]),e._v(" "),v("li",[e._v("EventBus")]),e._v(" "),v("li",[e._v("provide/inject")]),e._v(" "),v("li",[e._v("Vuex")])]),e._v(" "),v("h2",{attrs:{id:"vuex使用时的优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vuex使用时的优缺点"}},[e._v("#")]),e._v(" Vuex使用时的优缺点")]),e._v(" "),v("ul",[v("li",[e._v("vuex利用响应式，使用起来已经相当方便快捷了。但是在使用过程中感觉模块化这一块做的过于复杂，用的时候容易出错，还要经常查看文档")]),e._v(" "),v("li",[e._v("比如：访问state时要带上模块key，内嵌模块的话会很长，不得不配合mapState使用，加不加namespaced区别也很大，getters，mutations，actions这些默认是全局，加上之后必须用字符串类型的path来匹配，使用模e式不统一，容易出错；对ts的支持也不友好，在使用模块时没有代码提示。")]),e._v(" "),v("li",[e._v("之前Vue2项目中用过vuex-module-decorators的解决方案，虽然类型支持上有所改善，但又要学一套新东西，增加了学习成本。pinia出现之后使用体验好了很多，Vue3+pinia会是更好的组合。")])]),e._v(" "),v("h2",{attrs:{id:"刷新后vuex状态丢失如何解决"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#刷新后vuex状态丢失如何解决"}},[e._v("#")]),e._v(" 刷新后vuex状态丢失如何解决")]),e._v(" "),v("ul",[v("li",[e._v("vuex只是在内存保存状态，刷新之后就会丢失，如果要持久化就要存起来。")]),e._v(" "),v("li",[e._v("localStorage就很合适，提交mutation的时候同时存入localStorage，store中把值取出作为state的初始值即可。")]),e._v(" "),v("li",[e._v("这里有两个问题，不是所有状态都需要持久化；如果需要保存的状态很多，编写的代码就不够优雅，每个提交的地方都要单独做保存处理。这里就可以利用vuex提供的subscribe方法做一个统一的处理。甚至可以封装一个vuex插件以便复用。")]),e._v(" "),v("li",[e._v("类似的插件有vuex-persist、vuex-persistedstate，内部的实现就是通过订阅mutation变化做统一处理，通过插件的选项控制哪些需要持久化")])]),e._v(" "),v("h2",{attrs:{id:"v-for中使用key的意义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#v-for中使用key的意义"}},[e._v("#")]),e._v(" v-for中使用key的意义")]),e._v(" "),v("ul",[v("li",[e._v("使用不使用key 决定了vue底层采用哪个diff算法")]),e._v(" "),v("li",[e._v("patchKeyedChildren 和 patchUnkeyedChildren")])]),e._v(" "),v("blockquote",[v("p",[e._v("key的作用让每个item有一个唯一的识别身份，可以下标值index或者id, 主要是为了vue精准的追踪到每一个元素，高效的更新虚拟DOM")])]),e._v(" "),v("h2",{attrs:{id:"内存泄漏场景-vue为例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内存泄漏场景-vue为例"}},[e._v("#")]),e._v(" 内存泄漏场景(Vue为例)")]),e._v(" "),v("ul",[v("li",[e._v("被全局变量、函数引用，组件销毁时未清除")]),e._v(" "),v("li",[e._v("被全局事件、定时器引用，组件销毁时未清除")]),e._v(" "),v("li",[e._v("别自定义事件引用，组件销毁时未清除")])]),e._v(" "),v("h2",{attrs:{id:"虚拟dom-vdom-真的很快吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom-vdom-真的很快吗"}},[e._v("#")]),e._v(" 虚拟DOM(vdom)真的很快吗？")]),e._v(" "),v("ul",[v("li",[e._v("vdom并不快，JS直接操作DOM才是最快的")]),e._v(" "),v("li",[e._v('但"数据驱动视图"要有合适的技术方案，不能全部DOM重建')]),e._v(" "),v("li",[e._v("vdom就是目前最适合的技术方案(并不是因为多块，而是合适)")])]),e._v(" "),v("h2",{attrs:{id:"vue生命周期都干了什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue生命周期都干了什么"}},[e._v("#")]),e._v(" Vue生命周期都干了什么")]),e._v(" "),v("blockquote",[v("p",[e._v("beforeCreate：创建一个空的vue实例 内置方法如data、method尚未初始化")]),e._v(" "),v("p",[e._v("Created：vue实例初始化完成 可以调用data、method方法")]),e._v(" "),v("p",[e._v("beforeMount：编译模板 调用render函数生成vdom")]),e._v(" "),v("p",[e._v("Mouted：渲染模板 将vdom渲染成真实dom")]),e._v(" "),v("p",[e._v("beforeUpdate：dom尚未更新 数据变化之后准备更新dom")]),e._v(" "),v("p",[e._v("Updated：数据发生变化dom更新完毕、")]),e._v(" "),v("p",[e._v("beforeUnmouted：组件准备移除但尚未移除 可在这一阶段移除一些全局时间 自定义事件 定时器")]),e._v(" "),v("p",[e._v("Unmouted：组件被销毁 所有子组件也都被销毁")])]),e._v(" "),v("h2",{attrs:{id:"vue什么时候操作dom比较合适"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue什么时候操作dom比较合适"}},[e._v("#")]),e._v(" Vue什么时候操作DOM比较合适")]),e._v(" "),v("ul",[v("li",[e._v("mounted和updated都不能保证子组件全部挂载完成")]),e._v(" "),v("li",[e._v("使用$nextTick渲染DOM")])]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("mounted(){\n  this.$nextTick(()=>{\n    //仅在整个视图都被渲染之后才会运行的代码\n  })\n}\n")])])]),v("blockquote",[v("p",[e._v("使用this.$nextTick()可以等待dom生成以后再来获取dom对象")])]),e._v(" "),v("h2",{attrs:{id:"ajax应该放在哪个生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ajax应该放在哪个生命周期"}},[e._v("#")]),e._v(" Ajax应该放在哪个生命周期")]),e._v(" "),v("ul",[v("li",[e._v("有两个选择：created和mounted")]),e._v(" "),v("li",[e._v("推荐：mounted")])]),e._v(" "),v("h2",{attrs:{id:"vue3-composition-api-生命周期有何区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue3-composition-api-生命周期有何区别"}},[e._v("#")]),e._v(" Vue3 Composition API 生命周期有何区别")]),e._v(" "),v("ul",[v("li",[e._v("使用setup代替了beforeCreate和created")]),e._v(" "),v("li",[e._v("使用Hooks函数的形式，如mounted改为onMonted()")])]),e._v(" "),v("h2",{attrs:{id:"vue2-vue3-react-三者-diff-算法有何区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue2-vue3-react-三者-diff-算法有何区别"}},[e._v("#")]),e._v(" Vue2 Vue3 React 三者 diff 算法有何区别")]),e._v(" "),v("ul",[v("li",[e._v("Vue2-双端比较")]),e._v(" "),v("li",[e._v("Vue3-最长递增子序列")]),e._v(" "),v("li",[e._v("React-仅右移\n"),v("img",{attrs:{src:"/docs/.vuepress/public/img/image-20221116170406332.png/image-20221116170406332.png",alt:"image-20221116170406332"}})])]),e._v(" "),v("h2",{attrs:{id:"对vue的优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对vue的优化"}},[e._v("#")]),e._v(" 对Vue的优化")]),e._v(" "),v("p",[v("strong",[e._v("v-if和v-show")])]),e._v(" "),v("ul",[v("li",[e._v("v-if彻底销毁组件 导致DOM重新渲染")]),e._v(" "),v("li",[e._v("v-show使用CSS隐藏组件\n"),v("strong",[e._v("v-for使用key")]),e._v(" "),v("strong",[e._v("使用computed缓存")]),e._v(" "),v("strong",[e._v("keep-alive缓存组件")])]),e._v(" "),v("li",[e._v("频繁切换的组件，如tabs")]),e._v(" "),v("li",[e._v("不要乱用，缓存太多会占用内存，且不好debug")])]),e._v(" "),v("h2",{attrs:{id:"使用vue中遇到的坑"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用vue中遇到的坑"}},[e._v("#")]),e._v(" 使用Vue中遇到的坑")]),e._v(" "),v("p",[v("strong",[e._v("内存泄漏")])]),e._v(" "),v("ul",[v("li",[e._v("全局变量，全局事件，全局定时器")]),e._v(" "),v("li",[e._v("自定义事件\n"),v("strong",[e._v("Vue2响应式的缺陷(Vue3不再有)")])]),e._v(" "),v("li",[e._v("data新增属性用Vue.set")]),e._v(" "),v("li",[e._v("data删除属性用Vue.delete\n"),v("strong",[e._v("路由切换时scroll到顶部")])]),e._v(" "),v("li",[e._v("SPA的通病，不仅仅是Vue")]),e._v(" "),v("li",[e._v("如，列表页，滚动到第二屏，点击进入详情页")]),e._v(" "),v("li",[e._v("再返回到列表页(此时组件重新渲染)就scroll到顶部\n解决方案")]),e._v(" "),v("li",[e._v("在列表页缓存数据和scrollTop值")]),e._v(" "),v("li",[e._v("当再次返回列表页时，渲染组件，执行scrollTo(xx)")]),e._v(" "),v("li",[e._v("终极方案:MPA+App WebView")])]),e._v(" "),v("h2",{attrs:{id:"解决spa首屏加载速度慢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解决spa首屏加载速度慢"}},[e._v("#")]),e._v(" 解决SPA首屏加载速度慢")]),e._v(" "),v("p",[v("strong",[e._v("路由懒加载（动态加载路由）")])]),e._v(" "),v("p",[v("strong",[e._v("静态资源本地缓存")]),e._v("\nlocalStorage")]),e._v(" "),v("p",[v("strong",[e._v("UI框架按需加载")])]),e._v(" "),v("p",[v("strong",[e._v("图片资源的压缩")])]),e._v(" "),v("p",[v("strong",[e._v("组件重复打包")])]),e._v(" "),v("p",[v("strong",[e._v("开启GZip压缩")])]),e._v(" "),v("p",[v("strong",[e._v("使用SSR（服务端渲染）")])]),e._v(" "),v("blockquote",[v("p",[e._v("在为你的应用使用SSR之前，你首先应该问自己是否真的需要它。这主要取决于首屏加载速度对应用的重要程度。例如，如果你正在开发一个内部的管理面板，初始加载时的那额外几百毫秒对你来说并不重要，这种情况下使用SSR就没有太多必要了。然而，在内容展示速度极其重要的场景下，SSR可以尽可能地帮你实现最优的初始加载性能。")])]),e._v(" "),v("h2",{attrs:{id:"对vue-observable的理解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对vue-observable的理解"}},[e._v("#")]),e._v(" 对Vue.observable的理解")]),e._v(" "),v("p",[v("code",[e._v("Vue.observable")]),e._v("，让一个对象变成响应式数据。"),v("code",[e._v("Vue")]),e._v(" 内部会用它来处理 "),v("code",[e._v("data")]),e._v(" 函数返回的对象")]),e._v(" "),v("p",[e._v("在 "),v("code",[e._v("Vue 2.x")]),e._v(" 中，被传入的对象会直接被 "),v("code",[e._v("Vue.observable")]),e._v(" 变更，它和被返回的对象是同一个对象")]),e._v(" "),v("p",[e._v("在 "),v("code",[e._v("Vue 3.x")]),e._v(" 中，则会返回一个可响应的代理，而对源对象直接进行变更仍然是不可响应的\n"),v("strong",[e._v("使用场景")])]),e._v(" "),v("blockquote",[v("p",[e._v("在非父子组件通讯时，可以使用通常的bus或者使用vuex,但是实现的功能不是太复杂，而使用上面的两个又有些繁琐。这时,observable就是一个很好的选择")])]),e._v(" "),v("h2",{attrs:{id:"ssr和ssg-静态站点生成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ssr和ssg-静态站点生成"}},[e._v("#")]),e._v(" SSR和SSG(静态站点生成)")]),e._v(" "),v("blockquote",[v("p",[e._v("静态站点生成（Static-Site Generation，缩写为SSG），也被称为预渲染，是另一种流行的构建快速网站的技术。如果用服务端渲染一个页面所需的数据对每个用户来说都是相同的，那么我们可以只渲染一次，提前在构建过程中完成，而不是每次请求进来都重新渲染页面。预渲染的页面生成后作为静态HTML文件被服务器托管。\nSSG保留了和SSR应用相同的性能表现：它带来了优秀的首屏加载性能。同时，它比SSR应用的花销更小，也更容易部署，因为它输出的是静态HTML和资源文件。这里的关键词是静态：\nSSG仅可以用于消费静态数据的页面，即数据在构建期间就是已知的，并且在多次部署期间不会改变。每当数据变化时，都需要重新部署。如果你调研SSR只是为了优化为数不多的营销页面的SEO（例如/、/about 和/contact等），那么你可能需要SSG而不是SSR。SSG也非常适合构建基于内容的网站，比如文档站点或者博客。事实上，你现在正在阅读的这个网站就是使用VitePress静态生成的，它是一个由Vue驱动的静态站点生成器。")])]),e._v(" "),v("h2",{attrs:{id:"vue权限管理如何做"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue权限管理如何做"}},[e._v("#")]),e._v(" Vue权限管理如何做？")]),e._v(" "),v("p",[e._v("https://vue3js.cn/interview/vue/permission.html#%E4%BA%8C%E3%80%81%E5%A6%82%E4%BD%95%E5%81%9A")])])}),[],!1,null,null,null);v.default=_.exports}}]);