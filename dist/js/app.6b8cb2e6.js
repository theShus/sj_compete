(function(e){function t(t){for(var o,i,s=t[0],l=t[1],c=t[2],d=0,b=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&b.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(b.length)b.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],o=!0,s=1;s<r.length;s++){var l=r[s];0!==a[l]&&(o=!1)}o&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var o={},a={app:0},n=[];function i(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(r,o,function(t){return e[t]}.bind(null,o));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"0db8":function(e,t,r){},"4d8e":function(e,t,r){"use strict";r("0db8")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",[r("b-navbar",{attrs:{toggleable:"sm",type:"dark",variant:"dark"}},[r("b-navbar-brand",{attrs:{to:"/"}},[e._v("Book Donation")]),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:"/"}},[e._v("Home")]),r("b-nav-item-dropdown",{attrs:{text:"Categories",right:""}},[r("b-nav-item",{attrs:{to:"/faculties"}},[e._v("Faculties")]),r("b-nav-item",{attrs:{to:"/libraries"}},[e._v("Libraries")])],1)],1),r("b-navbar-nav",{staticClass:"ml-auto"},[e.token?e._e():r("b-nav-item",{attrs:{to:"/register"}},[e._v("Register")]),e.token?r("b-nav-item",{on:{click:function(t){return e.logout()}}},[e._v("Log Out")]):r("b-nav-item",{attrs:{to:"/login"}},[e._v("Log In")])],1)],1)],1)],1),r("router-view")],1)},n=[],i=r("5530"),s=r("2f62"),l={name:"App",data:function(){return{searchQuery:""}},computed:Object(i["a"])({},Object(s["d"])(["token"])),mounted:function(){localStorage.token&&this.setToken(localStorage.token)},methods:Object(i["a"])(Object(i["a"])({},Object(s["c"])(["removeToken","setToken"])),{},{search:function(e){e.preventDefault()},logout:function(){this.removeToken()}})},c=l,u=(r("034f"),r("2877")),d=Object(u["a"])(c,a,n,!1,null,null,null),b=d.exports,m=r("5f5b"),f=r("b1e0"),p=r("5132"),h=r.n(p),g=(r("f9e3"),r("2dd8"),r("8c4f")),k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},v=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{width:"1000",alt:"Vue logo",src:r("7fd4")}}),o("h1",[e._v("Welcome to the database of our libraries and facutlies")]),o("h2",[e._v("Feel free to donate your old books to help others")])])}],y={name:"Home",components:{}},j=y,_=Object(u["a"])(j,k,v,!1,null,null,null),I=_.exports,O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v("This is an about page")])])}],w={},x=Object(u["a"])(w,O,S,!1,null,null,null),B=x.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header",{attrs:{subtitle:"Create account"}}),r("b-form",{on:{submit:e.onSubmit}},[r("b-form-group",{attrs:{label:"First name:","label-for":"name"}},[r("b-form-input",{attrs:{id:"name",placeholder:"Enter name",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("b-form-group",{attrs:{label:"Last Name:","label-for":"lastname"}},[r("b-form-input",{attrs:{id:"lastname",placeholder:"Enter last name",required:""},model:{value:e.form.lastname,callback:function(t){e.$set(e.form,"lastname",t)},expression:"form.lastname"}})],1),r("b-form-group",{attrs:{label:"Birthdate:","label-for":"birthday"}},[r("b-form-input",{attrs:{id:"birthday",type:"date",placeholder:"Enter birthday",required:""},model:{value:e.form.birthday,callback:function(t){e.$set(e.form,"birthday",t)},expression:"form.birthday"}})],1),r("b-form-group",{attrs:{label:"Email address:","label-for":"email"}},[r("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Enter email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("b-form-group",{attrs:{label:"Userame:","label-for":"username"}},[r("b-form-input",{attrs:{id:"username",placeholder:"Enter username",required:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[r("b-form-input",{attrs:{id:"password",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("b-form-group",{attrs:{label:"FacultyId:","label-for":"facultyId"}},[r("b-form-input",{attrs:{id:"facultyId",type:"number",placeholder:"Enter facultyId",required:""},model:{value:e.form.facultyId,callback:function(t){e.$set(e.form,"facultyId",t)},expression:"form.facultyId"}})],1),r("b-form-checkbox",{attrs:{id:"admin",value:!0,"unchecked-value":!1},model:{value:e.checkboxes.admin,callback:function(t){e.$set(e.checkboxes,"admin",t)},expression:"checkboxes.admin"}},[e._v("Admin")]),r("b-form-checkbox",{attrs:{id:"moderator",value:!0,"unchecked-value":!1},model:{value:e.checkboxes.moderator,callback:function(t){e.$set(e.checkboxes,"moderator",t)},expression:"checkboxes.moderator"}},[e._v("Moderator")]),r("b-form-checkbox",{attrs:{id:"student",value:!0,"unchecked-value":!1},model:{value:e.checkboxes.student,callback:function(t){e.$set(e.checkboxes,"student",t)},expression:"checkboxes.student"}},[e._v("Student")]),r("br"),r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1)},E=[],P=(r("d3b7"),r("25f0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.title))])])}),L=[],T={name:"Header",props:{title:String}},F=T,C=Object(u["a"])(F,P,L,!1,null,"3599a0b4",null),D=C.exports,q={name:"Register",components:{Header:D},data:function(){return{form:{name:"",lastname:"",birthday:"",email:"",username:"",password:"",facultyId:"",admin:"false",moderator:"false",student:"false"},checkboxes:{admin:"",moderator:"",student:""}}},methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["register"])),{},{onSubmit:function(e){e.preventDefault(),this.form.admin=this.checkboxes.admin.toString(),this.form.student=this.checkboxes.student.toString(),this.form.moderator=this.checkboxes.moderator.toString(),this.register(this.form),this.$router.push({name:"Home"})}})},U=q,A=Object(u["a"])(U,$,E,!1,null,"5d45ac37",null),H=A.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header",{attrs:{subtitle:"Log In"}}),r("b-form",{on:{submit:e.onSubmit}},[r("b-form-group",{attrs:{label:"Username:","label-for":"username"}},[r("b-form-input",{attrs:{id:"username",placeholder:"Enter username",required:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[r("b-form-input",{attrs:{id:"password",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1)},z=[],J={name:"Login",components:{Header:D},data:function(){return{form:{username:"",password:""}}},methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["login"])),{},{onSubmit:function(e){e.preventDefault(),this.login(this.form),this.$router.push({name:"Home"})}})},N=J,R=Object(u["a"])(N,G,z,!1,null,"47c55680",null),M=R.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("FacultyList")],1)},W=[],Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-pagination",{attrs:{"total-rows":e.faculties.length,"per-page":e.perPage,"aria-controls":"image-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),r("b-table",{attrs:{id:"image-table",hover:"",fixed:"",items:e.faculties,fields:e.fields,small:"","per-page":e.perPage,"current-page":e.currentPage},on:{"row-clicked":e.rowClicked}}),r("b-pagination",{attrs:{"total-rows":e.faculties.length,"per-page":e.perPage,"aria-controls":"image-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)},Q=[],K={name:"FacultyList",data:function(){return{fields:["name","dean","accredited","street","startDate"],items:[],currentPage:1,perPage:10}},mounted:function(){},computed:Object(i["a"])({},Object(s["d"])(["faculties"])),methods:{rowClicked:function(e,t){this.$router.push({name:"SingleFaculty",params:{id:e.id}})}}},X=K,Z=Object(u["a"])(X,Y,Q,!1,null,"9a0efa3c",null),ee=Z.exports,te={name:"Faculty",components:{FacultyList:ee},data:function(){return{}},mounted:function(){this.fetchFacutlies()},computed:{},methods:Object(i["a"])({},Object(s["b"])(["fetchFacutlies"]))},re=te,oe=Object(u["a"])(re,V,W,!1,null,"fc71337c",null),ae=oe.exports,ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("BookList")],1)},ie=[],se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-pagination",{attrs:{"total-rows":e.filteredBooks.length,"per-page":e.perPage,"aria-controls":"image-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),r("b-table",{attrs:{id:"image-table",hover:"",fixed:"",items:e.filteredBooks,fields:e.fields,small:"","per-page":e.perPage,"current-page":e.currentPage},on:{"row-clicked":e.rowClicked}}),r("b-pagination",{attrs:{"total-rows":e.filteredBooks.length,"per-page":e.perPage,"aria-controls":"image-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),r("b-button",{on:{click:function(t){return e.goToAddBook()}}},[e._v("Donate")])],1)},le=[],ce=(r("4de4"),{name:"FacultyList",data:function(){return{fields:["name","writer","genre","desciption","relesedate","publisher",{key:"userId",label:"Donator"}],items:[],currentPage:1,perPage:10}},computed:Object(i["a"])(Object(i["a"])({},Object(s["d"])(["books"])),{},{filteredBooks:function(){var e=this;return console.log(),this.books.filter((function(t){return t.libraryId==e.$route.params.id}))}}),methods:{rowClicked:function(e,t){this.$router.push({name:"Book",params:{id:e.id}})},goToAddBook:function(){this.$router.push({name:"AddBook",params:{id:this.$route.params.id}})}}}),ue=ce,de=Object(u["a"])(ue,se,le,!1,null,"43be9211",null),be=de.exports,me={name:"Book",components:{BookList:be},data:function(){return{}},mounted:function(){this.fetchBooks()},computed:{},methods:Object(i["a"])({},Object(s["b"])(["fetchBooks"]))},fe=me,pe=Object(u["a"])(fe,ne,ie,!1,null,"9cb038ec",null),he=pe.exports,ge=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("LibraryList")],1)},ke=[],ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-table",{attrs:{id:"image-table",hover:"",fixed:"",items:e.libraries,fields:e.fields,small:"","per-page":e.perPage,"current-page":e.currentPage},on:{"row-clicked":e.rowClicked}}),r("b-pagination",{attrs:{"total-rows":e.libraries.length,"per-page":e.perPage,"aria-controls":"image-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)},ye=[],je={name:"LibraryList",data:function(){return{fields:["librarian","opentime","booknumber","floor","working","facultyId"],items:[],currentPage:1,perPage:10,test:{broj:3}}},mounted:function(){},computed:Object(i["a"])({},Object(s["d"])(["libraries"])),methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["fetchBooks"])),{},{rowClicked:function(e,t){this.$router.push({name:"BookList",params:{id:e.id}})}})},_e=je,Ie=Object(u["a"])(_e,ve,ye,!1,null,"8cc2e328",null),Oe=Ie.exports,Se={name:"Library",components:{LibraryList:Oe},data:function(){return{}},mounted:function(){this.fetchLibraries()},computed:{},methods:Object(i["a"])({},Object(s["b"])(["fetchLibraries"]))},we=Se,xe=Object(u["a"])(we,ge,ke,!1,null,"1dab0efa",null),Be=xe.exports,$e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.book?r("SingleBook",{attrs:{book:e.book}}):e._e()],1)},Ee=[],Pe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex justify-content-center"},[r("div",{staticClass:"row text-center"},[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"300rem"},attrs:{title:e.book.name,"img-src":e.getUrl(),"img-alt":"Image","img-top":"",tag:"article"}},[r("h4",[e._v(e._s(e.book.writer))]),r("h4",[e._v(e._s(e.book.id))]),r("b-card-text",[r("p",{attrs:{id:"year"}},[e._v("Release date: "+e._s(e.book.relesedate))]),r("p",[e._v("Genre: "+e._s(e.book.genre))]),r("p",[e._v("Description: "+e._s(e.book.desciption))])]),r("b-button",{attrs:{pill:""},on:{click:function(t){return e.goToEdit()}}},[e._v("Update your donated book")])],1)],1)])},Le=[],Te=(r("b0c0"),{name:"SingleBook",props:{book:Object},computed:Object(i["a"])({},Object(s["d"])(["bookInfo","loggedUserId"])),methods:Object(i["a"])(Object(i["a"])({},Object(s["c"])(["setBookInfo"])),{},{getUrl:function(){return"https://picsum.photos/600/300/?image=".concat(this.book.id)},goToEdit:function(e,t){this.loggedUserId==this.book.userId?(this.setBookInfo({id:this.book.id,name:this.book.name,writer:this.book.writer,genre:this.book.genre,desciption:this.book.desciption,relesedate:this.book.relesedate,publisher:this.book.publisher,libraryId:this.book.libraryId,userId:this.book.userId}),this.$router.push({name:"UpdateBook"})):alert("You must be logged in as a donator to edit this book")}})}),Fe=Te,Ce=Object(u["a"])(Fe,Pe,Le,!1,null,"21fec517",null),De=Ce.exports,qe={name:"SingleBookView",components:{SingleBook:De},computed:Object(i["a"])({},Object(s["d"])(["book"])),methods:Object(i["a"])({},Object(s["b"])(["fetchBookByID"])),mounted:function(){this.fetchBookByID(this.$route.params.id)}},Ue=qe,Ae=Object(u["a"])(Ue,$e,Ee,!1,null,"291c3cee",null),He=Ae.exports,Ge=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.faculty?r("SingleFaculty",{attrs:{faculty:e.faculty}}):e._e(),r("p"),r("h2",[e._v("Library within the faculty")]),e.library[0]?r("SingleLibrary",{attrs:{library:e.library[0]}}):e._e()],1)},ze=[],Je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex justify-content-center"},[r("div",{staticClass:"row text-center"},[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"300rem"},attrs:{title:e.faculty.name,"img-src":e.getUrl(),"img-alt":"Image","img-top":"",tag:"article"}},[r("h4",[e._v(e._s(e.faculty.dean))]),r("b-card-text",[r("p",{attrs:{id:"year"}},[e._v("Accredited: "+e._s(e.faculty.accredited))]),r("p",[e._v("street: "+e._s(e.faculty.street))]),r("p",[e._v("School start: "+e._s(e.faculty.startDate))])])],1)],1)])},Ne=[],Re={name:"SingleFaculty",props:{faculty:Object},methods:{getUrl:function(){return"https://picsum.photos/600/300/?image=".concat(10*this.faculty.id)}}},Me=Re,Ve=Object(u["a"])(Me,Je,Ne,!1,null,"5830e6be",null),We=Ve.exports,Ye=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"bv-example-row"},[r("b-row",{staticClass:"row"},[r("b-col",{staticClass:"box"},[e._v("Librarian: "+e._s(e.library.librarian))]),r("b-col",{staticClass:"box"},[e._v("Open time: "+e._s(e.library.opentime))]),r("b-col",{staticClass:"box"},[e._v("Book number: "+e._s(e.library.booknumber))]),r("b-col",{staticClass:"box"},[e._v("Floor number: "+e._s(e.library.floor))]),r("b-col",{staticClass:"box"},[e._v("Currently working: "+e._s(e.library.working))]),r("b-button",{on:{click:function(t){return e.goToLib()}}},[e._v("Go to library")])],1)],1)},Qe=[],Ke={name:"SingleLibrary",methods:{goToLib:function(){this.$router.push({name:"BookList",params:{id:this.library.id}})}},props:{library:Object},computed:Object(i["a"])({},Object(s["d"])(["faculty","libraries"]))},Xe=Ke,Ze=(r("4d8e"),Object(u["a"])(Xe,Ye,Qe,!1,null,"d295633c",null)),et=Ze.exports,tt={name:"SingleFacultyView",components:{SingleLibrary:et,SingleFaculty:We,LibraryList:Oe},computed:Object(i["a"])(Object(i["a"])({},Object(s["d"])(["faculty","libraries"])),{},{library:function(){var e=this;if(this.libraries)return this.libraries.filter((function(t){return t.facultyId===e.$route.params.id}))}}),methods:Object(i["a"])({},Object(s["b"])(["fetchFacultyByID","fetchLibraries"])),mounted:function(){this.fetchFacultyByID(this.$route.params.id),this.fetchLibraries()}},rt=tt,ot=Object(u["a"])(rt,Ge,ze,!1,null,"3dcf0796",null),at=ot.exports,nt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return this.token?r("div",{attrs:{id:"app"}},[r("Header",{attrs:{subtitle:"Donate book"}}),r("b-form",{on:{submit:e.onSubmit}},[r("b-form-group",{attrs:{label:"Book name:","label-for":"bookname"}},[r("b-form-input",{attrs:{id:"bookname",state:e.nameState,placeholder:"Enter name",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("b-form-group",{attrs:{label:"Writer:","label-for":"writer"}},[r("b-form-input",{attrs:{id:"writer",state:e.writerState,placeholder:"Enter writer",required:""},model:{value:e.form.writer,callback:function(t){e.$set(e.form,"writer",t)},expression:"form.writer"}})],1),r("b-form-group",{attrs:{label:"Genre:","label-for":"genre"}},[r("b-form-input",{attrs:{id:"genre",state:e.genreState,placeholder:"Enter genre",required:""},model:{value:e.form.genre,callback:function(t){e.$set(e.form,"genre",t)},expression:"form.genre"}})],1),r("b-form-group",{attrs:{label:"Relesedate:","label-for":"relesedate"}},[r("b-form-input",{attrs:{id:"relesedate",type:"date",placeholder:"Enter relesedate",required:""},model:{value:e.form.relesedate,callback:function(t){e.$set(e.form,"relesedate",t)},expression:"form.relesedate"}})],1),r("b-form-group",{attrs:{label:"Desciption:","label-for":"desciption"}},[r("b-form-input",{attrs:{id:"desciption",state:e.desciptionState,placeholder:"Enter desciption",required:""},model:{value:e.form.desciption,callback:function(t){e.$set(e.form,"desciption",t)},expression:"form.desciption"}})],1),r("b-form-group",{attrs:{label:"Publisher:","label-for":"publisher"}},[r("b-form-input",{attrs:{id:"publisher",state:e.publisherState,placeholder:"Enter publisher",required:""},model:{value:e.form.publisher,callback:function(t){e.$set(e.form,"publisher",t)},expression:"form.publisher"}})],1),r("b-alert",{attrs:{variant:"danger",dismissible:""},model:{value:e.showDismissibleAlert,callback:function(t){e.showDismissibleAlert=t},expression:"showDismissibleAlert"}},[e._v(" Please fill in all the fields correctly! ")]),r("br"),r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1):r("p",[e._v("You must be signed in to leave a comment")])},it=[],st={name:"AddBook",components:{Header:D},props:{userObj:Object},data:function(){return{form:{name:"",writer:"",genre:"",desciption:"",relesedate:"",publisher:"",libraryId:"",userId:""},showDismissibleAlert:!1}},computed:Object(i["a"])(Object(i["a"])({},Object(s["d"])(["token","loggedUserId"])),{},{nameState:function(){return this.form.name.length>=4&&this.form.name.length<=15},writerState:function(){return this.form.writer.length>=4&&this.form.writer.length<=15},genreState:function(){return this.form.genre.length>=4&&this.form.genre.length<=15},desciptionState:function(){return this.form.desciption.length>=4},publisherState:function(){return this.form.publisher.length>=4&&this.form.publisher.length<=15}}),methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["addBook"])),{},{onSubmit:function(e){e.preventDefault(),this.nameState&&this.writerState&&this.genreState&&this.desciptionState&&this.publisherState?(this.form.libraryId=this.$route.params.id.toString(),this.form.userId=this.loggedUserId.toString(),this.addBook(this.form),this.$router.back()):this.showDismissibleAlert=!0}})},lt=st,ct=Object(u["a"])(lt,nt,it,!1,null,"20c20bbd",null),ut=ct.exports,dt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return this.token?r("div",{attrs:{id:"app"}},[r("Header",{attrs:{subtitle:"Update book"}}),r("b-form",{on:{submit:e.onSubmit}},[r("b-form-group",{attrs:{label:"Book name:","label-for":"bookname"}},[r("b-form-input",{attrs:{id:"bookname",state:e.nameState,placeholder:"Enter name",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("b-form-group",{attrs:{label:"Writer:","label-for":"writer"}},[r("b-form-input",{attrs:{id:"writer",state:e.writerState,placeholder:"Enter writer",required:""},model:{value:e.form.writer,callback:function(t){e.$set(e.form,"writer",t)},expression:"form.writer"}})],1),r("b-form-group",{attrs:{label:"Genre:","label-for":"genre"}},[r("b-form-input",{attrs:{id:"genre",state:e.genreState,placeholder:"Enter genre",required:""},model:{value:e.form.genre,callback:function(t){e.$set(e.form,"genre",t)},expression:"form.genre"}})],1),r("b-form-group",{attrs:{label:"Relesedate:","label-for":"relesedate"}},[r("b-form-input",{attrs:{id:"relesedate",placeholder:"Enter relesedate",required:""},model:{value:e.form.relesedate,callback:function(t){e.$set(e.form,"relesedate",t)},expression:"form.relesedate"}})],1),r("b-form-group",{attrs:{label:"Desciption:","label-for":"desciption"}},[r("b-form-input",{attrs:{id:"desciption",state:e.desciptionState,placeholder:"Enter desciption",required:""},model:{value:e.form.desciption,callback:function(t){e.$set(e.form,"desciption",t)},expression:"form.desciption"}})],1),r("b-form-group",{attrs:{label:"Publisher:","label-for":"publisher"}},[r("b-form-input",{attrs:{id:"publisher",state:e.publisherState,placeholder:"Enter publisher",required:""},model:{value:e.form.publisher,callback:function(t){e.$set(e.form,"publisher",t)},expression:"form.publisher"}})],1),r("b-form-group",{attrs:{label:"LibraryId:","label-for":"libraryId"}},[r("b-form-input",{attrs:{id:"libraryId",type:"number",state:e.libIdState,placeholder:"Enter libraryId",required:""},model:{value:e.form.libraryId,callback:function(t){e.$set(e.form,"libraryId",t)},expression:"form.libraryId"}})],1),r("b-form-group",{attrs:{label:"UserId:","label-for":"userId"}},[r("b-form-input",{attrs:{id:"userId",type:"number",state:e.userIdState,placeholder:"Enter userId",required:""},model:{value:e.form.userId,callback:function(t){e.$set(e.form,"userId",t)},expression:"form.userId"}})],1),r("br"),r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")])],1)],1):r("p",[e._v("You must be signed in to update your book")])},bt=[],mt={name:"UpdateBook",components:{Header:D},props:{userObj:Object},data:function(){return{form:{id:"",name:"",writer:"",genre:"",desciption:"",relesedate:"",publisher:"",libraryId:"",userId:""}}},computed:Object(i["a"])(Object(i["a"])({},Object(s["d"])(["token","bookInfo"])),{},{nameState:function(){return this.form.name.length>=4&&this.form.name.length<=15},writerState:function(){return this.form.writer.length>=4&&this.form.writer.length<=15},genreState:function(){return this.form.genre.length>=4&&this.form.genre.length<=15},desciptionState:function(){return this.form.relesedate.length>0},publisherState:function(){return this.form.publisher.length>=4&&this.form.publisher.length<=15},userIdState:function(){return this.form.userId.length>0},libIdState:function(){return this.form.libraryId.length>0}}),mounted:function(){this.form.id=this.bookInfo.id.toString(),this.form.name=this.bookInfo.name,this.form.writer=this.bookInfo.writer,this.form.genre=this.bookInfo.genre,this.form.desciption=this.bookInfo.desciption,this.form.relesedate=this.bookInfo.relesedate,this.form.publisher=this.bookInfo.publisher,this.form.libraryId=this.bookInfo.libraryId.toString(),this.form.userId=this.bookInfo.userId.toString()},methods:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["updateBook"])),{},{onSubmit:function(e){e.preventDefault(),this.nameState&&this.writerState&&this.genreState&&this.desciptionState&&this.publisherState&&this.userIdState?(this.$socket.emit("updateBook",{body:this.form,token:this.token}),this.$router.back()):this.showDismissibleAlert=!0}})},ft=mt,pt=Object(u["a"])(ft,dt,bt,!1,null,"968b28de",null),ht=pt.exports;o["default"].use(g["a"]);var gt=[{path:"/",name:"Home",component:I},{path:"/about",name:"About",component:B},{path:"/register",name:"Register",component:H},{path:"/login",name:"Login",component:M},{path:"/faculties",name:"Faculty",component:ae},{path:"/addbook/:id",name:"AddBook",component:ut},{path:"/updatebook",name:"UpdateBook",component:ht},{path:"/books/:id",name:"BookList",component:he},{path:"/libraries",name:"Library",component:Be},{path:"/book/:id",name:"Book",component:He},{path:"/faculty/:id",name:"SingleFaculty",component:at}],kt=new g["a"]({mode:"history",base:"/",routes:gt}),vt=kt;r("159b"),r("e9c4");o["default"].use(s["a"]);var yt=new s["a"].Store({state:{token:"",faculties:[],faculty:null,books:[],book:null,libraries:[],library:[],bookInfo:{id:"",name:"",writer:"",genre:"",desciption:"",relesedate:"",publisher:"",libraryId:"",loggedUserId:""}},mutations:{setToken:function(e,t){e.token=t,localStorage.token=t},removeToken:function(e){e.token="",localStorage.token=""},setLoggedUserId:function(e,t){e.loggedUserId=t},setBookInfo:function(e,t){e.bookInfo.id=t.id,e.bookInfo.name=t.name,e.bookInfo.writer=t.writer,e.bookInfo.genre=t.genre,e.bookInfo.desciption=t.desciption,e.bookInfo.relesedate=t.relesedate,e.bookInfo.publisher=t.publisher,e.bookInfo.libraryId=t.libraryId,e.bookInfo.userId=t.userId,console.log()},setFaculties:function(e,t){e.faculties=t},setBooks:function(e,t){e.books=t},setLibraries:function(e,t){e.libraries=t},setBookById:function(e,t){e.book=t},addBook:function(e,t){e.book=t},addOneBook:function(e,t){e.books.push(t),console.log(e.books)},setFacultyById:function(e,t){e.faculty=t},setLibraryByFacultyId:function(e,t){e.library="",e.libraries.forEach((function(r){r.facultyId===t&&(e.library=r)}))},setSelectedBook:function(e,t){e.book=t}},actions:{register:function(e,t){var r=e.commit;console.log(t),fetch("https://sj-vue-project-auth.herokuapp.com/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.msg?alert(e.msg):r("setToken",e.token)}))},login:function(e,t){var r=e.commit;fetch("https://sj-vue-project-auth.herokuapp.com/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.msg?alert(e.msg):(r("setToken",e.token),r("setLoggedUserId",e.userId))}))},fetchFacutlies:function(e,t){var r=e.commit;fetch("sj-vue-project-rest.herokuapp.com/faculty/all",{headers:{authorization:"Bearer ".concat(localStorage.token)},method:"GET"}).then((function(e){return e.json()})).then((function(e){return r("setFaculties",e)}))},fetchBooks:function(e,t){var r=e.commit;fetch("sj-vue-project-rest.herokuapp.com/admin/book/all",{headers:{authorization:"Bearer ".concat(localStorage.token)},method:"GET"}).then((function(e){return e.json()})).then((function(e){return r("setBooks",e)}))},fetchLibraries:function(e,t){var r=e.commit;fetch("sj-vue-project-rest.herokuapp.com/admin/library/all",{headers:{authorization:"Bearer ".concat(localStorage.token)},method:"GET"}).then((function(e){return e.json()})).then((function(e){return r("setLibraries",e)}))},fetchBookByID:function(e,t){var r=e.commit;fetch("sj-vue-project-rest.herokuapp.com/admin/book/".concat(t),{headers:{authorization:"Bearer ".concat(localStorage.token)},method:"GET"}).then((function(e){return e.json()})).then((function(e){return r("setBookById",e)}))},fetchFacultyByID:function(e,t){var r=e.commit;fetch("sj-vue-project-rest.herokuapp.com/admin/faculty/".concat(t),{headers:{authorization:"Bearer ".concat(localStorage.token)},method:"GET"}).then((function(e){return e.json()})).then((function(e){return r("setFacultyById",e)}))},fetchLibraryByFacultyId:function(e,t){var r=e.commit;fetch("sj-vue-project-rest.herokuapp.com/admin/library/all",{headers:{authorization:"Bearer ".concat(localStorage.token)},method:"GET"}).then((function(e){return e.json()})).then((function(e){return r("setLibraries",e)})),r("setLibraryByFacultyId",t)},addBook:function(e,t){e.commit;fetch("sj-vue-project-rest.herokuapp.com/admin/book/",{method:"POST",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.token)},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.msg&&alert(e.msg,"ovo je error msg")}))},updateBook:function(e,t){e.commit;fetch("https://sj-vue-project-rest.herokuapp.com/admin/book/".concat(t.id),{method:"PUT",headers:{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.token)},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.msg&&alert(e.msg,"ovo je error msg")}))},socket_updateBook:function(e,t){var r=e.commit,o=JSON.parse(t);console.log("nadajmo se knjiga"),r("setSelectedBook",o)}}});o["default"].use(m["a"]),o["default"].use(f["a"]),o["default"].use(new h.a({debug:!1,connection:"https://sj-vue-project-rest.herokuapp.com",vuex:{store:yt,actionPrefix:"socket_"}})),o["default"].config.productionTip=!1,new o["default"]({router:vt,store:yt,render:function(e){return e(b)}}).$mount("#app")},"7fd4":function(e,t,r){e.exports=r.p+"img/book-hands.81dbdca8.jpg"},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.6b8cb2e6.js.map