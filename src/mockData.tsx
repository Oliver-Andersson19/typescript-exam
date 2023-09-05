type roleType = "ADMIN" | "USER"

export type UserType = {
    username: string;
    password: string;
    role: roleType;
}

export type BookingType = {
    namn: string;
    date: string;
    participants: Array<UserType>;
    maxParticipants: number;
}


export const bookingMockData: BookingType[] = [
    {
        namn: "Bröstpass",
        date: "6/9",
        participants: [
        {
            username: "Johndoe",
            password: "123",
            role: "ADMIN"
        }
        ],
        maxParticipants: 20
    },
    {
        namn: "Ryggpass",
        date: "7/9",
        participants: [
        {
            username: "Johndoe",
            password: "123",
            role: "ADMIN"
        }
        ],
        maxParticipants: 20
    }
]

export const userMockData: UserType[] = [
    {
        username: "John doe",
        password: "123",
        role: "ADMIN"
    },
    {
        username: "Greta",
        password: "123",
        role: "USER"
    }
]