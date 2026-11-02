
(function(){
  var imgs=[].slice.call(document.querySelectorAll('.slides img')); if(!imgs.length) return;
  var lb=document.createElement('div'); lb.id='lb';
  lb.innerHTML='<img alt=""><div class="bar"><button data-d="-1">‹ Trước</button><span></span><button data-d="1">Sau ›</button><button data-d="0">Đóng ✕</button></div>';
  document.body.appendChild(lb);
  var cur=0, im=lb.querySelector('img'), sp=lb.querySelector('span');
  function go(i){cur=(i+imgs.length)%imgs.length; im.src=imgs[cur].src; im.alt=imgs[cur].alt; sp.textContent=(cur+1)+' / '+imgs.length}
  imgs.forEach(function(x,i){x.addEventListener('click',function(){go(i); lb.classList.add('on')})});
  lb.addEventListener('click',function(e){var d=e.target.getAttribute&&e.target.getAttribute('data-d');
    if(d===null||d===undefined){ if(e.target===lb) lb.classList.remove('on'); return }
    d=+d; if(d===0) lb.classList.remove('on'); else go(cur+d)});
  document.addEventListener('keydown',function(e){ if(!lb.classList.contains('on')) return;
    if(e.key==='Escape') lb.classList.remove('on'); if(e.key==='ArrowRight') go(cur+1); if(e.key==='ArrowLeft') go(cur-1)});
})();
