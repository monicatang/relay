"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46109],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>u,MDXProvider:()=>c,mdx:()=>v,useMDXComponents:()=>d,withMDXComponents:()=>p});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=a.createContext({}),p=function(e){return function(t){var r=d(t.components);return a.createElement(e,n({},t,{components:r}))}},d=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),c=o,y=p["".concat(s,".").concat(c)]||p[c]||m[c]||n;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<n;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},89610:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=r(83117),o=r(80102),n=(r(67294),r(3905)),s=["components"],i={id:"limitations",title:"Limitations",slug:"/guides/relay-resolvers/limitations/",description:"Limitations of Relay Resolvers"},l=void 0,u={unversionedId:"guides/relay-resolvers/limitations",id:"version-v17.0.0/guides/relay-resolvers/limitations",title:"Limitations",description:"Limitations of Relay Resolvers",source:"@site/versioned_docs/version-v17.0.0/guides/relay-resolvers/limitations.md",sourceDirName:"guides/relay-resolvers",slug:"/guides/relay-resolvers/limitations/",permalink:"/docs/v17.0.0/guides/relay-resolvers/limitations/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v17.0.0/guides/relay-resolvers/limitations.md",tags:[],version:"v17.0.0",frontMatter:{id:"limitations",title:"Limitations",slug:"/guides/relay-resolvers/limitations/",description:"Limitations of Relay Resolvers"},sidebar:"docs",previous:{title:"Deprecated",permalink:"/docs/v17.0.0/guides/relay-resolvers/deprecated/"},next:{title:"Testing Relay Components",permalink:"/docs/v17.0.0/guides/testing-relay-components/"}},p={},d=[{value:"No context or info arguments",id:"no-context-or-info-arguments",level:2},{value:"No support for abstract types",id:"no-support-for-abstract-types",level:2},{value:"All fields must be nullable",id:"all-fields-must-be-nullable",level:2},{value:"Not all GraphQL constructs are supported",id:"not-all-graphql-constructs-are-supported",level:2},{value:"No support for mutations",id:"no-support-for-mutations",level:2},{value:"Resolvers are always evaluated lazily",id:"resolvers-are-always-evaluated-lazily",level:2},{value:"Verbose/awkward docblock syntax",id:"verboseawkward-docblock-syntax",level:2}],c={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,n.mdx)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"Relay Resolvers are do have some limitations. Here we will collect a list of known limitations and provide alternatives where possible."),(0,n.mdx)("h2",{id:"no-context-or-info-arguments"},"No context or info arguments"),(0,n.mdx)("p",null,"In a full GraphQL implementation, resolvers would have access to a ",(0,n.mdx)("inlineCode",{parentName:"p"},"context")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"info")," argument. These arguments are not available in Relay Resolvers today. Supporting context is something we would like to do in the future, but have not yet implemented."),(0,n.mdx)("h2",{id:"no-support-for-abstract-types"},"No support for abstract types"),(0,n.mdx)("p",null,"Today it is not possible to define an interface or union with multiple concrete types using Relay Resolvers. This is something we would like to support in the future, but have not yet implemented."),(0,n.mdx)("h2",{id:"all-fields-must-be-nullable"},"All fields must be nullable"),(0,n.mdx)("p",null,"Today all resolvers must be typed as nullable in order to support coercing errors to null without having to implement null bubbling. In the future we intend Resolvers to support some version of ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/graphql/graphql-wg/discussions/1410"},"strict semantic nullability"),"."),(0,n.mdx)("h2",{id:"not-all-graphql-constructs-are-supported"},"Not all GraphQL constructs are supported"),(0,n.mdx)("p",null,"Today Relay Resolvers only support a subset of GraphQL constructs. For example, it's not currently possible to define input types, enums or interfaces using Relay Resolvers."),(0,n.mdx)("h2",{id:"no-support-for-mutations"},"No support for mutations"),(0,n.mdx)("p",null,"Today Relay Resolvers only support the read path. Defining mutation fields is not yet supported. We are working to understand what it means to perform a mutation against a reactive schema, and hope to support them in the future."),(0,n.mdx)("h2",{id:"resolvers-are-always-evaluated-lazily"},"Resolvers are always evaluated lazily"),(0,n.mdx)("p",null,"Today Relay Resolvers are always evaluated lazily on a per-fragment basis. This has the advantage that if a resolver is not read, it will never be evaluated. However, it can lead to issues with waterfalls if your client schema ends up making async requests to fetch data as its read. We are actively exploring other execution strategies for Relay Resolvers, such as evaluating all fields in a query at request time, but expect the way resolvers are defined to remain stable."),(0,n.mdx)("h2",{id:"verboseawkward-docblock-syntax"},"Verbose/awkward docblock syntax"),(0,n.mdx)("p",null,"Today defining a resolver requires defining a function with a docblock which uses special syntax and duplicates information already specified in the function's name an types. Futher, in order to enforce that these values match up, Relay emits type assertions in its generated types. While these assertions do ensure safety, they are an awkward developer experience."),(0,n.mdx)("p",null,"To address these issues we are exploring a more streamlined approach where names and types can be inferred from your Flow or TypeScript code similar to the approach taken by ",(0,n.mdx)("a",{parentName:"p",href:"https://grats.capt.dev/"},"Grats"),". This syntax may become available in future versions of Relay."))}m.isMDXComponent=!0}}]);