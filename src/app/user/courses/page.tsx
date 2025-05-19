
import CourseCard from "@/src/components/user/CourseCard";
import { CiSearch } from "react-icons/ci";
const courses = [
  {
    id: 1,
    title: "Software Development",
    description: "Unlock your potential with comprehensive training in modern software development",
    rating: 4,
    price: 350,
    image: "/softwareCourse.jpg",
  },
  {
    id: 2,
    title: "Data Science Mastery",
    description: "Equip yourself with the skills to analyze, interpret, and leverage data.",
    rating: 4,
    price: 350,
    image: "/datascienceCourse.jpg",
  },
  {
    id: 3,
    title: "Cloud Computing Expertise",
    description: "Gain hands-on experience in cloud preparing you to manage scalable...",
    rating: 4,
    price: 350,
    image: "/cloudCourse.jpg",
  },
];

export default function CoursesPage() {
  return (
    <div id="top" className="scroll-smooth">
      

      {/* Hero Section */}
      <section className="bg-[#01589A] text-white text-center py-10">
        <h1 className="text-3xl font-semibold">Courses</h1>
      </section>

      {/* Search Bar */}
      <section className="relative w-full max-w-3xl mx-auto my-10 bg-gray-100">
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-xl">
        <CiSearch />
      </span>
      <input
        type="text"
        placeholder="Search course"
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      </section>

      {/* Course List */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2 className="text-xl font-semibold mb-6">Top Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {courses.map((course) => (
    <CourseCard
      key={course.id}
      title={course.title}
      description={course.description}
      rating={course.rating}
      price={course.price}
      image={course.image}
    />
  ))}
</div>
      </section>

    
    </div>
  );
}
