(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9WPW":function(t,e,a){"use strict";var o=a("B75q");a.n(o).a},B75q:function(t,e,a){},QJE8:function(t,e,a){},YcBf:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"send-wrapper"},[a("div",{staticClass:"send-item"},[a("span",{staticClass:"send-item-title"},[t._v("合约名称:")]),t._v(" "),a("span",[t._v(t._s(t.data.contractName))])]),t._v(" "),a("div",{staticClass:"send-item"},[a("span",{staticClass:"send-item-title"},[t._v("用户:")]),t._v(" "),a("el-select",{staticStyle:{width:"240px"},attrs:{placeholder:"请选择用户"},on:{change:t.changeId},model:{value:t.transation.userName,callback:function(e){t.$set(t.transation,"userName",e)},expression:"transation.userName"}},t._l(t.userList,function(t,e){return a("el-option",{key:t.userId,attrs:{label:t.userName,value:t.userName}})}),1)],1),t._v(" "),a("div",{staticClass:"send-item"},[a("span",{staticClass:"send-item-title"},[t._v("方法:")]),t._v(" "),a("el-select",{staticStyle:{width:"110px"},attrs:{placeholder:"方法类型"},on:{change:function(e){return t.changeType(e)}},model:{value:t.transation.funcType,callback:function(e){t.$set(t.transation,"funcType",e)},expression:"transation.funcType"}},[a("el-option",{attrs:{label:"function",value:"function"}})],1),t._v(" "),a("el-select",{directives:[{name:"show",rawName:"v-show",value:t.funcList.length>0,expression:"funcList.length > 0"}],staticStyle:{width:"125px"},attrs:{placeholder:"方法名"},on:{change:t.changeFunc},model:{value:t.transation.funcName,callback:function(e){t.$set(t.transation,"funcName",e)},expression:"transation.funcName"}},t._l(t.funcList,function(t){return a("el-option",{key:t.name,attrs:{label:t.name,value:t.name}})}),1)],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.pramasData.length,expression:"pramasData.length"}],staticClass:"send-item",staticStyle:{"line-height":"25px"}},[a("span",{staticClass:"send-item-title",staticStyle:{position:"relative",top:"5px"}},[t._v("参数:")]),t._v(" "),a("ul",{staticStyle:{position:"relative",top:"-25px"}},t._l(t.pramasData,function(e,o){return a("li",{staticStyle:{"margin-left":"63px"}},[a("el-input",{staticStyle:{width:"240px"},model:{value:t.transation.funcValue[o],callback:function(e){t.$set(t.transation.funcValue,o,e)},expression:"transation.funcValue[index]"}},[a("template",{slot:"prepend"},[a("span",{},[t._v(t._s(e.type))])])],2),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"如果参数类型是数组，请用逗号分隔，例如：'arry1,arry2'",placement:"top-start"}},[a("i",{staticClass:"el-icon-info",staticStyle:{position:"relative",top:"8px"}})])],1)}),0)]),t._v(" "),a("div",{staticClass:"text-right send-btn"},[a("el-button",{on:{click:t.close}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",disabled:t.buttonClick},on:{click:function(e){return t.submit("transation")}}},[t._v("确定")])],1)])};o._withStripped=!0;var n=a("gDS+"),i=a.n(n),s=a("mHBk"),c=a("p5Bo"),r={name:"sendTransation",props:["data","dialogClose","abi","version"],data:function(){return{transation:{userName:"",funcName:"",funcValue:[],funcType:"function"},userId:"",userList:[],abiList:[],pramasData:[],funcList:[],buttonClick:!1,contractVersion:this.version}},mounted:function(){this.getUserData(),this.formatAbi()},methods:{submit:function(t){this.send()},close:function(t){this.$emit("close",!1)},changeType:function(t){var e=this;this.funcList=[],t&&"function"===t?this.abiList.forEach(function(a){a.type===t&&e.funcList.push(a)}):t&&"constructor"===t?this.abiList.forEach(function(a){a.type===t&&(e.pramasData=a.inputs)}):this.abiList.forEach(function(t){"function"===t.type&&e.funcList.push(t)}),this.funcList.length&&(this.transation.funcName=this.funcList[0].name)},changeId:function(){var t=this;this.transation.userName&&this.userList.forEach(function(e){t.transation.userName===e.userName&&(t.userId=e.userId)})},formatAbi:function(){var t=this.abi;t&&(this.abiList=JSON.parse(t),this.changeType())},changeFunc:function(){var t=this;this.funcList.forEach(function(e){e.name===t.transation.funcName&&(t.pramasData=e.inputs)})},getUserData:function(){var t=this,e={groupId:localStorage.getItem("groupId"),pageNumber:1,pageSize:1e3};Object(s.B)(e,{}).then(function(e){0===e.data.code?(e.data.data.forEach(function(e){1===e.hasPk&&t.userList.push(e)}),t.userList.length&&(t.transation.userName=t.userList[0].userName,t.userId=t.userList[0].userId),t.changeFunc()):t.$message({type:"error",message:c.a.errCode[e.data.code].cn})}).catch(function(e){t.$message({type:"error",message:"系统错误！"})})},send:function(){var t=this;this.buttonClick=!0;if("constructor"===this.transation.funcType&&(this.transation.funcName=this.data.contractName),this.transation.funcValue.length)for(var e=0;e<this.transation.funcValue.length;e++){var a=this.transation.funcValue[e].replace(/^\s+|\s+$/g,"");this.transation.funcValue[e]=a}var o={groupId:localStorage.getItem("groupId"),userId:this.userId,contractName:this.data.contractName,version:this.contractVersion,funcName:this.transation.funcName,funcParam:this.transation.funcValue,abiInfo:this.abiList,contractId:this.data.contractId};Object(s.O)(o).then(function(e){if(t.buttonClick=!1,t.close(),0===e.data.code)if(e.data.data){var a=i()(e.data.data,null,4);t.$alert("<p style='word-wrap: break-word;word-break:break-all;max-height:200px;overflow:auto'>\n                               "+a+"</p>","交易结果",{confirmButtonText:"确定",dangerouslyUseHTMLString:!0}),t.$emit("success",!1)}else t.$message({type:"success",message:"发送交易成功!"}),t.$emit("success",!1);else t.$message({type:"error",message:c.a.errCode[e.data.code].cn}),t.close()}).catch(function(e){t.buttonClick=!1,t.close(),t.$message({type:"error",message:"发送交易失败！"})})}}},l=(a("qYJN"),a("KHd+")),u=Object(l.a)(r,o,[],!1,null,"43dbfaec",null);u.options.__file="src/views/chaincode/dialog/sendTransaction.vue";e.a=u.exports},qYJN:function(t,e,a){"use strict";var o=a("QJE8");a.n(o).a},sG87:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rivate-key-management-wrapper"},[a("v-contentHead",{attrs:{headTitle:"合约列表"}}),t._v(" "),a("div",{staticClass:"module-wrapper"},[a("div",{staticClass:"search-part"},[a("div",{staticClass:"search-part-right"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入合约名或合约地址"},model:{value:t.contractData,callback:function(e){t.contractData=e},expression:"contractData"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.search},slot:"append"})],1)],1)]),t._v(" "),a("div",{staticClass:"search-table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.contractList,"tooltip-effect":"light"}},[a("el-table-column",{attrs:{prop:"contractName",label:"合约名称","show-overflow-tooltip":"",width:"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{color:"#194ea0",cursor:"pointer"},on:{click:function(a){return t.open(e.row)}}},[t._v(t._s(e.row.contractName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"contractAddress",label:"合约地址","show-overflow-tooltip":"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"wbs-icon-copy font-12 copy-public-key",attrs:{title:"复制合约地址"},on:{click:function(a){return t.copyPubilcKey(e.row.contractAddress)}}}),t._v(" "),a("span",[t._v(t._s(e.row.contractAddress))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"contractAbi",label:"合约abi","show-overflow-tooltip":"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"wbs-icon-copy font-12 copy-public-key",attrs:{title:"复制合约abi"},on:{click:function(a){return t.copyPubilcKey(e.row.contractAbi)}}}),t._v(" "),a("span",{staticClass:"link",on:{click:function(a){return t.openAbi(e.row)}}},[t._v(t._s(e.row.contractAbi))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"contractBin",label:"合约bin","show-overflow-tooltip":"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"wbs-icon-copy font-12 copy-public-key",attrs:{title:"复制合约bin"},on:{click:function(a){return t.copyPubilcKey(e.row.contractBin)}}}),t._v(" "),a("span",[t._v(t._s(e.row.contractBin))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间","show-overflow-tooltip":"",width:"150",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{class:{grayColor:!e.row.contractAddress},attrs:{disabled:!e.row.contractAddress,type:"text",size:"small"},on:{click:function(a){return t.send(e.row)}}},[t._v("发送交易")])]}}])})],1),t._v(" "),a("el-pagination",{staticClass:"page",attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30,50],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)]),t._v(" "),t.editorShow?a("v-editor",{attrs:{show:t.editorShow,data:t.editorData},on:{close:t.close}}):t._e(),t._v(" "),t.abiDialogShow?a("abi-dialog",{attrs:{show:t.abiDialogShow,data:t.abiData},on:{close:t.abiClose}}):t._e(),t._v(" "),t.dialogVisible?a("el-dialog",{staticClass:"send-dialog",attrs:{title:"发送交易",visible:t.dialogVisible,width:"500px","before-close":t.sendClose,center:""},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("send-transation",{ref:"send",attrs:{data:t.data,abi:t.abiData,version:t.version},on:{success:t.sendSuccess,close:t.handleClose}})],1):t._e()],1)};o._withStripped=!0;var n=a("YEIV"),i=a.n(n),s=a("qse9"),c=a("YcBf"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:"查看合约内容",visible:t.editorDialog,width:"900px"},on:{"update:visible":function(e){t.editorDialog=e},close:t.modelClose}},[a("div",{ref:"codeContent"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.editorShow,expression:"editorShow"}],ref:"ace",staticClass:"ace-editor",attrs:{id:"aceEditor"}})])])],1)};r._withStripped=!0;var l=a("bU/s"),u=a.n(l);a("xJsF"),a("kiLR"),a("2nlJ");a("NvTd");var d=a("J66h").Base64,h={name:"editor",props:["data","show"],data:function(){return{editorShow:!0,aceEditor:null,modePath:"ace/mode/solidity",editorDialog:this.show||!1}},mounted:function(){this.$nextTick(function(){this.initEditor(),this.setContent()})},methods:{initEditor:function(){this.aceEditor=u.a.edit("aceEditor",{maxLines:30,minLines:5,fontSize:14,fontFamily:"Consolas,Monaco,monospace",mode:this.modePath,tabSize:4,useSoftTabs:!0}),this.aceEditor.setOptions({enableSnippets:!0,enableLiveAutocompletion:!0,enableBasicAutocompletion:!0});this.aceEditor.alignCursors();this.aceEditor.getSession().setUseWrapMode(!0),localStorage.getItem("openContractList")&&(this.openContractList=JSON.parse(localStorage.getItem("openContractList"))),this.aceEditor.resize()},setContent:function(){var t=d.decode(this.data);this.aceEditor.setValue(t)},modelClose:function(){this.$emit("close")}}},p=a("KHd+"),m=Object(p.a)(h,r,[],!1,null,null,null);m.options.__file="src/views/chaincode/dialog/editor.vue";var f=m.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{staticClass:"dialog-wrapper",attrs:{title:"新建文件",visible:t.dialogVisible,"before-close":t.modelClose,width:"600px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",[a("json-viewer",{attrs:{value:t.blcokContent,"expand-depth":5,copyable:"",sort:"",boxed:""}}),t._v(" "),t.noData?a("div",{staticStyle:{"text-align":"center"}},[t._v("暂无数据")]):t._e()],1)])],1)};g._withStripped=!0;var b={name:"abiDialog",props:["data","show"],data:function(){return{dialogVisible:this.show,noData:!1,blcokContent:null}},mounted:function(){JSON.parse(this.data);this.blcokContent=JSON.parse(this.data),this.$nextTick(function(){this.blcokContent?this.noData=!1:this.noData=!0})},methods:{modelClose:function(){this.$emit("close")}}},v=Object(p.a)(b,g,[],!1,null,null,null);v.options.__file="src/views/chaincode/dialog/abiDialog.vue";var _=v.exports,k=a("mHBk"),w=a("oYx3"),y={name:"oldContract",components:{"v-contentHead":s.a,"v-editor":f,"abi-dialog":_,"send-transation":c.a},data:function(){var t;return t={contractList:[],loading:!1,currentPage:1,pageSize:10,editorShow:!1,editorData:null,abiDialogShow:!1,abiData:null,contractData:"",contractName:"",contractAddress:"",version:"",data:null,dialogVisible:!1},i()(t,"currentPage",1),i()(t,"pageSize",10),i()(t,"total",0),t},mounted:function(){this.getContracts()},methods:{getContracts:function(){var t=this,e={groupId:localStorage.getItem("groupId"),pageNumber:this.currentPage,pageSize:this.pageSize,contractName:this.contractName,contractAddress:this.contractAddress};Object(k.q)(e).then(function(e){0==e.data.code&&(t.contractList=e.data.data||[],t.total=e.data.totalCount||0)})},copyPubilcKey:function(t){var e=this;t?this.$copyText(t).then(function(t){e.$message({type:"success",showClose:!0,message:"复制成功",duration:2e3})}):this.$message({type:"fail",showClose:!0,message:"值为空，不复制。",duration:2e3})},open:function(t){w.a.push({path:"/contract",query:{contractId:t.contractId}})},close:function(){this.editorShow=!1},openAbi:function(t){this.abiData=t.contractAbi,this.abiDialogShow=!0},abiClose:function(){this.abiDialogShow=!1,this.abiData=null},search:function(){this.contractData&&this.contractData.length&&this.contractData.length<20?(this.contractName=this.contractData,this.contractAddress=""):this.contractData&&this.contractData.length&&(this.contractData.length>20||20==this.contractData.length)?(this.contractName="",this.contractAddress=this.contractData):(this.contractName="",this.contractAddress=""),this.getContracts()},send:function(t){this.data=t,this.abiData=t.contractAbi,this.version=t.contractVersion,this.dialogVisible=!0},sendClose:function(){this.dialogVisible=!1},handleClose:function(){this.dialogVisible=!1},sendSuccess:function(){this.dialogVisible=!1},handleSizeChange:function(t){this.pageSize=t,this.currentPage=1,this.getContracts()},handleCurrentChange:function(t){this.currentPage=t,this.getContracts()}}},C=(a("9WPW"),Object(p.a)(y,o,[],!1,null,"69d57e4e",null));C.options.__file="src/views/chaincode/oldContract.vue";e.default=C.exports},xJsF:function(t,e,a){(function(t){ace.define("ace/theme/monokai",["require","exports","module","ace/lib/dom"],function(t,e,a){e.isDark=!0,e.cssClass="ace-monokai",e.cssText=".ace-monokai .ace_gutter {background: #2F3129;color: #8F908A}.ace-monokai .ace_print-margin {width: 1px;background: #555651}.ace-monokai {background-color: #272822;color: #F8F8F2}.ace-monokai .ace_cursor {color: #F8F8F0}.ace-monokai .ace_marker-layer .ace_selection {background: #49483E}.ace-monokai.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #272822;}.ace-monokai .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-monokai .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #49483E}.ace-monokai .ace_marker-layer .ace_active-line {background: #202020}.ace-monokai .ace_gutter-active-line {background-color: #272727}.ace-monokai .ace_marker-layer .ace_selected-word {border: 1px solid #49483E}.ace-monokai .ace_invisible {color: #52524d}.ace-monokai .ace_entity.ace_name.ace_tag,.ace-monokai .ace_keyword,.ace-monokai .ace_meta.ace_tag,.ace-monokai .ace_storage {color: #F92672}.ace-monokai .ace_punctuation,.ace-monokai .ace_punctuation.ace_tag {color: #fff}.ace-monokai .ace_constant.ace_character,.ace-monokai .ace_constant.ace_language,.ace-monokai .ace_constant.ace_numeric,.ace-monokai .ace_constant.ace_other {color: #AE81FF}.ace-monokai .ace_invalid {color: #F8F8F0;background-color: #F92672}.ace-monokai .ace_invalid.ace_deprecated {color: #F8F8F0;background-color: #AE81FF}.ace-monokai .ace_support.ace_constant,.ace-monokai .ace_support.ace_function {color: #66D9EF}.ace-monokai .ace_fold {background-color: #A6E22E;border-color: #F8F8F2}.ace-monokai .ace_storage.ace_type,.ace-monokai .ace_support.ace_class,.ace-monokai .ace_support.ace_type {font-style: italic;color: #66D9EF}.ace-monokai .ace_entity.ace_name.ace_function,.ace-monokai .ace_entity.ace_other,.ace-monokai .ace_entity.ace_other.ace_attribute-name,.ace-monokai .ace_variable {color: #A6E22E}.ace-monokai .ace_variable.ace_parameter {font-style: italic;color: #FD971F}.ace-monokai .ace_string {color: #E6DB74}.ace-monokai .ace_comment {color: #75715E}.ace-monokai .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y}",t("../lib/dom").importCssString(e.cssText,e.cssClass)}),ace.require(["ace/theme/monokai"],function(e){t&&(t.exports=e)})}).call(this,a("YuTi")(t))}}]);