'use client';

import Image from 'next/image';

const enrolledCourses = [
  {
    title: 'Quick Introduction to ReactJs',
    tech: 'ReactJs',
    image: '/softwareCourse.jpg',
    status: 'Registered',
  },
  {
    title: 'Quick Introduction to NodeJs',
    tech: 'NodeJs',
    image: '/softwareCourse.jpg',
    status: 'Registered',
  },
  {
    title: 'Quick Introduction to NextJs',
    tech: 'NextJs',
    image: '/softwareCourse.jpg',
    status: 'Registered',
  },
  {
    title: 'Quick Introduction to Django',
    tech: 'Django',
    image: '/softwareCourse.jpg',
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
      image: '/softwareCourse.jpg',
  },
];

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
      <section>
        <h2 className="text-lg font-semibold mb-10">Rate us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rateUs.map((item, index) => (
            <div key={index} className="flex bg-white shadow rounded p-4 items-center gap-4">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="w-24 h-24 object-contain"
              />
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
