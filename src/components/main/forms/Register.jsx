import { useState, useEffect } from "react";
import useInput from "../../../customHooks/useImput";
import FormContainer from "./FormStyled";
import { useNavigate } from "react-router-dom";
import { registerAccount } from "../../../services/registerServices";


const Register = () => {
  const navigate = useNavigate();
  const userName = useInput("text", "userName")
  const name = useInput("text", "name");
  const lastName = useInput("text", "lastName");
  const pass = useInput("password", "pass");
  const gender = useInput("radio", "gender");

  const handleSubmit = (e) => {
    e.preventDefault();
    var registrationSuccesful = registerAccount(userName.input.userName, name.input.name, lastName.input.lastName, pass.input.pass, gender.input.gender)
    if (registrationSuccesful){
        navigate("/login")
    }else{
      alert ("el usuario no pudo ser registrado")
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
          Nombre
          <input {...name} />
        </label>
        <label htmlFor="">
          Apellido
          <input {...lastName} />
        </label>
        <label htmlFor="">
          Contraseña
          <input {...pass} />
        </label>

        <div>
          <label htmlFor="">
            F
            <input {...gender} value="F" />
          </label>
          <label>
            M
            <input {...gender} value="M" />
          </label>
        </div>
        <button>Registrarse</button>
      </form>
    </FormContainer>
  );
};

export default Register;
