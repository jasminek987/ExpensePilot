import { useNavigate } from "react-router-dom";
import TransactionForm from "@/components/transaction/transaction-form";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { PROTECTED_ROUTES } from "../../routes/common/routePath";

export default function AddTransaction() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="rounded-full"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-semibold">Add Transaction</h1>
            <p className="text-muted-foreground text-sm">Record a new income or expense</p>
          </div>
        </div>
        <TransactionForm onCloseDrawer={() => navigate(PROTECTED_ROUTES.OVERVIEW)} />
      </div>
    </div>
  );
}