(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{213:function(t,e,r){"use strict";r.r(e);var l={name:"SiteHeader"},n=r(37),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lined"},[r("div",{staticClass:"container"},[r("div",{staticClass:"flex h-[110px] items-center"},[r("ul",{staticClass:"w-1/3 flex justify-center font-semibold"},[r("li",{staticClass:"mx-5"},[r("a",{attrs:{href:""}},[t._v("People")])]),t._v(" "),r("li",{staticClass:"mx-5"},[r("a",{attrs:{href:""}},[t._v("Books")])]),t._v(" "),r("li",{staticClass:"mx-5"},[r("a",{attrs:{href:""}},[t._v("Series")])])]),t._v(" "),r("div",{staticClass:"w-1/3 justify-center font-light flex text-3xl title"},[t._v("AudiobookDB")]),t._v(" "),r("ul",{staticClass:"w-1/3 justify-center flex font-semibold"},[r("li",{staticClass:"mx-5"},[r("a",{attrs:{href:""}},[t._v("API")])]),t._v(" "),r("li",{staticClass:"mx-5"},[r("a",{attrs:{href:""}},[t._v("Contact")])]),t._v(" "),r("li",{staticClass:"mx-5"},[r("a",{attrs:{href:""}},[t._v("More")])])])])])])}],!1,null,null,null);e.default=component.exports},215:function(t,e,r){"use strict";r.r(e);var l=r(8),n=(r(46),r(14),{name:"Book",components:{SiteHeader:r(213).default},data:function(){return{details:[]}},created:function(){this.getDetails()},methods:{getDetails:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.audnex.us/books/"+t.$route.params.asin).then((function(t){return t.json()}));case 2:t.details=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}}),o=r(37),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col min-h-screen text-gray-700"},[r("SiteHeader"),t._v(" "),r("div",{staticClass:"flex container my-12 overflow-hidden shadow-lg border border-gray-300/75 rounded-xl"},[r("div",{staticClass:"flex flex-col flex-none  w-[340px] p-8"},[r("img",{staticClass:"my-8 mt-4 drop-shadow-md z-30 rounded-xl",attrs:{src:t.details.image}}),t._v(" "),r("h1",{staticClass:"title text-lg mb-6"},[t._v(t._s(t.details.title))]),t._v(" "),r("h2",{staticClass:"text-gray-400 subtitle mb-2"},[t._v("Author")]),t._v(" "),t._l(t.details.authors,(function(e,l){return r("a",{key:l,staticClass:"flex my-1 p-2 rounded-[35px] items-center hover:bg-gray-150",attrs:{href:""}},[r("img",{staticClass:"rounded-full w-14 mr-4",attrs:{src:"https://en.gravatar.com/userimage/14668769/1ffd31b09e67c5330d1defba805a7064.jpeg",alt:""}}),t._v(" "),r("div",{staticClass:"flex flex-col text-sm font-semibold text-pink-700"},[t._v(t._s(e.name)),r("span",{staticClass:"text-xs font-normal text-gray-500"},[t._v("This author has 5 Books")])])])})),t._v(" "),r("h2",{staticClass:"text-gray-400 subtitle my-2"},[t._v("Narrator")]),t._v(" "),t._l(t.details.narrators,(function(e,l){return r("a",{key:l,staticClass:"flex my-1 p-2 rounded-[35px] items-center hover:bg-gray-150",attrs:{href:""}},[r("img",{staticClass:"rounded-full w-14 mr-4",attrs:{src:"https://en.gravatar.com/userimage/14668769/1ffd31b09e67c5330d1defba805a7064.jpeg",alt:""}}),t._v(" "),r("div",{staticClass:"flex flex-col text-sm font-semibold text-pink-700"},[t._v(t._s(e.name)),r("span",{staticClass:"text-xs font-normal text-gray-500"},[t._v("This narrator has 17 Books")])])])}))],2),t._v(" "),r("div",{staticClass:"flex flex-grow px-20 border-l border-gray-300/75 bg-gray-150 p-8"},[r("div",{staticClass:"prose",domProps:{innerHTML:t._s(t.details.summary)}})])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SiteHeader:r(213).default})}}]);