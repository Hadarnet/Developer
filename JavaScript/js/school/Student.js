
class Mosdot {
    constructor (semel_mosad,shnat_lumudim, shem_mosad, rashut_chinuch, rashut_chinuch_teur,
                 sug_mosad, sug_mosad_teur) {
    this.shnat_lumudim = shnat_lumudim;                             // שנת לימוד  
    this.semel_mosad = semel_mosad;                                 // סמל מוסד  
    this.shem_mosad = shem_mosad;                                   // שם מוסד
    this.rashut_chinuch = rashut_chinuch;                           // רשת חינוך
    this.trashut_chinuch_teur = rashut_chinuch_teur;                // תיאור רשת חינוך 
    this.sug_mosad = sug_mosad;                                     // סוג מוסד
    this.sug_mosad_teur = sug_mosad_teur;                           // תיאור סוד מוסד 
    this.gorem_medaveach = gorem_medaveach;                         // גורם מפקח
    this.gorem_medaveach_teur = gorem_medaveach_teur;               // גורם מפק
    this.migzar = migzar;                                           // מיגזר                
    this.migzar_teur = migzar_teur;                                 // מיגזר תיאור
    this.maamad_mishpati = maamad_mishpati;                         // מעמד משפטי
    this.maamad_mishpati_teur = maamad_mishpati_teur;               // תיאור מעמד משפטי   
    this.sug_pikuach = sug_pikuach;                                 // סוג פיקוח
    this.sug_pikuach_teur = sug_pikuach_teur;                       // סוג פיקוח תיאור
    this.sug_chinuch = sug_chinuch;                                 // סוג חינוך
    this.sug_chinuch_teur = sug_chinuch_teur;                       // תיאור סוג חינוך 
    this.shlav_hinuch = shlav_hinuch;                               // שלב חינוך 
    this.shlav_hinuch_teur = shlav_hinuch_teur;                     // תיאור שלב חינוך 
    this.semel_yishuv = semel_yishuv;                               // סמל ישוב
    this.shem_yishuv = shem_yishuv;                                 // שם ישוב
    this.ktovet_mosad = ktovet_mosad;                               // כתובת מוסד
    this.telefon_mosad = telefon_mosad;                             // טלפון מוסד

    }
   }
   class Kitot {
    constructor (semel_mosad,shnat_lumudim, shichva, makbila, code_sug_kita,
        teur_sug_kita, min_talmidim, max_talmidim, status_ishur, teur_status_ishur) {
    this.shnat_limudim = shnat_lumudim;                             // שנת לימוד 
    this.semel_mosad = semel_mosad;                                 // סמל מוסד  
    this.shichva = shichva;                                         // שכבה
    this.makbila = makbila;                                         // מקבילה
    this.code_sug_kita = code_sug_kita;                             // סוג כתה
    this.teur_sug_kita = teur_sug_kita;                             // תיאור סוג כיתה 
    this.min_talmidim = min_talmidim;                               // מינימום תלמידים 
    this.max_talmidim = max_talmidim;                               // מקסימום תלמידים
    this.status_ishur = status_ishur;                               // סטטוס אישור
    this.teur_status_ishur = teur_status_ishur;                     // תיאור סטטוס אישור

    }
   }
   
   class Megamot {
    constructor (semel_mosad,shnat_lumudim, semel_megama_misrad, makbila, code_sug_kita,
        teur_sug_kita, min_talmidim, max_talmidim, status_ishur, teur_status_ishur) {
    this.shnat_limudim = shnat_lumudim;                             // שנת לימוד 
    this.semel_mosad = semel_mosad;                                 // סמל מוסד  
    this.semel_megama_misrad = semel_megama_misrad;                 // סמל מגמה משרד
    this.teur_megama_misrad = teur_megama_misrad;                   // תיאור מגמה משרד
    this.semel_megama_mosad= semel_megama_mosad;                    // סמל מגמה מוסד
    this.shem_megama_mosad = shem_megama_mosad;                     // שם מגמה מוסד 
    this.shichva = shichva;                                         // שכבה 
    this.michsat_talmidim_mevukeshet = michsat_talmidim_mevukeshet; // מכסת תלמידים מבוקשת
    this.haim_le_shibutz = haim_le_shibutz;                         // שיבוץ
    this.status_ishur_megama = status_ishur_megama;                 // סטטוס אישור מגמה
    this.teur_status_ishur_megama = teur_status_ishur_megama;       // תיאור סטטוס אישור מגמה
    this.taarich_status_ishur_megama = taarich_status_ishur_megama; // תאריך סטטוס אישור מגמה
    this.taarich_status_ishur_megama = taarich_status_ishur_megama; // תאריך סטטוס אישור מגמה
    this.micshat_talmidim_meusheret = micshat_talmidim_meusheret;   // מכסת תלמידים מאושרת
    this.heara_status_ishur_megama = heara_status_ishur_megama;     // הערה סטטוס אישור מגמה


    }
   }


   class Kvutsa {
    constructor (mezahe_kvutsa_memosad, semel_mosad,shnat_lumudim, code_sug_kvutsa, code_tkufat_peilut, code_sug_kita,
        taarich_hatchala_kvutsa, taarich_siyum_kvutsa, max_talmidim, status_ishur, teur_status_ishur) {
    this.mezahe_kvutsa_memosad = mezahe_kvutsa_memosad;             // מזהה קבוצה ממוסד
    this.shnat_limudim = shnat_lumudim;                             // שנת לימוד 
    this.semel_mosad = semel_mosad;                                 // סמל מוסד  
    this.code_sug_kvutsa = code_sug_kvutsa;                         // קוד סוג קובצה
    this.code_tkufat_peilut = code_tkufat_peilut;                   // קוד תקופת פעילות
    this.taarich_hatchala_kvutsa = taarich_hatchala_kvutsa;         // תאריך התחלה 
    this.taarich_siyum_kvutsa = taarich_siyum_kvutsa;               // תאריך סיום 
    this.mispar_miktsoa_beit_sifri = mispar_miktsoa_beit_sifri;     // מספר מקצועי בית ספרי
    this.shem_miktsoa_beit_sifri = shem_miktsoa_beit_sifri    ;     // שם מקצוע בית ספרי
    this.shem_kvutsa = shem_kvutsa;                                 // שם קבוצה
    this.code_miktsoa_kvutsa_misrad = code_miktsoa_kvutsa_misrad;   // קוד מקצוע קבוצה במשרד 
    this.code_ramat_kvutsa = code_ramat_kvutsa;                     // קוד רמת קבוצה
    this.shlav_hinuch = shlav_hinuch;                               // קוד שלב חינוך
    this.taarich_yetsirat_reshuma = taarich_yetsirat_reshuma;       // תאריך יצירת רשומה
    this.code_mishtamesh_yotser = code_mishtamesh_yotser;           // קוד משתמש יוצר
    this.taarich_idkun_reshuma = taarich_idkun_reshuma;             // תאריך עדכון רשומה
    this.code_mishtamesh_meadken = code_mishtamesh_meadken;         // קוד משתמש מעדכן




    }
   }
   

   
   class Shaotlekvutsa {
    constructor (mezahe_kvutsa_memosad, semel_mosad,shnat_lumudim, code_sug_kvutsa, code_tkufat_peilut, code_sug_kita,
        taarich_hatchala_kvutsa, taarich_siyum_kvutsa, max_talmidim, status_ishur, teur_status_ishur) {
    this.mezahe_kvutsa_memosad = mezahe_kvutsa_memosad;             // מזהה קבוצה ממוסד
    this.semel_mosad = semel_mosad;                                 // סמל מוסד  
    this.shnat_limudim = shnat_lumudim;                             // שנת לימוד 
    this.yom = yom;                                                 // יום בשבוע
    this.shaot_leyom_bashavua = shaot_leyom_bashavua;               // שעות ליום בשבוע
    this.code_sug_makor_taktsiv = code_sug_makor_taktsiv;           // קוד מקור תקציב 
    this.code_mishtamesh_yotser = code_mishtamesh_yotser;           // קוד משתמש יוצר 
    this.taarich_hatchala_kvutsa = taarich_hatchala;                // תאריך התחלה 
    this.taarich_siyum_shaot_leyom = taarich_siyum_shaot_leyom;      // תאריך סיום 
    this.taarich_yetsirat_reshuma = taarich_yetsirat_reshuma;       // תאריך יצירת רשומה
    this.code_mishtamesh_meadken = code_mishtamesh_meadken;         // קוד משתמש מעדכן
    this.taarich_idkun_reshuma = taarich_idkun_reshuma;             // תאריך עדכון רשומה




    }
   }
   

   
   class OvdeyHoraaTafkid {
    constructor (mezahe_kvutsa_memosad, semel_mosad,shnat_lumudim, code_sug_kvutsa, code_tkufat_peilut, code_sug_kita,
        taarich_hatchala_kvutsa, taarich_siyum_kvutsa, max_talmidim, status_ishur, teur_status_ishur) {
    this.semel_mosad = semel_mosad;                                 // סמל מוסד  
    this.shnat_limudim = shnat_lumudim;                             // שנת לימוד 
    this.mispar_zehut = mispar_zehut;                               // מספר זהות
    this.zehut = zehut;                                             // זהות
    this.code_tafkid_bamosad = code_tafkid_bamosad;                 // קוד תפקיד
    this.teur_tafkid_bamosad = teur_tafkid_bamosad;                 // תאור תפקיד
    this.tafkid_taarich_hatchala = tafkid_taarich_hatchala;         // תאריך התחלת תפקיד
    this.tafkid_taarich_siyum = tafkid_taarich_siyum;               // תאריך סיום תפקיד        
    this.shichva = shichva;                                         // שכבה
    this.makbila = makbila;                                         // מקבילה

    }
   }

   class OvdeyHoraa {
    constructor (semel_mosad, shnat_lumudim, code_tkufat_peilut, code_sug_kita,
        taarich_hatchala_kvutsa, max_talmidim, status_ishur, teur_status_ishur) {
    this.semel_mosad = semel_mosad;                                 // סמל מוסד  
    this.shnat_limudim = shnat_lumudim;                             // שנת לימוד 
    this.mispar_zehut = mispar_zehut;                               // מספר זהות
    this.zehut = zehut;                                             // זהות
    this.shem_prati = shem_prati;                                   // שם פרטי
    this.shem_mishpacha = shem_mishpacha;                           // שם משפחה
    this.taarich_leda = taarich_leda;                               // תאריך לידה
    this.code_min = code_min;                                       // קוד מין        
    this.teur_min = teur_min;                                       // תיאור מין
    this.shem_prati_kinu = shem_prati_kinu;                         // שם פרטי אחר
    this.shem_mishpacha_kinu = shem_mishpacha_kinu;                 // שם משפחה אחר
     
    }
   }
   
   class Talmidim {
    constructor (semel_mosad, shnat_lumudim, code_tkufat_peilut, code_sug_kita,
        taarich_hatchala_kvutsa, max_talmidim, status_ishur, teur_status_ishur) {
    this.semel_mosad = semel_mosad;                                 // סמל מוסד  
    this.shnat_limudim = shnat_lumudim;                             // שנת לימוד 
    this.mispar_zehut = mispar_zehut;                               // מספר זהות
    this.zehut = zehut;                                             // זהות
    this.shem_prati = shem_prati;                                   // שם פרטי
    this.shem_mishpacha = shem_mishpacha;                           // שם משפחה
    this.taarich_leda = taarich_leda;                               // תאריך לידה
    this.code_min = code_min;                                       // קוד מין        
    this.teur_min = teur_min;                                       // תיאור מין
    this.shichva = shichva;                                         // שכבה
    this.makbila = makbila;                                         // מקבילה
    this.taarich_tchilat_shibutz = taarich_tchilat_shibutz;         // תאריך התחלת שיבוץ
    this.taarich_siyum_shibutz = taarich_siyum_shibutz;             // תאריך סיום שיבוץ
    this.mispar_darkon = mispar_darkon;                             // מספר דרכון
    this.kvutsat_darkon = kvutsat_darkon;                           // קבוצת דרכון
    this.code_erets_leda = code_erets_leda;                         // קוד ארץ לידה
    this.taarich_leda = taarich_leda;                               // תאריך לידה
    this.code_erets_aliya = code_erets_aliya;                       // קוד ארץ עליה
    this.erets_aliya = erets_aliya;                                 // ארץ עליה
    this.taarich_aliya = taarich_aliya;                             // תאריך עליה
    this.code_leom_pnim = code_leom_pnim;                           // קוד לאום
    this.semel_megama_misrad = semel_megama_misrad;                 // סמל מגמה משרד
    this.semel_megama_mosad= semel_megama_mosad;                    // סמל מגמה מוסד
    this.code_nativ = code_nativ;                                   // קוד נתיב
    this.code_maslul = code_maslul;                                 // קוד מוסד
    this.code_maslul = code_maslul;                                 // קוד מסלול
    this.code_hasmacha = code_hasmacha;                             // קוד הסמכה
    this.tkinut_shibutz = tkinut_shibutz;                           // תקינות שיבוץ
    this.xlo_le_divuach_matzevet = xlo_le_divuach_matzevet;         // לא לדיווח מצבת
    this.taarich_aziva = taarich_aziva;                             // תאריך עזיבה
    this.code_zakaut_lschar_limud = code_zakaut_lschar_limud;       // קוד זכאות לשכר לימוד
    this.mispar_achim_ad_18 = mispar_achim_ad_18;                   // מספר אחים עד גיל 18
    this.mispar_zehut_kodemet = mispar_zehut_kodemet;               // מספר זהות קודמת
    this.sug_zehut_kodemet = sug_zehut_kodemet;                     // סוג זהות קודמת
    
    
    }
   }

   
   class TalmidimM {
    constructor (semel_mosad, shnat_lumudim, code_tkufat_peilut, code_sug_kita,
        taarich_hatchala_kvutsa, max_talmidim, status_ishur, teur_status_ishur) {
    this.semel_mosad = semel_mosad;                                 // סמל מוסד  
    this.shnat_limudim = shnat_lumudim;                             // שנת לימוד 
    this.mispar_zehut = mispar_zehut;                               // מספר זהות
    this.sug_zehut = sug_zehut;                                     // סוג זהות
    this.shem_prati = shem_prati;                                   // שם פרטי
    this.shem_mishpacha = shem_mishpacha;                           // שם משפחה
    this.shichva = shichva;                                         // שכבה
    this.makbila = makbila;                                         // מקבילה
    
    }
   }
   