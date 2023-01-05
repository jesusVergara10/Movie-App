import { useContext } from "react";
import useInput from "../../../customHooks/useImput";
import FormContainer from "./FormStyled";
import { updateAccount } from "../../../services/registerServices";
import { userContext } from "../../../context/userContext";
import { getAccount } from "../../../services/registerServices";
import { useNavigate } from "react-router-dom";


const EditProfile = () => {
  const navigate = useNavigate();
  const { user } = useContext(userContext);
  var userToEdit = getAccount(user);
  const name = useInput("text", "name", userToEdit.name);
  const lastName = useInput("text", "lastName", userToEdit.lastName);
  const pass = useInput("password", "pass", userToEdit.password);
  const gender = useInput("radio", "gender", userToEdit.gender);

  const handleSubmit = (e) => {
    e.preventDefault();
    var updateSuccesful = updateAccount(
      user,
      name.input.name,
      lastName.input.lastName,
      pass.input.pass,
      gender.input.gender
    );
    if (updateSuccesful) {
      navigate("/")
    } else {
      alert("el usuario no pudo ser actualizado");
    }
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <form action="">
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
        <button>Actualizar</button>
      </form>
    </FormContainer>
  );
};

export default EditProfile;
