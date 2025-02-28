import Image from "next/image";
import Header from "./components/Header";
import { Banner } from "./components/Banner";

export default function Home() {
  return (
    // <div>
    //   <Header />
    //   <Banner />
    // </div>
    <div className="relative bg-gradient-to-b pb-8">      
      <Header />       
      <main className="relative overflow-y-scroll p-8 pb-20 scrollbar-hide lg:px-16">
        <Banner />
      </main>
    </div>

  );
}
