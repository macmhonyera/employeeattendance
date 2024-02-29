import React from "react";
import Auth from "../layout/auth/Auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginFail, loginPending, loginSucess } from "./Login/LoginSlice";
import { userLogin } from "../api/userApi";
import { ErrorMessage, Field, Form, Formik } from "formik";
import PageLoader from "../components/Loader";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((state) => state.login);

  const initialValues = {
    email: "",
    password: "",
  };
  const Validation = Yup.object().shape({
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email "),

    password: Yup.string().required("Password is a required field."),
  });

  const handleSubmit = async (data) => {
    dispatch(loginPending());
    try {
      const isAuth = await userLogin(data);

      if (isAuth) {
        dispatch(loginSucess());
        navigate("/dashboard");
      }
    } catch (error) {
      dispatch(loginFail(error.response.data.message));
    }
  };

  React.useEffect(() => {
    sessionStorage.getItem("access_token") && navigate("/dashboard");
  }, [navigate]);

  return (
    <Formik
      validationSchema={Validation}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {() => (
        <Auth title="Login">
          <Form className="max-w-[450px] w-full mx-auto bg-gray-100 p-2 px-8 rounded-lg font-sans">
            {error && (
              <div className="px-2">
                <div
                  className=" border mb-3 text-center font-medium border-red-200 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <span className="block sm:inline">{error}</span>
                  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    {/* <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg> */}
                  </span>
                </div>
              </div>
            )}
            &nbsp;
            <div className="flex flex-col text-gray-800 py-2">
              Email
              <Field
                type="email"
                name="email"
                placeholder=""
                className="rounded-lg mt-2 p-2 border-solid border-gray-300"
                id="email"
              />
            </div>
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-xm italic"
            />
            <div className="flex flex-col text-gray-800 py-2">
              Password
              <Field
                type="password"
                name="password"
                placeholder="  ************"
                className="rounded-lg mt-2 p-2 border-solid border-gray-300 w-full"
                id="password"
              />
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-xm italic"
            />
            <div className="flex justify-end text-gray-900 py-2 space-x-10">
              <Link
                to="#"
                className="underline hover:decoration-solid text-[#c67640]"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="">
              {isLoading ? (
                <PageLoader />
              ) : (
                <div>
                  <button
                    className="w-full my-5 py-2 bg-[#d1703c] shadow-black text-semibold rounded-lg text-white"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
          </Form>
        </Auth>
      )}
    </Formik>
  );
};

export default Login;
