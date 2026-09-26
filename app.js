const TRIP = {
  start:'2026-11-05', end:'2026-11-09',
  days:[
    {date:'2026-11-05',label:'DAY 1',title:'成田抵達・自駕前往箱根',subtitle:'桃園 → 成田 → 海螢火蟲 → 小田原 → 箱根',page:7,routePage:8,image:'https://pca.jp/p-tips/upload/assets/2025030514395139.jpg',events:[
      ['04:30','桃園機場 T1','集合',null],['06:50','Scoot TR898','TPE → NRT',null],['10:55','成田國際機場 T1','抵達','成田国際空港 第1ターミナル'],['','NIPPON Rent-A-Car','取車','NIPPON Rent-A-Car 成田空港',null,'https://maps.app.goo.gl/98Tu9TR8cLVwSQo38?g_st=il'],['','海螢火蟲 PA','午餐・休息','海ほたるPA'],['','MaxValu 小田原荻窪店','採買','マックスバリュ小田原荻窪店'],['','Noel Hakone Gensen','入住箱根民宿','Noel Hakone Gensen']
    ]},
    {date:'2026-11-06',label:'DAY 2',title:'富士五湖與楓葉自駕遊',subtitle:'山中湖・忍野八海・新倉山・御殿場',page:12,routePage:13,extraPage:14,image:'assets/hero/day2.webp',events:[
      ['上午','箱根民宿','出發','Noel Hakone Gensen'],['','山中湖','富士山景觀','山中湖',null,'https://maps.app.goo.gl/3DzmMkC4di7x6kMp9'],['','THE PARK','山中湖周邊停留','THE PARK 山中湖'],['','忍野八海','散策','忍野八海'],['','新倉山淺間公園','富士山經典景點','新倉山浅間公園'],['','御殿場 Premium Outlets','購物','御殿場プレミアム・アウトレット'],['晚間','箱根民宿','返回住宿','Noel Hakone Gensen']
    ]},
    {date:'2026-11-07',label:'DAY 3',title:'箱根療癒・前導東京',subtitle:'箱根散策 → 小田原還車 → 赤坂',page:15,routePage:16,extraPage:17,image:'assets/hero/day3.webp',events:[
      ['10:00','箱根民宿','退房','Noel Hakone Gensen'],['','箱根雕刻之森美術館','參觀','彫刻の森美術館'],['','箱根空中纜車','移動／景觀・早雲車站','箱根ロープウェイ',null,'https://maps.app.goo.gl/WbW4rSE7dtd8JuQq8'],['','蘆之湖．桃源台','散策','桃源台駅',null,'https://maps.app.goo.gl/myH3wgkBqD4wp1H88'],['','箱根神社','參拜','箱根神社'],['15:00','小田原還車','還車','Nippon Rent-a-car 小田原',null,'https://maps.app.goo.gl/UxHBzcVioSe4v5YR9'],['','小田原車站','搭車前往東京','小田原駅'],['晚間','OMO3 東京赤坂','入住','OMO3 東京赤坂 by 星野リゾート']
    ]},
    {date:'2026-11-08',label:'DAY 4',title:'東京・自由漫遊',subtitle:'經典景點自由安排',page:21,routePage:22,extraPages:[23,24],image:'assets/hero/day4.webp',events:[
      ['彈性','赤坂周邊散步','日枝神社・紀尾井町・弁慶橋・豐川稻荷東京別院',null,'akasaka'],['彈性','東京經典景點','淺草寺・晴空塔・皇居外苑・東京車站等，依當天安排為準',null,'spots'],['彈性','其他候選','新宿・築地・上野・麻布台之丘・東京鐵塔・明治神宮・澀谷・銀座',null,'spots']
    ]},
    {date:'2026-11-09',label:'DAY 5',title:'東京最後採買・返回台灣',subtitle:'退房 → 採買 → 成田 → 桃園',page:25,routePage:26,image:'assets/hero/day5.webp',events:[
      ['11:00','OMO3 東京赤坂','11:00 退房','OMO3 東京赤坂 by 星野リゾート'],['11:00–16:00','東京自由活動','最後採買',null],['16:00','前往成田機場','16:00 飯店集合・前往成田機場','成田国際空港 第1ターミナル'],['19:45','Scoot TR875','19:45 起飛｜NRT → TPE',null],['22:55','桃園機場 T1','22:55 抵達台灣',null]
    ]}
  ]
};

const ROOM1 = [
  ['臥室①','小優・忠明','assets/pages/p10.webp'],['臥室②','宇平・天全・蔡彤','assets/pages/p10.webp'],['臥室③','嗝妹・Linda・Mornie','assets/pages/p10.webp']
];
const ROOM2 = [
  ['臥室④','阿兔・Luffy','assets/pages/p11.webp'],['臥室⑤','Wendy・青芬・思惠','assets/pages/p11.webp'],['臥室⑥','老田・Ted・宣緯','assets/pages/p11.webp']
];
const OMO_ROOMS = [
  ['01','老田＋嗝妹｜一床房'],['02','Ted＋宣緯｜雙床房'],['03','Wendy＋蔡彤｜一床房'],['04','小優＋忠明｜雙床房'],['05','宇平＋天全｜雙床房'],['06','Linda＋Mornie｜雙床房'],['07','阿兔＋Luffy｜一床房'],['08','青芬＋思惠｜雙床房']
];

const pageMeta = [
  [1,'封面'],[2,'旅伴'],[3,'旅程總覽'],[4,'日本旅行注意事項'],[5,'航班資訊'],[6,'實用連結'],[7,'Day 1 行程'],[8,'Day 1 自駕導航'],[9,'車輛分配'],[10,'箱根民宿 1F'],[11,'箱根民宿 2F'],[12,'Day 2 行程'],[13,'Day 2 路線'],[14,'Day 2 Party Dress Code'],[15,'Day 3 箱根散策'],[16,'Day 3 還車前路線'],[17,'Day 3 搭車進東京'],[18,'OMO3 東京赤坂／房間分配'],[19,'小田原 → 飯店交通'],[20,'OMO3 周邊地圖'],[21,'赤坂散步景點'],[22,'東京經典景點（上）'],[23,'東京經典景點（續）'],[24,'東京經典景點（下）'],[25,'Day 5／返台'],[26,'東京必買指南'],[27,'日本旅行行李檢查表']
];

const AKASAKA_SPOTS = [
  {name:'日枝神社',sub:'山王さん・赤坂的代表神社',q:'日枝神社, 東京都千代田区永田町2丁目10番5号'},
  {name:'東京花園露台紀尾井町',sub:'庭園・商場・赤坂見附附近散步',q:'東京ガーデンテラス紀尾井町, 東京都千代田区紀尾井町1-2'},
  {name:'弁慶橋',sub:'弁慶濠旁・赤坂見附與紀尾井町之間',q:'弁慶橋, 東京都千代田区紀尾井町1',placeUrl:'https://maps.app.goo.gl/cfha38smyUQ2asJU8'},
  {name:'豐川稻荷東京別院',sub:'元赤坂・狐狸與七福神',q:'豊川稲荷東京別院, 東京都港区元赤坂1丁目4-7'}
];

const TOKYO_SPOTS = [
  {name:'淺草寺',sub:'淺草・雷門',q:'浅草寺, 東京都台東区浅草2丁目3-1'},
  {name:'東京晴空塔',sub:'押上・634 m 地標',q:'東京スカイツリー, 東京都墨田区押上1丁目1-2',placeUrl:'https://maps.app.goo.gl/2nkdf6BEEu1nY7CU6'},
  {name:'皇居外苑',sub:'二重橋・丸之內附近',q:'皇居外苑, 東京都千代田区皇居外苑1-1'},
  {name:'東京車站・丸之內',sub:'丸之內站舍',q:'JR東京駅 丸の内中央口, 東京都千代田区丸の内1丁目9-1'},
  {name:'新宿站東口',sub:'新宿・歌舞伎町方向',q:'JR新宿駅 東口, 東京都新宿区新宿3丁目38-1'},
  {name:'築地場外市場',sub:'海鮮・市場美食',q:'築地場外市場, 東京都中央区築地4丁目16-2'},
  {name:'上野恩賜公園',sub:'上野・公園散步',q:'上野恩賜公園, 東京都台東区上野公園'},
  {name:'麻布台之丘',sub:'建築・購物・展望',q:'麻布台ヒルズ, 東京都港区麻布台1丁目3-1'},
  {name:'東京鐵塔',sub:'芝公園經典夜景',q:'東京タワー, 東京都港区芝公園4丁目2-8'},
  {name:'明治神宮',sub:'原宿・森林神社',q:'明治神宮, 東京都渋谷区代々木神園町1-1'},
  {name:'澀谷十字路口',sub:'澀谷站前經典街景',q:'渋谷スクランブル交差点, 東京都渋谷区道玄坂2丁目1'},
  {name:'銀座四丁目',sub:'銀座和光・中央通',q:'銀座四丁目交差点, 東京都中央区銀座4丁目'},
  {name:'明治神宮外苑',sub:'銀杏並木・國立競技場周邊',q:'明治神宮外苑, 東京都新宿区霞ヶ丘町1-1'},
  {name:'東京大學・銀杏並木',sub:'本鄉校區・銀杏並木散步',q:'東大 銀杏並木, 東京都文京区本郷7丁目3-1',placeUrl:'https://maps.app.goo.gl/TUrfkgmWCMPzfaLi8'},
  {name:'代代木公園',sub:'原宿旁・大型都市公園',q:'代々木公園, 東京都渋谷区代々木神園町2-1'},
  {name:'高尾山',sub:'八王子・自然健行與秋景',q:'高尾山, 東京都八王子市高尾町'},
  {name:'新宿御苑',sub:'新宿・庭園與四季景觀',q:'新宿御苑, 東京都新宿区内藤町11'}
];

const $=(s,e=document)=>e.querySelector(s); const $$=(s,e=document)=>[...e.querySelectorAll(s)];
const view=$('#view'); let selectedDay=0, deferredPrompt;
let locationState={status:'idle',lat:null,lng:null,accuracy:null,error:null};
try{const x=JSON.parse(localStorage.getItem('tokyoHakoneLastLocation')||'null'); if(x?.lat) locationState=x;}catch{}

const mapUrl=q=>`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
const directionsUrl=q=>`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}&travelmode=driving`;
const fmt=d=>new Intl.DateTimeFormat('zh-TW',{month:'2-digit',day:'2-digit',weekday:'short'}).format(new Date(`${d}T12:00:00`));
function tripIndexToday(){const n=new Date(),iso=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}-${String(n.getDate()).padStart(2,'0')}`;const i=TRIP.days.findIndex(x=>x.date===iso);return i>=0?i:0} selectedDay=tripIndexToday();

function pageImg(n,cls='book-preview'){return `<button class="book-shot" data-page="${n}" aria-label="開啟第 ${n} 頁"><img class="${cls}" loading="lazy" src="assets/pages/p${String(n).padStart(2,'0')}.webp" alt="旅遊手冊第 ${n} 頁"></button>`}
function dayTabs(){return `<div class="day-tabs">${TRIP.days.map((d,i)=>`<button class="day-tab ${i===selectedDay?'active':''}" data-day="${i}">${d.label}<br><small>${d.date.slice(5).replace('-','/')}</small></button>`).join('')}</div>`}
function timeline(day){return `<div class="timeline no-times">${day.events.map(([time,title,sub,map,internal,placeUrl])=>`<div class="timeline-item"><div class="dotcol"><span class="dot"></span></div><div class="event">${time?`<div class="event-heading"><strong>${title}</strong><span class="event-time">${time}</span></div>`:`<strong>${title}</strong>`}<small>${sub||''}</small>${internal?`<div class="event-actions"><button class="mini mini-button" data-more="${internal}"><span class="action-icon maps-view"><img src="assets/google-maps-icon.png" alt="Google Maps"></span><span>查看地點</span></button></div>`:map?`<div class="event-actions"><a class="mini" target="_blank" rel="noopener" href="${placeUrl||mapUrl(map)}"><span class="action-icon maps-view"><img src="assets/google-maps-icon.png" alt="Google Maps"></span><span>查看</span></a><a class="mini nav-action" target="_blank" rel="noopener" href="${directionsUrl(map)}"><span class="action-icon">➤</span><span>導航</span></a></div>`:''}</div></div>`).join('')}</div>`}

function renderHome(){view.innerHTML=`
<section class="home-cover">
  <div class="home-cover-shade"></div>
  <div class="home-cover-copy"><div class="home-kicker">TOKYO ・ HAKONE</div><h2>東京・箱根</h2><div class="home-jp">旅 遊 手 冊</div><div class="home-script">Travel Guide</div><p>2026.11.05 — 11.09</p></div>
</section>
<section class="home-stack">
${TRIP.days.map((x,i)=>`<button class="journey-card" data-open-day="${i}"><img src="${x.image}" alt="${x.title}" loading="${i===0?'eager':'lazy'}" decoding="async" ${i===0?'fetchpriority="high"':''}><span class="journey-copy"><small>${fmt(x.date)}</small><strong>${x.label}</strong><em>${x.title}</em></span><b>›</b></button>`).join('')}
</section>
<section class="home-stays">
 <button class="stay-glass" data-more="stay"><img src="assets/hakone-stay.webp" alt="箱根民宿" loading="lazy" decoding="async"><span><small>11/05 — 11/07・2 晚</small><strong>箱根民宿</strong><em>Noel Hakone Gensen</em></span><b>›</b></button>
 <button class="stay-glass" data-more="stay"><img src="assets/omo3-stay.webp" alt="OMO3 東京赤坂" loading="lazy" decoding="async"><span><small>11/07 — 11/09・2 晚</small><strong>OMO3 東京赤坂</strong><em>by 星野リゾート</em></span><b>›</b></button>
</section>
<section class="home-utility-grid"><button class="utility-card pretrip-card" data-pretrip-modal aria-label="行前須知"><img src="assets/pages/p04.webp" alt="日本旅行注意事項"><span><strong>行前須知</strong><small>日本旅遊注意事項・出發前必讀</small></span><b>›</b></button><button class="utility-card" data-more="flight" aria-label="航班"><img src="assets/home-actions/flight.webp" alt="航班"><span><strong>航班</strong><small>TR898・TR875</small></span><b>›</b></button><button class="utility-card" data-more="check" aria-label="行李檢查"><img src="assets/home-actions/luggage.webp" alt="行李檢查"><span><strong>行李檢查</strong><small>出發前確認</small></span><b>›</b></button><button class="utility-card" data-more="links" aria-label="實用連結"><img src="assets/home-actions/links.webp" alt="實用連結"><span><strong>實用連結</strong><small>VJW 申請・影片教學・日本緊急電話</small></span><b>›</b></button><button class="utility-card subway-card" data-more="subway" aria-label="東京地鐵路線圖"><img src="assets/tokyo-subway-map.webp" alt="東京地鐵路線圖"><span><strong>東京地鐵路線圖</strong><small>Tokyo Metro・都營地下鐵・JR 主要路線</small></span><b>›</b></button><button class="utility-card travel-book-card" data-more="book" aria-label="旅遊手冊"><img src="assets/travel-book-cover.webp" alt="東京箱根旅遊手冊封面"><span><strong>旅遊手冊</strong><small>完整 27 頁・點擊直接閱讀</small></span><b>›</b></button></section>`;bind();}
function subwayPreview(){return `<section class="section subway-inline"><div class="section-head"><h2>東京地鐵路線圖</h2><small>點圖放大・可從「更多」再次開啟</small></div><button class="subway-map-shot" data-subway-zoom aria-label="放大東京地鐵路線圖"><img src="assets/tokyo-subway-map.webp" alt="東京地鐵路線圖" loading="lazy" decoding="async"></button></section>`}
function renderTrip(){const d=TRIP.days[selectedDay];const showSubway=selectedDay===3||selectedDay===4;view.innerHTML=`<section>${dayTabs()}<div class="day-hero"><img src="${d.image}" alt="${d.title}" fetchpriority="high" decoding="async"><div class="overlay"><div><small>${fmt(d.date).toUpperCase()}</small><h2>${d.label}</h2><div>${d.title}</div></div></div></div><div class="card card-body day-summary"><strong>${d.subtitle}</strong></div><div class="card card-body" style="margin-top:12px">${timeline(d)}</div>${showSubway?subwayPreview():''}<section class="section"><div class="section-head"><h2>手冊原頁</h2><small>點圖放大</small></div><div class="feature-grid">${pageImg(d.page)}${pageImg(d.routePage)}${d.extraPage?pageImg(d.extraPage):''}${(d.extraPages||[]).map(pageImg).join('')}</div></section><p class="note">※ 行程資料已同步旅遊手冊 V3.1；後續仍可依你確認的最終版本調整。</p></section>`;bind();}

function locationCard(){const has=locationState.lat!=null; const status=locationState.status==='loading'?'正在取得位置…':locationState.status==='error'?(locationState.error||'定位失敗'):has?`已定位・精度約 ${Math.round(locationState.accuracy||0)} m`:'尚未取得位置';return `<div class="card location-card"><div class="location-head"><div><div class="label">MY LOCATION</div><h3>📍 我的目前位置</h3></div><span class="location-status ${locationState.status}">${status}</span></div><p class="note">${has?`${locationState.lat.toFixed(5)}, ${locationState.lng.toFixed(5)}`:'按下按鈕後，手機會詢問定位權限。'}</p><div class="location-actions"><button class="primary" data-locate>${locationState.status==='loading'?'定位中…':'取得我的位置'}</button>${has?`<a class="secondary link-button" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${locationState.lat},${locationState.lng}">在 Google Maps 查看 ↗</a>`:''}</div></div>`}
function destinationList(items){return `<div class="list">${items.map(p=>`<div class="nav-destination"><div><strong>${p.name}</strong><small>${p.sub}</small></div><div class="destination-actions"><a target="_blank" rel="noopener" href="${p.placeUrl||mapUrl(p.q)}"><span class="action-icon maps-view"><img src="assets/google-maps-icon.png" alt="Google Maps"></span><span>查看</span></a><a class="nav-action" target="_blank" rel="noopener" href="${directionsUrl(p.q)}"><span class="action-icon">➤</span><span>導航</span></a></div></div>`).join('')}</div>`}
function renderMap(){const d=TRIP.days[selectedDay]; if(selectedDay===3){view.innerHTML=`<section>${dayTabs()}<div class="section-head"><h2>東京自由行導航</h2><small>${d.label}</small></div>${locationCard()}<div class="section card card-body"><div class="section-head compact"><h2>赤坂周邊</h2><button class="text-action" data-more="akasaka">看周邊頁 →</button></div>${destinationList(AKASAKA_SPOTS)}</div><div class="section card card-body"><div class="section-head compact"><h2>東京經典景點</h2><button class="text-action" data-more="spots">看完整景點頁 →</button></div>${destinationList(TOKYO_SPOTS)}</div><p class="note">Day 4 是自由行，因此保留多個可選地點。導航會使用較完整的地點名稱＋地址，避免像「日枝神社」只靠名稱時出現全日本同名地點。</p></section>`;bind();return;} const pins=d.events.filter(e=>e[3]);view.innerHTML=`<section>${dayTabs()}<div class="section-head"><h2>地圖導航</h2><small>${d.label}</small></div>${locationCard()}<div class="section card card-body"><div class="section-head compact"><h2>今日導航點</h2><small>${locationState.lat!=null?'由目前位置出發':'可先取得目前位置'}</small></div><div class="list">${pins.map(e=>`<div class="nav-destination"><div><strong>${e[1]}</strong><small>${e[2]}</small></div><div class="destination-actions"><a target="_blank" rel="noopener" href="${e[5]||mapUrl(e[3])}"><span class="action-icon maps-view"><img src="assets/google-maps-icon.png" alt="Google Maps"></span><span>查看</span></a><a target="_blank" rel="noopener" href="${directionsUrl(e[3])}">導航</a></div></div>`).join('')}</div></div><section class="section"><div class="section-head"><h2>手冊路線圖</h2><small>目前先保留原版</small></div>${pageImg(d.routePage,'route-preview')}</section><p class="note">目前位置、導航按鈕已可使用；真正可縮放的內嵌互動地圖可在後續版本再加。</p></section>`;bind();}

function checklist(){const items=['護照','機票／訂位資料','Visit Japan Web','駕照／日文譯本','信用卡／日圓','行動電源','充電線／轉接頭','常備藥品','雨具','保暖衣物','盥洗用品','eSIM／網路','交通卡／Suica','購物退稅所需證件'];const saved=JSON.parse(localStorage.getItem('tokyoHakoneChecklist')||'{}');return `<div class="list">${items.map((x,i)=>`<label class="check-item"><input type="checkbox" data-check="${i}" ${saved[i]?'checked':''}><span>${x}</span></label>`).join('')}</div>`}
function renderSub(title,html){view.innerHTML=`<section><button class="back" data-more="root">‹ 返回</button><div class="section-head"><h2>${title}</h2></div>${html}</section>`;bind();}
function renderFlight(){renderSub('航班資訊',`<div class="card card-body flight-card"><div class="flight-row"><div><small>去程・11/05</small><strong>TPE</strong><span>06:50</span></div><b>TR898 ✈</b><div><small>成田 T1</small><strong>NRT</strong><span>10:55</span></div></div><hr><div class="flight-row"><div><small>回程・11/09</small><strong>NRT</strong><span>19:45</span></div><b>TR875 ✈</b><div><small>桃園 T1</small><strong>TPE</strong><span>22:55</span></div></div><p class="note">Scoot；托運行李每人 20 kg。已依旅遊手冊 V3.1 更新航班時間；集合時間 04:30，托運行李每人 20 kg。</p></div><div class="section">${pageImg(5)}</div>`)}
function renderStay(){renderSub('住宿資訊',`<div class="card stay-card"><img class="stay-img" src="assets/hakone-stay.webp" alt="箱根民宿 Noel Hakone Gensen 外觀"><div class="card-body"><h3>箱根民宿｜Noel Hakone Gensen</h3><p>11/05 — 11/07（2 晚）</p><p class="note">〒250-0407 神奈川県足柄下郡箱根町二ノ平1297-415。房間分配已依旅遊手冊 V3.1 更新。</p><div class="stay-actions"><a target="_blank" rel="noopener" href="${mapUrl('Noel Hakone Gensen')}"><span class="stay-action-icon maps"><img src="assets/google-maps-icon.png" alt="Google Maps"></span><span class="stay-action-copy"><strong>導航</strong><small>Google Maps</small></span></a><button data-page="10"><span class="stay-action-icon floor">1</span><span class="stay-action-copy"><strong>1F｜一樓</strong><small>平面圖・房間配置</small></span></button><button data-page="11"><span class="stay-action-icon floor">2</span><span class="stay-action-copy"><strong>2F｜二樓</strong><small>平面圖・房間配置</small></span></button></div></div></div><div class="section card card-body hakone-room-section"><h3>箱根房間分配</h3><div class="hakone-room-grid"><div class="floor-column"><h4 class="floor-label">1F｜一樓</h4>${ROOM1.map(r=>`<div class="room-row room-inline"><strong>${r[0]}</strong><span>${r[1]}</span></div>`).join('')}</div><div class="floor-column"><h4 class="floor-label">2F｜二樓</h4>${ROOM2.map(r=>`<div class="room-row room-inline"><strong>${r[0]}</strong><span>${r[1]}</span></div>`).join('')}</div></div></div><div class="section card stay-card"><img class="stay-img" src="assets/omo3-stay.webp" alt="OMO3 東京赤坂 by 星野リゾート 外觀"><div class="card-body"><h3>OMO3 東京赤坂 by 星野リゾート</h3><p>11/07 — 11/09（2 晚）</p><div class="stay-actions omo-actions"><a target="_blank" rel="noopener" href="${mapUrl('OMO3 東京赤坂 by 星野リゾート')}"><span class="stay-action-icon maps"><img src="assets/google-maps-icon.png" alt="Google Maps"></span><span class="stay-action-copy"><strong>導航</strong><small>Google Maps</small></span></a><button data-page="18"><span class="stay-action-icon bed">▰</span><span class="stay-action-copy"><strong>房間</strong><small>房型・住宿分配</small></span></button><button data-page="20"><span class="stay-action-icon around">⌖</span><span class="stay-action-copy"><strong>周邊</strong><small>赤坂生活機能</small></span></button></div></div></div><div class="section card card-body omo-room-section"><h3>OMO3 房間分配</h3><div class="omo-room-grid">${OMO_ROOMS.map(r=>`<div class="room-row room-inline"><strong>房 ${r[0]}</strong><span>${r[1]}</span></div>`).join('')}</div></div>`)}
function renderLinks(){renderSub('實用連結',`<div class="list"><a class="list-btn" target="_blank" rel="noopener" href="https://www.vjw.digital.go.jp/"><span><strong>Visit Japan Web</strong><small>入境審查・海關申報</small></span><b>↗</b></a><a class="list-btn" target="_blank" rel="noopener" href="https://www.japan.travel/en/plan/hotline/"><span><strong>JNTO Japan Visitor Hotline</strong><small>旅遊緊急支援</small></span><b>↗</b></a><a class="list-btn" target="_blank" rel="noopener" href="https://youtu.be/murbeY8SYgc?si=iFKucjaPvHdmIfMp"><span><strong>Visit Japan Web｜影片教學</strong><small>入境審查・海關申報操作教學</small></span><b>▶</b></a></div><div class="section">${pageImg(6)}</div>`)}
function renderAkasaka(){renderSub('赤坂周邊散步',`<p class="note">先在 App 裡挑想去的地方，再按「查看」或「導航」。這樣不會一點赤坂周邊就直接跳到單一 Google Maps 搜尋。</p>${destinationList(AKASAKA_SPOTS)}<div class="section">${pageImg(20)}</div>`)}
function renderSpots(){renderSub('東京景點',`<p class="note">Day 4 是自由行，這裡把候選景點拆開。每個地點使用更完整的名稱與地址，導航會比較精準。</p>${destinationList(TOKYO_SPOTS)}<div class="section feature-grid">${pageImg(21)}${pageImg(22)}${pageImg(23)}</div>`)}
function renderShopping(){renderSub('東京必買',`<div class="shopping-groups"><div class="card card-body"><h3>超商・超市零食</h3><p>手冊 V3 列有 KitKat、Pocky／Pretz 等伴手禮類型。</p></div><div class="card card-body"><h3>藥妝</h3><p>眼藥水、保養與常見藥妝品項，細項以最終校正版為準。</p></div><div class="card card-body"><h3>生活雜貨</h3><p>3COINS、Standard Products 等。</p></div><div class="card card-body"><h3>東京伴手禮</h3><p>PRESS BUTTER SAND、YOKU MOKU 等。</p></div></div><div class="section">${pageImg(26)}</div>`)}
function renderPretrip(){renderSub('行前須知',`<p class="note">日本旅遊注意事項・出發前必讀</p><div class="section pretrip-page">${pageImg(4)}</div>`)}
function renderSubway(){renderSub('東京地鐵路線圖',`<p class="note">東京 Metro、都營地下鐵與主要 JR／私鐵路線一覽。點擊圖片可全螢幕放大查看。</p><div class="section subway-page"><button class="subway-map-shot" data-subway-zoom aria-label="放大東京地鐵路線圖"><img src="assets/tokyo-subway-map.webp" alt="東京地鐵路線圖"></button></div>`)}
function renderBook(){view.innerHTML=`<section><button class="back" data-more="root">‹ 返回</button><div class="section-head"><h2>完整旅遊手冊</h2><small>27 頁</small></div><a class="secondary full link-button book-pdf-link" target="_blank" rel="noopener" href="assets/travel-book.pdf"><span><strong>開啟高畫質原始 PDF ↗</strong><small>高畫質・完整 27 頁</small></span></a><p class="note">這裡已換成你最新的旅遊手冊 V3.1，方便旅行中快速翻頁。點任何頁面可放大。</p><div class="book-grid">${pageMeta.map(([n,t])=>`<div class="book-item">${pageImg(n)}<small>${String(n).padStart(2,'0')}｜${t}</small></div>`).join('')}</div></section>`;bind();}
function renderMore(mode='root'){
  if(mode==='flight')return renderFlight(); if(mode==='stay')return renderStay(); if(mode==='check')return renderSub('行李檢查表',`${checklist()}<div class="section">${pageImg(27)}</div>`); if(mode==='links')return renderLinks(); if(mode==='akasaka')return renderAkasaka(); if(mode==='spots')return renderSpots(); if(mode==='shopping')return renderShopping(); if(mode==='pretrip')return renderPretrip(); if(mode==='subway')return renderSubway(); if(mode==='book')return renderBook();
  view.innerHTML=`<section><div class="section-head"><h2>更多資訊</h2><small>MORE</small></div><div class="list"><button class="list-btn" data-more="flight"><span><strong>✈ 航班資訊</strong><small>TR898 / TR875</small></span><b>›</b></button><button class="list-btn" data-more="stay"><span><strong>▰ 住宿與房間分配</strong><small>箱根民宿・OMO3 東京赤坂</small></span><b>›</b></button><button class="list-btn" data-more="links"><span><strong>◎ 實用連結</strong><small>Visit Japan Web・JNTO・影片教學</small></span><b>›</b></button><button class="list-btn" data-more="akasaka"><span><strong>⌖ 赤坂周邊</strong><small>日枝神社・紀尾井町・弁慶橋・豐川稻荷</small></span><b>›</b></button><button class="list-btn" data-more="spots"><span><strong>★ 東京景點</strong><small>經典景點候選</small></span><b>›</b></button><button class="list-btn" data-more="shopping"><span><strong>▣ 東京必買</strong><small>零食・藥妝・生活雜貨・伴手禮</small></span><b>›</b></button><button class="list-btn" data-more="check"><span><strong>☑ 行李檢查表</strong><small>可勾選並保留狀態</small></span><b>›</b></button><button class="list-btn" data-more="subway"><span><strong>▦ 東京地鐵路線圖</strong><small>Metro・都營地下鐵・JR 主要路線</small></span><b>›</b></button><button class="list-btn" data-more="book"><span><strong>☷ 完整旅遊手冊</strong><small>27 頁全部放進 App</small></span><b>›</b></button></div></section>`;bind();}

function render(kind){$$('.nav-item').forEach(x=>x.classList.toggle('active',x.dataset.view===kind)); $('#pageTitle').textContent=kind==='home'?'東京・箱根':kind==='trip'?'行程':kind==='map'?'地圖導航':'更多'; if(kind==='home')renderHome(); else if(kind==='trip')renderTrip(); else if(kind==='map')renderMap(); else renderMore(); window.scrollTo({top:0,behavior:'smooth'});}
function bind(){
  $$('[data-day]').forEach(b=>b.onclick=()=>{selectedDay=+b.dataset.day; render(b.closest('section')?.querySelector('.location-card')?'map':'trip')});
  $$('[data-open-day]').forEach(b=>b.onclick=()=>{selectedDay=+b.dataset.openDay; render('trip')});
  $$('[data-view-link]').forEach(b=>b.onclick=()=>render(b.dataset.viewLink));
  $$('[data-more]').forEach(b=>b.onclick=()=>renderMore(b.dataset.more));
  $$('[data-pretrip-modal]').forEach(b=>b.onclick=()=>openPage(4));
  $$('[data-subway-zoom]').forEach(b=>b.onclick=openSubwayMap);
  $$('[data-locate]').forEach(b=>b.onclick=locateMe);
  $$('[data-check]').forEach(c=>c.onchange=()=>{const s=JSON.parse(localStorage.getItem('tokyoHakoneChecklist')||'{}');s[c.dataset.check]=c.checked;localStorage.setItem('tokyoHakoneChecklist',JSON.stringify(s))});
  $$('[data-page]').forEach(b=>b.onclick=()=>openPage(+b.dataset.page));
}
function openPage(n){const modal=document.createElement('div');modal.className='page-modal';modal.innerHTML=`<button class="modal-close">×</button><div class="modal-scroll"><img src="assets/pages/p${String(n).padStart(2,'0')}.webp" alt="旅遊手冊第 ${n} 頁"><div class="modal-caption">${pageMeta.find(x=>x[0]===n)?.[1]||''}｜第 ${n} 頁</div></div>`;document.body.appendChild(modal);$('.modal-close',modal).onclick=()=>modal.remove();modal.onclick=e=>{if(e.target===modal)modal.remove()}}
function openSubwayMap(){const modal=document.createElement('div');modal.className='page-modal subway-modal';modal.innerHTML=`<button class="modal-close">×</button><div class="modal-scroll subway-modal-scroll"><img src="assets/tokyo-subway-map.webp" alt="東京地鐵路線圖"><div class="modal-caption">東京地鐵路線圖｜Tokyo Metro・都營地下鐵・JR 主要路線</div></div>`;document.body.appendChild(modal);$('.modal-close',modal).onclick=()=>modal.remove();modal.onclick=e=>{if(e.target===modal)modal.remove()}}
function locateMe(){if(!navigator.geolocation){locationState={status:'error',error:'此瀏覽器不支援定位'};return renderMap()} locationState={...locationState,status:'loading',error:null};renderMap();navigator.geolocation.getCurrentPosition(p=>{locationState={status:'success',lat:p.coords.latitude,lng:p.coords.longitude,accuracy:p.coords.accuracy,error:null};localStorage.setItem('tokyoHakoneLastLocation',JSON.stringify(locationState));renderMap()},e=>{const m={1:'你沒有允許定位權限',2:'目前無法判斷位置',3:'定位逾時，請再試一次'};locationState={status:'error',lat:null,lng:null,accuracy:null,error:m[e.code]||'定位失敗'};renderMap()},{enableHighAccuracy:true,timeout:12000,maximumAge:60000})}

$$('.nav-item').forEach(b=>b.onclick=()=>render(b.dataset.view));
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('#installBtn').hidden=false});$('#installBtn').onclick=async()=>{if(deferredPrompt){deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('#installBtn').hidden=true}};
if('serviceWorker' in navigator) window.addEventListener('load',async()=>{
  try{
    const reg=await navigator.serviceWorker.register('./service-worker.js?v=6.0',{updateViaCache:'none'});
    let refreshing=false;
    let lastUpdateCheck=0;
    const checkForUpdate=async(force=false)=>{
      const now=Date.now();
      if(!force && now-lastUpdateCheck<300000) return;
      lastUpdateCheck=now;
      try{await reg.update()}catch(e){console.warn('Service worker update check failed',e)}
    };
    navigator.serviceWorker.addEventListener('controllerchange',()=>{
      if(!refreshing){refreshing=true;location.reload();}
    });
    await checkForUpdate(true);
    document.addEventListener('visibilitychange',()=>{
      if(document.visibilityState==='visible') checkForUpdate();
    });
    window.addEventListener('pageshow',()=>checkForUpdate());
  }catch(e){console.warn('Service worker registration failed',e)}
});
render('home');
