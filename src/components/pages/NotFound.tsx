import ErrorTemplate from "../templates/ErrorTemplate";

function NotFound() {
  return (
    <ErrorTemplate code={404} expression="Not Found" message="The page you are looking for does not exist." />
  )
}

export default NotFound