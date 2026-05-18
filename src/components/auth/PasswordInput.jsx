import { useState } from "react";
import Input from "../common/Input";

function PasswordInput({
  label,
  placeholder,
  value,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <div>
      <Input
        label={label}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      <button
        type="button"
        onClick={togglePassword}
        className="mt-2 text-sm text-blue-600 dark:text-blue-400"
      >
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}

export default PasswordInput;