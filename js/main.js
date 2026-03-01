// Services
const services = [
    { icon: "fas fa-dumbbell", title: "رفع الأثقال", desc: "أحدث الأجهزة والمعدات لبناء العضلات وزيادة القوة" },
    { icon: "fas fa-running", title: "الكارديو", desc: "أجهزة كارديو متطورة لحرق الدهون وتحسين اللياقة" },
    { icon: "fas fa-user-tie", title: "مدرب شخصي", desc: "مدربون محترفون لمساعدتك في تحقيق أهدافك" },
    { icon: "fas fa-apple-alt", title: "تغذية رياضية", desc: "برامج غذائية متخصصة لدعم أهدافك الرياضية" },
    { icon: "fas fa-users", title: "كلاسات جماعية", desc: "زومبا، يوجا، بوكس وأكتر من 10 أنشطة مختلفة" },
    { icon: "fas fa-spa", title: "سبا وسونا", desc: "استرخاء تام بعد التمرين مع سبا وسونا متكاملة" }
];

// Trainers
const trainers = [
    { img: "https://randomuser.me/api/portraits/men/32.jpg", name: "أحمد محمد", specialty: "بناء الجسم", exp: "خبرة 8 سنوات" },
    { img: "https://randomuser.me/api/portraits/men/42.jpg", name: "كريم سامي", specialty: "كارديو ويوجا", exp: "خبرة 5 سنوات" },
    { img: "https://randomuser.me/api/portraits/men/55.jpg", name: "محمد علي", specialty: "باور ليفتينج", exp: "خبرة 10 سنوات" },
    { img: "https://randomuser.me/api/portraits/men/76.jpg", name: "عمر حسن", specialty: "فتنس وكارديو", exp: "خبرة 6 سنوات" }
];

document.getElementById('services-grid').innerHTML = services.map(s => `
    <div class="service-card reveal">
        <i class="${s.icon}"></i>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
    </div>
`).join('');

document.getElementById('trainers-grid').innerHTML = trainers.map(t => `
    <div class="trainer-card reveal">
        <img src="${t.img}" alt="${t.name}">
        <div class="trainer-info">
            <h3>${t.name}</h3>
            <p>${t.specialty}</p>
            <span>${t.exp}</span>
        </div>
    </div>
`).join('');

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Counter
function animateCounter(el) {
    const target = +el.dataset.target;
    const step = target / 50;
    let current = 0;
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            el.textContent = '+' + target;
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, 40);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

// Navbar
window.addEventListener('scroll', () => {
    document.querySelector('.navbar').style.boxShadow =
        window.scrollY > 50 ? '0 5px 30px rgba(0,0,0,0.5)' : 'none';
});

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
});

// Lightbox
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('lightbox-img').src = item.querySelector('img').src;
        document.getElementById('lightbox').classList.add('open');
    });
});

document.querySelector('.close-lightbox').addEventListener('click', () => {
    document.getElementById('lightbox').classList.remove('open');
});

document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) e.currentTarget.classList.remove('open');
});

// Form
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('تم الاشتراك بنجاح! هنتواصل معاك قريباً ✅');
    e.target.reset();
});

// Scroll Top
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('show', window.scrollY > 500);
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
    }, 1500);
});

// Testimonials
const testimonials = [
    { text: "أحسن جيم جربته في حياتي، المدربين محترفين والأجهزة حديثة جداً", name: "محمد سامي", role: "عضو منذ سنتين", img: "https://randomuser.me/api/portraits/men/11.jpg" },
    { text: "في 3 شهور حققت هدفي وخسيت 15 كيلو بفضل المدرب الشخصي", name: "أحمد علي", role: "عضو منذ سنة", img: "https://randomuser.me/api/portraits/men/22.jpg" },
    { text: "الكلاسات الجماعية رائعة والجو حماسي جداً، بنصح بيه الكل", name: "خالد حسن", role: "عضو منذ 6 شهور", img: "https://randomuser.me/api/portraits/men/33.jpg" }
];

document.getElementById('testimonials-grid').innerHTML = testimonials.map(t => `
    <div class="testimonial-card reveal">
        <div class="stars">★★★★★</div>
        <p>"${t.text}"</p>
        <div class="patient-info">
            <img src="${t.img}" alt="${t.name}">
            <div>
                <h4>${t.name}</h4>
                <span>${t.role}</span>
            </div>
        </div>
    </div>
`).join('');

// BMI Calculator
function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);

    if (!height || !weight) {
        alert('أدخل الطول والوزن الأول!');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    document.getElementById('bmi-value').textContent = bmi;

    let status, advice, color;
    if (bmi < 18.5) {
        status = 'نحيف 😟';
        advice = 'محتاج تزيد وزنك، هنساعدك ببرنامج مناسب';
        color = '#0099ff';
    } else if (bmi < 25) {
        status = 'وزن مثالي 💪';
        advice = 'وزنك مثالي! استمر في التمرين للحفاظ عليه';
        color = '#00ff88';
    } else if (bmi < 30) {
        status = 'زيادة وزن ⚠️';
        advice = 'محتاج تنزل شوية وزن، عندنا برنامج مناسب ليك';
        color = '#FFD700';
    } else {
        status = 'سمنة 🚨';
        advice = 'محتاج تبدأ فوراً، هنساعدك توصل لوزنك المثالي';
        color = '#ff4444';
    }

    document.getElementById('bmi-status').textContent = status;
    document.getElementById('bmi-advice').textContent = advice;
    document.getElementById('bmi-circle').style.borderColor = color;
    document.getElementById('bmi-value').style.color = color;
}

// FAQ
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
    });
});

// Re-observe new elements
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
