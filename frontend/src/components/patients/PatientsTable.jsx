import React, { useState } from 'react';
import PatientDetails from './PatientDetails';

const patients = [
  {
    name: 'John Doe',
    diseases: ['Diabetes Type 2', 'Hypertension'],
    allergies: ['Penicillin', 'Peanuts'],
    floorNo: '3',
    roomNo: '304',
    bedNo: 'B2',
    age: 45,
    gender: 'Male',
    contactInformation: {
      phone: '(555) 123-4567',
      address: '123 Main St, City, State',
    },
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Spouse',
      phone: '(555) 987-6543',
    },
    others: 'Patient requires wheelchair assistance',
  },
  {
    name: 'Shafayetur Rahman',
    diseases: ['Diabetes Type 1', 'Hypertension'],
    allergies: ['Penicillin', 'Peanuts'],
    floorNo: '1',
    roomNo: '314',
    bedNo: 'A2',
    age: 25,
    gender: 'Male',
    contactInformation: {
      phone: '(555) 123-4567',
      address: '123 Main St, City, State',
    },
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Spouse',
      phone: '(555) 987-6543',
    },
    others: 'Patient requires wheelchair assistance',
  },
];

const PatientsTable = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleViewPatient = (patient) => {
    setSelectedPatient(patient);
    setShowDetails(true);
  };

  return (
    <div className="w-full">
      {showDetails && selectedPatient ? (
        <PatientDetails
          patient={selectedPatient}
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
                  <th className="table-header">Floor No.</th>
                  <th className="table-header">Room No.</th>
                  <th className="table-header">Bed No.</th>
                  <th className="table-header">Diseases</th>
                  <th className="table-header">Allergies</th>
                  <th className="table-header">Age</th>
                  <th className="table-header">Gender</th>
                  <th className="table-header text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {patients.map((patient) => (
                  <tr key={patient.id} className="border-b border-gray-700">
                    <td className="table-body">{patient.name}</td>
                    <td className="table-body">{patient.floorNo}</td>
                    <td className="table-body">{patient.roomNo}</td>
                    <td className="table-body">{patient.bedNo}</td>
                    <td className="table-body">
                      {patient.diseases.join(', ')}
                    </td>
                    <td className="table-body">
                      {patient.allergies.join(', ')}
                    </td>
                    <td className="table-body">{patient.age}</td>
                    <td className="table-body">{patient.gender}</td>
                    <td className="table-body text-center">
                      <button
                        onClick={() => handleViewPatient(patient)}
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

export default PatientsTable;
