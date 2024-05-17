// RMIT University Vietnam 
// Course: COSC2430 Web Programming
// Semester: 2024A 
// Assessment: Full-Stack Web Application 
// Author: Lam Quang Nhat, Bui Phuong Dong Quan, Nguyen Minh Khoi, Tran Gia Hung, Tran Nguyen Khang 
// ID: s3980424, s3975939, s3978862, s3979486, s3935748 
// Acknowledgement: W3School, TailwindCss, ChatGPT, Passport documentation, RemixIcons, Freepik, Web Dev Simplified 

$(document).ready(() => {
    const panel_filter = $(".filter-panel")
    const subpanel_filter = $(".filter-subpanel")
    const show_icon = $(".show-icon")
    const hide_icon = $(".hide-icon")

    for (let i = 0; i < panel_filter.length; i++) {
        panel_filter.eq(i).on('click', () => {
            subpanel_filter.eq(i).toggleClass('hidden')
            show_icon.eq(i).toggleClass('hidden')
            hide_icon.eq(i).toggleClass('hidden')
        })
    }

    // Toggle sort dropdown
    $('.sort').on('click', () => {
        console.log('hell')
        $('.drop-down-container').toggle()
    })
})
