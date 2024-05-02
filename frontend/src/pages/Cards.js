import React from 'react';

const Cards = () => {

  return (

    <div className="max-w-[1240px] mx-auto px-8">

      <h1 className="text-center text-4xl md:text-6xl font-bold text-gray-900 mb-12">Application Process & Requirements</h1>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-white rounded-lg shadow-lg p-6">

          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">Application Process</h2>

          <ol className="list-decimal pl-6">

            <li className="text-lg md:text-xl pb-2">Fill out the forms honestly and accurately. Refer to the program offerings listed <a href="/programs" className='text-blue-500 underline' target="_blank" rel="noopener noreferrer">here</a>.</li>
            <li className="text-lg md:text-xl pb-2">Present the unique ID sent to your email and submit the requirements at the following:</li>

            <ul className="list-disc pl-6">

              <li className="text-lg md:text-xl pb-2">GAP Office - Goa Campus</li>
              <li className="text-lg md:text-xl pb-2">GAP Office - Tinambac Campus</li>
              <li className="text-lg md:text-xl pb-2">GAP Office - Caramoan Campus</li>
              <li className="text-lg md:text-xl pb-2">Other Testing Centers on specified dates posted on ParSU - Guidance, Admission & Placement Office Facebook Page</li>

            </ul>

            <li className="text-lg md:text-xl pb-6">Upon evaluation, the GAP Staff will issue a Test Permit. Applications with incomplete/incorrect requirements will not be processed.</li>
          
          </ol>

          <p>Note: If you don't have your own e-mail address (gmail/yahoo), please create a new one or use your relative's, family's, and/or friend's e-mail address.</p>

        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">

          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">Requirements</h2>

          <ul className="list-disc pl-6">

            <li className="text-lg md:text-xl pb-2">Two (2) pieces 2x2 ID picture (Business Attire & White Background)</li>
            <li className="text-lg md:text-xl pb-2">One (1) piece 1x1 ID picture (Business Attire & White Background)</li>
            <li className="text-lg md:text-xl pb-2">Certificate of Enrollment (for Freshmen) or Transcript of Records (for Transferees)</li>
            <li className="text-lg md:text-xl pb-2">Original and authenticated copy of Report Card for SHS and/or Old Curriculum HS graduates</li>
            <li className="text-lg md:text-xl pb-2">Accomplished Student Personal Record</li>
            <li className="text-lg md:text-xl pb-2">Color coded folder</li>

          </ul>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">Assigned Colors (Long-sized Folder):</h3>

          <ul className="list-disc pl-6">
            
            <li className="text-lg md:text-xl pb-2"><span className="text-blue-400">Blue</span> - College of Education</li>
            <li className="text-lg md:text-xl pb-2"><span className="text-yellow-500">Yellow</span> - College of Science, College of Integrated Arts and Humanities</li>
            <li className="text-lg md:text-xl pb-2"><span className="text-green-500">Green</span> - College of Economic and Accountancy</li>
            <li className="text-lg md:text-xl pb-2"><span className="text-red-500">Red</span> - College of Engineering and Computational Science</li>
            <li className="text-lg md:text-xl pb-2">White - Other Colleges</li>

          </ul>

        </div>

      </div>

    </div>

  );

};

export default Cards;