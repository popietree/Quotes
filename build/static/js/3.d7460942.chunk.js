(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{47:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},48:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},49:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},50:function(e,t){},51:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},52:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},54:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(2),o=c(8),a=c(47),m=c.n(a),r=c(0),j=function(e){return Object(r.jsxs)("figure",{className:m.a.quote,children:[Object(r.jsx)("p",{children:e.text}),Object(r.jsx)("figcaption",{children:e.author})]})},i=c(21),d=c(48),l=c.n(d),u=c(49),b=c.n(u),x=c(19),O=c(20),h=c(14),f=function(e){var t=Object(n.useRef)(),c=Object(x.a)(O.a),s=c.status,o=c.sendRequest,a=c.error,m=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==s||a||m()}),[m,a,s]);var j=function(c){c.preventDefault();var n=t.current.value;o({commentData:{text:n},quoteId:e.quoteId})};return Object(r.jsxs)("form",{className:b.a.form,onSubmit:j,children:["pending"===s&&Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(h.a,{})}),Object(r.jsxs)("div",{className:b.a.control,onSubmit:j,children:[Object(r.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(r.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(r.jsx)("div",{className:b.a.actions,children:Object(r.jsx)("button",{className:"btn",children:"Add Comment"})})]})},p=(c(50),c(51)),_=c.n(p),N=function(e){return Object(r.jsx)("li",{className:_.a.item,children:Object(r.jsx)("p",{children:e.text})})},v=c(52),C=c.n(v),g=function(e){return Object(r.jsx)("ul",{className:C.a.comments,children:e.comments.map((function(e){return Object(r.jsx)(N,{text:e.text},e.id)}))})},q=function(){var e=Object(s.j)().quoteId,t=Object(n.useState)(!1),c=Object(i.a)(t,2),o=c[0],a=c[1],m=Object(x.a)(O.c),j=m.sendRequest,d=m.status,u=m.data;Object(n.useEffect)((function(){j(e)}),[e,j]);var b;"pending"===d&&(b=Object(r.jsxs)("div",{className:"centered",children:[Object(r.jsx)(h.a,{})," "]})),"completed"===d&&u&&u.length>0&&(b=Object(r.jsx)(g,{comments:u})),"completed"!==d||u&&0!==u.length||(b=Object(r.jsx)("p",{className:"centered",children:"No comments were added yet"}));var p=Object(n.useCallback)((function(){j(e)}),[e,j]);return Object(r.jsxs)("section",{className:l.a.comments,children:[Object(r.jsx)("h2",{children:"User Comments"}),!o&&Object(r.jsx)("a",{className:"btn",onClick:function(){a(!0)},children:"Add a Comment"}),o&&Object(r.jsx)(f,{onAddedComment:p,quoteId:e}),b]})};t.default=function(){var e=Object(s.k)(),t=Object(s.j)().quoteId,c=Object(x.a)(O.e,!0),a=c.sendRequest,m=c.status,i=c.data,d=c.error;return Object(n.useEffect)((function(){a(t)}),[a,t]),"pending"===m?Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(h.a,{})}):d?Object(r.jsx)("p",{className:"centered",children:d}):i.text?Object(r.jsxs)(n.Fragment,{children:[Object(r.jsx)(j,{text:i.text,author:i.author}),Object(r.jsx)(s.c,{path:e.path,exact:!0,children:Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(o.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),Object(r.jsx)(s.c,{path:"".concat(e.path,"/comments"),children:Object(r.jsx)(q,{})})]}):Object(r.jsx)("p",{children:"No quote found!"})}}}]);
//# sourceMappingURL=3.d7460942.chunk.js.map