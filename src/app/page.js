import Image from "next/image";
import Button from "./component/Button";
import { connectDB } from "./(database)/conn/db";

export const metadata = {
  title:'this is title'
}

export default function Home() {
  connectDB()
  return (
    <main className="flex flex-col justify-center gap-3 items-center">
      <h1 className="text-2xl underline">Home Page</h1>
      <div>
        <Button title="API Page" url="api"/>
      </div>
    </main>
  );
}
