import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../ContextProvider/AuthContextProvider";
import { getAuth, updateProfile } from "firebase/auth";
import GoogleIcon from '@mui/icons-material/Google';
import { app } from "../../../firebase/FirebaseConfig/firebaseConfig";

const auth = getAuth(app);
const Register = () => {
  const location = useLocation();
  const fromPath = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const {
    handleManualRegister,
    handleGoogleRegister,
    handleGithubRegister,
    handleUpdateProfile,
    user,
    handleManualLogout,
  } = useContext(AuthContext);

  const [error, setError] = useState("");

  const handleRegister = (e) => {
    console.log(e.target);
    e.preventDefault();
    const name = e.target.name.value;
    const pass = e.target.password.value;
    const photo_URL = e.target.photo_URL.value;
    const confirm_password = e.target.confirm_password.value;
    const email = e.target.email.value;

    if (email.length < 1) {
      return setError("You cannot submit empty email fields.");
    } else if (pass.length < 6) {
      return setError("Password should be at least 6 characters");
    } else if (confirm_password.length < 6) {
      return setError("Confirm Password should be at least 6 characters");
    } else if (pass !== confirm_password) {
      return setError("Password and Confirm Password does not match");
    }

    handleManualRegister(email, pass)
      .then((result) => {
        console.log(result);

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo_URL,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        setError("Login Sucessfully");
        handleManualLogout();
        navigate("/login");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  console.log(error);

  if (
    error ==
    "Firebase: Password should be at least 6 characters (auth/weak-password)."
  ) {
    setError("Password should be at least 6 characters");
  }
  if (error == "Firebase: Error (auth/email-already-in-use).") {
    setError("Email Already Exits.Please provide another Email");
  }
  console.log(user);

  const handleGoogle = () => {
    handleGoogleRegister()
      .then((result) => {
        handleManualLogout();
        navigate("/login");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div>
      <section className="h-fit lg:my-10 my-5 text-white">
        <div className="h-full">
          <div className="g-6 lg:flex lg:flex-row flex flex-col-reverse h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <form onSubmit={handleRegister}>
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="mb-0 mr-4 text-lg">Register in with</p>

                  <button
                  onClick={handleGoogle}
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    <GoogleIcon></GoogleIcon>
                  </button>

                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </button>
                </div>

                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                    Or
                  </p>
                </div>

                <div className="my-5 space-y-4 text-black">
                  <div className="flexNameEmail flex gap-3">
                    <div className="w-full">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-white dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-white dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="photo_URL"
                      className="block mb-2 text-sm font-medium text-white  dark:text-white"
                    >
                      Photo url
                    </label>
                    <input
                      type="text"
                      name="photo_URL"
                      id="photo_URL"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="https://unsplash/img"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-white  dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirm_password"
                      className="block mb-2 text-sm font-medium text-black  dark:text-white"
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                  </div>
                </div>

                <p className="text-red-500 my-3">{error}</p>

                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Register
                  </button>

                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Already have an account?
                    <Link to="/login">
                      <a className="text-danger ml-2 underline transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
                        Login
                      </a>
                    </Link>
                  </p>
                </div>
              </form>
            </div>

            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="HeroVerse.png"
                className="w-full h-[500px]"
                alt="Sample image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
