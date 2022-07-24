import './App.css';
import SignIn from './components/SignIn';
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth"
import Line from './components/Line';

function App() {
  const [user] = useAuthState(auth)
  return (
    <div>{user ? <Line /> : <SignIn />}</div>
  );
}

export default App;
