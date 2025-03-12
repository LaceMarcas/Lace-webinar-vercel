import { Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RegistrationsList } from "@/components/registrations-list"
import { DownloadIcon } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg font-semibold">Webinar Hub Admin</h1>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link href="/admin" className="text-sm font-medium hover:underline">
              Admin
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8 px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Registrations</h1>
              <p className="text-muted-foreground">Manage webinar registrations and attendees</p>
            </div>
            <Button className="w-full md:w-auto">
              <DownloadIcon className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
          </div>
          <Suspense fallback={<div>Loading registrations...</div>}>
            <RegistrationsList />
          </Suspense>
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

