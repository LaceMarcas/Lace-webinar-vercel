"use server"

import { revalidatePath } from "next/cache"

// This would typically connect to a database
// For demo purposes, we're using an in-memory array
const registrations: any[] = [
  {
    id: "1",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    company: "Acme Inc.",
    jobTitle: "Product Manager",
    howHeard: "social",
    questions: "Will there be a Q&A session?",
    marketingConsent: true,
    createdAt: new Date("2025-02-15").toISOString(),
  },
  {
    id: "2",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    company: "Tech Solutions",
    jobTitle: "Software Engineer",
    howHeard: "friend",
    questions: "",
    marketingConsent: false,
    createdAt: new Date("2025-02-20").toISOString(),
  },
]

export async function registerAttendee(formData: any) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real app, you would save to a database
  const newRegistration = {
    id: String(registrations.length + 1),
    ...formData,
    createdAt: new Date().toISOString(),
  }

  registrations.push(newRegistration)

  // In a real app, you might send a confirmation email here

  revalidatePath("/admin")
  return { success: true }
}

export async function getRegistrations() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // In a real app, you would fetch from a database
  return registrations
}

