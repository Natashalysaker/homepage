import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className=" bg-gray-1000">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-8xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/basic-features/pages"
              className="  text-blue-300 font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              2021© natashalysaker.com
            </a>
          
          </div>
        </div>
      </Container>
    </footer>
  )
}
