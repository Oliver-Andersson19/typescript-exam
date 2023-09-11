import { DatesType, UserType, WorkoutType } from "../mockData";



export const getUsers = (): UserType[] => {
    const data = localStorage.getItem("userData");
    if(data !== null) {
        return JSON.parse(data)
    } else {
        throw new Error("users is null")
    }
}

export const getBookings = (): DatesType[] => {
    const data = localStorage.getItem("bookingData");
    if(data !== null) {
        return JSON.parse(data)
    } else {
        throw new Error("bookings is null")
    }
}


export const createUser = ({username, password, role}: UserType): void => {
    let data = localStorage.getItem("userData");
    
    if(data !== null) {

        const dataJSON: UserType[] = JSON.parse(data)
        dataJSON.push({username, password, role})
        localStorage.setItem("userData", JSON.stringify(dataJSON))
        
    } else {
        throw new Error("users is null")
    }
}

export const bookWorkout = (username: string, date: DatesType, workout: WorkoutType): void => {
    let data = localStorage.getItem("bookingData");
    
    if(data !== null) {

        const dataJSON: DatesType[] = JSON.parse(data)
        const selectedDateIndex = dataJSON.findIndex((d) => d.date === date.date);
        const selectedWorkoutIndex = dataJSON[selectedDateIndex].workouts.findIndex(
            (w) => w.title === workout.title);
            
        dataJSON[selectedDateIndex].workouts[selectedWorkoutIndex].participants.push({username: username})
        localStorage.setItem("bookingData", JSON.stringify(dataJSON))
        
    } else {
        throw new Error("bookings is null")
    }
}