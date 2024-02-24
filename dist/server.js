!function(e){var t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=15)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-bootstrap")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-router-bootstrap")},function(e,t){e.exports=require("url-search-params")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("http-proxy-middleware")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("webpack")},function(e,t){e.exports=require("dotenv")},function(e,t){e.exports=require("source-map-support")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t){e.exports=require("react-select/lib/Async.js")},function(e,t,n){e.exports=n(20)},function(e,t){e.exports=require("webpack-dev-middleware")},function(e,t){e.exports=require("webpack-hot-middleware")},function(e,t,n){(function(t){const a=n(7),s=n(8),r=n(19),o={mode:"production",entry:{app:["./browser/App.jsx"]},output:{filename:"[name].bundle.js",path:a.resolve(t,"public"),publicPath:"/"},module:{rules:[{test:/\.jsx?$/,exclude:/node_modules/,use:{loader:"babel-loader",options:{presets:[["@babel/preset-env",{targets:{ie:"11",edge:"15",safari:"10",firefox:"50",chrome:"49"}}],"@babel/preset-react"]}}}]},plugins:[new s.DefinePlugin({__isBrowser__:"true"})],optimization:{splitChunks:{name:"vendor",chunks:"all"}},devtool:"source-map"},i={mode:"development",entry:{server:["./server/uiserver.js"]},target:"node",externals:[r()],output:{filename:"server.js",path:a.resolve(t,"dist"),publicPath:"/"},module:{rules:[{test:/\.jsx?$/,use:{loader:"babel-loader",options:{presets:[["@babel/preset-env",{targets:{node:"10"}}],"@babel/preset-react"]}}}]},plugins:[new s.DefinePlugin({__isBrowser__:"false"})],devtool:"source-map"};e.exports=[o,i]}).call(this,"/")},function(e,t){e.exports=require("webpack-node-externals")},function(e,t,n){"use strict";n.r(t);var a=n(9),s=n.n(a),r=n(5),o=n.n(r),i=n(6),l=n.n(i),c=(n(7),n(10)),u=n.n(c),h=n(0),d=n.n(h),m=n(11),p=n.n(m),E=n(2),f=n(12),g=n.n(f);var b=n(1),v=n(3),C=n(4),y=n.n(C);function w(e,t,n){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:String(a))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class I extends d.a.Component{constructor({location:{search:e}}){const t=new y.a(e);super(),w(this,"onChangeEffortMin",e=>{e.target.value.match(/^\d*$/)&&this.setState({effortMin:e.target.value,changed:!0})}),w(this,"onChangeEffortMax",e=>{e.target.value.match(/^\d*$/)&&this.setState({effortMax:e.target.value,changed:!0})}),this.state={status:t.get("status")||"",effortMin:t.get("effortMin")||"",effortMax:t.get("effortMax")||"",changed:!1},this.onChangeStatus=this.onChangeStatus.bind(this),this.onApplyFilter=this.onApplyFilter.bind(this),this.showOriginalFilter=this.showOriginalFilter.bind(this),this.onChangeEffortMin=this.onChangeEffortMin.bind(this),this.onChangeEffortMax=this.onChangeEffortMax.bind(this)}componentDidUpdate(e){const{location:{search:t}}=e,{location:{search:n}}=this.props;n!==t&&this.showOriginalFilter()}showOriginalFilter(){const{location:{search:e}}=this.props,t=new y.a(e);this.setState({status:t.get("status")||"",effortMin:t.get("effortMin")||"",effortMax:t.get("effortMax")||"",changed:!1})}onChangeStatus(e){this.setState({status:e.target.value,changed:!0})}onApplyFilter(e){const{status:t,effortMin:n,effortMax:a}=this.state,{history:s,baseUrl:r}=this.props,o=new y.a;t&&o.set("status",t),n&&o.set("effortMin",n),a&&o.set("effortMax",a);const i=o.toString()?"?"+o.toString():"";s.push({pathname:r,search:i})}render(){const{status:e,changed:t,effortMin:n,effortMax:a}=this.state;return d.a.createElement("div",null,d.a.createElement(b.Row,null,d.a.createElement(b.Col,{xs:6,sm:4,md:3,lg:2},d.a.createElement(b.FormGroup,null,d.a.createElement(b.ControlLabel,null,"Status:"),d.a.createElement(b.FormControl,{componentClass:"select",value:e,onChange:this.onChangeStatus},d.a.createElement("option",{value:""},"ALL"),d.a.createElement("option",{value:"New"},"New Issues"),d.a.createElement("option",{value:"Assigned"},"Assigned"),d.a.createElement("option",{value:"Fixed"},"Fixed"),d.a.createElement("option",{value:"Closed"},"Closed")))),d.a.createElement(b.Col,{xs:6,sm:4,md:3,lg:2},d.a.createElement(b.FormGroup,null,d.a.createElement(b.ControlLabel,null," Effort Between:"),d.a.createElement(b.InputGroup,null,d.a.createElement(b.FormControl,{size:5,value:n,onChange:this.onChangeEffortMin}),d.a.createElement(b.InputGroup.Addon,null,"-"),d.a.createElement(b.FormControl,{size:5,value:a,onChange:this.onChangeEffortMax})))),d.a.createElement(b.Col,{xs:6,sm:4,md:3,lg:2},d.a.createElement(b.FormGroup,null,d.a.createElement(b.ControlLabel,null," "),d.a.createElement(b.ButtonToolbar,null,d.a.createElement(b.Button,{type:"button",onClick:this.onApplyFilter,bsStyle:"primary"},"Apply"),d.a.createElement(b.Button,{type:"button",onClick:this.showOriginalFilter,disabled:!t},"Reset"))))))}}var S=Object(E.withRouter)(I);class D extends d.a.Component{render(){const{issue:e,location:{search:t},closeIssue:n,index:a,deleteIssue:s}=this.props,r={pathname:"/issues/"+e.id,search:t},o=d.a.createElement(b.Tooltip,{id:"close-tooltip"},"Close Issue"),i=d.a.createElement(b.Tooltip,{id:"delete-tooltip"},"Delete Issue"),l=d.a.createElement(b.Tooltip,{id:"edit-tooltip"},"Edit Issue");const c=d.a.createElement("tr",null,d.a.createElement("td",null,e.id),d.a.createElement("td",null,e.status),d.a.createElement("td",null,e.owner),d.a.createElement("td",null,e.effort),d.a.createElement("td",null,e.created.toDateString()),d.a.createElement("td",null,e.due?e.due.toDateString():""),d.a.createElement("td",null,e.title),d.a.createElement("td",null,d.a.createElement(v.LinkContainer,{to:"/edit/"+e.id},d.a.createElement(b.OverlayTrigger,{delayShow:1e3,overlay:l},d.a.createElement(b.Button,{bsSize:"xsmall"},d.a.createElement(b.Glyphicon,{glyph:"edit"}))))," ",d.a.createElement(b.OverlayTrigger,{placement:"top",delayShow:1e3,overlay:o},d.a.createElement(b.Button,{bsSize:"xsmall",type:"button",onClick:function(e){e.preventDefault(),n(a)}},d.a.createElement(b.Glyphicon,{glyph:"remove"}))),"  ",d.a.createElement(b.OverlayTrigger,{placement:"top",delayShow:1e3,overlay:i},d.a.createElement(b.Button,{bsSize:"xsmall",type:"button",onClick:function(e){e.preventDefault(),s(a)}},d.a.createElement(b.Glyphicon,{glyph:"trash"})))));return d.a.createElement(v.LinkContainer,{to:r},c)}}var x=Object(E.withRouter)(D);function N({issues:e,closeIssue:t,deleteIssue:n}){return d.a.createElement(d.a.Fragment,null,d.a.createElement(b.Table,{bordered:!0,condensed:!0,hover:!0,responsive:!0},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"ID"),d.a.createElement("th",null,"Status"),d.a.createElement("th",null,"Owner"),d.a.createElement("th",null,"Effort"),d.a.createElement("th",null,"Created"),d.a.createElement("th",null,"Due Date"),d.a.createElement("th",null,"Title"),d.a.createElement("th",null,"Action"))),d.a.createElement("tbody",null,e.map((e,a)=>d.a.createElement(x,{key:e.id,issue:e,index:a,closeIssue:t,deleteIssue:n})))))}var M=n(13),O=n.n(M);const T=new RegExp("^\\d\\d\\d\\d-\\d\\d-\\d\\d");function F(e,t){return T.test(t)?new Date(t):t}async function P(e,t={},n=null){const a=process.env.UI_SERVER_API_ENDPOINT,s={"Content-Type":"application/json"};try{const r=await O()(a,{method:"POST",credentials:"include",headers:s,body:JSON.stringify({query:e,variables:t})}),o=await r.text(),i=JSON.parse(o,F);if(i.errors){const e=i.errors[0];if("BAD_USER_INPUT"===e.extensions.code){const t=e.extensions.exception.errors.join("\n");n&&n(`${e.message}: \n ${t}`)}else n&&n(`${e.extensions.code}:${e.message}`)}return i.data}catch(e){return n&&n("Error in sending data to server :"+e.message),null}}function _({issue:e}){return e?d.a.createElement("div",null,d.a.createElement("h3",null,"Description"),d.a.createElement("pre",null,e.description)):null}var $={};class k extends d.a.Component{componentDidUpdate(){const{showing:e,onDismiss:t}=this.props;e&&(clearTimeout(this.dismissTimer),this.dismissTimer=setTimeout(t,5e3))}componentWillUnmount(){clearTimeout(this.dismissTimer)}render(){const{showing:e,onDismiss:t,bsStyle:n,children:a}=this.props;return d.a.createElement(b.Collapse,{in:e},d.a.createElement("div",{style:{position:"fixed",bottom:20,left:20,zIndex:10}},d.a.createElement(b.Alert,{onDismiss:t,bsStyle:n},a)))}}function A(){return(A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function j(e){return class extends d.a.Component{constructor(e){super(e),this.state={toastVisible:!1,toastMessage:"",toastType:"success"},this.showSuccess=this.showSuccess.bind(this),this.showError=this.showError.bind(this),this.dismissToast=this.dismissToast.bind(this)}showSuccess(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"success"})}showError(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"danger"})}dismissToast(){this.setState({toastVisible:!1})}render(){const{toastVisible:t,toastMessage:n,toastType:a}=this.state;return d.a.createElement(d.a.Fragment,null,d.a.createElement(e,A({showError:this.showError,showSuccess:this.showSuccess,dismissToast:this.dismissToast},this.props)),d.a.createElement(k,{showing:t,bsStyle:a,onDismiss:this.dismissToast},n))}}}function B({params:e,page:t,activePage:n,children:a}){return e.set("page",t),0===t?d.a.cloneElement(a,{disabled:!0}):d.a.createElement(v.LinkContainer,{isActive:()=>t===n,to:{search:"?"+e.toString()}},a)}class L extends d.a.Component{static async fetchData(e,t,n){const a=new y.a(t),s={hasSelection:!1,selectedId:0};a.get("status")&&(s.status=a.get("status"));const r=parseInt(a.get("effortMin"),10);Number.isNaN(r)||(s.effortMin=r);const o=parseInt(a.get("effortMax"),10);Number.isNaN(o)||(s.effortMax=o);const{params:{id:i}}=e,l=parseInt(i,10);Number.isNaN(l)||(s.hasSelection=!0,s.selectedId=l);let c=parseInt(a.get("page"),10);Number.isNaN(c)&&(c=1),s.page=c;return await P("query issueList(\n                $status: StatusType\n                $effortMin: Int\n                $effortMax: Int\n                $hasSelection: Boolean!\n                $selectedId: Int!\n                $page: Int\n               ){\n                issueList(\n                    status: $status\n                    effortMin: $effortMin\n                    effortMax: $effortMax\n                    page: $page\n                    ){\n                      issues {\n                        id status owner\n                        effort created due title\n                      }\n                      pages\n                }\n                issue(id: $selectedId) @include (if: $hasSelection){\n                    id description\n                }\n            }",s,n)}constructor(){super();const e=$.initialData||{issueList:{}},{issueList:{issues:t,pages:n},issue:a}=e;delete $.initialData,this.state={issues:t,selectedIssue:a,pages:n},this.closeIssue=this.closeIssue.bind(this),this.deleteIssue=this.deleteIssue.bind(this),this.restoreIssue=this.restoreIssue.bind(this)}componentDidMount(){const{issues:e}=this.state;null==e&&this.loadData()}componentDidUpdate(e){const{location:{search:t},match:{params:{id:n}}}=e,{location:{search:a},match:{params:{id:s}}}=this.props;t===a&&n===s||this.loadData()}async closeIssue(e){const{issues:t}=this.state,{showSuccess:n,showError:a}=this.props,s=await P("mutation issueUpdate($id:Int!){\n      issueUpdate(id:$id,changes:{status:Closed}){\n        id title created status\n        owner effort due description\n      }\n    }",{id:t[e].id},a);s?(this.setState(t=>{const n=[...t.issues];return n[e]=s.issueUpdate,{issues:n}}),n("Issue Closed.")):this.loadData()}async deleteIssue(e){const{location:{pathname:t,search:n},history:a,showSuccess:s,showError:r}=this.props,{issues:o}=this.state,{id:i}=o[e],l=await P("mutation issueDelete($id:Int!){\n                    issueDelete(id: $id)\n                    }",{id:i},r);if(l&&l.issueDelete){this.setState(s=>{const r=[...s.issues];return t==="/issues/"+i&&a.push({pathname:"/issues",search:n}),r.splice(e,1),{issues:r}});s(d.a.createElement("span",null,`Issue ${i} Deleted Successfully`,d.a.createElement(b.Button,{bsStyle:"link",onClick:()=>this.restoreIssue(i)},"UNDO")))}else this.loadData()}async restoreIssue(e){const{showError:t,showSuccess:n}=this.props;await P("mutation issueRestore(\n            $id: Int!\n        ){\n            issueRestore(\n                id: $id\n            )\n        }",{id:e},t)&&(n(`Issue ${e} Restored Successfully`),this.loadData())}async loadData(){const{location:{search:e},match:t,showError:n}=this.props,a=await L.fetchData(t,e,n);a&&this.setState({issues:a.issueList.issues,selectedIssue:a.issue,pages:a.issueList.pages})}render(){const{issues:e}=this.state;if(null==e)return null;const{location:{search:t}}=this.props,{selectedIssue:n,pages:a}=this.state,s=new y.a(t);let r=parseInt(s.get("page"),10);Number.isNaN(r)&&(r=1);const o=5*Math.floor((r-1)/5)+1,i=o+5-1,l=1===o?0:o-5,c=i>=a?0:o+5,u=[];for(let e=o;e<=Math.min(i,a);e+=1)s.set("page",e),u.push(d.a.createElement(B,{key:e,params:s,activePage:r,page:e},d.a.createElement(b.Pagination.Item,null,e)));return d.a.createElement(d.a.Fragment,null,d.a.createElement(b.Panel,null,d.a.createElement(b.Panel.Heading,null,d.a.createElement(b.Panel.Title,{toggle:!0},"Filter")),d.a.createElement(b.Panel.Body,{collapsible:!0},d.a.createElement(S,{baseUrl:"/issues"}))),d.a.createElement(N,{issues:e,closeIssue:this.closeIssue,deleteIssue:this.deleteIssue}),d.a.createElement(_,{issue:n}),d.a.createElement(b.Pagination,null,d.a.createElement(B,{params:s,page:l},d.a.createElement(b.Pagination.Item,null,"<")),u,d.a.createElement(B,{params:s,page:c},d.a.createElement(b.Pagination.Item,null,">"))))}}const U=j(L);U.fetchData=L.fetchData;var G=U;function R(){return(R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}class V extends d.a.Component{constructor(e){var t;super(e),this.state={value:(t=e.value,null!=t?t.toString():"")},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this)}onChange(e){e.target.value.match(/^\d*$/)&&this.setState({value:e.target.value})}onBlur(e){const{onChange:t}=this.props,{value:n}=this.state;t(e,function(e){const t=parseInt(e,10);return Number.isNaN(t)?null:t}(n))}render(){const{value:e}=this.state;return d.a.createElement("input",R({type:"text"},this.props,{value:e,onChange:this.onChange,onBlur:this.onBlur}))}}function q(){return(q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}class H extends d.a.Component{constructor(e){var t;super(e),this.state={value:(t=e.value,null!=t?t.toISOString().substr(0,10):""),valid:!0,focused:!1},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onFocus=this.onFocus.bind(this)}onFocus(){this.setState({focused:!0})}onBlur(e){const{valid:t,value:n}=this.state,{onValidityChange:a,onChange:s}=this.props,r=function(e){const t=new Date(e);return Number.isNaN(t.getTime())?null:t}(n),o=""===n||null!=r;o!==t&&a&&a(e,o),this.setState({focused:!1,valid:o}),o&&s(e,r)}onChange(e){e.target.value.match(/^[\d-]*$/)&&this.setState({value:e.target.value})}render(){const{valid:e,focused:t,value:n}=this.state,{value:a,onValidityChange:s,...r}=this.props,o=t||!e?n:null!=(i=a)?i.toDateString():"";var i;return d.a.createElement("input",q({},r,{value:o,placeholder:t?"YYYY-MM-DD":null,onChange:this.onChange,onBlur:this.onBlur,onFocus:this.onFocus}))}}class z extends d.a.Component{constructor(e){var t;super(e),this.state={value:(t=e.value,null!=t?t:"")},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this)}onChange(e){const{value:t}=e.target;this.setState({value:t})}onBlur(e){const{value:t}=this.state,{onChange:n}=this.props;var a;n(e,0===(a=t).trim().length?null:a)}render(){const{value:e}=this.state,{tag:t="input",...n}=this.props;return d.a.createElement(t,{...n,value:e,onChange:this.onChange,onBlur:this.onBlur})}}class Y extends d.a.Component{static async fetchData(e,t,n){const{params:{id:a}}=e;return await P("query issue($id: Int!){\n            issue(id: $id){\n                id title status owner\n                effort created due description\n            }\n        }",{id:a},n)}constructor(){super();const e=$.initialData?$.initialData.issue:null;delete $.initialData,this.state={issue:e,invalidFields:{},showingValidation:!1},this.onChange=this.onChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this),this.onValidityChange=this.onValidityChange.bind(this),this.onDismissValidation=this.onDismissValidation.bind(this),this.showValidation=this.showValidation.bind(this)}componentDidMount(){const{issue:e}=this.state;null==e&&this.loadData()}componentDidUpdate(e){const{match:{params:{id:t}}}=e,{match:{params:{id:n}}}=this.props;n!==t&&this.loadData()}onChange(e,t){const{name:n,value:a}=e.target,s=void 0===t?a:t;this.setState(e=>({issue:{...e.issue,[n]:s}}))}onValidityChange(e,t){const{name:n}=e.target;this.setState(e=>{const a={...e.invalidFiels,[n]:!t};return t&&delete a[n],{invalidFields:a}})}async loadData(){const{match:e,showError:t}=this.props,n=await Y.fetchData(e,null,t);this.setState({issue:n?n.issue:{},invalidFields:{}})}showValidation(){this.setState({showingValidation:!0})}onDismissValidation(){this.setState({showingValidation:!1})}async handleSubmit(e){e.preventDefault(),this.showValidation();const{issue:t,invalidFields:n}=this.state;if(0!==Object.keys(n).length)return;const{id:a,created:s,...r}=t,{showError:o,showSuccess:i}=this.props,l=await P("mutation issueUpdate(\n            $id:Int!\n            $changes:IssueUpdateInputs!){\n                issueUpdate(\n                    id:$id\n                    changes:$changes){\n                        id title created status\n                        owner effort due description                       \n                    }\n            }",{id:a,changes:r},o);l&&(this.setState({issue:l.issueUpdate}),i("Issue Updated Successfully."))}render(){const{issue:e}=this.state;if(null==e)return null;const{issue:{id:t}}=this.state,{match:{params:{id:n}}}=this.props;if(null==t)return null!=n?d.a.createElement("h3",null,`Requested Id:${n} not Found`):null;const{invalidFields:a,showingValidation:s}=this.state;let r;0!==Object.keys(a).length&&s&&(r=d.a.createElement(b.Alert,{bsStyle:"danger",onDismiss:this.onDismissValidation},"Please Correct Invalid Fields before Submitting"));const{issue:{title:o,status:i}}=this.state,{issue:{description:l,effort:c,owner:u}}=this.state,{issue:{due:h,created:m}}=this.state;return d.a.createElement(b.Panel,null,d.a.createElement(b.Panel.Heading,null,d.a.createElement(b.Panel.Title,null,"Editing Issue : "+t)),d.a.createElement(b.Panel.Body,null,d.a.createElement(b.Form,{horizontal:!0,onSubmit:this.handleSubmit},d.a.createElement(b.FormGroup,null,d.a.createElement(b.Col,{componentClass:b.ControlLabel,sm:3},"Created"),d.a.createElement(b.Col,{sm:9},d.a.createElement(b.FormControl.Static,null,m.toDateString()))),d.a.createElement(b.FormGroup,null,d.a.createElement(b.Col,{componentClass:b.ControlLabel,sm:3},"Status"),d.a.createElement(b.Col,{sm:9},d.a.createElement(b.FormControl,{componentClass:"select",name:"status",value:i,onChange:this.onChange},d.a.createElement("option",{value:"All"},"(All)"),d.a.createElement("option",{value:"New"},"New"),d.a.createElement("option",{value:"Assigned"},"Assigned"),d.a.createElement("option",{value:"Fixed"},"Fixed"),d.a.createElement("option",{value:"Closed"},"Closed")))),d.a.createElement(b.FormGroup,null,d.a.createElement(b.Col,{componentClass:b.ControlLabel,sm:3},"Owner"),d.a.createElement(b.Col,{sm:9},d.a.createElement(b.FormControl,{componentClass:z,name:"owner",value:u,onChange:this.onChange,key:t}))),d.a.createElement(b.FormGroup,null,d.a.createElement(b.Col,{componentClass:b.ControlLabel,sm:3},"Effort"),d.a.createElement(b.Col,{sm:9},d.a.createElement(b.FormControl,{componentClass:V,name:"effort",value:c,onChange:this.onChange,key:t}))),d.a.createElement(b.FormGroup,{validationState:a.due?"error":null},d.a.createElement(b.Col,{componentClass:b.ControlLabel,sm:3},"Due"),d.a.createElement(b.Col,{sm:9},d.a.createElement(b.FormControl,{componentClass:H,name:"due",value:h,onChange:this.onChange,onValidityChange:this.onValidityChange,key:t}),d.a.createElement(b.FormControl.Feedback,null))),d.a.createElement(b.FormGroup,null,d.a.createElement(b.Col,{componentClass:b.ControlLabel,sm:3},"Title"),d.a.createElement(b.Col,{sm:9},d.a.createElement(b.FormControl,{componentClass:z,size:50,name:"title",value:o,onChange:this.onChange,key:t}))),d.a.createElement(b.FormGroup,null,d.a.createElement(b.Col,{componentClass:b.ControlLabel,sm:3},"Description"),d.a.createElement(b.Col,{sm:9},d.a.createElement(b.FormControl,{componentClass:z,tag:"textarea",rows:8,cols:50,name:"description",value:l,onChange:this.onChange,key:t}))),d.a.createElement(b.FormGroup,null,d.a.createElement(b.Col,{smOffset:3,sm:6},d.a.createElement(b.ButtonToolbar,null,d.a.createElement(b.Button,{bsStyle:"primary",type:"submit"},"Submit"),d.a.createElement(v.LinkContainer,{to:"/issues"},d.a.createElement(b.Button,{bsStyle:"link"},"Back"))))),d.a.createElement(b.FormGroup,null,d.a.createElement(b.Col,{smOffset:3,sm:9},r)))),d.a.createElement(b.Panel.Footer,null,d.a.createElement(E.Link,{to:"/edit/"+(t-1)},"Prev")," | ",d.a.createElement(E.Link,{to:"/edit/"+(t+1)},"Next")))}}const J=j(Y);J.fetchData=Y.fetchData;var W=J;const X=["New","Assigned","Fixed","Closed"];class K extends d.a.Component{static async fetchData(e,t,n){const a=new URLSearchParams(t),s={};a.get("status")&&(s.status=a.get("status"));const r=parseInt(a.get("effortMin"),10);Number.isNaN(r)||(s.effortMin=r);const o=parseInt(a.get("effortMax"),10);Number.isNaN(o)||(s.effortMax=o);return await P("query issueCounts(\n                $status: StatusType\n                $effortMin: Int\n                $effortMax: Int\n            ){\n                issueCounts(\n                    status: $status\n                    effortMin: $effortMin\n                    effortMax: $effortMax\n                ){\n                    owner New Assigned Fixed Closed\n                }\n            }",s,n)}constructor(e){super(e);const t=$.initialData?$.initialData.issueCounts:null;delete $.initialData,this.state={stats:t}}componentDidMount(){const{stats:e}=this.state;null==e&&this.loadData()}componentDidUpdate(e){const{location:{search:t}}=e,{location:{search:n}}=this.props;t!==n&&this.loadData()}async loadData(){const{location:{search:e},match:t,showError:n}=this.props,a=await K.fetchData(t,e.showError);a&&this.setState({stats:a.issueCounts})}render(){const{stats:e}=this.state;if(null==e)return null;const t=X.map(e=>d.a.createElement("th",{key:e},e)),n=e.map(e=>d.a.createElement("tr",{key:e.owner},d.a.createElement("td",null,e.owner),X.map(t=>d.a.createElement("td",{key:t},e[t]?e[t]:0))));return d.a.createElement(d.a.Fragment,null,d.a.createElement(b.Panel,null,d.a.createElement(b.Panel.Heading,null,d.a.createElement(b.Panel.Title,{toggle:!0},"Filter")),d.a.createElement(b.Panel.Body,{collapsible:!0},d.a.createElement(S,{baseUrl:"/report"}))),d.a.createElement(b.Table,{bordered:!0,condensed:!0,hover:!0,responsive:!0},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null),t)),d.a.createElement("tbody",null,n)))}}const Q=j(K);Q.fetchData=K.fetchData;var Z=Q;class ee extends d.a.Component{static async fetchData(){return await P("query{about}")}constructor(){super();const e=$.initialData?$.initialData.about:null;delete $.initialData,this.state={apiAbout:e}}async componentWillMount(){const{apiAbout:e}=this.state;if(null==e){const e=await ee.fetchData(null,null,null);this.setState({apiAbout:e.about})}}render(){const{apiAbout:e}=this.state;return d.a.createElement("div",{className:"text-center"},d.a.createElement("h3",null,"Issue Tracker 0.9"),d.a.createElement("h4",null,e))}}var te=[{path:"/issues/:id?",component:G},{path:"/edit/:id",component:W},{path:"/report",component:Z},{path:"/about",component:ee},{path:"*",component:function(){return d.a.createElement("h1",null,"Page Not Found")}}];function ne(){return(ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ae(){return d.a.createElement(E.Switch,null,d.a.createElement(E.Redirect,{exact:!0,from:"/",to:"/issues"}),te.map(e=>d.a.createElement(E.Route,ne({},e,{key:e.path}))))}class se extends d.a.Component{constructor(e){super(e),this.state={showing:!1},this.showModal=this.showModal.bind(this),this.hideModal=this.hideModal.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}showModal(){this.setState({showing:!0})}hideModal(){this.setState({showing:!1})}async handleSubmit(e){e.preventDefault(),this.hideModal();const t=document.forms.issueAdd,n={owner:t.owner.value,title:t.title.value,due:new Date((new Date).getTime()+864e6)},{showError:a}=this.props,s=await P("mutation addIssue($issue:IssueInputs!){\n            addIssue(issue:$issue){\n                id\n            }\n        }",{issue:n},a);if(s){const{history:e}=this.props;e.push("/edit/"+s.addIssue.id)}}render(){const{showing:e}=this.state;return d.a.createElement(d.a.Fragment,null,d.a.createElement(b.NavItem,{onClick:this.showModal},d.a.createElement(b.OverlayTrigger,{delay:1e3,position:"left",overlay:d.a.createElement(b.Tooltip,{id:"create_issue"},"Create Issue")},d.a.createElement(b.Glyphicon,{glyph:"plus"}))),d.a.createElement(b.Modal,{show:e,onHide:this.hideModal},d.a.createElement(b.Modal.Header,{closeButton:!0},d.a.createElement(b.Modal.Title,null,"Create Issue")),d.a.createElement(b.Modal.Body,null,d.a.createElement(b.Form,{name:"issueAdd",onSubmit:this.handleSubmit},d.a.createElement(b.FormGroup,null,d.a.createElement(b.ControlLabel,null,"Title"),d.a.createElement(b.FormControl,{name:"title",autoFocus:!0})),d.a.createElement(b.FormGroup,null,d.a.createElement(b.ControlLabel,null,"Owner"),d.a.createElement(b.FormControl,{name:"owner"})))),d.a.createElement(b.Modal.Footer,null,d.a.createElement(b.ButtonToolbar,null,d.a.createElement(b.Button,{type:"button",onClick:this.handleSubmit,bsStyle:"primary"},"Submit"),d.a.createElement(b.Button,{bsStyle:"link",onClick:this.hideModal},"Cancel")))))}}var re=j(Object(E.withRouter)(se)),oe=n(14),ie=n.n(oe);class le extends d.a.Component{constructor(e){super(e),this.loadOptions=this.loadOptions.bind(this),this.onChangeSelection=this.onChangeSelection.bind(this)}async loadOptions(e){const{showError:t}=this.props;if(e.length<3)return[];return(await P("query issueList($search: String){\n            issueList(search: $search){\n                issues{title id}\n            }\n        }",{search:e},t)).issueList.issues.map(e=>({label:`#${e.id} ${e.title}`,value:e.id}))}onChangeSelection({value:e}){const{history:t}=this.props;t.push({pathname:"/edit/"+e})}render(){return d.a.createElement(ie.a,{instanceId:"search-select",value:"",loadOptions:this.loadOptions,filterOption:()=>!0,onChange:this.onChangeSelection,components:{DropdownIndicator:null}})}}var ce=Object(E.withRouter)(le);function ue({user:e,onUserChange:t}){return d.a.createElement(b.Navbar,{fluid:!0},d.a.createElement(b.Navbar.Header,null,d.a.createElement(b.Navbar.Brand,null,"Issue Tracker")),d.a.createElement(b.Nav,null,d.a.createElement(v.LinkContainer,{exact:!0,to:"/"},d.a.createElement(b.NavItem,null,"Home")),d.a.createElement(v.LinkContainer,{to:"/issues"},d.a.createElement(b.NavItem,null,"Issue List")),d.a.createElement(v.LinkContainer,{to:"/report"},d.a.createElement(b.NavItem,null,"Report"))),d.a.createElement(b.Col,{sm:5},d.a.createElement(b.Navbar.Form,null,d.a.createElement(ce,null))),d.a.createElement(b.Nav,{pullRight:!0},d.a.createElement(re,{user:e}),d.a.createElement(b.NavDropdown,{id:"user-dropdown",title:d.a.createElement(b.Glyphicon,{glyph:"option-vertical"}),noCaret:!0},d.a.createElement(v.LinkContainer,{to:"/about"},d.a.createElement(b.MenuItem,null,"About")))))}function he(){return d.a.createElement("small",null,d.a.createElement("hr",null),d.a.createElement("p",{className:"text-center"},"Want to See the Source Code?"," ",d.a.createElement("a",{href:"https://github.com/vignesh-arch/Issue-Tracker"},"Github Source Code")))}class de extends d.a.Component{render(){return d.a.createElement("div",null,d.a.createElement(ue,null),d.a.createElement(b.Grid,{fluid:!0},d.a.createElement(ae,null)),d.a.createElement(he,null))}}var me=async function(e,t){const n=te.find(t=>Object(E.matchPath)(e.path,t));let a;if(n&&n.component.fetchData){const t=Object(E.matchPath)(e.path,n),s=e.url.indexOf("?"),r=-1!==s?e.url.substr(s):null;a=await n.component.fetchData(t,r)}$.initialData=a;const s={},r=d.a.createElement(E.StaticRouter,{location:e.url,context:s},d.a.createElement(de,null)),o=p.a.renderToString(r);s.url?t.redirect(301,s.url):t.send(function(e,t){return`<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <title>Mern Stack Application</title>\n    <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css"/>\n    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>\n    <script src="https://apis.google.com/js/api:client.js"><\/script>\n    <style>\n      .panel-title a {\n        display: block;\n        width: 100%; \n        cursor: pointer;\n      }\n      table.table-hover tr{\n        cursor: pointer;\n      }\n    </style>\n  </head>\n  <body>\n    \x3c!--Page generated from template. --\x3e\n    <div id="content">${e}</div>\n    \n    <script>\n      window.__INITIAL_DATA__=${g()(t)}\n    <\/script>\n    <script src="/env.js"><\/script>\n    <script src="/vendor.bundle.js"><\/script>\n    <script src="/app.bundle.js"><\/script> \n  </body>\n</html>\n`}(o,a))};const pe=o()();u.a.install(),s.a.config();process.env.ENABLE_HMR;pe.use(o.a.static("public"));const Ee=process.env.API_PROXY_TARGET;Ee&&(pe.use("/graphql",l()({target:Ee})),pe.use("/auth",l()({target:Ee}))),process.env.UI_AUTH_ENDPOINT||(process.env.UI_AUTH_ENDPOINT="http://localhost:3000/auth"),process.env.UI_API_ENDPOINT||(process.env.UI_API_ENDPOINT="http://localhost:3000/graphql"),process.env.UI_SERVER_API_ENDPOINT||(process.env.UI_SERVER_API_ENDPOINT=process.env.UI_API_ENDPOINT),pe.get("/env.js",(e,t)=>{const n={UI_API_ENDPOINT:process.env.UI_API_ENDPOINT,GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,UI_AUTH_ENDPOINT:process.env.UI_AUTH_ENDPOINT};t.send("window.ENV="+JSON.stringify(n))}),pe.get("*",(e,t,n)=>{me(e,t,n)});const fe=process.env.PORT||4e3;pe.listen(fe,()=>{console.log("UI Server Started at Port "+fe)})}]);
//# sourceMappingURL=server.js.map