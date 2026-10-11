pages.splice(pages.findIndex(p=>p[0]==='definition'),0,['concepts','十款中文设计方案']);
$('#navigation').innerHTML=pages.map(([id,name],i)=>`<a id="nav-${id}" href="#${id}"><span>${String(i+1).padStart(2,'0')}</span>${name}</a>`).join('');
views.concepts=function(){const designs=D.concepts||[];
$('#app').innerHTML=label('产品设计 · 第二版 · 2026.10.11','十种轮廓，十种设计逻辑','从同一圆盘平台的变体，转向不同的轮廓、密封舱与罩壳组织方式。C01—C10仅为本版设计编号，均属于P02。每款采用相同海洋图案，重点比较外观与设计逻辑。')+
`<div class="notice">全部图内文案以中文生成。每张包含顶视、底视、有按钮侧面、无按钮侧面、概念结构、遥控器和泳池场景。AI四视图的个别细节可能不完全一致；结构、漂浮水线及投射光影为构想，不能用于开模或性能验收。图内更稳、更清晰等语句为设计目标，尚未实测；金属感表面可讨论塑料表面工艺，材质并未确定。</div>
<div class="card"><h3>两层罩壳也可以成立</h3><p>你提出的“内层透明罩＋外层镂空罩”作为C02的重点：内层封闭光舱负责防水，外罩镂空负责图案与外观，夹层允许进水且需要排水、清洁及防积垢。外罩孔与光源距离、光源大小、底部窗口折射都会影响成像，不能仅凭镂空就承诺清晰投射。</p><p>其他方案比较内部图案片＋密封底窗、护肋＋透明内筒、双底窗光路。开关与换色保留独立按键；绳耳不穿通电池腔，吸盘锚和包覆配重作为可选配件。</p></div>
<div class="card"><h3>优先打样的比较方式</h3><p>C01浮石：检验平底、克制外观与基础投影。C02双层海雕：检验内密封外镂空的图案效果与清洁难度。C06棱岛：检验几何外形与共享光路模块。先验证这三种结构差异，再决定外壳和开模数量。C03悬环、C08双翼结构更复杂；C09可选光带另算耗电。</p></div>
<div class="conceptLinks">${designs.map(d=>`<a href="#concept-${d.id}" data-concept-jump="${d.id}">${h(d.id)} · ${h(d.name)}</a>`).join('')}</div>
${designs.map(d=>`<article class="card conceptBoard" id="concept-${d.id}"><div class="conceptHeading"><div><span class="tag assumption">第二版 · 未打样</span><h2>${h(d.id)} · ${h(d.name)}</h2><p>${h(d.description)}</p></div><a class="conceptDownload" href="${asset(d.image)}" download="${h(d.id+'_'+d.name)}_中文第二版.png">下载原图</a></div><img src="${asset(d.image)}" loading="lazy" alt="${h(d.id+' '+d.name)} 中文设计方案、四视图、结构和场景" data-image="${asset(d.image)}"><p class="note">${h(d.review)}</p></article>`).join('')}
<div class="card"><h3>选择后必须统一的工程细节</h3><p>实际太阳能有效面积、电池与重心、浮力水线、密封分型面、按键密封、图案与光源间距、折射与图案畸变、遥控协议与接收位置、绳耳强度及系泊倾斜、材料耐氯耐晒。外镂空罩方案额外检查夹层积水、清洁、装配和可拆维护。当前板上的模块位置并非已确认装配结构。</p></div>`;bindImages();document.querySelectorAll('[data-concept-jump]').forEach(a=>a.onclick=e=>{e.preventDefault();document.getElementById('concept-'+a.dataset.conceptJump).scrollIntoView({behavior:'smooth',block:'start'})});};
if(D)navigate();
