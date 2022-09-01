import firebase from "firebase";

export interface ChatComponentInterface {
    messageText: string;
    recieverEmail: string;
    senderEmail: string;
    time: firebase.firestore.Timestamp
}