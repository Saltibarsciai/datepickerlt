!function(t){"function"==typeof define&&define.amd?define(t):t()}((function(){"use strict";function t(t,e){return(t=new Date(t)).setDate(e),t.setHours(23),t}var e=function(e,a){var n,r=new Date(e),d=new Date(a);e=t(e,31),a=t(a,31);for(var o=[];e<=a;)31!=e.getDate()?((n=t(e,0))>=r&&n<=d&&o.push(n),e=t(e,31)):((n=new Date(e))>=r&&n<=d&&o.push(n),e.setMonth(e.getMonth()+1));for(var u,l,y="",D=[{shortDay:"Mon",fullDay:"Monday"},{shortDay:"Tue",fullDay:"Tuesday"},{shortDay:"Wed",fullDay:"Wednesday"},{shortDay:"Thu",fullDay:"Thursday"},{shortDay:"Fri",fullDay:"Friday"},{shortDay:"Sat",fullDay:"Saturday"},{shortDay:"Sun",fullDay:"Sunday"}],f=0;f<o.length;f++){u=o[f],l=new Date(o[f].getFullYear(),o[f].getMonth(),1),y+="<div id='calenderTable_'"+(f+1)+">",y+="<h2>"+l.toString().split(" ")[1]+"-"+l.getFullYear()+"</h2>",y+="<table>",y+="<thead>",D.map((function(t){y+="<th>"+t.fullDay+"</th>"})),y+="</thead>",y+="<tbody>";for(var h=1,i=void 0;h<=u.getDate();){y+="<tr>";for(var s=0;s<7;s++)i=h<10?"0"+h:h,1==h?l.toString().split(" ")[0]==D[s].shortDay?(y+="<td>"+i+"</td>",h++):y+="<td></td>":h>u.getDate()?y+="<td></td>":(y+="<td>"+i+"</td>",h++);y+="</tr>"}y+="</tbody>",y+="</table>",y+="</div>"}return y}("2020/01/01","2021/01/01");document.getElementById("calendar").innerHTML=e}));
//# sourceMappingURL=bundle.umd.js.map
