export default function About() {
  return (
    <section className="bg-blue-1100 py-28 flex flex-col lg:flex-row items-center">
      <div className="py-28 flex flex-col lg:flex-row items-center ">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-2 ">
          <img className="rounded-full" src="../../img/natasha-about.jpg"></img>
        </div>

        <h2>About me</h2>

        <p>
          I am a frontend-develuper based in a littel city in Norway called
          Lillestrøm, i design
        </p>
      </div>
    </section>
  );
}
