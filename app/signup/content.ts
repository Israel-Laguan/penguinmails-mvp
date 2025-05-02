export const signupContent = {
  header: {
    title: "Create your Penguin Mails Account",
    description: "Join an existing team or start your own.",
  },
  form: {
    typeLabel: "Are you joining an existing business or creating a new account?",
    options: {
      new: "Create New",
      existing: "Join Existing",
    },
    labels: {
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      businessId: "Business ID",
      referralCode: "Referral Code",
      firstName: "First Name",
      lastName: "Last Name",
      businessName: "Business Name",
    },
    placeholders: {
      email: "you@example.com",
      businessId: "Enter the ID provided by your team",
      referralCode: "Enter the code provided by your team",
      firstName: "John",
      lastName: "Doe",
      businessName: "Your Company Name",
    },
  },
  alerts: {
    joining: {
      title: "Joining a Team",
      description: "Make sure you have the correct Business ID and Referral Code from your administrator.",
    },
    newAccount: {
      title: "Creating New Account",
      description: "You are signing up for the {plan} plan. You can manage your subscription later.",
    },
    planRequired: {
      title: "Plan Required",
      description: "Please select a plan before creating a new account.",
    },
    error: {
      title: "Error",
      passwordMismatch: "Passwords do not match.",
      noPlan: "Cannot create a new account without selecting a plan. Please visit the Pricing page.",
      missingBusinessInfo: "Business ID and Referral Code are required to join an existing business.",
      generic: "Signup failed. Please try again.",
      selectPlan: "Please select a plan from the Pricing page before creating a new account.",
    },
  },
  buttons: {
    createAccount: "Create Account",
    joinBusiness: "Join Business",
    signingUp: "Signing Up...",
  },
  footer: {
    haveAccount: "Already have an account?",
    login: "Login",
  },
};
