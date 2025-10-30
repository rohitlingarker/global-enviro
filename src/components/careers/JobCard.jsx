"use client";
import Link from "next/link";
import { useState } from "react";

export default function JobCard({ job }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border rounded-2xl p-6 mb-6 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold">{job.title}</h2>
          <p className="text-gray-600">{job.department}</p>
          <div className="text-sm text-gray-500 mt-1">
            {job.location} • {job.type}
          </div>
        </div>

        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-primary hover:underline hover:cursor-pointer font-medium"
        >
          {expanded ? "Hide Details" : "View Details"}
        </button>
      </div>

      {expanded && (
        <div className="mt-4 text-gray-700">
          <p>{job.description}</p>
          <ul className="list-disc ml-5 mt-3 space-y-1">
            {job.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>

          <Link
            href={`/careers/apply/${job.id}`}
            className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
          >
            Apply Now
          </Link>
        </div>
      )}
    </div>
  );
}
