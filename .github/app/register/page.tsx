import { RegistrationForm } from "@/components/registration-form"

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold">Webinar Hub</h1>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <a href="/" className="text-sm font-medium hover:underline">
              Home
            </a>
            <a href="/register" className="text-sm font-medium hover:underline">
              Register
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container max-w-2xl py-12 md:py-16 lg:py-20 px-4 md:px-6">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Register for the Webinar</h1>
              <p className="text-muted-foreground">
                Fill out the form below to secure your spot for our upcoming webinar.
              </p>
            </div>
            <RegistrationForm />
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

