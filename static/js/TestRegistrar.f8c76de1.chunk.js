(this["webpackJsonpdev-app"]=this["webpackJsonpdev-app"]||[]).push([[16],{1373:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(5),a=t(82),i=t(912);function c(e){var n=e.children,t=e.query,a=Object(r.e)(e,["children","query"]),c=Object(i.a)(t,a);return c?n(c):null}c.propTypes={client:a.object,children:a.func.isRequired,fetchPolicy:a.string,notifyOnNetworkStatusChange:a.bool,onCompleted:a.func,onError:a.func,pollInterval:a.number,query:a.object.isRequired,variables:a.object,ssr:a.bool,partialRefetch:a.bool,returnPartialData:a.bool}},1677:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(82),a=t(1678);function i(e){var n=Object(a.a)(e.mutation,e),t=n[0],r=n[1];return e.children?e.children(t,r):null}i.propTypes={mutation:r.object.isRequired,variables:r.object,optimisticResponse:r.oneOfType([r.object,r.func]),refetchQueries:r.oneOfType([r.arrayOf(r.oneOfType([r.string,r.object])),r.func]),awaitRefetchQueries:r.bool,update:r.func,children:r.func.isRequired,onCompleted:r.func,onError:r.func,fetchPolicy:r.string}},1678:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t(5),a=t(2),i=t(903),c=t(45),o=t(275),u=t(105),l=t(329);function s(e,n){var t=Object(l.a)(null===n||void 0===n?void 0:n.client);Object(o.b)(e,o.a.Mutation);var s=Object(a.useState)({called:!1,loading:!1,client:t}),d=s[0],b=s[1],f=Object(a.useRef)({result:d,mutationId:0,isMounted:!0,client:t,mutation:e,options:n});Object.assign(f.current,{client:t,options:n,mutation:e});var j=Object(a.useCallback)((function(e){void 0===e&&(e={});var n=f.current,t=n.client,a=n.options,o=n.mutation,l=Object(r.a)(Object(r.a)({},a),{mutation:o});f.current.result.loading||l.ignoreResults||!f.current.isMounted||b(f.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:t});var s=++f.current.mutationId,d=Object(i.a)(l,e);return t.mutate(d).then((function(n){var r,a,i,o=n.data,l=n.errors,j=l&&l.length>0?new u.a({graphQLErrors:l}):void 0;if(s===f.current.mutationId&&!d.ignoreResults){var v={called:!0,loading:!1,data:o,error:j,client:t};f.current.isMounted&&!Object(c.a)(f.current.result,v)&&b(f.current.result=v)}return null===(a=null===(r=f.current.options)||void 0===r?void 0:r.onCompleted)||void 0===a||a.call(r,n.data,d),null===(i=e.onCompleted)||void 0===i||i.call(e,n.data,d),n})).catch((function(n){var r,a,i,o;if(s===f.current.mutationId&&f.current.isMounted){var u={loading:!1,error:n,data:void 0,called:!0,client:t};Object(c.a)(f.current.result,u)||b(f.current.result=u)}if((null===(r=f.current.options)||void 0===r?void 0:r.onError)||d.onError)return null===(i=null===(a=f.current.options)||void 0===a?void 0:a.onError)||void 0===i||i.call(a,n,d),null===(o=e.onError)||void 0===o||o.call(e,n,d),{data:void 0,errors:n};throw n}))}),[]),v=Object(a.useCallback)((function(){f.current.isMounted&&b({called:!1,loading:!1,client:t})}),[]);return Object(a.useEffect)((function(){return f.current.isMounted=!0,function(){f.current.isMounted=!1}}),[]),[j,Object(r.a)({reset:v},d)]}},2678:function(e,n,t){"use strict";t.r(n);var r=t(8),a=t(9),i=t(12),c=t(13),o=t(14),u=t(2),l=t(1677),s=t(1373),d=t(5),b=t(884),f=new Map,j=new Map,v=!0,h=!1;function p(e){return e.replace(/[\s,]+/g," ").trim()}function g(e){var n=new Set,t=[];return e.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var r=e.name.value,a=p((c=e.loc).source.body.substring(c.start,c.end)),i=j.get(r);i&&!i.has(a)?v&&console.warn("Warning: fragment with name "+r+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):i||j.set(r,i=new Set),i.add(a),n.has(a)||(n.add(a),t.push(e))}else t.push(e);var c})),Object(d.a)(Object(d.a)({},e),{definitions:t})}function m(e){var n=p(e);if(!f.has(n)){var t=Object(b.parse)(e,{experimentalFragmentVariables:h,allowLegacyFragmentVariables:h});if(!t||"Document"!==t.kind)throw new Error("Not a valid GraphQL document.");f.set(n,function(e){var n=new Set(e.definitions);n.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(t){var r=e[t];r&&"object"===typeof r&&n.add(r)}))}));var t=e.loc;return t&&(delete t.startToken,delete t.endToken),e}(g(t)))}return f.get(n)}function O(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];"string"===typeof e&&(e=[e]);var r=e[0];return n.forEach((function(n,t){n&&"Document"===n.kind?r+=n.loc.source.body:r+=n,r+=e[t+1]})),m(r)}var y,x=O,w=function(){f.clear(),j.clear()},q=function(){v=!1},T=function(){h=!0},E=function(){h=!1};(y=O||(O={})).gql=x,y.resetCaches=w,y.disableFragmentWarnings=q,y.enableExperimentalFragmentVariables=T,y.disableExperimentalFragmentVariables=E,O.default=O;var k,R,M,C,F=O(k||(k=Object(o.a)(["\n  query getweb3 @client {\n    accounts\n    isReadOnly\n  }\n"]))),D=t(7),S=O(R||(R=Object(o.a)(["\n  query getPendingTransations {\n    pendingTransactions @client {\n      id\n      createdAt\n    }\n  }\n"]))),I=O(M||(M=Object(o.a)(["\n  query getTransactionHistory {\n    transactionHistory @client {\n      id\n      createdAt\n    }\n  }\n"]))),L=O(C||(C=Object(o.a)(["\n  mutation registerTestDomain($name: String!) {\n    registerTestDomain(name: $name) @client {\n      id\n    }\n  }\n"]))),H=function(e){var n;e.setTx;return Object(D.jsx)(l.a,{mutation:L,children:function(e){return Object(D.jsx)("div",{children:Object(D.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({variables:{name:n.value}}).then((function(e){console.log(e)})),n.value=""},children:[Object(D.jsx)("input",{ref:function(e){n=e}}),Object(D.jsx)("button",{type:"submit",children:"Register subdomain"})]})})}})},P=function(e){Object(i.a)(t,e);var n=Object(c.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=n.call.apply(n,[this].concat(i))).state={started:!1},e}return Object(a.a)(t,[{key:"render",value:function(){return Object(D.jsxs)(u.Fragment,{children:[Object(D.jsx)(s.a,{query:F,pollInterval:500,children:function(e){var n=e.loading,t=(e.error,e.data);if(n)return Object(D.jsx)("div",{children:"Loading web3"});var r=t.web3,a=t.people;return console.log(t),Object(D.jsxs)(u.Fragment,{children:[Object(D.jsx)("div",{children:r.accounts.length>0?"Your ETH address is ".concat(r.accounts[0]):"Unlock metamask!"}),Object(D.jsx)("div",{children:console.log(a)}),Object(D.jsx)(H,{})]})}}),Object(D.jsx)(s.a,{query:S,children:function(e){var n=e.data,t=e.loading,r=n.pendingTransactions;return t?Object(D.jsx)("div",{children:"Loading pending txs"}):(console.log(n),Object(D.jsxs)("div",{children:[Object(D.jsx)("h2",{children:"Pending Transactions"}),r.map((function(e){return Object(D.jsx)("li",{tx:e.id,children:Object(D.jsx)("a",{href:"http://ropsten.etherscan.io/tx/".concat(e.id),children:e.id})})}))]}))}}),Object(D.jsx)(s.a,{query:I,children:function(e){var n=e.data,t=e.loading,r=n.transactionHistory;return t?Object(D.jsx)("div",{children:"Loading pending txs"}):(console.log(n),Object(D.jsxs)("div",{children:[Object(D.jsx)("h2",{children:"Transaction History"}),r.map((function(e){return Object(D.jsx)("li",{children:Object(D.jsx)("a",{href:"http://ropsten.etherscan.io/tx/".concat(e.id),children:e.id})},e.id)}))]}))}})]})}}]),t}(u.Component);n.default=P}}]);
//# sourceMappingURL=TestRegistrar.f8c76de1.chunk.js.map