import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import PasswordInput from "./PasswordInput";
import FormValidationMessage from "./FormValidationMessage";
import AuthCard from "./AuthCard";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  }

  return (
    <AuthCard
      title="Welcome Back"
      subtitle="Login to your dashboard account"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <FormValidationMessage message="" />

        <Button className="w-full">
          Login
        </Button>
      </form>
    </AuthCard>
  );
}

export default LoginForm;