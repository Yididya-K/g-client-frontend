"use client";
import InvoiceForm from "@/src/components/admin/forms/invoiceForm";
import { useRouter } from "next/navigation";

export default function NewInvoicePage() {
  const router = useRouter();

  return (

    <div className="p-6">

        <div className="p-6 ">
              <div className="flex justify-between items-center mb-4 ">
                <h2 className="text-md font-semibold text-gray-600 ">Invoices

                   <span className="text-black border-l-2 ml-2 p-2">Create Invoice</span>
                </h2>
              </div>
            </div>
      <InvoiceForm
        onCancel={() => router.push("/invoices")}
        onSave={(invoice) => {
          console.log("Created Invoice:", invoice);
          router.push("/admin/invoices");
        }}
      />
    </div>
  );
}
