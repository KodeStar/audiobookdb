(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{213:function(e,t,n){"use strict";n.r(t);var r={name:"SiteHeader"},o=n(37),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex h-[110px] justify-center items-center"},[n("ul",{staticClass:"flex font-semibold"},[n("li",{staticClass:"mx-5"},[n("a",{attrs:{href:""}},[e._v("People")])]),e._v(" "),n("li",{staticClass:"mx-5"},[n("a",{attrs:{href:""}},[e._v("Books")])]),e._v(" "),n("li",{staticClass:"mx-5"},[n("a",{attrs:{href:""}},[e._v("Series")])])]),e._v(" "),n("div",{staticClass:"font-light text-2xl mx-16 text-gray-900"},[e._v("AudiobookDB")]),e._v(" "),n("ul",{staticClass:"flex font-semibold"},[n("li",{staticClass:"mx-5"},[n("a",{attrs:{href:""}},[e._v("API")])]),e._v(" "),n("li",{staticClass:"mx-5"},[n("a",{attrs:{href:""}},[e._v("Contact")])]),e._v(" "),n("li",{staticClass:"mx-5"},[n("a",{attrs:{href:""}},[e._v("More")])])])])}],!1,null,null,null);t.default=component.exports},215:function(e,t,n){"use strict";n.r(t);var r={name:"Book",components:{SiteHeader:n(213).default},data:function(){return{details:[]}},created:function(){this.getDetails()},methods:{getDetails:function(){this.details=JSON.parse('{"_id":"6159262358c0b5ec959e2e15","asin":"B002V1OF70","authors":[{"asin":"B000APO5OM","name":"Frank Herbert"}],"description":"Set on a desert planet, Dune is the story of Paul Atreides, who would become the mysterious Maud\'dib, avenge a plot against his family, and bring to fruition humankind\'s most ancient dream....","formatType":"unabridged","image":"https://m.media-amazon.com/images/I/81-QB8jnTjL.jpg","language":"english","narrators":[{"name":"Scott Brick"},{"name":"Orlagh Cassidy"},{"name":"Euan Morton"},{"name":"Simon Vance"},{"name":"Ilyana Kadushin"}],"publisherName":"Macmillan Audio","rating":"4.6","releaseDate":"2006-12-31T00:00:00.000Z","runtimeLengthMin":1262,"summary":"<p><b>Soon to be a major motion picture directed by Denis Villeneuve, starring Timothée Chalamet, Josh Brolin, Jason Momoa, Zendaya, Rebecca Ferguson, Oscar Isaac, Javier Bardem, Dave Bautista, Stellan Skarsgård, and Charlotte Rampling. </b></p> <p>Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, who would become the mysterious man known as Maud\'dib. He would avenge the traitorous plot against his noble family - and would bring to fruition humankind\'s most ancient and unattainable dream. </p> <p>A stunning blend of adventure and mysticism, environmentalism and politics, <i>Dune </i>won the first Nebula Award, shared the Hugo Award, and formed the basis of what is undoubtedly the grandest epic in science fiction. </p> <p>Frank Herbert\'s death in 1986 was a tragic loss, yet the astounding legacy of his visionary fiction will live forever. </p>","title":"Dune","genres":[{"asin":"18580606011","name":"Science Fiction & Fantasy","type":"genre"},{"asin":"18580628011","name":"Science Fiction","type":"genre"},{"asin":"18580645011","name":"Space Opera","type":"tag"}],"seriesPrimary":{"asin":"B005NALAG0","name":"Dune","position":"Book 1"},"seriesSecondary":{"asin":"B006W3V2B0","name":"Dune Saga","position":"Book 1"}}')}}},o=n(37),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-gray-300 min-h-screen text-gray-700"},[n("div",{staticClass:"container"},[n("SiteHeader")],1),e._v(" "),n("div",{staticClass:"bg-gray-200"},[n("div",{staticClass:"flex container py-12"},[n("div",{staticClass:"flex flex-col justify-center items-center"},[n("img",{staticClass:"max-w-[280px] drop-shadow-md z-30 rounded-xl",attrs:{src:e.details.image}}),e._v(" "),n("ul",[e._l(e.details.authors,(function(t,r){return n("li",{key:r},[e._v("Author: "+e._s(t.name))])})),e._v(" "),n("li",[e._v("Title: "+e._s(e.details.title))]),e._v(" "),e._l(e.details.narrators,(function(t,r){return n("li",{key:r},[e._v("Author: "+e._s(t.name))])}))],2)]),e._v(" "),n("div",{staticClass:"flex px-20"},[e._v("\n        text about the book\n      ")])])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SiteHeader:n(213).default})}}]);