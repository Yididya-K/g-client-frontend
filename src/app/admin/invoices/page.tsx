"use client";
import { useRouter } from "next/navigation";
import InputField from "@/src/components/admin/Inputs/inputField";
import InvoiceTable from "@/src/components/admin/invoiceTable";
import Button from "@/src/components/common/button";
import { Plus, Search } from "lucide-react";
import { FC, useState } from "react";

interface Invoice {
  id: number;
  learner: string;
  email: string;
  amount: string;
  date: string;
  status: "Paid" | "Pending";
  avatarUrl: string;
}

const invoices: Invoice[] = Array(6)
  .fill({
    id: 1,
    learner: "John Doe",
    email: "JohnDoe10@gmail.com",
    amount: "$450.00",
    date: "Nov 17, 2024",
    status: "Paid",
    avatarUrl: "https://placehold.co/40x40/FACC15/FFFFFF?text=JD",
  })
  .map((item, i) => ({
    ...item,
    id: i + 1,
    status: i % 3 === 0 ? "Pending" : "Paid", // alternate status
  }));

const InvoiceList: FC = () => {

  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const handleCreate = () => {
    setSelectedInvoice(null);
 
  };

  const handleEdit = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
  
  };

  const handleCancel = () => {
   
    setSelectedInvoice(null);
  };
  const router = useRouter();
  const handleSave = (formData: {
    learner: string;
    amount: string;
    date: string;
    status: string;
    details: string;
  }) => {
    const invoiceData: Invoice = {
      id: selectedInvoice ? selectedInvoice.id : invoices.length + 1,
      learner: formData.learner,
      email: selectedInvoice ? selectedInvoice.email : "new.email@example.com", // Replace with actual logic
      amount: formData.amount,
      date: formData.date,
      status: formData.status as "Paid" | "Pending",
      avatarUrl: selectedInvoice
        ? selectedInvoice.avatarUrl
        : "https://placehold.co/40x40/FACC15/FFFFFF?text=NA", // Replace with actual logic
    };

    if (selectedInvoice) {
      // update logic here
      console.log("Updating invoice:", invoiceData);
    } else {
      // create logic here
      console.log("Creating invoice:", invoiceData);
    }
    handleCancel();
  };
  return (
    <div className="p-6 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Invoices</h2>
      </div>

      <div className="flex items-center mb-4 gap-4">
        <InputField
          type="text"
          placeholder="Search Invoices"
          leftIcon={<Search className="h-4 w-4 " />}
          className="flex-1 min-w-0"
        />
        <Button
          onClick={() => router.push("/admin/invoices/new")}
          className="flex-shrink-0"
          rightIcon={<Plus className="h-4 w-4 ml-2" />}

        >
          Create invoice
        </Button>
      </div>

      <InvoiceTable data={invoices} resultsPerPageOptions={[5, 10, 25]} />

    </div>
  );
};

export default InvoiceList;
