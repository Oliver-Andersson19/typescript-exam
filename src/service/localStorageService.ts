import { BookingType, UserType } from "../mockData";



export const getUsers = (): UserType[] => {
    const data = localStorage.getItem("userData");
    if(data !== null) {
        return JSON.parse(data)
    } else {
        throw new Error("users is null")
    }
}

export const getBookings = (): BookingType[] => {
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