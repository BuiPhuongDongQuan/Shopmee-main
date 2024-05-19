// RMIT University Vietnam 
// Course: COSC2430 Web Programming
// Semester: 2024A 
// Assessment: Full-Stack Web Application 
// Author: Lam Quang Nhat, Bui Phuong Dong Quan, Nguyen Minh Khoi, Tran Gia Hung, Tran Nguyen Khang 
// ID: s3980424, s3975939, s3978862, s3979486, s3935748 
// Acknowledgement: W3School, TailwindCss, ChatGPT, Passport documentation, RemixIcons, Freepik, Web Dev Simplified 

$(document).ready(function () {
    const editableQuantity = $("#editableQuantity")
    const quantityDecrease = $("#quantityDecrease")
    const quantityIncrease = $("#quantityIncrease")
    const stock = $('#stock').data('stock')

    // Prevent the field from getting non-numeric value
    editableQuantity.keypress(e => {
        if (isNaN(String.fromCharCode(e.which)) || e.which == 13) e.preventDefault()
    });

    editableQuantity.on('input', function () {
        if (parseInt($(this).text()) >= 999 || parseInt($(this).text()) >= stock) {
            $(this).text($(this).text().slice(0, -1))
        }
    })

    // Incase the user leave the field empty, default it to 1
    editableQuantity.on('blur', function() {
        if ($(this).is(':empty')) {
            $(this).text(1)
        }
    })

    quantityDecrease.on('click', (e) => {
        let currentValue = parseInt(editableQuantity.text())
        if (currentValue <= 1) return
        editableQuantity.text(currentValue - 1)
    })

    quantityIncrease.on('click', (e) => {
        let currentValue = parseInt(editableQuantity.text())
        if (currentValue >= 999 || currentValue >= stock) return
        editableQuantity.text(currentValue + 1)
    })
})