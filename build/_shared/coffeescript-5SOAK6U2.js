import{c as R,i as c,j as l,k as E,m as d,p as u}from"/myst-online-media-testing/build/_shared/chunk-RMYRWJKG.js";var M=R((U,g)=>{c();l();E();u();d();var B=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],N=["true","false","null","undefined","NaN","Infinity"],m=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],p=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],O=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],T=["arguments","this","super","console","window","document","localStorage","module","global"],L=[].concat(O,T,m,p);function C(e){let S=["npm","print"],A=["yes","no","on","off"],I=["then","unless","until","loop","by","when","and","or","is","isnt","not"],_=["var","const","let","function","static"],y=b=>f=>!b.includes(f),r={keyword:B.concat(I).filter(y(_)),literal:N.concat(A),built_in:L.concat(S)},n="[A-Za-z$_][0-9A-Za-z$_]*",t={className:"subst",begin:/#\{/,end:/\}/,keywords:r},a=[e.BINARY_NUMBER_MODE,e.inherit(e.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,t]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t]}]},{className:"regexp",variants:[{begin:"///",end:"///",contains:[t,e.HASH_COMMENT_MODE]},{begin:"//[gim]{0,3}(?=\\W)",relevance:0},{begin:/\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/}]},{begin:"@"+n},{subLanguage:"javascript",excludeBegin:!0,excludeEnd:!0,variants:[{begin:"```",end:"```"},{begin:"`",end:"`"}]}];t.contains=a;let i=e.inherit(e.TITLE_MODE,{begin:n}),o="(\\(.*\\)\\s*)?\\B[-=]>",s={className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:r,contains:["self"].concat(a)}]};return{name:"CoffeeScript",aliases:["coffee","cson","iced"],keywords:r,illegal:/\/\*/,contains:a.concat([e.COMMENT("###","###"),e.HASH_COMMENT_MODE,{className:"function",begin:"^\\s*"+n+"\\s*=\\s*"+o,end:"[-=]>",returnBegin:!0,contains:[i,s]},{begin:/[:\(,=]\s*/,relevance:0,contains:[{className:"function",begin:o,end:"[-=]>",returnBegin:!0,contains:[s]}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[i]},i]},{begin:n+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}g.exports=C});export default M();
