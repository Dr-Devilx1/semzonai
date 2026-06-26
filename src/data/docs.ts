/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DocArticle } from "../types";

export const DOC_ARTICLES: DocArticle[] = [
  {
    id: "pellet-mill-maintenance",
    category: "maintenance",
    title: {
      en: "SZLH Ring-Die Pellet Mill: Preventive Maintenance & Roller Adjustment",
      ur: "SZLH رنگ ڈائی پیلٹ مل: حفاظتی دیکھ بھال اور رولر ایڈجسٹمنٹ",
      zh: "SZLH 环模颗粒机：预防性维护与压辊调整指南",
      ar: "مطحنة الحبيبات ذات القالب الدائري SZLH: الصيانة الوقائية وضبط الأسطوانة"
    },
    summary: {
      en: "Essential procedures for adjusting roller clearance, replacing ring dies, and executing lubrication schedules to maintain high pellet quality and maximize machine lifespan.",
      ur: "رولر کے فاصلے کو درست کرنے، رنگ ڈائی تبدیل کرنے اور چکنا کرنے کے شیڈول پر عمل کرنے کے ضروری طریقے تاکہ اعلیٰ معیار کے پیلٹس بنیں اور مشین کی زندگی طویل ہو۔",
      zh: "关于压辊间隙调整、环模更换以及润滑保养周期的核心规程，旨在确保颗粒品质并最大化设备寿命。",
      ar: "الإجراءات الأساسية لضبط خلوص الأسطوانة، واستبدال القوالب الدائرية، وتنفيذ جداول التشحيم للحفاظ على جودة حبيبات عالية وإطالة عمر الآلة."
    },
    content: {
      en: `### 1. Roller to Die Clearance Adjustment
The optimal distance between the press roller and the ring die is **0.1mm to 0.3mm**.
* **Too tight:** Causes rapid wear of both ring die and rollers, and risks metal-to-metal friction causing sparking.
* **Too loose:** Leads to material slippage, clogging (blocking of the die), and decreased pellet output.
* **How to Adjust:**
  1. Loosen the lock nut on the eccentric shaft of the press roller.
  2. Rotate the eccentric shaft to bring the roller into slight contact with the ring die (test by rotating the die by hand; the roller should barely rotate with it).
  3. Tighten the lock nut securely.

### 2. Lubrication Schedule
* **Main Bearings:** Lubricate every **8 hours** of continuous operation using high-temperature lithium-based grease (recommended: Shell Gadus S3 or equivalent). Apply 15-20g of grease per bearing.
* **Roller Bearings:** Lubricate every **4 hours** of active run. Ensure old grease is flushed out to prevent dust buildup inside the housing.
* **Gearbox Oil:** Perform the first oil change after **500 hours** of commissioning. Subsequent oil changes should occur every **2,000 hours** using industrial gear oil ISO VG 220 or 320.

### 3. Ring Die Cleaning and Storage
* When stopping production for more than **24 hours**, always flush the die with oily mixture (oil, sand, and organic meal) to prevent residual feed from hardening and blocking the holes.
* Store spare ring dies in a dry, ventilated area, heavily coated with anti-rust oil.`,
      ur: `### 1. رولر اور رنگ ڈائی کے درمیان فاصلہ (کلیئرنس) کی درستگی
پریس رولر اور رنگ ڈائی کے درمیان بہترین فاصلہ **0.1 ملی میٹر سے 0.3 ملی میٹر** ہے۔
* **زیادہ سخت ہونے پر:** رنگ ڈائی اور رولرس کی تیزی سے گھسائی کا سبب بنتا ہے، اور دھاتی رگڑ کی وجہ سے چنگاریاں پیدا ہو سکتی ہیں۔
* **زیادہ ڈھیلا ہونے پر:** خام مال کے پھسلنے، سوراخ بند ہونے (چوکنگ) اور پیداوار میں کمی کا باعث بنتا ہے۔
* **ایڈجسٹ کرنے کا طریقہ:**
  1. پریس رولر کے سنکی شافٹ (eccentric shaft) کے لاک نٹ کو ڈھیلا کریں۔
  2. سنکی شافٹ کو اس طرح گھمائیں کہ رولر رنگ ڈائی کے ساتھ ہلکا سا مس ہو جائے (ہاتھ سے گھما کر چیک کریں)۔
  3. لاک نٹ کو دوبارہ مضبوطی سے کس دیں۔

### 2. چکنا کرنے (گریسنگ) کا شیڈول
* **مین بیرنگ:** ہائی ٹمپریچر لیتھیم گریس کا استعمال کرتے ہوئے ہر **8 گھنٹے** بعد گریس کریں۔
* **رولر بیرنگ:** ہر **4 گھنٹے** کے کام کے بعد گریس کریں۔ یہ یقینی بنائیں کہ پرانی گریس باہر نکل جائے۔
* **گیئر بکس آئل:** پہلی بار **500 گھنٹے** کے بعد تیل تبدیل کریں۔ اس کے بعد ہر **2000 گھنٹے** کے بعد ISO VG 220 تیل استعمال کریں۔

### 3. رنگ ڈائی کی صفائی اور حفاظت
* اگر کام **24 گھنٹے** سے زیادہ کے لیے روکنا ہو تو ڈائی کو تیل والے آمیزے (تیل، ریت اور آٹا) سے صاف کریں تاکہ سوراخ بند نہ ہوں۔
* اضافی رنگ ڈائی کو زنگ سے بچانے والے تیل کے ساتھ خشک جگہ پر محفوظ رکھیں۔`,
      zh: `### 1. 压辊与环模间隙调整
压辊与环模之间的最佳间隙为 **0.1mm 至 0.3mm**。
* **过紧：** 会导致环模和压辊急速磨损，并伴随金属碰撞摩擦、产生火花的风险。
* **过松：** 会导致原料打滑、模孔堵塞，致使颗粒产量大幅下降。
* **调整步骤：**
  1. 松开压辊偏心轴上的锁紧螺母。
  2. 旋转偏心轴，使压辊表面与环模轻微接触（手动旋转环模测试：压辊应刚好随之同步极微转动）。
  3. 重新拧紧并固定锁紧螺母。

### 2. 润滑保养周期表
* **主轴轴承：** 连续运行中每 **8小时** 润滑一次，使用高温锂基润滑脂（推荐：壳牌佳度 S3 或同等规格）。每个轴承加注 15-20克。
* **压辊轴承：** 运行期间每 **4小时** 润滑一次。确保旧油排出，防止粉尘进入轴承座。
* **齿轮箱油：** 首次使用 **500小时** 后进行换油。后续每运行 **2,000小时** 更换一次，使用 ISO VG 220 或 320 工业齿轮油。

### 3. 环模的清理与保存
* 停机超过 **24小时** 时，务必用油料（机油、沙子和麦麸的混合料）填充挤出，防止模孔内残留饲料干枯硬化堵死模孔。
* 备用环模应涂抹防锈油，存放在干燥通风的场所。`,
      ar: `### 1. ضبط الخلوص بين الأسطوانة والقالب
المسافة المثالية بين أسطوانة المكبس والقالب الدائري هي **0.1 مم إلى 0.3 مم**.
* **مشدودة للغاية:** تسبب تآكلاً سريعاً لكل من القالب والأسطوانات، وتخاطر بحدوث احتكاك معدني يسبب شرارات.
* **فضفاضة للغاية:** تؤدي إلى انزلاق المواد، وانسداد القالب، وانخفاض إنتاج الحبيبات.
* **كيفية الضبط:**
  1. قم بفك صامولة القفل الموجودة على المحور اللامركزي لأسطوانة الضغط.
  2. قم بتدوير المحور اللامركزي لتقريب الأسطوانة قليلاً من القالب الدائري.
  3. أحكم ربط صامولة القفل بإحكام.

### 2. جدول التشحيم
* **المحامل الرئيسية:** قم بالتشحيم كل **8 ساعات** من التشغيل المستمر باستخدام شحم الليثيوم ذو درجة الحرارة العالية.
* **محامل الأسطوانة:** قم بالتشحيم كل **4 ساعات** من التشغيل الفعلي لضمان طرد الشحم القديم وتجنب تراكم الغبار.
* **زيت علبة التروس:** قم بتغيير الزيت لأول مرة بعد **500 ساعة** من التشغيل، ثم كل **2,000 ساعة** باستخدام زيت التروس الصناعي ISO VG 220.

### 3. تنظيف وتخزين القالب الدائري
* عند إيقاف الإنتاج لأكثر من **24 ساعة**، قم دائماً بتنظيف القالب بخليط زيتي لمنع تصلب الأعلاف المتبقية وسد الثقوب.
* قم بتخزين القوالب الدائرية الاحتياطية في مكان جاف ومغطاة بطبقة من الزيت المضاد للصدأ.`
    },
    specs: [
      { label: "Recommended Roller Clearance", value: "0.1 - 0.3 mm" },
      { label: "Main Bearing Lubrication Cycle", value: "8 Hours" },
      { label: "Roller Lubrication Cycle", value: "4 Hours" },
      { label: "Gearbox Oil Standard", value: "ISO VG 220 / 320" }
    ]
  },
  {
    id: "hammer-mill-operation",
    category: "operation",
    title: {
      en: "SMSP Hammer Mill: Screen Selection & Dynamic Rotor Balancing",
      ur: "SMSP ہیمر مل: سکرین کا انتخاب اور متحرک روٹر بیلنسنگ",
      zh: "SMSP 锤片式粉碎机：筛网选择与转子动平衡维护",
      ar: "مطحنة المطرقة SMSP: اختيار الغربال وموازنة الدوار الديناميكية"
    },
    summary: {
      en: "How to select correct screen pore sizes for different feed types, dynamically balance the rotor, and execute safe hammer replacements.",
      ur: "مختلف قسم کے فیڈ کے لیے سکرین کے سوراخوں کے سائز کا انتخاب، روٹر کی بیلنسنگ اور ہیمر تبدیل کرنے کے محفوظ طریقے معلوم کریں۔",
      zh: "如何针对不同饲料类型选择合适的筛网孔径、进行转子动平衡维护以及确保安全更换锤片的手册。",
      ar: "كيفية اختيار أحجام فتحات الغربال المناسبة لأنواع الأعلاف المختلفة، وموازنة الدوار ديناميكياً، واستبدال المطارق بأمان."
    },
    content: {
      en: `### 1. Screen Diameter Selection Table
Optimal particle size affects pellet durability and animal digestion. Refer to this standard configuration:
* **Poultry Chicks (Pre-Starter):** Use **1.5mm to 2.0mm** screen hole diameter.
* **Poultry Broiler (Grower/Finisher):** Use **2.5mm to 3.0mm** screen hole diameter.
* **Cattle & Livestock Feed:** Use **3.0mm to 4.0mm** screen hole diameter.
* **Aqua Floating Feed (Extruder Raw material):** Requires extremely fine grinding. Use **0.8mm to 1.2mm** micro-pore screen.

### 2. Hammer Rotation and Replacement Safety
* Hammers should be rotated/flipped to use all 4 cutting corners before replacement. Rotate hammers when the edges show a radius wear of more than **2.0mm**.
* **CRITICAL:** When replacing hammers, you **MUST** replace the entire set or symmetrically matching pairs. Replacing only individual worn hammers ruins the rotor's dynamic balance, causing heavy vibration (> 5.0mm/s), which will destroy the main bearings and shaft.
* Symmetrical hammer groups must not differ in weight by more than **1.0 gram**.

### 3. Vibration Troubleshooting
* If vibration exceeds **3.0mm/s**, shut down the machine immediately.
* Check for:
  1. Loose hammer pins or broken hammer pieces.
  2. Material build-up inside the grinding chamber.
  3. Main bearing wear or failure of lock sleeves.`,
      ur: `### 1. سکرین (جالی) کے سائز کا انتخاب
صحیح جالی کا انتخاب جانوروں کے ہاضمے اور فیڈ کے معیار کو متاثر کرتا ہے۔ درج ذیل معیار پر عمل کریں:
* **چوزوں کے لیے (پری سٹارٹر):** **1.5 ملی میٹر سے 2.0 ملی میٹر** سوراخ والی جالی استعمال کریں۔
* **بڑے مرغوں کے لیے (برائلر):** **2.5 ملی میٹر سے 3.0 ملی میٹر** کی جالی استعمال کریں۔
* **مویشیوں (گائے/بھینس) کے لیے:** **3.0 ملی میٹر سے 4.0 ملی میٹر** کی جالی استعمال کریں۔
* **مچھلی کی فیڈ (Aqua Feed):** انتہائی باریک پسائی درکار ہوتی ہے۔ **0.8 ملی میٹر سے 1.2 ملی میٹر** کی جالی استعمال کریں۔

### 2. ہیمر (چھریوں) کو گھمانا اور تبدیل کرنے کے اصول
* ہیمر کے 4 کونے ہوتے ہیں۔ مکمل تبدیل کرنے سے پہلے انہیں گھما کر چاروں کونے استعمال کریں۔
* **اہم تنبیہ:** ہیمر تبدیل کرتے وقت پورے سیٹ کو ایک ساتھ تبدیل کریں۔ صرف ایک ہیمر تبدیل کرنے سے روٹر کا توازن خراب ہو جائے گا اور شدید وائبریشن پیدا ہو گی جو بیرنگ کو تباہ کر سکتی ہے۔
* آمنے سامنے والے ہیمر گروپس کے وزن میں **1.0 گرام** سے زیادہ فرق نہیں ہونا چاہیے۔

### 3. وائبریشن (تھرتھراہٹ) کا حل
* اگر وائبریشن حد سے بڑھ جائے تو مشین فوراً بند کریں۔
* درج ذیل چیزیں چیک کریں:
  1. کوئی ہیمر ٹوٹا ہوا تو نہیں؟
  2. چیمبر کے اندر مال تو نہیں پھنسا ہوا؟
  3. بیرنگ ٹوٹ تو نہیں گئے؟`,
      zh: `### 1. 筛网孔径选择标准
合适的粉碎粒度会直接影响颗粒成型质量和动物消化率。推荐使用以下标准配置：
* **雏鸡料 (开口料)：** 使用 **1.5mm 至 2.0mm** 的筛网孔径。
* **肉鸡料 (中大鸡料)：** 使用 **2.5mm 至 3.0mm** 的筛网孔径。
* **反刍与牲畜饲料：** 使用 **3.0mm 至 4.0mm** 的筛网孔径。
* **水产浮性料 (挤压前原料)：** 需要极细微粉碎，使用 **0.8mm 至 1.2mm** 的微孔筛网。

### 2. 锤片掉头使用与安全更换规程
* 锤片具有四个切削角。在完全更换前，应分步掉头或换向，充分利用所有角。当锤片边缘磨损圆角半径超过 **2.0mm** 时，应进行掉头。
* **关键警告：** 更换锤片时，**务必**全套更换，或成组对称更换。只更换单个磨损锤片会严重破坏转子的动平衡，导致强烈的机器振动（振幅 > 5.0mm/s），进而迅速损毁主轴轴承及转子。
* 对称位置的锤片组之间的重量差不得超过 **1.0克**。

### 3. 异常振动排查指南
* 如果工作振动值超过 **3.0mm/s**，必须立即紧急停机。
* 重点检查以下几项：
  1. 销轴是否松动、锤片是否有断裂脱落；
  2. 粉碎腔内是否有大块物料残留积聚；
  3. 主轴承是否过度磨损或锁紧套松动。`,
      ar: `### 1. جدول اختيار قطر الغربال
يؤثر الحجم الأمثل للجزيئات على متانة الحبيبات وهضم الحيوانات. ارجع إلى هذا التكوين القياسي:
* **صغار الدواجن (بادئ):** استخدم قطر فتحة غربال **1.5 مم إلى 2.0 مم**.
* **تسمين الدواجن (نامي/ناهي):** استخدم قطر فتحة غربال **2.5 مم إلى 3.0 مم**.
* **أعلاف الماشية:** استخدم قطر فتحة غربال **3.0 مم إلى 4.0 مم**.
* **أعلاف الأسماك العائمة (المستخرجة):** يتطلب طحناً ناعماً جداً. استخدم غربالاً دقيق الفتحات **0.8 مم إلى 1.2 مم**.

### 2. تدوير المطرقة وسلامة الاستبدال
* يجب تدوير المطارق للاستفادة من زوايا القطع الأربع قبل استبدالها بالكامل. قم بتدوير المطارق عندما يظهر على الحواف تآكل يزيد عن **2.0 مم**.
* **هام جداً:** عند استبدال المطارق، **يجب** استبدال المجموعة بأكملها أو الأزواج المتطابقة بشكل متماثل. استبدال مطارق فردية فقط يدمر التوازن الديناميكي للدوار، مما يسبب اهتزازاً شديداً (> 5.0 مم/ثانية).
* يجب ألا تختلف المجموعات المتماثلة في الوزن بأكثر من **1.0 جرام**.

### 3. استكشاف أعطال الاهتزاز وإصلاحها
* إذا تجاوز الاهتزاز **3.0 مم/ثانية**، فقم بإيقاف الآلة فوراً.
* تحقق مما يلي:
  1. دبابيس مطرقة فضفاضة أو قطع مكسورة.
  2. تراكم المواد داخل حجرة الطحن.
  3. تآكل المحامل الرئيسية.`
    },
    specs: [
      { label: "Optimal Chick Feed Screen", value: "1.5 - 2.0 mm" },
      { label: "Max Symmetrical Weight Difference", value: "1.0 gram" },
      { label: "Critical Vibration Threshold", value: "3.0 mm/s" },
      { label: "Rotor Speed", value: "1480 rpm" }
    ]
  },
  {
    id: "extruder-startup-controls",
    category: "plc",
    title: {
      en: "SMHS Twin-Screw Extruder: Automated Thermal Startup Procedure",
      ur: "SMHS ٹوئن سکرو ایکسٹرودر: خودکار تھرمل سٹارٹ اپ کا طریقہ کار",
      zh: "SMHS 双螺杆挤压机：自动化热态启动规程",
      ar: "جهاز البثق ثنائي اللولب SMHS: إجراء بدء التشغيل الحراري التلقائي"
    },
    summary: {
      en: "Standard operating parameters for preconditioning moisture, barrel temperature zones, and automatic safety interlocks during startup.",
      ur: "سٹارٹ اپ کے دوران نمی کے تناسب، بیرل کے درجہ حرارت کے زونز اور خودکار سیفٹی لاکس کو کنٹرول کرنے کا طریقہ کار۔",
      zh: "包含调质水分控制、各机筒温区参数设定以及启动运行期间的自动化安全连锁保护在内的标准操作指南。",
      ar: "معلمات التشغيل القياسية لرطوبة التهيئة المسبقة، ومناطق درجة حرارة البرميل، وأقفال السلامة التلقائية أثناء بدء التشغيل."
    },
    content: {
      en: `### 1. Barrel Temperature Zone Configurations
The SMHS series twin-screw extruder relies on precise heat distribution across 5 barrel zones to gelatinize starch and control expansion:
* **Zone 1 (Feed Inlet):** **50°C to 65°C**. Low temperature to facilitate raw material feeding and initial blending.
* **Zone 2 (Mixing & Preheating):** **80°C to 95°C**. Initial compression and moisture absorption.
* **Zone 3 (Cooking Zone):** **110°C to 125°C**. High shear and thermomechanical breakdown of starches.
* **Zone 4 (Maximum Cooking):** **130°C to 145°C**. Peak temperature for sterilization and cellular expansion.
* **Zone 5 (Die discharge):** **120°C to 130°C**. Moderated temperature to shape and prevent pellet surface bursting.

### 2. Preconditioning Standards
* **Moisture Addition:** Adjust steam and water valves in the conditioner to achieve **18% to 22%** moisture content before extrusion.
* **Conditioning Temperature:** Ensure raw materials reach **90°C to 98°C** with a retention time of at least **120 seconds** to eliminate pathogens (Salmonella, E. coli) and pre-cook starch.

### 3. Safe Startup Sequence
1. Turn on the main water cooling system and oil circulation pump.
2. Heat all barrel zones to their preset targets (approx. 45-60 minutes).
3. Start the main extruder motor at minimum frequency (**10 Hz**).
4. Run water through the conditioning unit, then feed a high-moisture 'startup wash mixture' (wheat bran, oil, and water).
5. Gradually increase feed rate and transition to the target recipe formula.
6. Start the pellet cutter motor once stable material flow is achieved.`,
      ur: `### 1. بیرل کے درجہ حرارت (ٹمپریچر زونز) کی ترتیب
ایکسٹرودر کے 5 درجہ حرارت کے زونز ہوتے ہیں جو مچھلی کی فیڈ کے دانوں کو پھیلانے اور پکانے میں مدد دیتے ہیں:
* **زون 1 (خام مال کی آمد):** **50°C سے 65°C**۔
* **زون 2 (مکسنگ اور گرم کرنا):** **80°C سے 95°C**۔
* **زون 3 (ککنگ زون):** **110°C سے 125°C**۔
* **زون 4 (زیادہ درجہ حرارت):** **130°C سے 145°C**۔ جراثیم سے پاک کرنے اور دانے بنانے کا اہم زون۔
* **زون 5 (ڈائی پلیٹ کی طرف اخراج):** **120°C سے 130°C**۔

### 2. پری کنڈیشننگ کے معیار
* **نمی کا تناسب:** کنڈیشنر میں بھاپ اور پانی کو اس طرح کنٹرول کریں کہ نمی **18% سے 22%** ہو جائے۔
* **درجہ حرارت:** خام مال کا درجہ حرارت **90°C سے 98°C** تک ہونا چاہیے تاکہ تمام جراثیم (سالمونیا وغیرہ) ختم ہو جائیں۔

### 3. محفوظ طریقے سے چلانے (سٹارٹ اپ) کے مراحل
1. پہلے کولنگ واٹر سسٹم اور آئل پمپ آن کریں۔
2. تمام زونز کو مطلوبہ ٹمپریچر تک گرم ہونے دیں۔
3. مین موٹر کو کم فریکوئنسی (**10 Hz**) پر سٹارٹ کریں۔
4. پہلے گیلے آمیزے (چوکر اور پانی) کو گزاریں تاکہ بیرل بلاک نہ ہو۔
5. دھیرے دھیرے اصل فارمولا فیڈ شامل کریں اور کٹر (کٹر موٹر) آن کریں۔`,
      zh: `### 1. 机筒各分区温控设定
SMHS系列双螺杆挤压机依赖于机筒5个温区的精确热分布，以实现淀粉糊化并精确控制膨化度：
* **第一区 (进料口)：** **50°C 至 65°C**。较低的温度以便于原料顺利吞入及初步混合。
* **第二区 (混合预热区)：** **80°C 至 95°C**。进行初步压缩及热水分吸收。
* **第三区 (高压熟化区)：** **110°C 至 125°C**。高剪切作用使淀粉发生热力学分子链破裂。
* **第四区 (最高熟化温区)：** **130°C 至 145°C**。用于完全灭菌及控制气孔膨化度。
* **第五区 (出料模头区)：** **120°C 至 130°C**。适当回调温度，以定型并防止颗粒表面过度开裂。

### 2. 调质控制标准
* **调质水分：** 调节调质器中的蒸汽和水阀，使物料在进入挤压腔前的水分达到 **18% 至 22%**。
* **调质温度：** 确保物料在调质器内达到 **90°C 至 98°C**，熟化调质停留时间不少于 **120秒**，以有效杀灭沙门氏菌、大肠杆菌并使淀粉预糊化。

### 3. 安全开机控制顺序
1. 启动冷却循环水泵及齿轮箱润滑油泵。
2. 将机筒5个温区全部预热至设定目标值（约需 45-60 分钟）。
3. 以最低频率（**10 Hz**）启动主电机。
4. 先通入工艺水，然后喂入高水分的“开机过渡料”（麸皮、油脂与水的混合物）。
5. 逐渐增加正常配方喂料量，减小过渡料，直至平稳过度至目标配方。
6. 出料正常且物料流动稳定后，开启切刀电机并调整切速。`,
      ar: `### 1. تكوينات منطقة درجة حرارة البرميل
يعتمد جهاز البثق ثنائي اللولب من سلسلة SMHS على التوزيع الدقيق للحرارة عبر 5 مناطق للبرميل للتحكم في تمدد الحبيبات:
* **المنطقة 1 (مدخل التغذية):** **50 درجة مئوية إلى 65 درجة مئوية**.
* **المنطقة 2 (خلط وتسخين):** **80 درجة مئوية إلى 95 درجة مئوية**.
* **المنطقة 3 (منطقة الطهي):** **110 درجة مئوية إلى 125 درجة مئوية**.
* **المنطقة 4 (أقصى طهي):** **130 درجة مئوية إلى 145 درجة مئوية** لضمان التعقيم.
* **المنطقة 5 (مخرج القالب):** **120 درجة مئوية إلى 130 درجة مئوية** لتشكيل الحبيبات ومنع انفجار سطحها.

### 2. معايير التهيئة المسبقة
* **إضافة الرطوبة:** اضبط صمامات البخار والماء في المكيف للوصول إلى محتوى رطوبة **18٪ إلى 22٪**.
* **درجة حرارة التهيئة:** تأكد من وصول المواد الخام إلى **90 درجة مئوية إلى 98 درجة مئوية** مع زمن احتجاز لا يقل عن **120 ثانية**.

### 3. تسلسل بدء التشغيل الآمن
1. قم بتشغيل نظام تبريد المياه الرئيسي ومضخة تدوير الزيت.
2. سخن جميع مناطق البرميل إلى أهدافها المحددة (45-60 دقيقة).
3. ابدأ تشغيل محرك البثق الرئيسي عند الحد الأدنى للتردد (**10 هرتز**).
4. مرر خليط الغسيل عالي الرطوبة (نخالة القمح والماء والزيت).
5. قم بزيادة معدل التغذية تدريجياً والانتقال إلى صيغة الوصفة المستهدفة.`
    },
    specs: [
      { label: "Optimal Conditioning Moisture", value: "18% - 22%" },
      { label: "Required Conditioning Temp", value: "90°C - 98°C" },
      { label: "Maximum Barrel Temperature", value: "145°C" },
      { label: "Initial Extruder Frequency", value: "10 Hz" }
    ]
  }
];
