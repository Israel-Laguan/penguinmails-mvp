export const loginContent = {
  title: "Welcome Back!",
  description: "Enter your credentials to access your dashboard.",
  email: {
    label: "Email",
    placeholder: "you@example.com",
  },
  password: {
    label: "Password",
  },
  forgotPassword: "Forgot password?",
  loginButton: {
    default: "Login",
    loading: "Logging In...",
  },
  errors: {
    title: "Login Failed",
    incorrectPassword: "Incorrect password",
    userNotFound: "User not found",
    generic: "Login failed. Please check your credentials.",
  },
  signup: {
    text: "Don't have an account?",
    link: "Sign Up",
  },
} as const;
