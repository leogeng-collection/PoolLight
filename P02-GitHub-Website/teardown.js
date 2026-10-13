/* 2026-10-13 teardown revision: facts and proposals are deliberately separated. */
pages.splice(pages.findIndex(p=>p[0]==='quality'),0,['teardown','拆机与防水深化']);
const conceptNav=pages.find(p=>p[0]==='concepts');if(conceptNav)conceptNav[1]='小方盒修订 · 九种配色';
$('#navigation').innerHTML=pages.map(([id,name],i)=>`<a id="nav-${id}" href="#${id}"><span>${String(i+1).padStart(2,'0')}</span>${name}</a>`).join('');
const revisionNotice=()=>`<div class="notice td-revision"><strong>2026.10.13 拆机修订</strong><p>当前方案已按实物修订：七LED、电池与控制集中于中央小方盒，小光窗不铺满圆盘；外罩多动物均衡错列，锥尖三短脚＋一个中心穿孔耳，共四个凸起。遥控器改为单开关键，不设甲／乙／全部；经济版仅发送指示灯。此前双组独立光路与复杂遥控属于历史探索，未定型。</p><a href="#teardown">查看完整拆机与防水报告 →</a></div>`;
CONTENT.features=[
 ['太阳能与储能','必须验证','透明穹顶下正圆面板；电池/控制集中于中央小方盒，太阳能引线及透明圆盘底罩连接单独评审，首版无USB口','干/湿/老化罩的入电量；夜间模式、待机与高温充电'],
 ['紧凑核心密封','首要门槛','小方盒内电池/PCB/LED焊点保护，小光窗完整；盒体/底罩/引线/按钮逐项评审，外镂空罩允许进水','密封圈或焊缝/胶接对照，老化后复测，不能只看胶多厚'],
 ['七颗LED与海洋纹样','照片支持＋待测','中央白1，外围RGB各2；实际通道由原理图/点亮确认','多重影、轮廓识别、遮光、真实功耗；不宣称七独立通道'],
 ['本体双键','必须','开关＋换色，与穹顶一体化；按钮膜也是密封边界','湿按、回弹、寿命及之后的浸水'],
 ['经济型遥控','首版建议','一个开关键，红绿蓝及验证后的白；常亮/渐变/可选闪烁','IR先报价实测，不通过再比RF；无甲/乙/全部按钮'],
 ['多灯开关逻辑','必须验证','同一按键设计显式开/关命令与强制关恢复，不盲目翻转每灯状态','1/2/4灯漏收、重复指令、状态反相、低电'],
 ['2/4小时与取消','首版建议','收到命令开始计时；是否次夜记忆与感光优先规则写明','计时完不误重启，取消和掉电恢复'],
 ['指示灯','最低成本反馈','仅一枚发送灯；颜色/模式保持灯和双向状态另报价','发送不等于收到；不虚假显示灯具实际状态'],
 ['水线与浮力','必须','全镂空罩在水下，顶部按钮可用；靠浮力设计，不靠拉紧绳','静水、浪、翻转、泡沫吸水、无绳与系泊'],
 ['三脚与中心绳耳','必须','锥尖附近三短薄片脚约120°，中心带孔小耳；总四凸起，脚底共面略低于孔耳，不穿模组','桌面倾倒、整罩拉力、跌落、投影遮挡'],
 ['配件','验证后定','无绳漂浮默认；短绳/配重/吸盘分别验证再定是否标配','池面适配、痕迹、脱落、绳结和侧拉'],
 ['亮度/混色','候选报价','不先承诺7种均匀混色；亮度档位按光学和成本决定','分离RGB可能产生不同色影，白光通道与续航分别测'],
 ['App/电机换片','首版不做','资源优先用于密封、光学、能量与简单操作','达到核心门槛再考虑升级']
];
function tdCards(){return D.teardown.figures.map(f=>`<article class="card conceptBoard" id="concept-${f.id}"><div class="conceptHeading"><div><span class="tag assumption">本轮概念 · 尚未打样</span><h2>${h(f.id)} · ${h(f.name)}</h2></div><a class="conceptDownload" href="${asset(f.image)}" download="${f.id}.png">下载原图</a></div><img loading="lazy" src="${asset(f.image)}" alt="${h(f.name)}，中文设计概念图" data-image="${asset(f.image)}"><p class="note">${h(f.note)}</p></article>`).join('')}
views.concepts=function(){const t=D.teardown;$('#app').innerHTML=label('DESIGN REVISION / 2026.10.13','小方盒结构修订 · 四图与九种配色','本轮修订四张结构/外观图，并新增一张九色对照：小方盒集中模组、小光窗、锥尖三短脚与中心孔，以及均衡多动物镂空。')+revisionNotice()+`<div class="actions"><button data-go="teardown">读完整拆机报告</button><a class="conceptDownload" href="${asset(t.report)}" download="P02拆机分析与防水开发报告.md">下载文字报告</a></div><div class="conceptLinks">${t.figures.map(f=>`<a href="#concept-${f.id}" data-tdjump="concept-${f.id}">${f.id} · ${h(f.name)}</a>`).join('')}</div>`+tdCards()+`<details class="card td-history"><summary>历史外观探索：原十款方案（不作为当前规格）</summary><p>这里保留前期造型比较。棱线、分瓣、双组遥控与大内锥等已被最新建议收敛；请以本轮四张图和文字报告为准。</p>${(D.concepts||[]).map(f=>`<article><h3>${h(f.id+' · '+f.name)}</h3><img loading="lazy" src="${asset(f.image)}" alt="历史概念 ${h(f.name)}" data-image="${asset(f.image)}"></article>`).join('')}</details>`;tdBind();bindGo();};
const tdRisks=[
 {name:'周向接缝',status:'风险候选',body:'黑色环与搭接不是已证实漏点。先对未拆样复现进水，再比较连续圈槽、受控压紧与验证后的焊缝；减少透明拼块。',go:'td-05'},
 {name:'按钮边界',status:'必须评审',body:'顶部仍只有开关/换色两键。按键膜、密封座和装配都是水密边界；湿按与寿命后重新浸水。',go:'td-04'},
 {name:'LED与光窗',status:'七颗照片支持',body:'中央白1＋RGB各2。控制与电池集中于小方盒，通过盒底小光窗出光；外围六颗不能直接当成六个独立驱动通道。',go:'td-03'},
 {name:'浮力与水线',status:'待水上样',body:'浮力环不是密封圈。大内锥可能增加浮力；整个镂空罩浸水的目标需靠体积与重心实现，不能靠系泊绳向下拉。',go:'td-07'},
 {name:'三脚与绳耳',status:'外湿区机械件',body:'三短片角脚与中心孔耳都聚在锥尖，脚底共面略低于孔耳；整罩连接链要一起做拉力试验。绳耳不穿干舱，仍需检查绳与脚的阴影。',go:'td-10'}
];
views.teardown=function(){const t=D.teardown;$('#app').innerHTML=label('TEARDOWN / 2026.10.13','把防水变成可检验的结构','9张旧品拆机照片＋1张外观参考；一份15节修订报告，中央小方盒与三短脚按最新照片核对；新增九配色。')+
`<div class="td-hero"><div><span class="pill">当前建议 · 不等于量产批准</span><h2>小方盒集中核心，外罩有序镂空。</h2><p>电池、电路和小光窗集中在太阳能板下方的小方盒，不占满圆盘；先验证模组接缝、光学和水线，再冻结模具。</p><div class="actions"><a href="${asset(t.report)}" download="P02拆机分析与防水开发报告.md">下载完整文字报告 ↓</a><button data-go="concepts">看修订图与九配色</button></div></div><div class="td-count"><strong>7</strong><span>LED器件</span><small>中央白×1 / 红绿蓝各×2<br>通道数量仍需确认</small></div></div>`+
`<div class="card"><h3>五个部位，逐项核对</h3><div class="tabs" id="td-risk-tabs">${tdRisks.map((r,i)=>`<button data-tdrisk="${i}" class="${i===0?'active':''}" aria-pressed="${i===0}">${h(r.name)}</button>`).join('')}</div><div id="td-risk-detail"></div></div>`+
`<div class="card"><h3>原始照片证据</h3><p class="note">E01是用户认可的生成外观参考；E02—E10为实物拆机照片。点击查看原图；没有照片支持的材料或失效原因不作确认。</p><div class="tabs" id="td-evidence-tabs">${['全部','LED','密封','结构','外壳','参考'].map((c,i)=>`<button data-tdevidence="${c}" class="${i===0?'active':''}" aria-pressed="${i===0}">${c}</button>`).join('')}</div><div class="td-evidence" id="td-evidence-grid"></div></div>`+
`<div class="card"><h3>七LED位置与模式示意</h3><div class="td-ledlayout"><div><div class="td-ledboard" id="td-ledboard" role="img" aria-label="中央白一颗，周围红绿蓝各两颗"><span class="td-led white center" data-led="白">白</span>${['蓝','红','绿','蓝','红','绿'].map((c,i)=>`<span class="td-led ${c==='红'?'red':c==='绿'?'green':'blue'} pos${i}" data-led="${c}">${c}</span>`).join('')}</div></div><div><div class="tabs" id="td-led-tabs">${['白','红','绿','蓝','全部'].map((c,i)=>`<button data-tdled="${c}" class="${i===0?'active':''}" aria-pressed="${i===0}">${c==='全部'?'全部点亮对照':c+'光'}</button>`).join('')}</div><p>这是照片颜色数量的示意，非电路仿真。各色同一对是否共用一路要核对走线；多光源可能带来双影，也可能让小图案叠糊。</p><p class="note">“全部点亮”是研究对照按钮，产品遥控器不提供“全部”分组键。</p></div></div></div>`+
`<div class="td-toc card"><h3>完整报告 · 15个主题</h3><input id="td-report-search" type="search" aria-label="搜索报告章节" placeholder="搜索：密封、遥控、吸盘、工厂……"><div class="conceptLinks">${t.sections.map(s=>`<a href="#${s.id}" data-tdjump="${s.id}">${h(s.title)}</a>`).join('')}</div><p id="td-report-count" class="note"></p></div><div id="td-report">${t.sections.map(s=>`<section class="card td-section" id="${s.id}" data-title="${h(s.title)}"><h2>${h(s.title)}</h2>${s.html}</section>`).join('')}</div>`;
 function risk(i){const r=tdRisks[i];$('#td-risk-detail').innerHTML=`<span class="tag assumption">${h(r.status)}</span><h3>${h(r.name)}</h3><p>${h(r.body)}</p><a href="#${r.go}" data-tdjump="${r.go}">跳到报告依据 →</a>`;document.querySelectorAll('[data-tdrisk]').forEach(b=>{const on=+b.dataset.tdrisk===i;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on)});tdBind();}risk(0);document.querySelectorAll('[data-tdrisk]').forEach(b=>b.onclick=()=>risk(+b.dataset.tdrisk));
 function photos(c){$('#td-evidence-grid').innerHTML=t.evidence.filter(e=>c==='全部'||e.category===c).map(e=>`<figure><img loading="lazy" src="${asset(e.image)}" alt="${h(e.id+' '+e.caption)}" data-image="${asset(e.image)}"><figcaption><strong>${h(e.id)} · ${h(e.category)}</strong><span>${h(e.caption)}</span></figcaption></figure>`).join('');bindImages();document.querySelectorAll('[data-tdevidence]').forEach(b=>{const on=b.dataset.tdevidence===c;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on)});}photos('全部');document.querySelectorAll('[data-tdevidence]').forEach(b=>b.onclick=()=>photos(b.dataset.tdevidence));
 function leds(c){document.querySelectorAll('[data-led]').forEach(e=>e.classList.toggle('lit',c==='全部'||e.dataset.led===c));document.querySelectorAll('[data-tdled]').forEach(b=>{const on=b.dataset.tdled===c;b.classList.toggle('active',on);b.setAttribute('aria-pressed',on)});}leds('白');document.querySelectorAll('[data-tdled]').forEach(b=>b.onclick=()=>leds(b.dataset.tdled));
 $('#td-report-search').oninput=()=>{const q=$('#td-report-search').value.trim().toLowerCase();let count=0;document.querySelectorAll('.td-section').forEach(s=>{const show=s.textContent.toLowerCase().includes(q);s.hidden=!show;if(show)count++});$('#td-report-count').textContent=`显示 ${count} / ${t.sections.length} 个章节`;};$('#td-report-search').oninput();tdBind();bindGo();};
function tdBind(){bindImages();document.querySelectorAll('[data-tdjump]').forEach(a=>a.onclick=e=>{e.preventDefault();const target=document.getElementById(a.dataset.tdjump);if(target){target.hidden=false;target.scrollIntoView({behavior:'smooth',block:'start'})}});}
// Retain source-backed market content, but make current hardware direction prominent.
for(const route of ['overview','quality','plan']){const original=views[route];views[route]=function(){original();$('#app').insertAdjacentHTML('afterbegin',revisionNotice());if(route==='overview'){
 const hero=$('.hero');if(hero){hero.querySelector('h2').textContent='象牙白圆盘 + 七LED海洋投射 + 简化遥控';}
 const cards=document.querySelectorAll('#app>.grid3 .card');if(cards.length>=3){cards[1].innerHTML='<h3>先验证七LED光效</h3><p>中央白与外围RGB双灯支持彩影思路，密孔与多重影仍需水中验证；双组独立光路是历史候选。</p>';cards[2].innerHTML='<h3>一个开关键，基础直选色</h3><p>不设置甲组／乙组／全部键。经济遥控先测试池边接收；同键开关的多灯漏收恢复一起设计。</p>';}
}};}
views.definition=function(){$('#app').innerHTML=label('PRODUCT DEFINITION / 更新2026.10.13','一款外观，一个可靠核心','根据旧品拆机把结构、交互与光学假设收敛。下表是本轮任务定义，不代表功能已经实现。')+revisionNotice()+`<div class="grid2"><div class="card"><h3>外观与结构</h3><p>象牙白外壳、正圆透明浅穹顶、开关／换色双键。太阳能板下方中央小方盒容纳控制、电池与七LED，通过小光窗出光；圆盘周边保留空间。八种海洋动物均衡错列在可进水外罩，锥尖三短片角与中心孔耳不穿模组。</p></div><div class="card"><h3>灯效与遥控</h3><p>照片支持中央白1＋RGB各2共七颗，具体通道未核实。遥控仅一个开关键、基础选色、常亮／渐变／可选闪烁与定时，不展示甲／乙／全部。经济版本用发送灯反馈，真实灯具状态需回传。</p></div></div><div class="card"><h3>首版功能任务表</h3>${table(['功能','优先级','建议定义','验证要点'],CONTENT.features.map(r=>r.map(h)))}</div><div class="notice">全镂空罩浸水、小孔放大和彩影只是假设，必须先验证水线、目标水深、有限光源造成的模糊、太阳能预算与密封。装饰氛围不替代安全照明。</div><div class="actions"><button data-go="teardown">完整结构与工厂验证</button><button data-go="concepts">看四张设计图</button></div>`;bindGo();};
const currentDefinition=views.definition;
views.definition=function(){currentDefinition();$('#app').insertAdjacentHTML('beforeend',`<div class="card"><h3>太阳能与续航预算 · 假设可修改</h3><div class="formgrid">${numField('load','亮灯电池侧平均功耗 W',.5,.05)}${numField('hours','目标亮灯小时',6,.5)}${numField('sun','等效满日照小时／天',3.5,.5)}${numField('eff','太阳能入电池有效系数',.6,.05)}${numField('voltage','电池额定电压 V',3.7,.1)}${numField('capacity','电池容量 mAh',2200,100)}${numField('usable','可用能量比例',.7,.05)}${numField('standby','不亮灯待机功耗 W',.002,.001)}</div><div id="energyResult" class="result"></div><p class="note">例子参数不是拆机测量。七LED各模式、透明罩透光损失和太阳能实际入电必须补测。</p></div>`);document.querySelectorAll('.formgrid input').forEach(e=>e.oninput=energy);energy();};
CONTENT.steps=[
 ['旧品基线与漏点复现','先做','核对七颗LED、通道、太阳能、电池、待机；未拆样复现漏点。照片不能确认胶材和失效位置。','BOM、通道表、原理图、同条件视频及失效记录'],
 ['小方盒密封样','工厂确认周期','方盒接缝、小光窗、底罩结合、引线及按钮分别评审；受控圈槽、胶接和焊缝候选比较。','核心密封与能量预算先通过'],
 ['纹样与光学对照','与密封样并行','多种海洋动物均衡、环向错列；小/中孔和稀/密，白单灯、RGB及同色双影。','目标水深的未修饰投射影片，避免密孔叠糊'],
 ['浮力、三脚与经济遥控','结构样阶段','全镂空浸水、按钮可用；三脚低于绳耳；一个开关键、多灯漏收可恢复。','水线不依赖紧绳；误操作、按键、附件独立验证'],
 ['联合冻结后开模','周期报价后定','结构/密封/光学/电路/材料与详细成本共同批准，再开量产模；不以AI图开模。','工程图、公差、BOM、模具归属、测试与控制计划'],
 ['试产与老化复测','建议6—8周跟踪','建议至少30台覆盖多模腔/批次，出货逐台功能与关联密封筛查；失败拆机整改。','量产件重测，老化后密封、光学、充电与水线验证']
];
for(const row of CONTENT.tests){
 if(row[0]==='遥控'){row[1]='1/2/4灯、目标距离待定、朝向/强光/低电';row[2]='每条件100次指令起始，IR先测，不通过再比较RF；同键显式开关和漏收恢复';row[3]='成功率目标书面约定；不出现反相循环；发送灯不等于状态确认';}
 if(row[0]==='图案识别与覆盖'){row[1]='建议0.5/1/1.5/2m，浅深池底，静水/波纹';row[2]='白、红、绿、蓝、同色双灯和RGB分别同曝光拍摄；孔径密度对照';row[3]='实际有效水深才宣传；多影不能严重叠糊；阈值经样品讨论';}
}
const sourceOriginal=views.sources;views.sources=function(){sourceOriginal();$('#app').insertAdjacentHTML('afterbegin',revisionNotice()+`<div class="card"><h3>本轮新增证据与技术来源</h3><p>9张拆机实物照片、1张外观参考、4张概念图、15节结构报告。材料/胶型/通道仍待确认。Parker、Branson、Dow、Gore、Vishay、IEC与CPSC来源在报告相应论点旁给出。</p><a href="#teardown">查看逐张证据及来源 →</a></div>`);};
$('#exportBrief').onclick=()=>{if(D?.teardown)download('P02拆机与产品开发任务书_20261013.md',D.teardown.markdown,'text/markdown;charset=utf-8');};
if(D)navigate();
