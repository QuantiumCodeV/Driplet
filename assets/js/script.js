var toggleMenuButton = document.querySelector(".mobile_menu");
var menuBlock = document.querySelector(".mobile_menu_content");
var menuBlockItems = document.querySelector(".header_list__mobile")
var menuClose = document.querySelector('.mobile_menu__close')
var body = document.body


toggleMenuButton.addEventListener("click", function (e) {
    var backdrop = document.createElement('div')
    backdrop.classList.add("backdrop")
    body.appendChild(backdrop);
    setTimeout(function () {
        backdrop.classList.add('active')
    }, 200)

    menuBlock.classList.add("active")
    body.classList.add('menu-open')
})

document.addEventListener("click", function (e) {
    var backdropElement = document.querySelector('.backdrop')
    if (toggleMenuButton.contains(e.target)) {
        return
    }
    if (backdropElement && !menuBlock.contains(e.target) || menuBlockItems.contains(e.target) || menuClose.contains(e.target)) {
        menuBlock.classList.remove("active")
        body.classList.remove('menu-open')

        backdropElement.classList.remove('active')
        setTimeout(function () {
            backdropElement.remove();
        }, 500)
    }
})