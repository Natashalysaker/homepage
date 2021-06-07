export default function Intro() {
  return (
    <section className="h-screen bg- flex  items-center">
      <div className=" flex flex-col justify-between w-full md:w-3/4  ">
        <h3 className="font-rob font-col font-medium text-3xl mx-4 sm:mx-1 md:mx-20 lg:m-44 xl:mx-56">
          Hi there
        </h3>
        <h2 className="font-rob font-col font-normal text-4xl mx-4 sm:mx-1 md:mx-20 lg:m-44 xl:mx-56">
          My name is Natasha Lysaker
        </h2>
        <h1 className="font-rob font-col text-left text-6xl md: lg:text-7xl tracking-tighter leading-tight md:pr-8 mx-4 sm:mx-1 md:mx-20 lg:m-44 xl:mx-56">
          I am a <span className="font-semibold">front-end develuper</span> and
          a <span className="font-semibold">ux-designer</span> from Norway
        </h1>
      </div>
    </section>
  );
}
