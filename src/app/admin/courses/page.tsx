"use client";
import { useRouter } from "next/navigation";
import InputField from "@/src/components/admin/Inputs/inputField";

import Button from "@/src/components/common/button";
import { Plus, Search } from "lucide-react";
import { FC, useState } from "react";
import SelectField from "@/src/components/admin/Inputs/SelectField";

import CourseTable from "@/src/components/admin/tables/courseTable";


interface Course {
    id: number;
    imageUrl: string; 
    course: string;
    track: string;
    detail?: string;
}

const courses: Course[] = [
    {
        id: 1, // Added ID as it's used in handleSave
        imageUrl: '/react.jpg', // replace with actual image path
        course: 'ReactJs',
        track: 'Software Development',
    },
    {
        id: 2,
        imageUrl: '/node.png',
        course: 'NodeJs',
        track: 'Software Development',
    },
    {
        id: 3,
        imageUrl: '/next.png',
        course: 'PowerBI',
        track: 'Data Science',
    },
    {
        id: 4,
        imageUrl: '/django.png',
        course: 'Dockers',
        track: 'Cloud Computing',
    },
    {
        id: 5,
        imageUrl: '/react.png',
        course: 'Python',
        track: 'Data Science',
    },
];

const CourseList: FC = () => { // Renamed component to CourseList for clarity

    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null); // Changed state variable name and type

    const handleCreate = () => {
        setSelectedCourse(null);
        // Logic for navigating to a course creation page or opening a modal
        router.push("/admin/courses/new"); // Assuming a route for creating courses
    };

    // Changed parameter type from Learners to Course
    const handleEdit = (course: Course) => { 
        setSelectedCourse(course);
        // Logic for navigating to a course edit page or opening a modal
        router.push(`/admin/courses/edit/${course.id}`); // Assuming a route for editing courses
    };

    const handleCancel = () => {
        setSelectedCourse(null);
      
    };

    const router = useRouter();


    const handleSave = (formData: {
        courseName: string; // Example field name for course
        track: string; // Example field name for track
        // Add other relevant fields for a course
    }) => {
        const courseData: Course = {
            id: selectedCourse ? selectedCourse.id : courses.length + 1, // Basic ID assignment
            imageUrl: selectedCourse ? selectedCourse.imageUrl : '/images/default-course.png', // Default image for new course
            course: formData.courseName,
            track: formData.track,
            // Map other form fields to Course properties
        };

        if (selectedCourse) {
            // Update logic here (e.g., API call to update course)
            console.log("Updating course:", courseData);
        } else {
            // Create logic here (e.g., API call to create new course)
            console.log("Creating course:", courseData);
        }
        handleCancel(); // Close form/modal after saving
    };

    return (
        <div className="p-6 ">
            <div className="flex justify-between items-center mb-4">
                {/* Changed heading */}
                <h2 className="text-xl font-semibold">Courses</h2> 
            </div>

            <div className="flex items-center mb-4 gap-4">
                <InputField
                    type="text"
                    // Changed placeholder
                    placeholder="Search Course" 
                    leftIcon={<Search className="h-4 w-4 " />}
                    className="flex-1 min-w-2/3"
                />
                <SelectField
                    placeholder="Sort by"
                    options={[
                        { value: "course", label: "Course Name" }, 
                        { value: "track", label: "Track" },
                   
                    ]}
                />
                <Button
                    onClick={handleCreate} 
                    className="flex-shrink-0"
                    rightIcon={<Plus className="h-4 w-4 ml-2" />}
                >
                    {/* Changed button text */}
                    Create course 
                </Button>
            </div>

         
            <CourseTable data={courses} resultsPerPageOptions={[5, 10, 25]} /> 

        </div>
    );
};

export default CourseList; // Export the renamed component