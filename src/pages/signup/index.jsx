function SignUp() {
  return (
    <div>
      <div className="flex justify-center items-center w-96 mb-6 relative text-xl">
        <h1>Welcome</h1>
      </div>
      <form>
        <div className="flex flex-col mb-4">
          <label className="text-sm mb-1" htmlFor="">Your name:</label>
          <input
            type="text"
            placeholder="John"
            className="p-2 text-sm border border-black/50 rounded-lg focus:outline-none"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-sm mb-1" htmlFor="">Your email:</label>
          <input
            type="text"
            placeholder="hi@hellowworld.com"
            className="p-2 text-sm border border-black/50 rounded-lg focus:outline-none"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-sm mb-1" htmlFor="">Your password:</label>
          <input
            type="password"
            placeholder="************"
            className="p-2 text-sm border border-black/50 rounded-lg focus:outline-none"
          />
        </div>

        <div className="p-4 my-4 cursor-pointer bg-black text-center rounded-lg text-white">Create</div>
      </form>
    </div>
  )
}

export default SignUp
