import React from 'react';
import './style.css';

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from 'react-router-dom';

export default function RouterComponent() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/teacherData" element={<TeacherData />}></Route>
        </Routes>
      </BrowserRouter>
      <h3>I am in Router Component</h3>
    </>
  );
}

function App() {
  const navigate = useNavigate();
  return (
    <>
      <h3>App Component</h3>
      <div>
        <button onClick={() => navigate('/teacherData')} variant="contained">
          Teacher's Data
        </button>
        <br />
        <button>Student Data</button>
        <br />
        <br />
        <button>Create Teacher</button>
        <br />
        <br />
        <button>Create Data</button>
        <br />
        <br />
      </div>
    </>
  );
}

function TeacherData() {
  return (
    <>
      <h3>Teachers Data</h3>
    </>
  );
}
