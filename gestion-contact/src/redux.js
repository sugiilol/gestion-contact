import {configureStore, createSlice} from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';


const contactSlice = createSlice({
    name: "contact",
    initialState: [
        {
            id: uuidv4(),
            surname: "Leblanc",
            name: "Sébastien",
            city: "Saint-Savournin",
            phone: "0659053831",
            email: "leblanc.sbt@gmail.com"
        },
        {
            id: uuidv4(),
            surname: "Patoulatchi",
            name: "Michel",
            city: "Marseille",
            phone: "0647589123",
            email: "patou@gmail.com"
        }
    ],
    reducers : {
        addContact: (state, action) => {
            // "contact/addContact"
            const newContact = {
                id: uuidv4(),
                surname: action.surname,
                name: action.name,
                city: action.city,
                phone: action.phone,
                email: action.email
            }
            state.push(newContact)
        },
        deleteContact: (state, action) => {
            // "contact/deleteContact"
        },
    }
})

export const contactStore = configureStore({
    reducer:{
        contact: contactSlice.reducer
    }
})