// دالة مساعدة لتشفير الأكواد داخل الشرح حتى لا تتداخل مع الـ HTML
function escapeHtml(text) {
    return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const quizData = [
    { 
        q: "1. Which of the following is a semantic HTML element?", 
        o: ["<b>", "<section>", "<i>", "<font>"], a: 1, 
        exp: "العناصر الدلالية (Semantic Elements) هي التي تصف معناها بوضوح للمتصفح وللمطور معاً. الوسم <section> يوضح أن هذا الجزء هو 'قسم' من الصفحة، مما يحسن من محركات البحث (SEO) وقابلية الوصول (Accessibility)، عكس وسوم مثل <b> و <i> التي تتحكم بالشكل فقط دون دلالة بنيوية." 
    },
    { 
        q: "2. What does HTML stand for?", 
        o: ["Hyper Text Markup Language", "High Level Text Markup Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], a: 0, 
        exp: "HTML هي اختصار لـ Hyper Text Markup Language (لغة ترميز النص الفائق). ليست لغة برمجة (Programming Language) بل هي لغة ترميز (Markup) تُستخدم لوصف وبناء الهيكل الأساسي لصفحات الويب باستخدام الوسوم (Tags)." 
    },
    { 
        q: "3. Which tag is used to create a paragraph in HTML?", 
        o: ["<h1>", "<p>", "<div>", "<span>"], a: 1, 
        exp: "الوسم <p> مأخوذ من الكلمة الإنجليزية Paragraph. عند استخدامه، يقوم المتصفح تلقائياً بإضافة مسافة فارغة (Margin) أعلى وأسفل النص لفصله عما قبله وما بعده، وهو الأداة الأساسية لكتابة النصوص الطويلة والمقالات." 
    },
    { 
        q: "4. Which tag defines the main heading in HTML?", 
        o: ["<h6>", "<heading>", "<h1>", "<head>"], a: 2, 
        exp: "الوسم <h1> هو الأكبر والأكثر أهمية في هيكلية الصفحة. يجب استخدامه مرة واحدة فقط في كل صفحة كعنوان رئيسي للمحتوى، حيث تعتمد عليه محركات البحث (مثل جوجل) لفهم الموضوع الأساسي للصفحة." 
    },
    { 
        q: "5. Which of the following is a self-closing tag in HTML?", 
        o: ["<p>", "<div>", "<img>", "<h1>"], a: 2, 
        exp: "الوسوم ذاتية الإغلاق (Self-closing/Empty Elements) هي التي لا تحتوي على محتوى نصي بداخلها ولا تحتاج لوسم إغلاق. الوسم <img> يستخدم لإدراج صورة ويتم التحكم فيه عبر السمات (Attributes) مثل src و alt، ولا يمتلك وسم إغلاق </img>." 
    },
    { 
        q: "6. Which attribute provides alternative text for an image?", 
        o: ["src", "href", "alt", "title"], a: 2, 
        exp: "السمة alt (Alternative Text) مهمة جداً لسببين: الأول أنها تظهر كنص بديل إذا فشل تحميل الصورة بسبب ضعف الإنترنت، والثاني أنها تُقرأ بواسطة برامج قارئ الشاشة للمكفوفين، مما يجعل الموقع متوافقاً مع معايير الوصول." 
    },
    { 
        q: "7. Which tag is used to create an unordered list?", 
        o: ["<ol>", "<li>", "<ul>", "<list>"], a: 2, 
        exp: "الوسم <ul> يرمز إلى Unordered List، وهو يقوم بترتيب العناصر <li> بداخله باستخدام نقاط (Bullets) وليس أرقام، ويُستخدم بكثرة لإنشاء القوائم الجانبية أو قوائم التنقل (Navigation Bars)." 
    },
    { 
        q: "8. Which tag is used to create a hyperlink in HTML?", 
        o: ["<link>", "<a>", "<href>", "<url>"], a: 1, 
        exp: "الوسم <a> (Anchor) هو أساس الربط في شبكة الإنترنت بالكامل. لكي يعمل بشكل صحيح، يجب أن يُرافق بالسمة href التي نضع بداخلها مسار أو رابط الصفحة المراد الانتقال إليها." 
    },
    { 
        q: "9. What does the target='_blank' attribute do in a link?", 
        o: ["Opens the link in the same tab", "Opens the link in a new tab", "Closes the current tab", "Opens the link in a frame"], a: 1, 
        exp: "إضافة السمة target='_blank' لوسم الرابط <a> تجعل المتصفح يفتح الرابط في علامة تبويب جديدة (New Tab) بدلاً من إغلاق أو مغادرة الصفحة الحالية. وهي مفيدة جداً عند وضع روابط خارجية لمواقع أخرى." 
    },
    { 
        q: "10. Which tag is used to display an image in HTML?", 
        o: ["<pic>", "<image>", "<img>", "<src>"], a: 2, 
        exp: "الوسم <img> هو الوسم المعياري في HTML لإدراج الصور. يعتمد بشكل أساسي على السمة src (Source) لتحديد مسار الصورة، سواء كان مساراً محلياً من جهازك أو رابطاً من الإنترنت." 
    },
    { 
        q: "11. Which HTML element is used to define the structure of a table?", 
        o: ["<table>", "<tr>", "<td>", "All of the above"], a: 3, 
        exp: "لتكوين جدول صحيح نحتاج إلى كل هذه الوسوم: <table> لإنشاء الحاوية الأساسية للجدول، <tr> لإنشاء صف (Row)، و <td> لإنشاء خلية بيانات (Data Cell) داخل هذا الصف." 
    },
    { 
        q: "12. Which tag defines a table row in HTML?", 
        o: ["<td>", "<th>", "<tr>", "<table>"], a: 2, 
        exp: "الوسم <tr> يرمز إلى Table Row ويقوم بحجز سطر أفقي كامل داخل الجدول. بداخل هذا السطر نقوم بوضع الخلايا الفردية باستخدام <td> أو خلايا العناوين باستخدام <th>." 
    },
    { 
        q: "13. Which tag is used to create a form in HTML?", 
        o: ["<input>", "<form>", "<fieldset>", "<button>"], a: 1, 
        exp: "الوسم <form> هو الحاوية الرئيسية لأي نموذج بيانات (مثل تسجيل الدخول أو إرسال رسالة). يقوم هذا الوسم بتجميع بيانات المدخلات وإرسالها إلى الخادم (Server) للمعالجة عبر سمات مثل action و method." 
    },
    { 
        q: "14. Which input type is used for email addresses in HTML forms?", 
        o: ["text", "password", "email", "number"], a: 2, 
        exp: "استخدام type='email' يوفر ميزة 'التحقق التلقائي' (Validation) من قبل المتصفح، حيث لن يسمح المتصفح بإرسال النموذج إلا إذا كان النص المدخل يحتوي على علامة @ وصيغة بريد إلكتروني صحيحة، كما يفتح لوحة مفاتيح مخصصة للإيميل في الهواتف." 
    },
    { 
        q: "15. What is the correct HTML element for inserting a video?", 
        o: ["<video>", "<media>", "<movie>", "<mp4>"], a: 0, 
        exp: "الوسم <video> هو الوسم الحديث الذي تم تقديمه في HTML5 لتشغيل الفيديو محلياً دون الحاجة لمشغلات خارجية (مثل Flash قديماً). يمكن دعمه بسمات إضافية مثل controls لإظهار أزرار التشغيل والإيقاف." 
    },
    { 
        q: "16. Which HTML element is used to play audio files?", 
        o: ["<sound>", "<mp3>", "<audio>", "<music>"], a: 2, 
        exp: "على غرار الفيديو، الوسم <audio> هو المعيار في HTML5 لتشغيل الملفات الصوتية. يدعم صيغاً متعددة مثل MP3 و WAV، ويُستخدم مع السمة controls لتوفير واجهة تحكم للمستخدم." 
    },
    { 
        q: "17. Which tag is used to define an ordered list?", 
        o: ["<ul>", "<ol>", "<li>", "<list>"], a: 1, 
        exp: "الوسم <ol> (Ordered List) يقوم بتنسيق العناصر <li> على شكل أرقام متسلسلة (1, 2, 3...) أو حروف. وهو مفيد جداً عند كتابة الخطوات أو الترتيبات التي تهم فيها الأولوية." 
    },
    { 
        q: "18. What does CSS stand for?", 
        o: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"], a: 2, 
        exp: "تعني Cascading Style Sheets (أوراق الأنماط المتتالية). كلمة Cascading تشير إلى القاعدة التي تجعل الأكواد تتسلسل وتتوارث، بحيث أن الكود الأخير أو الأكثر تحديداً يطغى على الكود الذي سبقه." 
    },
    { 
        q: "19. Which HTML tag is used to define internal CSS?", 
        o: ["<css>", "<style>", "<script>", "<link>"], a: 1, 
        exp: "الوسم <style> يُوضع غالباً داخل عنصر <head> في صفحة HTML، ويوفر بيئة لكتابة أكواد CSS التي ستُطبق على تلك الصفحة فقط (Internal CSS). وهي طريقة جيدة للصفحات الفردية البسيطة." 
    },
    { 
        q: "20. Which CSS property changes the text color of an element?", 
        o: ["text-color", "background-color", "color", "font-color"], a: 2, 
        exp: "الخاصية color هي المسؤولة عن لون النص الأمامي للمحتوى. يمكن إعطاؤها قيماً بأسماء الألوان (مثل blue) أو رمز HEX (مثل #0000FF) أو دالة RGB، وتُورث تلقائياً للعناصر الداخلية." 
    },
    { 
        q: "21. Which CSS property controls the font size of text?", 
        o: ["text-size", "font-style", "font-size", "size"], a: 2, 
        exp: "خاصية font-size تحدد حجم الخط المكتوب. يُفضل استخدام وحدات مرنة مثل rem أو em في التصميم الحديث لضمان تجاوب حجم الخط مع إعدادات متصفح المستخدم وشاشات الهواتف." 
    },
    { 
        q: "22. Which HTML attribute is used to apply inline CSS?", 
        o: ["class", "id", "style", "css"], a: 2, 
        exp: "السمة style تتيح لك كتابة كود CSS داخل الوسم مباشرة (مثال: <p style='color:red;'>). هذه الطريقة لها الأولوية القصوى في التنفيذ ولكن لا يُنصح بكثرة استخدامها لأنها تجعل صيانة الكود صعبة." 
    },
    { 
        q: "23. Which tag is used to create a footer in a semantic HTML page?", 
        o: ["<div>", "<bottom>", "<footer>", "<section>"], a: 2, 
        exp: "الوسم <footer> هو عنصر دلالي يُشير إلى تذييل الصفحة أو تذييل قسم معين. يوضع فيه غالباً حقوق الملكية، وسائل التواصل، روابط سريعة، ومعلومات الاتصال." 
    },
    { 
        q: "24. Which tag is used to define navigation links in semantic HTML?", 
        o: ["<nav>", "<menu>", "<navigation>", "<links>"], a: 0, 
        exp: "الوسم <nav> (اختصار Navigation) يدل على أن هذا الجزء من الصفحة يحتوي على قائمة الروابط الرئيسية للموقع. يساعد هذا محركات البحث وأدوات قراءة الشاشة في الوصول السريع للتنقل." 
    },
    { 
        q: "25. Which element is used to group related content in a section?", 
        o: ["<group>", "<div>", "<section>", "<article>"], a: 2, 
        exp: "الوسم <section> هو عنصر دلالي يجمع المحتوى المترابط موضوعياً (مثلاً: قسم 'من نحن'، قسم 'خدماتنا'). يُفضل أن يحتوي كل قسم على عنوان خاص به (مثل <h2>) ليحدد هويته." 
    },
    { 
        q: "26. What is the purpose of the <iframe> tag?", 
        o: ["To embed an image", "To embed another webpage within a webpage", "To create a form", "To add a video"], a: 1, 
        exp: "الوسم <iframe> (Inline Frame) يعمل كنافذة تفتح على صفحة أخرى، ويُستخدم بكثرة لتضمين خرائط جوجل، فيديوهات اليوتيوب، أو إدراج موقع كامل داخل موقعك." 
    },
    { 
        q: "27. Which attribute is required in the <img> tag?", 
        o: ["src and alt", "src only", "alt only", "width and height"], a: 0, 
        exp: "وفقاً لمعايير الويب الصحيحة (W3C)، يجب أن يحتوي كل وسم <img> على الأقل على السمة src لمعرفة مصدر الصورة، والسمة alt لتوفير نص بديل، حتى لو كان فارغاً (alt='')." 
    },
    { 
        q: "28. Which tag is used to create a text input field in a form?", 
        o: ["<text>", "<input type='text'>", "<textarea>", "<field>"], a: 1, 
        exp: "الوسم <input> هو الأكثر مرونة في النماذج، ويأخذ أشكالاً عديدة بناءً على نوعه (type). عند تحديد type='text'، ينشئ حقلاً لإدخال سطر واحد من النصوص مثل الاسم أو العنوان." 
    },
    { 
        q: "29. Which CSS property is used to change the background color of an element?", 
        o: ["color", "bgcolor", "background-color", "background"], a: 2, 
        exp: "خاصية background-color تغير لون خلفية العنصر بالكامل (بما يشمل المساحة الداخلية Padding). من المهم اختيار لون خلفية يوفر تبايناً جيداً (Contrast) مع لون النص لسهولة القراءة." 
    },
    { 
        q: "30. Which of the following is an example of an external CSS link?", 
        o: ["<style src='style.css'>", "<link rel='stylesheet' href='style.css'>", "<css file='style.css'>", "<script src='style.css'>"], a: 1, 
        exp: "استخدام ملف CSS خارجي هو أفضل ممارسة برمجية (Best Practice) لأنه يفصل التصميم عن الهيكل، ويسمح بتطبيق نفس التصميم على عشرات الصفحات في الموقع من خلال سطر ربط واحد <link>." 
    },
    { 
        q: "31. Which tag is used to define a table header cell?", 
        o: ["<td>", "<th>", "<tr>", "<header>"], a: 1, 
        exp: "الوسم <th> (Table Header) يشبه <td> ولكنه يُستخدم خصيصاً لخلايا العناوين في الجدول. يقوم المتصفح افتراضياً بجعل النص بداخله غامقاً (Bold) وموسّطاً لتمييزه عن بيانات الجدول العادية." 
    },
    { 
        q: "32. Which CSS property is used to remove underlines from links?", 
        o: ["text-decoration: none", "underline: none", "text-underline: remove", "link-style: none"], a: 0, 
        exp: "تظهر الروابط <a> افتراضياً بخط سفلي. الخاصية text-decoration تستخدم للتحكم بتزيين النص، وإعطاؤها قيمة 'none' يزيل هذا الخط، وهو أسلوب متبع بشدة في تصميم قوائم التنقل الحديثة." 
    },
    { 
        q: "33. Which tag is used to group related content in a section?", 
        o: ["<group>", "<div>", "<section>", "<article>"], a: 2, 
        exp: "تكرار للسؤال 25 من ملف البنك للتوكيد: الوسم <section> هو الخيار الدلالي الأمثل لتجميع أقسام محددة من الصفحة، بدلاً من استخدام <div> غير المعبر، مما يحسن من بنية الموقع." 
    },
    { 
        q: "34. Which CSS property is used to set the background image of an element?", 
        o: ["background-img", "image-background", "background-image", "bg-image"], a: 2, 
        exp: "خاصية background-image تمكنك من جلب صورة لتغطي خلفية العنصر عبر الدالة url(). يمكن دمجها مع خصائص أخرى مثل background-size للتحكم في كيفية تغطية الصورة للمساحة." 
    },
    { 
        q: "35. Which tag is used to embed another webpage within a webpage?", 
        o: ["<frame>", "<iframe>", "<embed>", "<object>"], a: 1, 
        exp: "إجابة متكررة للتوكيد: الوسم <iframe> يفتح إطاراً داخلياً يمكن من خلاله استعراض موقع ويب كامل داخل موقعك دون الحاجة لمغادرة الصفحة." 
    },
    { 
        q: "36. Which CSS property is used to make a rounded border?", 
        o: ["border-round", "radius-border", "border-radius", "border-style: round"], a: 2, 
        exp: "خاصية border-radius هي واحدة من أهم خصائص التصميم الحديث، وتسمح بصنع زوايا دائرية للعناصر. إعطاؤها قيمة 50% يجعل العنصر دائرياً بالكامل (إذا كان متساوي الطول والعرض)." 
    },
    { 
        q: "37. Which input type is used for email addresses in HTML forms?", 
        o: ["text", "password", "email", "number"], a: 2, 
        exp: "نوع type='email' مفيد للمطور لأنه يقلل الحاجة لاستخدام الجافاسكريبت للتحقق من أن النص المدخل هو بريد إلكتروني، المتصفح سيتولى هذه المهمة تلقائياً ويُظهر رسالة خطأ للمستخدم إذا أخطأ." 
    },
    { 
        q: "38. Which CSS property is used to position an element relative to its normal position?", 
        o: ["position: relative", "position: absolute", "position: fixed", "position: static"], a: 0, 
        exp: "التموضع position: relative يترك العنصر في مساره الطبيعي في الصفحة، ولكنه يسمح لك بتحريكه (باستخدام top, right, bottom, left) انطلاقاً من مكانه الأصلي دون التأثير على العناصر المجاورة." 
    },
    { 
        q: "39. Which tag is used to create a dropdown list in HTML forms?", 
        o: ["<input type='dropdown'>", "<dropdown>", "<select>", "<list>"], a: 2, 
        exp: "الوسم <select> يُستخدم لإنشاء قائمة منسدلة. ويجب أن يحتوي بداخله على وسوم <option> والتي تمثل الخيارات التي سيراها المستخدم ليقوم بالاختيار من بينها." 
    },
    { 
        q: "40. Which CSS property is used to change the mouse cursor when hovering over an element?", 
        o: ["mouse", "cursor", "pointer", "hover-cursor"], a: 1, 
        exp: "الخاصية cursor تتحكم في شكل مؤشر الفأرة. القيمة الأكثر شهرة هي 'pointer' والتي تحول المؤشر إلى علامة 'يد' لتشير للمستخدم أن هذا العنصر قابل للنقر عليه." 
    },
    { 
        q: "41. Which tag is used to define a multi-line text input field in HTML forms?", 
        o: ["<input type='text'>", "<textarea>", "<input type='multi'>", "<textfield>"], a: 1, 
        exp: "على عكس <input> الذي يسمح بسطر واحد، الوسم <textarea> يفتح مربعاً قابلاً للسحب والإطالة، ليسمح للمستخدم بكتابة نصوص طويلة وعدة أسطر، مثل كتابة مقال أو رسالة شكوى." 
    },
    { 
        q: "42. Which CSS property is used to control the spacing between lines of text?", 
        o: ["line-spacing", "letter-spacing", "line-height", "text-spacing"], a: 2, 
        exp: "خاصية line-height مهمة جداً لراحة العين أثناء القراءة (Typography). زيادة المسافة العمودية بين السطور (مثلاً إعطاؤها قيمة 1.6) تمنع تداخل الكلمات وتجعل المقالات أسهل في القراءة." 
    },
    { 
        q: "43. Which tag is used to define a table data cell in HTML?", 
        o: ["<th>", "<td>", "<tr>", "<table>"], a: 1, 
        exp: "الوسم <td> (Table Data) هو الحاوية الفعلية التي تحمل المحتوى (نصوص، صور، روابط) داخل الجدول. ولا يمكن وضع <td> مباشرة إلا داخل وسم صف <tr>." 
    },
    { 
        q: "44. Which CSS property is used to make text italic?", 
        o: ["font-style: italic", "font-italic", "text-italic", "italic"], a: 0, 
        exp: "خاصية font-style تتحكم بميلان الخط. القيمة 'italic' تجعل الخط مائلاً، وتُستخدم عادةً لتمييز الاقتباسات، أو المصطلحات العلمية، أو الملاحظات الهامة داخل النص." 
    },
    { 
        q: "45. Which tag is used to create a button in HTML?", 
        o: ["<input type='button'> or <button>", "<btn>", "<click>", "<input type='click'>"], a: 0, 
        exp: "الوسم <button> هو الأحدث والأكثر استخداماً حالياً لأنه يسمح بوضع محتوى غني بداخله (مثل أيقونة بجوار النص)، بينما <input type='button'> يقتصر على عرض نص فقط داخل الزر." 
    },
    { 
        q: "46. Which CSS property is used to add shadow to text?", 
        o: ["text-shadow", "shadow-text", "font-shadow", "text-effect"], a: 0, 
        exp: "خاصية text-shadow تضيف ظلاً خلف الحروف. تتطلب عدة قيم: الإزاحة الأفقية، الإزاحة العمودية، درجة التمويه (Blur)، ولون الظل. مفيدة جداً لجعل النصوص البارزة واضحة فوق الصور." 
    },
    { 
        q: "47. Which HTML element is used to define an article in semantic HTML?", 
        o: ["<section>", "<div>", "<article>", "<content>"], a: 2, 
        exp: "الوسم <article> هو عنصر دلالي يعبر عن محتوى مستقل بذاته. بمعنى أن هذا المحتوى يمكن توزيعه أو قراءته منفرداً عن باقي الصفحة، مثل: تدوينة، تعليق مستخدم، أو خبر صحفي." 
    },
    { 
        q: "48. Which CSS property is used to control the order of stacked elements (z-axis)?", 
        o: ["stack-order", "z-index", "layer-order", "position-order"], a: 1, 
        exp: "عند استخدام التموضع (Positioning)، قد تتراكب العناصر فوق بعضها. خاصية z-index تحدد أي عنصر سيظهر في المقدمة (الرقم الأكبر) وأي عنصر سيبقى في الخلفية، تماماً كترتيب الطبقات (Layers) في برامج التصميم." 
    },
    { 
        q: "49. Which tag is used to define a header section in semantic HTML?", 
        o: ["<head>", "<header>", "<top>", "<heading>"], a: 1, 
        exp: "الوسم <header> يمثل القسم العلوي التمهيدي. سواء كان ترويسة الموقع بالكامل (التي تحتوي اللوجو وقائمة التنقل)، أو ترويسة لمقال معين (تحتوي على عنوان المقال وتاريخ الكاتب)." 
    },
    { 
        q: "50. Which CSS property is used to set the transparency of an element?", 
        o: ["transparency", "alpha", "opacity", "filter"], a: 2, 
        exp: "الخاصية opacity تتحكم بشفافية العنصر وكل ما بداخله معاً. تقبل قيماً من 0 (شفاف ومخفي تماماً) إلى 1 (معتم ومرئي بالكامل). مثلاً 0.5 تجعل العنصر نصف شفاف." 
    },
    { 
        q: "51. Which tag is used to define a numbered list item?", 
        o: ["<ul>", "<li>", "<ol>", "<item>"], a: 1, 
        exp: "الوسم <li> (List Item) هو الوسم الموحد الذي يُستخدم لتعريف 'عنصر' داخل أي قائمة، سواء كانت قائمة مرقمة <ol> أو قائمة منقطة <ul>." 
    },
    { 
        q: "52. Which CSS property is used to add space between letters in text?", 
        o: ["letter-spacing", "word-spacing", "text-spacing", "font-spacing"], a: 0, 
        exp: "خاصية letter-spacing تقوم بتوسيع المسافة الأفقية بين كل حرف والذي يليه. تُستخدم بكثرة في العناوين العريضة (Headings) المكتوبة بالأحرف الكبيرة (Uppercase) لإعطاء طابع تصميمي مميز." 
    },
    { 
        q: "53. Which tag is used to define a subscript text in HTML?", 
        o: ["<sup>", "<sub>", "<small>", "<low>"], a: 1, 
        exp: "الوسم <sub> (Subscript) يقوم بتصغير النص وإنزاله قليلاً عن مستوى السطر العادي. استخداماته الأشهر هي في كتابة الصيغ الكيميائية مثل H2O حيث يكون الرقم 2 لأسفل." 
    },
    { 
        q: "54. Which CSS property is used to set the list style type (e.g., circle, square)?", 
        o: ["list-style", "list-type", "bullet-style", "marker-style"], a: 0, 
        exp: "الخاصية list-style (أو list-style-type) تغير شكل العلامة بجوار عناصر القائمة. يمكن تغييرها إلى دوائر مفرغة، مربعات، أو أرقام رومانية، أو إخفائها تماماً بقيمة 'none'." 
    },
    { 
        q: "55. Which tag is used to define a superscript text in HTML?", 
        o: ["<sup>", "<sub>", "<up>", "<top>"], a: 0, 
        exp: "الوسم <sup> (Superscript) هو عكس وسم <sub>، فهو يصغر النص ويرفعه أعلى مستوى السطر العادي. يُستخدم بشكل أساسي في الأسس الرياضية (مثل x²) أو التواريخ (مثل 1st)." 
    },
    { 
        q: "56. Which CSS property is used to set the minimum width of an element?", 
        o: ["min-width", "width-min", "smallest-width", "min-w"], a: 0, 
        exp: "خاصية min-width ممتازة للتصميم المتجاوب (Responsive Design). فهي تخبر المتصفح بأنه يمكن للعنصر أن يتقلص، ولكن يمنع منعاً باتاً أن يقل عرضه عن هذه القيمة المحددة لحماية المحتوى الداخلي من التكدس." 
    },
    { 
        q: "57. Which tag is used to define a horizontal line in HTML?", 
        o: ["<hr>", "<line>", "<br>", "<hline>"], a: 0, 
        exp: "الوسم <hr> (Horizontal Rule) يقوم برسم خط فاصل أفقي بعرض الصفحة. وهو وسم دلالي يمثل أيضاً فاصلاً موضوعياً (Thematic Break) بين فقرتين مختلفتين في المعنى." 
    },
    { 
        q: "58. Which CSS property is used to set the maximum height of an element?", 
        o: ["max-height", "height-max", "largest-height", "max-h"], a: 0, 
        exp: "خاصية max-height تمنع العنصر من التمدد العمودي إلى ما لا نهاية. تُستخدم غالباً مع خاصية overflow: auto لإنشاء أشرطة تمرير (Scrollbars) داخل قسم معين إذا زاد محتواه عن الحد." 
    },
    { 
        q: "59. Which tag is used to define a line break in HTML?", 
        o: ["<lb>", "<br>", "<break>", "<newline>"], a: 1, 
        exp: "الوسم <br> (Line Break) يجبر النص على النزول لسطر جديد دون إنشاء فقرة جديدة (أي لا يضيف مسافات Margin كالتي يضيفها وسم p). مفيد عند كتابة القصائد الشعرية أو العناوين البريدية." 
    },
    { 
        q: "60. Which CSS property is used to set the border color of an element?", 
        o: ["border-color", "color-border", "border-clr", "border-style-color"], a: 0, 
        exp: "في CSS، الإطار (border) يتكون من ثلاث خصائص أساسية: العرض (width)، النمط (style)، واللون. خاصية border-color مخصصة تحديداً لتغيير لون هذا الإطار، ويمكن تخصيص لون مختلف لكل جهة من الجهات الأربع." 
    }
];

const quizContainer = document.getElementById("quiz-container");
const scoreDisplay = document.getElementById("score-display");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const completionMessage = document.getElementById("completion-message");

let totalQuestions = quizData.length;
let score = 0;
let answeredQuestions = 0;

// تحديث شريط التقدم والنقاط
function updateStats() {
    scoreDisplay.innerText = score;
    progressText.innerText = `${answeredQuestions} / ${totalQuestions}`;
    let progressPercentage = (answeredQuestions / totalQuestions) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    if (answeredQuestions === totalQuestions) {
        completionMessage.style.display = 'block';
    }
}

function renderQuiz() {
    quizData.forEach((item, qIndex) => {
        let card = document.createElement("div");
        card.className = "question-card";
        card.id = `qcard-${qIndex}`;

        let questionTitle = document.createElement("div");
        questionTitle.className = "q-text";
        questionTitle.innerHTML = escapeHtml(item.q);
        card.appendChild(questionTitle);

        let optionsGrid = document.createElement("div");
        optionsGrid.className = "options-grid";

        item.o.forEach((opt, optIndex) => {
            let label = document.createElement("label");
            label.className = "option-label";
            label.id = `lbl-${qIndex}-${optIndex}`;
            
            label.onclick = function() { checkAnswer(qIndex, optIndex, label); };

            label.innerHTML = `
                <input type="radio" name="rad-${qIndex}" value="${optIndex}">
                <span>${String.fromCharCode(97 + optIndex)}) ${escapeHtml(opt)}</span>
            `;
            
            optionsGrid.appendChild(label);
        });

        card.appendChild(optionsGrid);

        let expDiv = document.createElement("div");
        expDiv.className = "explanation-box";
        expDiv.id = `exp-${qIndex}`;
        card.appendChild(expDiv);

        quizContainer.appendChild(card);
    });
}

function checkAnswer(qIndex, selectedIndex, selectedLabel) {
    const question = quizData[qIndex];
    const card = document.getElementById(`qcard-${qIndex}`);
    const labels = card.querySelectorAll('.option-label');
    const expDiv = document.getElementById(`exp-${qIndex}`);

    // إيقاف جميع الخيارات في هذا السؤال
    labels.forEach(lbl => {
        lbl.classList.add('disabled-option');
        lbl.querySelector('input').disabled = true;
    });

    selectedLabel.querySelector('input').checked = true;
    answeredQuestions++;

    if (selectedIndex === question.a) {
        // إجابة صحيحة
        score++;
        selectedLabel.classList.add('correct-ans');
        selectedLabel.innerHTML += `<span class="icon-status">✅</span>`;
    } else {
        // إجابة خاطئة
        selectedLabel.classList.add('wrong-ans');
        selectedLabel.innerHTML += `<span class="icon-status">❌</span>`;
        
        // تظليل الإجابة الصحيحة
        const correctLabel = document.getElementById(`lbl-${qIndex}-${question.a}`);
        correctLabel.classList.remove('disabled-option');
        correctLabel.classList.add('correct-ans');
        correctLabel.innerHTML += `<span class="icon-status">👈 الإجابة الصحيحة</span>`;
        correctLabel.classList.add('disabled-option');
    }

    // عرض الشرح التفصيلي
    expDiv.style.display = 'block';
    expDiv.innerHTML = `
        <div class="exp-title">💡 الملاحظة التعليمية (شرح الإجابة):</div>
        <div class="exp-content">${question.exp}</div>
    `;

    updateStats();
}

// بدء التشغيل
renderQuiz();