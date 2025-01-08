import React from 'react';

const StaffDetails = ({ isOpen, onClose, staff }) => {
  const [role, setRole] = React.useState(staff?.role || 'Delivery Man');
  const [assignedDuty, setAssignedDuty] = React.useState(
    staff?.assignedDuty || ''
  );

  const staffData = staff || {
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    phone: '(555) 123-4567',
    address: '123 Main St, City, State',
    dutyTime: '9:00 AM - 5:00 PM',
    assignedDuty: ['Floor 1', 'Floor 2', 'Floor 3'],
  };

  const handleRoleUpdate = () => {
    console.log('Updating role to:', role);
  };

  const handleDutyUpdate = () => {
    console.log('Updating assigned duty to:', assignedDuty);
  };

  if (!isOpen) return null;

  const DetailItem = ({ label, value }) => (
    <div className="w-full p-2 md:w-1/2">
      <div className="rounded-lg bg-white bg-opacity-10 p-4">
        <h3 className="text-sm font-medium text-theme">{label}</h3>
        <div className="mt-1 text-base">
          {Array.isArray(value) ? value.join(', ') : value}
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[1000] overflow-y-auto">
      <div
        className="fixed inset-0 bg-black bg-opacity-90 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-4xl rounded-lg bg-gray-900 text-white shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-xl font-semibold">Patient Details</h2>
            {/* close button */}
            <button
              onClick={onClose}
              className="text-xl font-bold text-white duration-300 hover:rotate-90 hover:scale-125"
            >
              ✕
            </button>
          </div>

          {/* Content */}
          <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-6">
            <div className="-m-2 flex flex-wrap">
              <DetailItem label="Name" value={staffData.name} />
              <DetailItem label="Age" value={staffData.age} />
              <DetailItem label="Gender" value={staffData.gender} />
              <DetailItem label="Phone" value={staffData.phone} />
              <DetailItem label="Address" value={staffData.address} />
              <DetailItem label="Duty Time" value={staffData.dutyTime} />

              <div className="w-full p-2 md:w-1/2">
                <div className="rounded-lg bg-white bg-opacity-10 p-4">
                  <h3 className="text-sm font-medium text-theme">Staff Role</h3>
                  <div className="mt-1 flex items-center gap-4">
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="rounded-md bg-gray-800 px-3 py-2"
                    >
                      <option value="Nurse">Nurse</option>
                      <option value="Doctor">Doctor</option>
                      <option value="Admin">Admin</option>
                      <option value="Receptionist">Receptionist</option>
                    </select>
                    <button
                      onClick={handleRoleUpdate}
                      className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full p-2 md:w-1/2">
                <div className="rounded-lg bg-white bg-opacity-10 p-4">
                  <h3 className="text-sm font-medium text-theme">
                    Assigned Duty
                  </h3>
                  <div className="mt-1 flex items-center gap-4">
                    <input
                      type="text"
                      value={assignedDuty}
                      onChange={(e) => setAssignedDuty(e.target.value)}
                      className="w-full rounded-md bg-gray-800 px-3 py-2"
                      placeholder="Enter assigned duty"
                    />
                    <button
                      onClick={handleDutyUpdate}
                      className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDetails;