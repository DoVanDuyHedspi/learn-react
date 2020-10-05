(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function n(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=(a(23),a(1)),i=a(2),s=a(4),c=a(3),o=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var n;Object(r.a)(this,a),(n=t.call(this,e)).calculateTime=function(e){var t=new Date(1970,0,1);return t.setSeconds(e),t.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/,"$1")};var l=(new Date).getTime()-e.startTime.getTime(),i=n.calculateTime(l);return n.state={seconds:l,clock:i},n}return Object(i.a)(a,[{key:"tick",value:function(){this.setState({seconds:this.state.seconds+1,clock:this.calculateTime(this.state.seconds)})}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.clock)}}]),a}(l.a.Component);var m=function(e){return l.a.createElement("div",{className:"header col-md-12 p-2"},l.a.createElement("div",{className:"text-right"},l.a.createElement(o,{startTime:e.startTime})))},u=a(5),d=a.n(u),h=a(8),v=a(6);a(25);var p=function(e){return l.a.createElement("div",{className:"modal fade",id:"deleteConfirmModal".concat(e.index),tabIndex:"-1",role:"dialog","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title"},"Xac nhan"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("p",null,"Ban co chac chan muon xoa nguoi dung nay khong? ")),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"No"),l.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:function(){return e.handleDelete(e.index)}},"Yes")))))},f=(a(26),function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleHover=function(e,t){n.setState({hoverIndex:t})},n.handleHoverOut=function(e,t){n.setState({hoverIndex:-1})},n.state={hoverIndex:-1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"list"},l.a.createElement("table",{className:"table table-hover table-bordered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Email"),l.a.createElement("th",{scope:"col",style:{minWidth:"80px"}},"Edit"),l.a.createElement("th",{scope:"col",style:{minWidth:"90px"}},"Delete"))),l.a.createElement("tbody",null,this.props.list.map((function(t,a){return l.a.createElement("tr",{key:a,onMouseOver:function(t){return e.handleHover(t,a)},onMouseOut:function(t){return e.handleHoverOut(t,a)}},l.a.createElement("td",null,t.name),l.a.createElement("td",null,t.email),l.a.createElement("td",{className:a!==e.state.hoverIndex||e.props.editStatus?"":"enable"},l.a.createElement("button",{type:"button",className:"btn btn-outline-info btn-sm mx-auto",onClick:function(){return e.props.handleEdit(a)}},"Edit")),l.a.createElement("td",{className:a!==e.state.hoverIndex||e.props.editStatus?"":"enable"},l.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm mx-auto","data-toggle":"modal","data-target":"#deleteConfirmModal".concat(a)},"Delete"),l.a.createElement(p,{index:a,handleDelete:function(t){return e.props.handleDelete(t)}})))}))))))}}]),a}(l.a.Component)),b=a(13),E=(a(27),function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleChange=function(){var e=Object(v.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.name,e.next=3,n.setState(Object(b.a)({},a,t.target.value));case 3:n.validateSubmit();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.validateSubmit=function(e){var t=n.state.name,a=n.state.email,l=n.state.errorMessage;if(l.name="",l.email="",""==t&&(l.name=l.name+"Hay nhap ten\r\n"),""==a?l.email=l.email+"Hay nhap email\r\n":/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)||(l.email=l.email+"Hay nhap dung dinh dang email\r\n"),n.setState({errorMessage:l}),"submit"==e)return!l.name&&!l.email},n.handleSubmit=function(){if(n.validateSubmit("submit")){var e={name:n.state.name,email:n.state.email};n.props.handleUpdate(e)}},n.state={name:e.user.name,email:e.user.email,errorMessage:{name:"",email:""}},n}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({name:e.user.name,email:e.user.email,errorMessage:{name:"",email:""}})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:this.props.editStatus?"d-block":"d-none"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",className:"form-control ".concat(this.state.errorMessage.name?"is-invalid":""),id:"name",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("div",{className:"invalid-feedback"},this.state.errorMessage.name)),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"email",className:"form-control ".concat(this.state.errorMessage.email?"is-invalid":""),id:"email",name:"email","aria-describedby":"emailHelp",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),l.a.createElement("div",{className:"invalid-feedback"},this.state.errorMessage.email)),l.a.createElement("div",{className:"float-right"},l.a.createElement("input",{type:"button",className:"btn btn-secondary mr-5",onClick:function(){return e.props.handleCancel()},value:"Cancel"}),l.a.createElement("input",{type:"button",className:"btn btn-primary",onClick:function(){return e.handleSubmit()},value:"Save"})))))}}]),a}(l.a.Component)),g=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var n;Object(r.a)(this,a),(n=t.call(this,e)).updateLocalStorage=function(){localStorage.setItem("list",JSON.stringify(n.state.list))};var l=[{name:"duy",email:"duy@gmail.com"},{name:"dung",email:"dung@gmail.com"},{name:"duy1",email:"duy1@gmail.com"},{name:"dung1",email:"dung1@gmail.com"},{name:"duy2",email:"duy2@gmail.com"},{name:"dung2",email:"dung2@gmail.com"}];localStorage.getItem("list")||localStorage.setItem("list",JSON.stringify(l));var i=localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")||"[]"):l;return n.state={list:i,editStatus:!1,editUser:"",editIndex:""},n}return Object(i.a)(a,[{key:"handleEdit",value:function(e){this.setState({editStatus:!0,editUser:this.state.list[e],editIndex:e})}},{key:"handleCancel",value:function(){this.setState({editStatus:!1,editUser:"",editIndex:""})}},{key:"handleUpdate",value:function(){var e=Object(v.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(h.a)(this.state.list),n=this.state.editIndex,a[n]=t,e.next=5,this.setState({list:a,editStatus:!1,editUser:"",editIndex:""});case 5:this.updateLocalStorage();case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(){var e=Object(v.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),(a=Object(h.a)(this.state.list)).splice(t,1),e.next=5,this.setState({list:a});case 5:this.updateLocalStorage();case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"body row m-0"},l.a.createElement("div",{className:"col-md list"},l.a.createElement(f,{list:this.state.list,handleEdit:function(t){return e.handleEdit(t)},editStatus:this.state.editStatus,handleDelete:function(t){return e.handleDelete(t)}})),l.a.createElement("div",{className:"col-md detail"},l.a.createElement(E,{editStatus:this.state.editStatus,user:this.state.editUser,handleCancel:function(){return e.handleCancel()},handleUpdate:function(t){return e.handleUpdate(t)}})))}}]),a}(l.a.Component);a(28);t.a=function(){return l.a.createElement("div",{className:"app container"},l.a.createElement(m,{startTime:new Date}),l.a.createElement(g,null))}},function(e,t,a){e.exports=a(17)},function(e,t,a){"use strict";a.r(t),function(e){var t=a(0),n=a.n(t),l=a(12),r=a.n(l),i=(a(22),a(15)),s=a(14);a(29),a(7),a(30);e.jQuery=a(7),a(31),r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i.a,null)),document.getElementById("root")),s.a()}.call(this,a(9))},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){}],[[16,1,2]]]);
//# sourceMappingURL=main.eb69f921.chunk.js.map