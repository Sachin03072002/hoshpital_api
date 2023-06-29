# Web Application - Doctor Registration and Patient Reports

This is a web application that provides functionalities for doctor registration, patient registration, and managing COVID-19 reports. The application allows doctors to register themselves, register patients, create reports on the status of their COVID-19, and provide patients with access to their reports.

## Features

The web application offers the following features:

- **Doctor Registration**: Doctors can create an account by providing their details such as name, email address, and password. Once registered, doctors can log in to the application using their credentials.

- **Patient Registration**: Doctors can register patients by providing their basic information, such as name, age, contact details, etc. Each patient is associated with a specific doctor.

- **COVID-19 Reports**: Doctors can create reports on the status of COVID-19 for registered patients. The reports may include information such as test results, symptoms, treatment plans, and recommendations.

- **Patient Report Access**: Patients can log in to the application using their unique credentials and access their COVID-19 reports. They can view and download their reports for reference or share them with other healthcare providers if necessary.

## Technologies Used

The web application is built using the following technologies:

- **Backend**: The server-side of the application is developed using the following technologies:
  - Node.js: A JavaScript runtime environment for server-side development.
  - Express.js: A web application framework for Node.js that simplifies the creation of APIs and handling of HTTP requests.
  - MongoDB: A NoSQL database used for storing doctor and patient data.

## Setup and Installation

To set up and run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Sachin03072002/hoshpital_api.git`
2. Navigate to the project directory: `cd repository-name`
3. Install the required dependencies: `npm install`
4. Start the application server: `npm start`
5. Open a web browser and visit `http://localhost:8000` to access the application.

Note: Make sure you have Node.js and MongoDB installed on your system.

## API Endpoints

The backend of the application exposes the following API endpoints:

- `POST /doctors_api/register`: Register a new doctor.
- `POST /doctors_api/login`: Login for doctors.
- `POST /patients_api/register`: Register a new patient.
- `POST /patients_api/create_report`: Create a new COVID-19 report for a patient.
- `GET /patients_api/:id/all_reports`: Get all reports for a specific patient.

Note: Replace `:id` in the `GET /api/patients/:id/reports` endpoint with the actual ID of the patient to retrieve their reports.

## Directory Structure

The directory structure of the project is organized as follows:

```
├── index.js                   # Entry point of the application
├── package.json             # Node.js package configuration
├── controllers               # Request handlers and business logic
    ├──api
      ├──v1    
│       ├── doctorController.js  # Controller for doctor-related operations
│       ├── patientController.js # Controller for patient-related operations
│       └── reportController.js  # Controller for report-related operations
├── models                   # Database models and schemas
│   ├── doctor.js            # Model for doctors
│   ├── patient.js           # Model for patients
│   └── report.js            # Model for COVID-19 reports
├── routes                  # API routes and endpoints
├──api
      ├──v1                   
│       ├── doctor.js      # Routes for doctor-related endpoints
│       ├── patient.js     # Routes for patient-related endpoints
│       └── report.js      # Routes for report-related endpoints
└── config
  ├── middleware.js
  ├── mongoose.js
  └── passport-jwt_stratergy.js
