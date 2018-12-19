(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(3),r=n.n(c),o=n(4),u=n(5),i=n(7),s=n(6),d=n(8),h=(n(2),[{value:"cuda10_0",name:"10.0 (Sept 2018)"},{value:"cuda9_2",name:"9.2 (May 2018)"},{value:"cuda9_1",name:"9.1 (Dec 2017)"},{value:"cuda9_0",name:"9.0 (Sept 2017)"}]),m={ubuntu16_04:["cuda10_0","cuda9_2","cuda9_1","cuda9_0"],ubuntu18_04:["cuda10_0"]},p=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={os:null,cudaVer:null,scriptContent:null,fetching:!1},n.updateSelection=function(e,t){n.setState({os:e,cudaVer:t,fetching:!0},function(){n.getScriptContents("".concat(e,"_").concat(t))})},n.getScriptContents=function(e){fetch("/scripts/".concat(e,".sh")).then(function(e){if(e.headers.get("content-type").includes("application/x-sh"))return e.text();throw new TypeError("Invalid combo")}).then(function(e){n.setState({scriptContent:e,fetching:!1})}).catch(function(e){n.setState({scriptContent:null,fetching:!1})})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{padding:"30px"}},l.a.createElement("div",{style:{width:"100%",textAlign:"center"}},l.a.createElement("h3",null,"Cuda Bootstrap"),l.a.createElement("h5",null,"Easily install CUDA on your Linux-based ML/DL machines")),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("label",null,"Operating System",l.a.createElement("select",{onChange:function(t){return e.updateSelection(t.target.value,"default")},value:this.state.os||"default"},l.a.createElement("option",{value:"default"},"Select your OS"),l.a.createElement("option",{value:"ubuntu18_04"},"Ubuntu 18.04"),l.a.createElement("option",{value:"ubuntu16_04"},"Ubuntu 16.04"))),l.a.createElement("label",null,"CUDA Toolkit Version",l.a.createElement("select",{onChange:function(t){return e.updateSelection(e.state.os,t.target.value)},value:this.state.cudaVer||"default"},l.a.createElement("option",{value:"default"},"Select your CUDA Toolkit Version"),h.map(function(t){if(void 0!==m[e.state.os]&&-1!==m[e.state.os].indexOf(t.value))return l.a.createElement("option",{key:t.value,value:t.value},t.name)}))),l.a.createElement("label",null,"*Only supports x85_64 architecture for now. ",l.a.createElement("br",null),"** ",l.a.createElement("a",{href:"https://github.com/kendricktan/cuda-bootstrap"},"Don't see what you need/want? Make a PR!")))),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h5",null,"One Liner Install"),l.a.createElement("input",{readOnly:!0,style:{minWidth:"100%"},value:this.state.fetching?"Loading...":null===this.state.scriptContent?"Not available yet...":"wget https://cuda-bootstrap.com/scripts/".concat(this.state.os,"_").concat(this.state.cudaVer,".sh -O - | sudo -E bash")}),l.a.createElement("h5",null,"Script Contents"),l.a.createElement("textarea",{readOnly:!0,style:{minWidth:"100%",minHeight:"240px"},value:null===this.state.scriptContent?"":this.state.scriptContent})),l.a.createElement("hr",null),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("a",{href:"https://github.com/kendricktan/cuda-bootstrap"},"github"),"\xa0\xa0| made by ",l.a.createElement("a",{href:"https://kndrck.co?ref=cuda-bootstrap"},"kendricktan")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.e2855258.chunk.js.map