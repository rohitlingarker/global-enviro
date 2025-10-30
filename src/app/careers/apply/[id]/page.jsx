"use client";
import { useParams } from "next/navigation";
import { jobs } from "@/lib/data/jobs";
import { useState } from "react";

const steps = ["Personal Info", "Professional Info", "Resume", "Review & Submit"];


function Step1({ formData, handleChange, next }) {
  return (
    <div>
      <Input label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
      <Input label="Email" name="email" value={formData.email} onChange={handleChange} />
      <Input label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
      <Input label="Location" name="location" value={formData.location} onChange={handleChange} />

      <div className="flex justify-end mt-6">
        <Button onClick={next}>Next</Button>
      </div>
    </div>
  );
}

function Step2({ formData, handleChange, next, prev }) {
  return (
    <div>
      <Input label="Current Role" name="role" value={formData.role} onChange={handleChange} />
      <Input
        label="Years of Experience"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
      />
      <Input label="Skills (comma-separated)" name="skills" value={formData.skills} onChange={handleChange} />

      <div className="flex justify-between mt-6">
        <Button variant="secondary" onClick={prev}>Back</Button>
        <Button onClick={next}>Next</Button>
      </div>
    </div>
  );
}

function Step3({ formData, handleChange, next, prev }) {
  return (
    <div>
      <Input label="Resume Link (Google Drive, etc.)" name="resumeLink" value={formData.resumeLink} onChange={handleChange} />
      <Input label="Portfolio / GitHub" name="portfolio" value={formData.portfolio} onChange={handleChange} />

      <div className="flex justify-between mt-6">
        <Button variant="secondary" onClick={prev}>Back</Button>
        <Button onClick={next}>Next</Button>
      </div>
    </div>
  );
}

function formatLabel(key) {
  const words = key.replace(/([A-Z])/g, " $1").trim();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

function Review({ formData, prev, handleSubmit }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Review Your Information</h2>
      <div className="space-y-2 text-gray-700">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key}>
            <strong>{formatLabel(key)} : </strong> {value || "-"}
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <Button variant="secondary" onClick={prev}>Back</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
}

function Input({ label, name, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
      />
    </div>
  );
}

function Button({ children, onClick, variant = "primary" }) {
  const base = "px-4 py-2 rounded-lg font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-dark"
      : "bg-gray-200 text-gray-700 hover:bg-gray-300";
  return (
    <button className={`${base} ${styles}`} onClick={onClick}>
      {children}
    </button>
  );
}


export default function ApplyJobPage() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id.toString() === id);

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    jobTitle: job?.title || "",
    fullName: "",
    email: "",
    phone: "",
    location: "",
    role: "",
    experience: "",
    skills: "",
    resumeLink: "",
    portfolio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const next = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("/api/submit-job", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  if (data.status === "success") {
    alert("Form submitted successfully!");
    // route back to careers page
    window.location.href = "/careers";
  } else {
    alert("Something went wrong!");
  }
};


  if (!job) return <p className="text-center mt-10">Job not found</p>;

  return (
    <main className="max-w-2xl mx-auto py-10 px-6 bg-white my-5 shadow-lg rounded-md">
      <div className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
        <p className="text-gray-600">{job.department} • {job.location} • {job.type}</p>
      </div>

      {/* Stepper */}
      <div className="flex justify-between mb-8">
        {steps.map((label, i) => (
          <div
            key={i}
            className={`flex-1 text-center border-b-4 pb-2 hover:cursor-default ${
              i <= currentStep ? "border-primary text-primary" : "border-gray-300 text-gray-500"
            }`}
          >
            {label}
          </div>
        ))}
      </div>

      {currentStep === 0 && <Step1 formData={formData} handleChange={handleChange} next={next} />}
      {currentStep === 1 && <Step2 formData={formData} handleChange={handleChange} next={next} prev={prev} />}
      {currentStep === 2 && <Step3 formData={formData} handleChange={handleChange} next={next} prev={prev} />}
      {currentStep === 3 && <Review formData={formData} prev={prev} handleSubmit={handleSubmit} />}
    </main>
  );
}
