"use strict";(self.webpackChunkmyjscourse=self.webpackChunkmyjscourse||[]).push([[43],{1900:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var s=a(7294),r=a(4854),n=a(1263),l=a(6896),c=a(3290),i=a(5540),o=a(9896),d=a(5443);var u=e=>{let{projects:t,setFilteredContents:a,myReviewsSummary:r}=e;return r&&r.expectedReviews>0?s.createElement("td",{className:"index--long-text"},'Veuillez compléter les revues qui vous ont été attribuées dans le Menu "Revues de projets", "Mes revues". Une fois vos'," ",r.expectedReviews," revues réalisées, votre accès aux résultats sera débloqué ; )`"):!t||t.length<=0?null:s.createElement(s.Fragment,null,t.map(((e,t)=>s.createElement(d.Z,{key:t,project:e,setFilteredContents:a}))))},m=(a(9256),a(6492),a(7814)),v=a(1436);var p=e=>{let t,{projects:a}=e;return a?(t=a.length>0?a[0]:{totalLikedReviews:0,totalExpectedReviews:0,totalPerformedReviews:0},s.createElement("div",{className:"card card--dark-summary card--fill-wrapper"},s.createElement("div",{className:"card__header"},"Résumé des revues de tous les projets"),s.createElement("div",{className:"card__content card__content--long-titles"},s.createElement("div",{className:"card__content__title"},"Coups de coeurs donnés"),s.createElement("div",{className:"card__content__description"},s.createElement(m.G,{icon:v.m6i}),s.createElement("span",{className:"text--light"},t.totalLikedReviews)),s.createElement("div",{className:"card__content__title"},"Revues attendues"),s.createElement("div",{className:"card__content__description"},s.createElement(m.G,{icon:v.Mzg,className:"card__content--orange"}),s.createElement("span",{className:"text--light"},t.totalExpectedReviews)),s.createElement("div",{className:"card__content__title"},"Revues terminées"),s.createElement("div",{className:"card__content__description"},s.createElement(m.G,{icon:v.Mzg}),s.createElement("span",{className:"text--light"},t.totalPerformedReviews))))):null},_=a(1427);var E=e=>{let{associatedProjectGroupName:t}=e;const{projectGroupData:a,updateProjectGroupData:r,userData:n,updateUserData:l}=(0,c.X)(),{myReviewSummaryData:d,updateMyReviewSummaryData:m,allReviewsData:v,updateAllReviewsData:E,isLoaded:w}=(0,i.i)(),{0:g,1:N}=(0,s.useState)(void 0),{0:y,1:h}=(0,s.useState)("");(0,s.useEffect)((()=>{f()}),[]);const f=async()=>{try{const e=await r(t),a=await l(t);await m(a.userName,e._id),await E(e._id)}catch(e){console.error("getData:error",e)}};let R;if(a){const e={weekday:"long",year:"numeric",month:"long",day:"numeric"};R=new Date(a.reviewStartingDate),R=R.toLocaleDateString("fr-FR",e)}return s.createElement(s.Fragment,null,!w&&s.createElement(o.Z,null),void 0===a?"":s.createElement("div",{className:"pl-3 pt-3 pb-3 pr-3"},s.createElement("h3",{className:""},"Gestion des revues des groupes de ",null==a?void 0:a._id),a&&"init"!==a.status&&"dev"!==a.status&&(n&&n.isAdmin||d&&d.isProjectMember)?s.createElement("div",null,s.createElement("div",{className:"summary"},s.createElement("div",{className:"summary__card-wrapper"},s.createElement(p,{projects:v})),s.createElement("div",{className:"summary__card-wrapper"},s.createElement(_.Z,{myReviewsSummary:d}))),s.createElement("div",{className:"index"},s.createElement("input",{type:"text","aria-label":"Search",placeholder:"Filtrez les contenus...",onChange:e=>{const t=e.target.value;h(e.target.value);const a=v.filter((e=>{const{shortId:a,name:s,description:r}=e;return s.toLowerCase().includes(t.toLowerCase())||r.toLowerCase().includes(t.toLowerCase())||t.length>0&&parseInt(t)===a}));a&&a.length>0?N(a):N(void 0)},className:"index__search"}),s.createElement(u,{projects:g&&g.length>0?g:v,myReviewsSummary:d,setFilteredContents:N}))):a&&"init"!==a.status&&"dev"!==a.status?"Vous n'avez pas encore le privilège de voir les revues des projets des groupes de "+a._id+". Si nécessaire, n'hésitez pas à faire une demande à l'administrateur du site.":"La saison de revues des projets n'a pas encore été ouverte.\n      Nous nous réjouissons de vous revoir tout bientôt pour évaluer les projets de différents groupes.\n      Une annonce sera faite une fois la saison ouverte ; )\n      Date d'ouverture estimée : "+R))};var w=(0,l.O)((()=>{const e=(0,r.useStaticQuery)("758242238"),t=null==e?void 0:e.site.siteMetadata.defaultAssociatedProjectGroupName;return s.createElement(c.a,null,s.createElement(i.w,null,s.createElement(n.Z,null,s.createElement(E,{associatedProjectGroupName:t}))))}))}}]);
//# sourceMappingURL=component---src-pages-review-page-js-bbbb5dce329895a22975.js.map