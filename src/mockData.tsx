type roleType = "ADMIN" | "USER"

export type UserType = {
    username: string;
    password: string;
    role: roleType;
}

export type WorkoutType = {
    title: string,
    participants: {username: string}[],
    maxParticipants: number
}

export type DatesType = {
    date: string,
    workouts: Array<WorkoutType>,
}


export const bookingMockData: DatesType[] = [
    {
        date: "6/9",
        workouts: [

        ]
    },
    {
        date: "7/9",
        workouts: [
        {
            title: "Bröstpass",
            participants: [
            ],
            maxParticipants: 20
        },
        {
            title: "Ryggpass",
            participants: [
                
            ],
            maxParticipants: 20
        },
        {
            title: "Benpass",
            participants: [

            ],
            maxParticipants: 20
        },
        ]
    },
    {
        date: "8/9",
        workouts: [
            {
                title: "Bröstpass",
                participants: [

                ],
                maxParticipants: 20
            },
            {
                title: "Ryggpass",
                participants: [

                ],
                maxParticipants: 20
            }
        ]
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