var t={d:(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n)},n={};t.d(n,{ZP:()=>P,pE:()=>x,P9:()=>w,He:()=>y,o:()=>v,Wn:()=>b,_Z:()=>N,PG:()=>M});const r=Math.random,e=function t(n){function r(t,r){var e,i;return t=null==t?0:+t,r=null==r?1:+r,function(){var o;if(null!=e)o=e,e=null;else do{e=2*n()-1,o=2*n()-1,i=e*e+o*o}while(!i||i>1);return t+r*o*Math.sqrt(-2*Math.log(i)/i)}}return r.source=t,r}(r),i=function t(n){function r(t,r){return t=null==t?0:+t,r=null==r?1:+r,1===arguments.length?(r=t,t=0):r-=t,function(){return n()*r+t}}return r.source=t,r}(r);function o(t,n){if((r=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var r,e=t.slice(0,r);return[e.length>1?e[0]+e.slice(2):e,+t.slice(r+1)]}var a,s=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function l(t){if(!(n=s.exec(t)))throw new Error("invalid format: "+t);var n;return new u({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function u(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function c(t,n){var r=o(t,n);if(!r)return t+"";var e=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+e:e.length>i+1?e.slice(0,i+1)+"."+e.slice(i+1):e+new Array(i-e.length+2).join("0")}l.prototype=u.prototype,u.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};const h={"%":(t,n)=>(100*t).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>c(100*t,n),r:c,s:function(t,n){var r=o(t,n);if(!r)return t+"";var e=r[0],i=r[1],s=i-(a=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,l=e.length;return s===l?e:s>l?e+new Array(s-l+1).join("0"):s>0?e.slice(0,s)+"."+e.slice(s):"0."+new Array(1-s).join("0")+o(t,Math.max(0,n+s-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function f(t){return t}var m,d,g=Array.prototype.map,p=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function v(t,n){if(n in t.dataset)return t.dataset[n];throw"No dataset attribute: "+n}function y(t,n,r){return n in t.dataset?t.dataset[n]:r}function M(t){let n=parseFloat(t);if(isNaN(n))throw"Failed to cast value to float: {value}";return n}function b(t){let n=v(t,"uctDistrib"),r=null,o=null;if("normal"===n)o={mu:M(v(t,"uctMu")),sigma:M(v(t,"uctSigma"))},r=e(o.mu,o.sigma);else{if("uniform"!=n)throw"No support for distribution:  "+n;o={min:M(v(t,"uctMin")),max:M(v(t,"uctMax"))},r=i(o.min,o.max)}return{name:n,parameters:o,sample:r}}function w(t){let n=y(t,"uctFormat"," .2f");return d(n)}function x(t){return 1/M(y(t,"uctFps",5))*1e3}function N(t,n,r){return function(){t.innerHTML=r(n.sample())}}function P(){let t=document.getElementsByClassName("uncertaintext"),n=null;for(let r=0;r<t.length;r++){n=t[r];try{let t=b(n),r=w(n),e=x(n),i=N(n,t,r);i(),setInterval(i,e)}catch(t){console.log(t),n.innerHTML="[error]"}}}m=function(t){var n,r,e=void 0===t.grouping||void 0===t.thousands?f:(n=g.call(t.grouping,Number),r=t.thousands+"",function(t,e){for(var i=t.length,o=[],a=0,s=n[0],l=0;i>0&&s>0&&(l+s+1>e&&(s=Math.max(1,e-l)),o.push(t.substring(i-=s,i+s)),!((l+=s+1)>e));)s=n[a=(a+1)%n.length];return o.reverse().join(r)}),i=void 0===t.currency?"":t.currency[0]+"",s=void 0===t.currency?"":t.currency[1]+"",u=void 0===t.decimal?".":t.decimal+"",c=void 0===t.numerals?f:function(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}(g.call(t.numerals,String)),m=void 0===t.percent?"%":t.percent+"",d=void 0===t.minus?"−":t.minus+"",v=void 0===t.nan?"NaN":t.nan+"";function y(t){var n=(t=l(t)).fill,r=t.align,o=t.sign,f=t.symbol,g=t.zero,y=t.width,M=t.comma,b=t.precision,w=t.trim,x=t.type;"n"===x?(M=!0,x="g"):h[x]||(void 0===b&&(b=12),w=!0,x="g"),(g||"0"===n&&"="===r)&&(g=!0,n="0",r="=");var N="$"===f?i:"#"===f&&/[boxX]/.test(x)?"0"+x.toLowerCase():"",P="$"===f?s:/[%p]/.test(x)?m:"",_=h[x],S=/[defgprs%]/.test(x);function j(t){var i,s,l,h=N,f=P;if("c"===x)f=_(t)+f,t="";else{var m=(t=+t)<0||1/t<0;if(t=isNaN(t)?v:_(Math.abs(t),b),w&&(t=function(t){t:for(var n,r=t.length,e=1,i=-1;e<r;++e)switch(t[e]){case".":i=n=e;break;case"0":0===i&&(i=e),n=e;break;default:if(!+t[e])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),m&&0==+t&&"+"!==o&&(m=!1),h=(m?"("===o?o:d:"-"===o||"("===o?"":o)+h,f=("s"===x?p[8+a/3]:"")+f+(m&&"("===o?")":""),S)for(i=-1,s=t.length;++i<s;)if(48>(l=t.charCodeAt(i))||l>57){f=(46===l?u+t.slice(i+1):t.slice(i))+f,t=t.slice(0,i);break}}M&&!g&&(t=e(t,1/0));var j=h.length+t.length+f.length,k=j<y?new Array(y-j+1).join(n):"";switch(M&&g&&(t=e(k+t,k.length?y-f.length:1/0),k=""),r){case"<":t=h+t+f+k;break;case"=":t=h+k+t+f;break;case"^":t=k.slice(0,j=k.length>>1)+h+t+f+k.slice(j);break;default:t=k+h+t+f}return c(t)}return b=void 0===b?6:/[gprs]/.test(x)?Math.max(1,Math.min(21,b)):Math.max(0,Math.min(20,b)),j.toString=function(){return t+""},j}return{format:y,formatPrefix:function(t,n){var r,e=y(((t=l(t)).type="f",t)),i=3*Math.max(-8,Math.min(8,Math.floor((r=n,((r=o(Math.abs(r)))?r[1]:NaN)/3)))),a=Math.pow(10,-i),s=p[8+i/3];return function(t){return e(a*t)+s}}}}({thousands:",",grouping:[3],currency:["$",""]}),d=m.format,m.formatPrefix;var _=n.ZP,S=n.pE,j=n.P9,k=n.He,E=n.o,z=n.Wn,A=n._Z,F=n.PG;export{_ as default,S as get_delay_ms,j as get_formatter,k as get_optional_data,E as get_required_data,z as get_sampler,A as get_updater,F as strictly_float};