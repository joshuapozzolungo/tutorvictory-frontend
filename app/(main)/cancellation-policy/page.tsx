import policies from "./data.json";

export default function CancellationPolicy() {
  return (
    <div className="w-full min-h-screen px-75 py-25">
      <section className="flex flex-col gap-y-5">
        <h1 className="text-center page-heading">Cancellation Policy</h1>
        <h2 className="text-center page-subheading">Legal Information & Notices</h2>
      </section>

      <section className="pt-10">
        <hr className="pt-10 border-t-2 border-t-black/10"/>
      </section>

      <section>
        {policies.sections.map((p) => (
          <div className="flex flex-col gap-y-3">
            <h2>{p.title}</h2>
            <h3>{p.body}</h3>
          </div>
        ))}
      </section>
    </div>
  )
}
