// RMIT University Vietnam 
// Course: COSC2430 Web Programming
// Semester: 2024A 
// Assessment: Full-Stack Web Application 
// Author: Lam Quang Nhat, Bui Phuong Dong Quan, Nguyen Minh Khoi, Tran Gia Hung, Tran Nguyen Khang 
// ID: s3980424, s3975939, s3978862, s3979486, s3935748 
// Acknowledgement: W3School, TailwindCss, ChatGPT, Passport documentation, RemixIcons, Freepik, Web Dev Simplified 

$(document).ready(() => {
    const cateSidemenu = $("#cate-sidemenu")
    const hamburgerMenu = $("#hamburger-menu")
    const filterMenu = $('#filter-menu')

    // Create a backdrop and hide it
    const offcanvasBackdrop = $("<div>")
    offcanvasBackdrop.attr('id', 'offcanvas-backdrop')
    offcanvasBackdrop.fadeOut(0)
    $("body").append(offcanvasBackdrop)

    $("#cate-btn").on('click', () => {
        offcanvasBackdrop.fadeIn(300)
        cateSidemenu.toggleClass("show")
    })

    $("#navbar-burger").on('click', () => {
        offcanvasBackdrop.fadeIn(300)
        hamburgerMenu.toggleClass("show")
    })

    $("#filter-btn").on('click', () => {
        offcanvasBackdrop.fadeIn(300)
        filterMenu.toggleClass("show")
    })

    // Hide the sidemenu when clicked outside
    offcanvasBackdrop.on('click', () => {
        offcanvasBackdrop.fadeOut(300)
        cateSidemenu.removeClass("show")
        hamburgerMenu.removeClass("show")
        filterMenu.removeClass("show")
    })
})
