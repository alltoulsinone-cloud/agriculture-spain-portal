// ==================== الترجمة ====================
const translations = {
    es: {
        nav_home: "Inicio",
        nav_info: "Información",
        nav_gallery: "Galería",
        nav_contact: "Contacto",
        badge: "+500 Contratos Gestionados 2026",
        hero_title: "Trabajo agrícola en España",
        hero_sub: "Bienvenido al portal oficial para trabajadores marroquíes. Consulta el estado de tu contrato de forma rápida y segura.",
        search_title: "Consultar mi contrato",
        input_placeholder: "Ej: MAR-ESP-2026-***",
        search_btn: "Buscar",
        examples_title: "📋 Ejemplos para probar:",
        benefits_title: "🌱 ¿Por qué trabajar en el sector agrícola español?",
        benefits_subtitle: "Oportunidades laborales con garantías y derechos para trabajadores marroquíes",
        benefit_1_title: "Contratos justos",
        benefit_1_desc: "Salario conforme a convenio, seguridad social y alojamiento digno garantizado.",
        benefit_2_title: "Desarrollo profesional",
        benefit_2_desc: "Formación continua, certificaciones y oportunidades de crecimiento laboral.",
        benefit_3_title: "Entorno multicultural",
        benefit_3_desc: "Equipo diverso, respeto, apoyo mutuo y acompañamiento lingüístico.",
        benefit_4_title: "Asistencia legal",
        benefit_4_desc: "Asesoramiento jurídico gratuito y defensa de tus derechos laborales.",
        gallery_title: "📸 Jornadas de trabajo y vida en España",
        gallery_subtitle: "Conoce el día a día de nuestros trabajadores en las mejores condiciones",
        contact_title: "¿Necesitas ayuda?",
        contact_desc: "Nuestro equipo de soporte está disponible para resolver tus dudas",
        stat_accepted: "Contratos Aceptados",
        stat_pending: "En Revisión",
        stat_companies: "Empresas Asociadas",
        stat_days: "Días de Respuesta",
        footer_desc: "Portal oficial de gestión de contratos agrícolas entre España y Marruecos",
        footer_links: "Enlaces rápidos",
        footer_text: "© 2026 Portal de Contratos Agrícolas España-Marruecos. Todos los derechos reservados.",
        footer_support: "📞 Atención al trabajador: +34 900 123 456 | ✉️ contratos@agroempleo.es",
        not_found: "❌ No se encontró ningún contrato con ese número. Verifica el código.",
        status_accepted: "✅ ¡FELICIDADES! Tu contrato ha sido ACEPTADO.",
        status_pending: "⏳ Tu contrato está en revisión. Recibirás noticias pronto.",
        status_rejected: "⚠️ Lo sentimos, tu solicitud no ha sido aceptada. Contacta con la oficina.",
        accepted_msg: "Próximamente recibirás información sobre el viaje y la incorporación.",
        pending_msg: "Agradecemos tu paciencia. El proceso sigue abierto.",
        rejected_msg: "Puedes solicitar más detalles a través del correo oficial."
    },
    ar: {
        nav_home: "الرئيسية",
        nav_info: "معلومات",
        nav_gallery: "معرض الصور",
        nav_contact: "اتصل بنا",
        badge: "+500 عقد تم إدارتها 2026",
        hero_title: "العمل الفلاحي في إسبانيا",
        hero_sub: "مرحباً بك في البوابة الرسمية للعمال المغاربة. استعلم عن حالة عقدك بسرعة وأمان.",
        search_title: "استعلام عن عقدي",
        input_placeholder: "مثال: MAR-ESP-2026-***",
        search_btn: "بحث",
        examples_title: "📋 أمثلة للتجربة:",
        benefits_title: "🌱 لماذا العمل في القطاع الفلاحي الإسباني؟",
        benefits_subtitle: "فرص عمل مضمونة وبحقوق للعمال المغاربة",
        benefit_1_title: "عقود عادلة",
        benefit_1_desc: "أجر وفق الاتفاقيات، ضمان اجتماعي، وسكن لائق مضمون.",
        benefit_2_title: "تطوير مهني",
        benefit_2_desc: "تكوين مستمر، شهادات معتمدة، وفرص للنمو المهني.",
        benefit_3_title: "بيئة متعددة الثقافات",
        benefit_3_desc: "فريق متنوع، احترام، دعم متبادل، ومرافقة لغوية.",
        benefit_4_title: "مساعدة قانونية",
        benefit_4_desc: "استشارات قانونية مجانية والدفاع عن حقوقك.",
        gallery_title: "📸 أيام العمل والحياة في إسبانيا",
        gallery_subtitle: "تعرف على حياة عمالنا في أفضل الظروف",
        contact_title: "هل تحتاج مساعدة؟",
        contact_desc: "فريق الدعم لدينا متاح لحل استفساراتك",
        stat_accepted: "عقد مقبول",
        stat_pending: "قيد المراجعة",
        stat_companies: "شركات شريكة",
        stat_days: "أيام للرد",
        footer_desc: "البوابة الرسمية لإدارة عقود الفلاحة بين إسبانيا والمغرب",
        footer_links: "روابط سريعة",
        footer_text: "© 2026 بوابة عقود الفلاحة إسبانيا-المغرب. جميع الحقوق محفوظة.",
        footer_support: "📞 خدمة العمال: 34 900 123 456+ | ✉️ contratos@agroempleo.es",
        not_found: "❌ لم يتم العثور على عقد بهذا الرقم. تأكد من الكود.",
        status_accepted: "✅ مبروك! تم قبول عقدك.",
        status_pending: "⏳ عقدك قيد المراجعة. ستتوصل بالرد قريباً.",
        status_rejected: "⚠️ عذراً، لم يتم قبول طلبك. تواصل مع المكتب المعني.",
        accepted_msg: "ستصلك قريباً معلومات عن السفر والالتحاق بالعمل.",
        pending_msg: "نشكر صبرك. العملية مستمرة.",
        rejected_msg: "يمكنك طلب التفاصيل عبر البريد الرسمي."
    }
};

let currentLang = 'es';
let currentContract = null;

// ==================== البيانات التجريبية ====================
const demoContracts = {
    "ESP-AGR-2025-001": { 
        status: "accepted", 
        name_es: "Ahmed Benjelloun", 
        name_ar: "أحمد بنجلون",
        id_number: "AB789012",
        position: "Recolector de fresas",
        location: "Huelva"
    },
    "ESP-AGR-2025-002": { 
        status: "pending", 
        name_es: "Fatima Zahra", 
        name_ar: "فاطمة الزهراء",
        id_number: "FZ345678",
        position: "Agricultora",
        location: "Murcia"
    },
    "ESP-AGR-2025-003": { 
        status: "rejected", 
        name_es: "Youssef El Mansouri", 
        name_ar: "يوسف المنصوري",
        id_number: "YM901234"
    },
    "MAR-ESP-2025-AK": {
        status: "accepted",
        name_es: "Amine bihi",
        name_ar: "Amine Bihi",
        id_number: "IB226097",
        dob: "01.01.1994",
        place_of_birth: "Fquih Ben Salah",
        position: "Trabajador agrícola especializado",
        location: "Almería",
        start_date: "15.05.2026",
        contract_image: "images/1000280653.jpg"
    }
};

// ==================== تحديث اللغة ====================
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' && el.getAttribute('data-key') === 'input_placeholder') {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'BUTTON' && el.getAttribute('data-key') === 'search_btn') {
                const span = el.querySelector('span');
                if (span) span.innerText = translations[lang][key];
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });
    
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'es';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // تحديث الأزرار النشطة
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// ==================== عرض النتيجة ====================
function displayResult(contractNum) {
    const resultDiv = document.getElementById('resultBox');
    const contract = demoContracts[contractNum];
    
    if (!contract) {
        resultDiv.innerHTML = `<p>${translations[currentLang].not_found}</p>`;
        resultDiv.classList.remove('accepted', 'pending', 'rejected', 'hidden');
        showToast(translations[currentLang].not_found, 'error');
        return;
    }
    
    currentContract = contract;
    let statusText = '', message = '', className = '';
    
    switch(contract.status) {
        case 'accepted':
            statusText = translations[currentLang].status_accepted;
            message = translations[currentLang].accepted_msg;
            className = 'accepted';
            showToast('✅ ' + translations[currentLang].status_accepted, 'success');
            break;
        case 'pending':
            statusText = translations[currentLang].status_pending;
            message = translations[currentLang].pending_msg;
            className = 'pending';
            showToast('⏳ ' + translations[currentLang].status_pending, 'info');
            break;
        case 'rejected':
            statusText = translations[currentLang].status_rejected;
            message = translations[currentLang].rejected_msg;
            className = 'rejected';
            showToast('⚠️ ' + translations[currentLang].status_rejected, 'error');
            break;
    }
    
    const name = currentLang === 'ar' ? contract.name_ar : contract.name_es;
    
    let detailsHtml = `
        <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(0,0,0,0.1);">
            <strong>📌 ${currentLang === 'ar' ? 'رقم التعريف:' : 'Nº identificación:'}</strong> ${contract.id_number || '---'}<br>
            ${contract.dob ? `<strong>${currentLang === 'ar' ? 'تاريخ الميلاد:' : 'Fecha de nacimiento:'}</strong> ${contract.dob}<br>` : ''}
            ${contract.position ? `<strong>${currentLang === 'ar' ? 'المنصب:' : 'Puesto:'}</strong> ${contract.position}<br>` : ''}
            ${contract.location ? `<strong>${currentLang === 'ar' ? 'الموقع:' : 'Ubicación:'}</strong> ${contract.location}<br>` : ''}
            ${contract.start_date ? `<strong>${currentLang === 'ar' ? 'تاريخ البدء:' : 'Fecha de inicio:'}</strong> ${contract.start_date}<br>` : ''}
        </div>
    `;
    
    let imageHtml = '';
    if (contract.contract_image) {
        imageHtml = `
            <div style="margin-top: 20px; text-align: center;">
                <p><strong>📄 ${currentLang === 'ar' ? 'نسخة من عقد العمل:' : 'Copia del contrato:'}</strong></p>
                <img src="${contract.contract_image}" alt="Contract copy" style="max-width: 100%; max-height: 300px; border-radius: 16px; border: 2px solid #ddd; cursor: pointer; box-shadow: var(--shadow);" onclick="window.open(this.src)">
            </div>
        `;
    }
    
    resultDiv.innerHTML = `
        <h3>${name}</h3>
        <p><strong style="font-size: 1.1rem;">${statusText}</strong></p>
        <p>${message}</p>
        ${detailsHtml}
        ${imageHtml}
        <div style="margin-top: 20px;">
            <button onclick="downloadContractAsPDF()" style="background: var(--primary); color: white; border: none; padding: 8px 20px; border-radius: 20px; cursor: pointer;">
                📥 ${currentLang === 'ar' ? 'تحميل العقد (PDF)' : 'Descargar contrato (PDF)'}
            </button>
        </div>
    `;
    
    resultDiv.classList.remove('hidden', 'accepted', 'pending', 'rejected');
    resultDiv.classList.add(className);
    
    // تمرير سلس للنتيجة
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ==================== تنبيهات منبثقة ====================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.remove('hidden');
    
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6'
    };
    
    toast.style.background = colors[type] || colors.success;
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// ==================== تحميل PDF ====================
function downloadContractAsPDF() {
    showToast(currentLang === 'ar' ? 'جاري تحضير ملف PDF...' : 'Preparando PDF...', 'info');
    
    // محاكاة تحميل PDF (يمكنك لاحقاً ربطها بمكتبة مثل jsPDF)
    setTimeout(() => {
        showToast(currentLang === 'ar' ? 'سيتم إضافة خاصية PDF قريباً' : 'Función PDF disponible próximamente', 'info');
    }, 1500);
}

// ==================== عدادات متحركة ====================
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

// ==================== مراقبة التمرير ====================
function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // تشغيل العدادات عند ظهور الإحصائيات
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && !statsSection.dataset.animated) {
            statsSection.dataset.animated = 'true';
            document.querySelectorAll('.counter').forEach(counter => {
                const target = parseInt(counter.dataset.target);
                animateCounter(counter, target);
            });
        }
    }
}

// ==================== الأحداث ====================
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage('es');
    
    // أزرار اللغة
    document.getElementById('btn-es').addEventListener('click', () => {
        currentLang = 'es';
        updateLanguage('es');
        document.getElementById('resultBox').classList.add('hidden');
    });
    
    document.getElementById('btn-ar').addEventListener('click', () => {
        currentLang = 'ar';
        updateLanguage('ar');
        document.getElementById('resultBox').classList.add('hidden');
    });
    
    // زر البحث
    document.getElementById('searchBtn').addEventListener('click', () => {
        const input = document.getElementById('contractNumber').value.trim();
        if (!input) {
            showToast(currentLang === 'ar' ? 'الرجاء إدخال رقم العقد' : 'Por favor, introduce un número de contrato', 'error');
            return;
        }
        displayResult(input);
    });
    
    // أمثلة سريعة
    document.querySelectorAll('.example-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const code = btn.getAttribute('data-code');
            document.getElementById('contractNumber').value = code;
            displayResult(code);
        });
    });
    
    // تمرير سلس للروابط
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // زر التمرير للأسفل
    document.querySelector('.scroll-down')?.addEventListener('click', () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    });
    
    // نموذج التواصل
    document.getElementById('contactForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast(currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح' : 'Mensaje enviado con éxito', 'success');
        e.target.reset();
    });
    
    // مراقبة التمرير
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    // القائمة المتنقلة (mobile)
    document.querySelector('.mobile-menu')?.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        }
    });
});

// ==================== إدخال Enter ====================
document.getElementById('contractNumber')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') document.getElementById('searchBtn').click();
});
