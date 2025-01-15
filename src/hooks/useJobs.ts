import { Job } from '../types/model';

export function useJobs() {
  const addJob = async (newJob: Job) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    console.log(res);
    return;
  };

  // Delete Job
  const deleteJob = async (id: string | number) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    console.log(res);
    return;
  };

  // Update Job
  const updateJob = async (job: Job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    console.log(res);
    return;
  };

  return {
    addJob,
    updateJob,
    deleteJob,
  };
}
