import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PinDialog from "./PinDialog";
import { isPinVerified } from "@/lib/pinProtection";

interface ProtectedProjectProps {
  children: React.ReactNode;
}

const ProtectedProject = ({ children }: ProtectedProjectProps) => {
  const navigate = useNavigate();
  const [showPinDialog, setShowPinDialog] = useState(false);
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    // Check if PIN is verified when component mounts
    if (!isPinVerified()) {
      setShowPinDialog(true);
    }
    setIsVerifying(false);
  }, []);

  const handlePinSuccess = () => {
    setShowPinDialog(false);
  };

  const handlePinCancel = () => {
    // Redirect to home if user cancels
    navigate("/");
  };

  // Show nothing while verifying
  if (isVerifying) {
    return null;
  }

  // Show PIN dialog if not verified
  if (showPinDialog) {
    return (
      <PinDialog
        open={showPinDialog}
        onSuccess={handlePinSuccess}
        onCancel={handlePinCancel}
      />
    );
  }

  // Show content if verified
  return <>{children}</>;
};

export default ProtectedProject;
