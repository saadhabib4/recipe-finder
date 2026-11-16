import { Link } from "react-router-dom"

const ErrorPage = ({ title, message }) => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1>{title}</h1>
        <p>{message}</p>
        <Link to={'/'}
            className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
            Back to Home
        </Link>
    </div>
  )
}

export default ErrorPage