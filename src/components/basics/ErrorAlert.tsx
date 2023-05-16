interface ErrorAlertProps {
  error: string;
}
export default function ErrorAlert({ error }: ErrorAlertProps) {
  return (
    <div
      className="bg-danger-100 text-danger-700 mb-4 rounded-lg px-6 py-5 text-base"
      role="alert"
    >
      {error}
    </div>
  );
}
