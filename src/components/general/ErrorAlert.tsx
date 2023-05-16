interface ErrorAlertProps {
  error: string;
}
export default function ErrorAlert({ error }: ErrorAlertProps) {
  return (
    <div
      role="alert"
      className="  flex h-full w-full place-content-center items-end "
    >
      <div className="w-full rounded border  border-red-400 bg-red-100 px-4 py-3 text-red-700">
        <p>{error}</p>
      </div>
    </div>
  );
}
