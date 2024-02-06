import Image from "next/image";
import { Title } from "./components/common/title";

export default function Home() {
  return (
    <>
      <div className="container flex items-center justify-center h-full w-full flex-1 gap-4">
        <div className="border border-foreground-500 rounded-md w-full h-full">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <Title>Activity Feed</Title>
          </div>
        </div>
      </div>
    </>
  );
}

