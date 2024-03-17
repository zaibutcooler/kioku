import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { LandingFooter } from "@/components/navigations/landing/landing-footer"
import { LandingNavbar } from "@/components/navigations/landing/landing-navbar"

export default function NotFoundPage() {
  return (
    <div>
      <div className="h-screen">
        <LandingNavbar />
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex items-center justify-center">
            <main className="grid min-h-full place-items-center bg-background ">
              <div className="text-center">
                <p className="text-base font-semibold text-primary">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-6 text-base leading-7 text-muted-foreground">
                  Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link href="/" className={buttonVariants({})}>
                    Go back home
                  </Link>
                  <Link
                    href="#"
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    Contact support <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  )
}
