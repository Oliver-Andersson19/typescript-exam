type roleType = "ADMIN" | "USER"

type UserType = {
    username: string;
    password: string;
    role: roleType;
}

type BookingType = {
    namn: string;
    participants: Array<UserType>;
    maxParticipants: number;
}


export const bookingMockData: BookingType[] = [
    {
        namn: "Bröstpass",
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