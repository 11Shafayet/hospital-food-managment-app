import { useState } from 'react';
import Button from '../components/common/Button';
import Heading from '../components/common/Heading';
import StaffsTable from '../components/staffs/StaffsTable';
import AddStaff from '../components/staffs/AddStaff';

const Staffs = () => {
  const [isAddStaffOpen, setIsAddStaffOpen] = useState(false);

  return (
    <div className="container py-10">
      <Heading title="Staffs Details" />

      <div className="my-5 flex justify-end">
        <button
          onClick={() => setIsAddStaffOpen(true)}
          className={`rounded-md bg-theme px-8 py-3 text-white duration-300 hover:bg-opacity-90`}
        >
          Add Staff
        </button>
      </div>

      <StaffsTable />

      {isAddStaffOpen && (
        <AddStaff
          isOpen={isAddStaffOpen}
          onClose={() => setIsAddStaffOpen(false)}
        />
      )}
    </div>
  );
};

export default Staffs;
