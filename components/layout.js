import Alert from "../components/alert";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="">
        <Alert preview={preview} />
        <main className="">{children}</main>
      </div>
    </>
  );
}
