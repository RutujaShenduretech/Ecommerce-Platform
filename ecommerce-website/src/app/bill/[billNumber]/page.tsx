
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Bill {
  id: number;
  billNumber: string;
  total: string;
  createdAt: string;
}

interface BillItem {
  id: number;
  productName: string;
  quantity: number;
  price: string;
}

export default function BillPage() {
  const params = useParams<{ billNumber: string }>();
  const billNumber = params.billNumber;

  const [bill, setBill] = useState<Bill | null>(null);
  const [items, setItems] = useState<BillItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBill() {
      try {
        const response = await fetch(
          `/api/bills?billNumber=${encodeURIComponent(billNumber)}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Unable to load bill.");
        }

        setBill(data.bill);
        setItems(data.items);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Something went wrong."
        );
      } finally {
        setLoading(false);
      }
    }

    if (billNumber) fetchBill();
  }, [billNumber]);

  if (loading) return <main className="p-10 text-center">Loading bill...</main>;
  if (error) return <main className="p-10 text-center text-red-600">{error}</main>;
  if (!bill) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const shipping = Math.max(0, Number(bill.total) - subtotal);

  return (
    <main className="min-h-screen bg-gray-100 p-4 sm:p-10">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-6 shadow-lg sm:p-10">
        <div className="mb-8 flex items-start justify-between border-b pb-6">
          <div>
            <h1 className="text-3xl font-bold text-black">ShopSphere</h1>
            <p className="mt-1 text-sm text-gray-500">Order Invoice</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-green-600">PAID / CONFIRMED</p>
            <p className="mt-2 text-sm text-gray-500">Bill No.</p>
            <p className="font-semibold">{bill.billNumber}</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm text-gray-500">Bill Date</p>
          <p className="font-medium">
            {new Date(bill.createdAt).toLocaleString("en-IN")}
          </p>
        </div>

        <h2 className="mb-3 text-lg font-bold">Order Details</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="border-b bg-gray-50">
              <tr>
                <th className="p-3">Product</th>
                <th className="p-3 text-center">Qty</th>
                <th className="p-3 text-right">Price</th>
                <th className="p-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="p-3">{item.productName}</td>
                  <td className="p-3 text-center">{item.quantity}</td>
                  <td className="p-3 text-right">
                    ₹{Number(item.price).toFixed(2)}
                  </td>
                  <td className="p-3 text-right">
                    ₹{(Number(item.price) * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="ml-auto mt-6 max-w-xs space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping / adjustments</span>
            <span>₹{(Number(bill.total) - subtotal).toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-t pt-3 text-lg font-bold">
            <span>Total</span>
            <span>₹{Number(bill.total).toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center">
          <p className="font-semibold">Thank you for shopping with ShopSphere!</p>
          <p className="mt-1 text-sm text-gray-500">
            We appreciate your order.
          </p>
        </div>

        <div className="mt-8 flex justify-center print:hidden">
          <button
            onClick={() => window.print()}
            className="rounded-lg bg-black px-8 py-3 font-semibold text-white hover:bg-gray-800"
          >
            Print Bill
          </button>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }
          @page {
            margin: 15mm;
          }
        }
      `}</style>
    </main>
  );
}
