import Image from "next/image";
import Button from "./component/Button";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-5 justify-center items-center">
      <h1 className="text-2xl underline">Home Page</h1>
      <div>
        <Button title="API Page" url="api"/>
      </div>
    </main>
  );
}
