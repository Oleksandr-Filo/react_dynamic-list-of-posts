(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var s=c(7),n=c.n(s),a=c(2),i=c(1),o=c.n(i),r=c(3),l=c.n(r),d=(c(13),c(14),c(15),c(0)),j=o.a.memo((function(e){var t=e.post,c=e.selectedPostId,s=e.onSelectPostId,n=t.id,a=t.title;return Object(d.jsxs)("tr",{"data-cy":"Post",children:[Object(d.jsx)("td",{"data-cy":"PostId",children:n}),Object(d.jsx)("td",{"data-cy":"PostTitle",children:a}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{type:"button","data-cy":"PostButton",className:l()("button","is-link",{"is-light":c!==n}),onClick:function(){s(n)},children:c===n?"Close":"Open"})})]})})),m=o.a.memo((function(e){var t=e.posts,c=e.selectedPostId,s=e.onSelectPostId;return Object(d.jsxs)("div",{"data-cy":"PostsList",children:[Object(d.jsx)("p",{className:"title",children:"Posts:"}),Object(d.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{className:"has-background-link-light",children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){return Object(d.jsx)(j,{post:e,selectedPostId:c,onSelectPostId:s},e.id)}))})]})]})})),u=c(8),b="https://mate.academy/students-api";function O(e){return new Promise((function(t){setTimeout(t,e)}))}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return c&&(s.body=JSON.stringify(c),s.headers={"Content-Type":"application/json; charset=UTF-8"}),O(300).then((function(){return fetch(b+e,s)})).then((function(e){return e.json()}))}var f,x=function(e){return h(e)},p=function(e,t){return h(e,"POST",t)},N=function(e){return h(e,"DELETE")};!function(e){e.PostsLoadingError="PostsLoadingError",e.CommentsError="CommentsError"}(f||(f={}));var v=o.a.memo((function(e){var t=e.comment,c=e.onDeleteComment,s=t.id,n=t.name,a=t.email,i=t.body;return Object(d.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(d.jsxs)("div",{className:"message-header",children:[Object(d.jsx)("a",{href:"mailto:".concat(a),"data-cy":"CommentAuthor",children:n}),Object(d.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return c(s)},children:"delete button"})]}),Object(d.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:i})]})})),y=o.a.memo((function(e){var t=e.error,c="Something went wrong!";switch(t){case f.PostsLoadingError:c="Can't load posts";break;case f.CommentsError:c="Can't load comments"}return Object(d.jsx)("div",{className:"notification is-danger","data-cy":t,children:c})})),g=(c(17),o.a.memo((function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(d.jsx)("div",{className:"Loader__content"})})}))),C=function(e){var t=e.onAdd,c=e.isLoading,s=e.postId,n=Object(i.useState)(""),o=Object(a.a)(n,2),r=o[0],j=o[1],m=Object(i.useState)(!1),u=Object(a.a)(m,2),b=u[0],O=u[1],h=Object(i.useState)(""),f=Object(a.a)(h,2),x=f[0],p=f[1],N=Object(i.useState)(!1),v=Object(a.a)(N,2),y=v[0],g=v[1],C=Object(i.useState)(""),S=Object(a.a)(C,2),k=S[0],E=S[1],P=Object(i.useState)(!1),I=Object(a.a)(P,2),w=I[0],F=I[1];return Object(d.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){if(e.preventDefault(),!r||!x||!k)return O(!r),g(!x),void F(!k);t({postId:s,name:r,email:x,body:k}),E("")},children:[Object(d.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(d.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:l()("input",{"is-danger":b}),value:r,onChange:function(e){O(!1),j(e.target.value)}}),Object(d.jsx)("span",{className:"icon is-small is-left",children:Object(d.jsx)("i",{className:"fas fa-user"})}),b&&Object(d.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),b&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(d.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(d.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(d.jsx)("input",{type:"email",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:l()("input",{"is-danger":y}),value:x,onChange:function(e){g(!1),p(e.target.value)}}),Object(d.jsx)("span",{className:"icon is-small is-left",children:Object(d.jsx)("i",{className:"fas fa-envelope"})}),y&&Object(d.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(d.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),y&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(d.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(d.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:l()("textarea",{"is-danger":w}),value:k,onChange:function(e){F(!1),E(e.target.value)}})}),w&&Object(d.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(d.jsxs)("div",{className:"field is-grouped",children:[Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"submit",className:l()("button","is-link",{"is-loading":c}),children:"Add"})}),Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){j(""),p(""),E(""),O(!1),g(!1),F(!1)},children:"Clear"})})]})]})},S=o.a.memo((function(e){var t=e.postDetails,c=e.isNewCommentFormOpened,s=e.onOpenNewCommentForm,n=t.id,o=t.title,r=t.body,l=Object(i.useState)([]),j=Object(a.a)(l,2),m=j[0],b=j[1],O=Object(i.useState)(!1),h=Object(a.a)(O,2),S=h[0],k=h[1],E=Object(i.useState)(!1),P=Object(a.a)(E,2),I=P[0],w=P[1],F=Object(i.useState)(!1),L=Object(a.a)(F,2),T=L[0],D=L[1],U=Object(i.useState)(!1),A=Object(a.a)(U,2),B=A[0],M=A[1];Object(i.useEffect)((function(){var e;k(!0),b([]),(e=n,x("/comments?postId=".concat(e))).then((function(e){b(e),D(!0),M(!1)})).catch((function(){M(!0)})).finally((function(){return k(!1)}))}),[n]);var _=Object(i.useCallback)((function(e){w(!0),function(e){return p("/comments",e)}(e).then((function(e){return b((function(t){return[].concat(Object(u.a)(t),[e])}))})).finally((function(){return w(!1)}))}),[]),J=Object(i.useCallback)((function(e){!function(e){N("/comments/".concat(e))}(e),b((function(t){return t.filter((function(t){return t.id!==e}))}))}),[]),q=!S&&!B&&T&&m.length>0,R=!S&&!B&&T&&!m.length,W=!S&&B,G=!S&&!B&&!c;return Object(d.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(d.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(d.jsxs)("div",{className:"block",children:[Object(d.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(n,": ").concat(o)}),Object(d.jsx)("p",{"data-cy":"PostBody",children:r})]}),Object(d.jsxs)("div",{className:"block",children:[S&&Object(d.jsx)(g,{}),W&&Object(d.jsx)(y,{error:f.CommentsError}),R&&Object(d.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),q&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"title is-4",children:"Comments:"}),m.map((function(e){return Object(d.jsx)(v,{comment:e,onDeleteComment:J},e.id)}))]}),G&&Object(d.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:s,children:"Write a comment"})]}),c&&Object(d.jsx)(C,{onAdd:_,isLoading:I,postId:n})]})})})),k=o.a.memo((function(e){var t,c=e.users,s=e.selectedUserId,n=e.onSelectUserId,o=e.onResetPostId,r=Object(i.useState)(!1),j=Object(a.a)(r,2),m=j[0],u=j[1];Object(i.useEffect)((function(){if(m){var e=function(){return u(!1)};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}}),[m]);var b=null===(t=c.find((function(e){return e.id===s})))||void 0===t?void 0:t.name,O=function(){return u((function(e){return!e}))};return Object(d.jsxs)("div",{"data-cy":"UserSelector",className:l()("dropdown",{"is-active":m}),children:[Object(d.jsx)("div",{className:"dropdown-trigger",children:Object(d.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:O,children:[Object(d.jsx)("span",{children:b||"Choose a user"}),Object(d.jsx)("span",{className:"icon is-small",children:Object(d.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(d.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(d.jsx)("div",{className:"dropdown-content",children:c.map((function(e){return Object(d.jsx)("a",{href:"#user-".concat(e.id),className:l()("dropdown-item",{"is-active":s===e.id}),onClick:function(){return t=e.id,n(t),O(),void o();var t},children:e.name},e.id)}))})})]})})),E=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(0),o=Object(a.a)(n,2),r=o[0],j=o[1],u=Object(i.useState)([]),b=Object(a.a)(u,2),O=b[0],h=b[1],p=Object(i.useState)(!1),N=Object(a.a)(p,2),v=N[0],C=N[1],E=Object(i.useState)(!1),P=Object(a.a)(E,2),I=P[0],w=P[1],F=Object(i.useState)(!1),L=Object(a.a)(F,2),T=L[0],D=L[1],U=Object(i.useState)(0),A=Object(a.a)(U,2),B=A[0],M=A[1],_=Object(i.useState)(!1),J=Object(a.a)(_,2),q=J[0],R=J[1];Object(i.useEffect)((function(){x("/users").then(s)}),[]);var W=Object(i.useCallback)((function(e){j(e),C(!0)}),[]),G=Object(i.useCallback)((function(e){M((function(t){return t!==e?e:0})),R(!1)}),[]),Y=Object(i.useCallback)((function(){M(0)}),[]),z=Object(i.useCallback)((function(){R(!0)}),[]);Object(i.useEffect)((function(){var e;v&&(e=r,x("/posts?userId=".concat(e))).then((function(e){h(e),w(!0),D(!1)})).catch((function(){D(!0)})).finally((function(){return C(!1)}))}),[r]);var H=!v&&!T&&I&&O.length>0,K=!v&&!T&&I&&!O.length,Q=!v&&T,V=O.find((function(e){return e.id===B}));return Object(d.jsx)("main",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"tile is-ancestor",children:[Object(d.jsx)("div",{className:"tile is-parent",children:Object(d.jsxs)("div",{className:"tile is-child box is-success",children:[Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(k,{users:c,selectedUserId:r,onSelectUserId:W,onResetPostId:Y})}),Object(d.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!r&&Object(d.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),v&&Object(d.jsx)(g,{}),Q&&Object(d.jsx)(y,{error:f.PostsLoadingError}),H&&Object(d.jsx)(m,{posts:O,selectedPostId:B,onSelectPostId:G}),K&&Object(d.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"})]})]})}),Object(d.jsx)("div",{"data-cy":"Sidebar",className:l()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":B}),children:V&&Object(d.jsx)("div",{className:"tile is-child box is-success ",children:Object(d.jsx)(S,{postDetails:V,isNewCommentFormOpened:q,onOpenNewCommentForm:z})})})]})})})};n.a.render(Object(d.jsx)(E,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.519643da.chunk.js.map