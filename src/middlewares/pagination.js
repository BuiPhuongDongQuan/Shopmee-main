// RMIT University Vietnam 
// Course: COSC2430 Web Programming
// Semester: 2024A 
// Assessment: Full-Stack Web Application 
// Author: Lam Quang Nhat, Bui Phuong Dong Quan, Nguyen Minh Khoi, Tran Gia Hung, Tran Nguyen Khang 
// ID: s3980424, s3975939, s3978862, s3979486, s3935748 
// Acknowledgement: W3School, TailwindCss, ChatGPT, Passport documentation, RemixIcons, Freepik, Web Dev Simplified

export default function pagination(req, res, next) {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 12

    const skip = (page - 1) * limit

    req.pagination = {
        page,
        limit,
        skip
    }

    next()
}