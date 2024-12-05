import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef();
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL: photoURL || USER_AVATAR, // Use Firebase photoURL or fallback
                })
              );
            })
            .catch((error) => {
              setErrorMessage("Profile update error: " + error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(
            addUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL || USER_AVATAR, // Fallback to default if null
            })
          );
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }
  };

  const toggleSignInForm = (event) => {
    event.preventDefault();
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="bg-image" className="bg-slate-900 h-screen w-screen object-cover" />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className=" md:w-[25%] w-[75%] p-10 absolute my-32 mx-auto left-0 right-0 bg-black bg-opacity-80">
        <h1 className="font-semibold text-3xl py-4 text-white md:font-bold ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <>
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="py-2 text-white my-4 bg-gray-700 w-full rounded-md p-2 focus:outline-none"
            />
            {/* <input
              type="text"
              placeholder="Surname"
              className="py-2 my-4 bg-gray-700 w-full rounded-md p-2 text-white focus:outline-none"
            /> */}
          </>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="py-2 my-4 bg-gray-700 w-full rounded-md p-2 text-white focus:outline-none"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="py-2 bg-gray-700 my-4 w-full rounded-md p-2 text-white focus:outline-none"
        />

        {errorMessage && <p className="text-red-800 font-semibold text-xl py-2">{errorMessage}</p>}

        <button className="py-4 my-4 bg-red-700 w-full rounded-md" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-500 py-4">
          <button
            className="text-white hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
