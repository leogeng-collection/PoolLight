pages.splice(pages.findIndex(p=>p[0]==='definition'),0,['concepts','素白海钻 · 十款设计']);
$('#navigation').innerHTML=pages.map(([id,name],i)=>`<a id="nav-${id}" href="#${id}"><span>${String(i+1).padStart(2,'0')}</span>${name}</a>`).join('');
views.concepts=function(){const designs=D.concepts||[];
$('#app').innerHTML=label('全新设计 · 2026.10.13','素白海钻 · 同一产品家族的十款细化','本轮从零生成，未使用任何旧概念图。全部为正圆顶部＋向下圆锥，纯白、温润、居家；差异集中在轮廓比例、切面、图案布局和细节。')+
`<div class="notice">图中纯白壳体仅表达细腻哑光外观，不代表陶瓷或金属材质。材料与触感需通过样板确认。内部结构、双灯组独立调色、多灯遥控、浮力水线和光影都是待验证的设计构想；AI各视图仍可能有小差异，不能直接开模。</div>
<div class="card"><h3>本轮不可变的六项要求</h3><p>①正圆顶盘，大部分可用面积为太阳能板。②恰好两键：开关、换色。③圆锥下壳与顶盘同轴。④两组彩色灯可独立变色。⑤内层完整密封透明透光罩、外层白色镂空海洋剪影罩。⑥唯一绑绳耳在锥尖最低端、中心轴线上；配重和吸盘锚为外部配件。</p><p>绳耳与电池／光舱密封隔离。细绳从中心垂直向下，出光面环绕周边，目标是减少侧拉和主要图案遮挡；居中本身不保证不倾斜或零阴影，仍需测试绳张力、浮力重心和实际投射。</p></div>
<div class="card"><h3>光路与罩壳分工</h3><p>灯组甲与乙分别调色、交替或交叠出光；内锥罩负责密封，外锥罩的动物负形孔负责图案构想。孔洞不能打穿内密封罩。外罩夹层允许进水，因此需要排水、清洁、防积垢和可维护结构。</p><p>真实图案清晰度取决于光源大小、孔与光源间距、内罩折射、水深及外罩曲率。不能仅凭镂空就承诺锐利图案；必要时需调整光路。遥控灯组甲／乙为功能方向，不表示已确定硬件协议。</p></div>
<div class="conceptLinks">${designs.map(d=>`<a href="#concept-${d.id}" data-concept-jump="${d.id}">${h(d.id)} · ${h(d.name)}</a>`).join('')}</div>
${designs.map(d=>`<article class="card conceptBoard" id="concept-${d.id}"><div class="conceptHeading"><div><span class="tag assumption">全新第三版 · 未打样</span><h2>${h(d.id)} · ${h(d.name)}</h2><p>${h(d.description)}</p></div><a class="conceptDownload" href="${asset(d.image)}" download="${h(d.id+'_'+d.name)}.png">下载原图</a></div><img src="${asset(d.image)}" loading="lazy" alt="${h(d.id+' '+d.name)} 全新白色正圆盘圆锥设计、中文四视图、结构与中心绑绳示意" data-image="${asset(d.image)}"><p class="note">${h(d.review)}</p></article>`).join('')}
<div class="card"><h3>建议先对比的样品</h3><p>D01作为基础八面款；D02比较柔和连续曲面；D08与D09比较浅锥／深锥。先用共用双灯组、密封内罩和系泊配件验证图案与稳定性，再选择外镂空罩。十款不意味着需要十套独立完整模具，能否共用零件须由结构工程确认。</p></div>`;bindImages();document.querySelectorAll('[data-concept-jump]').forEach(a=>a.onclick=e=>{e.preventDefault();document.getElementById('concept-'+a.dataset.conceptJump).scrollIntoView({behavior:'smooth',block:'start'})});};
if(D)navigate();
