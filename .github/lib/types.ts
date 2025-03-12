export interface Registration {
  id: string
  firstName: string
  lastName: string
  email: string
  company?: string
  jobTitle?: string
  howHeard?: string
  questions?: string
  marketingConsent: boolean
  createdAt: string
}

