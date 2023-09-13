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
        date: "2023-09-07",
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
        {
            title: "Axelpass",
            participants: [

            ],
            maxParticipants: 20
        },
        {
            title: "Helkroppspass",
            participants: [

            ],
            maxParticipants: 20
        },
        ]
    },
    {
        date: "2023-09-08",
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