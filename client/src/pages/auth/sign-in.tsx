import SignInForm from "./_component/signin-form";
import Logo from "@/components/logo/logo";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-color)] px-4">
      <div className="w-full max-w-md bg-white dark:bg-card rounded-xl shadow-md p-8">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Logo url="/" />
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Sign in to manage your expenses with ExpensePilot
          </p>
        </div>

        {/* Form */}
        <SignInForm />
      </div>
    </div>
  );
};

export default SignIn;