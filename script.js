


const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("show")) {
        icon.setAttribute("data-lucide", "x");
    } else {
        icon.setAttribute("data-lucide", "menu");
    }

    lucide.createIcons();

});




document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

        menuBtn.querySelector("i")
            .setAttribute("data-lucide", "menu");

        lucide.createIcons();

    });

});




const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.1
});


document.querySelectorAll(".reveal").forEach(element => {

    observer.observe(element);

});



if (window.lucide) {
    lucide.createIcons();
}




const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} Rajesh Pinninti. All Rights Reserved.`;

}
