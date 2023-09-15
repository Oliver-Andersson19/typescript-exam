import { DatesType, UserType, WorkoutType } from "../types";



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
        throw new Error("localstorage is null")
    }
}


export const createUser = ({username, password, role}: UserType): void => {
    let data = localStorage.getItem("userData");
    
    if(data !== null) {

        const dataJSON: UserType[] = JSON.parse(data)
        dataJSON.push({username, password, role})
        localStorage.setItem("userData", JSON.stringify(dataJSON))
        
    } else {
        throw new Error("localstorage is null")
    }
}


// createUser({
//     username: "asd",
//     password: "asd",
//     role: "USER",
// })


export const bookWorkout = (username: string, date: DatesType, workout: WorkoutType): void => {
    let data = localStorage.getItem("bookingData");
    
    if(data !== null) {

        const dataJSON: DatesType[] = JSON.parse(data)
        const selectedDateIndex = dataJSON.findIndex((d) => d.date === date.date);
        const selectedWorkoutIndex = dataJSON[selectedDateIndex].workouts.findIndex(
            (w) => w.title === workout.title);
        
        // Pusha in användaren in i participants listan på rätt pass
        dataJSON[selectedDateIndex].workouts[selectedWorkoutIndex].participants.push({username: username})
        localStorage.setItem("bookingData", JSON.stringify(dataJSON))
        
    } else {
        throw new Error("localstorage is null")
    }
}


export const removeUser = (username: string, date: DatesType, workout: WorkoutType): void => {
    let data = localStorage.getItem("bookingData");
    
    if(data !== null) {

        const dataJSON: DatesType[] = JSON.parse(data)

        const selectedDateIndex = dataJSON.findIndex((d) => d.date === date.date);
        const selectedWorkoutIndex = dataJSON[selectedDateIndex].workouts.findIndex(
            (w) => w.title === workout.title);
        const selectedParticipantIndex = dataJSON[selectedDateIndex].workouts[selectedWorkoutIndex].participants.findIndex(
            (u) => u.username === username);
        
        dataJSON[selectedDateIndex].workouts[selectedWorkoutIndex].participants.splice(selectedParticipantIndex, 1)
        localStorage.setItem("bookingData", JSON.stringify(dataJSON))

    } else {
        throw new Error("localstorage is null")
    }

}

 
export const removeWorkout = (workout: WorkoutType, date: DatesType): void => {
    let data = localStorage.getItem("bookingData");
    
    if(data !== null) {

        const dataJSON: DatesType[] = JSON.parse(data)

        const selectedDateIndex = dataJSON.findIndex((d) => d.date === date.date);
        const selectedWorkoutIndex = dataJSON[selectedDateIndex].workouts.findIndex(
            (w) => w.title === workout.title);
        
        dataJSON[selectedDateIndex].workouts.splice(selectedWorkoutIndex, 1)
        localStorage.setItem("bookingData", JSON.stringify(dataJSON))

    } else {
        throw new Error("localstorage is null")
    }
}


export const createNewWorkout = (date: string, title: string, maxParticipants: number): void => {
    let data = localStorage.getItem("bookingData");
    
    console.log(date, title, maxParticipants)
    
    if(data !== null) {

        const dataJSON: DatesType[] = JSON.parse(data)
        const selectedDateIndex = dataJSON.findIndex((d) => d.date === date);
        
        if(selectedDateIndex === -1) {

            dataJSON.push({
                date: date,
                workouts: [
                    {
                        title: title,
                        participants: [],
                        maxParticipants: maxParticipants
                    }
                ]
            })
        } else {

            dataJSON[selectedDateIndex].workouts.push({
                title: title,
                participants: [],
                maxParticipants: maxParticipants
            })

        }
        
        //Sortera passen i rätt ordning
        dataJSON.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA.getTime() - dateB.getTime();
        });
        

        localStorage.setItem("bookingData", JSON.stringify(dataJSON))

    } else {
        throw new Error("localstorage is null")
    }

}


