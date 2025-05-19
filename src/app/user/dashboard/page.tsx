'use client';

import Image from 'next/image';

const enrolledCourses = [
  {
    title: 'Quick Introduction to ReactJs',
    tech: 'ReactJs',
    image: '/react.jpg',
    status: 'Registered',
  },
  {
    title: 'Quick Introduction to NodeJs',
    tech: 'NodeJs',
    image: '/node.png',
    status: 'Registered',
  },
  {
    title: 'Quick Introduction to NextJs',
    tech: 'NextJs',
    image: '/next.png',
    status: 'Registered',
  },
  {
    title: 'Quick Introduction to Django',
    tech: 'Django',
    image: '/django.png',
    status: 'Registered',
  },
];

const rateUs = [
  {
    title: 'Software Development',
    description: 'Unlock your potential with comprehensive training in modern software development',
    image: '/softwareCourse.jpg',
  },
  {
    title: 'Cloud Computing',
    description:
      'Gain hands-on experience in cloud architecture, preparing you to manage scalable solutions.',
      image: '/cloudCourse.jpg',
  },
];

const CourseCard: React.FC<{
  imageSrc: string;
  title: string;
  description: string;
}> = ({ imageSrc, title, description }) => {
  return (
    // Card component for related courses
    <div className="flex items-center bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl hover:cursor-pointer transition-shadow">
      <div className="mr-6 flex-shrink-0">
        <Image
          src={imageSrc}
          alt={title}
          width={202}
          height={209}
          className="object-contain"
        />
      </div>
      <div>
        <h3 className="text-md font-bold mb-1 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>


  );
};

export default function Dashboard() {
  return (
    <div className="p-6 space-y-10">
      {/* Enrolled Section */}
      <section>
        <h2 className="text-lg font-semibold mb-10">Enrolled courses</h2>

        <div>
          <h3 className="text-base font-medium mb-10">Software Development Track</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {enrolledCourses.map((course, index) => (
              <div key={index} className="bg-white shadow-2xl rounded-lg overflow-hidden relative min-h-[354px] w-[242px]">
                <Image
                  src={course.image}
                  alt={course.tech}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">{course.tech}</p>
                  <h4 className="font-semibold text-sm">{course.title}</h4>
                  <p className="text-[#01589A] text-md absolute bottom-2 left-4">{course.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rate Us Section */}
      <div className="container mx-auto mt-8 p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Explore related courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rateUs.map((item, i) => (
              <CourseCard
                key={i}
                imageSrc={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
    </div>
  );
}
