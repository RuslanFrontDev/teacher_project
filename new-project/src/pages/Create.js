import { useEffect, useState } from "react";
import Input from "../component/Input";
import Button from "../component/Button";
import axios from "axios";
//"/get-data"
//"/create-data"
function Create() {
  const [users, setUsers] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  
  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const submitHandle=(e)=>{
    e.preventDefault()
      axios.post("http://localhost:9000/create-user",users)
      .then(res=>console.log(res))
  }

  return (
    <>
      <div className="form">
        <form onSubmit={submitHandle}>
          <Input
            name="name"
            placeholder="ad yaz.."
            className="name"
            onChange={handleChange}
            value={users.name}
            type="text"
          />
          <Input
            name="username"
            placeholder="soyad yaz.."
            className="username"
            onChange={handleChange}
            value={users.username}
            type="text"
          />
          <Input
            name="email"
            placeholder="email yaz.."
            className="email"
            onChange={handleChange}
            value={users.email}
            type="email"
          />
          <Input
            name="password"
            placeholder="password yaz.."
            className="password"
            onChange={handleChange}
            value={users.password}
            type="password"
          />
          <Button type='submit'/>
        </form>
      </div>
    </>
  );
}
export default Create;
