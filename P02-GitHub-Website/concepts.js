/* AI concept art is separated from evidence, measured prototypes and final engineering drawings. */
pages.splice(pages.findIndex(p=>p[0]==='definition'),0,['concepts','十款外观概念']);
$('#navigation').innerHTML=pages.map(([id,name],i)=>`<a id="nav-${id}" href="#${id}"><span>${String(i+1).padStart(2,'0')}</span>${name}</a>`).join('');
views.concepts=function(){
 const designs=D.concepts||[];
 $('#app').innerHTML=label('INDUSTRIAL DESIGN / 2026.10.11','十款 P02 · 从圆盘到海洋光影','每张是一款独立概念板：外观、六面视图、内部爆炸示意、泳池场景与遥控／系泊配件。C01—C10是设计方案编号，全部属于P02产品形态。')+
 `<div class="notice">这些图片由 imagegen 生成，用于讨论外观与结构方向。六面视图之间可能存在细节差异，不能用作尺寸图、开模图或性能证明；水下图案清晰度、覆盖面积、多灯控制与漂浮水线均需实样验证。</div>
 <div class="card"><h3>十款共同保留的设计要求</h3><p>顶部一体太阳能板；清楚分开的开关键与颜色键；圆盘浮体＋向下八面钻石锥壳；固定海洋图案与A/B灯组的概念光路；锥尖独立绑绳环；可选吸盘锚或包覆配重；遥控开关、颜色、亮度、定时及多灯群控。</p><p>图案孔应位于密封壳内的投影片。透明外锥壳不直接穿孔；绳环不打通电池腔。八面外壳是外观构想，不等于已经验证的棱镜成像方案。</p></div>
 <div class="card"><h3>先选外观，再验证光路</h3><p>建议先用C01作为简洁基础款、C05作为浅锥低轮廓对照，比较太阳能有效面积、可识别光影、防水分型面和绑绳稳定性。C02/C06用于探索主题外壳；C04的发光环会增加功耗和结构负担，不作为首发必选功能。</p><p>十款用于选择方向，不意味着同时开十套模。优先共用太阳能／电池／控制平台，再决定是否需要不同外壳模具。多灯遥控在图中表现为群控构想，单灯寻址及同步效果尚未确定。</p></div>
 <div class="conceptLinks">${designs.map(d=>`<a href="#concept-${d.id}" data-concept-jump="${d.id}">${h(d.id)} · ${h(d.name)}</a>`).join('')}</div>
 ${designs.map(d=>`<article class="card conceptBoard" id="concept-${d.id}"><div class="conceptHeading"><div><span class="tag assumption">设计构想 · 未打样</span><h2>${h(d.id)} · ${h(d.name)}</h2><p>${h(d.description)}</p></div><a class="conceptDownload" href="${asset(d.image)}" download="${h(d.id)}_${h(d.name)}.png">下载原图</a></div><img src="${asset(d.image)}" loading="lazy" alt="${h(d.id+' '+d.name)} 产品、六面视图、内部结构及泳池场景" data-image="${asset(d.image)}"><p class="note">${h(d.review)} · 图中的投射图案与光照强度为艺术示意。</p></article>`).join('')}<div class="card"><h3>需要工厂回答的结构问题</h3><p>太阳能板与上壳的封装；浮力及电池重心；连续密封圈与分型面；两颗按键的密封结构；LED与投影片／透光窗的间距；清晰成像所需光学件；遥控接收位置；锥尖绳环强度、绳长与吸盘材质；图案A/B切换是否需要独立透镜。配重不能仅凭图片定重量或采用裸金属。</p></div>`;
 bindImages();document.querySelectorAll('[data-concept-jump]').forEach(a=>a.onclick=e=>{e.preventDefault();document.getElementById('concept-'+a.dataset.conceptJump).scrollIntoView({behavior:'smooth',block:'start'})});
};
if(D)navigate();
