export function GetStarted() {
  return (
    <section className="flex flex-col gap-2 min-w-96">
      <h1 className="text-5xl font-extrabold">More than just shorter links</h1>
      <h2 className="text-xl text-neutral-400">
        Build your brand's recoginition and get detailed insights on how your
        links are performing.
      </h2>
      <button
        type="button"
        className="btn btn-accent btn-lg rounded-3xl w-fit my-4 hover:bg-cyan-300 text-base-100"
      >
        Get Started
      </button>
    </section>
  );
}
