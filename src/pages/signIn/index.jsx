import { Link } from "react-router-dom"

function SignIn() {
  return (
    <div>
      <div className="flex justify-center items-center w-96 mb-6 relative text-xl">
        <h1>Welcome</h1>
      </div>
      <div>
        <span>
          <p className="flex items-center">
            <p className="mr-1 font-light">Email: </p>
            <p className="">danifanton@gmail.com</p>
          </p>
          <p className="flex items-center">
            <p className="mr-1 font-light">Password: </p>
            <p className="">1234</p>
          </p>
        </span>

        <div className="p-4 my-4 cursor-pointer bg-black text-center rounded-lg text-white">Log In</div>

        <p className="cursor-pointer underline underline-offset-4 text-center text-xs">Forgot my password</p>

        <Link to={'/sign-up'}>
          <div
            className="p-4 my-12 bg-white border border-black/50 text-center rounded-lg text-black/50"
          >
            Sign up
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SignIn
