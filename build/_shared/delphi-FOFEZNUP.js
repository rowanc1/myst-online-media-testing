import{c as g,i as s,j as o,k as c,m as l,p as d}from"/myst-online-media-testing/build/_shared/chunk-RMYRWJKG.js";var E=g((N,p)=>{s();o();c();d();l();function b(e){let t="exports register file shl array record property for mod while set ally label uses raise not stored class safecall var interface or private static exit index inherited to else stdcall override shr asm far resourcestring finalization packed virtual out and protected library do xorwrite goto near function end div overload object unit begin string on inline repeat until destructor write message program with read initialization except default nil if case cdecl in downto threadvar of try pascal const external constructor type public then implementation finally published procedure absolute reintroduce operator as is abstract alias assembler bitpacked break continue cppdecl cvar enumerator experimental platform deprecated unimplemented dynamic export far16 forward generic helper implements interrupt iochecks local name nodefault noreturn nostackframe oldfpccall otherwise saveregisters softfloat specialize strict unaligned varargs ",r=[e.C_LINE_COMMENT_MODE,e.COMMENT(/\{/,/\}/,{relevance:0}),e.COMMENT(/\(\*/,/\*\)/,{relevance:10})],a={className:"meta",variants:[{begin:/\{\$/,end:/\}/},{begin:/\(\*\$/,end:/\*\)/}]},n={className:"string",begin:/'/,end:/'/,contains:[{begin:/''/}]},u={className:"number",relevance:0,variants:[{begin:"\\$[0-9A-Fa-f]+"},{begin:"&[0-7]+"},{begin:"%[01]+"}]},i={className:"string",begin:/(#\d+)+/},m={begin:e.IDENT_RE+"\\s*=\\s*class\\s*\\(",returnBegin:!0,contains:[e.TITLE_MODE]},f={className:"function",beginKeywords:"function constructor destructor procedure",end:/[:;]/,keywords:"function constructor|10 destructor|10 procedure|10",contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,keywords:t,contains:[n,i,a].concat(r)},a].concat(r)};return{name:"Delphi",aliases:["dpr","dfm","pas","pascal","freepascal","lazarus","lpr","lfm"],case_insensitive:!0,keywords:t,illegal:/"|\$[G-Zg-z]|\/\*|<\/|\|/,contains:[n,i,e.NUMBER_MODE,u,m,f,a].concat(r)}}p.exports=b});export default E();
