import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
import JobsPage from './pages/JobsPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJob';
import EditJobPage from './pages/EditJob';
import { useJobs } from './hooks/useJobs';

const App = () => {
  const { addJob, updateJob, deleteJob } = useJobs();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<MainLayout />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="/jobs"
          element={<JobsPage />}
        />
        <Route
          path="/add-job"
          element={<AddJobPage addJobSubmit={addJob} />}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
