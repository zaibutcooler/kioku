"use client"

import { useEffect } from "react"
import * as Sentry from "@sentry/nextjs"

const ErrorPage = ({
  error,
}: {
  error: Error & { digest?: string }
}): JSX.Element => {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <div className="h-screen flex items-center justify-center">
      <h2>Something went wrong!</h2>
    </div>
  )
}

export default ErrorPage
