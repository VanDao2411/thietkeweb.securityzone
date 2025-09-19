// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); } })
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// FAQ accordion
document.querySelectorAll('#faq .q').forEach((q) => {
  q.addEventListener('click', () => {
    const isOpen = q.classList.contains('active');
    document.querySelectorAll('#faq .q').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('#faq .a').forEach(x => x.style.display = 'none');
    if (!isOpen) {
      q.classList.add('active');
      const a = q.nextElementSibling; a.style.display = 'block';
    }
  });
});

document.querySelectorAll('#solutions .more-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const opened = card.classList.toggle('open');
    // đổi nhãn nút
    btn.textContent = opened ? 'Thu gọn ↑' : 'Xem thêm →';
  });
});


const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
  });

  // Đóng menu sau khi chọn 1 mục (mobile)
  navMenu.addEventListener('click', e => {
    if (e.target.matches('.nav-links a')) {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
