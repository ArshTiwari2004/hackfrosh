import { Slot } from "expo-router";
import FirebaseContextProvider from "../contexts/firebaseContext";

export default RootLayout = () => {
  return (
    <FirebaseContextProvider>
      <Slot />
    </FirebaseContextProvider>
  );
};