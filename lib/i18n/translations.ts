export type Language = "en" | "ar" | "hi" | "fr" | "es" | "zh" | "ur";

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ur", name: "اردو", flag: "🇵🇰" },
];

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    orderNow: "Order Now",
    
    // Home Page
    heroTitle: "Premium Digital Services in the UAE",
    heroSubtitle: "Transform your business with cutting-edge web development, SEO, marketing, and more. Trusted by businesses across the Emirates.",
    whatsappUs: "WhatsApp Us",
    
    // Footer
    company: "Company",
    allRightsReserved: "All rights reserved",
    
    // Contact
    getInTouch: "Get In Touch",
    contactSubtitle: "Have a project in mind? Let's discuss how we can help bring your vision to life.",
    sendMessage: "Send us a Message",
    contactFormDesc: "Fill out the form below and we'll get back to you as soon as possible.",
    contactInfo: "Contact Information",
    contactChannels: "Reach out to us through any of these channels",
    email: "Email",
    phone: "Phone",
    location: "Location",
    quickContact: "Quick Contact via WhatsApp",
    chatInstantly: "Chat with us instantly on WhatsApp",
    openWhatsApp: "Open WhatsApp Chat",
    name: "Name",
    namePlaceholder: "Enter your full name",
    emailPlaceholder: "example@email.com",
    phonePlaceholder: "+971 XX XXX XXXX",
    message: "Message",
    messagePlaceholder: "Write your message here...",
    sendMessageBtn: "Send Message",
    sending: "Sending...",
    messageSent: "Your message has been sent successfully! We'll contact you soon.",
    errorSending: "An error occurred while sending the message. Please try again.",
    
    // Home Page - Services Section
    ourServices: "Our Services",
    servicesSubtitle: "Comprehensive digital solutions to elevate your business",
    viewAllServices: "View All Services",
    webDevelopment: "Web Development",
    webDevDesc: "Custom websites built with modern technologies",
    mobileApps: "Mobile Apps",
    mobileAppsDesc: "iOS and Android applications",
    seo: "SEO",
    seoDesc: "Improve your search engine rankings",
    digitalMarketing: "Digital Marketing",
    digitalMarketingDesc: "Grow your online presence",
    socialMediaManagement: "Social Media Management",
    socialMediaDesc: "Engage your audience on social platforms",
    contentCreation: "Content Creation",
    contentCreationDesc: "Quality content that converts",
    
    // Home Page - Why Us
    whyChooseUs: "Why Choose Us?",
    whyChooseUsDesc: "We deliver excellence with every project",
    fastDelivery: "Fast Delivery",
    fastDeliveryDesc: "Quick turnaround without compromising quality",
    premiumQuality: "Premium Quality",
    premiumQualityDesc: "Top-tier solutions that exceed expectations",
    provenResults: "Proven Results",
    provenResultsDesc: "Track record of successful projects",
    
    // Home Page - Pricing
    flexiblePricing: "Flexible Pricing",
    pricingSubtitle: "Choose the perfect package for your needs",
    viewPricingPlans: "View Pricing Plans",
    
    // Home Page - Testimonials
    whatClientsSay: "What Our Clients Say",
    
    // Home Page - FAQs
    faq: "Frequently Asked Questions",
    faq1Question: "How long does a project typically take?",
    faq1Answer: "Project timelines vary based on scope. A simple website takes 2-4 weeks, while complex applications can take 2-3 months. We provide detailed timelines during consultation.",
    faq2Question: "Do you provide ongoing support?",
    faq2Answer: "Yes! We offer maintenance plans and ongoing support packages to ensure your digital assets remain updated and secure.",
    faq3Question: "What payment methods do you accept?",
    faq3Answer: "We accept payments via Stripe, bank transfer, and other secure payment methods. Payment plans are available for larger projects.",
    faq4Question: "Can you work with our existing team?",
    faq4Answer: "Absolutely! We collaborate seamlessly with in-house teams and can integrate into your existing workflow.",
    
    // Home Page - CTA
    readyToGetStarted: "Ready to Get Started?",
    ctaSubtitle: "Let's discuss your project and bring your vision to life",
    contactUs: "Contact Us",
    
    // Services Page
    servicesPageTitle: "Our Services",
    servicesPageSubtitle: "Comprehensive digital solutions tailored to your business needs in the UAE",
    
    // Pricing Page
    pricingPlans: "Pricing Plans",
    pricingPageSubtitle: "Choose the perfect package for your business needs. All prices in AED.",
    payNow: "Pay Now",
    needCustomSolution: "Need a Custom Solution?",
    customSolutionDesc: "Contact us for a personalized quote tailored to your specific requirements",
    getCustomQuote: "Get Custom Quote",
    
    // About Page
    aboutUs: "About Us",
    aboutSubtitle: "We are a leading digital services agency in the UAE, dedicated to helping businesses thrive in the digital landscape.",
    ourStory: "Our Story",
    ourStoryP1: "Founded in the heart of the UAE, we recognized the growing need for comprehensive digital solutions that combine technical expertise with strategic thinking. Our journey began with a simple mission: to empower businesses of all sizes to succeed in the digital age.",
    ourStoryP2: "Over the years, we've worked with startups, SMEs, and large enterprises across various industries, helping them establish a strong online presence, attract more customers, and achieve their business goals.",
    ourStoryP3: "Today, we're proud to be one of the most trusted digital agencies in the region, known for our commitment to quality, innovation, and client satisfaction.",
    ourMission: "Our Mission",
    ourMissionDesc: "To provide exceptional digital services that drive measurable results for our clients, helping them grow their businesses and achieve their vision in the competitive UAE market. We combine cutting-edge technology with creative solutions to deliver value that transforms businesses.",
    ourValues: "Our Values",
    excellence: "Excellence",
    excellenceDesc: "We strive for perfection in every project, delivering quality that exceeds expectations.",
    clientFirst: "Client-First",
    clientFirstDesc: "Your success is our success. We prioritize your needs and work as your trusted partner.",
    innovation: "Innovation",
    innovationDesc: "We stay ahead of trends and leverage the latest technologies to give you a competitive edge.",
    integrity: "Integrity",
    integrityDesc: "Honest communication, transparent pricing, and ethical practices guide everything we do.",
    ourTeam: "Our Team",
    
    // Order Page
    placeYourOrder: "Place Your Order",
    orderSubtitle: "Select a service and fill out the form below. We'll get back to you within 24 hours.",
    selectService: "Select a Service",
    selectServiceDesc: "Choose the service you need",
    orderDetails: "Order Details",
    orderDetailsDesc: "Please provide your information and project details",
    selectedService: "Selected Service",
    mentionService: "Please mention this service in your project details.",
    preferWhatsApp: "Prefer WhatsApp?",
    orderViaWhatsApp: "Order via WhatsApp",
    
    // Thank You Page
    thankYou: "Thank You!",
    thankYouMessage: "We've received your order and will get back to you within 24 hours.",
    whatsNext: "What's Next?",
    reviewRequest: "Review Your Request",
    reviewRequestDesc: "Our team will review your project details and requirements.",
    weWillContact: "We'll Contact You",
    weWillContactDesc: "Within 24 hours, we'll reach out via email or phone to discuss your project.",
    projectKickoff: "Project Kickoff",
    projectKickoffDesc: "Once approved, we'll begin working on your project right away.",
    needImmediateAssistance: "Need Immediate Assistance?",
    emailUs: "Email Us",
    callUs: "Call Us",
    backToHome: "Back to Home",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    services: "الخدمات",
    pricing: "الأسعار",
    about: "من نحن",
    contact: "اتصل بنا",
    orderNow: "اطلب الآن",
    
    // Home Page
    heroTitle: "خدمات رقمية متميزة في الإمارات",
    heroSubtitle: "حول عملك باستخدام تطوير الويب المتطور، وتحسين محركات البحث، والتسويق، والمزيد. موثوق به من قبل الشركات في جميع أنحاء الإمارات.",
    whatsappUs: "تواصل عبر واتساب",
    
    // Footer
    company: "الشركة",
    allRightsReserved: "جميع الحقوق محفوظة",
    
    // Contact
    getInTouch: "تواصل معنا",
    contactSubtitle: "هل لديك مشروع في الاعتبار؟ دعنا نناقش كيف يمكننا المساعدة في تحقيق رؤيتك.",
    sendMessage: "أرسل لنا رسالة",
    contactFormDesc: "املأ النموذج أدناه وسنعاود الاتصال بك في أقرب وقت ممكن.",
    contactInfo: "معلومات الاتصال",
    contactChannels: "تواصل معنا من خلال أي من هذه القنوات",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    location: "الموقع",
    quickContact: "اتصال سريع عبر واتساب",
    chatInstantly: "تحدث معنا فوراً على واتساب",
    openWhatsApp: "فتح محادثة واتساب",
    name: "الاسم",
    namePlaceholder: "أدخل اسمك الكامل",
    emailPlaceholder: "example@email.com",
    phonePlaceholder: "+971 XX XXX XXXX",
    message: "الرسالة",
    messagePlaceholder: "اكتب رسالتك هنا...",
    sendMessageBtn: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    messageSent: "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
    errorSending: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
    
    // Home Page - Services Section
    ourServices: "خدماتنا",
    servicesSubtitle: "حلول رقمية شاملة لرفع مستوى عملك",
    viewAllServices: "عرض جميع الخدمات",
    webDevelopment: "تطوير المواقع",
    webDevDesc: "مواقع مخصصة مبنية بتقنيات حديثة",
    mobileApps: "تطبيقات الجوال",
    mobileAppsDesc: "تطبيقات iOS و Android",
    seo: "تحسين محركات البحث",
    seoDesc: "حسّن ترتيب موقعك في محركات البحث",
    digitalMarketing: "التسويق الرقمي",
    digitalMarketingDesc: "نمو حضورك على الإنترنت",
    socialMediaManagement: "إدارة وسائل التواصل",
    socialMediaDesc: "تفاعل مع جمهورك على المنصات الاجتماعية",
    contentCreation: "إنشاء المحتوى",
    contentCreationDesc: "محتوى عالي الجودة يحول الزوار إلى عملاء",
    
    // Home Page - Why Us
    whyChooseUs: "لماذا تختارنا؟",
    whyChooseUsDesc: "نقدم التميز في كل مشروع",
    fastDelivery: "تسليم سريع",
    fastDeliveryDesc: "إنجاز سريع دون المساس بالجودة",
    premiumQuality: "جودة متميزة",
    premiumQualityDesc: "حلول من الطراز الأول تتجاوز التوقعات",
    provenResults: "نتائج مثبتة",
    provenResultsDesc: "سجل حافل بالمشاريع الناجحة",
    
    // Home Page - Pricing
    flexiblePricing: "أسعار مرنة",
    pricingSubtitle: "اختر الباقة المثالية لاحتياجاتك",
    viewPricingPlans: "عرض خطط الأسعار",
    
    // Home Page - Testimonials
    whatClientsSay: "ماذا يقول عملاؤنا",
    
    // Home Page - FAQs
    faq: "الأسئلة الشائعة",
    faq1Question: "كم يستغرق المشروع عادة؟",
    faq1Answer: "تختلف المدد الزمنية للمشاريع حسب النطاق. الموقع البسيط يستغرق 2-4 أسابيع، بينما التطبيقات المعقدة قد تستغرق 2-3 أشهر. نقدم جداول زمنية مفصلة أثناء الاستشارة.",
    faq2Question: "هل تقدمون دعم مستمر؟",
    faq2Answer: "نعم! نقدم خطط صيانة وحزم دعم مستمرة لضمان بقاء أصولك الرقمية محدثة وآمنة.",
    faq3Question: "ما هي طرق الدفع التي تقبلونها؟",
    faq3Answer: "نقبل المدفوعات عبر Stripe والتحويل البنكي وطرق دفع آمنة أخرى. خطط الدفع متاحة للمشاريع الأكبر.",
    faq4Question: "هل يمكنكم العمل مع فريقنا الحالي؟",
    faq4Answer: "بالتأكيد! نتعاون بسلاسة مع الفرق الداخلية ويمكننا الاندماج في سير العمل الحالي لديكم.",
    
    // Home Page - CTA
    readyToGetStarted: "هل أنت مستعد للبدء؟",
    ctaSubtitle: "دعنا نناقش مشروعك ونحقق رؤيتك",
    contactUs: "اتصل بنا",
    
    // Services Page
    servicesPageTitle: "خدماتنا",
    servicesPageSubtitle: "حلول رقمية شاملة مصممة خصيصاً لاحتياجات عملك في الإمارات",
    
    // Pricing Page
    pricingPlans: "خطط الأسعار",
    pricingPageSubtitle: "اختر الباقة المثالية لاحتياجات عملك. جميع الأسعار بالدرهم الإماراتي.",
    payNow: "ادفع الآن",
    needCustomSolution: "تحتاج حل مخصص؟",
    customSolutionDesc: "اتصل بنا للحصول على عرض أسعار مخصص حسب متطلباتك الخاصة",
    getCustomQuote: "احصل على عرض مخصص",
    
    // About Page
    aboutUs: "من نحن",
    aboutSubtitle: "نحن وكالة خدمات رقمية رائدة في الإمارات، ملتزمون بمساعدة الشركات على الازدهار في المشهد الرقمي.",
    ourStory: "قصتنا",
    ourStoryP1: "تأسست في قلب الإمارات، أدركنا الحاجة المتزايدة لحلول رقمية شاملة تجمع بين الخبرة التقنية والتفكير الاستراتيجي. بدأت رحلتنا بمهمة بسيطة: تمكين الشركات من جميع الأحجام للنجاح في العصر الرقمي.",
    ourStoryP2: "على مر السنين، عملنا مع الشركات الناشئة والشركات الصغيرة والمتوسطة والشركات الكبيرة عبر مختلف الصناعات، مما ساعدهم على إنشاء حضور قوي على الإنترنت وجذب المزيد من العملاء وتحقيق أهداف أعمالهم.",
    ourStoryP3: "اليوم، نفخر بأن نكون واحدة من أكثر الوكالات الرقمية الموثوقة في المنطقة، معروفون بالتزامنا بالجودة والابتكار ورضا العملاء.",
    ourMission: "مهمتنا",
    ourMissionDesc: "تقديم خدمات رقمية استثنائية تحقق نتائج قابلة للقياس لعملائنا، مما يساعدهم على نمو أعمالهم وتحقيق رؤيتهم في السوق الإماراتي التنافسي. نجمع بين أحدث التقنيات والحلول الإبداعية لتقديم قيمة تحول الأعمال.",
    ourValues: "قيمنا",
    excellence: "التميز",
    excellenceDesc: "نسعى للكمال في كل مشروع، نقدم جودة تتجاوز التوقعات.",
    clientFirst: "العميل أولاً",
    clientFirstDesc: "نجاحك هو نجاحنا. نعطي الأولوية لاحتياجاتك ونعمل كشريك موثوق.",
    innovation: "الابتكار",
    innovationDesc: "نتقدم على الاتجاهات ونستفيد من أحدث التقنيات لمنحك ميزة تنافسية.",
    integrity: "النزاهة",
    integrityDesc: "التواصل الصادق والأسعار الشفافة والممارسات الأخلاقية توجه كل ما نقوم به.",
    ourTeam: "فريقنا",
    
    // Order Page
    placeYourOrder: "ضع طلبك",
    orderSubtitle: "اختر خدمة واملأ النموذج أدناه. سنعاود الاتصال بك خلال 24 ساعة.",
    selectService: "اختر خدمة",
    selectServiceDesc: "اختر الخدمة التي تحتاجها",
    orderDetails: "تفاصيل الطلب",
    orderDetailsDesc: "يرجى تقديم معلوماتك وتفاصيل المشروع",
    selectedService: "الخدمة المختارة",
    mentionService: "يرجى ذكر هذه الخدمة في تفاصيل مشروعك.",
    preferWhatsApp: "تفضل واتساب؟",
    orderViaWhatsApp: "اطلب عبر واتساب",
    
    // Thank You Page
    thankYou: "شكراً لك!",
    thankYouMessage: "لقد استلمنا طلبك وسنعاود الاتصال بك خلال 24 ساعة.",
    whatsNext: "ماذا بعد؟",
    reviewRequest: "مراجعة طلبك",
    reviewRequestDesc: "سيقوم فريقنا بمراجعة تفاصيل ومتطلبات مشروعك.",
    weWillContact: "سنتواصل معك",
    weWillContactDesc: "خلال 24 ساعة، سنتواصل معك عبر البريد الإلكتروني أو الهاتف لمناقشة مشروعك.",
    projectKickoff: "بدء المشروع",
    projectKickoffDesc: "بمجرد الموافقة، سنبدأ العمل على مشروعك فوراً.",
    needImmediateAssistance: "تحتاج مساعدة فورية؟",
    emailUs: "راسلنا",
    callUs: "اتصل بنا",
    backToHome: "العودة للرئيسية",
  },
  hi: {
    // Navigation
    home: "होम",
    services: "सेवाएं",
    pricing: "मूल्य निर्धारण",
    about: "हमारे बारे में",
    contact: "संपर्क करें",
    orderNow: "अभी ऑर्डर करें",
    
    // Home Page
    heroTitle: "UAE में प्रीमियम डिजिटल सेवाएं",
    heroSubtitle: "अत्याधुनिक वेब विकास, SEO, मार्केटिंग और अधिक के साथ अपने व्यवसाय को रूपांतरित करें। इमारतों भर में व्यवसायों द्वारा भरोसेमंद।",
    whatsappUs: "WhatsApp पर हमसे संपर्क करें",
    
    // Footer
    company: "कंपनी",
    allRightsReserved: "सभी अधिकार सुरक्षित",
    
    // Contact
    getInTouch: "संपर्क करें",
    contactSubtitle: "मन में कोई प्रोजेक्ट है? आइए चर्चा करें कि हम आपकी दृष्टि को जीवन में कैसे ला सकते हैं।",
    sendMessage: "हमें संदेश भेजें",
    contactFormDesc: "नीचे दिया गया फॉर्म भरें और हम जल्द से जल्द आपसे संपर्क करेंगे।",
    contactInfo: "संपर्क जानकारी",
    contactChannels: "इनमें से किसी भी चैनल के माध्यम से हमसे संपर्क करें",
    email: "ईमेल",
    phone: "फोन",
    location: "स्थान",
    quickContact: "WhatsApp के माध्यम से त्वरित संपर्क",
    chatInstantly: "WhatsApp पर तुरंत हमसे चैट करें",
    openWhatsApp: "WhatsApp चैट खोलें",
    name: "नाम",
    namePlaceholder: "अपना पूरा नाम दर्ज करें",
    emailPlaceholder: "example@email.com",
    phonePlaceholder: "+971 XX XXX XXXX",
    message: "संदेश",
    messagePlaceholder: "अपना संदेश यहाँ लिखें...",
    sendMessageBtn: "संदेश भेजें",
    sending: "भेजा जा रहा है...",
    messageSent: "आपका संदेश सफलतापूर्वक भेजा गया है! हम जल्द ही आपसे संपर्क करेंगे।",
    errorSending: "संदेश भेजते समय एक त्रुटि हुई। कृपया पुनः प्रयास करें।",
  },
  fr: {
    // Navigation
    home: "Accueil",
    services: "Services",
    pricing: "Tarifs",
    about: "À propos",
    contact: "Contact",
    orderNow: "Commander maintenant",
    
    // Home Page
    heroTitle: "Services numériques premium aux EAU",
    heroSubtitle: "Transformez votre entreprise avec un développement web de pointe, le SEO, le marketing et plus encore. Fait confiance par les entreprises à travers les Émirats.",
    whatsappUs: "Contactez-nous sur WhatsApp",
    
    // Footer
    company: "Entreprise",
    allRightsReserved: "Tous droits réservés",
    
    // Contact
    getInTouch: "Contactez-nous",
    contactSubtitle: "Vous avez un projet en tête? Discutons de la façon dont nous pouvons vous aider à concrétiser votre vision.",
    sendMessage: "Envoyez-nous un message",
    contactFormDesc: "Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.",
    contactInfo: "Informations de contact",
    contactChannels: "Contactez-nous via l'un de ces canaux",
    email: "E-mail",
    phone: "Téléphone",
    location: "Localisation",
    quickContact: "Contact rapide via WhatsApp",
    chatInstantly: "Discutez avec nous instantanément sur WhatsApp",
    openWhatsApp: "Ouvrir le chat WhatsApp",
    name: "Nom",
    namePlaceholder: "Entrez votre nom complet",
    emailPlaceholder: "example@email.com",
    phonePlaceholder: "+971 XX XXX XXXX",
    message: "Message",
    messagePlaceholder: "Écrivez votre message ici...",
    sendMessageBtn: "Envoyer le message",
    sending: "Envoi en cours...",
    messageSent: "Votre message a été envoyé avec succès! Nous vous contacterons bientôt.",
    errorSending: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
  },
  es: {
    // Navigation
    home: "Inicio",
    services: "Servicios",
    pricing: "Precios",
    about: "Acerca de",
    contact: "Contacto",
    orderNow: "Pedir ahora",
    
    // Home Page
    heroTitle: "Servicios digitales premium en los EAU",
    heroSubtitle: "Transforme su negocio con desarrollo web de vanguardia, SEO, marketing y más. Confiado por empresas en todo los Emiratos.",
    whatsappUs: "Contáctenos por WhatsApp",
    
    // Footer
    company: "Empresa",
    allRightsReserved: "Todos los derechos reservados",
    
    // Contact
    getInTouch: "Póngase en contacto",
    contactSubtitle: "¿Tiene un proyecto en mente? Hablemos de cómo podemos ayudar a hacer realidad su visión.",
    sendMessage: "Envíenos un mensaje",
    contactFormDesc: "Complete el formulario a continuación y nos pondremos en contacto con usted lo antes posible.",
    contactInfo: "Información de contacto",
    contactChannels: "Contáctenos a través de cualquiera de estos canales",
    email: "Correo electrónico",
    phone: "Teléfono",
    location: "Ubicación",
    quickContact: "Contacto rápido vía WhatsApp",
    chatInstantly: "Chatee con nosotros al instante en WhatsApp",
    openWhatsApp: "Abrir chat de WhatsApp",
    name: "Nombre",
    namePlaceholder: "Ingrese su nombre completo",
    emailPlaceholder: "example@email.com",
    phonePlaceholder: "+971 XX XXX XXXX",
    message: "Mensaje",
    messagePlaceholder: "Escriba su mensaje aquí...",
    sendMessageBtn: "Enviar mensaje",
    sending: "Enviando...",
    messageSent: "¡Su mensaje ha sido enviado con éxito! Nos pondremos en contacto con usted pronto.",
    errorSending: "Ocurrió un error al enviar el mensaje. Por favor, inténtelo de nuevo.",
  },
  zh: {
    // Navigation
    home: "首页",
    services: "服务",
    pricing: "价格",
    about: "关于",
    contact: "联系",
    orderNow: "立即订购",
    
    // Home Page
    heroTitle: "阿联酋优质数字服务",
    heroSubtitle: "通过尖端的网站开发、SEO、营销等转变您的业务。受到整个酋长国企业的信赖。",
    whatsappUs: "通过WhatsApp联系我们",
    
    // Footer
    company: "公司",
    allRightsReserved: "版权所有",
    
    // Contact
    getInTouch: "联系我们",
    contactSubtitle: "有项目想法？让我们讨论如何帮助您实现愿景。",
    sendMessage: "给我们发消息",
    contactFormDesc: "填写下面的表格，我们会尽快与您联系。",
    contactInfo: "联系信息",
    contactChannels: "通过以下任一渠道联系我们",
    email: "电子邮件",
    phone: "电话",
    location: "位置",
    quickContact: "通过WhatsApp快速联系",
    chatInstantly: "立即在WhatsApp上与我们聊天",
    openWhatsApp: "打开WhatsApp聊天",
    name: "姓名",
    namePlaceholder: "输入您的全名",
    emailPlaceholder: "example@email.com",
    phonePlaceholder: "+971 XX XXX XXXX",
    message: "消息",
    messagePlaceholder: "在此处写下您的消息...",
    sendMessageBtn: "发送消息",
    sending: "发送中...",
    messageSent: "您的消息已成功发送！我们会尽快与您联系。",
    errorSending: "发送消息时出错。请重试。",
  },
  ur: {
    // Navigation
    home: "ہوم",
    services: "سروسز",
    pricing: "قیمتیں",
    about: "ہمارے بارے میں",
    contact: "رابطہ",
    orderNow: "ابھی آرڈر کریں",
    
    // Home Page
    heroTitle: "متحدہ عرب امارات میں پریمیم ڈیجیٹل سروسز",
    heroSubtitle: "جدید ویب ڈویلپمنٹ، SEO، مارکیٹنگ اور مزید کے ساتھ اپنے کاروبار کو تبدیل کریں۔ امارات بھر میں کاروباروں کی طرف سے قابل اعتماد۔",
    whatsappUs: "WhatsApp پر ہم سے رابطہ کریں",
    
    // Footer
    company: "کمپنی",
    allRightsReserved: "جملہ حقوق محفوظ ہیں",
    
    // Contact
    getInTouch: "رابطہ کریں",
    contactSubtitle: "ذہن میں کوئی منصوبہ ہے؟ آئیے بات چیت کریں کہ ہم آپ کے وژن کو زندگی میں کیسے لا سکتے ہیں۔",
    sendMessage: "ہمیں پیغام بھیجیں",
    contactFormDesc: "نیچے دیا گیا فارم بھریں اور ہم جلد از جلد آپ سے رابطہ کریں گے۔",
    contactInfo: "رابطے کی معلومات",
    contactChannels: "ان میں سے کسی بھی چینل کے ذریعے ہم سے رابطہ کریں",
    email: "ای میل",
    phone: "فون",
    location: "مقام",
    quickContact: "WhatsApp کے ذریعے فوری رابطہ",
    chatInstantly: "WhatsApp پر فوری طور پر ہم سے چیٹ کریں",
    openWhatsApp: "WhatsApp چیٹ کھولیں",
    name: "نام",
    namePlaceholder: "اپنا پورا نام درج کریں",
    emailPlaceholder: "example@email.com",
    phonePlaceholder: "+971 XX XXX XXXX",
    message: "پیغام",
    messagePlaceholder: "اپنا پیغام یہاں لکھیں...",
    sendMessageBtn: "پیغام بھیجیں",
    sending: "بھیجا جا رہا ہے...",
    messageSent: "آپ کا پیغام کامیابی سے بھیج دیا گیا ہے! ہم جلد ہی آپ سے رابطہ کریں گے۔",
    errorSending: "پیغام بھیجتے وقت ایک خرابی پیش آئی۔ براہ کرم دوبارہ کوشش کریں۔",
  },
};
