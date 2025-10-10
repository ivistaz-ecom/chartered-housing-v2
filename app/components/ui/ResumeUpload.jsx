"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export function ResumeUpload({
  name = "resume",
  className,
  onChange,
  required = true,
}) {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      // ✅ Make sure we pass the full File object back to parent
      if (onChange) onChange(file);
    } else {
      // ✅ Handle if user cancels the file picker
      setFileName("");
      if (onChange) onChange(null);
    }
  };

  const handleRemove = () => {
    setFileName("");
    if (inputRef.current) {
      inputRef.current.value = null;
    }
    if (onChange) onChange(null);
  };

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "flex items-center justify-between border-0 border-input bg-transparent py-2 text-lg border-b border-[#64646480] rounded-none transition focus-within:ring-2 focus-within:ring-ring/50"
        )}
      >
        <div
          className="flex items-end flex-1 justify-between truncate gap-2"
          type="button"
          onClick={() => inputRef.current?.click()}
        >
          {fileName ? "Change file" : "Upload Your Resume"}
          {fileName ? (
            <span className="truncate">{fileName}</span>
          ) : (
            <span className="text-muted-foreground"></span>
          )}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M11.0328 0.0215623C16.6272 -0.418343 19.8398 5.97095 16.2433 10.213L8.22998 18.1869C7.61138 18.6392 6.82092 17.8987 7.3055 17.2221L14.9384 9.63105C18.8497 5.01225 12.891 -1.08806 8.18853 2.72016L1.8411 9.06638C0.203025 11.1114 2.7201 13.5995 4.77474 12.0403L10.4593 6.35692C11.1785 5.80835 11.948 6.72961 11.3423 7.36069C9.4527 9.07765 7.74379 11.1862 5.83969 12.8645C2.56072 15.7551 -1.79244 11.7255 0.776955 8.28357C2.6549 6.43983 4.47892 4.53975 6.36009 2.69963C7.78404 1.30626 8.89044 0.189797 11.0328 0.0215623Z"
                fill="#646464"
              />
            </svg>
          </div>
        </div>
        {fileName && (
          <button
            type="button"
            onClick={handleRemove}
            className="ml-2 rounded-md p-1 text-muted-foreground hover:text-red-500 focus:outline-none"
          >
            <X className="size-4" />
          </button>
        )}
      </div>
      <input
        ref={inputRef}
        id={name}
        name={name}
        type="file"
        required={required}
        className="hidden"
        accept=".pdf,.doc,.docx" // ✅ Added accept attribute to match validation
        onChange={handleFileChange}
      />
    </div>
  );
}
