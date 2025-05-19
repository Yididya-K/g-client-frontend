// /data/courses.ts
export const courses = [
    {
      slug: "software-development-track",
      title: "Software Development Track",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quaerat nesciunt asperiores veritatis delectus temporibus enim dolorem nemo impedit quidem culpa optio aperiam voluptas minima, voluptate non perspiciatis fuga veniam.",
      instructor: "John Doe",
      students: 50,
      rating: 4,
      duration: "12 weeks",
      courses: 4,
      startDate: "03/2025",
      price: 350,
      image: "/softwareCourse.jpg",
      whatYouLearn: [
        "Build 16 web development projects for your portfolio.",
        "Build ANY website you want.",
        "Build fully-fledged websites and web apps.",
        "Master frontend with React, Next.js, HTML, CSS, Vue, Angular.",
        "Master backend with Node, PHP, Python etc.",
      ],
      relatedCourses: [
        {
          title: "Data Science Mastery",
          description: "Equip yourself with the skills to analyze, interpret, and leverage data, becoming an expert.",
          image: "/datascienceCourse.jpg",
          slug: "data-science-mastery"
        },
        {
          title: "Cloud Computing",
          description: "Gain hands-on experience in cloud architecture, preparing you to  manage scalable solutions.",
          image: "/cloudCourse.jpg",
          slug: "cloud-computing"
        },
      ],
    },
    {
      slug: "cloud-computing",
      title: "Cloud Computing",
      description: "Gain experience in managing scalable cloud solutions.rem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quaerat nesciunt asperiores veritatis delectus temporibus enim dolo",
      instructor: "Jane Smith",
      students: 30,
      rating: 3,
      duration: "8 weeks",
      courses: 3,
      startDate: "04/2025",
      price: 300,
      image: "/cloudCourse.jpg",
      whatYouLearn: [
        "Deploy applications in cloud environments.",
        "Understand AWS, Azure, and GCP basics.",
        "Set up scalable solutions with Docker and Kubernetes.",
      ],
      relatedCourses: [
        {
          title: "Software Development Track",
          description: "Learn full-stack development.",
          image: "/softwareCourse.jpg",
          slug: "software-development-track"
        },
        {
          title: "Software Development Track",
          description: "Learn full-stack development.",
          image: "/softwareCourse.jpg",
          slug: "software-development-track"
        },
      ],
    },
  ];
  