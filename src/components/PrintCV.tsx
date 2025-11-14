"use client";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function PrintCV({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: ref,
    documentTitle: "Emanuel_Nestian_CV",
    });


  return (
    <div>
      <button
        onClick={handlePrint}
        className="px-4 py-2 bg-neutral-800 rounded-lg hover:bg-neutral-700 text-white"
      >
        Descarcă CV (PDF)
      </button>

      {/* Tot ce e în acest container va fi exportat */}
      <div ref={ref}>{children}</div>
    </div>
  );
}
