(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8118],{8358:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/globaldeals",function(){return r(5133)}])},5133:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return z}});var s=r(8014),n=r(56168),a=r(45272),l=r(57417),c=r(79838),i=r(36180),o=r(65143),u=r(97968),p=r(48377),f=r(3621),m=r(34543),x=r(23291),d=r.n(x),h=r(12683),b=r(64607),g=r(30174),j=r(97307),w=r(51333),y=r(45501),v=r(1984),N=r(80998),k=r(62044),S=r(50647),L=r(51342),_=r(41286),O=r(3336),Z=r(90197),C=r(24789);function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=e[r];return s}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),s.forEach((function(t){E(e,t,r[t])}))}return e}function A(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var z=!0;t.default=function(){var e=(0,C.Ge)().library,t=(0,k.Z)("common").t,r=(0,n.useState)(!1),x=r[0],T=r[1],E=(0,n.useState)(!1),z=E[0],D=E[1],P=(0,n.useState)(!1),F=P[0],R=P[1],$=(0,n.useState)(!1),B=$[0],G=$[1],U=(0,n.useState)("all"),W=U[0],H=U[1],M=(0,n.useState)({source:"api",swaps:[]}),V=M[0],X=M[1],Y=(0,n.useState)(""),q=Y[0],J=Y[1],K=(0,n.useState)(0),Q=K[0],ee=K[1],te=(0,n.useState)(10)[0],re=(0,n.useState)(!1),se=re[0],ne=re[1],ae=(0,n.useState)(0),le=ae[0],ce=ae[1],ie=(0,n.useState)(null),oe=ie[0],ue=ie[1],pe=(0,n.useRef)(!1),fe=(0,n.useRef)({clearInput:null}),me=(0,n.useRef)(null),xe=(0,u.T)(),de=(0,u.C)((function(e){return e})),he=de.waccount,be=de.trademodal,ge=de.reportmodal,je=de.postmodal,we=he.currentNetworkId,ye=he.isConnected,ve=he.jwtToken,Ne=be.isOpen,ke=ge.isOpen,Se=je.isOpen,Le=function(){R(!1),ye?(xe((0,g.eV)("maker")),xe((0,g.r$)(!0)),document.body.classList.add("no-scroll")):xe((0,w.$e)(!0))},_e=function(e){pe.current&&(J(e),D(!0),G(!0),ee(0),X({source:"search",swaps:[]}))},Oe=function(e,t){var r;if(we&&me.current){pe.current&&D(!0);var s=[we,e,Q,te];(null===t||void 0===t?void 0:t.length)&&s.push("null","null",t),(r=me.current).getGlobalSwapsList.apply(r,A(s)).then((function(e){var r=e.swapList,s=e.count;pe.current&&(T(!1),G(!1),ce(s)),0===V.swaps.length?pe.current&&X({source:t&&0!==t.length?"search":"api",swaps:r}):pe.current&&(we===oe?pe.current&&X({source:t&&0!==t.length?"search":"api",swaps:V.swaps.concat(r)}):pe.current&&(ee(0),X({source:"api",swaps:r}))),pe.current&&D(!1)})).catch((function(e){console.error(e),pe.current&&(T(!1),D(!1),G(!1))}))}};return(0,n.useEffect)((function(){x||B||(le>V.swaps.length?(pe.current&&ee(Q+te),pe.current&&ne(!0)):pe.current&&ne(!1))}),[V.swaps]),(0,n.useEffect)((function(){x&&0===V.swaps.length&&me.current&&Oe(1)}),[x,V.swaps,W,me.current]),(0,n.useEffect)((function(){"search"===V.source&&0===V.swaps.length&&!0===B&&0===Q&&me.current&&Oe(1,q)}),[q,B,Q,V,me.current]),(0,n.useEffect)((function(){ye||pe.current&&(ce(0),ee(0),X({source:"api",swaps:[]}))}),[ye,we]),(0,n.useEffect)((function(){if(we)return pe.current=!0,Oe(1),pe.current&&ue(we),function(){pe.current=!1}}),[we,me.current]),(0,n.useEffect)((function(){ve&&(null===we||void 0===we?void 0:we.length)&&e&&!me.current&&(me.current=new Z.h4({jwt:ve,network:we,web3Provider:e.provider}))}),[ve,we,e]),(0,s.jsxs)("div",{children:[(0,s.jsx)(y.Z,{}),(0,s.jsxs)(v.default,{children:[(0,s.jsx)("title",{children:t("titleLabel")}),(0,s.jsx)(N.Z,{metaTitle:t("titleLabel"),metaDescription:t("metaDescriptionLabel"),metaOgTitle:t("titleLabel"),metaOgDescription:t("metaDescriptionLabel"),metaOgImage:"https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",metaOgUrl:"https://www.nfttrader.io/globaldeals",twitterImageCard:"https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",twitterImage:"https://s3.eu-west-1.amazonaws.com/media.nfttrader.io/static/meta-logo.png",twitterUrl:"https://www.nfttrader.io/globaldeals",twitterTitle:t("titleLabel"),twitterDescription:t("metaDescriptionLabel")}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,s.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]}),(0,s.jsx)(a.Z,{}),(0,s.jsxs)("main",{children:[(0,s.jsx)("div",{className:"bg-primary-yellow",children:(0,s.jsx)(l.Z,{mainText:t("globalDealsLabel"),subText:t("checkOtherTradersLabel"),button:(0,s.jsx)(f.Z,{text:t("createTradeLabel"),type:{class:"primary",icon:!1,hasColoredBg:!0},size:"large",initialState:{state:"default"},onClick:Le})})}),(0,s.jsxs)("nav",{className:"flex flex-col justify-between mt-[20px] gap-4 max-w-[1280px] m-[auto] p-4 md:gap-0 md:p-12 md:flex-row md:items-center ",children:[(0,s.jsx)("div",{className:"flex items-center justify-center gap-4",children:(0,s.jsx)("span",{className:"all"===W?"text-primary-blue border-b-2 border-primary-blue cursor-default":"text-primary-gray cursor-pointer",onClick:function(){var e;W!==(e="all")&&pe.current&&(H(e),T(!0),X({source:V.source,swaps:[]}))},children:t("allLabel")})}),(0,s.jsx)(c.Z,{currentSearchState:"filled",setFilter:_e,placeholder:t("searchLabel"),refClear:fe,className:"mt-[16px] md:mt-[0px]"})]}),V.swaps.length?(0,s.jsx)("div",{className:"w-full flex flex-col justify-center items-center pb-[40px] px-4 md:px-10 xl:px-0 m-auto ".concat(d().scrollableTrades),children:(0,s.jsx)(m.Z,{dataLength:V.swaps.length,hasMore:se,next:function(){Oe(1)},loader:(0,s.jsx)("div",{className:"flex justify-center items-center",children:(0,s.jsx)("img",{src:h.Z.src,className:"".concat(d().rotating," w-[24px] h-[24px]")})}),className:"flex flex-col justify-center items-center gap-8 py-[30px]",children:V.swaps.map((function(e,t){return(0,s.jsx)(o.Z,{maker:I({},e.maker[0],{collections:e.collections.filter((function(e){return 1===e.creator}))}),taker:I({},e.taker[0],{collections:e.collections.filter((function(e){return 0===e.creator}))}),timestamp:e.swapEnd,swapId:e.swapId,type:e.type,txHash:e.txHash,status:e.swapStatus,className:"max-w-[1280px] w-full"},"trade-".concat(e.swapId))}))})}):"search"===V.source?(0,s.jsx)(s.Fragment,{children:z?(0,s.jsx)("div",{className:"flex justify-center items-center pb-[50px]",children:(0,s.jsx)("img",{src:h.Z.src,className:"".concat(d().rotating," w-[36px] h-[36px]")})}):(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center mt-[40px] gap-10 pb-[50px] md:mt-[0px]",children:[(0,s.jsx)("img",{src:p.Z.src}),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,s.jsx)("h1",{className:"text-3xl text-primary-dark-blue font-semibold text-center",children:t("sorryLabel")}),(0,s.jsx)("h3",{className:"rubik text-base font-light text-primary-dark-blue mt-[8px]",children:t("tryAgainLabel")})]}),(0,s.jsx)(f.Z,{text:t("clearSearchLabel"),type:{class:"primary",icon:!1,hasColoredBg:!1},initialState:{state:"default"},size:"small",onClick:function(){var e,t;null===(e=fe.current)||void 0===e||null===(t=e.clearInput)||void 0===t||t.call(e),ee(0),_e("")},className:"px-[32px] py-[10px] md:py-2"})]})}):(0,s.jsx)(s.Fragment,{children:z?(0,s.jsx)("div",{className:"flex justify-center items-center pb-[50px]",children:(0,s.jsx)(b.Z,{isWhite:!1,className:"w-[36px] h-[36px]"})}):(0,s.jsx)(s.Fragment,{children:ye?(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center gap-10 pb-[50px]",children:[(0,s.jsx)("img",{src:p.Z.src}),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,s.jsx)("h1",{className:"text-3xl text-primary-dark-blue font-semibold",children:t("noResultsLabel")}),(0,s.jsx)("h3",{className:"text-base font-light text-primary-dark-blue",children:t("tryAgainLabel")})]})]}):(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center gap-10 pb-[50px]",children:[(0,s.jsx)("img",{src:p.Z.src}),(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,s.jsx)("h1",{className:"text-3xl text-primary-dark-blue font-semibold",children:t("connectYourWalletLabel")}),(0,s.jsx)("h3",{className:"text-base font-light text-primary-dark-blue",children:t("connectYourWalletBrowserLabel")})]})]})})})})]}),Ne&&(0,s.jsx)(j.Z,{}),ke&&(0,s.jsx)(S.Z,{}),Se&&(0,s.jsx)(_.Z,{}),F&&(0,s.jsx)(O.Z,{onClose:function(){pe.current&&R(!1),document.body.classList.remove("no-scroll")},onClickOpenTrade:Le,onClickOpenPost:function(){R(!1),ye?(xe((0,L.pV)(!0)),document.body.classList.add("no-scroll")):xe((0,w.$e)(!0))}}),(0,s.jsx)(i.Z,{})]})}},23291:function(e){e.exports={rotating:"globaldeals_rotating__oothh",rotate:"globaldeals_rotate__88_yc",scrollableTrades:"globaldeals_scrollableTrades__5ZutC"}}},function(e){e.O(0,[4885,7421,5300,303,1391,5519,792,1490,9774,2888,179],(function(){return t=8358,e(e.s=t);var t}));var t=e.O();_N_E=t}]);