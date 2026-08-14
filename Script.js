document.addEventListener("DOMContentLoaded", () => {

    /*
     * Small interaction for contact links.
     * The page is intentionally lightweight because
     * the main goal is a professional static portfolio.
     */

    const links = document.querySelectorAll("a[href]");

    links.forEach((link) => {

        link.addEventListener("click", () => {

            link.style.opacity = "0.7";

            setTimeout(() => {
                link.style.opacity = "";
            }, 250);

        });

    });

});
