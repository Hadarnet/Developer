
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
   class Class {
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
   

   class MishtateFkvutsa {
    constructor (mezahe_kvutsa_memosad, semel_mosad,shnat_lumudim, code_sug_kvutsa, code_tkufat_peilut, code_sug_kita,
        taarich_hatchala_kvutsa, taarich_siyum_kvutsa, max_talmidim, status_ishur, teur_status_ishur) {
    this.mezahe_kvutsa_memosad = mezahe_kvutsa_memosad;             // מזהה קבוצה ממוסד
    this.shnat_limudim = shnat_lumudim;                             // שנת לימוד 
    this.semel_mosad = semel_mosad;                                 // סמל מוסד  
    this.code_sug_misht_kvutsa = code_sug_misht_kvutsa;             // קוד סוג משתתף קבוצה
    this.code_sug_misht_kvutsa = code_sug_misht_kvutsa;             // מספר זהות משתתף
    this.sug_zehut_mishtatef = sug_zehut_mishtatef;                 // סוג זהות משתתף 
    this.taarich_hatchala_mishtatef = taarich_hatchala_mishtatef;   // תאריך התחלה
    this.taarich_siyum_mishtatef = taarich_siyum_mishtatef;         // תאריך סיום 
    this.sibat_aziva = sibat_aziva;                                 // סיבת עזיבה
    this.taarich_yetsirat_reshuma = taarich_yetsirat_reshuma;       // תאריך יצירת רשומה
    this.code_mishtamesh_yotser = code_mishtamesh_yotser;           // קוד משתמש יוצר 
    this.taarich_idkun_reshuma = taarich_idkun_reshuma;             // תאריך עדכון רשומה
    this.code_mishtamesh_meadken = code_mishtamesh_meadken;         // קוד משתמש מעדכן




    }
   }

   
   

   class OvdeyHoraa {
    constructor (mezahe_kvutsa_memosad, semel_mosad,shnat_lumudim, code_sug_kvutsa, code_tkufat_peilut, code_sug_kita,
        taarich_hatchala_kvutsa, taarich_siyum_kvutsa, max_talmidim, status_ishur, teur_status_ishur) {
    דthis.semel_mosad = semel_mosad;                                 // סמל מוסד  
    this.shnat_limudim = shnat_lumudim;                             // שנת לימוד 
    this.code_sug = code_sug_misht;                                 // מספר זהות 
    this.sug_zehut = sug_zehut;                                     // סוג זהות 
    this.shem_prati = shem_prati;                                   // שם פרטי 
    this.shem_mishpacha = shem_mishpacha;                           // שם משפחה
    this.taarich_leda = taarich_leda;                               // תאריך לידה 
    this.code_min = code_min;                                       // קוד מין
    this.teru.min = true.min;                                       // תיאור מין




    }
   }



   class Talmidim {
    constructor (mezahe_kvutsa_memosad, semel_mosad,shnat_lumudim, code_sug_kvutsa, code_tkufat_peilut, code_sug_kita,
        taarich_hatchala_kvutsa, taarich_siyum_kvutsa, max_talmidim, status_ishur, teur_status_ishur) {
    this.shnat_limudim = shnat_lumudim;                             // שנת לימוד 
    this.semel_mosad = semel_mosad;                                 // סמל מוסד  
    this.mispar_zehut_talmid = mispar_zehut;                        // מספר זהות 
    this.sug_zehut = sug_zehut;                                     // סוג זהות 
    this.shem_mishpacha = shem_mishpacha;                           // שם משפחה 
    this.shem_prati = shem_prati;                                   // שם פרטי  
    this.shem_mishpacha_kinui = shem_mishpacha_kinui;               // שם משפחה כינוי
    this.shem_prati_kinui = shem_prati_kinui;                       // שם פרטי כינוי 
    this.code_min = code_min;                                       // קוד מין
    this.shichva = shichva;                                         // שכבה
    this.makbila = makbila;                                         // מקבילה
    this.taarich_tchilat_shibutz = taarich_tchilat_shibutz;         // תאריך תחילת שיבוץ
    this.taarich_siyum_shibutz = taarich_siyum_shibutz;             // תאריך סיום שיבוץ 
    this.mispar_darkon = mispar_darkon;                             // מספר דרכון 
    this.kvutsat_darkon = kvutsat_darkon;                           // קבוצת דרכון 
    this.code_erets_leda = code_erets_leda;                         // קוד ארץ לידה 
    this.taarich_leda = taarich_leda;                               // תאריך לידה 
    this.code_erets_aliya = code_erets_aliya;                       // קוד ארץ עליה 
    this.taarich_aliya = taarich_aliya;                             // תאריך עליה 
    this.code_leom_pnim = code_leom_pnim;                           // קוד לאום
    this.semel_megama_mosad= semel_megama_mosad;                    // סמל מגמה מוסד
    this.shem_megama_mosad = shem_megama_mosad;                     // שם מגמה מוסד 
    this.code_nativ = code_nativ;                                   // קוד נתיב 
    this.code_maslul = code_maslul;                                 // קוד מסלול 
    this.code_hasmacha = code_hasmacha;                             // קוד הסמכה 
    this.tkinut_shibutz = tkinut_shibutz;                           // תקינות שיבוץ
    this.lo_le_divuach_matzevet = lo_le_divuach_matzevet;           // לא דיווח מצבת מגמה במקום אחר
    this.taarich_aziva = taarich_aziva;                             // תאריך עזיבה
    this.code_zakaut_lschar_limud = code_zakaut_lschar_limud;       // קוד זכאות לשכר לימוד
    this.mispar_achim_ad_18 = mispar_achim_ad_18;                   // מספר אחים עד גיל 18
    this.mispar_zehut_kodemet = mispar_zehut_kodemet;               // מספר זהות קודמת
    this.sug_zehut_kodemet = sug_zehut_kodemet;                     // סוג זהות קודמת



    
}
   }


class TalmidimM {
    constructor (mezahe_kvutsa_memosad, semel_mosad,shnat_lumudim, code_sug_kvutsa, code_tkufat_peilut, code_sug_kita,
        taarich_hatchala_kvutsa, taarich_siyum_kvutsa, max_talmidim, status_ishur, teur_status_ishur) {
    this.shnat_limudim = shnat_lumudim;                             // שנת לימוד 
    this.semel_mosad = semel_mosad;                                 // סמל מוסד  
    this.mispar_zehut_talmid = mispar_zehut;                        // מספר זהות 
    this.sug_zehut = sug_zehut;                                     // סוג זהות 
    this.shem_mishpacha = shem_mishpacha;                           // שם משפחה 
    this.shem_prati = shem_prati;                                   // שם פרטי  
    this.shichva = shichva;                                         // שכבה
    this.makbila = makbila;                                         // מקבילה
    
}
   }

   
   class GormeyKesher {
    constructor (mezahe_kvutsa_memosad, semel_mosad,shnat_lumudim, code_sug_kvutsa, code_tkufat_peilut, code_sug_kita,
        taarich_hatchala_kvutsa, taarich_siyum_kvutsa, max_talmidim, status_ishur, teur_status_ishur) {
    this.shnat_limudim = shnat_lumudim;                             // שנת לימוד 
    this.semel_mosad = semel_mosad;                                 // סמל מוסד  
    this.mispar_zehut_talmid = mispar_zehut_talmid;                 // מספר זהות תלמיד
    this.sug_zehut_talmid = sug_zehut_talmid;                       // סוג זהות תלמיד 
    this.mispar_zehut_gorem_kesher = mispar_zehut_gorem_kesher;     // מספר זהות גורם קשר 
    this.sug_zehut_gorem_kesher = sug_zehut_gorem_kesher;           // סוג זהות גורם קשר
    this.code_sug_kirva = code_sug_kirva;                           // סוג קרבה
    this.cod_min = cod_min;                                         // קוד מין
    this.shem_mishpacha_kinui = shem_mishpacha_kinui;               // שם משפחה כינוי
    this.shem_prati_kinui = shem_prati_kinui;                       // שם פרטי כינוי 
    this.haim_meunyan_lekabel_meida = haim_meunyan_lekabel_meida;   // אישור קבלה מידע 
    this.haim_meshalem = haim_meshalem;                             // האם משלם
    this.code_maamad_hore = code_maamad_hore;                       // קוד מעמד הורה
    this.taarich_leda = taarich_leda;                               // תאריך לידה 
    this.shichva = shichva;                                         // שכבה
    this.makbila = makbila;                                         // מקבילה

    }
   }
   


   class PirteyKesher {
    constructor (mezahe_kvutsa_memosad, semel_mosad,shnat_lumudim, code_sug_kvutsa, code_tkufat_peilut, code_sug_kita,
        taarich_hatchala_kvutsa, taarich_siyum_kvutsa, max_talmidim, status_ishur, teur_status_ishur) {
    this.shnat_limudim = shnat_lumudim;                             // שנת לימוד 
    this.semel_mosad = semel_mosad;                                 // סמל מוסד  
    this.mispar_zehut = mispar_zehut;                               // מספר זהות
    this.sug_zehut = sug_zehut;                                     // סוג זהות 
    this.semel_yishuv1 = semel_yishuv1;                             // סמל ישוב מרשם במנבס 
    this.teur_yishuv1 = teur_yishuv1;                               // תיאור ישוב מרשם
    this.semel_rechov1 = semel_rechov1;                             // סמל רחוב מרשם
    this.shem_rechov1 = shem_rechov1;                               // שם רחוב מרשם
    this.mispar_bayit1 = mispar_bayit1;                             // מספר בית מרשם
    this.mispar_dira1 = mispar_dira1;                               // מספר דירה מרשם 
    this.mikud7 = mikud7;                                           // מיקוד 7 ספרות מרשם 
    this.semel_yeshuv2 = semel_yeshuv2;                             // סמל ישוב
    this.teur_yishuv2 = teur_yishuv2;                               // תיאור ישוב
    this.semel_rechov2 = semel_rechov2;                             // סמל רחוב 
    this.shem_rechov1 = shem_rechov2;                               // שם רחוב
    this.mispar_bayit2 = mispar_bayit2;                             // מספר בית
    this.knisa2 = knisa2;                                           // כניסה
    this.mispar_dira1 = mispar_dira1;                               // מספר דירה  
    this.ta_doar2 = ta_doar2;                                       // תא דואר 
    this.mikud2 = mikud2;                                           // מיקוד   
    this.shchuna2 = shchuna2;                                       // שכונה  
    this.nvarchar2 = nvarchar2;                                     // הערה  
    this.doar_na2 = doar_na2;                                       // דואר נע  
    this.kidomet_nayach_1 = kidomet_nayach_1;                       // קידמות נייח      
    this.mispar_nayach_1 = mispar_nayach_1;                         // מספר נייח   
    this.kidomet_nayach_2 = kidomet_nayach_2;                       // קידמות נייח נוסף    
    this.mispar_nayach_2 = mispar_nayach_2;                         // מספר נייח נוסף 
    this.kidomet_nayad_1 = kidomet_nayad_1;                         // קידמות נייד      
    this.mispar_nayad_1 = mispar_nayad_1;                           // מספר נייד   
    this.kidomet_nayad_2 = kidomet_nayad_2;                         // קידמות נייד נוסף    
    this.mispar_dira2 = mispar_nayad_2;                             // מספר נייד נוסף 
    this.mispar_dira2 = email_1;                                    // דואר אלקטרוני 1
    this.mispar_dira2 = email_2;                                    // דואר אלקטרוני 2 

    }
   }
   





   


class category{
    constructor(nameCategory, herf, icon ) {
        this.nameCategory = nameCategory;
        this.herf = herf;
        this.icon = icon; 
      }
    }
    
    
    const adminpanel = []
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	class School {
    constructor() {
        console.log('created school');

        this.teachers = [];
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }

    assignStudent(student) {
        for (const subject of student.subjects) {
            for (const teacher of this.teachers) {
                if (teacher.canTeach(subject)) {
                    teacher.students.push(student);
                    break;
                }
            }
        }
    }
}



    render() {
         return(
            <div>
                <button onClick={() => this.openDropdown()}>dropDown</button>
                <div>{`${this.state.open}`}</div>
             </div>)
}  
}



openDropDown(){
    this.setState({ open: !this.state.open })
}