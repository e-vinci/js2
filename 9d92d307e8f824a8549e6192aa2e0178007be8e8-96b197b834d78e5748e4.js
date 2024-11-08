"use strict";(self.webpackChunkmyjscourse=self.webpackChunkmyjscourse||[]).push([[1926],{9802:function(e,t,a){var n=a(7294),r=a(6492),c=a.n(r);t.Z=e=>{let{className:t,isBeingEdited:a,onChange:r,startContent:s,id:o,isInline:i,children:d}=e;let l,_;return a?l=s?c().decode(s):"":d?l=d:s&&(l=s?c().decode(s):""),_=t||"",a&&(_+=" index__card__content__description--is-being-edited"),i&&(_+=" index__card__content__description--is-inline"),n.createElement("div",{className:_,contentEditable:!!a,onInput:e=>{const t={};t[o]=e.currentTarget.textContent,r(t)},suppressContentEditableWarning:!0},l)}},3290:function(e,t,a){a.d(t,{X:function(){return d},a:function(){return i}});var n=a(7294),r=a(693),c=a(5258),s=a(144);const o=n.createContext([{},()=>{},{},()=>{},{},()=>{},{},()=>{}]),i=e=>{let{children:t}=e;const{0:a,1:r}=(0,n.useState)(void 0),{0:c,1:s}=(0,n.useState)(void 0),{0:i,1:d}=(0,n.useState)(void 0),{0:l,1:_}=(0,n.useState)(!1);return n.createElement(o.Provider,{value:[a,r,c,s,i,d,l,_]},t)},d=()=>{const{instance:e,accounts:t}=(0,c.Fp)(),{0:a,1:i,2:d,3:l,4:_,5:m,6:u,7:p}=(0,n.useContext)(o);return{projectGroupData:a,updateProjectGroupData:async a=>{try{const n=await(0,s.t)(t,e),c=await(0,r.Z)(`projectgroups/${a}`,"get",n,void 0);return i(c),c}catch(n){console.error("useProjectData:error:",n)}},userData:d,updateUserData:async a=>{try{const n=await(0,s.t)(t,e),c=await(0,r.Z)(`users/role/?projectgroupname=${a}`,"get",n,void 0);return l(c),c}catch(n){console.error("useProjectData:updateUserData:error:",n)}},projectData:_,updateProjectData:async a=>{try{const n=await(0,s.t)(t,e);p(!1);let c=await(0,r.Z)("projects/projectgroups/"+a,"get",n,void 0);return m(c),p(!0),c}catch(n){console.error("useProjectData:updateProjectDataerror:",n)}},addOneProject:async a=>{try{const n=await(0,s.t)(t,e);return await(0,r.Z)("projects","post",n,{projectGroupName:a})}catch(n){console.error("useProjectData:addOneProject:error:",n)}},deleteOneProject:async a=>{try{const n=await(0,s.t)(t,e);return await(0,r.Z)("projects/"+a._id,"DELETE",n,void 0)}catch(n){console.error("useProjectData:deleteOneProject:error:",n)}},addMemberToProject:async a=>{try{const n=await(0,s.t)(t,e);return await(0,r.Z)("projects/"+a._id+"/member","POST",n,void 0)}catch(n){console.error("useProjectData:addMemberToProject:error:",n)}},deleteMemberFromProject:async a=>{try{const n=await(0,s.t)(t,e);return await(0,r.Z)("projects/"+a._id+"/member","DELETE",n,void 0)}catch(n){console.error("useProjectData:deleteMemberFromProject:error:",n)}},updateProject:async(a,n)=>{try{const c=await(0,s.t)(t,e);return await(0,r.Z)("projects/"+n,"PATCH",c,a)}catch(c){console.error("useProjectData:updateProject:error:",c)}},isLoaded:u,setIsLoaded:p}}},5540:function(e,t,a){a.d(t,{i:function(){return d},w:function(){return i}});var n=a(7294),r=a(693),c=a(5258),s=a(144);const o=n.createContext([{},()=>{},{},()=>{},!1,()=>{}]),i=e=>{let{children:t}=e;const{0:a,1:r}=(0,n.useState)(void 0),{0:c,1:s}=(0,n.useState)(void 0),{0:i,1:d}=(0,n.useState)(void 0),{0:l,1:_}=(0,n.useState)(!1);return n.createElement(o.Provider,{value:[a,r,c,s,i,d,l,_]},t)};const d=()=>{const{instance:e,accounts:t}=(0,c.Fp)(),{0:a,1:i,2:d,3:l,4:_,5:m,6:u,7:p}=(0,n.useContext)(o);return{myReviewSummaryData:a,updateMyReviewSummaryData:async(a,n)=>{try{const c=await(0,s.t)(t,e),o=await(0,r.Z)(`reviews/users/${a}/projectgroups/${n}/count`,"get",c,void 0);return i(o),o}catch(c){console.error("useReviewData:updateMyReviewSummaryData:error:",c)}},allReviewsData:d,updateAllReviewsData:async a=>{try{const n=await(0,s.t)(t,e);p(!1);const c=await(0,r.Z)(`reviews/projectgroups/${a}/summary`,"get",n,void 0);return l(c),p(!0),c}catch(n){p(!0),console.error("useReviewData:updateAllReviewsData:error:",n)}},myReviewsData:_,updateMyReviewsData:async(a,n)=>{try{const c=await(0,s.t)(t,e);p(!1);const o=await(0,r.Z)(`reviews/users/${a}/projectgroups/${n}`,"get",c,void 0);return m(o),p(!0),o}catch(c){p(!0),console.error("useReviewData:updateMyReviewsData:error:",c)}},updateExpectedProjectReview:async(a,n)=>{try{const c=await(0,s.t)(t,e);return await(0,r.Z)("reviews/"+n,"PATCH",c,a)}catch(c){console.error("useReviewData:updateProjectReview:error:",c)}},createFreeProjectReview:async(a,n)=>{try{const c=await(0,s.t)(t,e);return await(0,r.Z)("reviews","POST",c,{...a,projectId:n})}catch(c){console.error("useReviewData:createFreeProjectReview:error:",c)}},isLoaded:u,setIsLoaded:p}}},1427:function(e,t,a){var n=a(7294),r=(a(4160),a(9256),a(5443),a(6492),a(7814)),c=a(1436);t.Z=e=>{let{myReviewsSummary:t}=e;return t?n.createElement("div",{className:"card card--dark-summary card--fill-wrapper"},n.createElement("div",{className:"card__header"},"Résumé de mes revues"),n.createElement("div",{className:"card__content card__content--long-titles"},n.createElement("div",{className:"card__content__title"},"Coups de coeurs disponibles"),n.createElement("div",{className:"card__content__description"},n.createElement(r.G,{icon:c.m6i}),n.createElement("span",{className:"text--light"},t.availableLike)),n.createElement("div",{className:"card__content__title"},"Revues attendues"),n.createElement("div",{className:"card__content__description"},n.createElement(r.G,{icon:c.Mzg,className:"card__content--orange"}),n.createElement("span",{className:"text--light"},t.expectedReviews)),n.createElement("div",{className:"card__content__title"},"Revues terminées"),n.createElement("div",{className:"card__content__description"},n.createElement(r.G,{icon:c.Mzg}),n.createElement("span",{className:"text--light"},t.alreadyReviewed)))):null}},5443:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(7294),r=a(9256),c=a(6492),s=a.n(c),o=a(7814),i=a(1436),d=a(5258),l=a(3405),_=a(3290),m=a(9802);var u=e=>{let{project:t}=e;return t?n.createElement("div",{className:"counter"},n.createElement("div",{className:""},n.createElement(o.G,{icon:i.m6i,className:"counter__symbol counter__symbol--red"}),n.createElement("span",{className:"text--light"},t.countLiked)),n.createElement("div",{className:""},n.createElement(o.G,{icon:i.Mzg,className:"counter__symbol counter__symbol--orange"}),n.createElement("span",{className:"text--light"},t.countExpected)),n.createElement("div",{className:""},n.createElement(o.G,{icon:i.Mzg,className:"counter__symbol counter__symbol--green"}),n.createElement("span",{className:"text--light"},t.countReviews))):null},p=a(5540);var v=e=>{let{content:t,author:a}=e;return n.createElement("div",{className:"quote quote--close-to-others"},n.createElement("div",{className:"quote__content quote__content--dark-and-wide"},n.createElement("q",null,t),n.createElement("br",null),n.createElement("i",null,n.createElement("small",{className:"text--hand-written"},"- ",a))))};var E=e=>{let{project:t,setFilteredContents:a}=e;const{accounts:c}=(0,d.Fp)(),E=null==c?void 0:c[0].username;let w;void 0!==t.praise?w=t:t.projectReviews&&t.projectReviews.length>0&&(w=t.projectReviews.find((e=>e.userName===E)));const{0:N,1:x}=(0,n.useState)(!1),{0:j,1:h}=(0,n.useState)(!!w&&w.like),{0:y,1:g}=(0,n.useState)({}),{0:f,1:R}=(0,n.useState)(!1),b=(0,n.useRef)(null);(0,n.useEffect)((()=>{b.current&&f&&b.current.scrollIntoView()}),[f]);const{userData:D}=(0,_.X)(),{updateExpectedProjectReview:P,createFreeProjectReview:k,updateAllReviewsData:C,updateMyReviewSummaryData:M,updateMyReviewsData:S,myReviewSummaryData:Z}=(0,p.i)(),G=e=>{g((t=>({...t,...e})))};return t?n.createElement("div",{className:"index__card"+(N?" index__card--is-being-edited":f?" index--long-text":""),ref:b},n.createElement("div",{className:"index__card__header"},n.createElement("span",null,"Projet N° "+t.shortId+" : "+s().decode(t.name))),n.createElement("div",{className:"index__card__header"},n.createElement(u,{project:t})),n.createElement("div",{className:"index__card__description"},t.projectMembers.includes(E)||N||f?"":n.createElement(o.G,{icon:i.Z6I,onClick:()=>{x(!0)}}),N&&n.createElement(o.G,{icon:i.r6l,onClick:async()=>{if(0===Object.keys(y).length)return;if(!(y.praise||w&&w.praise))return;if(!(y.notImpressed||w&&w.notImpressed))return;let e;e=w?await P(y,w._id):await k(y,t._id),g({}),x(!1),e&&(await C(t.projectGroupName),await M(D.userName,t.projectGroupName),await S(D.userName,t.projectGroupName),a(void 0))}}),N&&n.createElement(o.G,{icon:i.NBC,onClick:()=>{x(!1),g({})}}),!N&&!f&&Z&&0===Z.expectedReviews&&n.createElement(o.G,{icon:i.Mdf,onClick:()=>{R(!0)}}),f&&n.createElement(o.G,{icon:i.NBC,onClick:()=>{R(!1)}})),n.createElement("div",{className:"index__card__content"},n.createElement("div",{className:"index__card__content__title"},"Ma revue ?"),n.createElement("div",{className:"index__card__content__description"},t.projectMembers.includes(E)?n.createElement(o.G,{icon:i.uMC}):w&&w.praise&&0!==w.praise.length?n.createElement(o.G,{icon:i.f8k}):n.createElement(o.G,{icon:i.nYk}))),n.createElement("div",{className:"index__card__content"},void 0!==t.description?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Description"),n.createElement("div",{className:"index__card__content__description"},s().decode(t.description))):""),n.createElement("div",{className:"index__card__content"},void 0!==t.presentationUrl?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Vidéo de présentation"),n.createElement("div",{className:"index__card__content__description"},n.createElement(r.Z,{src:t.presentationUrl}))):""),n.createElement("div",{className:"index__card__content"},void 0!==t.frontendProductionUrl?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"URL du site"),n.createElement("div",{className:"index__card__content__description"},n.createElement("a",{href:t.frontendProductionUrl,target:"_blank"},t.frontendProductionUrl))):""),n.createElement("div",{className:"index__card__content"},void 0!==t.praise||N?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Mes points forts"),n.createElement(m.Z,{className:"index__card__content__description",isBeingEdited:N,id:"praise",startContent:w?w.praise:"",onChange:G})):""),n.createElement("div",{className:"index__card__content"},void 0!==t.notImpressed||N?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Mes points d'amélioration"),n.createElement(m.Z,{className:"index__card__content__description",isBeingEdited:N,id:"notImpressed",startContent:w?w.notImpressed:"",onChange:G})):""),n.createElement("div",{className:"index__card__content"},void 0!==t.frontendRepo?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Repo frontend"),n.createElement("div",{className:"index__card__content__description"},n.createElement("a",{href:t.frontendRepo,target:"_blank"},t.frontendRepo))):""),n.createElement("div",{className:"index__card__content"},void 0!==t.backendRepo?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Repo backend"),n.createElement("div",{className:"index__card__content__description"},n.createElement("a",{href:t.backendRepo,target:"_blank"},t.backendRepo))):""),n.createElement("div",{className:"index__card__content"},void 0!==t.projectMembers&&t.projectMembers.length>0&&f?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Membres du projet"),n.createElement("div",{className:"index__card__content__description"},t.projectMembers.map((e=>(0,l.w)(e))).join(", "))):""),n.createElement("div",{className:"index__card__content"},void 0!==t.like|N?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Favori ?"),n.createElement("div",{className:"index__card__content__description"},n.createElement("input",{type:"checkbox",checked:j,disabled:!N||0===Z.availableLike||!(!j||y.like),onClick:e=>{h(!j),g({...y,like:!j})}}))):""),f&&t.projectReviews&&t.projectReviews.length>0?t.projectReviews.map(((e,t)=>n.createElement("div",{className:"index__card__content"},n.createElement("div",{className:"index__card__content__title"},0===t?"Tous les points forts":""),n.createElement("div",{className:"index__card__content__description"},n.createElement(v,{content:s().decode(e.praise),author:(0,l.w)(e.userName)}))))):"",f&&t.projectReviews&&t.projectReviews.length>0?t.projectReviews.map(((e,t)=>n.createElement("div",{className:"index__card__content"},n.createElement("div",{className:"index__card__content__title"},0===t?"Tous les points d'amélioration":""),n.createElement("div",{className:"index__card__content__description"},n.createElement(v,{content:s().decode(e.notImpressed),author:(0,l.w)(e.userName)}))))):""):null}},9896:function(e,t,a){var n=a(7294),r=a(7814),c=a(1436);t.Z=()=>n.createElement("div",{className:"spinner"},n.createElement("div",{className:"spinner__overlay"}),n.createElement("div",{className:"spinner__animation"},n.createElement(r.G,{icon:c.LM3,className:"fa-3x fa-spin"})))},693:function(e,t,a){async function n(e,t,a,n){void 0===t&&(t="get");let r=new Headers,c={};if(c.method=t,a){const e=`Bearer ${a}`;r.append("Authorization",e)}n&&(c.body=JSON.stringify(n)),"post"!==t.toLowerCase()&&"patch"!==t.toLowerCase()&&"put"!==t.toLowerCase()||r.append("Content-Type","application/json"),c.headers=r;const s="https://e-vinci-course-api.azurewebsites.net/api/"+e;try{const e=await fetch(s,c);if(!e.ok){let t=" Error code : "+e.status+" : "+e.statusText+"/nMessage : ";throw t+=await e.text(),console.error("fetch() error",t),t.search("expired"),new Error(t)}return await e.json()}catch(o){throw o}}a.d(t,{Z:function(){return n}})},144:function(e,t,a){a.d(t,{t:function(){return r}});var n=a(3927);async function r(e,t){if(e.length>0){const r={scopes:["openid"],account:e[0]};try{return(await t.acquireTokenSilent(r)).idToken}catch(a){if(a instanceof n.Yo){return(await t.acquireTokenRedirect(r)).idToken}}}}},3405:function(e,t,a){a.d(t,{w:function(){return n}});const n=e=>{let t=e.substring(0,e.indexOf("@")),a=t.substring(0,t.indexOf(".")),n=t.substring(t.indexOf(".")+1);return a=a.charAt(0).toUpperCase()+a.slice(1),n=n.charAt(0).toUpperCase()+n.slice(1),n.indexOf(".")>=0&&(n=n.substring(n.indexOf(".")+1),n=n.charAt(0).toUpperCase()+n.slice(1)),a+" "+n}}}]);
//# sourceMappingURL=9d92d307e8f824a8549e6192aa2e0178007be8e8-96b197b834d78e5748e4.js.map