import Link from "next/link";

export default function Hero() {

  return (
    <section className="w-full flex flex-col items-center text-center gap-y-5">
      <h1 className="hero-heading max-w-[50%]">You have the potential to succeed.</h1>
      <h3 className="hero-subheading">We'll help you reach it.</h3>
      <div className="flex gap-x-3">
        <button className="call-to-action-button-primary">Get Started</button>
        <Link href="/about" className="call-to-action-button-secondary"> Read what we do</Link>
      </div>
    </section>
  );
}
