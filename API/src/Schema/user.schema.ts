import {object,string,TypeOf} from 'zod'
export const createUserSchema = object({
    body: object({
        username: string({
            required_error: 'Name is required'
        }),

        email: string({
            required_error: 'email is required'
        }).email("Not a valid email"),

        password: string({
            required_error: 'Password is required'
        }).min(6, "Password too short"),

        passwordConfirmation: string({
            required_error: 'passwordConfirmation is required'
        }),

    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"]
    })
})


export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>,"body.passwordConfirmation">