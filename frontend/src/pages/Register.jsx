import Form from "../components/Form";
import Marvel from "../components/Marvel";

function Register() {
  return (
    <div>
      <div>
        <Marvel />
      </div>
      <Form route="api/user/register/" method="register" />;
    </div>
  );
}

export default Register;
