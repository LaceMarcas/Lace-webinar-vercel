import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ClockIcon, MapPinIcon, UsersIcon } from "lucide-react"

export default function Home() {
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Upcoming Webinar
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Modern Web Development Strategies
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our expert panel as they discuss the latest trends and best practices in web development. Learn
                  how to build scalable, performant applications for the modern web.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      Register Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-xl border bg-card p-6 shadow">
                <div className="flex items-center gap-4">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Date</h3>
                    <p className="text-sm text-muted-foreground">March 25, 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <ClockIcon className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Time</h3>
                    <p className="text-sm text-muted-foreground">10:00 AM - 12:00 PM EST</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPinIcon className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-sm text-muted-foreground">Online (Zoom)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <UsersIcon className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-medium">Speakers</h3>
                    <p className="text-sm text-muted-foreground">Sarah Johnson, Michael Chen, David Rodriguez</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What You'll Learn</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our webinar covers essential topics for modern web developers
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-2">
                    <div className="h-6 w-6 text-primary">1</div>
                  </div>
                  <h3 className="text-xl font-bold">Frontend Frameworks</h3>
                  <p className="text-muted-foreground text-center">
                    Compare React, Vue, and Angular to determine the best fit for your projects
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-2">
                    <div className="h-6 w-6 text-primary">2</div>
                  </div>
                  <h3 className="text-xl font-bold">Performance Optimization</h3>
                  <p className="text-muted-foreground text-center">
                    Techniques to improve loading times and user experience
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-2">
                    <div className="h-6 w-6 text-primary">3</div>
                  </div>
                  <h3 className="text-xl font-bold">API Design</h3>
                  <p className="text-muted-foreground text-center">
                    Best practices for creating robust and scalable APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
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

