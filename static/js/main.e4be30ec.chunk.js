(this["webpackJsonpreact-testing"]=this["webpackJsonpreact-testing"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"question":"What was Tandem previous name?","incorrect":["Tandem","Burger Shack","Extraordinary Humans"],"correct":"Devmynd"},{"question":"In Shakespeare\'s play Julius Caesar, Caesar\'s last words were...","incorrect":["Iacta alea est!","Vidi, vini, vici","Aegri somnia vana"],"correct":"Et tu, Brute?"},{"question":"A group of tigers are referred to as:","incorrect":["Chowder","Pride","Destruction"],"correct":"Ambush"},{"question":"What is the top speed an average cat can travel?","incorrect":["42 mph","13 mph","9 mph"],"correct":"31 mph"},{"question":"A cat can jump to _____ times its own height:","incorrect":["3","9","7"],"correct":"5"},{"question":"What is the only letter that doesn\'t appear in a US state name?","incorrect":["M","Z","X"],"correct":"Q"},{"question":"What is the name for a cow-bison hybrid?","incorrect":["Cowson","Bicow","Mooson"],"correct":"Beefalo"},{"question":"What is the largest freshwater lake in the world?","incorrect":["Lake Baikal","Lake Michigan","Lake Victoria"],"correct":"Lake Superior"},{"question":"In a website address bar, what does WWW stand for?","incorrect":["Wild Wild West","War World Web"],"correct":"World Wide Web"},{"question":"In a game of bingo, what number is represented by the name two little ducks?","incorrect":["20","55","77"],"correct":"22"},{"question":"According to Greek mythology, who was the first woman on Earth?","incorrect":["Lilith","Eve","Hera"],"correct":"Pandora"},{"question":"In which European city would you find Orly airport?","incorrect":["London","Belgium","Munich"],"correct":"Paris"},{"question":"Where would you find the Sea of Tranquility?","incorrect":["California","Siberia","China"],"correct":"The Moon"},{"question":"Which artist painted \'Girl with a Pearl Earrin\'?","incorrect":["Van Gogh","Picasso","Da Vinci"],"correct":"Vermeer"},{"question":"What is the official name for the \'hashtag\' symbol?","incorrect":["Number sign","Hash Sign","Pound"],"correct":"Octothorpe"},{"question":"Not American at all, where is apple pie from?","incorrect":["Japan","Ethiopia","Canada"],"correct":"England"},{"question":"What is the national animal of Scotland?","incorrect":["Bear","Rabbit","Seal"],"correct":"Unicorn"},{"question":"Where in the world is the only place where Canada is *due south*","incorrect":["Alaska","Russia","Washington"],"correct":"Detroit"},{"question":"Approximately how many grapes go into a bottle of wine?","incorrect":["500","200","1000"],"correct":"700"},{"question":"How much does a US One Dollar Bill cost to make?","incorrect":["$0.25","$1","$5"],"correct":"$0.05"},{"question":"The Vatican bank has the only ATM in the world that allows users to do what?","incorrect":["Receive withdrawls in rosary beads","Vote for the Pope","Purchase indulgences"],"correct":"Perform transactions in Latin"}]')},function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),o=a(2),s=(a(11),a(1)),i=a(5),l="START_GAME",u="REPLAY_GAME",m="NEXT_QUESTION",h="SELECT_ANSWER",d="RUN_TIMER",p="SHOW_RESULT",f={newRound:[],questionNumber:1,gameStatus:"idle",answerIsCorrect:void 0,timeLeft:10},w=function(e,t){switch(t.type){case l:return Object(s.a)(Object(s.a)({},e),{},{newRound:t.payload,gameStatus:"ongoing"});case u:return Object(s.a)(Object(s.a)(Object(s.a)({},e),f),{},{newRound:t.payload,gameStatus:"idle"});case m:return Object(s.a)(Object(s.a)({},e),{},{questionNumber:t.payload,answerIsCorrect:void 0,timeLeft:10});case h:return Object(s.a)(Object(s.a)({},e),{},{answerIsCorrect:t.payload});case d:return Object(s.a)(Object(s.a)({},e),{},{timeLeft:e.timeLeft-2});case p:return Object(s.a)(Object(s.a)({},e),{},{gameStatus:"result"});default:return e}},E=function(e){return Math.floor(Math.random()*e)},b=function(e){for(var t=e||i,a=[],r=0;r<=30;r++)a.push(t[E(t.length)]);return Array.from(new Set(a)).slice(0,10)},g=function(e){var t=e.allOptions,a=e.correctOption,c=e.answerIsCorrect,o=e.dispatch,i=e.setShowResult,l=e.showResult,u=e.timeLeft,m=Object(r.useMemo)((function(){return b(t)}),[t]);return n.a.createElement("div",{className:"options"},m.map((function(e,t){return n.a.createElement("button",{key:e,onClick:function(){return function(e){e===a?(o({type:h,payload:!0}),i(Object(s.a)(Object(s.a)({},l),{},{result:l.result+1}))):o({type:h,payload:!1})}(e)},className:c&&e===a?"options__correct":"",disabled:u<1},n.a.createElement("span",null,e))})))},y=function(e){var t=e.dispatch,a=e.gameStatus,c=e.questionNumber,o=e.answerIsCorrect,i=e.correctOption,l=e.setShowResult,u=e.showResult,h=Object(r.useMemo)((function(){return E(4)}),[i]);return n.a.createElement("div",{className:"remark ".concat(void 0===o?"remark__hidden":"")},n.a.createElement("svg",{role:"",version:"1.1",viewBox:"0 0 91.714 61.373",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"m17.708 45.605 9.2181 5.5794-25.471 9.4607 15.768-8.7329z",fill:"#fff"}),n.a.createElement("g",{transform:"matrix(.92162 0 0 .91569 -2.9371 -10.988)",fill:"#fff"},n.a.createElement("path",{d:"m8.552 32.501c1.9338-4.4356 5.3737-8.1111 9.377-10.829 4.0033-2.7182 8.5601-4.5292 13.206-5.881 17.821-5.1847 37.796-3.5443 53.886 5.7052 4.1676 2.3957 8.1674 5.3903 10.592 9.541 1.7457 2.9885 2.5898 6.472 2.5683 9.933-0.02146 3.4609-0.89274 6.8958-2.3761 10.023-2.9667 6.2541-8.2792 11.154-14.184 14.766-13.29 8.1283-29.947 10.159-45.071 6.4243-8.962-2.2131-17.68-6.5583-23.486-13.735-2.9029-3.5884-5.0211-7.8449-5.8922-12.378-0.87117-4.5327-0.46476-9.3383 1.3798-13.569z",fill:"#fff"}))),n.a.createElement("div",{className:"remark__comments imposter"},n.a.createElement("p",null,o?v.correct[h]:"".concat(v.incorrect[h])),!o&&n.a.createElement("p",null,"The correct answer is ",n.a.createElement("span",{className:"color-tertiary-shade weight-bold"},i)),o&&n.a.createElement("p",null,"Absolutely Correct!")),c<10?n.a.createElement("button",{onClick:function(){"idle"!==a&&c<10&&t({type:m,payload:c+1})}},"Next Question"):n.a.createElement("button",{onClick:function(){l(Object(s.a)(Object(s.a)({},u),{},{isResultPage:!0}))}},"View Result"))},v={correct:["You beautiful Genius!","Einstein would be proud of you!","You're almost smarter than me!","You deserve an electronic kiss!"],incorrect:["I think I overestimated your IQ!","How could you fail that!","Shamefully Wrong!","I knew this even without a brain"]},O=function(e){var t=e.answerIsCorrect,a=e.dispatch,c=e.timeLeft,o=Object(r.useCallback)((function(){0!==c&&void 0===t&&setTimeout((function(){a({type:d})}),2e3)}),[a,c,t]);return Object(r.useEffect)((function(){void 0===t&&(0!==c?o():a({type:h,payload:!1}))}),[c,o,a,t]),n.a.createElement("div",{className:"timer"},n.a.createElement("svg",{version:"1.1",className:"timer__svg",viewBox:"0 0 300 300",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("g",{fill:"#fff",strokeLinecap:"round",strokeWidth:"25"},n.a.createElement("circle",{cx:"149.72",cy:"153.06",r:"135.25",stroke:"rgb(9, 94, 67)"}),n.a.createElement("path",{d:"m284.97 153.06a135.25 135.25 0 0 1-135.25 135.25 135.25 135.25 0 0 1-135.25-135.25 135.25 135.25 0 0 1 135.25-135.25 135.25 135.25 0 0 1 135.25 135.25z",stroke:0!==c?"#1af6b3ff":"#e31227fc",strokeDasharray:"".concat(c/10*849.37-.1," ").concat(849.37)}))),n.a.createElement("span",{className:"timer__label | font-base ".concat(0===c?"color-warning":"color-tertiary-shade")},0!==c?c:"Time Up!"))},k=function(e){var t=e.result,a=e.dispatch;return n.a.createElement("div",{className:"result center"},n.a.createElement("ul",{className:"result__list"},n.a.createElement("h1",null,"Your Score: ",t,"/10"),n.a.createElement("li",null,"Incorrect: ","".concat(10-t)),n.a.createElement("li",null,"Correct: ",t)),n.a.createElement("button",{onClick:function(){a({type:u,payload:b()})}},"New Round"))},S=function(e){var t=e.newRound,a=e.questionNumber,c=e.gameStatus,s=e.answerIsCorrect,i=e.timeLeft,l=e.dispatch,u=Object(r.useState)({result:0,isResultPage:!1}),m=Object(o.a)(u,2),h=m[0],d=m[1],p=t[a-1],f=p.incorrect,w=p.correct,E=f.concat(w);return n.a.createElement(n.a.Fragment,null,h.isResultPage?n.a.createElement(k,{result:h.result,dispatch:l}):n.a.createElement("section",{className:"question | flow"},n.a.createElement("div",{className:"question__header | splitter"},n.a.createElement("h2",{className:"center"},"Question ".concat(a,"/").concat(t.length)),n.a.createElement(O,{answerIsCorrect:s,timeLeft:i,dispatch:l})),n.a.createElement("div",{className:"question__main"},n.a.createElement("svg",{width:"366.86",height:"245.49",version:"1.1",viewBox:"0 0 91.714 61.373",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("g",{fill:"#fff"},n.a.createElement("g",{transform:"matrix(.92162 0 0 .91569 -2.9371 -10.988)"},n.a.createElement("path",{d:"m8.552 32.501c1.9338-4.4356 5.3737-8.1111 9.377-10.829 4.0033-2.7182 8.5601-4.5292 13.206-5.881 17.821-5.1847 37.796-3.5443 53.886 5.7052 4.1676 2.3957 8.1674 5.3903 10.592 9.541 1.7457 2.9885 2.5898 6.472 2.5683 9.933-0.02146 3.4609-0.89274 6.8958-2.3761 10.023-2.9667 6.2541-8.2792 11.154-14.184 14.766-13.29 8.1283-29.947 10.159-45.071 6.4243-8.962-2.2131-17.68-6.5583-23.486-13.735-2.9029-3.5884-5.0211-7.8449-5.8922-12.378-0.87117-4.5327-0.46476-9.3383 1.3798-13.569z",fill:"#fff"})),n.a.createElement("ellipse",{cx:"76.883",cy:"52.245",rx:"5.2077",ry:"4.9838",strokeLinecap:"round",strokeWidth:"7.1216"}),n.a.createElement("ellipse",{cx:"84.947",cy:"58.405",rx:"3.4158",ry:"2.8559",strokeLinecap:"round",strokeWidth:"4.3661"}))),n.a.createElement("p",{className:"imposter | color-tertiary-shade"},p.question)),n.a.createElement(g,{allOptions:E,correctOption:w,dispatch:l,timeLeft:i,answerIsCorrect:s,setShowResult:d,showResult:h}),n.a.createElement(y,{dispatch:l,gameStatus:c,questionNumber:a,answerIsCorrect:s,correctOption:w,setShowResult:d,showResult:h})))},N=function(e){var t=e.dispatch,a=Object(r.useState)(!1),c=Object(o.a)(a,2),s=c[0],i=c[1],u=Object(r.useState)(!1),m=Object(o.a)(u,2),h=m[0],d=m[1];return n.a.createElement("section",{className:"home"},n.a.createElement("header",null,n.a.createElement("h1",null,"Tandem Trivia")),n.a.createElement("div",{className:"rules | gap-top-500"},n.a.createElement("h2",null,"Game Rules"),n.a.createElement("div",{className:"gap-top-400"},n.a.createElement("ul",{className:"rules__list | flow"},n.a.createElement("li",null,"A Round has Ten(10) Random questions."),n.a.createElement("li",null,"Each correct answer equals One(1) point."),n.a.createElement("li",null,"Each question has a Time Limit of Ten(seconds)."),n.a.createElement("li",{className:"color-neutral"},"!--Answers SHUFFLE randomly every two seconds, so be CAREFULL and QUICK when selecting--!")))),n.a.createElement("div",{className:"gap-top-500"},n.a.createElement("label",{htmlFor:"rulesCheck"},n.a.createElement("input",{id:"rulesCheck",type:"checkbox",value:"rulesRead",onClick:function(){i(!s),d(!1)}}),n.a.createElement("span",null,"I'm Ready!"))),n.a.createElement("button",{className:"center | gap-top-500",onClick:function(){s?t({type:l,payload:b()}):d(!0)}},"Start Game"),h&&n.a.createElement("p",{className:"center"},"Click the checkbox"))},q=function(){var e=Object(r.useReducer)(w,f),t=Object(o.a)(e,2),a=t[0],c=t[1],s=a.gameStatus;return n.a.createElement("main",null,"idle"===s?n.a.createElement(N,{gameStatus:s,dispatch:c}):n.a.createElement(S,Object.assign({},a,{dispatch:c})))};Object(c.render)(n.a.createElement(q,null),document.querySelector("#root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.e4be30ec.chunk.js.map