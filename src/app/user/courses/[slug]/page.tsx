import { notFound } from "next/navigation";
import { courses } from "@/src/data/courses"; // mock or real data
import Button from "@/src/components/common/button";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import Link from "next/link";

const CourseCard: React.FC<{
  imageSrc: string;
  title: string;
  description: string;
}> = ({ imageSrc, title, description }) => {
  return (
    <div className="flex bg-white shadow-xl p-4 md:p-6 w-full max-w-xl mx-auto md:mb-10">
      {/* Image Section */}
      <div className="flex-shrink-0 flex items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-gray-5 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={260}
          height={360}
          className="object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="ml-6 flex flex-col justify-center">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
          {title}
        </h3>
        <p className="mt-2 text-sm md:text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
};


type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default function CourseDetailPage({ params }: Props) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return notFound();

  return (
    <div className="font-sans  min-h-screen">
      {/* Header/Breadcrumb */}
      <div className="bg-[#01589A] h-[427px]"></div>
      {/* Main Content Area */}
      <div className="max-w-[1238px] items-center justify-center mx-auto">
        <div className="-mt-[427px] z-10 relative container mx-auto p-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - Description & What You'll Learn */}
            <div className="flex-1 max-w-full md:max-w-[720px]">
              <div className="text-white">
                <div className="text-sm pt-12 mb-6">
                <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-white hover:font-bold">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Home
                </Link>
            </li>
            <li>
                <div className="flex items-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <Link href="/user/courses" className="ml-1 text-sm font-medium text-white hover:font-bold md:ml-2">courses</Link>
                </div>
            </li>
            <li aria-current="page">
                <div className="flex items-center">
                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="ml-1 text-sm font-medium text-white md:ml-2">{course.slug}</span>
                </div>
            </li>
        </ol>
    </nav>
                </div>
                <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                <p className="mb-6">{course.description}</p>

                <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 mb-8">
                  <div>
                    <p className="font-semibold">Instructor</p>
                    <p>{course.instructor}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Enrolled students</p>
                    <p>{course.students}</p>
                  </div>
                  <div>
                    <p className="font-semibold">1 review</p>
                    Rating{" "}
                    <span className="ml-2 flex">
                      {Array.from({ length: 5 }).map((_, i) =>
                        course.rating > i ? (
                          <FaStar key={i} className="text-yellow-400" />
                        ) : (
                          <FaRegStar key={i} className="text-yellow-400" />
                        )
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* What You'll Learn */}
              <div className="bg-white border border-1/2 border-gray-200  p-6 mt-36 w-full max-w-[750px]">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  What you&apos;ll learn
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {course.whatYouLearn.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Course Details */}
            <div className="w-full md:w-[402px] mt-[45px] -mr-[100px]">
              <div className="bg-white p-[20px] pt-[11px]">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={363}
                  height={297}
                  className="w-[363px] h-[290px]"
                />

                <div className="p-4">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-300 pb-3">
                    Course Details
                  </h2>

                  {/* Course Details List */}
                  <div className="space-y-4 text-gray-700">
                    {/* Duration */}
                    <div className="flex items-center justify-between pb-2 border-b border-gray-300">
                      <div className="flex items-center">
                        {/* Font Awesome Clock icon */}
                        {/* Make sure you have Font Awesome included in your project */}
                        <i className="fas fa-clock h-5 w-5 mr-3 text-gray-500"></i>
                        <span>Duration</span>
                      </div>
                      <span>{course.duration}</span>
                    </div>

                    {/* Courses */}
                    <div className="flex items-center justify-between pb-2 border-b border-gray-300">
                      <div className="flex items-center">
                        {/* Font Awesome Graduation Cap icon */}
                        {/* Make sure you have Font Awesome included in your project */}
                        <i className="fas fa-graduation-cap h-5 w-5 mr-3 text-gray-500"></i>
                        <span>Courses</span>
                      </div>
                      <span>{course.courses}</span>
                    </div>

                    {/* Instructor */}
                    <div className="flex items-center justify-between pb-2 border-b border-gray-300">
                      <div className="flex items-center">
                        {/* Font Awesome User icon */}
                        {/* Make sure you have Font Awesome included in your project */}
                        <i className="fas fa-user h-5 w-5 mr-3 text-gray-500"></i>
                        <span>Instructor</span>
                      </div>
                      <span>{course.instructor}</span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center justify-between pb-4">
                      {" "}
                      {/* No border-b on the last item */}
                      <div className="flex items-center">
                        {/* Font Awesome Calendar icon */}
                        {/* Make sure you have Font Awesome included in your project */}
                        <i className="fas fa-calendar-alt h-5 w-5 mr-3 text-gray-500"></i>
                        <span>Date</span>
                      </div>
                      <span>{course.startDate}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-3xl font-bold text-gray-800 mt-4 mb-6 text-center">
                    {course.price}
                  </div>

                  {/* Enroll Button */}
                  <Button className="w-full">Enroll</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Explore related courses section */}
        <div className="container mx-auto mt-8 p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Explore related courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {course.relatedCourses.map((item, i) => (
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
    </div>
  );
}
