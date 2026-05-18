import { useState } from "react";
import Button from "../components/common/Button";
import Alert from "../components/common/Alert";
import useToastContext from "../hooks/useToastContext";

export default function Settings() {
  const [saved, setSaved] = useState(false);
  const { showToast } = useToastContext();

  const handleSave = () => {
    setSaved(true);
    showToast("Settings saved successfully", "success");

    setTimeout(() => {
      setSaved(false);
    }, 4000);
  };

  return (
    <div className="space-y-6">
      {saved && (
        <Alert
          type="success"
          message="Your settings were updated successfully."
        />
      )}

      <Button onClick={handleSave}>
        Save Changes
      </Button>
    </div>
  );
}