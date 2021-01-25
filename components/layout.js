import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-gray-900">
        <Alert preview={preview} />
        <main className="">{children}</main>
      </div>
      <Footer />
    </>
  )
}
