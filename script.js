let currentLang = localStorage.getItem('portfolio_lang') || 'en';
let cardObserver = null;

function observeCards() {
    if (!cardObserver) {
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -30% 0px',
            threshold: 0
        };

        cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, observerOptions);
    } else {
        cardObserver.disconnect();
    }

    document.querySelectorAll('.editorial-card, .gallery-item').forEach(card => {
        cardObserver.observe(card);
    });
}

function updateNavLabels() {
    document.querySelectorAll('.sidebar-links a').forEach(a => {
        const text = a.getAttribute(`data-${currentLang}`);
        if (text) a.textContent = text;
    });
}

function renderPortfolio(data) {
    if (!data) return;

    // Render Hero
    const heroContainer = document.getElementById('hero-container');
    if (heroContainer && data.hero) {
        heroContainer.innerHTML = `
            <div class="hero-left">
                <span class="mono-tag block-tag">${data.hero.tag}</span>
                <h1 class="hero-title">${data.hero.title}</h1>
            </div>
            <div class="hero-right">
                <div class="bio-box">
                    <p class="bio">
                        <span class="drop-cap">${data.hero.bioDropCap}</span>${data.hero.bioText}
                    </p>
                </div>
                <div class="tags-container">
                    ${data.hero.tags.map(tag => `<p class="mono-tag">${tag}</p>`).join('')}
                </div>
                <div class="social-links-editorial">
                    ${data.hero.socialLinks.map(link => `<a href="${link.url}">${link.label}</a>`).join('')}
                </div>
            </div>
        `;
    }

    // Render Education
    const eduGrid = document.getElementById('education-grid');
    if (eduGrid && data.education) {
        const degreesHtml = data.education.degrees.map(deg => `
            <div class="article-block">
                <div class="article-meta">
                    <span class="mono-tag">${deg.date}</span>
                    ${deg.gpa ? `<span class="mono-tag accent-red">${deg.gpa}</span>` : ''}
                </div>
                <h4 class="article-headline">${deg.title}</h4>
                <p class="article-sub">${deg.subtitle}</p>
            </div>
        `).join('');

        const honorsHtml = data.education.honors.map(honor => `
            <li>
                <span class="list-bullet">${honor.number}</span>
                <div>
                    <strong>${honor.title}</strong>
                    <p>${honor.description}</p>
                </div>
            </li>
        `).join('');

        eduGrid.innerHTML = `
            <div class="editorial-col border-right">
                <h3 class="col-header">${currentLang === 'en' ? 'Academic Background' : '学业背景'}</h3>
                ${degreesHtml}
            </div>
            <div class="editorial-col">
                <h3 class="col-header">${currentLang === 'en' ? 'Honors & Leadership' : '荣誉与领导力'}</h3>
                <ul class="editorial-list">
                    ${honorsHtml}
                </ul>
            </div>
        `;
    }

    // Render Experience
    const expGrid = document.getElementById('experience-grid');
    if (expGrid && data.experience) {
        expGrid.innerHTML = data.experience.map((exp, index) => {
            const isReverse = index % 2 !== 0;
            const reverseClass = isReverse ? ' reverse' : '';
            
            let imageHtml = '';
            if (exp.images && exp.images.length === 2) {
                imageHtml = `
                    <div class="card-image-col">
                        <div class="image-stack">
                            <div class="image-stack-bottom">
                                <img src="${exp.images[1]}" alt="Secondary Image">
                            </div>
                            <div class="image-stack-top">
                                <img src="${exp.images[0]}" alt="${exp.company}">
                            </div>
                        </div>
                    </div>
                `;
            } else {
                const imgSrc = exp.images ? exp.images[0] : exp.image;
                imageHtml = `
                    <div class="card-image-col">
                        <div class="card-image">
                            <img src="${imgSrc}" alt="${exp.company}">
                        </div>
                    </div>
                `;
            }
            
            const textHtml = `
                <div class="card-text-col">
                    <div class="card-meta">
                        <span class="mono-tag">${exp.company}</span>
                        <span class="date-stamp">${exp.date}</span>
                    </div>
                    <h3 class="card-headline">${exp.title}</h3>
                    <div class="card-body">
                        ${exp.contentHtml}
                    </div>
                </div>
            `;
            
            return `
                <div class="editorial-card${reverseClass}">
                    ${isReverse ? textHtml + imageHtml : imageHtml + textHtml}
                </div>
            `;
        }).join('');
    }

    // Render Projects
    const projGallery = document.getElementById('projects-gallery');
    if (projGallery && data.projects) {
        projGallery.innerHTML = data.projects.map((proj, index) => {
            const isReverse = index % 2 !== 0;
            const reverseClass = isReverse ? ' reverse' : '';
            
            let imageContent = '';
            if (proj.images && proj.images.length >= 2) {
                imageContent = `
                    <div class="image-stack" style="padding-bottom: 1rem;">
                        <div class="image-stack-bottom">
                            <img src="${proj.images[1]}" alt="Secondary Image">
                        </div>
                        <div class="image-stack-top">
                            <img src="${proj.images[0]}" alt="${proj.title}">
                        </div>
                    </div>
                `;
            } else {
                const imgSrc = proj.images ? proj.images[0] : proj.image;
                imageContent = `<img src="${imgSrc}" alt="${proj.title}">`;
            }

            const imageHtml = `
                <div class="gallery-image">
                    ${proj.url ? `<a href="${proj.url}" target="_blank">${imageContent}</a>` : imageContent}
                </div>
            `;
            
            const titleHtml = proj.url ? `<a href="${proj.url}" target="_blank">${proj.title}</a>` : proj.title;
            
            const textHtml = `
                <div class="gallery-text">
                    <div class="article-meta">
                        ${proj.tags.map(tag => tag.startsWith('<') ? tag : `<span class="mono-tag">${tag}</span>`).join('\n                        ')}
                    </div>
                    <h3 class="article-headline">${titleHtml}</h3>
                    <div class="details-box">
                        ${proj.detailsHtml}
                    </div>
                </div>
            `;
            
            return `
                <div class="gallery-item${reverseClass}">
                    ${isReverse ? textHtml + imageHtml : imageHtml + textHtml}
                </div>
            `;
        }).join('');
    }
}

function initPortfolio() {
    if (typeof window.portfolioData !== 'undefined') {
        renderPortfolio(window.portfolioData[currentLang]);
        observeCards();
    }

    // Language Switcher Logic
    const langBtn = document.getElementById('lang-switch');
    if (langBtn) {
        langBtn.textContent = currentLang === 'en' ? '中文' : 'EN';
        updateNavLabels();

        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'zh' : 'en';
            localStorage.setItem('portfolio_lang', currentLang);
            langBtn.textContent = currentLang === 'en' ? '中文' : 'EN';
            
            renderPortfolio(window.portfolioData[currentLang]);
            updateNavLabels();
            observeCards();
        });
    }

    // 1. Exact Path Ink Trailing Cursor Logic
    const canvas = document.getElementById('cursor-trail');
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let trail = [];
    const lifetime = 500;

    function updateSize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }
    
    window.addEventListener('resize', updateSize);
    updateSize();

    if (window.matchMedia("(pointer: fine)").matches) {
        window.addEventListener('mousemove', e => {
            trail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
        });

        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const currentTime = Date.now();
            trail = trail.filter(p => currentTime - p.time < lifetime);

            if (trail.length > 1) {
                for (let i = 0; i < trail.length - 1; i++) {
                    const p1 = trail[i];
                    const p2 = trail[i + 1];
                    const ageRatio = 1 - ((currentTime - p1.time) / lifetime);
                    const opacity = Math.max(0, ageRatio * 0.5);
                    
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(17, 17, 17, ${opacity})`;
                    ctx.lineWidth = 1.5;
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    ctx.stroke();
                }
            }
            requestAnimationFrame(render);
        }
        render();
    }

    // 2. Smooth Scrolling & Navigation Highlighting
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.sidebar-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
    initPortfolio();
}

// Image Stack Click to Bring to Front
document.addEventListener('click', (e) => {
    const bottom = e.target.closest('.image-stack-bottom');
    const top = e.target.closest('.image-stack-top');
    
    if (bottom || top) {
        const stack = (bottom || top).closest('.image-stack');
        if (stack) {
            if (bottom) stack.classList.add('flipped');
            if (top) stack.classList.remove('flipped');
        }
    }
});
