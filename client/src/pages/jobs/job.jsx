import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs, createJob, deleteJob, updateJob } from '../../redux/features/jobslice';
import { toast } from 'react-toastify';

const Job = () => {
  const dispatch = useDispatch();
  const { jobs, isLoading, error } = useSelector((state) => state.jobs);
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    salary: '',
    status: 'pending',
    workType: 'full-time',
    workLocation: 'Bangalore',
  });

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.company || !formData.position || !formData.salary) {
      toast.error('Please fill in all fields');
      return;
    }
    dispatch(createJob(formData));
    setFormData({
      company: '',
      position: '',
      salary: '',
      status: 'pending',
      workType: 'full-time',
      workLocation: 'Bangalore',
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteJob(id));
  };

  const handleUpdate = (id) => {
    dispatch(updateJob({ id, formData }));
  };

  return (
    <div>
      <h1>Jobs Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
        <input
          type="text"
          placeholder="Position"
          value={formData.position}
          onChange={(e) => setFormData({ ...formData, position: e.target.value })}
        />
        <input
          type="number"
          placeholder="Salary"
          value={formData.salary}
          onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
        />
        <button type="submit">Create Job</button>
      </form>

      {isLoading ? <p>Loading...</p> : null}
      {error ? <p>{error}</p> : null}

      <ul>
        {jobs.map((job) => (
          <li key={job._id}>
            <p>{job.company}</p>
            <p>{job.position}</p>
            <button onClick={() => handleUpdate(job._id)}>Update</button>
            <button onClick={() => handleDelete(job._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Job;
