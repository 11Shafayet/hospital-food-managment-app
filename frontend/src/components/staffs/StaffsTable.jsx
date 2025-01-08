import React, { useState } from 'react';
import StaffDetails from './StaffDetails';

const staffs = [
  {
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    phone: '(555) 123-4567',
    address: '123 Main St, City, State',
    dutyTime: '9:00 AM - 5:00 PM',
    assignedDuty: ['Floor 1', 'Floor 2', 'Floor 3'],
  },
];

const StaffsTable = () => {
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleViewStaff = (staff) => {
    setSelectedStaff(staff);
    setShowDetails(true);
  };

  return (
    <div className="w-full">
      {showDetails && selectedStaff ? (
        <StaffDetails
          staff={selectedStaff}
          isOpen={showDetails}
          onClose={() => setShowDetails(false)}
        />
      ) : (
        <>
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-800">
                  <th className="table-header">Name</th>
                  <th className="table-header">Age</th>
                  <th className="table-header">Gender</th>
                  <th className="table-header">Phone</th>
                  <th className="table-header">Address</th>
                  <th className="table-header">Duty Time</th>
                  <th className="table-header">Assigned Duty</th>
                  <th className="table-header text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {staffs.map((staff, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="table-body">{staff.name}</td>
                    <td className="table-body">{staff.age}</td>
                    <td className="table-body">{staff.gender}</td>
                    <td className="table-body">{staff.phone}</td>
                    <td className="table-body">{staff.address}</td>
                    <td className="table-body">{staff.dutyTime}</td>
                    <td className="table-body">
                      {staff.assignedDuty.join(', ')}
                    </td>
                    <td className="table-body text-center">
                      <button
                        onClick={() => handleViewStaff(staff)}
                        className="rounded-full p-2 text-blue-500 hover:bg-gray-700 hover:text-blue-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-end p-4">
            <nav className="flex items-center space-x-2">
              {[...Array(10)].map((_, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 rounded-md border border-gray-600 text-white
                    ${i === 0 ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
                >
                  {i + 1}
                </button>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default StaffsTable;
