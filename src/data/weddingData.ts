export interface Ceremony {
  id: string;
  name: string;
  nameEn: string;
  date: string;
  day: string;
  time: string;
  venue: string;
  address: string;
  description?: string;
  category: "pre-wedding" | "wedding" | "reception";
  icon: string;
  highlight?: boolean;
}

export interface FamilySection {
  title: string;
  subtitle?: string;
  members: string[];
}

export const WEDDING_DATA = {
  couple: {
    groom: {
      nameHi: "कृतार्थ",
      nameEn: "Kritarth",
      titleHi: "स्वस्तिमय कृतार्थ",
      parentsHi: "श्रीमती गिरजा – कृष्णगोपाल सोनी",
      grandparentsHi: "स्व. श्रीमती कमलाबाई – स्व. श्री जुगल किशोर जी सोनी",
      residenceHi: "सिरोंज (म.प्र.)",
      residenceEn: "Sironj, Madhya Pradesh",
      tagline: "वर (Groom)",
    },
    bride: {
      nameHi: "पलक",
      nameEn: "Palak",
      titleHi: "स्वस्तिमयी पलक",
      parentsHi: "श्रीमती भारती – श्री सतीश जी सोनी",
      grandparentsHi: "श्रीमती राधादेवी – स्व. श्री नंदलाल जी सोनी",
      residenceHi: "बाराँ (राजस्थान)",
      residenceEn: "Baran, Rajasthan",
      tagline: "वधु (Bride)",
    },
    familyInviteHi: "सोनी परिवार का स्नेहित आमंत्रण",
  },
  auspiciousInvocations: [
    "॥ श्री गणेशाय नमः ॥",
    "॥ श्री बरड़िया बाताजी कृपा ॥",
    "॥ श्री कुलदेव्यै नमः ॥",
  ],
  shlokas: {
    mangalacharan: [
      "मंगलम् भगवान विष्णुः, मंगलम् गरुड़ध्वजः ।",
      "मंगलम् पुण्डरीकाक्षः, मंगलाय तनोऽहरिः ॥",
    ],
    ganeshVandana: [
      "विघ्न हरण मंगल करण, श्री गणपति महाराज ।",
      "प्रथम निमंत्रण आपको, पूर्ण करियो काज ॥",
    ],
  },
  invitationMessage: {
    salutation: "स्नेही स्वजन,",
    body: "कुलदेवी माँ एवं पितृदेवों की कृपा से हमारे परिवार में शुभ प्रसंग आया है, मंगलगान एवं वैदिक मंत्रोच्चार के साथ, कृतार्थ संग पलक के पावन परिणय का सप्तपदी के प्रत्येक चरण के मंगलवरण को अपने स्नेहसिक्त आशीष से अभिसिंचित करने हेतु, आप सादर आमंत्रित हैं।",
    conclusion: "आपकी गरिमामयी उपस्थिति एवं स्नेहिल आशीष हमारे नवयुगल के आगामी जीवन को मंगलमय बनाएगा।",
  },
  mainDate: "2026-11-21T14:30:00+05:30", // Pheras / Paanigrahan Muhurat
  ceremonies: [
    {
      id: "ganesh-matrika-pujan",
      name: "श्री गणेश गौरी मातृका पूजन",
      nameEn: "Shree Ganesh Gauri Matrika Pujan",
      date: "18 नवम्बर 2026",
      day: "बुधवार (Wednesday)",
      time: "प्रातः 10:00 बजे",
      venue: "निज निवास, सिरोंज",
      address: "29/12 कठाली बाजार, सिरोंज (विदिशा, म.प्र.)",
      description: "मांगलिक उत्सव का शुभारंभ गणेश व गौरी मातृका के पावन पूजन एवं आशीर्वाद के साथ।",
      category: "pre-wedding",
      icon: "puja",
    },
    {
      id: "dholi-kalash",
      name: "धोली कलश, मण्डपाच्छादन",
      nameEn: "Dholi Kalash & Mandapachhadan",
      date: "18 नवम्बर 2026",
      day: "बुधवार (Wednesday)",
      time: "सायं 04:00 बजे",
      venue: "निज निवास, सिरोंज",
      address: "29/12 कठाली बाजार, सिरोंज (विदिशा, म.प्र.)",
      description: "मांगलिक ध्वज स्थापना, कलश स्थापना एवं वैदिक मंडप छादन की शुभ रस्म।",
      category: "pre-wedding",
      icon: "kalash",
    },
    {
      id: "mayra",
      name: "मायरा (भात)",
      nameEn: "Mayra (Bhaat)",
      date: "20 नवम्बर 2026",
      day: "शुक्रवार (Friday)",
      time: "प्रातः 09:00 बजे",
      venue: "स्वागत मैरिज गार्डन, सिरोंज",
      address: "कुरवाई रोड, सिरोंज, जिला विदिशा (म.प्र.)",
      description: "मातृकुल ननिहाल पक्ष द्वारा स्नेह, परंपरा एवं सौभाग्य स्वरूप मायरा आगमन।",
      category: "pre-wedding",
      icon: "mayra",
    },
    {
      id: "haldi",
      name: "हल्दी रस्म",
      nameEn: "Haldi Ceremony",
      date: "20 नवम्बर 2026",
      day: "शुक्रवार (Friday)",
      time: "दोपहर 12:00 बजे",
      venue: "स्वागत मैरिज गार्डन, सिरोंज",
      address: "कुरवाई रोड, सिरोंज, जिला विदिशा (म.प्र.)",
      description: "उबटन, हल्दी एवं पीले रंगों के उल्लास संग स्नेह और आशीर्वाद की बौछार।",
      category: "pre-wedding",
      icon: "haldi",
    },
    {
      id: "sangeet-sandhya",
      name: "संगीत संध्या",
      nameEn: "Sangeet Sandhya & Celebration",
      date: "20 नवम्बर 2026",
      day: "शुक्रवार (Friday)",
      time: "सायं 06:00 बजे",
      venue: "स्वागत मैरिज गार्डन, सिरोंज",
      address: "कुरवाई रोड, सिरोंज, जिला विदिशा (म.प्र.)",
      description: "सुरों, ताल और नृत्य की सुरमयी शाम, पारिवारिक उमंगों का उत्सव।",
      category: "pre-wedding",
      icon: "sangeet",
    },
    {
      id: "tilak-sagai",
      name: "तिलक ओढ़नी, सगाई",
      nameEn: "Tilak Odhani & Sagai",
      date: "21 नवम्बर 2026",
      day: "शनिवार (Saturday)",
      time: "प्रातः 09:00 बजे",
      venue: "स्वागत मैरिज गार्डन, सिरोंज",
      address: "कुरवाई रोड, सिरोंज, जिला विदिशा (म.प्र.)",
      description: "परंपरानुसार तिलक, ओढ़नी एवं शुभ वाग्दान (सगाई) का मंगल विधान।",
      category: "wedding",
      icon: "ring",
    },
    {
      id: "paanigrahan-saptapadi",
      name: "पाणिग्रहण एवं सप्तपदी (विवाह संस्कार)",
      nameEn: "Paanigrahan & Saptapadi (Wedding Pheras)",
      date: "21 नवम्बर 2026",
      day: "शनिवार (Saturday)",
      time: "दोपहर 02:30 बजे",
      venue: "स्वागत मैरिज गार्डन, सिरोंज",
      address: "कुरवाई रोड, सिरोंज, जिला विदिशा (म.प्र.)",
      description: "वैदिक अग्नि के समक्ष सात फेरे, सात वचन एवं पाणिग्रहण का पावन संस्कार।",
      category: "wedding",
      icon: "pheras",
      highlight: true,
    },
    {
      id: "baraat-prasthan",
      name: "बारात प्रस्थान (विशेष)",
      nameEn: "Baraat Prasthan",
      date: "21 नवम्बर 2026",
      day: "शनिवार (Saturday)",
      time: "सायं 05:00 बजे (ताजा तोरण)",
      venue: "स्वागत मैरिज गार्डन, सिरोंज",
      address: "कुरवाई रोड, सिरोंज, जिला विदिशा (म.प्र.)",
      description: "आप और हम बारात लेकर समधी जी साहब श्री सतीश जी सोनी के यहाँ स्वागत मैरिज गार्डन सिरोंज प्रस्थान करेंगे।",
      category: "wedding",
      icon: "baraat",
    },
    {
      id: "aashirwad-bhoj",
      name: "आशीष संध्या एवं व्यंजनों की बगिया (माधुर्य भोज / स्वरुचिभोज)",
      nameEn: "Blessings & Grand Feast (Madhurya Bhoj)",
      date: "21 नवम्बर 2026",
      day: "शनिवार (Saturday)",
      time: "सुरमयी सांझ से आपके आगमन तक",
      venue: "स्वागत मैरिज गार्डन, सिरोंज",
      address: "कुरवाई रोड, सिरोंज, जिला विदिशा (म.प्र.)",
      description: "नवयुगल को शुभाशीष एवं पारंपरिक शाही व्यंजनों के रसास्वादन हेतु सादर आमंत्रण।",
      category: "reception",
      icon: "feast",
      highlight: true,
    },
  ] as Ceremony[],

  venue: {
    nameHi: "स्वागत मैरिज गार्डन",
    nameEn: "Swagat Marriage Garden",
    addressHi: "कुरवाई रोड, सिरोंज, जिला विदिशा (म.प्र.)",
    addressEn: "Kurwai Road, Sironj, Dist. Vidisha (M.P.)",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Swagat+Marriage+Garden+Kurwai+Road+Sironj+Madhya+Pradesh",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Swagat%20Marriage%20Garden%20Kurwai%20Road%20Sironj&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },

  family: {
    vinayawanat: {
      title: "विनयावनत",
      members: ["श्रीमती गिरजा – कृष्ण गोपाल सोनी"],
    },
    matrikul: {
      title: "मातृकुल",
      subtitle: "समस्त बबेलिया परिवार (कोयला वाले) बाराँ (राजस्थान)",
      members: [
        "श्रीमती रामकन्या बाई – स्व. श्री गोपाल लाल जी",
        "श्री मानकचंद जी",
        "श्री रमेशचंद्र जी",
        "स्व. श्री गिरिराज जी", // Updated per user instruction
        "श्री बालकिशन जी",
        "श्री हेमंत जी सोनी",
      ],
    },
    kulAadhar: {
      title: "कुल आधार",
      subtitle: "एवं समस्त सोल्लीवाल परिवार",
      members: [
        "श्री उत्तमचंद जी सोनी",
        "श्रीमती किरण – स्व. श्री अरुण कुमार",
        "श्रीमती रजनी – ओमप्रकाश",
        "श्रीमती सपना – सौरभ",
        "श्रीमती ज्योति – आशीष",
        "श्रीमती रीना – संजीव",
        "श्रीमती सरिता – दीपक",
        "श्रीमती योगिता – प्रभात",
        "श्रीमती भूमिका – शुभम्",
        "सूर्यप्रकाश",
        "खुशाल",
        "श्रेष्ठ",
        "गंधर्व",
        "आदि",
        "अवि",
        "अर्णव",
      ],
    },
    kulShringar: {
      title: "कुल श्रृंगार",
      members: [
        "श्रीमती सुशीला – जीजा सा. घनश्यामदास जी",
        "श्रीमती गुंजन – कु.सा. जितेन्द्र जी",
        "श्रीमती सुरभि – कु.सा. पंकज जी",
        "श्रीमती अंजली – कु.सा. जिनसन जी",
        "श्रीमती तृप्ति – कु.सा. रोहित जी",
      ],
    },
    balVinay: {
      title: "बाल विनय",
      members: [
        "प्रत्युष",
        "ईशान",
        "रक्षित",
        "रेहान",
        "दिविजा",
        "नमामि",
        "माधव",
        "देवार्चित...",
      ],
    },
  },

  contact: {
    presitter: "कृष्ण गोपाल सोनी",
    address: "29/12 कठाली बाजार, सिरोंज, जिला विदिशा (म.प्र.)",
    phones: ["9926348812", "8962124095"],
    establishments: [
      { name: "शिवाय मेडीकल एजेंसी", location: "हाजीपुर, सिरोंज" },
      { name: "श्री परमात्मा ज्वेलर्स", location: "गोपाल गली, सिरोंज" },
      { name: "सोनी कृषि फार्म", location: "कुरवाई रोड, सिरोंज" },
    ],
  },

  whatsappShare: {
    defaultMessage: `॥ श्री गणेशाय नमः ॥\n\nस्नेही स्वजन,\n\nबड़े हर्ष के साथ सूचित कर रहे हैं कि हमारे प्रिय कृतार्थ संग पलक का शुभ विवाह 21 नवम्बर 2026 को स्वागत मैरिज गार्डन, सिरोंज (म.प्र.) में संपन्न होने जा रहा है।\n\nआप सपरिवार सादर आमंत्रित हैं।\n\nविस्तृत मांगलिक कार्यक्रम एवं डिजिटल निमंत्रण पत्र देखने के लिए कृपया लिंक पर पधारें:`,
  },
};

