export type roleType = "ADMIN" | "USER"

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
