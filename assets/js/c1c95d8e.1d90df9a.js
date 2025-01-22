"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77986],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>y,useMDXComponents:()=>m,withMDXComponents:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){return function(t){var n=m(t.components);return a.createElement(e,l({},t,{components:n}))}},m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,h=d["".concat(i,".").concat(u)]||d[u]||c[u]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={id:"semantic-nullability",title:"Semantic Nullability",slug:"/guides/semantic-nullability/",description:"Experimental support for semantic nullability",keywords:["null","nullability","semanticNonNull"]},s=void 0,p={unversionedId:"guides/semantic-nullability",id:"guides/semantic-nullability",title:"Semantic Nullability",description:"Experimental support for semantic nullability",source:"@site/docs/guides/semantic-nullability.md",sourceDirName:"guides",slug:"/guides/semantic-nullability/",permalink:"/docs/next/guides/semantic-nullability/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guides/semantic-nullability.md",tags:[],version:"current",frontMatter:{id:"semantic-nullability",title:"Semantic Nullability",slug:"/guides/semantic-nullability/",description:"Experimental support for semantic nullability",keywords:["null","nullability","semanticNonNull"]},sidebar:"docs",previous:{title:"Error States with ErrorBoundaries",permalink:"/docs/next/guided-tour/rendering/error-states/"},next:{title:"Introduction",permalink:"/docs/next/guided-tour/updating-data/introduction"}},d={},m=[{value:"Motivation",id:"motivation",level:2},{value:"Proposed Solution",id:"proposed-solution",level:2},{value:"By Example",id:"by-example",level:2},{value:"GraphQL Conf Talk",id:"graphql-conf-talk",level:2},{value:"Further Reading",id:"further-reading",level:2}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.mdx)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h2",{id:"motivation"},"Motivation"),(0,l.mdx)("p",null,"One of GraphQL's strengths is its field-granular error handling which can dramatically improve response resiliency. However, today that error handling depends upon field nullability, which is the reason it is a ",(0,l.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/best-practices/#nullability"},"recommended best practice")," to default all fields to being nullable. This creates a trade-off where ",(0,l.mdx)("strong",{parentName:"p"},"enabling maximum resiliency means client developers must manually handle all possible permutations of field nullability")," within their components. ",(0,l.mdx)("a",{parentName:"p",href:"/docs/next/guides/required-directive/"},(0,l.mdx)("inlineCode",{parentName:"a"},"@required"))," can help a bit, but is ultimately a very blunt tool."),(0,l.mdx)("h2",{id:"proposed-solution"},"Proposed Solution"),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/graphql/graphql.github.io/blob/nullability-post/src/pages/blog/2024-08-14-exploring-true-nullability.mdx#our-latest-proposal"},"Semantic Nullability"),' is an early GraphQL spec proposal that aims to decouple error handling and nullability in the GraphQL spec to enable maximum resiliency while still exposing the "semantic nullability", (the nullability of the actual resolver function/method on the server) of the field to the client.'),(0,l.mdx)("p",null,'The proposal works by allowing the schema to specify a new type of nullability of "null only on error". If a client sees this type, ',(0,l.mdx)("em",{parentName:"p"},"and")," the client has some strategy for handling field errors out-of-band, it may treat the field that is exposed to user code as non-nullable."),(0,l.mdx)("p",null,"The full spec change will likely require adding additional syntax to GraphQL's schema definition language, but in the meantime, various GraphQL servers and clients have collaborated on a temporary directive ",(0,l.mdx)("a",{parentName:"p",href:"https://specs.apollo.dev/nullability/v0.2/"},(0,l.mdx)("inlineCode",{parentName:"a"},"@semanticNonNull"))," that can be used to experiment with this idea."),(0,l.mdx)("p",null,"In short, you can add ",(0,l.mdx)("inlineCode",{parentName:"p"},"@semanticNonNull")," to a field in your schema to indicate that the field is non-nullable in the semantic sense, but that the client should still be prepared to handle errors."),(0,l.mdx)("p",null,"Relay will look for ",(0,l.mdx)("inlineCode",{parentName:"p"},"@semanticNonNull")," directives in your schema and generate non-nullable Flow/TypeScript types for those fields if you enable client-side error handling for your query or fragment by adding the ",(0,l.mdx)("a",{parentName:"p",href:"/docs/next/guides/throw-on-field-error-directive/"},(0,l.mdx)("inlineCode",{parentName:"a"},"@throwOnFieldError"))," directive."),(0,l.mdx)("p",null,"If your server will never return ",(0,l.mdx)("inlineCode",{parentName:"p"},"null")," for a user's name, except in the case of errors, for example because it's resolver is typed as non-nullable, you can then apply ",(0,l.mdx)("inlineCode",{parentName:"p"},"@semanticNonNull")," to that field in your schema."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-graphql",metastring:'title="schema.graphql"',title:'"schema.graphql"'},"directive @semanticNonNull(levels: [Int] = [0]) on FIELD_DEFINITION\n\ntype User {\n  name: String @semanticNonNull\n}\n")),(0,l.mdx)("p",null,"Once you've added the directive to your schema, you can add ",(0,l.mdx)("inlineCode",{parentName:"p"},"@throwOnFieldError")," to your fragment and queries to indicate that the client should throw an error if any field errors are encountered when the fragment is read."),(0,l.mdx)("admonition",{type:"note"},(0,l.mdx)("p",{parentName:"admonition"},"Be sure to add ",(0,l.mdx)("a",{parentName:"p",href:"https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary"},"React error boundaries")," to your app above any components that are using ",(0,l.mdx)("inlineCode",{parentName:"p"},"@throwOnFieldError"),".")),(0,l.mdx)("p",null,"In the below example, Relay's generated TypeScript or Flow types for ",(0,l.mdx)("inlineCode",{parentName:"p"},"user.name")," will be non-nullable."),(0,l.mdx)("admonition",{type:"caution"},(0,l.mdx)("p",{parentName:"admonition"},"If Relay receives a field error for ",(0,l.mdx)("inlineCode",{parentName:"p"},"user.name"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"useFragment")," will throw an error. For this reason, it's important to ensure that you are have adequate ",(0,l.mdx)("a",{parentName:"p",href:"/docs/next/guided-tour/rendering/error-states/"},"React error boundaries")," in place to catch these errors.")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"import type {UserComponent_user$key} from 'UserComponent_user.graphql';\n\nconst React = require('React');\nconst {graphql, useFragment} = require('react-relay');\n\ntype Props = {\n  user: UserComponent_user$key,\n};\n\nfunction UserComponent(props: Props) {\n  const user = useFragment(\n    graphql`\n      fragment UserComponent_user on User @throwOnFieldError {\n        name # Will be typed as non-nullable\n      }\n    `,\n    props.user,\n  );\n\n  return <div>{user.name}</div>\n}\n")),(0,l.mdx)("h2",{id:"by-example"},"By Example"),(0,l.mdx)("p",null,"For a hands on example, see ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/captbaritone/grats-relay-example/pull/1"},"this example project")," showing Relay configured to use ",(0,l.mdx)("inlineCode",{parentName:"p"},"@semanticNonNull")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"@throwOnFieldError")," alongside ",(0,l.mdx)("a",{parentName:"p",href:"https://grats.capt.dev/"},"Grats")," which ",(0,l.mdx)("a",{parentName:"p",href:"https://grats.capt.dev/docs/guides/strict-semantic-nullability/"},"has support")," for automatically deriving a schema that includes the experimental ",(0,l.mdx)("inlineCode",{parentName:"p"},"@semanticNonNull")," directives."),(0,l.mdx)("h2",{id:"graphql-conf-talk"},"GraphQL Conf Talk"),(0,l.mdx)("p",null,"The Relay team gave a talk at GraphQL Conf 2024 about semantic nullability. You can watch it here:"),(0,l.mdx)("iframe",{src:"https://www.youtube-nocookie.com/embed/kVYlplb1gKk",width:640,height:360,allowFullScreen:!0,frameBorder:"0"}),(0,l.mdx)("h2",{id:"further-reading"},"Further Reading"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/graphql/graphql-wg/discussions/1394"},"True Nullability Schema")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/graphql/graphql-wg/discussions/1410"},"Strict Semantic Nullability")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/graphql/graphql-spec/pull/1065"},"RFC: SemanticNonNull type (null only on error)")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://grats.capt.dev/docs/guides/strict-semantic-nullability/"},"Grat's support/documentation for ",(0,l.mdx)("inlineCode",{parentName:"a"},"@SemanticNonNull"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://specs.apollo.dev/nullability/v0.2/"},"Apollo's specification for this directive")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://www.apollographql.com/docs/kotlin/v4/advanced/nullability/#handle-semantic-non-null-with-semanticnonnull"},"Support for ",(0,l.mdx)("inlineCode",{parentName:"a"},"@SemanticNonNull")," in Apollo Kotlin")," added in ",(0,l.mdx)("a",{parentName:"li",href:"https://github.com/apollographql/apollo-kotlin/releases/tag/v4.0.0-beta.3"},"4.0.0-beta.3")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/captbaritone/awesome-semantic-nullability"},"Awesome Semantic Nullability")," a list of frameworks and stand alone tools that support semantic nullability")))}c.isMDXComponent=!0}}]);