import { useState } from "react";

const RegisterUser = () => {
  const [name, setName] = useState("");
  const [ph, setPh] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {name,email,ph,password};
    console.log(data)
    fetch(`http://localhost:4000/api/v1/register`,{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
    }).then((result)=>{
        console.log(result)
    })
  };
  return (
    <>
      <div>
        <h1>Register User</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Enter Your Phone Number"
            value={ph}
            onChange={(e) => setPh(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button>Submit</button>
        </form>

      </div>
    </>
  );
};

export default RegisterUser;
