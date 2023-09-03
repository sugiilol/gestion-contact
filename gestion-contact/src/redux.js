import { configureStore, createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';
import { addDoc, getDocs, collection, doc, deleteDoc, updateDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase.config'

const querySnapshot = await getDocs(collection(db, "contacts"));
const arrContacts = []

const refreshContactsState = () => {
    querySnapshot.forEach((doc) => {
        const contact = {
            id: uuidv4(),
            idFireStore: doc.id,
            surname: doc.data().surname,
            name: doc.data().name,
            city: doc.data().city,
            phone: doc.data().phone,
            email: doc.data().email
        }
        arrContacts.push(contact)
        //console.log(doc.id, " => ", doc.data());
        //console.log(arrContacts)
    });
}

refreshContactsState()

const contactSlice = createSlice({
    name: "contact",
    initialState: [...arrContacts],
    reducers: {
        addContact: (state, action) => {
            // "contact/addContact"

            const idNewContact = uuidv4()

            setDoc(doc(db, "contacts", idNewContact), {
                id: idNewContact,
                surname: action.payload.surname,
                name: action.payload.name,
                city: action.payload.city,
                phone: action.payload.phone,
                email: action.payload.email
            });

            // try {
            //     const docRef = addDoc(collection(db, "contacts"), {
            //         id: uuidv4(),
            //         surname: action.payload.surname,
            //         name: action.payload.name,
            //         city: action.payload.city,
            //         phone: action.payload.phone,
            //         email: action.payload.email
            //     });
            //     console.log("Document written with ID: ", docRef.id);
            // } catch (e) {
            //     console.error("Error adding document: ", e);
            // }

            const newContact = {
                id: idNewContact,
                idFireStore: idNewContact,
                surname: action.payload.surname,
                name: action.payload.name,
                city: action.payload.city,
                phone: action.payload.phone,
                email: action.payload.email
            }
            state.push(newContact)

        },
        deleteContact: (state, action) => {
            // "contact/deleteContact"
            state = state.filter((contact) => contact.idFireStore !== action.payload)
            deleteDoc(doc(db, "contacts", action.payload));
            return state
        },
        editContact(state, action) {
            //"contact/editContact"
            console.log("1=>", state)
            state = state.filter((contact) => contact.id !== action.payload.id)
            const newContact = {
                id: action.payload.id,
                idFireStore: action.payload.idFireStore,
                surname: action.payload.surname,
                name: action.payload.name,
                city: action.payload.city,
                phone: action.payload.phone,
                email: action.payload.email
            }

            const cityRef = doc(db, 'contacts', action.payload.idFireStore);

            // Remove the 'capital' field from the document
            updateDoc(cityRef, {
                id: action.payload.id,
                surname: action.payload.surname,
                name: action.payload.name,
                city: action.payload.city,
                phone: action.payload.phone,
                email: action.payload.email
            });


            state.push(newContact)
            //console.log("2=>", state)
            return state
        }
    }
})

export const contactStore = configureStore({
    reducer: {
        contact: contactSlice.reducer
    }
})