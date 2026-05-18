import { useState } from "react";
import Button from "../common/Button";
import Modal from "../common/Modal";
import useToast from "../../hooks/useToast";

export default function QuickActions() {
  const [showModal, setShowModal] = useState(false);
  const { showToast } = useToast();

  const handleInvoice = () => {
    showToast("Invoice created successfully", "success");
    setShowModal(false);
  };

  return (
    <>
      <div className="flex gap-3 flex-wrap">
        <Button onClick={() => showToast("User added", "success")}>
          Add User
        </Button>

        <Button onClick={() => showToast("Report generated", "success")}>
          Generate Report
        </Button>

        <Button onClick={() => setShowModal(true)}>
          Create Invoice
        </Button>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Create Invoice"
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Simulate invoice generation action.
          </p>

          <Button onClick={handleInvoice}>
            Confirm Invoice
          </Button>
        </div>
      </Modal>
    </>
  );
}