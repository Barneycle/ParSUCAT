import React, { useState, useEffect } from 'react';

const Freshmen = () => {

  useEffect(() => {
    const form = document.getElementById('myForm');
    if (form) {
      form.addEventListener('submit', handleSubmit);
      return () => form.removeEventListener('submit', handleSubmit);
    }
  }, []);

  const [personalInfo, setPersonalInfo] = useState({

    lastName: '',
    firstName: '',
    middleName: '',
    extension: '',
    completeAddress: '',
    zipCode: '',
    civilStatus: '',
    age: '',
    sex: '',
    dateOfBirth: '',
    citizenship: '',
    placeOfBirth: '',
    religion: '',
    contactNumber: '',
    emailAddress: '',
    emergencyContactPerson: '',
    emergencyContactNumber: ''

  });

  const [educationalBackground, setEducationalBackground] = useState({

    seniorHighSchool: false,
    oldCurriculum: false,
    alternativeLearningSystem: false,
    schoolAttended: '',
    schoolAddress: '',
    yearCompleted: '',
    track: '',
    strand: ''

  });

  const [otherInformation, setOtherInformation] = useState({

    disability: false,
    disabilityDescription: '',
    indigenousGroup: false,
    indigenousGroupDescription: '',
    soloParent: false,
    gidas: false

  });

  const [desiredCourse, setDesiredCourse] = useState({

    course: '',
    campus: ''

  });

  const [uploadedFile, setUploadedFile] = useState(null);

  const handleChange = (e) => {

    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });

  };

  const handleCheckboxChange = (e) => {

    const { name, checked } = e.target;
    setEducationalBackground({ ...educationalBackground, [name]: checked });
    setOtherInformation({ ...otherInformation, [name]: checked });

  };

  const handleSingleCheckboxChange = (name) => {
    setEducationalBackground((prevBackground) => ({
      ...Object.fromEntries(
        Object.entries(prevBackground).map(([key, value]) => [key, key === name ? !value : false])
      )
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append('personalInfo', JSON.stringify(personalInfo));
    formData.append('educationalBackground', JSON.stringify(educationalBackground));
    formData.append('otherInformation', JSON.stringify(otherInformation));
    formData.append('desiredCourse', JSON.stringify(desiredCourse));
    formData.append('uploadedFile', uploadedFile);

    const response = await fetch('http://localhost:3000/submit-form', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    alert('Form submitted successfully');
    
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Failed to submit form. Please try again later.');
  }
};

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) {

      return;
    }

    const maxSize = 25 * 1024 * 1024;
    if (file.size > maxSize) {

      alert('File size exceeds the limit of 25MB.');
      return;
    }

    setUploadedFile(file);
  };

  const [isFileRequired, setIsFileRequired] = useState(false);

  useEffect(() => {
    setIsFileRequired(
      otherInformation.disability ||
      otherInformation.indigenousGroup ||
      otherInformation.soloParent ||
      otherInformation.gidas
    );
  }, [otherInformation]);

  const handleCourseChange = (event) => {
    const selectedCourse = event.target.value;

    const campusMapping = {

      'Bachelor of Elementary Education Major in General Education': 'Goa - Main Campus',
      'Bachelor of Secondary Education': 'Goa - Main Campus',
      'Bachelor of Science in Biology': 'Goa - Main Campus',
      'Bachelor of Science in Geology': 'Goa - Main Campus',
      'Bachelor of Arts in Communication': 'Goa - Main Campus',
      'Bachelor of Science in Accountancy': 'Goa - Main Campus',
      'Bachelor of Science in Business Administration Major in Financial Management': 'Goa - Main Campus',
      'Bachelor of Science in Economics': 'Goa - Main Campus',
      'Bachelor of Science in Entrepreneurship': 'Goa - Main Campus',
      'Bachelor of Science in Office Administration': 'Goa - Main Campus',
      'Bachelor of Science in Civil Engineering': 'Goa - Main Campus',
      'Bachelor of Science in Sanitary Engineering': 'Goa - Main Campus',
      'Bachelor of Engineering Technology Major in Electrical Engineering Technology': 'Goa - Main Campus',
      'Bachelor of Engineering Technology in Mechanical Technology Major in Automotive Technology': 'Goa - Main Campus',
      'Bachelor of Engineering Technology in Mechanical Technology Major in Refrigeration and Air-conditioning Technology': 'Goa - Main Campus',
      'Bachelor of Science in Information Technology': 'Goa - Main Campus',
      'Bachelor of Science in Computer Science': 'Goa - Main Campus',

      'Bachelor of Science in Agribusiness': 'Salogon Campus',
      'Bachelor of Science in Community Development': 'Salogon Campus',

      'Bachelor of Science in Hospitality Management (San Jose Campus)': 'San Jose Campus',
      'Bachelor of Science in Tourism Management': 'San Jose Campus',

      'Bachelor of Science in Criminology': 'Lagonoy Campus',
      'Bachelor of Science in Nutrition and Dietetics': 'Lagonoy Campus',
      'Bachelor of Science in Industrial Security Management': 'Lagonoy Campus',

      'Bachelor of Science in Fisheries': 'Sagñay Campus',
      'Bachelor of Science in Marine Biology': 'Sagñay Campus',

      'Bachelor of Science in Environmental Science': 'Tinambac Campus',
      'Bachelor of Science in Environmental Planning': 'Tinambac Campus',
      'Bachelor of Science in Forestry': 'Tinambac Campus',

      'Bachelor of Science in Biology Major in Conservation and Restoration Ecology': 'Caramoan Campus',
      'Bachelor of Science in Tourism Management Major in Ecotourism': 'Caramoan Campus',
      'Bachelor of Science in Hospitality Management (Caramoan Campus)': 'Caramoan Campus',

    };

    const selectedCampus = campusMapping[selectedCourse] || '';
  
    setPersonalInfo({

      ...personalInfo,
      course: selectedCourse,
      campus: selectedCampus,

    });

  };  
  

  return (

    <form onSubmit={handleSubmit} className="max-w-fit max-h-fit mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">

      <h2 className="text-2xl font-semibold mb-4">Freshmen Application Form</h2>

      <div>
  
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>

          {/* Name Fields */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-4">

            <div>

              <label htmlFor="lastName" className="block text-sm font-semibold mb-1">Last Name:</label>
              <input required type="text" id="lastName" name="lastName" value={personalInfo.lastName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Last Name"/>
            
            </div>

            <div>

              <label htmlFor="firstName" className="block text-sm font-semibold mb-1">First Name:</label>
              <input required type="text" id="firstName" name="firstName" value={personalInfo.firstName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="First Name"/>
            
            </div>

            <div>

              <label htmlFor="middleName" className="block text-sm font-semibold mb-1">Middle Name:</label>
              <input required type="text" id="middleName" name="middleName" value={personalInfo.middleName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Middle Name"/>
            
            </div>

            <div>

              <label htmlFor="extension" className="block text-sm font-semibold mb-1">Extension (e.g. Jr, I):</label>
              <input type="text" id="extension" name="extension" value={personalInfo.extension} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Extension"/>
            
            </div>

          </div>

          {/* Address and Zip Code */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">

            <div>

              <label htmlFor="completeAddress" className="block text-sm font-semibold mb-1">Complete Address:</label>
              <input required type="text" id="address" name="completeAddress" value={personalInfo.completeAddress} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Complete Address"/>
            
            </div>

            <div>

              <label htmlFor="zipcode" className="block text-sm font-semibold mb-1">Zip Code:</label>
              <input required type="text" inputMode="numeric" id="zipcode" name="zipCode" value={personalInfo.zipCode} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Zip Code"/>
            
            </div>

          </div>

          {/* Age, Date of Birth, Place of Birth */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4">

            <div>

              <label htmlFor="age" className="block text-sm font-semibold mb-1">Age:</label>
              <input required type="text" inputMode="numeric" id="age" name="age" value={personalInfo.age} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Age"/>
            
            </div>

            <div>

              <label htmlFor="dateOfBirth" className="block text-sm font-semibold mb-1">Date of Birth:</label>
              <input required type="date" id="dateOfBirth" name="dateOfBirth" value={personalInfo.dateOfBirth} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Date of Birth"/>
            
            </div>

            <div>

              <label htmlFor="placeOfBirth" className="block text-sm font-semibold mb-1">Place of Birth:</label>
              <input required type="place" id="placeOfBirth" name="placeOfBirth" value={personalInfo.placeOfBirth} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Place of Birth"/>
            
            </div>

          </div>

          {/* Sex, Civil Status, Citizenship, Religion */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-4">

            <div>

              <label htmlFor="sex" className="block text-sm font-semibold mb-1">Sex:</label>
              
              <select required id="sex" name="sex" value={personalInfo.sex} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                <option value="Sex">Sex</option>
                <option value="Male">Male (M)</option>
                <option value="Female">Female (F)</option>
              </select>

            </div>

            <div>

              <label htmlFor="civilStatus" className="block text-sm font-semibold mb-1">Civil Status:</label>
              
              <select required id="civilStatus" name="civilStatus" value={personalInfo.civilStatus} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                <option value="Civil Status">Civil Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Separated or Divorced">Separated or Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>

            </div>

            <div>

              <label htmlFor="citizenship" className="block text-sm font-semibold mb-1">Citizenship:</label>
              <input required type="text" id="citizenship" name="citizenship" value={personalInfo.citizenship} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Citizenship"/>
            
            </div>

            <div>

              <label htmlFor="religion" className="block text-sm font-semibold mb-1">Religion:</label>
              <input required type="text" id="religion" name="religion" value={personalInfo.religion} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Religion"/>
            
            </div>

          </div>

          {/* Contact Information */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">

            <div>

              <label htmlFor="contactNumber" className="block text-sm font-semibold mb-1">Contact Number:</label>
              <input required type="text" inputMode="numeric" id="contactNumber" name="contactNumber" value={personalInfo.contactNumber} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Contact Number"/>
            
            </div>

            <div>

              <label htmlFor="emailAddress" className="block text-sm font-semibold mb-1">Email Address:</label>
              <input required type="text" id="emailAddress" name="emailAddress" value={personalInfo.emailAddress} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Email Address"/>
            
            </div>

          </div>

          {/* Emergency Contact */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">

            <div>

              <label htmlFor="emergencyContactPerson" className="block text-sm font-semibold mb-1">Person to contact in case of emergency:</label>
              <input required type="text" id="emergencyContactPerson" name="emergencyContactPerson" value={personalInfo.emergencyContactPerson} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Person to contact in case of emergency"/>
            
            </div>

            <div>

              <label htmlFor="emergencyContactNumber" className="block text-sm font-semibold mb-1">Contact Number:</label>
              <input required type="text" inputMode="numeric" id="emergencyContactNumber" name="emergencyContactNumber" value={personalInfo.emergencyContactNumber} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Contact Number"/>
            
            </div>

          </div>

        </div>

      {/* Educational Background */}

      <div>

        <h3 className="text-lg font-semibold mb-2 mt-6">Educational Background:</h3>

        <div className="mb-4 grid grid-cols-1 md:grid-cols-3">

          <label className="flex items-center">

            <input type="checkbox" name="seniorHighSchool" checked={educationalBackground.seniorHighSchool} onChange={() => handleSingleCheckboxChange('seniorHighSchool')} className="mr-2"/>

            <span className="text-sm font-semibold">Senior High School</span>

          </label>
          
          <label className="flex items-center">

            <input type="checkbox" name="oldCurriculum" checked={educationalBackground.oldCurriculum} onChange={() => handleSingleCheckboxChange('oldCurriculum')} className="mr-2"/>

            <span className="text-sm font-semibold">Old Curriculum</span>

          </label>

          <label className="flex items-center">

            <input type="checkbox" name="alternativeLearningSystem" checked={educationalBackground.alternativeLearningSystem} onChange={() => handleSingleCheckboxChange('alternativeLearningSystem')} className="mr-2"/>

            <span className="text-sm font-semibold">Alternative Learning System</span>

          </label>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pb-4">

          <div>

            <label htmlFor="schoolAttended" className="block text-sm font-semibold mb-1">Name of School:</label>
            <input required type="text" id="schoolAttended" name="schoolAttended" value={personalInfo.schoolAttended} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Name of School"/>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">

          <div>

            <label htmlFor="schoolAddress" className="block text-sm font-semibold mb-1">Address:</label>
            <input required type="text" id="schoolAddress" name="schoolAddress" value={personalInfo.schoolAddress} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Address"/>

          </div>

          <div>

            <label htmlFor="yearCompleted" className="block text-sm font-semibold mb-1">Year Completed:</label>
            <input required type="text" id="yearCompleted" name="yearCompleted" value={personalInfo.yearCompleted} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Year Completed"/>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">

          <div>

            <label htmlFor="track" className="block text-sm font-semibold mb-1">Track:</label>
            <input required type="text" id="track" name="track" value={personalInfo.track} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Track"/>

          </div>

          <div>

            <label htmlFor="strand" className="block text-sm font-semibold mb-1">Strand:</label>
            <input required type="text" id="strand" name="strand" value={personalInfo.strand} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Strand"/>

          </div>

        </div>

      </div>

      {/* Other Information */}

      <div>
      <h3 className="text-lg font-semibold mb-2 mt-6">Other Information:</h3>

      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="disability"
            checked={otherInformation.disability}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <span className="text-sm font-semibold">Are you a person with disability?</span>
        </label>
        {otherInformation.disability && (
          <input
            type="text"
            name="disabilityDescription"
            value={otherInformation.disabilityDescription}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Specify disability"
          />
        )}
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="indigenousGroup"
            checked={otherInformation.indigenousGroup}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <span className="text-sm font-semibold">Are you a member of Indigenous Group/Community?</span>
        </label>
        {otherInformation.indigenousGroup && (
          <input
            type="text"
            name="indigenousGroupDescription"
            value={otherInformation.indigenousGroupDescription}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Specify Indigenous Group"
          />
        )}
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="soloParent"
            checked={otherInformation.soloParent}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <span className="text-sm font-semibold">Are you a Solo Parent or Child of a Solo Parent?</span>
        </label>
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="gidas"
            checked={otherInformation.gidas}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <span className="text-sm font-semibold">Are you a resident of Geographically Isolated and Disadvantaged Areas (GIDAs)?</span>
        </label>
      </div>

      <div>
        <p className="text-sm pb-2">
          Note: Please attach proof of membership, copy of ID or certification if applicable.
        </p>
      </div>

      <div className="mb-4">
        <label htmlFor="fileUpload" className="block text-sm font-semibold mb-1">
          Upload File (PDF or Photo):
        </label>
        <input
          type="file"
          id="fileUpload"
          name="fileUpload"
          accept=".pdf,image/*"
          onChange={handleFileChange}
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          required={isFileRequired}
        />
      </div>
    </div>

      {/* Desired Course */}

      <div>

        <h3 className="text-lg font-semibold mb-2 mt-6">Desired Course:</h3>

        <div className="mb-4">

          <label htmlFor="course" className="block text-sm font-semibold mb-1">Course:</label>
              
            <select required id="course" name="course" value={personalInfo.course} onChange={handleCourseChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              
              <option value="Course">Course</option>
              <option value="Bachelor of Elementary Education Major in General Education">Bachelor of Elementary Education Major in General Education</option>
              <option value="Bachelor of Secondary Education">Bachelor of Secondary Education</option>
              <option value="Bachelor of Science in Biology">Bachelor of Science in Biology</option>
              <option value="Bachelor of Science in Geology">Bachelor of Science in Geology</option>
              <option value="Bachelor of Arts in Communication">Bachelor of Arts in Communication</option>
              <option value="Bachelor of Science in Accountancy">Bachelor of Science in Accountancy</option>
              <option value="Bachelor of Science in Business Administration Major in Financial Management">Bachelor of Science in Business Administration Major in Financial Management</option>
              <option value="Bachelor of Science in Economics">Bachelor of Science in Economics</option>
              <option value="Bachelor of Science in Entrepreneurship">Bachelor of Science in Entrepreneurship</option>
              <option value="Bachelor of Science in Office Administration">Bachelor of Science in Office Administration</option>
              <option value="Bachelor of Science in Civil Engineering">Bachelor of Science in Civil Engineering</option>
              <option value="Bachelor of Science in Sanitary Engineering">Bachelor of Science in Sanitary Engineering</option>
              <option value="Bachelor of Engineering Technology Major in Electrical Engineering Technology">Bachelor of Engineering Technology Major in Electrical Engineering Technology</option>
              <option value="Bachelor of Engineering Technology in Mechanical Technology Major in Automotive Technology">Bachelor of Engineering Technology in Mechanical Technology Major in Automotive Technology</option>
              <option value="Bachelor of Engineering Technology in Mechanical Technology Major in Refrigeration and Air-conditioning Technology">Bachelor of Engineering Technology in Mechanical Technology Major in Refrigeration and Air-conditioning Technology</option>
              <option value="Bachelor of Science in Information Technology">Bachelor of Science in Information Technology</option>
              <option value="Bachelor of Science in Computer Science">Bachelor of Science in Computer Science</option>
              <option value="Bachelor of Science in Agribusiness">Bachelor of Science in Agribusiness</option>
              <option value="Bachelor of Science in Community Development">Bachelor of Science in Community Development</option>
              <option value="Bachelor of Science in Hospitality Management (San Jose Campus)">Bachelor of Science in Hospitality Management (San Jose Campus)</option>
              <option value="Bachelor of Science in Tourism Management">Bachelor of Science in Tourism Management</option>
              <option value="Bachelor of Science in Criminology">Bachelor of Science in Criminology</option>
              <option value="Bachelor of Science in Nutrition and Dietetics">Bachelor of Science in Nutrition and Dietetics</option>
              <option value="Bachelor of Science in Industrial Security Management">Bachelor of Science in Industrial Security Management</option>
              <option value="Bachelor of Science in Fisheries">Bachelor of Science in Fisheries</option>
              <option value="Bachelor of Science in Marine Biology">Bachelor of Science in Marine Biology</option>
              <option value="Bachelor of Science in Environmental Science">Bachelor of Science in Environmental Science</option>
              <option value="Bachelor of Science in Environmental Planning">Bachelor of Science in Environmental Planning</option>
              <option value="Bachelor of Science in Forestry">Bachelor of Science in Forestry</option>
              <option value="Bachelor of Science in Biology Major in Conservation and Restoration Ecology">Bachelor of Science in Biology Major in Conservation and Restoration Ecology</option>
              <option value="Bachelor of Science in Tourism Management Major in Ecotourism">Bachelor of Science in Tourism Management Major in Ecotourism</option>
              <option value="Bachelor of Science in Hospitality Management (Caramoan Campus)">Bachelor of Science in Hospitality Management (Caramoan Campus)</option>
            
            </select>

        </div>

        {personalInfo.course === 'Bachelor of Secondary Education' && (

        <div className="mb-4">

          <label htmlFor="major" className="block text-sm font-semibold mb-1">Major:</label>

          <select required id="major" name="major" value={personalInfo.major} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
            
            <option value="">Select Major</option>
            <option value="English">English</option>
            <option value="Filipino">Filipino</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="Social Studies">Social Studies</option>
            <option value="Values Education">Values Education</option>

          </select>
        
        </div>)}

        <div>

            <label htmlFor="campus" className="block text-sm font-semibold mb-1">Campus:</label>
            <input required type="text" id="campus" name="campus" value={personalInfo.campus} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Campus"/>

          </div>

      </div>

      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-colors duration-300 mt-6">
        
        Submit

      </button>

    </form>

  );

};

export default Freshmen;