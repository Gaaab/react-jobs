import { useEffect, useState } from 'react';
import { Job } from '../types/model';
import JobList from './JobList';
import Spinner from '../components/Spinner';

const JobListings = ({ isHome = false }) => {
  //const recentJobs = jobsData.slice(0, 3);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const apiUrl = isHome
        ? '/api/jobs?_sort=id,-id&_limit=3'
        : '/api/jobs?_sort=id,-id';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
          {isHome ? 'Recent' : 'Browse'} Jobs
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job: Job) => (
              <JobList
                key={job.id}
                job={job}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
