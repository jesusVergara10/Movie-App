import { useContext } from "react";
import useInput from "../../../customHooks/useImput"
import FormContainer from "./FormStyled";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../context/userContext";



const Login = () => {
  const navigate = useNavigate();
  const userName = useInput("text", "userName");
  const pass = useInput("password", "pass");
  const {authenticateUser} = useContext(userContext)

  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    var atempLoginSuccesfull = authenticateUser(userName.input.userName, pass.input.pass)
    if(atempLoginSuccesfull){
        navigate("/")
    }else{
      alert ("datos de login incorrectos")
    }
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <form action="">
        <label htmlFor="">
          Usuario
          <input {...userName} />
        </label>
        <label htmlFor="">
          Contraseña
          <input {...pass} />
        </label>
        <button>Login</button>
      </form>
    </FormContainer>
  );
};

export default Login;