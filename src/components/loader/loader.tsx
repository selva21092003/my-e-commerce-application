export default function Loader() {
  return (
    <div
      className="animate-spin inline-block size-10 border-3 border-current border-t-transparent text-green-600 rounded-full"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
