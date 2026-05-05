import { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import OverDueFeeComponent from "../components/feeCollectionComponents/OverDueFeeComponent";
import PendingFeesComponent from "../components/feeCollectionComponents/PendingFeesComponent";
import RecentPaymentComponent from "../components/feeCollectionComponents/RecentPaymentComponent";
import RecordPaymentModal from "../boxModels/RecordPaymentModal";

const FeesCollectionPage = () => {
  const [active, setActive] = useState("Recent");
  const [recordPayment, setRecordPayment] = useState(false);
  const [pending, setPending] = useState(false);
  const [overDue, setOverDue] = useState(false);
  return (
    <section className="max-w-400 mx-auto p-8 bg-[#f5f7fa] h-screen overflow-y-auto custom-scrollbar">
      <Link
        to="/"
        className="flex justify-center w-fit items-center cursor-default p-3 rounded-md bg-orange-500 mb-8 transition-all duration-300 hover:-translate-y-1"
      >
        <MdArrowBackIos className="text-white" size={24} />
        <span className="text-white font-medium">Back to Dashboard</span>
      </Link>

      <div className="bg-white rounded-md p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-8">
        <h1 className="text-orange-500 lg:text-4xl text-2xl font-bold mb-4">
          🏠 Fee Management
        </h1>
        <span className="text-[#666] text-sm">
          Manage School Fees, Track Payment, and Generate Financial Report
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
            <h1 className="text-orange-500 text-4xl font-bold mb-1">$29,654</h1>
            <span className="text-[#666]">Total Collected</span>
          </div>
          <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
            <h1 className="text-orange-500 text-4xl font-bold mb-1">$9,876</h1>
            <span className="text-[#666]">Pending Fees</span>
          </div>
          <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
            <h1 className="text-orange-500 text-4xl font-bold mb-1">89%</h1>
            <span className="text-[#666]">Collection Rate</span>
          </div>
          <div className="bg-[#f8f9fa] flex flex-col items-center justify-center p-5 border border-orange-500 border-t-4 border-l-orange-500 borsder-b-4 border-b-orange-500 rounded-2xl">
            <h1 className="text-orange-500 text-4xl font-bold mb-1">135</h1>
            <span className="text-[#666]">Overdue Payments</span>
          </div>
        </div>
      </div>

      <div className="flex gap-5 mb-8">
        {["Recent", "Pending", "Overdue"].map((item, index) => (
          <button
            key={index}
            onClick={() => setActive(item)}
            className={`px-8 py-3 border border-[#e1e5e9] hover:shadow-md active:scale-95 transition-all duration-200 rounded-md shadow-[0_5px_20px_rgba(0,0,0,0.1)] ${active === item ? "bg-orange-500 text-white" : "bg-white"}`}
          >
            {" "}
            {item.toLocaleUpperCase()}{" "}
          </button>
        ))}
      </div>

      {/* Recent Payments */}
      {active == "Recent" && (
        <RecentPaymentComponent setRecordPayment={setRecordPayment} />
      )}

      {/* Pending Fees */}
      {active == "Pending" && <PendingFeesComponent />}

      {/* Overdue Fees */}
      {active == "Overdue" && <OverDueFeeComponent />}

      {/* record payment modal */}
      {recordPayment && (
        <RecordPaymentModal setRecordPayment={setRecordPayment} />
      )}
    </section>
  );
};

export default FeesCollectionPage;
