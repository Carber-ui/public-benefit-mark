const icons={home:'<path d="M3 10 12 3l9 7v10h-6v-6H9v6H3z"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',heart:'<path d="M20.8 4.8a5.4 5.4 0 0 0-7.6 0L12 6l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.6a5.4 5.4 0 0 0 0-7.6z"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3-6 8-6s8 2 8 6z"/>',chart:'<path d="M4 20V11h4v9M10 20V6h4v14M16 20V3h4v17M2 20h20"/>',bank:'<path d="M3 9h18L12 3 3 9zM5 10v8m5-8v8m4-8v8m5-8v8M3 21h18M2 18h20"/>',shield:'<path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5z"/><path d="m8 12 3 3 5-6"/>',book:'<path d="M3 5c4-1 7 0 9 2v13c-2-2-5-3-9-2zM21 5c-4-1-7 0-9 2v13c2-2 5-3 9-2z"/>',bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',people:'<circle cx="12" cy="7" r="3"/><path d="M6 20v-2a6 6 0 0 1 12 0v2zM4 9a3 3 0 0 0 0 6M20 9a3 3 0 0 1 0 6"/>',coins:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 2 3.6 3 8 3s8-1 8-3V5M4 11v6c0 2 3.6 3 8 3s8-1 8-3v-6"/>',arrow:'<path d="M5 12h14M14 7l5 5-5 5"/>',download:'<path d="M12 3v12m-5-5 5 5 5-5M4 18v3h16v-3"/>'};
const leafMark=`<svg class="leaf-mark" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 54C30 31 18 22 5 19c1 18 11 28 26 29" fill="#8aba36"/><path d="M32 52C33 25 45 14 61 10c-2 21-12 34-28 37" fill="#8aba36"/><path d="M32 57c0-15 5-25 17-36M31 49C26 37 19 31 12 27" fill="none" stroke="#437d25" stroke-width="2" stroke-linecap="round"/></svg>`;
const icon=n=>`<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[n]||''}</svg>`;
const orgs=[
{id:1,name:'온누리복지재단',field:'사회복지',region:'서울',cert:true,desc:'아동·노인 복지 및 지역사회 지원 사업',established:'2012. 03. 15.',address:'서울특별시 영등포구 여의대로 123',income:12560000000,expenses:11980000000,people:42318},
{id:2,name:'푸른지구환경재단',field:'환경보호',region:'경기',cert:true,desc:'환경 보전 및 기후 변화 대응 활동',established:'2015. 06. 10.',address:'경기도 수원시 푸른로 24',income:9850000000,expenses:9100000000,people:18200},
{id:3,name:'희망나눔자립센터',field:'취약계층 지원',region:'부산',cert:true,desc:'취약계층 자립 지원 및 생활 안정 사업',established:'2010. 11. 02.',address:'부산광역시 연제구 희망로 18',income:7150000000,expenses:6800000000,people:12700},
{id:4,name:'배움나무교육재단',field:'교육·장학',region:'서울',cert:true,desc:'청소년 교육 기회 확대와 장학 사업',established:'2014. 05. 20.',address:'서울특별시 종로구 배움길 12',income:5800000000,expenses:5300000000,people:9200},
{id:5,name:'모두의문화재단',field:'문화·예술',region:'대전',cert:false,desc:'지역 문화 예술 교육과 창작 지원',established:'2018. 09. 03.',address:'대전광역시 서구 문화로 7',income:2400000000,expenses:2100000000,people:6500},
{id:6,name:'함께걷는복지재단',field:'사회복지',region:'경기',cert:true,desc:'장애인과 가족을 위한 지역사회 지원',established:'2011. 02. 14.',address:'경기도 성남시 함께로 21',income:8700000000,expenses:8200000000,people:15100},
{id:7,name:'초록숲생태재단',field:'환경보호',region:'강원',cert:true,desc:'숲 보전과 생태 교육 프로그램 운영',established:'2016. 04. 22.',address:'강원특별자치도 춘천시 숲길 32',income:3600000000,expenses:3300000000,people:7400},
{id:8,name:'새싹미래장학재단',field:'교육·장학',region:'부산',cert:false,desc:'미래 인재 육성과 교육비 지원',established:'2020. 01. 08.',address:'부산광역시 동래구 새싹로 15',income:1800000000,expenses:1500000000,people:3200}];
const state={query:'',field:'전체',region:'전체',cert:'전체',sort:'relevance',detailTab:'기본정보',detailOrigin:'search',statTab:'전체 현황'};
const app=document.querySelector('#app');
function readFavorites(){try{return JSON.parse(localStorage.getItem('benefit-favorites')||'[]')}catch{return []}}
let favorites=readFavorites();
function saveFavorites(){try{localStorage.setItem('benefit-favorites',JSON.stringify(favorites))}catch{toast('브라우저 저장 공간을 사용할 수 없습니다.')}}
function toast(message){const t=document.querySelector('#toast');t.textContent=message;t.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove('show'),2200)}
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money=n=>n.toLocaleString('ko-KR')+'원';
function heart(o){return `<button class="favorite ${favorites.includes(o.id)?'active':''}" data-favorite="${o.id}" aria-label="${esc(o.name)} ${favorites.includes(o.id)?'관심 목록에서 삭제':'관심 목록에 추가'}" aria-pressed="${favorites.includes(o.id)}">${icon('heart')}</button>`}
function quick(label,sub,ic,href){return `<a class="quick-card" href="${href}">${icon(ic)}<span>${label}</span><small>${sub}</small></a>`}
function home(){return `<section class="hero"><div class="hero-art" aria-hidden="true"></div><div class="container"><div class="hero-copy"><h1>공익법인<br>인증마크 제도</h1><p>투명한 정보로 믿을 수 있는 기부<br>함께 만드는 신뢰의 사회</p><div class="hero-buttons"><a class="btn primary" href="#search">공익법인 검색하기 ${icon('arrow')}</a><a class="btn outline" href="#guide">인증 제도 알아보기 ${icon('arrow')}</a></div></div><form class="mobile-home-search" id="home-search"><span>${icon('search')}</span><input name="query" aria-label="공익법인 검색" placeholder="공익법인 검색 (이름, 분야 등)"><button aria-label="검색">${icon('search')}</button></form></div></section><div class="container quick-wrap"><div class="quick-grid">${quick('인증 공익법인','인증을 받은<br>공익법인 조회','bank','#search?cert=인증')}${quick('분야별 검색','관심 분야의<br>공익법인 찾기','search','#search')}${quick('운영 정보','수입·지출 등<br>운영 현황 확인','chart','#operations')}${quick('통계·보고서','공익법인 관련<br>통계 자료 보기','chart','#statistics')}${quick('인증 제도 안내','신청 절차와<br>심사 기준 안내','book','#guide')}${quick('공지사항','서비스 소식과<br>안내 확인','bell','#notices')}</div></div><section class="section"><div class="container"><div class="section-title"><div><h2>신뢰할 수 있는 공익법인을 만나보세요</h2><p>관심 있는 분야와 지역의 공익법인을 찾아보세요.</p></div><a class="text-link" href="#search">전체 보기 →</a></div><div class="feature-row">${orgs.slice(0,3).map(o=>`<a class="feature-card" href="#detail/${o.id}"><span class="feature-icon">${leafMark}</span><span><strong>${o.name}</strong><small>${o.field} · ${o.region}</small></span></a>`).join('')}</div></div></section><section class="section alt"><div class="container"><div class="section-title"><div><h2>한눈에 보는 공익의 가치</h2><p>아래 수치는 디자인 확인을 위한 예시입니다.</p></div><a class="text-link" href="#statistics">통계 자세히 보기 →</a></div><div class="stats-grid">${metric('bank','등록 공익법인','21,318개')}${metric('shield','인증 기관','7,642개')}${metric('coins','연간 모금액','약 3.22조 원')}</div></div></section>`}
function metric(ic,label,value){return `<div class="stat-card">${icon(ic)}<small>${label}</small><strong>${value}</strong></div>`}
const initialConsonants=Array.from('ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ');
function initialOf(character){const code=character.codePointAt(0);return code>=0xac00&&code<=0xd7a3?initialConsonants[Math.floor((code-0xac00)/588)]:character}
function matchesKeyword(text,query){
  const source=Array.from(text.normalize('NFC').toLowerCase());
  const keyword=Array.from(query.normalize('NFC').toLowerCase());
  if(!keyword.length)return true;
  return source.some((_,start)=>keyword.every((key,index)=>{
    const target=source[start+index];if(target===undefined)return false;
    if(initialConsonants.includes(key))return initialOf(target)===key;
    const k=key.codePointAt(0),t=target.codePointAt(0);
    if(index===keyword.length-1&&k>=0xac00&&k<=0xd7a3&&(k-0xac00)%28===0&&t>=0xac00&&t<=0xd7a3)return Math.floor((k-0xac00)/28)===Math.floor((t-0xac00)/28);
    return key===target;
  }));
}
function filterControl(key,label,values){
  const selected=state[key];const listId='filter-menu-'+key;
  return `<div class="filter-group" data-filter-group="${key}"><button class="filter-trigger" type="button" data-filter-toggle="${key}" aria-label="${label} 선택: ${esc(selected==='전체'?'전체':selected)}" aria-haspopup="listbox" aria-expanded="false" aria-controls="${listId}"><span>${esc(selected==='전체'?label:selected)}</span><svg class="filter-chevron" viewBox="0 0 20 20" aria-hidden="true"><path d="m5 7.5 5 5 5-5"/></svg></button><div class="filter-menu" id="${listId}" role="listbox" aria-label="${label}" hidden>${values.map(value=>`<button type="button" role="option" aria-selected="${value===selected}" data-filter-option="${key}" data-value="${esc(value)}">${esc(value==='전체'?label+' 전체':value)}${value===selected?'<span class="filter-check" aria-hidden="true">✓</span>':''}</button>`).join('')}</div></div>`;
}
function closeFilters(){document.querySelectorAll('.filter-menu').forEach(menu=>{menu.hidden=true});document.querySelectorAll('[data-filter-toggle]').forEach(button=>button.setAttribute('aria-expanded','false'))}

function resultCard(o){return `<article class="result-card"><a href="#detail/${o.id}" class="org-icon" aria-label="${esc(o.name)} 상세 보기">${leafMark}</a><a href="#detail/${o.id}" class="org-info"><h3>${esc(o.name)} <span class="badge ${o.cert?'':'pending'}">${o.cert?'✓ 인증':'인증 정보 없음'}</span></h3><p><span class="chip">${o.field}</span><span class="chip">${o.region}</span></p><p>${o.desc}</p></a>${heart(o)}</article>`}
function filtered(){let result=orgs.filter(o=>(!state.query||matchesKeyword(`${o.name} ${o.field} ${o.region} ${o.desc}`,state.query))&&(state.field==='전체'||o.field===state.field)&&(state.region==='전체'||o.region===state.region)&&(state.cert==='전체'||(state.cert==='인증'?o.cert:!o.cert)));if(state.sort==='name')result.sort((a,b)=>a.name.localeCompare(b.name,'ko'));if(state.sort==='size')result.sort((a,b)=>b.income-a.income);if(state.sort==='relevance'&&state.query)result.sort((a,b)=>Number(matchesKeyword(b.name,state.query))-Number(matchesKeyword(a.name,state.query)));return result}
function refreshSearchResults(){const list=filtered();const count=document.querySelector('#result-count');const results=document.querySelector('.result-list');if(!count||!results)return;count.textContent=list.length;results.innerHTML=list.length?list.map(resultCard).join(''):'<div class="empty">검색 결과가 없습니다. 검색어나 조건을 바꿔 보세요.</div>'}
function search(){const list=filtered();return `<div class="page"><div class="breadcrumb">홈 &nbsp;›&nbsp; 공익법인 검색</div><div class="page-title"><h1>공익법인 검색</h1><p>분야, 지역, 인증 여부 등으로 공익법인을 찾아보세요.</p></div><form class="search-form" id="search-form"><input name="query" value="${esc(state.query)}" placeholder="법인명, 키워드 검색" aria-label="법인명, 분야, 키워드로 검색"></form><div class="filter-row">${filterControl('field','분야',['전체','사회복지','환경보호','교육·장학','문화·예술','취약계층 지원'])}${filterControl('region','지역',['전체','서울','경기','부산','대전','강원'])}${filterControl('cert','인증 여부',['전체','인증','인증 정보 없음'])}</div><div class="result-head"><strong>검색 결과 <span id="result-count" aria-live="polite" aria-atomic="true">${list.length}</span>건 <small style="color:#849083;font-weight:400">(예시 데이터)</small></strong><select class="sort" data-filter="sort" aria-label="정렬 기준"><option value="relevance" ${state.sort==='relevance'?'selected':''}>연관성순</option><option value="name" ${state.sort==='name'?'selected':''}>가나다순</option><option value="size" ${state.sort==='size'?'selected':''}>규모순 (총 수입)</option></select></div><div class="result-list">${list.length?list.map(resultCard).join(''):'<div class="empty">검색 결과가 없습니다. 검색어나 조건을 바꿔 보세요.</div>'}</div></div>`}
function detail(id){const o=orgs.find(x=>x.id===Number(id));if(!o)return `<div class="page"><h1>법인을 찾을 수 없습니다.</h1><a href="#search">검색으로 돌아가기 →</a></div>`;let content='';if(state.detailTab==='기본정보')content=`<div class="detail-grid"><div class="panel"><div class="info-row"><strong>설립일</strong><span>${o.established}</span></div><div class="info-row"><strong>소재지</strong><span>${o.address}</span></div><div class="info-row"><strong>주요 분야</strong><span>${o.field}</span></div><div class="info-row"><strong>인증 유효기간</strong><span>${o.cert?'2026. 04. 01. ~ 2028. 03. 31.':'인증 정보 없음'}</span></div></div><div class="panel cert-art"><div class="cert-shield">${leafMark}<span>공익법인 인증마크</span></div></div></div><div class="metric-section"><h2>운영 현황 요약 <small style="font-weight:400;color:#788477">(2025년 예시)</small></h2><div class="stats-grid">${metric('coins','총 수입',money(o.income))}${metric('download','총 지출',money(o.expenses))}${metric('people','수혜 인원',o.people.toLocaleString('ko-KR')+'명')}</div><a class="report-link" href="#report/${o.id}">${icon('book')} 상세 보고서 보기 <span>›</span></a></div>`;if(state.detailTab==='운영·재정정보')content=`<div class="panel prose" style="margin-top:15px"><h2>운영·재정정보 <small>(2025년 예시)</small></h2><div class="info-row"><strong>총 수입</strong>${money(o.income)}</div><div class="info-row"><strong>총 지출</strong>${money(o.expenses)}</div><div class="info-row"><strong>수혜 인원</strong>${o.people.toLocaleString('ko-KR')}명</div><p>이 화면의 수치는 실제 공시 자료가 아닌 시연용 예시입니다.</p></div>`;if(state.detailTab==='주요 활동')content=`<div class="panel prose" style="margin-top:15px"><h2>주요 활동</h2><p>${o.desc}을 중심으로 공익 활동을 진행하는 예시 법인입니다.</p><p>활동 내용과 사업 성과를 확인할 수 있도록 구성했습니다.</p></div>`;if(state.detailTab==='자료실')content=`<div class="panel prose" style="margin-top:15px"><h2>자료실</h2><p>현재 제공되는 실제 첨부 자료가 없습니다.</p><a class="text-link" href="#statistics">통계·보고서 살펴보기 →</a></div>`;return `<div class="page"><div class="breadcrumb"><a href="#home">홈</a> &nbsp;›&nbsp; <a href="#search">공익법인 검색</a> &nbsp;›&nbsp; 법인 상세</div><div class="detail-header"><div class="org-icon">${leafMark}</div><div><h1>${o.name} <span class="badge ${o.cert?'':'pending'}">${o.cert?'✓ 인증 공익법인':'인증 정보 없음'}</span></h1><p>${o.desc}</p></div>${heart(o)}</div><div class="tabs">${['기본정보','운영·재정정보','주요 활동','자료실'].map(t=>`<button data-detail-tab="${t}" class="${state.detailTab===t?'active':''}">${t==='운영·재정정보'?'<span class="desktop-detail-label">운영·재정정보</span><span class="mobile-detail-label">운영·재정</span>':t}</button>`).join('')}</div>${content}</div>`}
function operations(){return `<div class="page"><div class="breadcrumb"><a href="#home">홈</a> &nbsp;›&nbsp; 운영 정보</div><div class="page-title"><h1>운영 정보</h1><p>예시 법인의 수입과 지출 현황을 살펴보세요. 금액은 모두 시연용입니다.</p></div><div class="operations-heading"><strong>법인별 운영 현황</strong><span>2025년 기준 · 예시 데이터</span></div><div class="operations-list">${orgs.slice().sort((a,b)=>b.income-a.income).map(o=>`<a class="operation-card" href="#detail/${o.id}?tab=finance"><span class="org-icon">${leafMark}</span><span class="operation-name"><strong>${esc(o.name)}</strong><small>${esc(o.field)} · ${esc(o.region)}</small></span><span class="operation-amount"><small>총 수입</small><strong>${money(o.income)}</strong></span><span class="operation-arrow">›</span></a>`).join('')}</div></div>`}

const dashboardMenus = [
  { page: 'guide', label: '인증 안내', icon: 'shield' },
  { page: 'statistics', label: '통계·보고서', icon: 'chart' },
  { page: 'notices', label: '공지사항', icon: 'bell' }
];

function dashboardPage(content, activePage, view = '') {
  const links = dashboardMenus.map(item => {
    const active = item.page === activePage;
    return `<a href="#${item.page}"${active ? ' class="active" aria-current="page"' : ''}>${icon(item.icon)} ${item.label}</a>`;
  }).join('');

  return `<div class="stats-layout"${view ? ` data-view="${esc(view)}"` : ''}>
    <aside class="stats-side">
      <a class="stats-brand" href="#home">${leafMark}<strong>공익법인<br>인증마크 제도</strong></a>
      <nav aria-label="서비스 메뉴">${links}</nav>
    </aside>
    ${content}
  </div>`;
}

function statistics(){let bars=state.statTab==='지역별 현황'?[['서울',32],['경기',26],['부산',15],['대전',10],['기타',17]]:state.statTab==='연도별 추이'?[['2021년',42],['2022년',53],['2023년',64],['2024년',77],['2025년',100]]:[['사회복지',28],['교육·장학',18],['환경보호',12],['문화·예술',9],['기타',33]];return dashboardPage(`<div class="page"><div class="breadcrumb">홈 &nbsp;›&nbsp; 통계·보고서</div><div class="page-title"><h1>통계·보고서</h1><p>공익법인의 현황을 한눈에 확인하세요. 모든 수치는 시연용 예시입니다.</p></div><div class="tabs">${['전체 현황','분야별 현황','지역별 현황','연도별 추이'].map(t=>`<button data-stat-tab="${t}" class="${state.statTab===t?'active':''}">${t}</button>`).join('')}</div><div class="stat-top"><div class="stat-card">${icon('bank')}<div><small>등록 공익법인</small><strong>21,318개</strong></div></div><div class="stat-card">${icon('shield')}<div><small>인증 기관</small><strong>7,642개</strong></div></div><div class="stat-card">${icon('people')}<div><small>전체 수혜 인원</small><strong>약 1,042만 명</strong></div></div><div class="stat-card">${icon('coins')}<div><small>연간 모금액</small><strong>약 3.22조 원</strong></div></div></div><div class="charts"><div class="panel"><h2>모금액 구성 (2025년)</h2><div class="donut-wrap"><div class="donut" role="img" aria-label="개인 기부 35%, 기업 기부 41%, 기타 24%"></div><ul class="legend"><li><span><i class="dot" style="background:#82b42e"></i>개인 기부</span><b>35%</b></li><li><span><i class="dot" style="background:#a6cb78"></i>기업 기부</span><b>41%</b></li><li><span><i class="dot" style="background:#ffda7d"></i>기타</span><b>24%</b></li></ul></div></div><div class="panel"><h2>${state.statTab==='지역별 현황'?'지역별 등록 현황':state.statTab==='연도별 추이'?'연도별 모금액 추이 (상대 지수)':'분야별 등록 현황'}</h2>${bars.map(([name,n])=>`<div class="bar-row"><span>${name}</span><span class="bar"><i style="width:${n}%"></i></span><b>${n}${state.statTab==='연도별 추이'?'':'%'}</b></div>`).join('')}</div></div><a class="report-link" href="#report">${icon('book')} 상세 보고서 보기 <span>›</span></a><p style="color:#778379;font-size:12px;margin-top:18px">※ 그래프와 수치는 실제 조사 결과가 아닌 화면 시연용 예시입니다.</p></div>`, 'statistics', state.statTab)}
function simplePage(title,subtitle,body){return `<div class="page"><div class="breadcrumb"><a href="#home">홈</a> &nbsp;›&nbsp; ${title}</div><div class="page-title"><h1>${title}</h1><p>${subtitle}</p></div><div class="panel prose">${body}</div></div>`}
function report(id){const o=orgs.find(item=>item.id===Number(id));if(id&&!o)return simplePage('보고서를 찾을 수 없습니다','확인할 법인을 다시 선택해 주세요.','<a class="text-link" href="#search">공익법인 검색 →</a>');if(o)return simplePage(o.name+' 상세 보고서','2025년 운영 현황 · 시연용 예시',`<div class="report-notice">이 보고서의 법인 정보와 수치는 시연용 예시입니다.</div><h2>법인 개요</h2><div class="info-row"><strong>주요 분야</strong><span>${esc(o.field)}</span></div><div class="info-row"><strong>소재지</strong><span>${esc(o.address)}</span></div><h2>운영 현황</h2><div class="info-row"><strong>총 수입</strong><span>${money(o.income)}</span></div><div class="info-row"><strong>총 지출</strong><span>${money(o.expenses)}</span></div><div class="info-row"><strong>수혜 인원</strong><span>${o.people.toLocaleString('ko-KR')}명</span></div><p><a class="text-link" href="#detail/${o.id}">법인 상세로 돌아가기 →</a></p>`);return simplePage('통계 상세 보고서','2025년 공익법인 현황 · 시연용 예시','<div class="report-notice">아래 수치는 화면 시연을 위해 만든 예시입니다.</div><h2>주요 지표</h2><div class="info-row"><strong>등록 공익법인</strong><span>21,318개</span></div><div class="info-row"><strong>인증 기관</strong><span>7,642개</span></div><div class="info-row"><strong>연간 모금액</strong><span>약 3.22조 원</span></div><h2>모금액 구성</h2><p>개인 기부 35% · 기업 기부 41% · 기타 24%</p><h2>분야별 등록 현황</h2><p>사회복지 28% · 교육·장학 18% · 환경보호 12% · 문화·예술 9% · 기타 33%</p><p><a class="text-link" href="#statistics">통계 화면으로 돌아가기 →</a></p>')}

function guide(){return dashboardPage(simplePage('인증 제도 안내','공익법인 인증 제도의 목적과 이용 흐름을 안내합니다.','<h2>인증 제도란?</h2><p>공익법인의 활동과 운영 정보를 쉽게 살펴볼 수 있도록 돕는 서비스 화면입니다. 아래 내용은 화면 시연을 위한 예시이며 실제 인증 절차나 기준이 아닙니다.</p><h2>인증 신청 절차 (예시)</h2><ol><li>인증 신청서와 법인의 기본 자료를 준비합니다.</li><li>운영·재정 자료와 공익 활동 내용을 제출합니다.</li><li>제출한 자료를 바탕으로 심사를 진행합니다.</li><li>심사 결과를 확인하고 인증 정보를 확인합니다.</li></ol><h2>심사 기준 (예시)</h2><p>공익 활동의 목적과 내용, 운영 정보의 투명성, 재정 자료의 공개 여부를 살펴보는 방식으로 구성했습니다. 실제 신청 요건과 심사 기준은 해당 제도의 공식 안내를 확인해야 합니다.</p><a class="btn primary" href="#search">공익법인 검색하기 →</a>'), 'guide');}
function notices(){return dashboardPage(simplePage('공지사항','서비스의 새로운 소식과 안내를 확인하세요.','<div class="notice"><strong>[안내] 공익법인 인증마크 서비스 시연</strong><small>2026. 11. 10. · 예시 공지</small><p>본 화면은 검색과 통계 기능을 확인하기 위한 시연용입니다.</p></div><div class="notice"><strong>[안내] 검색 및 관심 법인 기능 안내</strong><small>2026. 11. 01. · 예시 공지</small><p>검색 조건을 선택하고 관심 법인을 저장할 수 있습니다.</p></div>'), 'notices');}
function about(){return simplePage('서비스 구조 및 개발 환경','메뉴 구성과 구현 방식을 별도로 정리했습니다.','<h2>메뉴 구조</h2><p>홈 → 공익법인 검색 → 법인 상세(기본정보, 운영·재정정보, 주요 활동, 자료실)<br>홈 → 운영 정보 / 인증 안내 / 통계·보고서 → 상세 보고서 / 공지사항 / 관심 법인 / 내 정보(로그인·회원가입)</p><h2>서비스·시스템 구조</h2><div class="architecture">사용자 화면 → 검색·정렬·화면 전환 기능 → 예시 데이터<br>관심 법인 ↔ 브라우저 저장소(localStorage)<br>시연용 로그인 상태 ↔ 현재 탭의 저장소(sessionStorage)</div><p>화면, 스타일, 데이터와 동작을 각각 나누어 수정과 확장을 쉽게 했습니다.</p><h2>개발 및 구현 환경</h2><ul><li>HTML: 화면 구조 및 접근성</li><li>CSS: 색상 테마, 레이아웃, 모바일 반응형 화면</li><li>JavaScript: 검색, 필터, 정렬, 화면 이동, 관심 목록</li><li>실행 환경: 최신 웹 브라우저. 별도의 설치나 서버가 필요하지 않습니다.</li></ul><h2>데이터와 기능의 범위</h2><p>법인 정보와 통계는 실제 자료가 아닌 예시 데이터입니다. 관심 목록은 현재 브라우저에만 저장됩니다. 로그인과 회원가입은 실제 계정을 만들지 않는 시연용이며, 인증 심사와 외부 데이터 연동은 구현하지 않았습니다.</p>')}
let demoUser = '';
try { demoUser = sessionStorage.getItem('benefit-demo-user') || ''; } catch {}
let demoDraftName = '';
function setDemoUser(name){demoUser=name;try{if(name)sessionStorage.setItem('benefit-demo-user',name);else sessionStorage.removeItem('benefit-demo-user')}catch{}}
function account(mode){
  if(demoUser) return `<div class="page account-page"><div class="breadcrumb"><a href="#home">홈</a> &nbsp;›&nbsp; 내 정보</div><div class="account-card"><div class="account-symbol">${leafMark}</div><span class="account-kicker">내 정보</span><h1>${esc(demoUser)}님, 반갑습니다.</h1><p class="account-intro">시연용 계정으로 로그인되어 있습니다.</p><div class="demo-note">실제 회원 계정이 아닌 체험용 로그인입니다.<br>로그인 상태는 현재 브라우저 탭에서만 유지됩니다.</div><a class="account-submit" href="#favorites">관심 법인 보기</a><button class="account-logout" data-action="logout">로그아웃</button></div></div>`;
  const signup=mode==='signup';
  return `<div class="page account-page"><div class="breadcrumb"><a href="#home">홈</a> &nbsp;›&nbsp; ${signup?'회원가입':'로그인'}</div><div class="account-card"><div class="account-symbol">${leafMark}</div><span class="account-kicker">공익법인 인증마크 제도</span><h1>${signup?'회원가입':'로그인'}</h1><p class="account-intro">${signup?'간단하게 서비스를 체험해 보세요.':'함께 만드는 신뢰의 기부 문화'}</p><div class="account-tabs"><a class="${signup?'':'active'}" href="#account/login">로그인</a><a class="${signup?'active':''}" href="#account/signup">회원가입</a></div><form id="demo-account-form" data-mode="${signup?'signup':'login'}"><label for="demo-id">아이디</label><input id="demo-id" name="username" type="text" placeholder="아이디를 입력해 주세요" value="${esc(demoDraftName)}" maxlength="80" autocomplete="off" required><label for="demo-password">비밀번호</label><input id="demo-password" name="password" type="password" placeholder="비밀번호를 입력해 주세요" autocomplete="off" required><button class="account-submit" type="submit">${signup?'회원가입':'로그인'}</button></form><div class="demo-note">시연용 화면으로, 어떤 아이디와 비밀번호를 입력해도 됩니다.<br>비밀번호는 저장되지 않으며 실제 계정이 만들어지지 않습니다.</div><p class="account-switch">${signup?'이미 체험하셨나요? <a href="#account/login">로그인</a>':'처음 방문하셨나요? <a href="#account/signup">회원가입</a>'}</p></div></div>`;
}
function favoritesPage(){let list=orgs.filter(o=>favorites.includes(o.id));return `<div class="page"><div class="breadcrumb">홈 &nbsp;›&nbsp; 관심 법인</div><div class="page-title"><h1>관심 법인</h1><p>관심 표시한 법인은 현재 브라우저에 저장됩니다.</p></div><div class="result-list">${list.length?list.map(resultCard).join(''):'<div class="empty">아직 저장한 법인이 없습니다.<br><a class="text-link" href="#search">공익법인 찾기 →</a></div>'}</div></div>`}
function render() {
  const [pathPart, query] = location.hash.slice(1).split('?');
  const [page, id] = (pathPart || 'home').split('/');
  const titles = {
    search: '공익법인 검색', detail: '공익법인 상세', statistics: '통계·보고서',
    operations: '운영 정보', report: '상세 보고서', guide: '인증 안내',
    notices: '공지사항', favorites: '관심 법인', account: '내 정보',
    about: '서비스 구조 및 개발 환경'
  };

  document.body.dataset.page = page;
  document.querySelector('.mobile-page-title').textContent = titles[page] || '';

  if (page === 'detail' && query && new URLSearchParams(query).get('tab') === 'finance') {
    state.detailTab = '운영·재정정보';
    history.replaceState(null, '', '#detail/' + id);
  }
  if (page === 'search' && query) {
    if (new URLSearchParams(query).get('cert') === '인증') {
      Object.assign(state, { query: '', field: '전체', region: '전체', cert: '인증', sort: 'relevance' });
    }
    history.replaceState(null, '', '#search');
  }

  const pages = {
    home, search, statistics, operations, guide, notices, favorites: favoritesPage, about,
    detail: () => detail(id), report: () => report(id), account: () => account(id)
  };
  const fallback = () => simplePage('페이지를 찾을 수 없습니다', '메뉴를 통해 이동해 주세요.', '<a href="#home">홈으로 돌아가기 →</a>');
  app.innerHTML = (pages[page] || fallback)();

  const loginButton = document.querySelector('.login-button');
  const signupButton = document.querySelector('.signup-button');
  loginButton.textContent = demoUser ? '내 정보' : '로그인';
  loginButton.dataset.go = demoUser ? 'account' : 'account/login';
  signupButton.textContent = demoUser ? '로그아웃' : '회원가입';
  if (demoUser) {
    delete signupButton.dataset.go;
    signupButton.dataset.action = 'logout';
  } else {
    delete signupButton.dataset.action;
    signupButton.dataset.go = 'account/signup';
  }

  document.querySelectorAll('[data-leaf]').forEach(element => element.innerHTML = leafMark);
  document.querySelectorAll('[data-icon]').forEach(element => element.innerHTML = icon(element.dataset.icon));
  document.querySelectorAll('[data-nav]').forEach(element => element.classList.toggle('active', element.dataset.nav === page));
  const title = page === 'detail' ? '법인 상세' : titles[page];
  document.title = page === 'home' ? '공익법인 인증마크 제도' : (title || '공익법인 인증마크 제도') + ' | 공익법인 인증마크 제도';
}
function closeMenu(){document.querySelector('#drawer').hidden=true;document.querySelector('#scrim').hidden=true}
document.addEventListener('click', event => {
  const target = event.target;
  if (target.closest('.floating-search') && location.hash.split('?')[0] === '#search') {
    event.preventDefault();
    const input = document.querySelector('#search-form input');
    input?.focus({ preventScroll: true });
    input?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  const option = target.closest('[data-filter-option]');
  if (option) {
    const key = option.dataset.filterOption;
    state[key] = option.dataset.value;
    render();
    document.querySelector('[data-filter-toggle="' + key + '"]')?.focus();
    return;
  }

  const toggle = target.closest('[data-filter-toggle]');
  if (toggle) {
    const menu = document.getElementById('filter-menu-' + toggle.dataset.filterToggle);
    const opening = menu.hidden;
    closeFilters();
    if (opening) {
      menu.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
    }
    return;
  }
  if (!target.closest('.filter-group')) closeFilters();

  if (target.closest('a[href^="#detail/"]')) {
    state.detailOrigin = location.hash.startsWith('#operations') ? 'operations' : 'search';
  }

  const favorite = target.closest('[data-favorite]');
  if (favorite) {
    const id = Number(favorite.dataset.favorite);
    const exists = favorites.includes(id);
    favorites = exists ? favorites.filter(item => item !== id) : [...favorites, id];
    saveFavorites();
    render();
    toast(exists ? '관심 법인에서 삭제했습니다.' : '관심 법인에 저장했습니다.');
    return;
  }

  const destination = target.closest('[data-go]');
  if (destination) {
    location.hash = destination.dataset.go;
    return;
  }

  const detailTab = target.closest('[data-detail-tab]');
  if (detailTab) {
    state.detailTab = detailTab.dataset.detailTab;
    render();
    return;
  }

  const statisticsTab = target.closest('[data-stat-tab]');
  if (statisticsTab) {
    state.statTab = statisticsTab.dataset.statTab;
    render();
    return;
  }

  const action = target.closest('[data-action]')?.dataset.action;
  if (action === 'logout') {
    setDemoUser('');
    demoDraftName = '';
    if (location.hash.startsWith('#account')) location.hash = '#account/login';
    render();
    toast('로그아웃되었습니다.');
    return;
  }
  if (action === 'back') {
    const current = location.hash;
    if (current.startsWith('#detail/')) location.hash = state.detailOrigin;
    else if (current.startsWith('#report/')) location.hash = '#detail/' + current.slice('#report/'.length);
    else if (current === '#report') location.hash = '#statistics';
    else location.hash = '#home';
  }
  if (action === 'menu') {
    document.querySelector('#drawer').hidden = false;
    document.querySelector('#scrim').hidden = false;
  }
  if (action === 'close-menu' || target.id === 'scrim' || target.closest('#drawer a')) closeMenu();
});
document.addEventListener('focusin',e=>{if(!e.target.closest('.filter-group'))closeFilters()});
document.addEventListener('input',e=>{if(e.target.matches('#search-form input[name="query"]')){state.query=e.target.value.trim();refreshSearchResults()}});
document.addEventListener('keydown',e=>{const group=e.target.closest('.filter-group');if(!group)return;const trigger=group.querySelector('[data-filter-toggle]');const menu=group.querySelector('.filter-menu');if(e.key==='Escape'&&!menu.hidden){e.preventDefault();closeFilters();trigger.focus();return}if((e.key==='ArrowDown'||e.key==='ArrowUp')&&e.target===trigger){e.preventDefault();if(menu.hidden){closeFilters();menu.hidden=false;trigger.setAttribute('aria-expanded','true')}const choices=Array.from(menu.querySelectorAll('[role="option"]'));(choices.find(item=>item.getAttribute('aria-selected')==='true')||choices[0]).focus();return}if((e.key==='ArrowDown'||e.key==='ArrowUp'||e.key==='Home'||e.key==='End')&&e.target.matches('[role="option"]')){e.preventDefault();const choices=Array.from(menu.querySelectorAll('[role="option"]'));const index=choices.indexOf(e.target);const next=e.key==='Home'?0:e.key==='End'?choices.length-1:(index+(e.key==='ArrowDown'?1:-1)+choices.length)%choices.length;choices[next].focus()}});
document.addEventListener('change',e=>{if(e.target.dataset.filter){state[e.target.dataset.filter]=e.target.value;render()}});
document.addEventListener('submit',e=>{
  if(e.target.id==='demo-account-form'){
    e.preventDefault();const form=new FormData(e.target);const name=String(form.get('username')||'').trim();const password=String(form.get('password')||'').trim();
    if(!name||!password){toast('아이디와 비밀번호를 입력해 주세요.');return}
    if(e.target.dataset.mode==='signup'){demoDraftName=name;location.hash='#account/login';toast('회원가입 체험이 완료되었습니다. 로그인해 주세요.')}
    else{setDemoUser(name);demoDraftName='';location.hash='#account';render();toast('로그인되었습니다.')}
    return;
  }
  if(e.target.id==='search-form'||e.target.id==='home-search'){e.preventDefault();state.query=new FormData(e.target).get('query').trim();if(e.target.id==='home-search'){state.field='전체';state.region='전체';state.cert='전체';location.hash='search'}else render()}
});
window.addEventListener('hashchange',()=>{state.detailTab='기본정보';render();window.scrollTo(0,0)});render();if (location.protocol.startsWith('http') && ['localhost','127.0.0.1'].includes(location.hostname)) {
  const previewFiles=['index.html','style.css','app.js'];
  let previewVersions=null;
  let previewUpdatePending=false;
  async function checkPreviewFiles(){
    try {
      const responses=await Promise.all(previewFiles.map(file=>fetch(file,{method:'HEAD',cache:'no-store'})));
      if(responses.some(response=>!response.ok))return;
      const versions=responses.map(response=>response.headers.get('last-modified'));
      if(versions.some(value=>!value))return;
      if(previewVersions&&versions.some((value,index)=>value!==previewVersions[index]))previewUpdatePending=true;
      previewVersions=versions;
      const active=document.activeElement;
      const editing=active&&active.matches('input,textarea,[contenteditable="true"]')&&('value' in active?active.value.length>0:active.textContent.trim().length>0);
      if(previewUpdatePending&&!editing)location.reload();
    } catch {}
  }
  checkPreviewFiles();
  setInterval(checkPreviewFiles,2000);
}
