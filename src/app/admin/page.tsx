"use client";

import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { Wallet, Clock, FileText, Users } from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// Interface for Stat Card props
interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

// StatCard component
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  // Default background color for the icon area
}) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col hover:shadow-lg transition-shadow duration-300 h-[160px]">
      {/* Top section: Icon and Title */}
      <div className="flex items-start top-0 space-x-4 mb-2 ">
        {" "}
        {/* Added space-x-4 for gap and mb-6 for space below */}
        <div>{icon}</div> {/* Icon with background */}
        <div>
          <p className="text-md font-medium text-gray-600">{title}</p>{" "}
          {/* Adjusted text style for title */}
        </div>
      </div>

      {/* Value section */}
      <div className="flex-grow flex justify-center items-center  bg-white h-[96px]">
        {" "}
        {/* Centered value, added margin-top */}
        <p className="text-xl font-bold text-gray-800">{value}</p>{" "}
        {/* Increased text size and weight for value */}
      </div>
    </div>
  );
};

// Interface for Invoice Item props
interface InvoiceItemProps {
  avatarUrl: string; // This will be the src for Next/Image
  name: string;
  description: string;
  amount: string;
}

// InvoiceItem component updated to use Next/Image
const InvoiceItem: React.FC<InvoiceItemProps> = ({
  avatarUrl,
  name,
  description,
  amount,
}) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
      <div className="flex items-center space-x-3">
        {/* Use Next.js Image component */}
        <div className="w-10 h-10 rounded-full overflow-hidden relative">
          {" "}
          {/* Added relative positioning and overflow-hidden for proper Image display */}
          <Image
            src={avatarUrl}
            alt={`${name}'s avatar`}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div>
          <p className="font-medium text-gray-800">{name}</p>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>
      <p className="font-semibold text-gray-800">{amount}</p>
    </div>
  );
};

// Placeholder data for the bar chart
const revenueData = [
  { month: "Jan", value: 12000 },
  { month: "Feb", value: 18000 },
  { month: "Mar", value: 15000 },
  { month: "Apr", value: 8000 },
  { month: "May", value: 13000 },
  { month: "Jun", value: 19000 },
  { month: "Jul", value: 21000 },
  { month: "Aug", value: 16000 },
  { month: "Sep", value: 18000 },
  { month: "Oct", value: 20000 },
  { month: "Nov", value: 22000 },
  { month: "Dec", value: 25000 },
];

// DashboardPage component
const DashboardPage: React.FC = () => {
  const invoiceItems: InvoiceItemProps[] = [
    {
      avatarUrl: "https://placehold.co/64x64/FACC15/FFFFFF.png?text=JC",
      name: "Jane Cooper",
      description: "Software Developer",
      amount: "$420.00",
    },
    {
      avatarUrl: "https://placehold.co/64x64/FACC15/FFFFFF.png?text=SN",
      name: "Savannah Nguyen",
      description: "Data Science",
      amount: "$420.00",
    },
    {
      avatarUrl: "https://placehold.co/64x64/F87171/FFFFFF.png?text=JB",
      name: "Jerome Bell",
      description: "Data Science",
      amount: "$420.00",
    },
    {
      avatarUrl: "https://placehold.co/64x64/34D399/FFFFFF.png?text=TW",
      name: "Theresa Webb",
      description: "Cloud Engineer",
      amount: "$420.00",
    },
    {
      avatarUrl: "https://placehold.co/64x64/BCA3FA/FFFFFF.png?text=RE",
      name: "Ralph Edwards",
      description: "Software Developer",
      amount: "$420.00",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 font-sans">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome back, John</p>
      </header>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Collected"
          value="$20,000"
          icon={<Wallet size={24} />}
        />
        <StatCard title="Pending" value="$10,000" icon={<Clock size={24} />} />
        <StatCard
          title="Total invoices"
          value="35"
          icon={<FileText size={24} />}
        />
        <StatCard
          title="Total Learners"
          value="50"
          icon={<Users size={24} />}
        />
      </div>

      {/* Main Content Area: Revenue Chart and Latest Invoices */}
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
        {/* Recent Revenue Section */}
        <div className="lg:col-span-1 py-6  ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Recent Revenue
            </h2>
          </div>
          {/* Bar Chart Placeholder */}
          <div className="h-[448px] flex items-end space-x-2 sm:space-x-3 md:space-x-1 px-2 overflow-x-auto pb-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={revenueData} barSize={24}>
                {/* Gradient Fill */}
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#01589A" stopOpacity={1} />
                    <stop offset="100%" stopColor="#D0E6F7" stopOpacity={0.3} />
                  </linearGradient>
                </defs>

                {/* Axes */}
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#6B7280", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  ticks={[0, 5000, 10000, 15000, 20000, 25000]}
                  domain={[0, 25000]}
                  tickFormatter={(value) => `$${value / 1000}K`}
                  tick={{ fill: "#9CA3AF", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />

                {/* Tooltip */}
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                    padding: "10px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  }}
                  itemStyle={{ color: "#111827", fontWeight: 500 }}
                  labelStyle={{ color: "#6B7280", fontSize: "14px" }}
                  formatter={(value: number) => [
                    `$${value.toLocaleString()}`,
                    "Revenue",
                  ]}
                  cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
                />

                {/* Bars */}
                <Bar
                  dataKey="value"
                  fill="url(#colorRevenue)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Latest Invoices Section */}
        <div className="lg:col-span-1 py-6  ">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Latest Invoices
            </h2>
          </div>
          <div className="space-y-2 h-[448px] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 ">
            {invoiceItems.map((item, index) => (
              <InvoiceItem
                key={index}
                avatarUrl={item.avatarUrl}
                name={item.name}
                description={item.description}
                amount={item.amount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
