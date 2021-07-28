(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a,r=n(1),c=n.n(r),i=n(10),o=n.n(i),s=(n(19),n(20),n(13)),l=n(4),b=n(5),u=n(7),d=n(6),j=n(2),p=n(3),h=p.a.h2(a||(a=Object(j.a)(["\n  font-style: normal;\n  font-weight: bold;\n  font-size: 35px;\n  padding: 5px;\n  margin: 0;\n  /* border-bottom: solid 1px; */\n"]))),m=n(0);var x,f=function(t){var e=t.title;return Object(m.jsx)(h,{children:e})},O=n(12),g=p.a.button(x||(x=Object(j.a)(["\n  border-radius: 3px;\n  margin: 15px;\n  padding: 4px 16px;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 24px;\n  cursor: pointer;\n"])));var v,y,C,A,w,S,z=function(t){var e=t.type,n=t.text;return Object(m.jsx)(g,{type:e,children:n})},k=n(26),Z=p.a.form(v||(v=Object(j.a)(["\n  border: solid 1px;\n"]))),J=p.a.label(y||(y=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),D=p.a.input(C||(C=Object(j.a)(["\n  margin: 10px;\n  width: 400px;\n  height: 25px;\n"]))),L=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(O.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(m.jsxs)(Z,{onSubmit:this.handleSubmit,children:[Object(m.jsxs)(J,{children:["Name",Object(m.jsx)(D,{id:Object(k.a)(),type:"text",name:"name",value:e,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)(J,{children:["Number",Object(m.jsx)(D,{id:Object(k.a)(),type:"number",name:"number",value:n,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsx)(z,{type:"submit",text:"Add contact"})]})}}]),n}(r.Component),M=p.a.div(A||(A=Object(j.a)(["\n  border: solid 1px;\n"]))),N=p.a.label(w||(w=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),B=p.a.input(S||(S=Object(j.a)(["\n  margin: 10px;\n  width: 400px;\n  height: 25px;\n"])));var q,F,I=function(t){var e=t.value,n=t.onChange;return Object(m.jsx)(M,{children:Object(m.jsxs)(N,{children:["Find contacts by name",Object(m.jsx)(B,{type:"text",name:"filter",value:e,onChange:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})})},$=p.a.ul(q||(q=Object(j.a)(["\n  border: solid 1px;\n"]))),T=p.a.li(F||(F=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));var E,P=function(t){var e=t.contacts;return t.onDeleteContact,Object(m.jsx)($,{children:e.map((function(t){var e=t.name,n=t.number;t.id;return Object(m.jsxs)(T,{children:[e," ",n,Object(m.jsx)(z,{type:"button",text:"Delete"})]},Object(k.a)())}))})},U=p.a.div(E||(E=Object(j.a)(["\n  font-weight: bold;\n  font-size: 20px;\n  padding: 10px;\n  margin: 30px;\n  width: 700px;\n  background-color: rgb(243, 242, 242);\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n"]))),G=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.formSubmit=function(e){var n=t.state.contacts,a={id:Object(k.a)(),name:e.name,number:e.number};n.find((function(t){return t.name.toLowerCase().includes(a.name.toLowerCase())}))?alert("".concat(a.name," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[a])}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=n.toLocaleLowerCase(),r=e.filter((function(t){return t.name.toLowerCase().includes(a)}));return Object(m.jsxs)(U,{children:[Object(m.jsx)(f,{title:"Phonebook"}),Object(m.jsx)(L,{onSubmit:this.formSubmit}),Object(m.jsx)(f,{title:"Contacts"}),Object(m.jsx)(I,{value:n,onChange:this.changeFilter}),Object(m.jsx)(P,{contacts:r})]})}}]),n}(r.Component);var H=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(G,{})})};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(H,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.e792d362.chunk.js.map