"use strict";(self.webpackChunkmyjscourse=self.webpackChunkmyjscourse||[]).push([[773],{3892:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var a=r(7294),n=r(4854),s=r(5583),u=r(5772),i=r(3290),o=r(5540),c=r(5861),l=r(4687),d=r.n(l),m=r(9896),v=r(5443),p=function(e){var t=e.projects,r=e.setFilteredContents,n=e.allReviews,s=null==t?void 0:t.map((function(e){var t=n.find((function(t){return e.convertedProjectId===t._id}));return Object.assign({},e,{countExpected:t.countExpected,countLiked:t.countLiked,countReviews:t.countReviews,projectReviews:t.projectReviews})}));return!t||t.length<=0?null:a.createElement(a.Fragment,null,null==s?void 0:s.map((function(e,t){return a.createElement(v.Z,{key:t,project:e,setFilteredContents:r})})))},f=r(1427),w=function(e){var t=e.associatedProjectGroupName,r=(0,i.X)(),n=r.projectGroupData,s=r.updateProjectGroupData,u=r.userData,l=r.updateUserData,v=(0,o.i)(),w=v.myReviewSummaryData,E=v.updateMyReviewSummaryData,g=v.myReviewsData,j=v.updateMyReviewsData,y=v.allReviewsData,h=v.updateAllReviewsData,D=v.isLoaded,R=(0,a.useState)(void 0),x=R[0],N=R[1],k=(0,a.useState)(""),C=(k[0],k[1]);(0,a.useEffect)((function(){_()}),[]);var S,_=function(){var e=(0,c.Z)(d().mark((function e(){var r,a;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(t);case 3:return r=e.sent,e.next=6,l(t);case 6:return a=e.sent,e.next=9,E(a.userName,r._id);case 9:return e.sent,e.next=12,j(a.userName,r._id);case 12:return e.sent,e.next=15,h(r._id);case 15:e.sent,e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.error("getData:error",e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}();if(n){S=(S=new Date(n.reviewStartingDate)).toLocaleDateString("fr-FR",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}return a.createElement(a.Fragment,null,!D&&a.createElement(m.Z,null),void 0===n?"":a.createElement("div",{className:"pl-3 pt-3 pb-3 pr-3"},a.createElement("h3",{className:""},"Mes revues des groupes de ",null==n?void 0:n._id),y&&n&&"init"!==n.status&&"dev"!==n.status&&(u&&u.isAdmin||w&&w.isProjectMember)?a.createElement("div",null,a.createElement("div",{className:"summary"},a.createElement("div",{className:"summary__card-wrapper"},a.createElement(f.Z,{myReviewsSummary:w}))),a.createElement("div",{className:"index"},a.createElement("input",{type:"text","aria-label":"Search",placeholder:"Filtrez les contenus...",onChange:function(e){var t=e.target.value;C(e.target.value);var r=g.filter((function(e){var r=e.shortId,a=e.name,n=e.description;return a.toLowerCase().includes(t.toLowerCase())||n.toLowerCase().includes(t.toLowerCase())||t.length>0&&parseInt(t)===r}));r&&r.length>0?N(r):N(void 0)},className:"index__search"}),a.createElement(p,{projects:x&&x.length>0?x:g,setFilteredContents:N,allReviews:y}))):n&&"init"!==n.status&&"dev"!==n.status?"Vous n'avez pas encore le privilège de voir les revues des projets des groupes de "+n._id+". Si nécessaire, n'hésitez pas à faire une demande à l'administrateur du site.":"La saison de revues des projets n'a pas encore été ouverte.\n      Nous nous réjouissons de vous revoir tout bientôt pour évaluer les projets de différents groupes.\n      Une annonce sera faite une fois la saison ouverte ; )\n      Date d'ouverture estimée : "+S))},E=(0,u.O)((function(){var e=(0,n.useStaticQuery)("758242238"),t=null==e?void 0:e.site.siteMetadata.defaultAssociatedProjectGroupName;return a.createElement(i.a,null,a.createElement(o.w,null,a.createElement(s.Z,null,a.createElement(w,{associatedProjectGroupName:t}))))}))}}]);
//# sourceMappingURL=component---src-pages-my-reviews-page-js-d7e7326878558491d6a3.js.map