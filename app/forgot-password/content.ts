export const forgotPasswordContent = {
  title: "Forgot Your Password?",
  description: {
    initial: "Enter your email address below and we'll send you a link to reset your password.",
    success: "Check your inbox for the reset link.",
  },
  form: {
    email: {
      label: "Email",
      placeholder: "you@example.com",
    },
    button: {
      sending: "Sending...",
      send: "Send Reset Link",
    },
  },
  alerts: {
    error: {
      title: "Error",
    },
    success: {
      title: "Email Sent!",
      description: (email: string) => 
        `If an account exists for ${email}, you will receive an email with password reset instructions shortly. Please check your spam folder if you don't see it.`,
    },
  },
  footer: {
    text: "Remembered your password?",
    linkText: "Login",
  },
};
