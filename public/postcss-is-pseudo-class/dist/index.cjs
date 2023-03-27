"use strict";var e=require("postcss-selector-parser"),o=require("@csstools/selector-specificity");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var s=n(e),t=n(o);function d(e){e&&e.nodes&&e.nodes.sort(((e,o)=>"selector"===e.type&&"selector"===o.type&&e.nodes.length&&o.nodes.length?r(e.nodes[0],e.nodes[0].type)-r(o.nodes[0],o.nodes[0].type):"selector"===e.type&&e.nodes.length?r(e.nodes[0],e.nodes[0].type)-r(o,o.type):"selector"===o.type&&o.nodes.length?r(e,e.type)-r(o.nodes[0],o.nodes[0].type):r(e,e.type)-r(o,o.type)))}function r(e,o){return s.default.isPseudoElement(e)?l.pseudoElement:l[o]}const l={universal:0,tag:1,id:2,class:3,attribute:4,selector:5,pseudo:6,pseudoElement:7,string:8,root:9,comment:10};function c(e,o,n){return e.flatMap((e=>{if(-1===e.indexOf(":-csstools-matches")&&-1===e.indexOf(":is"))return e;const t=s.default().astSync(e);return t.walkPseudos((e=>{if(":is"===e.value&&e.nodes&&e.nodes.length&&"selector"===e.nodes[0].type&&0===e.nodes[0].nodes.length)return e.value=":not",void e.nodes[0].append(s.default.universal());if(":-csstools-matches"===e.value)if(!e.nodes||e.nodes.length){if(1===e.nodes.length&&"selector"===e.nodes[0].type){if(1===e.nodes[0].nodes.length)return void e.replaceWith(e.nodes[0].nodes[0]);if(!e.nodes[0].some((e=>"combinator"===e.type)))return void e.replaceWith(...e.nodes[0].nodes)}1!==t.nodes.length||"selector"!==t.nodes[0].type||1!==t.nodes[0].nodes.length||t.nodes[0].nodes[0]!==e?function(e){return!(!e||!e.nodes||"selector"!==e.type||3!==e.nodes.length||!e.nodes[0]||"pseudo"!==e.nodes[0].type||":-csstools-matches"!==e.nodes[0].value||!e.nodes[1]||"combinator"!==e.nodes[1].type||"+"!==e.nodes[1].value||!e.nodes[2]||"pseudo"!==e.nodes[2].type||":-csstools-matches"!==e.nodes[2].value||!e.nodes[0].nodes||1!==e.nodes[0].nodes.length||"selector"!==e.nodes[0].nodes[0].type||!e.nodes[0].nodes[0].nodes||3!==e.nodes[0].nodes[0].nodes.length||!e.nodes[0].nodes[0].nodes||"combinator"!==e.nodes[0].nodes[0].nodes[1].type||">"!==e.nodes[0].nodes[0].nodes[1].value||!e.nodes[2].nodes||1!==e.nodes[2].nodes.length||"selector"!==e.nodes[2].nodes[0].type||!e.nodes[2].nodes[0].nodes||3!==e.nodes[2].nodes[0].nodes.length||!e.nodes[2].nodes[0].nodes||"combinator"!==e.nodes[2].nodes[0].nodes[1].type||">"!==e.nodes[2].nodes[0].nodes[1].value||(e.nodes[0].nodes[0].insertAfter(e.nodes[0].nodes[0].nodes[0],e.nodes[2].nodes[0].nodes[0].clone()),e.nodes[2].nodes[0].nodes[1].remove(),e.nodes[2].nodes[0].nodes[0].remove(),e.nodes[0].replaceWith(e.nodes[0].nodes[0]),e.nodes[2].replaceWith(e.nodes[2].nodes[0]),0))}(e.parent)||function(e){if(!e||!e.nodes)return!1;if("selector"!==e.type)return!1;if(2!==e.nodes.length)return!1;let o,n;return e.nodes[0]&&"pseudo"===e.nodes[0].type&&":-csstools-matches"===e.nodes[0].value?(o=0,n=1):e.nodes[1]&&"pseudo"===e.nodes[1].type&&":-csstools-matches"===e.nodes[1].value&&(o=1,n=0),!(!o||!e.nodes[n]||"selector"===e.nodes[n].type&&e.nodes[n].some((e=>"combinator"===e.type))||(e.nodes[o].append(e.nodes[n].clone()),e.nodes[o].replaceWith(...e.nodes[o].nodes),e.nodes[n].remove(),0))}(e.parent)||("warning"===o.onComplexSelector&&n(),e.value=":is"):e.replaceWith(...e.nodes[0].nodes)}else e.remove()})),t.walk((e=>{"selector"===e.type&&"nodes"in e&&1===e.nodes.length&&"selector"===e.nodes[0].type&&e.replaceWith(e.nodes[0])})),t.walk((e=>{"nodes"in e&&function(e){if(!e||!e.nodes)return;let o=[];const n=[...e.nodes];for(let e=0;e<n.length+1;e++){const t=n[e];if(t&&"combinator"!==t.type)o.push(t);else{if(o.length>1){const e=s.default.selector({value:""});o[0].replaceWith(e),o.slice(1).forEach((e=>{e.remove()})),o.forEach((o=>{e.append(o)})),d(e),e.replaceWith(...e.nodes)}o=[]}}}(e)})),t.toString()})).filter((e=>!!e))}function i(e,o,n=0){const d=":not(#"+o.specificityMatchingName+")",r=":not(."+o.specificityMatchingName+")",l=":not("+o.specificityMatchingName+")";return e.flatMap((e=>{if(-1===e.indexOf(":is"))return e;let c=!1;const a=[];if(s.default().astSync(e).walkPseudos((e=>{if(":is"!==e.value||!e.nodes||!e.nodes.length)return;if("selector"===e.nodes[0].type&&0===e.nodes[0].nodes.length)return;let o=e.parent;for(;o;){if(":is"===o.value&&"pseudo"===o.type)return void(c=!0);o=o.parent}const n=t.default(e),s=e.sourceIndex,i=s+e.toString().length,p=[];e.nodes.forEach((e=>{const o={start:s,end:i,option:""},c=t.default(e);let a=e.toString().trim();const u=Math.max(0,n.a-c.a),f=Math.max(0,n.b-c.b),h=Math.max(0,n.c-c.c);for(let e=0;e<u;e++)a+=d;for(let e=0;e<f;e++)a+=r;for(let e=0;e<h;e++)a+=l;o.option=a,p.push(o)})),a.push(p)})),!a.length)return[e];let p=[];return function(...e){const o=[],n=e.length-1;function s(t,d){for(let r=0,l=e[d].length;r<l;r++){const l=t.slice(0);l.push(e[d][r]),d==n?o.push(l):s(l,d+1)}}return s([],0),o}(...a).forEach((o=>{let n="";for(let t=0;t<o.length;t++){var s;const d=o[t];n+=e.substring((null==(s=o[t-1])?void 0:s.end)||0,o[t].start),n+=":-csstools-matches("+d.option+")",t===o.length-1&&(n+=e.substring(o[t].end))}p.push(n)})),c&&n<10&&(p=i(p,o,n+1)),p})).filter((e=>!!e))}const a=e=>{const o={specificityMatchingName:"does-not-exist",...e||{}};return{postcssPlugin:"postcss-is-pseudo-class",Rule(e,{result:n}){if(!e.selector)return;if(-1===e.selector.indexOf(":is"))return;let s=!1;const t=()=>{"warning"===o.onComplexSelector&&(s||(s=!0,e.warn(n,`Complex selectors in '${e.selector}' can not be transformed to an equivalent selector without ':is()'.`)))};try{let n=!1;const s=[],d=c(i(e.selectors,{specificityMatchingName:o.specificityMatchingName}),{onComplexSelector:o.onComplexSelector},t);if(Array.from(new Set(d)).forEach((o=>{e.selectors.indexOf(o)>-1?s.push(o):(e.cloneBefore({selector:o}),n=!0)})),s.length&&n&&e.cloneBefore({selectors:s}),!o.preserve){if(!n)return;e.remove()}}catch(o){if(o.message.indexOf("call stack size exceeded")>-1)throw o;e.warn(n,`Failed to parse selector "${e.selector}"`)}}}};a.postcss=!0,module.exports=a;
