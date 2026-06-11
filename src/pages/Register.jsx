import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";


const Register = () => {
 const { registerUser} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
     registerUser(email, password)
      .then(() => alert("Register success"))
      .catch(() => alert("Register failed"));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
      
           <input onChange={(e) => setEmail(e.target.value)} placeholder="Email"  className="input input-bordered"  required />
       
        </div>
        <div className="form-control">
      
          <input onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
    
      </form>
    </div>
  </div>
</div>

  );
};


export default Register;