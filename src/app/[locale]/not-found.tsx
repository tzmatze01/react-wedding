import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-black flex flex-col align-center justify-center w-full">
      <h1>Not found – 404!</h1>
      <div>
        <Link href="/home">Go back to Home</Link>
      </div>
    </div>
  );
}
