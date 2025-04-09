import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: useRuntimeConfig().private.gmailMailTo,
            pass: useRuntimeConfig().private.gmailAppPassword,
        },
    })

    try {
        await transporter.sendMail({
            from: `"فرم سایت" <${body.email || 'no-reply@example.com'}>`,
            to: useRuntimeConfig().private.gmailMailTo,
            subject: 'پیام جدید از لندینگ پانل ماموت',
            text: `نام: ${body.name}
                شماره تماس: ${body.phone}
                پیام:
                ${body.description}`,
        })

        return {success: true}
    } catch (error) {
        return {success: false, error: error.message}
    }
})
