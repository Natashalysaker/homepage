export default function Intro() {
  return (
    <section className="h-screen bg-">
      <div className=" flex flex-col w-full md:w-3/4 md:justify-between py-28 ">
        <h3 className="font-rob font-medium text-3xl md:text-4xl mx-1.5 sm:mx-1 md:mx-20 lg:m-44 xl:mx-56">
          Hi there
        </h3>
        <h2 className="font-rob font-normal text-4xl md:text-6xl mx-1.5 sm:mx-1 md:mx-20 lg:m-44 xl:mx-56">
          My name is Natasha Lysaker
        </h2>
        <h1 className="font-rob text-left text-6xl md:text-7xl  tracking-tighter leading-tight md:pr-8 mx-1.5 sm:mx-1 md:mx-20 lg:m-44 xl:mx-56">
          I am a <span className="font-semibold">front-end develuper</span> and
          a <span className="font-semibold">ux-designer</span> from Norway
        </h1>
      </div>
    </section>
  );
}
