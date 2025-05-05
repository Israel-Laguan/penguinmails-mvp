"use client"

import EmailAccountForm, { type EmailAccountFormValues } from "@/components/accounts/email-account-form"
import { useState } from "react"

export default function NewAccountContent() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (data: EmailAccountFormValues) => {
    setIsLoading(true)
    try {
      // TODO: Implement API call
      console.log(data)
    } catch (error) {
      console.error("Failed to create account:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return <EmailAccountForm onSubmit={handleSubmit} isLoading={isLoading} />
}
