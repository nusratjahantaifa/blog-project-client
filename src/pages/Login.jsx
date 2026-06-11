import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then(() => alert("Login success"))
      .catch(() => alert("Login failed"));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
      
           <input onChange={(e) => setEmail(e.target.value)} placeholder="Email"  className="input input-bordered"  required />
          {/* <input type="email" placeholder="email" className="input input-bordered" required /> */}
        </div>
        <div className="form-control">
      
          <input onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div>
           <button onClick={googleLogin}>Login with Google</button>
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default Login;