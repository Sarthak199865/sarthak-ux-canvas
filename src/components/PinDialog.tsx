import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { validatePin, setPinVerified } from "@/lib/pinProtection";

interface PinDialogProps {
  open: boolean;
  onSuccess: () => void;
  onCancel: () => void;
}

const PinDialog = ({ open, onSuccess, onCancel }: PinDialogProps) => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate a small delay for better UX
    setTimeout(() => {
      if (validatePin(pin)) {
        setPinVerified();
        setPin("");
        onSuccess();
      } else {
        setError("Incorrect PIN. Please try again.");
        setPin("");
      }
      setIsLoading(false);
    }, 300);
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setPin("");
      setError("");
      onCancel();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-montreal text-2xl">Enter PIN</DialogTitle>
          <DialogDescription className="font-montreal">
            This project is private — please enter the access PIN to continue.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="password"
              inputMode="numeric"
              placeholder="Enter PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="text-center text-lg tracking-wider font-montreal"
              autoFocus
              disabled={isLoading}
            />
            {error && (
              <p className="text-sm text-destructive font-montreal">{error}</p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full font-montreal"
            disabled={!pin || isLoading}
          >
            {isLoading ? "Verifying..." : "Submit"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PinDialog;
