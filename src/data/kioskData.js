export const kioskData = {
  en: {
    farmer: {
      name: "Farmer",
      personaName: "Ramesh Patil",
      personaTitle: "Wheat & Cotton Farmer, Nagpur District",
      welcome: "Namaskar Ramesh-ji. Select an agricultural service below:",
      categoryKey: "farmer",
      actions: [
        { id: "cropPrices", title: "Check Today's Crop Prices", desc: "Live market mandi rates" },
        { id: "weatherUpdates", title: "Weather Updates & Advisory", desc: "Regional weather & crop tips" },
        { id: "schemeEligibility", title: "Scheme Eligibility", desc: "PM-KISAN & PMFBY details" },
        { id: "expertHelp", title: "Agriculture Expert Assistance", desc: "Contact extension university" }
      ],
      details: {
        cropPrices: {
          title: "Live Crop Market Rates (Mandi)",
          subtitle: "Nagpur APMC Mandi Rates (Today)",
          headers: ["Crop", "Mandi Rate (per Quintal)", "Trend"],
          rows: [
            { name: "Cotton (कापूस)", val: "₹7,400", sub: "▲ ₹150 Today" },
            { name: "Soybean (सोयाबीन)", val: "₹4,950", sub: "▲ ₹50 Today" },
            { name: "Wheat (गहू)", val: "₹2,500", sub: "● Stable" },
            { name: "Tur / Pigeon Pea (तूर)", val: "₹9,800", sub: "▼ ₹100 Today" }
          ]
        },
        weatherUpdates: {
          title: "Weather Forecast & Agricultural Advisory",
          current: "32°C - Partly Cloudy",
          forecast: [
            { period: "Tomorrow", info: "31°C - Heavy Showers" },
            { period: "Friday", info: "30°C - Thunderstorms" },
            { period: "Saturday", info: "32°C - Clear Skies" }
          ],
          tip: "Agronomy Advisory: High humidity & rainfall predicted. Postpone fertilizer spreading on Soybean fields. Ensure drainage channels are clear to prevent waterlogging."
        },
        schemeEligibility: {
          title: "PM-KISAN & PMFBY Crop Insurance Status",
          kisanStatus: "PM-KISAN Status: 16th installment (₹2,000) successfully credited to linked Bank of India A/C ending 5032.",
          insuranceStatus: "PMFBY Policy Number: PMFBY-MH-89021. Crop: Cotton. Area: 2.5 Hectares. Premium status: Fully Paid. Claim tracking: active (Inspection completed)."
        },
        expertHelp: {
          title: "Agriculture Extension Help Desks",
          desc: "Direct help lines to agricultural experts at Dr. Panjabrao Deshmukh Krishi Vidyapeeth (PDKV):",
          contacts: [
            { label: "Crop Diseases Hotline", val: "1800-233-1501" },
            { label: "Soil Testing Services", val: "0712-2561502" },
            { label: "Subsidies Desk (Nagpur Block)", val: "0712-2568903" }
          ]
        }
      }
    },
    student: {
      name: "Student",
      personaName: "Pooja Deshmukh",
      personaTitle: "HSC Science Graduate, Wardha",
      welcome: "Hello Pooja, welcome. Manage your education pathways:",
      categoryKey: "education",
      actions: [
        { id: "findScholarships", title: "Find Scholarships", desc: "MahaDBT & Merit options" },
        { id: "exploreCourses", title: "Explore Admissions & ITI", desc: "Engineering & technical courses" },
        { id: "careerRoadmap", title: "Career Roadmap", desc: "Aptitude paths after 12th" },
        { id: "entranceGuidance", title: "Entrance Exam Guidance", desc: "MHT-CET & JEE notifications" }
      ],
      details: {
        findScholarships: {
          title: "MahaDBT Scholarship Finder",
          subtitle: "Eligible matching schemes (HSC Passed / Open EBC Category)",
          headers: ["Scheme", "Scholarship Reward", "Deadline"],
          rows: [
            { name: "Rajarshi Chhatrapati Shahu Maharaj Scheme", val: "50% Tuition Fee Reimbursement", sub: "Apply by July 31" },
            { name: "State Govt Open Merit Scholarship", val: "₹1,000 per month", sub: "Apply by July 31" },
            { name: "EBC Hostel Allowance (Dr. Punjabrao Deshmukh)", val: "₹20,000 per academic year", sub: "Expires in 8 days" }
          ]
        },
        exploreCourses: {
          title: "Admission & ITI Vocational Programs",
          desc: "Explore admission portals & nearby trade openings:",
          list: [
            { title: "ITI Nagpur Admission 2026", desc: "Trades: Electrician, Fitter, Computer Operator. Status: Applications Open." },
            { title: "Maharashtra Polytechnic Admission", desc: "Diploma in Civil, Mechanical, CS engineering. Status: Cap Round 1 Registration active." },
            { title: "PM Internship Scheme Portal", desc: "Short term skill placements in top companies with ₹5,000 monthly stipend." }
          ]
        },
        careerRoadmap: {
          title: "Post-12th Career Pathways Guide",
          desc: "View popular vocational and higher education tracks:",
          tracks: [
            { name: "Technical Engineering Track", steps: "HSC Science → MHT-CET Exam → B.E./B.Tech Course → Graduate Job Placement" },
            { name: "Agricultural Diploma Track", steps: "10th/12th → PDKV Agri-Diploma (2 Years) → Soil Analyst / Krishi Sevak Role" },
            { name: "Nursing & Health Services Track", steps: "HSC Science/Arts → GNM Nursing Diploma (3 Years) → Hospital Staff Nurse" }
          ]
        },
        entranceGuidance: {
          title: "Entrance Exam Notifications",
          notifications: [
            { title: "MHT-CET 2026", details: "Admit cards released. Exam center details sent via registered SMS. Dates: June 15 - June 24." },
            { title: "ITI Entrance Counseling", details: "Document verification starts at Nodal ITI Center Nagpur on July 2." }
          ]
        }
      }
    },
    citizen: {
      name: "Citizen",
      personaName: "Sunita Gade",
      personaTitle: "Bachat Gat Member, Ratnagiri District",
      welcome: "Namaskar Sunita-tai. Manage your official documents:",
      categoryKey: "govt",
      actions: [
        { id: "checkEligibility", title: "Check Eligibility", desc: "Caste, Income & land records eligibility" },
        { id: "requiredDocs", title: "Required Documents", desc: "List of certificate documents" },
        { id: "applyProcess", title: "Application Process", desc: "Apply Caste & Income certificates" },
        { id: "nearbyCenter", title: "Nearby Service Center", desc: "Find closest Setu Suvidha Kendra" }
      ],
      details: {
        checkEligibility: {
          title: "Service Eligibility Check (Maha Right to Service)",
          headers: ["Service", "Eligibility Criterion", "Status"],
          rows: [
            { name: "Income Certificate (उत्पन्न दाखला)", val: "Family income under ₹8 Lakhs for EBC EWS benefits", sub: "Eligible (Needs Income Proof)" },
            { name: "Caste Certificate (जातीचा दाखला)", val: "Ancestral land records in Maharashtra before 1967", sub: "Eligible (Requires 7/12 records)" },
            { name: "Domicile Certificate (अधिवास दाखला)", val: "Continuous residence in Maharashtra for past 15 years", sub: "Eligible (Requires School TC)" }
          ]
        },
        requiredDocs: {
          title: "Required Document Checklist",
          docs: [
            { title: "Income Certificate Documents", items: ["Aadhaar Card", "Form 16 / Income declaration form", "Panchayat assessment report", "Ration Card copy"] },
            { title: "Caste Certificate Documents", items: ["Aadhaar Card", "School leaving certificate showing caste", "Father/Uncle's caste validity proof", "7/12 land extract"] }
          ]
        },
        applyProcess: {
          title: "Setu Application Wizard (Biometric Enabled)",
          desc: "Select the certificate to apply. The system will guide you to place your fingerprint on the kiosk scanner panel to fetch Aadhaar records:",
          certificates: [
            "Income Certificate (उत्पन्न दाखला)",
            "Caste Certificate (जातीचा दाखला)",
            "Domicile Certificate (रहिवासी दाखला)",
            "7/12 Utara (Land Record Printout)"
          ]
        },
        nearbyCenter: {
          title: "Nearby Setu Suvidha Kendra Locator",
          centers: [
            { name: "Setu Kendra Nagpur East Block Office", address: "Opposite Tehsil Office, Nagpur - 440001", phone: "0712-2550190" },
            { name: "Gram Panchayat Common Service Center (CSC)", address: "Bhavan Chowk, Ward 3, Village Center", phone: "+91 98812-34012" }
          ]
        }
      }
    },
    jobSeeker: {
      name: "Job Seeker",
      personaName: "Vivek Rathod",
      personaTitle: "ITI Electrical Diploma, Nagpur",
      welcome: "Hello Vivek, welcome. Find job openings & training portals:",
      categoryKey: "employment",
      actions: [
        { id: "searchJobs", title: "Search Jobs", desc: "MahaSwayam & Panchayat openings" },
        { id: "findTraining", title: "Find Training Programs", desc: "Skill India solar & machine programs" },
        { id: "applyOpportunity", title: "Apply for Opportunities", desc: "MSEDCL apprenticeships" },
        { id: "skillAssessment", title: "Skill Assessment Check", desc: "Mock testing & trade certifications" }
      ],
      details: {
        searchJobs: {
          title: "MahaSwayam & Local Job Portal",
          subtitle: "Active vacancies in Nagpur & Pune districts matching ITI Electrical profile",
          headers: ["Position", "Employer / Agency", "Monthly Salary"],
          rows: [
            { name: "Substation Lineman Assistant", val: "MSEDCL (महावितरण)", sub: "₹15,400 per month" },
            { name: "Solar Rooftop Panel Installer", val: "Panchayat Energy Scheme Agency", sub: "₹14,200 per month" },
            { name: "ITI Electrical Apprentice", val: "MIDC Hingna Private Factory", sub: "₹10,500 stipend" }
          ]
        },
        findTraining: {
          title: "Skill Development & Placements",
          desc: "Free vocational certifications under Pramod Mahajan Skill Scheme:",
          trainings: [
            { title: "Solar Photovoltaic Technician Course", duration: "1 Month", eligibility: "ITI Electrical passed", center: "Govt ITI Wardha" },
            { title: "CNC Machine Operator Training", duration: "2 Months", eligibility: "10th/12th standard", center: "MIDC Placements Hub" }
          ]
        },
        applyOpportunity: {
          title: "Submit Apprenticeship Registration",
          desc: "Quick register using your ITI Registration ID. Enter your profile criteria below to submit direct applications to MahaSwayam:",
          placeholderId: "Enter ITI Registration Number (e.g. ITI/MH/2026/0921)"
        },
        skillAssessment: {
          title: "Apprenticeship Skill Assessment Guide",
          assessments: [
            { title: "Electrical Safety Regulations Mock", questions: 25, duration: "30 Mins", status: "Practice Quiz Active" },
            { title: "Solar Microgrid Wiring Guide", questions: 15, duration: "20 Mins", status: "Practice Quiz Active" }
          ]
        }
      }
    },
    womanEnt: {
      name: "Woman Entrepreneur",
      personaName: "Vaishali Shinde",
      personaTitle: "Cooperative Dairy Leader, Pune District",
      welcome: "Namaskar Vaishali-tai. Manage your Self-Help Group (SHG) & finance:",
      categoryKey: "women",
      actions: [
        { id: "exploreSchemes", title: "Explore Schemes", desc: "SHG Microfinance & Lakhpati Didi" },
        { id: "joinTraining", title: "Join Training Hub", desc: "Register for packaging & bookkeeping courses" },
        { id: "emergencyHelp", title: "Emergency Help Line", desc: "Direct Women support hotlines" },
        { id: "connectSupport", title: "Connect to Support", desc: "Contact Cooperative Dairy officers" }
      ],
      details: {
        exploreSchemes: {
          title: "Self Help Group & Microfinance Schemes",
          subtitle: "Maharashtra State Rural Livelihoods Mission (Umed)",
          headers: ["Scheme Name", "Loan Capacity", "Interest Rate"],
          rows: [
            { name: "Lakhpati Didi Micro-credit", val: "Interest-Free up to ₹1 Lakh", sub: "Active Scheme" },
            { name: "Umed Bachat Gat Revolving Fund", val: "₹15,000 / Group Seed Fund", sub: "Direct Credited" },
            { name: "Mavim Mahila Co-op Credit Linkage", val: "Up to ₹5 Lakhs for SHGs", sub: "Requires Audit Sheet" }
          ]
        },
        joinTraining: {
          title: "Entrepreneurship Skill Programs",
          desc: "Book a slot at the nearby Panchayat center for skill certification:",
          list: [
            { title: "Bookkeeping & Digital Finance (Tally/UPI)", duration: "7 Days", center: "Panchayat Bhavan Hall" },
            { title: "Dairy Milk Processing & Quality Inspection", duration: "10 Days", center: "District Cooperative Dairy Office" }
          ]
        },
        emergencyHelp: {
          title: "Women Safety & Emergency Hotlines",
          desc: "Toll-free emergency numbers active 24/7 in Maharashtra state:",
          contacts: [
            { label: "Maharashtra Women Helpline", val: "1091" },
            { label: "Domestic Violence Support Line", val: "181" },
            { label: "Local Women's Desk ( Nagpur Rural )", val: "0712-2561910" }
          ]
        },
        connectSupport: {
          title: "Setu Cooperative Support Panel",
          desc: "Access local dairy inspector contacts to verify fat test milk reports and register livestock audits:",
          officers: [
            { name: "Dr. A. S. More (Dairy Development Officer)", phone: "020-2560931" },
            { name: "Panchayat Veterinary Assistant (Nagpur Block)", phone: "+91 99701-20931" }
          ]
        }
      }
    },
    seniorCitizen: {
      name: "Senior Citizen",
      personaName: "Dagdu Bhise",
      personaTitle: "Retired Farm Laborer, Age 67",
      welcome: "Namaskar Dagdu-jya. Access pension assistance & healthcare:",
      categoryKey: "senior",
      actions: [
        { id: "checkBenefits", title: "Check Benefits", desc: "Pension eligibility calculation" },
        { id: "applyAssistance", title: "Apply for Assistance", desc: "Ayushman card & Shravanbal scheme" },
        { id: "emergencySupport", title: "Emergency Support", desc: "Elder helpline contacts" }
      ],
      details: {
        checkBenefits: {
          title: "Senior Pension Scheme Eligibility Calculator",
          headers: ["Pension Scheme", "Monthly Benefit", "Status"],
          rows: [
            { name: "Shravanbal Seva State Pension Scheme", val: "₹1,500 per month", sub: "Eligible (Age 65+ / Income under ₹21k)" },
            { name: "Sanjay Gandhi Niradhar Pension", val: "₹1,500 per month", sub: "Eligible (Requires medical certificate)" },
            { name: "Indira Gandhi National Old Age Pension", val: "₹1,000 per month", sub: "Eligible (BPL category)" }
          ]
        },
        applyAssistance: {
          title: "Welfare Schemes & Ayushman Cards Application",
          desc: "Tap a welfare service below. The kiosk will fetch Aadhaar verification details to confirm age and print forms:",
          services: [
            "Shravanbal Pension Registration Form (श्रवणबाळ योजना)",
            "Ayushman Bharat PM-JAY Health Card (५ लाख मोफत विमा)",
            "Maharashtra ST Bus 50% Travel Concession Card (एसटी प्रवास सवलत)"
          ]
        },
        emergencySupport: {
          title: "Elder Care Help & Emergency Support",
          desc: "National and state helpline service numbers for seniors:",
          contacts: [
            { label: "National Helpline for Senior Citizens (Elderline)", val: "14567" },
            { label: "Govt Health Scheme Grievance (Ayushman Line)", val: "1800-111-565" },
            { label: "Local Panchayat Senior Welfare Officer", val: "0712-2553012" }
          ]
        }
      }
    }
  },
  hi: {
    farmer: {
      name: "किसान",
      personaName: "रमेश पाटिल",
      personaTitle: "गेहूं और कपास उत्पादक, नागपुर जिला",
      welcome: "नमस्कार रमेश-जी। कृपया नीचे एक कृषि सेवा चुनें:",
      categoryKey: "farmer",
      actions: [
        { id: "cropPrices", title: "आज के फसल भाव देखें", desc: "लाइव मंडी बाजार दरें" },
        { id: "weatherUpdates", title: "मौसम सलाह और कृषि सुझाव", desc: "क्षेत्रीय मौसम और टिप्स" },
        { id: "schemeEligibility", title: "योजना पात्रता", desc: "पीएम-किसान और फसल बीमा" },
        { id: "expertHelp", title: "कृषि विशेषज्ञ सहायता", desc: "कृषि विश्वविद्यालय से संपर्क" }
      ],
      details: {
        cropPrices: {
          title: "फसलों के लाइव मंडी भाव (आज)",
          subtitle: "नागपुर एपीएमसी मंडी दरें (आज)",
          headers: ["फसल", "मंडी भाव (प्रति क्विंटल)", "दैनिक रुझान"],
          rows: [
            { name: "कपास (कापूस)", val: "₹७,४००", sub: "▲ ₹१५० आज" },
            { name: "सोयाबीन (सोयाबीन)", val: "₹४,९५०", sub: "▲ ₹५० आज" },
            { name: "गेहूं (गहू)", val: "₹२,५००", sub: "● स्थिर" },
            { name: "तूर (अरहर)", val: "₹९,८००", sub: "▼ ₹१०० आज" }
          ]
        },
        weatherUpdates: {
          title: "मौसम पूर्वानुमान और कृषि सलाह",
          current: "३२°C - आंशिक बादल छाए रहेंगे",
          forecast: [
            { period: "कल", info: "३१°C - भारी बारिश" },
            { period: "शुक्रवार", info: "३०°C - आंधी-तूफान" },
            { period: "शनिवार", info: "३२°C - साफ आसमान" }
          ],
          tip: "कृषि सलाह: भारी बारिश की भविष्यवाणी है। फसलों पर कीटनाशक का छिड़काव रोक दें और सोयाबीन के खेतों में जल निकासी की व्यवस्था करें।"
        },
        schemeEligibility: {
          title: "पीएम-किसान और फसल बीमा स्थिति",
          kisanStatus: "पीएम-किसान स्थिति: १६वीं किस्त (₹२,०००) बैंक ऑफ इंडिया खाते (अंत में ५०३२) में सफलतापूर्वक जमा कर दी गई है।",
          insuranceStatus: "प्रधानमंत्री फसल बीमा: पॉलिसी संख्या PMFBY-MH-89021। प्रीमियम स्थिति: भुगतान पूरा। दावा ट्रैकिंग: सक्रिय (निरीक्षण पूरा)।"
        },
        expertHelp: {
          title: "कृषि विस्तार सहायता केंद्र",
          desc: "डॉ. पंजाबराव देशमुख कृषि विद्यापीठ (पीडीकेवी) के कृषि विशेषज्ञों के टोल-फ्री नंबर:",
          contacts: [
            { label: "फसल रोग हेल्पलाइन", val: "१८००-२३३-१५०१" },
            { label: "मिट्टी परीक्षण सेवाएं", val: "०७१२-२५६१५०२" },
            { label: "सब्सिडी सहायता डेस्क", val: "०७१२-२५६८९०३" }
          ]
        }
      }
    },
    student: {
      name: "छात्र",
      personaName: "पूजा देशमुख",
      personaTitle: "१२वीं विज्ञान उत्तीर्ण, वर्धा",
      welcome: "नमस्ते पूजा, स्वागत है। अपनी शिक्षा के रास्ते चुनें:",
      categoryKey: "education",
      actions: [
        { id: "findScholarships", title: "छात्रवृत्ति खोजें", desc: "महाडीबीटी और योग्यता विकल्प" },
        { id: "exploreCourses", title: "दाखिला और आईटीआई कोर्स", desc: "पॉलीटेक्निक और वोकेशनल कोर्स" },
        { id: "careerRoadmap", title: "करियर रोडमैप", desc: "१२वीं के बाद उपयुक्त करियर" },
        { id: "entranceGuidance", title: "प्रवेश परीक्षा मार्गदर्शन", desc: "एमएचटी-सीईटी और जेईई सूचना" }
      ],
      details: {
        findScholarships: {
          title: "महाडीबीटी छात्रवृत्ति खोजक",
          subtitle: "योग्य मेल खाने वाली योजनाएं (१२वीं पास / ईबीसी सामान्य श्रेणी)",
          headers: ["योजना", "लाभ", "अंतिम तिथि"],
          rows: [
            { name: "राजर्षि छत्रपति शाहू महाराज योजना", val: "५०% ट्यूशन फीस की प्रतिपूर्ति", sub: "३१ जुलाई तक आवेदन करें" },
            { name: "राज्य सरकार ओपन मेरिट स्कॉलरशिप", val: "₹१,००० प्रति माह", sub: "३१ जुलाई तक आवेदन करें" },
            { name: "पंजाबराव देशमुख छात्रावास भत्ता", val: "₹२०,००० प्रति शैक्षणिक वर्ष", sub: "८ दिन शेष" }
          ]
        },
        exploreCourses: {
          title: "प्रवेश और आईटीआई वोकेशनल कार्यक्रम",
          desc: "अध्ययन पोर्टल और नजदीकी सीट विवरण देखें:",
          list: [
            { title: "ITI नागपुर प्रवेश २०२६", desc: "ट्रेड: इलेक्ट्रीशियन, फिटर, कंप्यूटर ऑपरेटर। स्थिति: आवेदन खुले हैं।" },
            { title: "महाराष्ट्र पॉलीटेक्निक दाखिला", desc: "सिविल, मैकेनिकल, सीएस इंजीनियरिंग डिप्लोमा। स्थिति: कैप राउंड पंजीकरण सक्रिय।" },
            { title: "पीएम इंटर्नशिप योजना", desc: "शीर्ष कंपनियों में लघु अवधि कौशल प्लेसमेंट। ₹५,००० मासिक स्टाइपेंड।" }
          ]
        },
        careerRoadmap: {
          title: "१२वीं के बाद करियर रोडमैप गाइड",
          desc: "लोकप्रिय वोकेशनल और उच्च शिक्षा के विकल्प देखें:",
          tracks: [
            { name: "तकनीकी इंजीनियरिंग ट्रैक", steps: "१२वीं विज्ञान → एमएचटी-सीईटी परीक्षा → बी.ई./बी.टेक कोर्स → प्लेसमेंट" },
            { name: "कृषि डिप्लोमा ट्रैक", steps: "१०वीं/१२वीं → कृषि-डिप्लोमा (२ वर्ष) → मृदा विश्लेषक / कृषि सेवक पद" },
            { name: "नर्सिंग और स्वास्थ्य सेवाएं", steps: "१२वीं विज्ञान → जीएनएम नर्सिंग डिप्लोमा (३ वर्ष) → अस्पताल स्टाफ नर्स" }
          ]
        },
        entranceGuidance: {
          title: "प्रवेश परीक्षा महत्वपूर्ण सूचनाएं",
          notifications: [
            { title: "MHT-CET २०२६", details: "एडमिट कार्ड जारी हो चुके हैं। परीक्षा तिथियां: १५ जून - २४ जून। विवरण एसएमएस द्वारा भेजे गए हैं।" },
            { title: "ITI काउंसलिंग और सत्यापन", details: "नोडल आईटीआई वर्धा केंद्र में दस्तावेजों का सत्यापन २ जुलाई से शुरू होगा।" }
          ]
        }
      }
    },
    citizen: {
      name: "नागरिक",
      personaName: "सुनीता गाडे",
      personaTitle: "बचत गट सदस्य, रत्नागिरी जिला",
      welcome: "नमस्कार सुनीता-ताई। अपने आधिकारिक दस्तावेज़ प्रबंधित करें:",
      categoryKey: "govt",
      actions: [
        { id: "checkEligibility", title: "पात्रता की जांच करें", desc: "जाति, आय और भूमि रिकॉर्ड की पात्रता" },
        { id: "requiredDocs", title: "आवश्यक दस्तावेज़", desc: "प्रमाणपत्रों के लिए जरूरी दस्तावेज" },
        { id: "applyProcess", title: "आवेदन प्रक्रिया", desc: "जाति और आय प्रमाण पत्र के लिए आवेदन करें" },
        { id: "nearbyCenter", title: "नजदीकी सेवा केंद्र", desc: "निकटतम सेतु सुविधा केंद्र खोजें" }
      ],
      details: {
        checkEligibility: {
          title: "सेवा पात्रता जांच (आरटीएस महाराष्ट्र)",
          headers: ["सेवा का नाम", "पात्रता मानदंड", "स्थिति"],
          rows: [
            { name: "आय प्रमाण पत्र (उत्पन्न दाखला)", val: "पारिवारिक आय ₹८ लाख से कम होनी चाहिए", sub: "योग्य (आय प्रमाण पत्र चाहिए)" },
            { name: "जाति प्रमाण पत्र (जातीचा दाखला)", val: "महाराष्ट्र में १९६७ से पहले के पैतृक भूमि रिकॉर्ड", sub: "योग्य (७/१२ रिकॉर्ड चाहिए)" },
            { name: "निवास प्रमाण पत्र (रहिवासी दाखला)", val: "पिछले १५ वर्षों से महाराष्ट्र में निरंतर निवास", sub: "योग्य (स्कूल टीसी चाहिए)" }
          ]
        },
        requiredDocs: {
          title: "आवश्यक दस्तावेज़ सूची",
          docs: [
            { title: "आय प्रमाण पत्र दस्तावेज", items: ["आधार कार्ड", "आय घोषणा पत्र", "पंचायत कर मूल्यांकन रिपोर्ट", "राशन कार्ड की कॉपी"] },
            { title: "जाति प्रमाण पत्र दस्तावेज", items: ["आधार कार्ड", "जाति दर्शाने वाला स्कूल लीविंग सर्टिफिकेट", "पिता/चाचा का जाति प्रमाण", "७/१२ भूमि रिकॉर्ड"] }
          ]
        },
        applyProcess: {
          title: "सेतु आवेदन विज़ार्ड (बायोमेट्रिक सक्षम)",
          desc: "आवेदन करने के लिए प्रमाणपत्र चुनें। आधार सत्यापन के लिए बायोमेट्रिक स्कैनर पर अपनी उंगली रखें:",
          certificates: [
            "आय प्रमाण पत्र (उत्पन्न दाखला)",
            "जाति प्रमाण पत्र (जातीचा दाखला)",
            "निवास प्रमाण पत्र (रहिवासी दाखला)",
            "७/१२ उतरा (भूमि रिकॉर्ड प्रिंटआउट)"
          ]
        },
        nearbyCenter: {
          title: "नजदीकी सेतु सुविधा केंद्र",
          centers: [
            { name: "सेतु केंद्र नागपुर पूर्व ब्लॉक कार्यालय", address: "तहसील कार्यालय के सामने, नागपुर - ४४०००१", phone: "०७१२-२५५०१९०" },
            { name: "ग्राम पंचायत सामान्य सेवा केंद्र (सीएससी)", address: "भवन चौक, वार्ड ३, ग्राम पंचायत कार्यालय", phone: "+९१ ९८८१२-३४०१२" }
          ]
        }
      }
    },
    jobSeeker: {
      name: "नौकरी चाहने वाले",
      personaName: "विवेक राठौड़",
      personaTitle: "आईटीआई इलेक्ट्रीशियन डिप्लोमा, नागपुर",
      welcome: "नमस्ते विवेक, स्वागत है। रिक्तियां और प्रशिक्षण खोजें:",
      categoryKey: "employment",
      actions: [
        { id: "searchJobs", title: "नौकरियां खोजें", desc: "महास्वयं और पंचायत रिक्तियां" },
        { id: "findTraining", title: "प्रशिक्षण कार्यक्रम खोजें", desc: "सोलर और मशीन ऑपरेटर कार्यक्रम" },
        { id: "applyOpportunity", title: "अवसरों के लिए आवेदन करें", desc: "महावितरण अप्रेंटिसशिप आवेदन" },
        { id: "skillAssessment", title: "कौशल मूल्यांकन टेस्ट", desc: "मॉक परीक्षा और ट्रेड प्रमाणपत्र" }
      ],
      details: {
        searchJobs: {
          title: "महास्वयं और स्थानीय रोजगार पोर्टल",
          subtitle: "नागपुर और पुणे जिलों में इलेक्ट्रीशियन रिक्तियां",
          headers: ["पद का नाम", "नियोक्ता / एजेंसी", "मासिक वेतन"],
          rows: [
            { name: "सबस्टेशन लाइनमैन सहायक", val: "महावितरण (MSEDCL)", sub: "₹१५,४०० प्रति माह" },
            { name: "सोलर रूफटॉप पैनल इंस्टॉलर", val: "पंचायत ऊर्जा योजना एजेंसी", sub: "₹१४,२०० प्रति माह" },
            { name: "आईटीआई इलेक्ट्रीशियन अप्रेंटिस", val: "एमआईडीसी हिंगना प्राइवेट लिमिटेड", sub: "₹१०,५०० स्टाइपेंड" }
          ]
        },
        findTraining: {
          title: "कौशल विकास और प्लेसमेंट",
          desc: "प्रमोद महाजन कौशल योजना के तहत मुफ्त प्रशिक्षण कार्यक्रम:",
          trainings: [
            { title: "सोलर फोटोवोल्टिक तकनीशियन", duration: "१ महीना", eligibility: "आईटीआई उत्तीर्ण", center: "सरकारी आईटीआई वर्धा" },
            { title: "सीएनसी मशीन ऑपरेटर", duration: "२ महीने", eligibility: "१०वीं/१२वीं पास", center: "एमआईडीसी प्लेसमेंट हब" }
          ]
        },
        applyOpportunity: {
          title: "शिक्षुता (Apprenticeship) पंजीकरण",
          desc: "अपने आईटीआई रजिस्ट्रेशन आईडी का उपयोग करके सीधे आवेदन करें:",
          placeholderId: "आईटीआई पंजीकरण संख्या दर्ज करें (जैसे ITI/MH/2026/0921)"
        },
        skillAssessment: {
          title: "ट्रेड कौशल मूल्यांकन गाइड",
          assessments: [
            { title: "विद्युत सुरक्षा नियम मॉक टेस्ट", questions: 25, duration: "३० मिनट", status: "मॉक टेस्ट सक्रिय" },
            { title: "सोलर ग्रिड वायरिंग गाइड", questions: 15, duration: "२० मिनट", status: "मॉक टेस्ट सक्रिय" }
          ]
        }
      }
    },
    womanEnt: {
      name: "महिला उद्यमी",
      personaName: "वैशाली शिंदे",
      personaTitle: "सहकारी डेयरी प्रमुख, पुणे जिला",
      welcome: "नमस्कार वैशाली-ताई। स्वयं सहायता समूह (बचत गट) और वित्त प्रबंधित करें:",
      categoryKey: "women",
      actions: [
        { id: "exploreSchemes", title: "योजनाएं खोजें", desc: "बचत गट माइक्रोफाइनेंस और लखपति दीदी" },
        { id: "joinTraining", title: "कौशल प्रशिक्षण केंद्र", desc: "पैकेजिंग और बुककीपिंग कोर्स" },
        { id: "emergencyHelp", title: "आपातकालीन सुरक्षा लाइन", desc: "महिला सुरक्षा हेल्पलाइन" },
        { id: "connectSupport", title: "सहायता टीम से संपर्क करें", desc: "डेयरी निरीक्षकों से संपर्क" }
      ],
      details: {
        exploreSchemes: {
          title: "महिला स्वयं सहायता समूह और माइक्रोफाइनेंस",
          subtitle: "महाराष्ट्र राज्य ग्रामीण आजीविका मिशन (उमेद)",
          headers: ["योजना का नाम", "ऋण सीमा", "ब्याज दर"],
          rows: [
            { name: "लखपति दीदी क्रेडिट योजना", val: "₹१ लाख तक ब्याज मुक्त", sub: "सक्रिय योजना" },
            { name: "उमेद बचत गट सीड फंड", val: "₹१५,००० प्रति समूह", sub: "सीधा हस्तांतरित" },
            { name: "माविम को-ऑप क्रेडिट लिंकेज", val: "₹५ लाख तक ऋण", sub: "ऑडिट आवश्यक" }
          ]
        },
        joinTraining: {
          title: "उद्यमिता कौशल कार्यक्रम",
          desc: "नजदीकी पंचायत भवन में प्रशिक्षण के लिए पंजीकरण करें:",
          list: [
            { title: "बुककीपिंग और डिजिटल वित्तीय लेन-देन", duration: "७ दिन", center: "पंचायत भवन कक्ष" },
            { title: "डेयरी दूध प्रसंस्करण और गुणवत्ता परीक्षण", duration: "१० दिन", center: "जिला को-ऑपरेटिव डेयरी" }
          ]
        },
        emergencyHelp: {
          title: "महिला सुरक्षा और हेल्पलाइन नंबर",
          desc: "महाराष्ट्र राज्य में सक्रिय टोल-फ्री आपातकालीन नंबर:",
          contacts: [
            { label: "महाराष्ट्र महिला हेल्पलाइन", val: "१०९१" },
            { label: "घरेलू हिंसा सहायता लाइन", val: "१८१" },
            { label: "स्थानीय महिला थाना (नागपुर ग्रामीण)", val: "०७१२-२५६१९१०" }
          ]
        },
        connectSupport: {
          title: "डेयरी विकास अधिकारी संपर्क",
          desc: "दूध की वसा जांच (Fat Test) रिपोर्ट सत्यापित करने और पशुधन ऑडिट के लिए संपर्क करें:",
          officers: [
            { name: "डॉ. ए. एस. मोरे (डेयरी विकास अधिकारी)", phone: "०२०-२५६०९३१" },
            { name: "पंचायत पशु चिकित्सा सहायक", phone: "+९१ ९९७०१-२०९३१" }
          ]
        }
      }
    },
    seniorCitizen: {
      name: "वरिष्ठ नागरिक",
      personaName: "दगडू भिसे",
      personaTitle: "सेवानिवृत्त कृषि मजदूर, आयु ६७ वर्ष",
      welcome: "नमस्कार दगडू-ज्या। पेंशन सहायता और स्वास्थ्य सेवाएं प्राप्त करें:",
      categoryKey: "senior",
      actions: [
        { id: "checkBenefits", title: "लाभ की जांच करें", desc: "पेंशन पात्रता कैलकुलेटर" },
        { id: "applyAssistance", title: "सहायता के लिए आवेदन", desc: "आयुष्मान कार्ड और श्रावणबाल योजना" },
        { id: "emergencySupport", title: "आपातकालीन सहायता", desc: "वरिष्ठ नागरिक हेल्पलाइन" }
      ],
      details: {
        checkBenefits: {
          title: "वरिष्ठ पेंशन योजना पात्रता कैलकुलेटर",
          headers: ["पेंशन योजना", "मासिक लाभ", "स्थिति"],
          rows: [
            { name: "श्रावणबाल सेवा राज्य पेंशन योजना", val: "₹१,५०० प्रति माह", sub: "योग्य (आयु ६५+ / आय ₹२१,००० से कम)" },
            { name: "संजय गांधी निराधार पेंशन", val: "₹१,५०० प्रति माह", sub: "योग्य (चिकित्सा प्रमाण पत्र की आवश्यकता)" },
            { name: "इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन", val: "₹१,००० प्रति माह", sub: "योग्य (बीपीएल श्रेणी)" }
          ]
        },
        applyAssistance: {
          title: "कल्याणकारी योजनाएं और आयुष्मान कार्ड",
          desc: "नीचे दी गई सेवा पर टैप करें। कियोस्क आधार से जानकारी लेकर आवेदन फॉर्म प्रिंट करेगा:",
          services: [
            "श्रावणबाल पेंशन पंजीकरण फॉर्म (श्रवणबाळ योजना)",
            "आयुष्मान भारत पीएम-जय स्वास्थ्य कार्ड (५ लाख मुफ्त बीमा)",
            "महाराष्ट्र एसटी बस ५०% यात्रा रियायत कार्ड"
          ]
        },
        emergencySupport: {
          title: "वरिष्ठ नागरिक सुरक्षा और सहायता",
          desc: "वरिष्ठ नागरिकों के लिए राष्ट्रीय और राज्य हेल्पलाइन नंबर:",
          contacts: [
            { label: "राष्ट्रीय वरिष्ठ नागरिक हेल्पलाइन (एल्डरलाइन)", val: "१४५६७" },
            { label: "आयुष्मान भारत योजना शिकायत निवारण", val: "१८००-१११-५६५" },
            { label: "स्थानीय ग्राम पंचायत वरिष्ठ कल्याण अधिकारी", val: "०७१२-२५५३०१२" }
          ]
        }
      }
    }
  },
  mr: {
    farmer: {
      name: "शेतकरी",
      personaName: "रमेश पाटील",
      personaTitle: "गहू व कापूस उत्पादक, नागपूर जिल्हा",
      welcome: "नमस्कार रमेश-जी. कृपया खालील कृषी सेवा निवडा:",
      categoryKey: "farmer",
      actions: [
        { id: "cropPrices", title: "आजचे बाजार भाव तपासा", desc: "थेट मंडी बाजार दर" },
        { id: "weatherUpdates", title: "हवामान अंदाज व कृषी सल्ला", desc: "प्रादेशिक हवामान आणि टीप" },
        { id: "schemeEligibility", title: "योजनांची पात्रता", desc: "पीएम-किसान व पीक विमा" },
        { id: "expertHelp", title: "कृषी तज्ज्ञ मदत", desc: "कृषी विद्यापीठ संपर्क क्रमांक" }
      ],
      details: {
        cropPrices: {
          title: "थेट पिकांचे बाजार भाव (मंडी)",
          subtitle: "नागपूर कृषी उत्पन्न बाजार समिती दर (आज)",
          headers: ["पीक", "बाजार भाव (प्रति क्विंटल)", "दैनिक कल"],
          rows: [
            { name: "कापूस", val: "₹७,४००", sub: "▲ ₹१५० आज" },
            { name: "सोयाबीन", val: "₹४,९५०", sub: "▲ ₹५० आज" },
            { name: "गहू", val: "₹२,५००", sub: "● स्थिर" },
            { name: "तूर", val: "₹९,८००", sub: "▼ ₹१०० आज" }
          ]
        },
        weatherUpdates: {
          title: "हवामान अंदाज व कृषी सल्ला",
          current: "३२°C - अंशतः ढगाळ",
          forecast: [
            { period: "उद्या", info: "३१°C - मुसळधार पाऊस" },
            { period: "शुक्रवार", info: "३०°C - वादळी पाऊस" },
            { period: "शनिवार", info: "३२°C - निरभ्र आकाश" }
          ],
          tip: "कृषी सल्ला: मुसळधार पावसाची शक्यता वर्तवण्यात आली आहे. सोयाबीन पिकावरील कीटकनाशक फवारणी पुढे ढकला. शेतातून पाण्याचा योग्य निचरा होईल याची खात्री करा."
        },
        schemeEligibility: {
          title: "पीएम-किसान आणि पीक विमा स्थिती",
          kisanStatus: "पीएम-किसान सन्मान निधी: १६वा हप्ता (₹२,०००) तुमच्या बँक ऑफ इंडिया खात्यात यशस्वीरित्या जमा करण्यात आला आहे.",
          insuranceStatus: "पंतप्रधान पीक विमा योजना: पॉलिसी क्रमांक PMFBY-MH-89021. हप्ता स्थिती: पूर्ण भरला. दावा मागोवा: सक्रिय (तपासणी पूर्ण)."
        },
        expertHelp: {
          title: "कृषी विस्तार सल्लागार केंद्र",
          desc: "डॉ. पंजाबराव देशमुख कृषी विद्यापीठ (PDKV) च्या कृषी तज्ज्ञांशी संपर्क साधा:",
          contacts: [
            { label: "पीक रोग निवारण हेल्पलाइन", val: "१८००-२३३-१५०१" },
            { label: "माती परीक्षण सेवा", val: "०७१२-२५६१५०२" },
            { label: "अनुदान कक्ष (नागपूर विभाग)", val: "०७१२-२५६८९०३" }
          ]
        }
      }
    },
    student: {
      name: "विद्यार्थी",
      personaName: "पूजा देशमुख",
      personaTitle: "१२वी विज्ञान उत्तीर्ण, वर्धा",
      welcome: "नमस्ते पूजा, स्वागत आहे. तुमचे शैक्षणिक पर्याय निवडा:",
      categoryKey: "education",
      actions: [
        { id: "findScholarships", title: "शिष्यवृत्ती शोधा", desc: "महाडीबीटी व गुणवत्ता योजना" },
        { id: "exploreCourses", title: "प्रवेश प्रक्रिया व आयटीआय", desc: "पॉलिटेक्निक व वोकेशनल अभ्यासक्रम" },
        { id: "careerRoadmap", title: "करिअर रोडमॅप", desc: "१२वीनंतर योग्य करिअर वाटा" },
        { id: "entranceGuidance", title: "प्रवेश परीक्षा मार्गदर्शन", desc: "MHT-CET व JEE महत्वाच्या सूचना" }
      ],
      details: {
        findScholarships: {
          title: "महाडीबीटी शिष्यवृत्ती शोधक",
          subtitle: "पात्र योजना (१२वी उत्तीर्ण / खुला प्रवर्ग EBC)",
          headers: ["योजना", "शिष्यवृत्ती लाभ", "अंतिम तारीख"],
          rows: [
            { name: "राजर्षी छत्रपती शाहू महाराज योजना", val: "५०% शैक्षणिक शुल्क माफी", sub: "३१ जुलैपूर्वी अर्ज करा" },
            { name: "राज्य शासकीय खुली गुणवत्ता शिष्यवृत्ती", val: "₹१,००० प्रति महिना", sub: "३१ जुलैपूर्वी अर्ज करा" },
            { name: "डॉ. पंजाबराव देशमुख वसतिगृह भत्ता", val: "₹२०,००० प्रति वर्ष", sub: "५ दिवस शिल्लक" }
          ]
        },
        exploreCourses: {
          title: "प्रवेश व आयटीआय व्यवसाय शिक्षण",
          desc: "नजीकच्या कॉलेज व रिक्त जागांची माहिती मिळवा:",
          list: [
            { title: "आयटीआय नागपूर प्रवेश २०२६", desc: "ट्रेड्स: इलेक्ट्रीशियन, फिटर, कॉम्प्युटर ऑपरेटर. स्थिती: प्रवेश सुरू." },
            { title: "महाराष्ट्र पॉलिटेक्निक डिप्लोमा", desc: "सिव्हिल, मेकॅनिकल, संगणक तंत्रज्ञान. स्थिती: कॅप राउंड नोंदणी सुरू." },
            { title: "पीएम इंटर्नशिप योजना", desc: "नामांकित कंपन्यांमध्ये प्रशिक्षण संधी व दरमहा ₹५,००० विद्यावेतन." }
          ]
        },
        careerRoadmap: {
          title: "१२वीनंतर करिअरच्या मुख्य वाटा",
          desc: "विविध व्यवसाय आणि उच्च शिक्षणाच्या वाटा जाणून घ्या:",
          tracks: [
            { name: "तांत्रिक अभियांत्रिकी मार्ग", steps: "१२वी विज्ञान → MHT-CET परीक्षा → बी.ई./बी.टेक पदवी → रोजगार संधी" },
            { name: "कृषी पदविका मार्ग", steps: "१०वी/१२वी → कृषी पदविका (२ वर्षे) → कृषी सहाय्यक / कृषी सेवक पद" },
            { name: "शुश्रूषा आणि आरोग्य सेवा", steps: "१२वी विज्ञान → GNM नर्सिंग डिप्लोमा (३ वर्षे) → रुग्णालय परिचारिका" }
          ]
        },
        entranceGuidance: {
          title: "प्रवेश परीक्षा महत्वाच्या सूचना",
          notifications: [
            { title: "MHT-CET २०२६", details: "प्रवेशपत्र उपलब्ध झाले आहे. परीक्षा कालावधी: १५ जून - २४ जून. परीक्षा केंद्राची माहिती मोबाईलवर पाठवण्यात आली आहे." },
            { title: "ITI प्रवेश कागदपत्र पडताळणी", details: "नोडल आयटीआय केंद्रावर मूळ कागदपत्रांची पडताळणी २ जुलैपासून सुरू होईल." }
          ]
        }
      }
    },
    citizen: {
      name: "नागरीक",
      personaName: "सुनीता गाडे",
      personaTitle: "बचत गट सदस्य, रत्नागिरी जिल्हा",
      welcome: "नमस्कार सुनीता-ताई. तुमचे शासकीय दस्तऐवज मिळवा:",
      categoryKey: "govt",
      actions: [
        { id: "checkEligibility", title: "पात्रता तपासा", desc: "जात, उत्पन्न व ७/१२ पात्रता" },
        { id: "requiredDocs", title: "आवश्यक कागदपत्रे", desc: "विविध प्रमाणपत्रांसाठीची यादी" },
        { id: "applyProcess", title: "अर्ज करण्याची पद्धत", desc: "थेट जात व उत्पन्न प्रमाणपत्र अर्ज" },
        { id: "nearbyCenter", title: "नजीकचे सेवा केंद्र", desc: "जवळचे महा-ई-सेवा किंवा सेतु केंद्र" }
      ],
      details: {
        checkEligibility: {
          title: "शासकीय सेवा पात्रता तपासणी (महाराष्ट्र हक्क सेवा)",
          headers: ["सेवेचे नाव", "पात्रता निकष", "स्थिती"],
          rows: [
            { name: "उत्पन्न दाखला", val: "कौटुंबिक उत्पन्न वार्षिक ₹८ लाखांपेक्षा कमी असावे", sub: "पात्र (उत्पन्नाचा पुरावा आवश्यक)" },
            { name: "जातीचा दाखला", val: "महाराष्ट्रात १९६७ पूर्वीचे वाडवडिलांचे रहिवासी पुरावे", sub: "पात्र (७/१२ उतारा आवश्यक)" },
            { name: "रहिवासी दाखला", val: "महाराष्ट्रात सलग १५ वर्षे वास्तव्य असावे", sub: "पात्र (शाळेचा दाखला आवश्यक)" }
          ]
        },
        requiredDocs: {
          title: "कागदपत्रांची तपासणी यादी",
          docs: [
            { title: "उत्पन्न दाखल्यासाठीचे कागदपत्र", items: ["आधार कार्ड", "स्वयंघोषणा पत्र", "तलाठी अहवाल / ग्रामसेवक अहवाल", "रेशन कार्ड प्रत"] },
            { title: "जातीच्या दाखल्यासाठीचे कागदपत्र", items: ["आधार कार्ड", "शाळा सोडल्याचा दाखला (L.C.)", "वडील किंवा चुलत्यांच्या जातीचा दाखला", "७/१२ किंवा ८-अ जमीन रेकॉर्ड"] }
          ]
        },
        applyProcess: {
          title: "सेतु स्वयंचलित अर्ज प्रणाली (बायोमेट्रिक)",
          desc: "अर्ज करण्यासाठी प्रमाणपत्र निवडा. आधार पडताळणीसाठी कियोस्कवरील हिरव्या स्कॅनरवर अंगठा ठेवा:",
          certificates: [
            "उत्पन्न दाखला (Income Certificate)",
            "जातीचा दाखला (Caste Certificate)",
            "रहिवासी दाखला (Domicile Certificate)",
            "७/१२ उतारा (Land Record Sheet)"
          ]
        },
        nearbyCenter: {
          title: "जवळचे सेतु किंवा महा-ई-सेवा केंद्र",
          centers: [
            { name: "सेतु केंद्र नागपूर पूर्व विभाग कार्यालय", address: "तहसील कार्यालयाशेजारी, नागपूर - ४४०००१", phone: "०७१२-२५५०१९०" },
            { name: "ग्रामपंचायत महा-ई-सेवा केंद्र (सीएससी)", address: "भवन चौक, वॉर्ड ३, ग्रामपंचायत कार्यालय", phone: "+९१ ९८८१२-३४०१२" }
          ]
        }
      }
    },
    jobSeeker: {
      name: "नोकरी शोधणारे",
      personaName: "विवेक राठोड",
      personaTitle: "आयटीआय इलेक्ट्रिकल डिप्लोमा, नागपूर",
      welcome: "नमस्ते विवेक, स्वागत आहे. उपलब्ध नोकऱ्या व कौशल्ये शोधा:",
      categoryKey: "employment",
      actions: [
        { id: "searchJobs", title: "नोकऱ्या शोधा", desc: "महास्वयं व पंचायत रिक्त जागा" },
        { id: "findTraining", title: "प्रशिक्षण अभ्यासक्रम", desc: "मोफत सोलर व तांत्रिक कौशल्ये" },
        { id: "applyOpportunity", title: "थेट अर्ज करा", desc: "महावितरण शिकाऊ उमेदवारी अर्ज" },
        { id: "skillAssessment", title: "कौशल्य चाचणी", desc: "ट्रेड मॉक परीक्षा व प्रमाणपत्रे" }
      ],
      details: {
        searchJobs: {
          title: "महास्वयं आणि स्थानिक रोजगार पोर्टल",
          subtitle: "नागपूर आणि पुणे जिल्ह्यातील विद्युत तंत्रज्ञ रिक्त पदे",
          headers: ["पदाचे नाव", "कंपनी / शासकीय विभाग", "मासिक वेतन"],
          rows: [
            { name: "महावितरण सबस्टेशन लाईनमन सहाय्यक", val: "महावितरण (MSEDCL)", sub: "₹१५,४०० प्रति महिना" },
            { name: "सौर ऊर्जा पॅनेल इंस्टॉलर", val: "पंचायत सौर ऊर्जा योजना", sub: "₹१४,२०० प्रति महिना" },
            { name: "आयटीआय इलेक्ट्रिकल अप्रेंटिस", val: "एमआयडीसी हिंगणा प्रायव्हेट फॅक्टरी", sub: "₹१०,५०० विद्यावेतन" }
          ]
        },
        findTraining: {
          title: "कौशल्य विकास व प्रशिक्षण योजना",
          desc: "प्रमोद महाजन कौशल्य योजनेअंतर्गत मोफत व्यावसायिक प्रशिक्षण:",
          trainings: [
            { title: "सौर ऊर्जा फोटोव्होल्टेइक तंत्रज्ञ", duration: "१ महिना", eligibility: "आयटीआय इलेक्ट्रिकल उत्तीर्ण", center: "शासकीय आयटीआय वर्धा" },
            { title: "CNC मशीन ऑपरेटर प्रशिक्षण", duration: "२ महीने", eligibility: "१०वी/१२वी उत्तीर्ण", center: "MIDC प्रशिक्षण केंद्र" }
          ]
        },
        applyOpportunity: {
          title: "शिकाऊ उमेदवारी (Apprenticeship) थेट नोंदणी",
          desc: "तुमचा आयटीआय नोंदणी क्रमांक वापरून थेट महावितरणसाठी अर्ज करा:",
          placeholderId: "आयटीआय नोंदणी क्रमांक भरा (उदा. ITI/MH/2026/0921)"
        },
        skillAssessment: {
          title: "व्यावसायिक ट्रेड कौशल्य मॉक चाचणी",
          assessments: [
            { title: "विद्युत सुरक्षा नियम मॉक परीक्षा", questions: 25, duration: "३० मिनिटे", status: "मॉक टेस्ट सुरू" },
            { title: "सौर ऊर्जा ग्रिड वायरिंग सराव", questions: 15, duration: "२० मिनिटे", status: "मॉक टेस्ट सुरू" }
          ]
        }
      }
    },
    womanEnt: {
      name: "महिला उद्योजिका",
      personaName: "वैशाली शिंदे",
      personaTitle: "डेअरी प्रकल्प प्रमुख, पुणे जिल्हा",
      welcome: "नमस्कार वैशाली-ताई. बचत गट व वित्तीय योजनांचे व्यवस्थापन करा:",
      categoryKey: "women",
      actions: [
        { id: "exploreSchemes", title: "योजना एक्सप्लोर करा", desc: "महिला बचत गट व लखपती दीदी कर्ज" },
        { id: "joinTraining", title: "महिला प्रशिक्षण केंद्र", desc: "पैकेजिंग व डिजिटल वित्तीय सराव वर्ग" },
        { id: "emergencyHelp", title: "आणीबाणीच्या प्रसंगी मदत", desc: "महिला सुरक्षा हेल्पलाइन" },
        { id: "connectSupport", title: "अधिकार्‍यांशी संपर्क", desc: "सहकारी डेअरी अधिकारी संपर्क" }
      ],
      details: {
        exploreSchemes: {
          title: "महिला स्वयं सहाय्यता बचत गट व अर्थसहाय्य",
          subtitle: "महाराष्ट्र राज्य ग्रामीण जीवनोन्नती अभियान (उमेद)",
          headers: ["योजनेचे नाव", "कर्ज मर्यादा", "व्याज दर"],
          rows: [
            { name: "लखपती दीदी मायक्रो-क्रेडिट", val: "₹१ लाखापर्यंत बिनव्याजी कर्ज", sub: "सक्रिय योजना" },
            { name: "उमेद फिरता निधी (Revolving Fund)", val: "₹१५,००० प्रति बचत गट", sub: "थेट जमा" },
            { name: "माविम को-ऑप क्रेडिट लिंकेज", val: "₹५ लाखांपर्यंत कर्ज पुरवठा", sub: "ऑडिट आवश्यक" }
          ]
        },
        joinTraining: {
          title: "उद्योजकता कौशल्य विकास वर्ग",
          desc: "ग्रामपंचायत कार्यालयात उपलब्ध स्लॉट्स तपासून नोंदणी करा:",
          list: [
            { title: "बचत गट जमाखर्च व डिजिटल आर्थिक व्यवहार", duration: "७ दिवस", center: "पंचायत भवन कक्ष" },
            { title: "दुग्धजन्य पदार्थ निर्मिती व गुणवत्ता तपासणी", duration: "१० दिवस", center: "जिल्हा सहकारी डेअरी" }
          ]
        },
        emergencyHelp: {
          title: "महिला सुरक्षा आणि आणीबाणी क्रमांक",
          desc: "महाराष्ट्र राज्यात कार्यरत असणारे टोल-फ्री मदत क्रमांक:",
          contacts: [
            { label: "महाराष्ट्र राज्य महिला हेल्पलाइन", val: "१०९१" },
            { label: "कौटुंबिक हिंसाचार विरोधी कक्ष", val: "१८१" },
            { label: "महिला सुरक्षा कक्ष (नागपूर ग्रामीण)", val: "०७१२-२५६१९१०" }
          ]
        },
        connectSupport: {
          title: "डेअरी विकास अधिकारी संपर्क माहिती",
          desc: "दूध फॅट चाचणी अहवाल तपासण्यासाठी आणि पशुधन विमा ऑडिटसाठी संपर्क साधा:",
          officers: [
            { name: "डॉ. ए. एस. मोरे (डेअरी विकास अधिकारी)", phone: "०२०-२५६०९३१" },
            { name: "पंचायत पशुसंवर्धन सहाय्यक", phone: "+९१ ९९७०१-२०९३१" }
          ]
        }
      }
    },
    seniorCitizen: {
      name: "ज्येष्ठ नागरिक",
      personaName: "दगडू भिसे",
      personaTitle: "निवृत्त शेतमजूर, वय ६७ वर्षे",
      welcome: "नमस्कार दगडू-ज्या. पेन्शन मदत व आरोग्य विमा तपासा:",
      categoryKey: "senior",
      actions: [
        { id: "checkBenefits", title: "योजनांचे फायदे तपासा", desc: "पेन्शन पात्रता कॅल्क्युलेटर" },
        { id: "applyAssistance", title: "मदतीसाठी थेट अर्ज", desc: "आयुष्मान भारत व श्रावणबाळ पेन्शन" },
        { id: "emergencySupport", title: "ज्येष्ठ नागरिक मदत", desc: "तातडीचे हेल्पलाइन संपर्क क्रमांक" }
      ],
      details: {
        checkBenefits: {
          title: "ज्येष्ठ नागरिक राज्य पेन्शन पात्रता चाचणी",
          headers: ["पेन्शन योजना", "मासिक आर्थिक मदत", "पात्रता"],
          rows: [
            { name: "श्रावणबाळ सेवा राज्य निवृत्तीवेतन योजना", val: "₹१,५०० प्रति महिना", sub: "पात्र (वय ६५ वर्ष पूर्ण / उत्पन्न २१ हजारांपेक्षा कमी)" },
            { name: "संजय गांधी निराधार योजना", val: "₹१,५०० प्रति महिना", sub: "पात्र (वैद्यकीय प्रमाणपत्र आवश्यक)" },
            { name: "इंदिरा गांधी राष्ट्रीय वृद्धापकाळ निवृत्तीवेतन", val: "₹१,००० प्रति महिना", sub: "पात्र (दारिद्र्यरेषेखालील यादी)" }
          ]
        },
        applyAssistance: {
          title: "कल्याणकारी योजना व आरोग्य विमा थेट नोंदणी",
          desc: "खालील सेवेवर टॅप करा. आधारद्वारे वय निश्चिती करून फॉर्म कियोस्कवरून प्रिंट केला जाईल:",
          services: [
            "श्रावणबाळ योजना पेन्शन नोंदणी अर्ज (श्रवणबाळ योजना)",
            "आयुष्मान भारत पीएम-जेएवाय आरोग्य विमा (५ लाख मोफत उपचार)",
            "महाराष्ट्र एसटी महामंडळ ५०% प्रवास सवलत ओळखपत्र"
          ]
        },
        emergencySupport: {
          title: "ज्येष्ठ नागरिक सुरक्षा व तातडीचे संपर्क",
          desc: "महाराष्ट्र व राष्ट्रीय पातळीवरील टोल-फ्री मदत क्रमांक:",
          contacts: [
            { label: "राष्ट्रीय ज्येष्ठ नागरिक हेल्पलाइन (एल्डरलाईन)", val: "१४५६७" },
            { label: "आयुष्मान भारत तक्रार निवारण कक्ष", val: "१८००-१११-५६५" },
            { label: "स्थानिक ग्रामपंचायत ज्येष्ठ कल्याण अधिकारी", val: "०७१२-२५५३०१२" }
          ]
        }
      }
    }
  }
};
