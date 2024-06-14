import Form from "../components/Form";
import Marvel from "../components/Marvel";
function Login() {
  return (
    <div>
      <div>
        <Marvel />
      </div>
      <Form route="api/token/" method="login" />;
    </div>
  );
}

export default Login;
