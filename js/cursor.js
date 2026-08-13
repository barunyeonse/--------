/* ============================================================
   브랜드색 원형 커서 (2026-08-13 추가)
   PC(마우스 포인터가 있는 기기)에서만 동작. 모바일/태블릿(터치 전용)에서는
   자동으로 비활성 상태를 유지해 기본 터치 동작을 방해하지 않습니다.
   ============================================================ */
(function () {
  if (!window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  var dot = document.createElement('div');
  dot.id = 'cursor-dot';
  var ring = document.createElement('div');
  ring.id = 'cursor-ring';
  document.body.appendChild(ring);
  document.body.appendChild(dot);
  document.body.classList.add('has-custom-cursor');

  var mx = window.innerWidth / 2, my = window.innerHeight / 2;
  var rx = mx, ry = my;

  window.addEventListener('mousemove', function (e) {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  }, { passive: true });

  function loop() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  }
  loop();

  var hoverSelector = 'a, button, .btn, .card, .program-photo-card, .tilt-card, [data-cursor-hover]';
  document.addEventListener('mouseover', function (e) {
    if (e.target.closest(hoverSelector)) document.body.classList.add('cursor-hover');
  });
  document.addEventListener('mouseout', function (e) {
    if (e.target.closest(hoverSelector)) document.body.classList.remove('cursor-hover');
  });
})();
