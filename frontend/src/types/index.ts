export type User = {
    handle: string,
    name: string,
    email: string,
    _id: string,
    description: string,
    image: string
}

export type RegisterForm = Pick<User, 'handle' | 'name' | 'email'> & {
    password: string,
    password_confirmation: string
}

export type LoginForm = Pick<User, 'email'> & {
    password: string
}

export type ProfileForm = Pick<User, 'handle' | 'description'>