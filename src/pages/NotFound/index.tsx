import { Link } from 'react-router-dom'
export default function NotFound () {
  return (
    <section>
      <h1>Not Found 404</h1>
      <p>
        Couldn't find the route:
        <strong className='px-1 underline cursor-not-allowed'>
          {window.location.href}
        </strong>
      </p>
      <Link to='/'>Back to Home</Link>
    </section>
  )
}
