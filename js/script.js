document.addEventListener("DOMContentLoaded", function() {
    console.log("📢 تم تحميل الصفحة بنجاح!");

    // 🔹 التأكد من أن الزر موجود قبل تنفيذ الحدث
    const button = document.getElementById("myButton");
    if (button) {
        button.addEventListener("click", function() {
            alert("✅ تم الضغط على الزر!");
        });
    } else {
        console.warn("⚠️ لم يتم العثور على الزر myButton في الصفحة!");
    }

    // 🔹 تغيير لون الهيدر عند التمرير (Sticky Header)
    const header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // 🔹 إضافة تأثير التنقل السلس بين الأقسام
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

});
