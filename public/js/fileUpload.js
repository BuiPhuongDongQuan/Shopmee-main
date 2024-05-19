// RMIT University Vietnam 
// Course: COSC2430 Web Programming
// Semester: 2024A 
// Assessment: Full-Stack Web Application 
// Author: Lam Quang Nhat, Bui Phuong Dong Quan, Nguyen Minh Khoi, Tran Gia Hung, Tran Nguyen Khang 
// ID: s3980424, s3975939, s3978862, s3979486, s3935748 
// Acknowledgement: W3School, TailwindCss, ChatGPT, Passport documentation, RemixIcons, Freepik, Web Dev Simplified 

// Register filePond plugins
FilePond.registerPlugin(
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateSize,
    FilePondPluginFileValidateType
)

FilePond.parse(document.body)

// Create file upload for products
const productCover = document.querySelector('.productCover')
FilePond.create(productCover, {
    acceptedFileTypes: ['image/png', 'image/jpeg'],
    maxFileSize: '2MB',
    imageResizeTargetWidth: 1024,
    imageResizeTargetHeight: 1024,
})

// Create file upload for user profile
const profileCover = document.querySelector('.profileCover')
FilePond.create(profileCover, {
    acceptedFileTypes: ['image/png', 'image/jpeg'],
    maxFileSize: '1MB',
    imageResizeTargetWidth: 1024,
    imageResizeTargetHeight: 1024,
})

