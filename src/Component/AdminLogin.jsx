import React, { useEffect } from 'react';

const AdminLogin = () => {

    const handleSubmitForm = (e) =>{
        e.preventDefault()

        const form = e.target;
        const username = form.username.value;
        const password = form.password.value;
        const data = {
            username, password
        }

        fetch('http://localhost:3000/admin_login', {
                method: "POST",
                headers: {
                    'Content-Type': "Application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                if(data.status === 200){
                    localStorage.setItem("isAdmin", "True")
                    window.location.reload()
                }
                return alert(data.message)
            })
    }

    return (
         <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center mb-4 ">Admin Login</h2>
          <form onSubmit={handleSubmitForm}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="username" 
              name="username" placeholder="username" className="input input-bordered w-full" />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password"
              name='password' placeholder="Password" className="input input-bordered w-full" />
            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary w-full">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default AdminLogin;