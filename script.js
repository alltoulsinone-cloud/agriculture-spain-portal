// ---------- Diccionario bilingüe ----------
const translations = {
    es: {
        hero_title: "Trabajo agrícola en España",
        hero_sub: "Bienvenido al portal oficial para trabajadores marroquíes. Consulta el estado de tu contrato.",
        search_title: "🔍 Consultar mi contrato",
        input_placeholder: "Ej: ESP-AGR-2025-001",
        search_btn: "Buscar",
        benefits_title: "🌱 ¿Por qué trabajar en el sector agrícola español?",
        benefit_1_title: "Contratos justos",
        benefit_1_desc: "Salario conforme a convenio, seguridad social y alojamiento digno.",
        benefit_2_title: "Desarrollo profesional",
        benefit_2_desc: "Formación continua y oportunidades de crecimiento.",
        benefit_3_title: "Entorno multicultural",
        benefit_3_desc: "Equipo diverso, respeto y apoyo mutuo.",
        gallery_title: "📸 Jornadas de trabajo y vida en España",
        photo_credit: "Imágenes con fines ilustrativos - entorno real en Huelva, Murcia, Lleida.",
        footer_text: "© 2025 Portal de Contratos Agrícolas España-Marruecos. Todos los derechos reservados.",
        footer_support: "Atención al trabajador: +34 900 123 456 | contratos@agroempleo.es",
        // mensajes de resultados
        not_found: "❌ No se encontró ningún contrato con ese número. Verifica el código.",
        status_accepted: "✅ ¡FELICIDADES! Tu contrato ha sido ACEPTADO.",
        status_pending: "⏳ Tu contrato está en revisión. Recibirás noticias pronto.",
        status_rejected: "⚠️ Lo sentimos, tu solicitud no ha sido aceptada. Contacta con la oficina.",
        accepted_msg: "Próximamente recibirás información sobre el viaje y la incorporación.",
        pending_msg: "Agradecemos tu paciencia. El proceso sigue abierto.",
        rejected_msg: "Puedes solicitar más detalles a través del correo oficial."
    },
    ar: {
        hero_title: "العمل الفلاحي في إسبانيا",
        hero_sub: "مرحباً بك في البوابة الرسمية للعمال المغاربة. استعلم عن حالة عقدك.",
        search_title: "🔍 استعلام عن عقدي",
        input_placeholder: "مثال: ESP-AGR-2025-001",
        search_btn: "بحث",
        benefits_title: "🌱 لماذا العمل في القطاع الفلاحي الإسباني؟",
        benefit_1_title: "عقود عادلة",
        benefit_1_desc: "أجر وفق الاتفاقيات، ضمان اجتماعي، وسكن لائق.",
        benefit_2_title: "تطوير مهني",
        benefit_2_desc: "تكوين مستمر وفرص للنمو.",
        benefit_3_title: "بيئة متعددة الثقافات",
        benefit_3_desc: "فريق متنوع، احترام، ودعم متبادل.",
        gallery_title: "📸 أيام العمل والحياة في إسبانيا",
        photo_credit: "صور توضيحية - بيئة حقيقية في ويلفا، مرسية، لاردة.",
        footer_text: "© 2025 بوابة عقود الفلاحة إسبانيا-المغرب. جميع الحقوق محفوظة.",
        footer_support: "خدمة العمال: 34 900 123 456+ | contratos@agroempleo.es",
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

// تحديث النصوص في الصفحة
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' && el.getAttribute('data-key') === 'input_placeholder') {
                el.placeholder = translations[lang][key];
            } else if (el.tagName === 'BUTTON' && el.getAttribute('data-key') === 'search_btn') {
                el.innerText = translations[lang][key];
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });
    document.documentElement.lang = (lang === 'ar') ? 'ar' : 'es';
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    if (lang === 'ar') {
        document.body.style.fontFamily = "'Inter', 'Cairo', sans-serif";
    } else {
        document.body.style.fontFamily = "'Inter', sans-serif";
    }
}

// بيانات تجريبية للعقود (يمكن استبدالها لاحقاً بجلب من Google Sheets)
const demoContracts = {
    "ESP-AGR-2026-069": { status: "accepted", name_es: "Aziz KHAICH", name_ar: "عزيز اكحيش" },
    "ESP-AGR-2025-002": { status: "pending", name_es: "Fatima Zahra", name_ar: "فاطمة الزهراء" },
    "ESP-AGR-2025-003": { status: "rejected", name_es: "Youssef El Mansouri", name_ar: "يوسف المنصوري" }
};

function displayResult(contractNum) {
    const resultDiv = document.getElementById('resultBox');
    const contract = demoContracts[contractNum];
    const lang = currentLang;
    if (!contract) {
        resultDiv.innerHTML = `<p>${translations[lang].not_found}</p>`;
        resultDiv.classList.remove('accepted','pending','rejected');
        resultDiv.classList.add('hidden');
        resultDiv.classList.remove('hidden');
        return;
    }
    let statusText = '';
    let message = '';
    let className = '';
    switch(contract.status) {
        case 'accepted':
            statusText = translations[lang].status_accepted;
            message = translations[lang].accepted_msg;
            className = 'accepted';
            break;
        case 'pending':
            statusText = translations[lang].status_pending;
            message = translations[lang].pending_msg;
            className = 'pending';
            break;
        case 'rejected':
            statusText = translations[lang].status_rejected;
            message = translations[lang].rejected_msg;
            className = 'rejected';
            break;
    }
    const name = (lang === 'ar') ? contract.name_ar : contract.name_es;
    resultDiv.innerHTML = `
        <h4>${name}</h4>
        <p><strong>${statusText}</strong></p>
        <p>${message}</p>
    `;
    resultDiv.classList.remove('hidden','accepted','pending','rejected');
    resultDiv.classList.add(className);
}

// ربط الأزرار والبحث
document.getElementById('btn-es').addEventListener('click', () => {
    currentLang = 'es';
    updateLanguage('es');
    document.getElementById('btn-es').classList.add('active');
    document.getElementById('btn-ar').classList.remove('active');
    // إخفاء النتيجة القديمة لأن اللغة تغيرت
    document.getElementById('resultBox').classList.add('hidden');
});
document.getElementById('btn-ar').addEventListener('click', () => {
    currentLang = 'ar';
    updateLanguage('ar');
    document.getElementById('btn-ar').classList.add('active');
    document.getElementById('btn-es').classList.remove('active');
    document.getElementById('resultBox').classList.add('hidden');
});
document.getElementById('searchBtn').addEventListener('click', () => {
    const input = document.getElementById('contractNumber').value.trim();
    if (input === "") {
        alert(currentLang === 'es' ? "Introduce un número de contrato" : "أدخل رقم العقد");
        return;
    }
    displayResult(input);
});
// Enter key
document.getElementById('contractNumber').addEventListener('keypress', (e) => {
    if(e.key === 'Enter') document.getElementById('searchBtn').click();
});

// init
updateLanguage('es');
