// RMIT University Vietnam 
// Course: COSC2430 Web Programming
// Semester: 2024A 
// Assessment: Full-Stack Web Application 
// Author: Lam Quang Nhat, Bui Phuong Dong Quan, Nguyen Minh Khoi, Tran Gia Hung, Tran Nguyen Khang 
// ID: s3980424, s3975939, s3978862, s3979486, s3935748 
// Acknowledgement: W3School, TailwindCss, ChatGPT, Passport documentation, RemixIcons, Freepik, Web Dev Simplified 


$(document).ready(() => {
    const userProfile = $('#user')
    const dropDown = $('<div>', {
        id: 'user-drop-down'
    })
    const viewProfile = $('<a>', {
        id: 'user-drop-down-links',
        text: 'View profile'
    })
    const logOut = $('<a>', {
        id: 'user-drop-down-links',
        text: 'Log out'
    })

    const userType = userProfile.data('user-type').toLowerCase()
    const profileLink = `/users/${userType}/profile`

    viewProfile.attr('href', profileLink)
    logOut.attr('href', '/auth/logout')

    dropDown.append(viewProfile)
    dropDown.append(logOut)
    dropDown.append(viewProfile, $('<br>'), logOut);

    userProfile.append(dropDown)

    userProfile.on('click', () => {
        dropDown.toggle()
    })
})