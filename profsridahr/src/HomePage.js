// import React from 'react';
// import professorPhoto from './professorPhoto.jpeg'; // Adjust the path as necessary


// const HomePage = () => {
//   return (
//     <div className="container mx-auto px-4">
//      <header className="bg-blue-900 text-white text-center p-8">
//   <img src={professorPhoto} alt="Ramalingam Sridhar" className="mx-auto rounded-full w-40 h-40 object-cover mb-4 border-4 border-white shadow-xl" />
//   <h1 className="text-4xl font-bold mb-2">Ramalingam Sridhar</h1>
//   <p className="text-xl">Associate Professor, Department of Computer Science and Engineering</p>
//   <p>University at Buffalo, The State University of New York</p>
// </header>


// <nav className="flex justify-center space-x-4 bg-gray-100 p-4 shadow-md">
//   {['Bio', 'Research/HPVSA Lab', 'Teaching', 'Publications', 'Professional Activities', 'News', 'Resource Links'].map((item) => (
//     <a href={`#${item.toLowerCase()}`} className="text-blue-600 hover:text-blue-800 font-medium">{item}</a>
//   ))}
// </nav>


//       <main>
//         <section id="bio" className="my-8">
//           <h2 className="text-3xl font-bold mb-4">Bio</h2>
//           <p><strong>Research Focus:</strong> Green Computing, Energy-aware mobile systems, Internet of Things – Hardware, Systems and Security, VLSI Circuits and Systems, Wireless Networks and Security, Embedded Technologies, Computer Architecture.</p>

//           <p><strong>Distinguished Lecturer, IEEE Circuits and Systems Society:</strong> Jan 2003 - Dec 2004.</p>

//           <p><strong>Recent and Current Journal Editorship:</strong> IEEE Transactions on VLSI Systems, Journal of Circuits, Systems and Computers, IEEE Circuits and Devices, IEEE Transactions on Circuits & Systems I - Fundamental Theory and Applications, and IEEE Transactions on Circuits & Systems II - Analog and Digital Signal Processing, International Journal of Computers and Their Applications (IJCA).</p>

//           <p><strong>Recent Professional Activities:</strong> SoCC 2015, SoCC 2014 Steering Committee; SoCC 2013 Steering Committee Chair, SoCC 2012 General Chair; SOCC 2010 & 2011: Program Chair; MobiHoc 2006, WowMom 2006, WonGen 2005, ASIC/SoC and SoC Conference, International Symposium on Circuits and Systems, Great Lakes Symposium on VLSI, and Signal Processing Systems in many capacities (Conference Chair, Steering Committee Chair, Program Chair, Steering Committee member, or Program committee member).</p>

//           <p><strong>Member:</strong> IEEE CAS Society Technical Committee on VLSI Systems and Applications, Communications, Nanotechnologies and GigaScale Integration, Multimedia Systems and Applications, Neural Networks and Applications. Past chair, VLSI Systems and Applications TC, IEEE CAS.</p>
//         </section>
//         {/* Repeat for other sections */}
//       </main>

//       <footer className="bg-gray-800 text-white text-center p-6">
//         Contact info and other details here...
//       </footer>
//     </div>
//   );
// };
// export default HomePage;
import React from 'react';
import professorPhoto from './professorPhoto.jpeg'; // Ensure this path correctly points to the photo file
const HomePage = () => {
  return (
    <div className="min-h-screen bg-soft-gray flex flex-col">
      <header className="bg-deep-purple text-sunny-yellow text-center py-12 shadow-lg">
        <img src={professorPhoto} alt="Ramalingam Sridhar" className="mx-auto rounded-full w-48 h-48 object-cover mb-6 border-4 border-sunny-yellow shadow-xl transform hover:scale-110 transition-transform duration-300 ease-in-out" />
        <h1 className="text-5xl font-bold mb-2">Ramalingam Sridhar</h1>
        <p className="text-xl mb-1">Associate Professor, Department of Computer Science and Engineering</p>
        <p>University at Buffalo, The State University of New York</p>
      </header>
      <nav className="flex justify-center space-x-4 bg-deep-purple p-4 shadow-md text-sunny-yellow">
        {['Bio', 'Research/HPVSA Lab', 'Teaching', 'Publications', 'Professional Activities', 'News', 'Resource Links'].map((item, index) => (
          <a key={index} href={`#${item.toLowerCase()}`} className="hover:underline font-medium transition-colors duration-200">{item}</a>
        ))}
      </nav>
      <main className="flex-grow">
        <section id="bio" className="prose prose-lg p-6 mx-auto text-gray-800">
          <h2 className="text-deep-purple">Bio</h2>
          <p><strong>Research Focus:</strong> Green Computing, Energy-aware mobile systems, Internet of Things – Hardware, Systems and Security, VLSI Circuits and Systems, Wireless Networks and Security, Embedded Technologies, Computer Architecture.</p>
          <p><strong>Distinguished Lecturer, IEEE Circuits and Systems Society:</strong> Jan 2003 - Dec 2004.</p>
          <p><strong>Recent and Current Journal Editorship:</strong> IEEE Transactions on VLSI Systems, Journal of Circuits, Systems and Computers, IEEE Circuits and Devices, IEEE Transactions on Circuits & Systems I - Fundamental Theory and Applications, and IEEE Transactions on Circuits & Systems II - Analog and Digital Signal Processing, International Journal of Computers and Their Applications (IJCA).</p>
          <p><strong>Recent Professional Activities:</strong> SoCC 2015, SoCC 2014 Steering Committee; SoCC 2013 Steering Committee Chair, SoCC 2012 General Chair; SOCC 2010 & 2011: Program Chair; MobiHoc 2006, WowMom 2006, WonGen 2005, ASIC/SoC and SoC Conference, International Symposium on Circuits and Systems, Great Lakes Symposium on VLSI, and Signal Processing Systems in many capacities (Conference Chair, Steering Committee Chair, Program Chair, Steering Committee member, or Program committee member).</p>
          <p><strong>Member:</strong> IEEE CAS Society Technical Committee on VLSI Systems and Applications, Communications, Nanotechnologies and GigaScale Integration, Multimedia Systems and Applications, Neural Networks and Applications. Past chair, VLSI Systems and Applications TC, IEEE CAS.</p>
        </section>
        {/* Additional sections can be added here */}
      </main>
      <footer className="bg-deep-purple text-sunny-yellow text-center p-6 mt-12">
        <p>Contact info and other details here...</p>
      </footer>
    </div>
  );
};
export default HomePage;
