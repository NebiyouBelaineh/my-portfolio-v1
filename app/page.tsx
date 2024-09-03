import Image from "next/image";

export default function Home() {
  return (
    <main className="flex">
      <section className="p-2 md:p-4 w-full">
        <div className="py-6 flex justify-between">
          <div className="flex p-4">
            <h1>
              Hi, I'm Nebiyou. <span>A Software and Biomedical Engineer</span>
            </h1>
          </div>
          <div className="flex p-4">
            <h2>Hero Section</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
