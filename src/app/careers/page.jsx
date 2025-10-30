import JobCard from "@/components/careers/JobCard";
import { jobs } from "@/lib/data/jobs";

export default function CareersPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-4 text-accent">Careers at Global Industries</h1>
      <p className="text-gray-600 mb-10">
        We’re always looking for passionate people to join our growing team.
        Browse our open roles below.
      </p>

      {jobs.length === 0 ? (
        <p>No open positions right now. Check back soon!</p>
      ) : (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      )}
    </main>
  );
}
