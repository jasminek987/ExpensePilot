import SignUpForm from "./_component/signup-form";
import Logo from "@/components/logo/logo";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-color)] px-4">
      <div className="w-full max-w-md bg-white dark:bg-card rounded-xl shadow-md p-8">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Logo url="/" />
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Start tracking your expenses with ExpensePilot
          </p>
        </div>

        {/* Form */}
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;