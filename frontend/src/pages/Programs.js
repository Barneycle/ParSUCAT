export default function Programs() {

  const mainCampusData = programData.filter(program => program.campus === "Goa - Main Campus");

  const otherCampusesData = programData.filter(program => program.campus !== "Goa - Main Campus");

  return (

    <div className="max-w-[1240px] mx-auto px-8">

      <h1 className="text-center text-4xl md:text-6xl font-bold text-gray-900 mb-12">Program Offerings</h1>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">

        <div className="col-span-3 md:col-span-1">

          <div className="bg-white rounded-lg shadow-lg p-6">

            <h2 className="text-xl text-center md:text-2xl font-bold text-gray-900 mb-4">Goa - Main Campus</h2>

            <div>

              {mainCampusData.map((program, index) => (

                <div key={index}>

                  <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-2 border-b border-b-gray-600 pb-2">{program.college}</h3>
                  <ul className="space-y-2">

                    {program.courses.map((course, index) => (
                      <li key={index} className="text-gray-700">{course}</li>
                    ))}

                  </ul>

                </div>

              ))}

            </div>

          </div>

        </div>

        {otherCampusesData.map((campus, index) => (

          <div key={index} className="bg-white rounded-lg shadow-lg p-6">

            <h2 className="text-xl text-center md:text-2xl font-bold text-gray-900 mb-4">{campus.campus}</h2>

            <div>

              {programData.filter(program => program.campus === campus.campus).map((program, index) => (

                <div key={index}>

                  <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-2 border-b border-b-gray-600 pb-2">{program.college}</h3>

                  <ul className="space-y-2">

                    {program.courses.map((course, index) => (
                      <li key={index} className="text-gray-700">{course}</li>
                    ))}

                  </ul>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

      <div className="mt-8 text-center text-gray-700">

        <p>'**' denote Board Programs.</p>

      </div>

    </div>

  );

}

const programData = [

  {
    campus: "Goa - Main Campus",
    college: "College of Education",
    courses: [
      "Bachelor of Elementary Education Major in General Education**",
      "Bachelor of Secondary Education**",
      "Major in: English, Filipino, Mathematics, Science, Social Studies, Values Education"
    ]
  },

  {

    campus: "Goa - Main Campus",
    college: "College of Science",
    courses: [
      "Bachelor of Science in Biology",
      "Bachelor of Science in Geology**"
    ]

  },

  {

    campus: "Goa - Main Campus",
    college: "College of Integrated Arts and Humanities",
    courses: [
      "Bachelor of Arts in Communication"
    ]

  },

  {
    
    campus: "Goa - Main Campus",
    college: "College of Economics and Accountancy",
    courses: [
      "Bachelor of Science in Accountancy**",
      "Bachelor of Science in Business Administration Major in Financial Management",
      "Bachelor of Science in Economics",
      "Bachelor of Science in Entrepreneurship",
      "Bachelor of Science in Office Administration"
    ]

  },

  {

    campus: "Goa - Main Campus",
    college: "College of Engineering and Computational Science",
    courses: [
      "Bachelor of Science in Civil Engineering**",
      "Bachelor of Science in Sanitary Engineering**",
      "Bachelor of Engineering Technology Major in Electrical Engineering Technology",
      "Bachelor of Engineering Technology in Mechanical Technology Major in Automotive Technology",
      "Bachelor of Engineering Technology in Mechanical Technology Major in Refrigeration and Air-conditioning Technology",
      "Bachelor of Science in Information Technology",
      "Bachelor of Science in Computer Science"
    ]

  },

  {

    campus: "Salogon Campus",
    college: "College of Agribusiness and Community Development",
    courses: [
      "Bachelor of Science in Agribusiness",
      "Bachelor of Science in Community Development"
    ]

  },

  {

    campus: "San Jose Campus",
    college: "College of Management and Tourism",
    courses: [
      "Bachelor of Science in Hospitality Management",
      "Bachelor of Science in Tourism Management"
    ]

  },

  {

    campus: "Lagonoy Campus",
    college: "College of Public Safety and Community Health",
    courses: [
      "Bachelor of Science in Criminology**",
      "Bachelor of Science in Nutrition and Dietetics**",
      "Bachelor of Science in Industrial Security Management"
    ]

  },

  {

    campus: "Sagñay Campus",
    college: "College of Fisheries and Marine Science",
    courses: [
      "Bachelor of Science in Fisheries**",
      "Bachelor of Science in Marine Biology"
    ]

  },

  {

    campus: "Tinambac Campus",
    college: "College of Environmental Science and Environmental Design",
    courses: [
      "Bachelor of Science in Environmental Science",
      "Bachelor of Science in Environmental Planning**",
      "Bachelor of Science in Forestry**"
    ]

  },

  {

    campus: "Caramoan Campus",
    college: "College of Sustainable Communities and Ecosystems",
    courses: [
      "Bachelor of Science in Biology Major in Conservation and Restoration Ecology",
      "Bachelor of Science in Tourism Management Major in Ecotourism",
      "Bachelor of Science in Hospitality Management"
    ]

  }
  
];