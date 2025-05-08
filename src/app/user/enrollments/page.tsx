import React from 'react';

// Define the main component for the course page
const CoursePage: React.FC = () => {
  // Define the rating value (e.g., 4 out of 5)
  const rating = 4;

  return (
    // Outermost container - removed min-h-screen and background color
    <div className="font-sans">

      {/* Blue background section */}
      {/* This div now contains only the content that should have the blue background */}
      {/* Increased padding-bottom to ensure background extends below the grid content */}
      <div className="bg-blue-700 text-white p-8 pb-16">
        <div className="container mx-auto">
          {/* Breadcrumbs Navigation */}
          <nav className="mb-8 text-sm text-blue-200">
            <a href="#" className="hover:text-white">Home</a>
            <span className="mx-2">&gt;</span>
            <a href="#" className="hover:text-white">courses</a>
            <span className="mx-2">&gt;</span>
            <span className="text-white">Software Development</span>
          </nav>

          {/* Main content area using Grid for responsiveness */}
          {/* Align grid items to the end (bottom) to make the blue background height consistent */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 items-end">

            {/* Left Column: Course Information */}
            {/* No extra padding needed here as items-end handles alignment */}
            <div>
              {/* Course Title */}
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Software Development Track
              </h1>
              {/* Course Description */}
              <p className="text-lg text-blue-100 mb-6">
                Unlock your potential with comprehensive training in modern software
                development. Become a Full-Stack Web Developer with a single
                comprehensive course covering HTML, CSS, JavaScript, Node, React,
                PostgreSQL, Web3, and DApps.
              </p>

              {/* Instructor, Enrollment, and Review Info */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 items-center text-sm">
                {/* Instructor Info */}
                <div>
                  <span className="block text-blue-200 font-medium">Instructor</span>
                  <span className="font-semibold">John Doe</span>
                </div>
                {/* Enrolled Students Info */}
                <div>
                  <span className="block text-blue-200 font-medium">Enrolled students</span>
                  <span className="font-semibold">50</span>
                </div>
                {/* Review Info */}
                <div>
                  <span className="block text-blue-200 font-medium">1 review</span>
                  {/* Star Rating - using SVG icons */}
                  <div className="flex items-center gap-1">
                    {/* Loop to create 5 stars */}
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          // Apply yellow color if index is less than rating, otherwise gray
                          className={`w-4 h-4 ${
                            i < rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.943a1 1 0 00.95.69h4.146c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.943c.3.921-.755 1.688-1.54 1.118L10 13.011l-3.357 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.943a1 1 0 00-.364-1.118L2.67 9.37c-.783-.57-.38-1.81.588-1.81h4.146a1 1 0 00.95-.69l1.286-3.943z" />
                        </svg>
                      ))}
                  </div>
                </div>
              </div>
            </div> {/* End Left Column */}

            {/* Right Column: Image */}
            {/* This column now just contains the image within the blue background */}
            {/* Use flex utilities to align the image correctly */}
           

          </div> {/* End Grid */}
        </div> {/* End Container */}
      </div> {/* End Blue Background Section */}

      {/* Course Details Card Section - Positioned below the blue section */}
      {/* Use container and padding to align with content above */}
      <div className="container mx-auto px-8">
        
        {/* Align the card horizontally consistent with the image above */}
        <div className="flex justify-center md:justify-end">
      
           <div className="bg-white text-gray-800 p-4 rounded-lg shadow-xl text-center w-full max-w-md -mt-8 relative z-10">
           <img
                // Using a placeholder image service - replace with your actual image URL
                src="https://placehold.co/600x400/3b82f6/ffffff?text=Course+Image"
                alt="Software Development Course Illustration"
                className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover" // Image styling
             
              />
              <h3 className="font-semibold text-lg">Course Details</h3>
           </div>
        </div>
      </div>

      {/* Optional: Add more content below here, it will have the default white background */}
      {/* <div className="container mx-auto p-8 mt-8"> */}
      {/* <h2 className="text-2xl font-bold mb-4">Full Course Curriculum</h2> */}
      {/* <p>Module 1: ...</p> */}
      {/* </div> */}

    </div> // End Outermost container
  );
};

// Export the component as default
export default CoursePage;
