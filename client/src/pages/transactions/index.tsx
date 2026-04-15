import PageLayout from "@/components/page-layout";
import AddTransactionDrawer from "@/components/transaction/add-transaction-drawer";
import TransactionTable from "@/components/transaction/transaction-table";

export default function Transactions() {
  return (
    <PageLayout
      title="Transactions"
      subtitle="Track and manage all your income and expenses"
      addMarginTop
      rightAction={<AddTransactionDrawer />}
    >
      <TransactionTable pageSize={20} />
    </PageLayout>
  );
}