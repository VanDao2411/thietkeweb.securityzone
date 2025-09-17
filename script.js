// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');}})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// FAQ accordion
document.querySelectorAll('#faq .q').forEach((q)=>{
  q.addEventListener('click',()=>{
    const isOpen = q.classList.contains('active');
    document.querySelectorAll('#faq .q').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('#faq .a').forEach(x=>x.style.display='none');
    if(!isOpen){
      q.classList.add('active');
      const a = q.nextElementSibling; a.style.display='block';
    }
  });
});