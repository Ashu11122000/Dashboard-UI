import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import PasswordInput from "./PasswordInput";
import AuthCard from "./AuthCard";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      name,
      email,
      password,
    });
  }

  return (
    <AuthCard
      title="Create Account"
      subtitle="Start your SaaS journey today"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <Input
          label="Full Name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

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
          placeholder="Create a password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <Button className="w-full">
          Create Account
        </Button>
      </form>
    </AuthCard>
  );
}

export default SignupForm;