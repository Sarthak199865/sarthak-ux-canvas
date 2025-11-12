// PIN Protection Utility
// Default PIN: 1998 (obfuscated as base64)

const OBFUSCATED_PIN = "MTk5OA=="; // base64 encoded "1998"
const PIN_SESSION_KEY = "portfolio_pin_verified";

export const validatePin = (inputPin: string): boolean => {
  const decodedPin = atob(OBFUSCATED_PIN);
  return inputPin === decodedPin;
};

export const isPinVerified = (): boolean => {
  return sessionStorage.getItem(PIN_SESSION_KEY) === "true";
};

export const setPinVerified = (): void => {
  sessionStorage.setItem(PIN_SESSION_KEY, "true");
};

export const clearPinVerification = (): void => {
  sessionStorage.removeItem(PIN_SESSION_KEY);
};

// To change the PIN: 
// 1. Update the default PIN value
// 2. Encode it to base64: btoa("YOUR_NEW_PIN")
// 3. Replace OBFUSCATED_PIN value above
