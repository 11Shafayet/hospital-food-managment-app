import Button from '../components/common/Button';
import Heading from '../components/common/Heading';
import PatientsTable from '../components/patients/PatientsTable';

const Patient = () => {
  return (
    <div className="container py-10">
      <Heading title="Patients Details" />

      <div className="my-5 flex justify-end">
        <Button title={'Add Patient'} />
      </div>

      <PatientsTable />
    </div>
  );
};

export default Patient;
