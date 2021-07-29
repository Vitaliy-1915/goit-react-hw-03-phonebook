(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a,r=n(1),c=n.n(r),i=n(10),o=n.n(i),s=(n(19),n(20),n(13)),l=n(4),u=n(5),b=n(7),d=n(6),j=n(2),m=n(3),p=m.a.h2(a||(a=Object(j.a)(["\n  font-style: normal;\n  font-weight: bold;\n  font-size: 35px;\n  padding: 5px;\n  margin: 0;\n  /* border-bottom: solid 1px; */\n"]))),h=n(0);var x,f=function(e){var t=e.title;return Object(h.jsx)(p,{children:t})},O=n(12),g=m.a.button(x||(x=Object(j.a)(["\n  border-radius: 3px;\n  margin: 15px;\n  padding: 4px 16px;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 24px;\n  cursor: pointer;\n"])));var v,C,y,A,S,w,z=function(e){var t=e.type,n=e.text,a=e.onClick;return Object(h.jsx)(g,{type:t,onClick:a,children:n})},k=n(26),Z=m.a.form(v||(v=Object(j.a)(["\n  border: solid 1px;\n"]))),J=m.a.label(C||(C=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),D=m.a.input(y||(y=Object(j.a)(["\n  margin: 10px;\n  width: 400px;\n  height: 25px;\n"]))),L=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(O.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(h.jsxs)(Z,{onSubmit:this.handleSubmit,children:[Object(h.jsxs)(J,{children:["Name",Object(h.jsx)(D,{id:Object(k.a)(),type:"text",name:"name",value:t,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsxs)(J,{children:["Number",Object(h.jsx)(D,{id:Object(k.a)(),type:"number",name:"number",value:n,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsx)(z,{type:"submit",text:"Add contact"})]})}}]),n}(r.Component),M=m.a.div(A||(A=Object(j.a)(["\n  border: solid 1px;\n"]))),N=m.a.label(S||(S=Object(j.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),B=m.a.input(w||(w=Object(j.a)(["\n  margin: 10px;\n  width: 400px;\n  height: 25px;\n"])));var q,F,I=function(e){var t=e.value,n=e.onChange;return Object(h.jsx)(M,{children:Object(h.jsxs)(N,{children:["Find contacts by name",Object(h.jsx)(B,{type:"text",name:"filter",value:t,onChange:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})})},$=m.a.ul(q||(q=Object(j.a)(["\n  border: solid 1px;\n"]))),E=m.a.li(F||(F=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));var T,H=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(h.jsx)($,{children:t.map((function(e){var t=e.name,a=e.number,r=e.id;return Object(h.jsxs)(E,{children:[t," ",a,Object(h.jsx)(z,{type:"button",text:"Delete",onClick:function(){return n(r)}})]},Object(k.a)())}))})},K=m.a.div(T||(T=Object(j.a)(["\n  font-weight: bold;\n  font-size: 20px;\n  padding: 10px;\n  margin: 30px;\n  width: 700px;\n  background-color: rgb(243, 242, 242);\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n"]))),P=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.formSubmit=function(t){var n=e.state.contacts,a={id:Object(k.a)(),name:t.name,number:t.number};n.find((function(e){return e.name.toLowerCase().includes(a.name.toLowerCase())}))?alert("".concat(a.name," is already in contacts")):e.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[a])}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.onDeleteContact=function(t){console.log(t),e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts"),t=JSON.parse(e);t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(e,t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=n.toLocaleLowerCase(),r=t.filter((function(e){return e.name.toLowerCase().includes(a)}));return Object(h.jsxs)(K,{children:[Object(h.jsx)(f,{title:"Phonebook"}),Object(h.jsx)(L,{onSubmit:this.formSubmit}),Object(h.jsx)(f,{title:"Contacts"}),Object(h.jsx)(I,{value:n,onChange:this.changeFilter}),Object(h.jsx)(H,{contacts:r})]})}}]),n}(r.Component);var R=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(P,{})})};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(R,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.dd9185d7.chunk.js.map