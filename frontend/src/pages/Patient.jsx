import { useState } from 'react';
import Button from '../components/common/Button';
import Heading from '../components/common/Heading';
import PatientsTable from '../components/patients/PatientsTable';
import AddPatient from '../components/patients/AddPatient';

const Patient = () => {
  const [isAddPatientOpen, setIsAddPatientOpen] = useState(false);

  return (
    <div className="container py-10">
      <Heading title="Patients Details" />

      <div className="my-5 flex justify-end">
        <button
          onClick={() => setIsAddPatientOpen(true)}
          className={`rounded-md bg-theme px-8 py-3 text-white duration-300 hover:bg-opacity-90`}
        >
          Add Patient
        </button>
      </div>

      <PatientsTable />

      {isAddPatientOpen && (
        <AddPatient
          isOpen={isAddPatientOpen}
          onClose={() => setIsAddPatientOpen(false)}
        />
      )}
    </div>
  );
};

export default Patient;
