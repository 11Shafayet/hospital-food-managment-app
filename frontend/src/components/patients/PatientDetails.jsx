import React from 'react';

const PatientDetails = ({ isOpen, onClose, patient }) => {
  const patientData = patient || {
    name: 'John Doe',
    diseases: ['Diabetes Type 2', 'Hypertension'],
    allergies: ['Penicillin', 'Peanuts'],
    roomNumber: '304',
    bedNumber: 'B2',
    floorNumber: '3',
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
              className="duration-300 hover:rotate-90 hover:scale-125"
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-6">
            <div className="-m-2 flex flex-wrap">
              <DetailItem label="Patient Name" value={patientData.name} />
              <DetailItem label="Diseases" value={patientData.diseases} />
              <DetailItem label="Allergies" value={patientData.allergies} />
              <DetailItem label="Room Number" value={patientData.roomNumber} />
              <DetailItem label="Bed Number" value={patientData.bedNumber} />
              <DetailItem
                label="Floor Number"
                value={patientData.floorNumber}
              />
              <DetailItem label="Age" value={patientData.age} />
              <DetailItem label="Gender" value={patientData.gender} />
              <DetailItem
                label="Contact Information"
                value={
                  <>
                    <div>{patientData.contactInformation.phone}</div>
                    <div>{patientData.contactInformation.email}</div>
                    <div>{patientData.contactInformation.address}</div>
                  </>
                }
              />
              <DetailItem
                label="Emergency Contact"
                value={
                  <>
                    <div>
                      {patientData.emergencyContact.name} (
                      {patientData.emergencyContact.relationship})
                    </div>
                    <div>{patientData.emergencyContact.phone}</div>
                  </>
                }
              />
              <DetailItem label="Others" value={patientData.others} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
