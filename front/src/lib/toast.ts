export function showToast(message: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("fg:toast", { detail: { message } }),
  );
}
