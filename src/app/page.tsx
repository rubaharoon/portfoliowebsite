import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Link from "next/link";
export default function Home() {
  return (
    <>
     <Hero />
     <Footer />
     <Link href="/about"></Link>
     <Link href="/blogs"></Link>
<Link href="/contact"></Link>
<Link href="/skills"></Link>
    </>
  );
}
        

    

       