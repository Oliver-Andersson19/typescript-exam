import { DatesType, UserType } from "./types"


export const bookingMockData: DatesType[] = [
    {
        date: "2023-09-07",
        workouts: [
        {
            title: "Bröstpass",
            participants: [
                {
                    username: "Greta"
                },
                {
                    username: "Anders"
                },
                {
                    username: "Pelle"
                },
                {
                    username: "Eva"
                },
                {
                    username: "Yves"
                },
                {
                    username: "Gertrud"
                },
                {
                    username: "Kalle"
                },
                {
                    username: "Ove"
                }
            ],
            maxParticipants: 8
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
    },
    {
        username: "Anders",
        password: "123",
        role: "USER"
    },
    {
        username: "Pelle",
        password: "123",
        role: "USER"
    },
    {
        username: "Eva",
        password: "123",
        role: "USER"
    },
    {
        username: "Yves",
        password: "123",
        role: "USER"
    },
    {
        username: "Gertrud",
        password: "123",
        role: "USER"
    },
    {
        username: "Kalle",
        password: "123",
        role: "USER"
    },
    {
        username: "Ove",
        password: "123",
        role: "USER"
    }
]