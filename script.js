function showMotivationalAlert() {
    const messages = [
        "💪 لا تستسلم، فإن النجاح هو ثمرة الإصرار والعمل الدؤوب!",
        "🌟 كل بداية جديدة هي فرصة لتحقيق أحلامك، اغتنمها!",
        "🚀 لا يوجد شيء مستحيل، كل ما تحتاجه هو الإيمان بنفسك!",
        "🌈 اجعل من كل تحدٍ فرصة للنمو والتطور!",
        "✨ النجاح ليس نهاية الطريق، بل هو بداية جديدة!",
        "🎯 ضع هدفك أمام عينيك، وسر نحوه بخطوات ثابتة!",
        "🌟 تذكر، كل يوم هو فرصة جديدة لتحقيق أحلامك!",
        "💡 النجاح يأتي من الشجاعة والالتزام، فكن شجاعًا وواصل السعي!",
        "🚀 لا تدع الفشل يوقفك، فهو مجرد خطوة نحو النجاح!",
        "💪 قوة الإرادة قادرة على تحقيق المستحيل، فلتكن إرادتك قوية!"
    ];
    
    // Get a random index from the messages array
    const randomIndex = Math.floor(Math.random() * messages.length);
    
    // Show the random message in an alert
    alert(messages[randomIndex]);
}

// Call the function on page load
window.onload = showMotivationalAlert;


 