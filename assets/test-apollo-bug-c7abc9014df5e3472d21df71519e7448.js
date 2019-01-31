"use strict"
define("test-apollo-bug/app",["exports","test-apollo-bug/resolver","ember-load-initializers","test-apollo-bug/config/environment"],function(e,t,n,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default});(0,n.default)(a,r.default.modulePrefix)
var l=a
e.default=l}),define("test-apollo-bug/controllers/application",["exports","@babel/runtime/helpers/esm/toConsumableArray","@babel/runtime/helpers/esm/classCallCheck","@babel/runtime/helpers/esm/possibleConstructorReturn","@babel/runtime/helpers/esm/getPrototypeOf","@babel/runtime/helpers/esm/inherits","@babel/runtime/helpers/esm/assertThisInitialized","@babel/runtime/helpers/esm/decorate","@babel/runtime/helpers/esm/taggedTemplateLiteral","@ember-decorators/service","ember-concurrency-decorators","rxjs","rxjs/operators","ember-rx","graphql-tag"],function(e,t,n,r,a,l,o,i,u,s,d,c,f,p,m){function b(){var e=(0,u.default)(["\n  mutation CreatePost($content: String!) {\n    post: createPost(content: $content) {\n      id\n      content\n    }\n  }\n"])
return b=function(){return e},e}function v(){var e=(0,u.default)(["\n  query FetchAllPosts {\n    allPosts {\n      id\n      content\n    }\n  }\n"])
return v=function(){return e},e}function y(e){var t=new c.Subject
return e.subscribe(t),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var h=(0,m.default)(v()),g=(0,m.default)(b()),P=(0,i.default)(null,function(e,i){return{F:function(t){function i(){var t,l;(0,n.default)(this,i)
for(var u=arguments.length,s=new Array(u),d=0;d<u;d++)s[d]=arguments[d]
return l=(0,r.default)(this,(t=(0,a.default)(i)).call.apply(t,[this].concat(s))),e((0,o.default)((0,o.default)(l))),l}return(0,l.default)(i,t),i}(i),d:[{kind:"field",decorators:[s.inject],key:"apollo",value:void 0},{kind:"field",decorators:[(0,d.lastValue)("fetchModel")],key:"model$",value:function(){return(0,c.empty)()}},{kind:"field",decorators:[(0,p.subscribe)("model$")],key:"model",value:function(){return[]}},{kind:"field",key:"createdPosts",value:function(){return[]}},{kind:"field",key:"performAdditionalBroadcast",value:function(){return!1}},{kind:"field",decorators:[d.task],key:"fetchModel",value:function(){return regeneratorRuntime.mark(function e(){var t,n
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.apollo.client.watchQuery({query:h}),(n=y(t)).subscribe(function(e){console.log(e)}),e.abrupt("return",n.asObservable().pipe((0,f.map)(function(e){return e.data.allPosts})))
case 4:case"end":return e.stop()}},e,this)})}},{kind:"field",decorators:[d.task],key:"createPost",value:function(){return regeneratorRuntime.mark(function e(){var n,r
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.apollo.mutate({mutation:g,variables:{content:"A new post"}},"post")
case 2:n=e.sent,this.set("createdPosts",[].concat((0,t.default)(this.createdPosts),[n])),(r=this.apollo.cache.readQuery({query:h})).allPosts=[].concat((0,t.default)(r.allPosts),[n]),this.apollo.cache.writeQuery({query:h,data:r}),this.performAdditionalBroadcast&&this.apollo.client.initQueryManager().broadcastQueries()
case 8:case"end":return e.stop()}},e,this)})}}]}},Ember.Controller)
e.default=P}),define("test-apollo-bug/graphql/schema",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={kind:"Document",definitions:[{kind:"ObjectTypeDefinition",name:{kind:"Name",value:"Post"},interfaces:[],directives:[],fields:[{kind:"FieldDefinition",name:{kind:"Name",value:"id"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]},{kind:"FieldDefinition",name:{kind:"Name",value:"content"},arguments:[],type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}]},{kind:"ObjectTypeDefinition",name:{kind:"Name",value:"Query"},interfaces:[],directives:[],fields:[{kind:"FieldDefinition",name:{kind:"Name",value:"allPosts"},arguments:[],type:{kind:"NonNullType",type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Post"}}}}},directives:[]}]},{kind:"ObjectTypeDefinition",name:{kind:"Name",value:"Mutation"},interfaces:[],directives:[],fields:[{kind:"FieldDefinition",name:{kind:"Name",value:"createPost"},arguments:[{kind:"InputValueDefinition",name:{kind:"Name",value:"content"},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],type:{kind:"NamedType",name:{kind:"Name",value:"Post"}},directives:[]}]}],loc:{start:0,end:136}}
e.default=t}),define("test-apollo-bug/helpers/app-version",["exports","test-apollo-bug/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.default.APP.version,l=r.versionOnly||r.hideSha,o=r.shaOnly||r.hideVersion,i=null
return l&&(r.showExtended&&(i=a.match(n.versionExtendedRegExp)),i||(i=a.match(n.versionRegExp))),o&&(i=a.match(n.shaRegExp)),i?i[0]:a}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var a=Ember.Helper.helper(r)
e.default=a}),define("test-apollo-bug/helpers/cancel-all",["exports","ember-concurrency/helpers/cancel-all"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("test-apollo-bug/helpers/color-from-value",["exports","@babel/runtime/helpers/esm/slicedToArray"],function(e,t){function n(e){var n,r,a=(0,t.default)(e,1)[0]
return n=function(e){for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t)
return t}(a),r=(16777215&n).toString(16).toUpperCase(),"00000".substring(0,6-r.length)+r}Object.defineProperty(e,"__esModule",{value:!0}),e.colorFromValue=n,e.default=void 0
var r=Ember.Helper.helper(n)
e.default=r}),define("test-apollo-bug/helpers/gt",["exports","@babel/runtime/helpers/esm/slicedToArray"],function(e,t){function n(e){var n=(0,t.default)(e,2)
return n[0]>n[1]}Object.defineProperty(e,"__esModule",{value:!0}),e.gt=n,e.default=void 0
var r=Ember.Helper.helper(n)
e.default=r}),define("test-apollo-bug/helpers/html-safe",["exports","@babel/runtime/helpers/esm/slicedToArray"],function(e,t){function n(e){var n=(0,t.default)(e,1)[0]
return Ember.String.htmlSafe(n)}Object.defineProperty(e,"__esModule",{value:!0}),e.htmlSafeHelper=n,e.default=void 0
var r=Ember.Helper.helper(n)
e.default=r}),define("test-apollo-bug/helpers/not",["exports","@babel/runtime/helpers/esm/slicedToArray"],function(e,t){function n(e){return!(0,t.default)(e,1)[0]}Object.defineProperty(e,"__esModule",{value:!0}),e.not=n,e.default=void 0
var r=Ember.Helper.helper(n)
e.default=r}),define("test-apollo-bug/helpers/perform",["exports","ember-concurrency/helpers/perform"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("test-apollo-bug/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("test-apollo-bug/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("test-apollo-bug/helpers/subscribe",["exports","ember-rx/helpers/subscribe"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"subscribe",{enumerable:!0,get:function(){return t.subscribe}})}),define("test-apollo-bug/helpers/task",["exports","ember-concurrency/helpers/task"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("test-apollo-bug/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","test-apollo-bug/config/environment"],function(e,t,n){var r,a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n.default.APP&&(r=n.default.APP.name,a=n.default.APP.version)
var l={name:"App Version",initialize:(0,t.default)(r,a)}
e.default=l}),define("test-apollo-bug/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=n}),define("test-apollo-bug/initializers/ember-concurrency",["exports","ember-concurrency/initializers/ember-concurrency"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("test-apollo-bug/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("test-apollo-bug/initializers/export-application-global",["exports","test-apollo-bug/config/environment"],function(e,t){function n(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var r,a=t.default.exportApplicationGlobal
r="string"==typeof a?a:Ember.String.classify(t.default.modulePrefix),n[r]||(n[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=n,e.default=void 0
var r={name:"export-application-global",initialize:n}
e.default=r}),define("test-apollo-bug/initializers/run-pretender",["exports","@babel/runtime/helpers/esm/asyncToGenerator","pretender","graphql-tools","graphql","test-apollo-bug/graphql/schema"],function(e,t,n,r,a,l){function o(e){var o=(0,r.makeExecutableSchema)({typeDefs:l.default});(0,r.addMockFunctionsToSchema)({schema:o})
var i=new n.default(function(){this.post("/api/graphql",function(){var e=(0,t.default)(regeneratorRuntime.mark(function e(t){var n,r
return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse(t.requestBody),e.next=3,(0,a.graphql)(o,n.query,{},{},n.variables)
case 3:return r=e.sent,e.abrupt("return",[200,{"Content-Type":"application/json"},JSON.stringify(r)])
case 5:case"end":return e.stop()}},e,this)}))
return function(t){return e.apply(this,arguments)}}())})
e.register("server:pretender",i)}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=o,e.default=void 0
var i={initialize:o}
e.default=i}),define("test-apollo-bug/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n={name:"ember-data",initialize:t.default}
e.default=n}),define("test-apollo-bug/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=t.default
e.default=n}),define("test-apollo-bug/router",["exports","test-apollo-bug/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){})
var r=n
e.default=r}),define("test-apollo-bug/routes/application",["exports","@babel/runtime/helpers/esm/classCallCheck","@babel/runtime/helpers/esm/createClass","@babel/runtime/helpers/esm/possibleConstructorReturn","@babel/runtime/helpers/esm/getPrototypeOf","@babel/runtime/helpers/esm/inherits"],function(e,t,n,r,a,l){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=function(e){function o(){return(0,t.default)(this,o),(0,r.default)(this,(0,a.default)(o).apply(this,arguments))}return(0,l.default)(o,e),(0,n.default)(o,[{key:"setupController",value:function(e){e.fetchModel.perform()}}]),o}(Ember.Route)
e.default=o}),define("test-apollo-bug/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("test-apollo-bug/services/apollo",["exports","ember-apollo-client/services/apollo"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("test-apollo-bug/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"z9xxJGpG",block:'{"symbols":["post","post"],"statements":[[7,"div"],[11,"id","panel"],[9],[0,"\\n  "],[7,"button"],[9],[0,"\\n    Create New Post\\n  "],[3,"action",[[22,0,[]],[27,"perform",[[23,["createPost"]]],null]]],[10],[0,"\\n\\n  Created "],[1,[23,["createPost","performCount"]],false],[0," additional posts\\n\\n  "],[7,"hr"],[9],[10],[0,"\\n\\n  "],[7,"label"],[9],[0,"\\n    "],[7,"input"],[12,"oninput",[27,"action",[[22,0,[]],[27,"mut",[[23,["performAdditionalBroadcast"]],[27,"not",[[23,["performAdditionalBroadcast"]]],null]],null]],null]],[12,"value",[21,"performAdditionalBroadcast"]],[11,"type","checkbox"],[9],[10],[0,"\\n    Call "],[7,"code"],[9],[0,"queryManager.broadCastQueries()"],[10],[0," an additional time?\\n  "],[10],[0,"\\n"],[10],[0,"\\n\\n"],[7,"div"],[11,"id","columns"],[9],[0,"\\n  "],[7,"div"],[11,"class","column"],[9],[0,"\\n    "],[7,"h1"],[9],[0,"Posts from "],[7,"code"],[9],[0,"watchQuery"],[10],[10],[0,"\\n\\n"],[4,"each",[[23,["model"]]],null,{"statements":[[0,"      "],[7,"h2"],[12,"style",[27,"html-safe",[[27,"concat",["background-color: #",[27,"color-from-value",[[22,2,["id"]]],null]],null]],null]],[9],[0,"\\n        "],[1,[22,2,["id"]],false],[0,"\\n      "],[10],[0,"\\n      \\n      "],[1,[22,2,["content"]],false],[0,"\\n"]],"parameters":[2]},null],[0,"  "],[10],[0,"\\n  "],[7,"div"],[11,"class","column"],[9],[0,"\\n    "],[7,"h1"],[9],[0,"Posts created locally"],[10],[0,"\\n\\n"],[4,"each",[[23,["createdPosts"]]],null,{"statements":[[0,"      "],[7,"h2"],[12,"style",[27,"html-safe",[[27,"concat",["background-color: #",[27,"color-from-value",[[22,1,["id"]]],null]],null]],null]],[9],[0,"\\n        "],[1,[22,1,["id"]],false],[0,"\\n      "],[10],[0,"\\n      \\n      "],[1,[22,1,["content"]],false],[0,"\\n"]],"parameters":[1]},null],[0,"  "],[10],[0,"\\n"],[10]],"hasEval":false}',meta:{moduleName:"test-apollo-bug/templates/application.hbs"}})
e.default=t}),define("test-apollo-bug/config/environment",[],function(){try{var e="test-apollo-bug/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("test-apollo-bug/app").default.create({name:"test-apollo-bug",version:"0.0.0+26aced46"})