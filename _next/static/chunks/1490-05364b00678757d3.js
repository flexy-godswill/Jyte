(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1490],{48377:function(e,s){"use strict";s.Z={src:"/_next/static/media/smile_sad.bf2edabd.svg",height:152,width:152}},57417:function(e,s,t){"use strict";var r=t(8014);t(56168);s.Z=function(e){var s=e.mainText,t=void 0===s?"":s,a=e.subText,i=void 0===a?"":a,n=e.button;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"bg-primary-blue rounded-br-[88px] md:rounded-br-[264px]",children:(0,r.jsx)("div",{className:"m-auto max-w-[95%] px-[48px]",children:(0,r.jsxs)("div",{className:"flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-3xl md:text-5xl pt-[80px] pb-[16px] text-primary-white font-semibold",children:t}),(0,r.jsx)("p",{className:"rubik text-base font-light text-primary-white pb-[40px] md:pb-[80px]",children:i})]}),n?(0,r.jsx)("div",{className:"mb-[31px] md:mb-[0px]",children:n}):(0,r.jsx)(r.Fragment,{})]})})})})}},65143:function(e,s,t){"use strict";t.d(s,{Z:function(){return L}});var r=t(44453),a=t.n(r),i=t(8014),n=t(56168),l=t(42662);function c(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function o(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(s){c(e,s,t[s])}))}return e}var m=function(e){var s=e.src,t=e.size,r=e.className,a=e.style,n=void 0===a?{}:a;return(0,i.jsx)("div",{className:"".concat(null!==r&&void 0!==r?r:""," rounded-full"),style:o({},{width:"".concat(t,"px"),height:"".concat(t,"px"),backgroundImage:"url(".concat(s,")"),backgroundPosition:"center",backgroundSize:"cover"},n)})},x=t(64228);function d(e,s){(null==s||s>e.length)&&(s=e.length);for(var t=0,r=new Array(s);t<s;t++)r[t]=e[t];return r}function u(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,s){if(!e)return;if("string"===typeof e)return d(e,s);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,s)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(e){var s=e.left,t=e.right,r=e.itemsSize,a=(0,n.useRef)(!1),l=(0,n.useState)(r),c=l[0],o=l[1],d=s.length<=3?u(s):s.slice(0,3),p=s.length>3?s.slice(3):[],f=t.length<=3?u(t):t.slice(0,3),g=t.length>3?t.slice(3):[];return(0,n.useEffect)((function(){return a.current=!0,o(window.innerWidth>=768?r:r/100*70),window.addEventListener("resize",(function(){a.current&&o(window.innerWidth>=768?r:r/100*70)})),function(){a.current=!1}}),[]),(0,i.jsxs)("div",{className:"flex items-center justify-center gap-2 sm:gap-6",children:[(0,i.jsxs)("div",{className:"flex items-center justify-center",children:[(0,i.jsx)("div",{style:{width:"".concat(c/3*(d.length+2),"px")},children:d.map((function(e,s){return(0,i.jsx)("div",{className:"inline-block",style:{width:"".concat(c/3,"px")},children:(0,i.jsx)(m,{src:e.imageUrl,size:c})},s)}))}),p.length?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",style:{width:"".concat(c/2,"px"),height:"".concat(c/2,"px")},children:[(0,i.jsx)("span",{className:"rubik text-xxs text-primary-dark-blue",children:p.length}),(0,i.jsxs)("span",{className:"rubik text-xxs text-primary-dark-blue",children:["NFT",p.length>1?"s":""]})]}):null]}),(0,i.jsx)("img",{src:x.Z.src}),(0,i.jsxs)("div",{className:"flex items-center justify-center",children:[g.length?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",style:{width:"".concat(c/2,"px"),height:"".concat(c/2,"px")},children:[(0,i.jsx)("span",{className:"rubik text-xxs text-primary-dark-blue",children:g.length}),(0,i.jsxs)("span",{className:"rubik text-xxs text-primary-dark-blue",children:["NFT",g.length>1?"s":""]})]}):null,(0,i.jsx)("div",{style:{width:"".concat(c/3*(f.length+2),"px")},children:f.map((function(e,s){return(0,i.jsx)("div",{className:"inline-block",style:{width:"".concat(c/3,"px")},children:(0,i.jsx)(m,{src:e.imageUrl,size:c})},s)}))})]})]})},f="/_next/static/media/dashed-line.108c130c.svg",g="/_next/static/media/external-link.138689a9.svg",h=t(72273),y="/_next/static/media/loader.3511e1ca.svg",b=t(25900),j=t(93699),N=t(153),w=function(e){var s=e.imgSrc,t=e.text,r=e.collection,a=e.amount,n=e.size,l=void 0===n?40:n,c=e.type;return(0,i.jsxs)("div",{className:"flex items-center justify-start gap-2 lg:gap-6",children:[(0,i.jsx)("img",{src:s||N.Z.src,className:"rounded-full",style:{width:"".concat(l,"px"),height:"".concat(l,"px")}}),(0,i.jsxs)("div",{className:"flex flex-col lg:flex-row items-start lg:items-center justify-center gap-0 lg:gap-2",children:[(0,i.jsx)(j.Z,{text:t||"",className:"w-[150px] h-[32px] text-lg md:text-2xl font-semibold text-primary-dark-blue"}),r?(0,i.jsxs)("div",{className:"flex-1 flex items-center justify-start gap-4",children:["ERC1155"===c&&(0,i.jsxs)("div",{className:"flex items-center justify-center rubik font-base bg-primary-dark-blue text-primary-white text-sm w-[30px] h-[30px] rounded-full",children:["x",a]}),"ERC721"===c||"ERC1155"===c?(0,i.jsx)(b.Z,{src:r.imgSrc?r.imgSrc:"",statusVerification:r.statusVerification,className:"w-[24px] sm:w-[32px] h-[24px] sm:h-[32px]",badgeClassName:"w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]",showCollectionTooltip:!0,collection:{name:r.name?r.name:"",imageUrl:r.imgSrc?r.imgSrc:N.Z.src,statusVerification:r.statusVerification?r.statusVerification:0,address:"",networkId:"1",abi:[],type:c,symbol:"",createdAt:null},canReport:!0}):(0,i.jsx)(b.Z,{src:r.imgSrc?r.imgSrc:"",statusVerification:r.statusVerification,className:"w-[24px] sm:w-[32px] h-[24px] sm:h-[32px]",badgeClassName:"w-[12px] sm:w-[16px] h-[12px] sm:h-[16px]"}),(0,i.jsx)("span",{className:"text-xs md:text-base font-semibold text-primary-dark-blue",children:r.name})]}):(0,i.jsx)("div",{className:"flex-1 flex items-center justify-start gap-4",children:(0,i.jsx)("span",{className:"text-sm md:text-base font-semibold text-primary-dark-blue",children:null!==a&&void 0!==a?a:""})})]})]})},v=t(97968),k=t(91936),C=t(55008),z=t.n(C),S=(t(98617),function(e){switch(e){case"1":return"Etherscan";case"5":return"Goerli Etherscan";case"137":return"PolygonScan";case"80001":return"PolygonMumbaiScan";default:return"Etherscan"}}),I=t(8138),U=function(e,s){switch(e){case"1":return"https://etherscan.io/tx/".concat(s);case"5":return"https://goerli.etherscan.io/tx/".concat(s);case"137":return"https://polygonscan.com/tx/".concat(s);case"80001":return"https://mumbai.polygonscan.com/tx/".concat(s);default:return"https://etherscan.io/tx/".concat(s)}},A=t(62044),E=t(26379),R=t(90197),T=t(24789);function _(e,s){(null==s||s>e.length)&&(s=e.length);for(var t=0,r=new Array(s);t<s;t++)r[t]=e[t];return r}function V(e,s,t,r,a,i,n){try{var l=e[i](n),c=l.value}catch(o){return void t(o)}l.done?s(c):Promise.resolve(c).then(r,a)}function Z(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,s){if(!e)return;if("string"===typeof e)return _(e,s);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _(e,s)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var L=function(e){var s=e.maker,t=e.taker,r=e.timestamp,c=e.swapId,o=e.type,m=e.txHash,d=e.status,u=e.className,b=e.showSkeletonLoader,j=void 0!==b&&b,N=(0,A.Z)("common").t,C=(0,n.useRef)(!1),_=(0,n.useState)(!1),L=_[0],O=_[1],F=(0,n.useState)(!1),P=F[0],D=F[1],M=(0,n.useState)(null),B=M[0],$=M[1],G=(0,T.Ge)().library,W=(0,v.C)((function(e){return e})).waccount,H=W.currentNetworkId,J=W.jwtToken,Q=function(e){return{amount:"".concat("ERC1155"===e.type?"".concat(e.blc):"".concat(e.blcNative," ").concat(e.symbol)),imageUrl:e.collectionLogo,isCurrency:["ERC20"].includes(e.type),statusVerification:e.statusVerification,name:e.name,type:e.type,tokenId:"".concat(e.tokenId),tokenImageURL:e.imageUrl,collectionAddress:e.collectionAddress}},X=function(){(C.current&&D(!0),H&&J&&G)&&new R.h4({jwt:J,web3Provider:G.provider,network:H}).getSwapOrder(c).then(function(){var e,r=(e=a().mark((function e(r){var i,n,l,c,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r&&(i=r.master,n=r.detail,C.current&&D(!1),l=Z(n.filter((function(e){return 1===e.creator})).map((function(e){return Q(e)}))),c=Z(n.filter((function(e){return 0===e.creator})).map((function(e){return Q(e)}))),Number(i[0].valueMaker)>0&&l.push({amount:"".concat(k.formatEther(i[0].valueMaker)," ").concat(i[0].symbol),type:"NATIVE",imageUrl:i[0].imageUrl,isCurrency:!0,name:i[0].name}),Number(i[0].valueTaker)>0&&c.push({amount:"".concat(k.formatEther(i[0].valueTaker)," ").concat(i[0].symbol),type:"NATIVE",imageUrl:i[0].imageUrl,isCurrency:!0,name:i[0].name}),o={maker:{collections:l,address:s.address,isNft:s.isNft},taker:{collections:c,address:t.address,isNft:t.isNft}},C.current&&$(o));case 1:case"end":return e.stop()}}),e)})),function(){var s=this,t=arguments;return new Promise((function(r,a){var i=e.apply(s,t);function n(e){V(i,r,a,n,l,"next",e)}function l(e){V(i,r,a,n,l,"throw",e)}n(void 0)}))});return function(e){return r.apply(this,arguments)}}()).catch((function(e){console.error(e),C.current&&D(!1)}))};return(0,n.useEffect)((function(){return C.current=!0,O(!!B),function(){C.current=!1}}),[B]),(0,i.jsx)(i.Fragment,{children:j?(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"rounded-2xl rounded-tr-[0px] shadow-xl hover:shadow-2xl ".concat(u),children:[(0,i.jsx)("div",{className:"bg-primary-yellow rounded-2xl rounded-tr-[0px]",children:(0,i.jsxs)("div",{className:"flex flex-col justify-start gap-[40px] cursor-pointer rounded-tl-2xl rounded-tr-[40px] bg-primary-white p-6 md:p-[40px] md:pr-[48px] md:pb-[48px]",children:[(0,i.jsx)("div",{className:"flex items-center justify-between",children:(0,i.jsx)("div",{className:"flex flex-col gap-4",children:(0,i.jsxs)("div",{className:"flex flex-col items-start justify-center sm:flex-row sm:items-center",children:[(0,i.jsxs)("div",{className:"flex items-center justify-center mb-[16px] sm:mb-[0px] sm:mr-[16px]",children:[(0,i.jsx)("div",{className:"".concat(z().skeleton," w-[104px] h-[29px] rounded-full")}),(0,i.jsx)("div",{className:"".concat(z().skeleton," w-[78px] h-[29px] rounded-full sm:ml-[8px]")})]}),(0,i.jsx)("div",{className:"".concat(z().skeleton," w-[139px] h-[21px] rounded-full")})]})})}),(0,i.jsxs)("div",{className:"flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0",children:[(0,i.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center gap-[20px] xl:gap-[40px]",children:[(0,i.jsx)("div",{className:"".concat(z().skeleton," w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full")}),(0,i.jsx)("div",{className:"".concat(z().skeleton," w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] rounded-full")})]}),(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)("div",{className:"".concat(z().skeleton," w-[56px] h-[56px] sm:w-[80px] sm:h-[80px] rounded-full mr-[20px]")}),(0,i.jsx)("div",{className:"".concat(z().skeleton," w-[56px] h-[56px] sm:w-[80px] sm:h-[80px] rounded-full")})]})]})]})}),(0,i.jsxs)("div",{className:"".concat(L?"flex":"hidden"," flex-col justify-start gap-8 px-6 md:px-[40px] md:pr-[48px] md:pb-[48px] pb-8 bg-primary-white rounded-b-2xl"),children:[(0,i.jsx)("hr",{className:"w-full h-[1px] bg-primary-gray opacity-40 border-0"}),(0,i.jsxs)("div",{className:"flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-0",children:[(0,i.jsx)("p",{className:"text-lg font-semibold text-primary-dark-blue m-0",children:N("initiatorLabel")}),(0,i.jsx)(l.Z,{username:s.username,address:s.address,displayInfo:!0,isNFT:s.isNft,displayInfoClassName:"text-base font-semibold text-primary-dark-blue text-right sm:text-lg",addressInfoClassName:"rubik text-sm font-regular text-primary-gray",src:s.imageUrl,sizesClassNames:"w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]",isReversed:!0,jazziconSize:{defaultSize:32,breakpoints:[640],sizes:[40]}})]}),(0,i.jsx)("ul",{className:"flex flex-col justify-start gap-7",children:B?B.maker.collections.map((function(e,s){return(0,i.jsxs)("li",{className:"flex items-center justify-between",children:[(0,i.jsx)(w,{imgSrc:e.isCurrency?e.imageUrl:e.tokenImageURL,text:e.isCurrency?e.name:"#".concat(e.tokenId),collection:e.isCurrency?void 0:{name:e.name,imgSrc:e.imageUrl,statusVerification:e.statusVerification},amount:e.isCurrency||"ERC1155"===e.type?e.amount:void 0,type:e.type}),e.isCurrency?null:(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)("span",{className:"text-sm font-regular text-primary-dark-blue px-1 invisible md:visible lg:visible 2lg:visible",children:"View on"}),(0,i.jsx)("div",{className:"flex flex-col md:flex-row lg:flex-row xl:flex-row",children:Object.values((0,E.g)(H,e.collectionAddress?e.collectionAddress:"",e.tokenId?e.tokenId:"")).map((function(e,s){return e.link.length>0&&(0,i.jsx)("a",{href:e.link,target:"_blank",children:(0,i.jsx)("img",{src:e.logo,className:"inline-block ml-0 md:ml-4"})},s)}))})]})]},s)})):null}),(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("hr",{className:"w-full h-[1px] bg-primary-gray opacity-40 border-0"}),(0,i.jsx)("img",{src:x.Z.src,className:"rotate-90"}),(0,i.jsx)("hr",{className:"w-full h-[1px] bg-primary-gray opacity-40 border-0"})]}),(0,i.jsxs)("div",{className:"flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-0",children:[(0,i.jsx)("p",{className:"text-lg font-semibold text-primary-dark-blue m-0",children:N("counterpartyAssetsLabel")}),(0,i.jsx)(l.Z,{username:t.username,address:t.address,displayInfo:!0,isNFT:t.isNft,displayInfoClassName:"text-base font-semibold text-primary-dark-blue text-right sm:text-lg",addressInfoClassName:"rubik text-sm font-regular text-primary-gray",src:t.imageUrl,sizesClassNames:"w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]",isReversed:!0,jazziconSize:{defaultSize:32,breakpoints:[640],sizes:[40]}})]}),(0,i.jsx)("ul",{className:"flex flex-col justify-start gap-7",children:B?B.taker.collections.map((function(e,s){return(0,i.jsxs)("li",{className:"flex items-center justify-between",children:[(0,i.jsx)(w,{imgSrc:e.isCurrency?e.imageUrl:e.tokenImageURL,text:e.isCurrency?e.name:"#".concat(e.tokenId),collection:e.isCurrency?void 0:{name:e.name,imgSrc:e.imageUrl,statusVerification:e.statusVerification},amount:e.isCurrency||"ERC1155"===e.type?e.amount:void 0,type:e.type}),e.isCurrency?null:(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)("span",{className:"text-sm font-regular text-primary-dark-blue px-1 invisible md:visible lg:visible 2lg:visible",children:"View on"}),(0,i.jsx)("div",{className:"flex flex-col md:flex-row lg:flex-row xl:flex-row",children:Object.values((0,E.g)(H,e.collectionAddress?e.collectionAddress:"",e.tokenId?e.tokenId:"")).map((function(e,s){return e.link.length>0&&(0,i.jsx)("a",{href:e.link,target:"_blank",children:(0,i.jsx)("img",{src:e.logo,className:"inline-block ml-0 md:ml-4"})},s)}))})]})]},s)})):null})]})]})}):(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"rounded-2xl rounded-tr-[0px] shadow-xl hover:shadow-2xl ".concat(u),children:[(0,i.jsx)("div",{className:"bg-primary-yellow rounded-2xl rounded-tr-[0px]",children:(0,i.jsxs)("div",{className:"flex flex-col justify-start gap-[40px] ".concat(L?"rounded-b-0 cursor-default":"rounded-b-2xl cursor-pointer"," rounded-tl-2xl rounded-tr-[40px] bg-primary-white p-6 md:p-[40px] md:pr-[48px] md:pb-[48px]"),onClick:function(){return!L&&X()},children:[(0,i.jsxs)("div",{className:"".concat(L?"flex":"hidden"," items-start md:items-center justify-between"),children:[(0,i.jsxs)("div",{className:"flex flex-col items-start justify-center gap-4 sm:flex-row sm:items-center",children:[(0,i.jsxs)("div",{className:"flex items-center justify-center gap-4",children:[(0,i.jsx)(l.Z,{address:s.address,src:s.imageUrl,isNFT:s.isNft,sizesClassNames:"w-[24px] h-[24px] sm:w-[40px] sm:h-[40px]",jazziconSize:{defaultSize:24,breakpoints:[640],sizes:[40]}}),(0,i.jsx)("img",{src:x.Z.src,className:"w-[24px] h-[24px] sm:w-auto sm:h-auto"}),(0,i.jsx)(l.Z,{address:t.address,src:t.imageUrl,isNFT:t.isNft,sizesClassNames:"w-[24px] h-[24px] sm:w-[40px] sm:h-[40px]",jazziconSize:{defaultSize:24,breakpoints:[640],sizes:[40]}})]}),(0,i.jsxs)("div",{className:"flex items-center justify-center gap-1",children:[H&&(0,i.jsx)(I.Z,{text:"".concat(N("viewOnLabel")," ").concat(S(H)),url:U(H,m),isBlue:!0,isTargetBlank:!0,weight:"font-regular",className:"text-sm"}),(0,i.jsx)("img",{src:g})]})]}),(0,i.jsx)("img",{src:h.Z.src,className:"w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] cursor-pointer",onClick:function(){C.current&&$(null)}})]}),(0,i.jsxs)("div",{className:"flex items-center justify-between",children:[(0,i.jsx)("div",{className:"flex flex-col gap-4",children:(0,i.jsxs)("div",{className:"flex flex-col items-start justify-center sm:flex-row sm:items-center",children:[(0,i.jsxs)("div",{className:"flex items-center justify-center mb-[16px] sm:mb-[0px] sm:mr-[16px]",children:[(0,i.jsx)("span",{className:"text-sm font-semibold text-white bg-primary-blue py-1 px-4 rounded-full mr-[8px]",children:"DIRECT_DEAL"===o?"Direct Deal":"Public Deal"}),(0,i.jsx)("span",{className:"text-sm font-semibold py-1 px-4 rounded-full border-[1px] sm:ml-[8px] ".concat(1===d?"text-primary-blue border-primary-blue":"text-primary-gray border-primary-gray"),children:N(1===d?"closedLabel":"canceledLabel")})]}),(0,i.jsx)("span",{className:"text-sm font-light text-primary-dark-blue rubik",children:new Date(r).toString().replace(/:\d{2} .+$/,"")})]})}),P&&(0,i.jsx)("img",{src:y,className:"".concat(z().rotating," w-[24px] h-[24px]")})]}),(0,i.jsxs)("div",{className:"".concat(L?"hidden":"flex"," flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0"),children:[(0,i.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center gap-[20px] xl:gap-[40px]",children:[(0,i.jsx)(l.Z,{username:s.username,address:s.address,isNFT:s.isNft,displayInfo:!0,displayInfoClassName:"text-base font-semibold text-primary-dark-blue sm:text-lg",addressInfoClassName:"rubik text-sm font-regular text-primary-gray",src:s.imageUrl,sizesClassNames:"w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]",jazziconSize:{defaultSize:32,breakpoints:[640],sizes:[40]}}),(0,i.jsx)("img",{src:f,className:"hidden lg:block"}),(0,i.jsx)(l.Z,{username:t.username,address:t.address,isNFT:t.isNft,displayInfo:!0,displayInfoClassName:"text-base font-semibold text-primary-dark-blue sm:text-lg",addressInfoClassName:"rubik text-sm font-regular text-primary-gray",src:t.imageUrl,sizesClassNames:"w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]",jazziconSize:{defaultSize:32,breakpoints:[640],sizes:[40]}})]}),(0,i.jsx)(p,{left:s.collections.map((function(e){return{imageUrl:e.assetLogo}})),right:t.collections.map((function(e){return{imageUrl:e.assetLogo}})),itemsSize:80})]})]})}),(0,i.jsxs)("div",{className:"".concat(L?"flex":"hidden"," flex-col justify-start gap-8 px-6 md:px-[40px] md:pr-[48px] md:pb-[48px] pb-8 bg-primary-white rounded-b-2xl"),children:[(0,i.jsx)("hr",{className:"w-full h-[1px] bg-primary-gray opacity-40 border-0"}),(0,i.jsxs)("div",{className:"flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-0",children:[(0,i.jsx)("p",{className:"text-lg font-semibold text-primary-dark-blue m-0",children:N("initiatorLabel")}),(0,i.jsx)(l.Z,{username:s.username,address:s.address,displayInfo:!0,isNFT:s.isNft,displayInfoClassName:"text-base font-semibold text-primary-dark-blue text-right sm:text-lg",addressInfoClassName:"rubik text-sm font-regular text-primary-gray",src:s.imageUrl,sizesClassNames:"w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]",isReversed:!0,jazziconSize:{defaultSize:32,breakpoints:[640],sizes:[40]}})]}),(0,i.jsx)("ul",{className:"flex flex-col justify-start gap-7",children:B?B.maker.collections.map((function(e,s){return(0,i.jsxs)("li",{className:"flex items-center justify-between",children:[(0,i.jsx)(w,{imgSrc:e.isCurrency?e.imageUrl:e.tokenImageURL,text:e.isCurrency?e.name:"#".concat(e.tokenId),collection:e.isCurrency?void 0:{name:e.name,imgSrc:e.imageUrl,statusVerification:e.statusVerification},amount:e.isCurrency||"ERC1155"===e.type?e.amount:void 0,type:e.type}),e.isCurrency?null:(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)("span",{className:"text-sm font-regular text-primary-dark-blue px-1 invisible md:visible lg:visible 2lg:visible",children:"View on"}),(0,i.jsx)("div",{className:"flex flex-col md:flex-row lg:flex-row xl:flex-row",children:Object.values((0,E.g)(H,e.collectionAddress?e.collectionAddress:"",e.tokenId?e.tokenId:"")).map((function(e,s){return e.link.length>0&&(0,i.jsx)("a",{href:e.link,target:"_blank",children:(0,i.jsx)("img",{src:e.logo,className:"inline-block ml-0 md:ml-4"})},s)}))})]})]},s)})):null}),(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("hr",{className:"w-full h-[1px] bg-primary-gray opacity-40 border-0"}),(0,i.jsx)("img",{src:x.Z.src,className:"rotate-90"}),(0,i.jsx)("hr",{className:"w-full h-[1px] bg-primary-gray opacity-40 border-0"})]}),(0,i.jsxs)("div",{className:"flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-8 sm:gap-0",children:[(0,i.jsx)("p",{className:"text-lg font-semibold text-primary-dark-blue m-0",children:N("counterpartyAssetsLabel")}),(0,i.jsx)(l.Z,{username:t.username,address:t.address,displayInfo:!0,isNFT:t.isNft,displayInfoClassName:"text-base font-semibold text-primary-dark-blue text-right sm:text-lg",addressInfoClassName:"rubik text-sm font-regular text-primary-gray",src:t.imageUrl,sizesClassNames:"w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]",isReversed:!0,jazziconSize:{defaultSize:32,breakpoints:[640],sizes:[40]}})]}),(0,i.jsx)("ul",{className:"flex flex-col justify-start gap-7",children:B?B.taker.collections.map((function(e,s){return(0,i.jsxs)("li",{className:"flex items-center justify-between",children:[(0,i.jsx)(w,{imgSrc:e.isCurrency?e.imageUrl:e.tokenImageURL,text:e.isCurrency?e.name:"#".concat(e.tokenId),collection:e.isCurrency?void 0:{name:e.name,imgSrc:e.imageUrl,statusVerification:e.statusVerification},amount:e.isCurrency||"ERC1155"===e.type?e.amount:void 0,type:e.type}),e.isCurrency?null:(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)("span",{className:"text-sm font-regular text-primary-dark-blue px-1 invisible md:visible lg:visible 2lg:visible",children:"View on"}),(0,i.jsx)("div",{className:"flex flex-col md:flex-row lg:flex-row xl:flex-row",children:Object.values((0,E.g)(H,e.collectionAddress?e.collectionAddress:"",e.tokenId?e.tokenId:"")).map((function(e,s){return e.link.length>0&&(0,i.jsx)("a",{href:e.link,target:"_blank",children:(0,i.jsx)("img",{src:e.logo,className:"inline-block ml-0 md:ml-4"})},s)}))})]})]},s)})):null})]})]})})})}},55008:function(e){e.exports={rotating:"TradeRow_rotating__FEQlp",rotate:"TradeRow_rotate__BmJAX",skeleton:"TradeRow_skeleton__IRM1I","skeleton-loading":"TradeRow_skeleton-loading__reB3z"}}}]);