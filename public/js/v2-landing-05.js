// ══════════════════════════════════════════════════════════════════════
// V2 LANDING  —  script chunk #5/6
// Extracted verbatim from aidi_merged.html — do not modify structurally.
// Each chunk was its own <script> tag in the source and must remain so
// (otherwise same-named top-level declarations across chunks collide).
// ══════════════════════════════════════════════════════════════════════
(function(){
var KB=[
{p:['what is aidi','what does aidi','tell me about aidi','who are you','what can aidi','how does aidi work','about aidi'],a:'Aidi is your AI-powered investment office. We bring together stocks, crypto, gold, U.S. real estate, treasury bills, and private markets in one dashboard, guided by me, Elia AI. Think of it as a family-office-grade wealth platform without the million-dollar minimum.'},
{p:['stock','etf','equities','us market','public market','share','equity'],a:'Through Aidi you can invest in thousands of U.S. stocks and ETFs. I track your positions, monitor sector concentration, and surface alerts when your allocation shifts — giving you the context to decide what to do next. No minimum to start.'},
{p:['crypto','bitcoin','ethereum','btc','eth','digital asset'],a:'Aidi gives you institutional-grade crypto access secured by BitGo custody with $250M+ in insurance coverage. I keep your crypto exposure in check relative to your overall portfolio and flag it when it crosses your risk threshold.'},
{p:['gold','precious metal','silver','inflation hedge','inflation'],a:'Through our APMEX Citadel partnership you can own physical vaulted gold, not an ETF, actual allocated metal. I surface macro context and show you how gold has historically behaved in different market conditions — so you can explore whether it fits your situation.'},
{p:['treasury','t-bill','tbill','cash','yield','interest rate','savings account','idle cash','money market'],a:'Your idle cash deserves more than 0.2%. Aidi connects you to U.S. T-Bills currently yielding 5.1%+ via Betterment. I will show you how different treasury ladder scenarios compare based on your cashflow profile — so you can explore the options that suit your liquidity needs.'},
{p:['real estate','property','airbnb','rental','passive income','rent'],a:'Aidi offers fractional ownership of U.S. Airbnb and managed rental properties through SPV structures from as little as $1,000. Average annual yields of 7 to 9%. No landlord headaches, no U.S. residency required.'},
{p:['private market','venture','startup','series','seed','private equity','vc'],a:'Aidi provides curated access to Seed through Series B startup investments. Every deal is vetted by our team. I will show you how different allocation levels compare based on your risk profile and liquidity needs — educational scenarios to help you think through your options.'},
{p:['entity','llc','trust','holding','structure','family office','tax structure'],a:'Aidi helps you set up investment LLCs, c-corp, and multi-entity holding structures, the same infrastructure wealthy families use. I surface tax optimization opportunities and flag structural inefficiencies in your setup.'},
{p:['portfolio','dashboard','net worth','all assets','overview','unified','track everything'],a:'The Aidi Portfolio Dashboard aggregates every asset you own, stocks, crypto, gold, real estate, treasury, private, into one AI-analyzed real-time view of your net worth. I generate daily insights and alert you to what needs attention.'},
{p:['elia','ai','intelligence','smart','recommendation','advice','guidance','how does elia'],a:'I am Elia, your intelligence partner behind every Aidi portfolio. I analyze allocation, risk exposure, currency concentration, and opportunity gaps across all your assets simultaneously. Think of me as your always-on portfolio intelligence partner — surfacing insights, context, and scenarios to help you stay informed.'},
{p:['professional','tech worker','engineer','salary','high earn'],a:'For high-earning professionals, Aidi is a game-changer. I typically find that tech workers have $20k to $50k in idle cash, no gold exposure, and concentrated equity risk. Aidi helps you visualise what a more diversified portfolio structure could look like based on your situation.'},
{p:['family','diaspora','naira','currency','cross border','global','nigeria','africa','international','abroad'],a:'For diaspora families and global professionals, Aidi is currency protection. I help you move savings into USD T-Bills, vaulted gold, and U.S. real estate so local currency devaluation no longer erodes your wealth.'},
{p:['founder','executive','startup equity','concentrated','diversify equity','cap table'],a:'Founders often have 80%+ of their net worth in illiquid equity. Aidi helps you build diversification alongside your startup with LLCs, liquid ETFs, T-Bills, and co-investment deals, without touching your cap table.'},
{p:['how much','minimum','cost','price','fee','pricing','plan','subscription','free'],a:'Aidi has no investment minimums on most products. Real estate starts from $1,000. Private deals from $500. Our platform fee structure is transparent with no hidden charges. You can start a free account and explore before committing any capital.'},
{p:['safe','secure','security','insured','fdic','custody','regulated','protected'],a:'Security is core to Aidi. Your crypto is BitGo-custodied with $250M+ insurance. USD accounts are FDIC-insured via Column N.A. Gold is fully allocated and vaulted with APMEX Citadel. All data is encrypted end-to-end.'},
{p:['get started','sign up','join','open account','register','how do i start','create account'],a:'Getting started is free and takes less than 5 minutes. Click "Get started" in the top right to create your account. Once inside, I will walk you through connecting your accounts and building your first investment strategy.'},
{p:['hello','hi','hey','good morning','good evening','greetings','sup'],a:'Hey there! I am Elia, your AI investment guide at Aidi. I can tell you about our investment products, how we help different types of investors, or answer anything about building wealth with Aidi. What is on your mind?'},
{p:['thank','thanks','awesome','great','perfect','helpful','cool','amazing'],a:'Happy to help! Is there anything else you would like to know about Aidi? Whether it is a specific product, how we handle a particular asset class, or who Aidi is built for, just ask.'},
];

var SUGGESTIONS=['What is Aidi?','How does Treasury yield work?','Tell me about real estate','Is my money safe?','How do I get started?','What about crypto custody?'];
var FALLBACK='Great question! Aidi is built to help ambitious wealth builders grow across stocks, crypto, gold, real estate, treasury, and private markets, all guided by me, Elia AI. Could you tell me a bit more about what you are looking for? I can give a much more specific answer.';
var chatOpen=false, greeted=false;

function getAnswer(t){
  t=t.toLowerCase();
  for(var i=0;i<KB.length;i++){
    if(KB[i].p.some(function(p){return t.indexOf(p)>=0}))return KB[i].a;
  }
  return FALLBACK;
}
function scrollBot(){var e=document.getElementById('fvMessages');if(e)e.scrollTop=e.scrollHeight;}
function addMsg(text,role){
  var msgs=document.getElementById('fvMessages');
  var d=document.createElement('div');
  d.className='fv-msg '+role;
  if(role==='bot') d.innerHTML='<div class="fv-msg-avatar">&#10022;</div><div class="fv-bubble">'+text+'</div>';
  else d.innerHTML='<div class="fv-bubble">'+text+'</div>';
  msgs.appendChild(d);scrollBot();
}
function showTyping(){
  var msgs=document.getElementById('fvMessages');
  var d=document.createElement('div');
  d.className='fv-msg bot';d.id='fvTyping';
  d.innerHTML='<div class="fv-msg-avatar">&#10022;</div><div class="fv-bubble fv-typing"><span></span><span></span><span></span></div>';
  msgs.appendChild(d);scrollBot();
}
function removeTyping(){var e=document.getElementById('fvTyping');if(e)e.remove();}
function botReply(text){
  showTyping();
  setTimeout(function(){removeTyping();addMsg(text,'bot');},900+Math.random()*500);
}
function renderChips(chips){
  var el=document.getElementById('fvSuggestions');el.innerHTML='';
  chips.forEach(function(c){
    var b=document.createElement('button');
    b.className='fv-chip';b.textContent=c;
    b.onclick=function(e){e.stopPropagation();fvSendText(c);};
    el.appendChild(b);
  });
}

window.openEliaChat=function(){
  chatOpen=true;
  document.getElementById('eliaChat').classList.add('open');
  document.getElementById('eliaBtn').style.opacity='0.6';
  if(!greeted){
    greeted=true;
    setTimeout(function(){
      addMsg('Hey! I am Elia, Aidi\u2019s AI investment guide. Ask me about our products, how we protect and grow wealth, or anything about what Aidi offers. What would you like to know?','bot');
      renderChips(SUGGESTIONS);
    },350);
  }
  setTimeout(function(){var i=document.getElementById('fvInput');if(i)i.focus();},400);
};
window.closeEliaChat=function(){
  chatOpen=false;
  document.getElementById('eliaChat').classList.remove('open');
  document.getElementById('eliaBtn').style.opacity='1';
};
window.fvSend=function(){
  var input=document.getElementById('fvInput');
  var text=input.value.trim();if(!text)return;
  input.value='';fvSendText(text);
};
window.fvSendText=function(text){
  document.getElementById('fvSuggestions').innerHTML='';
  addMsg(text,'user');
  var answer=getAnswer(text);
  botReply(answer);
  setTimeout(function(){
    var fu=SUGGESTIONS.filter(function(s){return s.toLowerCase()!==text.toLowerCase();}).slice(0,3);
    renderChips(fu);
  },1800);
};
document.addEventListener('click',function(e){
  if(!chatOpen)return;
  var chat=document.getElementById('eliaChat');
  var btn=document.getElementById('eliaBtn');
  if(chat&&btn&&!chat.contains(e.target)&&!btn.contains(e.target))window.closeEliaChat();
});
})();
