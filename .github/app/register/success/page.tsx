import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold">Webinar Hub</h1>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link href="/register" className="text-sm font-medium hover:underline">
              Register
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-md py-12 px-4">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="rounded-full bg-primary/10 p-3">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Registration Successful!</h1>
              <p className="text-muted-foreground">
                Thank you for registering for our webinar. We've sent a confirmation email with all the details.
              </p>
            </div>
            <div className="space-y-4 w-full">
              <div className="rounded-lg border bg-card p-4">
                <h2 className="font-semibold">Webinar Details</h2>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>
                    <span className="font-medium">Date:</span> March 25, 2025
                  </li>
                  <li>
                    <span className="font-medium">Time:</span> 10:00 AM - 12:00 PM EST
                  </li>
                  <li>
                    <span className="font-medium">Location:</span> Online (Zoom)
                  </li>
                </ul>
                <p className="mt-2 text-sm">The webinar link will be sent to your email 24 hours before the event.</p>
              </div>
              <Button asChild className="w-full">
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Webinar Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

