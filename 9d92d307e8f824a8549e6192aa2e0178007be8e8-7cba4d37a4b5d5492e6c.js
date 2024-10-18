"use strict";(self.webpackChunkmyjscourse=self.webpackChunkmyjscourse||[]).push([[4644],{2248:function(e,t,a){var n=a(6540),r=a(6067),c=a.n(r);t.A=e=>{let{className:t,isBeingEdited:a,onChange:r,startContent:s,id:o,isInline:i,children:d}=e;let l,_;return a?l=s?c().decode(s):"":d?l=d:s&&(l=s?c().decode(s):""),_=t||"",a&&(_+=" index__card__content__description--is-being-edited"),i&&(_+=" index__card__content__description--is-inline"),n.createElement("div",{className:_,contentEditable:!!a,onInput:e=>{const t={};t[o]=e.currentTarget.textContent,r(t)},suppressContentEditableWarning:!0},l)}},8604:function(e,t,a){a.d(t,{B:function(){return d},z:function(){return i}});var n=a(6540),r=a(6845),c=a(1262),s=a(3787);const o=n.createContext([{},()=>{},{},()=>{},{},()=>{},{},()=>{}]),i=e=>{let{children:t}=e;const{0:a,1:r}=(0,n.useState)(void 0),{0:c,1:s}=(0,n.useState)(void 0),{0:i,1:d}=(0,n.useState)(void 0),{0:l,1:_}=(0,n.useState)(!1);return n.createElement(o.Provider,{value:[a,r,c,s,i,d,l,_]},t)},d=()=>{const{instance:e,accounts:t}=(0,c.dk)(),{0:a,1:i,2:d,3:l,4:_,5:m,6:u,7:p}=(0,n.useContext)(o);return{projectGroupData:a,updateProjectGroupData:async a=>{try{const n=await(0,s.J)(t,e),c=await(0,r.A)(`projectgroups/${a}`,"get",n,void 0);return i(c),c}catch(n){console.error("useProjectData:error:",n)}},userData:d,updateUserData:async a=>{try{const n=await(0,s.J)(t,e),c=await(0,r.A)(`users/role/?projectgroupname=${a}`,"get",n,void 0);return l(c),c}catch(n){console.error("useProjectData:updateUserData:error:",n)}},projectData:_,updateProjectData:async a=>{try{const n=await(0,s.J)(t,e);p(!1);let c=await(0,r.A)("projects/projectgroups/"+a,"get",n,void 0);return m(c),p(!0),c}catch(n){console.error("useProjectData:updateProjectDataerror:",n)}},addOneProject:async a=>{try{const n=await(0,s.J)(t,e);return await(0,r.A)("projects","post",n,{projectGroupName:a})}catch(n){console.error("useProjectData:addOneProject:error:",n)}},deleteOneProject:async a=>{try{const n=await(0,s.J)(t,e);return await(0,r.A)("projects/"+a._id,"DELETE",n,void 0)}catch(n){console.error("useProjectData:deleteOneProject:error:",n)}},addMemberToProject:async a=>{try{const n=await(0,s.J)(t,e);return await(0,r.A)("projects/"+a._id+"/member","POST",n,void 0)}catch(n){console.error("useProjectData:addMemberToProject:error:",n)}},deleteMemberFromProject:async a=>{try{const n=await(0,s.J)(t,e);return await(0,r.A)("projects/"+a._id+"/member","DELETE",n,void 0)}catch(n){console.error("useProjectData:deleteMemberFromProject:error:",n)}},updateProject:async(a,n)=>{try{const c=await(0,s.J)(t,e);return await(0,r.A)("projects/"+n,"PATCH",c,a)}catch(c){console.error("useProjectData:updateProject:error:",c)}},isLoaded:u,setIsLoaded:p}}},7010:function(e,t,a){a.d(t,{M:function(){return i},y:function(){return d}});var n=a(6540),r=a(6845),c=a(1262),s=a(3787);const o=n.createContext([{},()=>{},{},()=>{},!1,()=>{}]),i=e=>{let{children:t}=e;const{0:a,1:r}=(0,n.useState)(void 0),{0:c,1:s}=(0,n.useState)(void 0),{0:i,1:d}=(0,n.useState)(void 0),{0:l,1:_}=(0,n.useState)(!1);return n.createElement(o.Provider,{value:[a,r,c,s,i,d,l,_]},t)};const d=()=>{const{instance:e,accounts:t}=(0,c.dk)(),{0:a,1:i,2:d,3:l,4:_,5:m,6:u,7:p}=(0,n.useContext)(o);return{myReviewSummaryData:a,updateMyReviewSummaryData:async(a,n)=>{try{const c=await(0,s.J)(t,e),o=await(0,r.A)(`reviews/users/${a}/projectgroups/${n}/count`,"get",c,void 0);return i(o),o}catch(c){console.error("useReviewData:updateMyReviewSummaryData:error:",c)}},allReviewsData:d,updateAllReviewsData:async a=>{try{const n=await(0,s.J)(t,e);p(!1);const c=await(0,r.A)(`reviews/projectgroups/${a}/summary`,"get",n,void 0);return l(c),p(!0),c}catch(n){p(!0),console.error("useReviewData:updateAllReviewsData:error:",n)}},myReviewsData:_,updateMyReviewsData:async(a,n)=>{try{const c=await(0,s.J)(t,e);p(!1);const o=await(0,r.A)(`reviews/users/${a}/projectgroups/${n}`,"get",c,void 0);return m(o),p(!0),o}catch(c){p(!0),console.error("useReviewData:updateMyReviewsData:error:",c)}},updateExpectedProjectReview:async(a,n)=>{try{const c=await(0,s.J)(t,e);return await(0,r.A)("reviews/"+n,"PATCH",c,a)}catch(c){console.error("useReviewData:updateProjectReview:error:",c)}},createFreeProjectReview:async(a,n)=>{try{const c=await(0,s.J)(t,e);return await(0,r.A)("reviews","POST",c,{...a,projectId:n})}catch(c){console.error("useReviewData:createFreeProjectReview:error:",c)}},isLoaded:u,setIsLoaded:p}}},5604:function(e,t,a){var n=a(6540),r=(a(4810),a(4902),a(8128),a(6067),a(6784)),c=a(2630);t.A=e=>{let{myReviewsSummary:t}=e;return t?n.createElement("div",{className:"card card--dark-summary card--fill-wrapper"},n.createElement("div",{className:"card__header"},"Résumé de mes revues"),n.createElement("div",{className:"card__content card__content--long-titles"},n.createElement("div",{className:"card__content__title"},"Coups de coeurs disponibles"),n.createElement("div",{className:"card__content__description"},n.createElement(r.g,{icon:c.qcK}),n.createElement("span",{className:"text--light"},t.availableLike)),n.createElement("div",{className:"card__content__title"},"Revues attendues"),n.createElement("div",{className:"card__content__description"},n.createElement(r.g,{icon:c.DN2,className:"card__content--orange"}),n.createElement("span",{className:"text--light"},t.expectedReviews)),n.createElement("div",{className:"card__content__title"},"Revues terminées"),n.createElement("div",{className:"card__content__description"},n.createElement(r.g,{icon:c.DN2}),n.createElement("span",{className:"text--light"},t.alreadyReviewed)))):null}},8128:function(e,t,a){a.d(t,{A:function(){return E}});var n=a(6540),r=a(4902),c=a(6067),s=a.n(c),o=a(6784),i=a(2630),d=a(1262),l=a(4781),_=a(8604),m=a(2248);var u=e=>{let{project:t}=e;return t?n.createElement("div",{className:"counter"},n.createElement("div",{className:""},n.createElement(o.g,{icon:i.qcK,className:"counter__symbol counter__symbol--red"}),n.createElement("span",{className:"text--light"},t.countLiked)),n.createElement("div",{className:""},n.createElement(o.g,{icon:i.DN2,className:"counter__symbol counter__symbol--orange"}),n.createElement("span",{className:"text--light"},t.countExpected)),n.createElement("div",{className:""},n.createElement(o.g,{icon:i.DN2,className:"counter__symbol counter__symbol--green"}),n.createElement("span",{className:"text--light"},t.countReviews))):null},p=a(7010);var v=e=>{let{content:t,author:a}=e;return n.createElement("div",{className:"quote quote--close-to-others"},n.createElement("div",{className:"quote__content quote__content--dark-and-wide"},n.createElement("q",null,t),n.createElement("br",null),n.createElement("i",null,n.createElement("small",{className:"text--hand-written"},"- ",a))))};var E=e=>{let{project:t,setFilteredContents:a}=e;const{accounts:c}=(0,d.dk)(),E=null==c?void 0:c[0].username;let w;void 0!==t.praise?w=t:t.projectReviews&&t.projectReviews.length>0&&(w=t.projectReviews.find((e=>e.userName===E)));const{0:N,1:g}=(0,n.useState)(!1),{0:x,1:j}=(0,n.useState)(!!w&&w.like),{0:h,1:y}=(0,n.useState)({}),{0:f,1:R}=(0,n.useState)(!1),b=(0,n.useRef)(null);(0,n.useEffect)((()=>{b.current&&f&&b.current.scrollIntoView()}),[f]);const{userData:D}=(0,_.B)(),{updateExpectedProjectReview:k,createFreeProjectReview:P,updateAllReviewsData:C,updateMyReviewSummaryData:A,updateMyReviewsData:S,myReviewSummaryData:M}=(0,p.y)(),J=e=>{y((t=>({...t,...e})))};return t?n.createElement("div",{className:"index__card"+(N?" index__card--is-being-edited":f?" index--long-text":""),ref:b},n.createElement("div",{className:"index__card__header"},n.createElement("span",null,"Projet N° "+t.shortId+" : "+s().decode(t.name))),n.createElement("div",{className:"index__card__header"},n.createElement(u,{project:t})),n.createElement("div",{className:"index__card__description"},t.projectMembers.includes(E)||N||f?"":n.createElement(o.g,{icon:i.Bep,onClick:()=>{g(!0)}}),N&&n.createElement(o.g,{icon:i.hSh,onClick:async()=>{if(0===Object.keys(h).length)return;if(!(h.praise||w&&w.praise))return;if(!(h.notImpressed||w&&w.notImpressed))return;let e;e=w?await k(h,w._id):await P(h,t._id),y({}),g(!1),e&&(await C(t.projectGroupName),await A(D.userName,t.projectGroupName),await S(D.userName,t.projectGroupName),a(void 0))}}),N&&n.createElement(o.g,{icon:i.GRI,onClick:()=>{g(!1),y({})}}),!N&&!f&&M&&0===M.expectedReviews&&n.createElement(o.g,{icon:i.pS3,onClick:()=>{R(!0)}}),f&&n.createElement(o.g,{icon:i.GRI,onClick:()=>{R(!1)}})),n.createElement("div",{className:"index__card__content"},n.createElement("div",{className:"index__card__content__title"},"Ma revue ?"),n.createElement("div",{className:"index__card__content__description"},t.projectMembers.includes(E)?n.createElement(o.g,{icon:i.Ip$}):w&&w.praise&&0!==w.praise.length?n.createElement(o.g,{icon:i.SGM}):n.createElement(o.g,{icon:i.s0Q}))),n.createElement("div",{className:"index__card__content"},void 0!==t.description?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Description"),n.createElement("div",{className:"index__card__content__description"},s().decode(t.description))):""),n.createElement("div",{className:"index__card__content"},void 0!==t.presentationUrl?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Vidéo de présentation"),n.createElement("div",{className:"index__card__content__description"},n.createElement(r.A,{src:t.presentationUrl}))):""),n.createElement("div",{className:"index__card__content"},void 0!==t.frontendProductionUrl?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"URL du site"),n.createElement("div",{className:"index__card__content__description"},n.createElement("a",{href:t.frontendProductionUrl,target:"_blank"},t.frontendProductionUrl))):""),n.createElement("div",{className:"index__card__content"},void 0!==t.praise||N?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Mes points forts"),n.createElement(m.A,{className:"index__card__content__description",isBeingEdited:N,id:"praise",startContent:w?w.praise:"",onChange:J})):""),n.createElement("div",{className:"index__card__content"},void 0!==t.notImpressed||N?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Mes points d'amélioration"),n.createElement(m.A,{className:"index__card__content__description",isBeingEdited:N,id:"notImpressed",startContent:w?w.notImpressed:"",onChange:J})):""),n.createElement("div",{className:"index__card__content"},void 0!==t.frontendRepo?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Repo frontend"),n.createElement("div",{className:"index__card__content__description"},n.createElement("a",{href:t.frontendRepo,target:"_blank"},t.frontendRepo))):""),n.createElement("div",{className:"index__card__content"},void 0!==t.backendRepo?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Repo backend"),n.createElement("div",{className:"index__card__content__description"},n.createElement("a",{href:t.backendRepo,target:"_blank"},t.backendRepo))):""),n.createElement("div",{className:"index__card__content"},void 0!==t.projectMembers&&t.projectMembers.length>0&&f?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Membres du projet"),n.createElement("div",{className:"index__card__content__description"},t.projectMembers.map((e=>(0,l.J)(e))).join(", "))):""),n.createElement("div",{className:"index__card__content"},void 0!==t.like|N?n.createElement(n.Fragment,null,n.createElement("div",{className:"index__card__content__title"},"Favori ?"),n.createElement("div",{className:"index__card__content__description"},n.createElement("input",{type:"checkbox",checked:x,disabled:!N||0===M.availableLike||!(!x||h.like),onClick:e=>{j(!x),y({...h,like:!x})}}))):""),f&&t.projectReviews&&t.projectReviews.length>0?t.projectReviews.map(((e,t)=>n.createElement("div",{className:"index__card__content"},n.createElement("div",{className:"index__card__content__title"},0===t?"Tous les points forts":""),n.createElement("div",{className:"index__card__content__description"},n.createElement(v,{content:s().decode(e.praise),author:(0,l.J)(e.userName)}))))):"",f&&t.projectReviews&&t.projectReviews.length>0?t.projectReviews.map(((e,t)=>n.createElement("div",{className:"index__card__content"},n.createElement("div",{className:"index__card__content__title"},0===t?"Tous les points d'amélioration":""),n.createElement("div",{className:"index__card__content__description"},n.createElement(v,{content:s().decode(e.notImpressed),author:(0,l.J)(e.userName)}))))):""):null}},1838:function(e,t,a){var n=a(6540),r=a(6784),c=a(2630);t.A=()=>n.createElement("div",{className:"spinner"},n.createElement("div",{className:"spinner__overlay"}),n.createElement("div",{className:"spinner__animation"},n.createElement(r.g,{icon:c.z1G,className:"fa-3x fa-spin"})))},6845:function(e,t,a){async function n(e,t,a,n){void 0===t&&(t="get");let r=new Headers,c={};if(c.method=t,a){const e=`Bearer ${a}`;r.append("Authorization",e)}n&&(c.body=JSON.stringify(n)),"post"!==t.toLowerCase()&&"patch"!==t.toLowerCase()&&"put"!==t.toLowerCase()||r.append("Content-Type","application/json"),c.headers=r;const s="https://e-vinci-course-api.azurewebsites.net/api/"+e;try{const e=await fetch(s,c);if(!e.ok){let t=" Error code : "+e.status+" : "+e.statusText+"/nMessage : ";throw t+=await e.text(),console.error("fetch() error",t),t.search("expired"),new Error(t)}return await e.json()}catch(o){throw o}}a.d(t,{A:function(){return n}})},3787:function(e,t,a){a.d(t,{J:function(){return r}});var n=a(6097);async function r(e,t){if(e.length>0){const r={scopes:["openid"],account:e[0]};try{return(await t.acquireTokenSilent(r)).idToken}catch(a){if(a instanceof n.CB){return(await t.acquireTokenRedirect(r)).idToken}}}}},4781:function(e,t,a){a.d(t,{J:function(){return n}});const n=e=>{let t=e.substring(0,e.indexOf("@")),a=t.substring(0,t.indexOf(".")),n=t.substring(t.indexOf(".")+1);return a=a.charAt(0).toUpperCase()+a.slice(1),n=n.charAt(0).toUpperCase()+n.slice(1),n.indexOf(".")>=0&&(n=n.substring(n.indexOf(".")+1),n=n.charAt(0).toUpperCase()+n.slice(1)),a+" "+n}}}]);
//# sourceMappingURL=9d92d307e8f824a8549e6192aa2e0178007be8e8-7cba4d37a4b5d5492e6c.js.map