import { useContext } from "react";
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../context";

function SignIn() {
  const context = useContext(ShoppingCartContext);

  let user = localStorage.getItem('account');
  user = JSON.parse(user);

  const handleLogin = () => {
    localStorage.setItem('sign-in', true);
    context.setIsLogged(true);
  }

  const loginBtn = (user) => {
    if (user.name) {
      return (
        <Link to={'/'}>
          <div
            className="p-4 my-4 cursor-pointer bg-black text-center rounded-lg text-white"
            onClick={() => handleLogin()}
          >Log In</div>
        </Link>
      );
    } else {
      return (
        <div
          className="p-4 my-12 bg-white border border-black/50 text-center rounded-lg text-black/50"
        >
          Log In
        </div>
      )
    }
  };

  const signupBtn = (user) => {
    if (!user.name) {
      return (
        <Link to={'/sign-up'}>
          <div
            className="p-4 my-4 cursor-pointer bg-black text-center rounded-lg text-white"
            onClick={() => console.log("Sign Up")}
          >Sign Up</div>
        </Link>
      );
    } else {
      return (
        <div
          className="p-4 my-12 bg-white border border-black/50 text-center rounded-lg text-black/50"
        >
          Sign Up
        </div>
      )
    }
  }


  return (
    <div>
      <div className="flex justify-center items-center w-96 mb-6 relative text-xl">
        <h1>Welcome</h1>
      </div>
      <div>
        <span>
          <div className="flex items-center">
            <p className="mr-1 font-light">Email: </p>
            <p className="">{user.email}</p>
          </div>
          <div className="flex items-center">
            <p className="mr-1 font-light">Password: </p>
            <p className="">{user.password}</p>
          </div>
        </span>

        {loginBtn(user)}

        <p className="cursor-pointer underline underline-offset-4 text-center text-xs">Forgot my password</p>

        {signupBtn(user)}
      </div>
    </div>
  )
}

export default SignIn
