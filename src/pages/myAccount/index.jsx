function MyAccount() {const user = JSON.parse(localStorage.getItem('account'));

  const handleEdit = () => {
    const nodes = document.getElementById('my-account').children;

    nodes[1].children[1].classList.toggle('hidden');
    nodes[2].children[1].classList.toggle('hidden');

    nodes[1].children[2].classList.toggle('hidden');
    nodes[2].children[2].classList.toggle('hidden');

    const mode = nodes[3].innerText;

    if (mode === 'Edit') {
      nodes[3].innerText = "Save";
      nodes[3].className = 'p-3 my-11 cursor-pointer bg-black text-center rounded-lg text-white';
      nodes[1].children[2].value = user.name;
      nodes[2].children[2].value = user.email;
    } else {
      nodes[3].innerText = "Edit";
      nodes[3].className = 'p-3 my-12 cursor-pointer bg-white border border-black/50 text-center rounded-lg text-black';
      const editUser = {
        name: nodes[1].children[2].value,
        email: nodes[2].children[2].value,
        password: user.password,
      };
      localStorage.setItem('account', JSON.stringify(editUser));
    }
  }

  return (
    <div id="my-account">
      <div className="flex justify-center items-center w-96 mb-6 relative">
        <h1>My Account</h1>
      </div>

      <span className="flex items-center mb-2">
        <p className="font-light mr-1">Name:</p>
        <p className="py-1">{user.name}</p>
        <input className="hidden p-1 border border-black/50 rounded-lg focus:outline-none" type="text" id="" />
      </span>
      <span className="flex items-center mb-1">
        <p className="font-light mr-2">Email:</p>
        <p className="py-1">{user.email}</p>
        <input className="hidden p-1 border border-black/50 rounded-lg focus:outline-none" type="text" id="" />
      </span>

      <div
        className="p-3 my-12 cursor-pointer bg-white border border-black/50 text-center rounded-lg text-black"
        onClick={() => handleEdit()}
      >
        Edit
      </div>
    </div>
  )
}

export default MyAccount
