(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0te/":function(t,a,e){var n=e("pTm/");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,e("SZ7m").default)("68081abb",n,!1,{})},bxjF:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{padding:"0"}},[e("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.handleClick}},[e("el-tab-pane",{attrs:{label:"input"}},[e("div",[e("div",{staticClass:"item"},[e("span",{staticClass:"label"},[t._v("Block Height:")]),t._v(" "),e("span",[t._v(t._s(t.transactionData.blockNumber||""))])]),t._v(" "),e("div",{staticClass:"item"},[e("span",{staticClass:"label"},[t._v("From:")]),t._v(" "),e("span",{staticClass:"input-data-from"},[e("span",[t._v(t._s(t.transactionData.from))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.transactionData&&t.transactionData.user,expression:"transactionData && transactionData.user"}]},[t._v("=>")]),t._v(" "),e("span",{staticClass:"link",on:{click:function(a){return t.link(t.transactionData.user)}}},[t._v(t._s(t.transactionData.user||""))])])]),t._v(" "),e("div",{staticClass:"item"},[e("span",{staticClass:"label"},[e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"部署合约，to字段为空。",placement:"top-start"}},[e("i",{staticClass:"el-icon-info"})]),t._v(" "),e("span",[t._v("To:")])],1),t._v(" "),e("span",[t._v(t._s(t.transactionData.to||"null"))])]),t._v(" "),e("div",{staticClass:"item"},[e("span",{staticClass:"label"},[t._v("Timestamp:")]),t._v(" "),e("span",[t._v(t._s(t.createTime||""))])]),t._v(" "),e("div",{staticClass:"item",staticStyle:{"font-size":"0"}},[e("span",{staticClass:"label"},[t._v("Input:")]),t._v(" "),e("div",{staticClass:"detail-input-content"},[t.showDecode?e("span",{staticClass:"input-data"},[t._v(t._s(t.transactionData.input||""))]):t._e(),t.showDecode?e("br"):t._e(),t._v(" "),t.showDecode?t._e():e("div",{staticClass:"input-data"},[e("div",{staticClass:"input-label"},[e("span",{staticClass:"label"},[t._v("function")]),t._v(" "),e("span",[t._v(t._s(t.funcData+"("+t.abiType+")"))])]),t._v(" "),e("div",{staticClass:"input-label"},[e("span",{staticClass:"label"},[t._v("methodId")]),t._v(" "),e("span",[t._v(t._s(t.methodId))])]),t._v(" "),e("div",{staticClass:"input-label"},[e("span",{staticClass:"label"},[t._v("data")]),t._v(" "),t.inputData.length?e("el-table",{staticStyle:{display:"inline-block",width:"400px"},attrs:{data:t.inputData}},[t.inputData[0].name?e("el-table-column",{attrs:{prop:"name",label:"name",align:"left"}}):t._e(),t._v(" "),e("el-table-column",{attrs:{prop:"type",label:"type",align:"left"}}),t._v(" "),e("el-table-column",{attrs:{prop:"data",label:"data",align:"left","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(a){return[e("i",{staticClass:"wbs-icon-baocun font-12 copy-public-key",attrs:{title:"复制"},on:{click:function(e){return t.copyPubilcKey(a.row.data)}}}),t._v(" "),e("span",[t._v(t._s(a.row.data))])]}}],null,!1,3663056394)})],1):t._e()],1)])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.inputButtonShow,expression:"inputButtonShow"}],staticClass:"item"},[e("span",{staticClass:"label"}),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.decode}},[t._v(t._s(t.buttonTitle))])],1)])])]),t._v(" "),t.eventLog.length>0?e("el-tab-pane",{attrs:{label:"event"},on:{click:t.decodeEventClick}},t._l(t.eventLog,function(a){return t.eventSHow?e("div",[e("div",{staticClass:"item"},[e("span",{staticClass:"label"},[t._v("Address :")]),t._v(" "),e("span",[t._v(t._s(a.address))])]),t._v(" "),e("div",{staticClass:"item"},[e("span",{staticClass:"label"},[t._v("Name :")]),t._v(" "),e("span",[t._v(t._s(a.eventName))])]),t._v(" "),e("div",{staticClass:"item"},[e("span",{staticClass:"label"},[t._v("Topics :")]),t._v(" "),e("div",{staticStyle:{display:"inline-block",width:"800px"}},t._l(a.topics,function(a,n){return e("div",{key:a},[t._v("["+t._s(n)+"] "+t._s(a))])}),0)]),t._v(" "),e("div",{staticClass:"item"},[e("span",{staticClass:"label"},[t._v("Data :")]),t._v(" "),e("div",{staticClass:"detail-input-content"},[a.eventDataShow?t._e():e("span",{staticClass:"input-data"},[t._v(t._s(a.data))]),t._v(" "),e("el-table",{directives:[{name:"show",rawName:"v-show",value:a.eventDataShow,expression:"item.eventDataShow"}],staticClass:"input-data",staticStyle:{display:"inline-block",width:"100%"},attrs:{data:a.eventLgData}},[e("el-table-column",{attrs:{prop:"name",width:"150",label:"name",align:"left"}}),t._v(" "),e("el-table-column",{attrs:{prop:"data",label:"data",align:"left","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(a){return[e("i",{staticClass:"wbs-icon-baocun font-12 copy-public-key",attrs:{title:"复制"},on:{click:function(e){return t.copyPubilcKey(a.row.data)}}}),t._v(" "),e("span",[t._v(t._s(a.row.data))])]}}],null,!0)})],1)],1)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:a.eventButtonShow,expression:"item.eventButtonShow"}],staticClass:"item"},[e("span",{staticClass:"label"}),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.decode}},[t._v(t._s(t.eventTitle))])],1)]):t._e()}),0):t._e()],1)],1)};n._withStripped=!0;var s=e("gDS+"),i=e.n(s),o=e("mHBk"),r=e("DgvE"),c=e("p5Bo"),l=e("oYx3"),d={name:"transactionDetail",props:{transHash:{type:String}},data:function(){return{detail:null,transactionData:{},contractList:[],decodeData:{},funcData:"",showDecode:!1,buttonTitle:"还原",eventTitle:"还原",abiType:[],methodId:"",inputData:[],eventLog:[],buttonSHow:!1,eventSHow:!1,transactionTo:null,bin:"",createTime:null,eventDataShow:!0,inputButtonShow:!0,eventButtonShow:!0,userList:[]}},mounted:function(){this.getHashTransactionInfo(),this.getUser()},destroyed:function(){localStorage.setItem("transaction","")},methods:{link:function(t){l.a.push({path:"/rivateKeyManagement",query:{userName:t}})},copyPubilcKey:function(t){var a=this;t?this.$copyText(t).then(function(t){a.$message({type:"success",showClose:!0,message:"复制成功",duration:2e3})}):this.$message({type:"fail",showClose:!0,message:"key为空，不复制。",duration:2e3})},getHashTransactionInfo:function(){var t=this,a={groupId:localStorage.getItem("groupId"),transHash:this.transHash};Object(o.A)(a,{}).then(function(a){0===a.data.code?(t.transactionData=a.data.data,a.data.data?(t.getCreatTime(a.data.data.blockNumber),t.getAdderss(),a.data.data.to&&"0x0000000000000000000000000000000000000000"!=a.data.data.to?t.getMethod(a.data.data.input):t.getDeloyAbi(a.data.data.input)):t.$message({type:"error",message:"无法查询到交易信息"})):t.$message({type:"error",message:c.a.errCode[a.data.code].cn})}).catch(function(a){t.$message({type:"error",message:"系统错误!"})})},getMethod:function(t){var a=this,e={groupId:localStorage.getItem("groupId"),data:t.substring(0,10)};Object(o.s)(e,{}).then(function(e){0==e.data.code?a.decodefun(t,e.data.data):a.$message({type:"error",message:c.a.errCode[response.data.code].cn})}).catch(function(t){a.$message({type:"error",message:"系统错误!"})})},getDeloyAbi:function(t){var a=this;if(t&&"0x"!=t){var e={groupId:localStorage.getItem("groupId"),partOfBytecodeBin:t.substring(2)};Object(o.j)(e).then(function(t){0==t.data.code?a.decodeDeloy(t.data.data):a.$message({type:"error",message:c.a.errCode[response.data.code].cn})}).catch(function(t){a.$message({type:"error",message:"系统错误!"})})}},getUser:function(){var t=this,a={groupId:localStorage.getItem("groupId"),pageNumber:1,pageSize:1e3};Object(o.z)(a).then(function(a){0===a.data.code?t.userList=a.data.data:t.$message({type:"error",message:c.a.errCode[response.data.code].cn})}).catch(function(a){t.$message({type:"error",message:"系统错误!"})})},getCreatTime:function(t){var a=this,e={groupId:localStorage.getItem("groupId"),blockNumber:t};Object(o.l)(e).then(function(t){0===t.data.code?a.createTime=Object(r.g)(t.data.data.timestamp):a.$message({type:"error",message:c.a.errCode[response.data.code].cn})}).catch(function(t){a.$message({type:"error",message:"系统错误!"})})},handleClick:function(t,a){"event"==t.label&&this.decodeEventClick()},decode:function(){this.showDecode?(this.buttonTitle="还原",this.showDecode=!1):(this.buttonTitle="解码",this.showDecode=!0),this.eventDataShow?(this.buttonTitle="解码",this.eventDataShow=!1):(this.buttonTitle="还原",this.eventDataShow=!0)},decodeAbi:function(t,a){this.inputButtonShow=!0;var e=this.transactionData.input;this.transactionTo=this.transactionData.to,this.transactionTo?this.decodefun(e,this.transactionTo):(this.methodId=e.substring(0,10),this.decodeDeloy(this.bin))},getAdderss:function(){var t=this,a={groupId:localStorage.getItem("groupId"),transHash:this.transHash};Object(o.x)(a,{}).then(function(a){0===a.data.code?t.eventLog=a.data.data.logs:t.$message({type:"error",message:c.a.errCode[a.data.code].cn})}).catch(function(a){t.$message({type:"error",message:"系统错误！"})})},decodeEventClick:function(){for(var t=this,a=function(a){var e={groupId:localStorage.getItem("groupId"),data:t.eventLog[a].topics[0]};Object(o.s)(e).then(function(e){0==e.data.code&&e.data.data?(t.eventLog[a]=t.decodeEvent(e.data.data,t.eventLog[a]),setTimeout(function(){t.eventSHow=!0},200)):0!==e.data.code&&t.$message({type:"error",message:c.a.errCode[e.data.code].cn})}).catch(function(a){t.$message({type:"error",message:"系统错误！"})})},e=0;e<this.eventLog.length;e++)a(e)},decodeEvent:function(t,a){var e=new Web3(Web3.givenProvider);t.abiInfo=JSON.parse(t.abiInfo);var n=a;n.eventTitle="还原",n.eventDataShow=!0,n.eventButtonShow=!0,n.eventName=t.abiInfo.name+"(";for(var s=0;s<t.abiInfo.inputs.length;s++)s==t.abiInfo.inputs.length-1?n.eventName=n.eventName+t.abiInfo.inputs[s].type+" "+t.abiInfo.inputs[s].name:n.eventName=n.eventName+t.abiInfo.inputs[s].type+" "+t.abiInfo.inputs[s].name+",";n.eventName=n.eventName+")";var o=e.eth.abi.decodeLog(t.abiInfo.inputs,n.data,n.topics);for(var r in n.outData={},n.eventLgData=[],o)(+r||0==+r)&&(n.outData[r]=o[r]);if(t.abiInfo.inputs.length&&"{}"!=i()(n.outData)){var c=function(a){t.abiInfo.inputs.forEach(function(t,e){e==a&&(n.eventLgData[e]={},n.eventLgData[e].name=t.name,n.eventLgData[e].data=n.outData[a])})};for(var l in n.outData)c(l)}return n},decodefun:function(t,a){var e=this,n=new Web3(Web3.givenProvider);this.userList.length&&this.userList.forEach(function(t){t.address==e.transactionData.from&&(e.transactionData.user=t.userName)}),this.methodId=t.substring(0,10);var s="0x"+t.substring(10);if(a){if(a.abiInfo=JSON.parse(a.abiInfo),a.abiInfo.inputs.forEach(function(t,a){t&&t.type&&t.name?e.abiType[a]=t.type+" "+t.name:t&&t.name?e.abiType[a]=t.name:t&&t.type?e.abiType[a]=t.type:t&&(e.abiType[a]=t)}),this.funcData=a.abiInfo.name,a.abiInfo.inputs.length&&(this.decodeData=n.eth.abi.decodeParameters(a.abiInfo.inputs,s),"{}"!=i()(this.decodeData))){var o=function(t){a.abiInfo.inputs.forEach(function(a,n){a&&a.name&&a.type?t===a.name&&(e.inputData[n]={},e.inputData[n].name=a.name,e.inputData[n].type=a.type,e.inputData[n].data=e.decodeData[t]):a&&n==t&&(e.inputData[n]={},e.inputData[n].type=a,e.inputData[n].data=e.decodeData[t])})};for(var r in this.decodeData)o(r)}this.showDecode=!1,this.buttonTitle="还原"}},decodeDeloy:function(t){var a=this;if(this.userList.length&&this.userList.forEach(function(t){t.address==a.transactionData.from&&(a.transactionData.user=t.userName)}),t){var e=JSON.parse(t.contractAbi);this.funcData=t.contractName,e.forEach(function(t){"constructor"==t.type&&t.inputs.forEach(function(t,e){t&&t.type&&t.name?a.abiType[e]=t.type+" "+t.name:t&&t.name?a.abiType[e]=t.name:t&&t.type?a.abiType[e]=t.type:t&&(a.abiType[e]=t)})}),this.showDecode=!1,this.buttonTitle="还原"}else this.buttonSHow=!1,this.showDecode=!1}}},p=(e("ibCv"),e("KHd+")),u=Object(p.a)(d,n,[],!1,null,"72b4796f",null);u.options.__file="src/components/transactionDetail.vue";a.a=u.exports},ibCv:function(t,a,e){"use strict";var n=e("0te/");e.n(n).a},"pTm/":function(t,a,e){(t.exports=e("JPst")(!1)).push([t.i,"\n.label[data-v-72b4796f] {\r\n    display: inline-block;\r\n    width: 120px;\r\n    font-weight: bold;\r\n    vertical-align: top;\r\n    font-size: 12px;\n}\n.item[data-v-72b4796f] {\r\n    padding: 3px 0;\n}\n.input[data-v-72b4796f] {\r\n    display: inline-block;\r\n    font-size: 0;\r\n    vertical-align: top;\n}\n.input span[data-v-72b4796f] {\r\n    font-size: 12px;\n}\n.input-data[data-v-72b4796f] {\r\n    display: inline-block;\r\n    width: 100%;\r\n    padding: 10px;\r\n    max-height: 200px;\r\n    overflow: auto;\r\n    word-break: break-all;\r\n    word-wrap: break-word;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\n}\n.input-data-from[data-v-72b4796f] {\r\n    display: inline-block;\r\n    width: calc(100% - 200px);\r\n    height: auto;\r\n    word-break: break-all;\r\n    word-wrap: break-word;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\n}\n.input-label[data-v-72b4796f] {\r\n    padding-bottom: 15px;\n}\n.input-label .label[data-v-72b4796f] {\r\n    width: 80px;\r\n    font-size: 12px;\n}\n.detail-input-content[data-v-72b4796f] {\r\n    display: inline-block;\r\n    width: calc(100% - 200px);\r\n    height: auto;\r\n    border: 1px solid #eaedf3;\r\n    border-radius: 4px;\r\n    font-size: 12px;\n}\r\n",""])}}]);