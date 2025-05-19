import { notFound } from "next/navigation";
import { courses } from "@/src/data/courses"; // mock or real data
import Button from "@/src/components/common/button";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import {Clock,GraduationCap ,User, CalendarDays} from "lucide-react"
import Link from "next/link";

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
                    <span className="ml-1 text-md font-bold text-white md:ml-2">{course.slug}</span>
                </div>
            </li>
        </ol>
    </nav>
                </div>
                <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                <p className="mb-6">{course.description}</p>

                <div className="grid grid-cols-3 sm:grid-cols-3  mb-8 max-w-5/6">
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
                      <Clock className="h-5 w-5 mr-2"/>
                        
                        <span>Duration</span>
                      </div>
                      <span>{course.duration}</span>
                    </div>

                    {/* Courses */}
                    <div className="flex items-center justify-between pb-2 border-b border-gray-300">
                      <div className="flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2"/>
                        
                        <span>Courses</span>
                      </div>
                      <span>{course.courses}</span>
                    </div>

                    {/* Instructor */}
                    <div className="flex items-center justify-between pb-2 border-b border-gray-300">
                      <div className="flex items-center">
                      <User className="h-5 w-5 mr-2"/>
                       
                        <span>Instructor</span>
                      </div>
                      <span>{course.instructor}</span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center justify-between pb-4 border-b border-gray-300">
                      {" "}
                 
                      <div className="flex items-center">
                     
                      <CalendarDays className="h-5 w-5 mr-2" />
                        <span>Date</span>
                      </div>
                      <span>{course.startDate}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-2xl font-semibold text-gray-800 mt-4 mb-6 text-center">
                   ${course.price}
                  </div>

                  {/* Enroll Button */}
                  <Button className="w-full items-center justify-center">Enroll</Button>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
