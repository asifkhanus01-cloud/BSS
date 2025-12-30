/**
 * Content Management System
 * Centralized content configuration for the school website
 * Follows full-stack developer best practices for content management
 */

import { schoolInfo } from "./schoolInfo";

// Directors Data
export const directors = [
    {
        id: "waleed-khan-khalil",
        slug: "waleed-khan-khalil",
        name: "Waleed Khan Khalil",
        title: "Director of Academics",
        image: "/images/director-waleed-photo-blue-bg.jpeg",
        bio: "Focused on curriculum innovation and teacher training to ensure our syllabus meets international standards. With over 15 years of experience in educational leadership.",
        email: "waleed@benchmark.edu.pk",
        qualifications: ["M.Ed", "Curriculum Development Specialist"],
        yearsOfExperience: 15,
        achievements: [
            "Led curriculum modernization initiative",
            "Trained 50+ teachers in modern pedagogy"
        ]
    },
    {
        id: "noman-khan",
        slug: "noman-khan",
        name: "Noman Khan",
        title: "School Director",
        image: "/images/director-numan.jpg",
        bio: "A visionary educator with over 20 years of experience in shaping the academic landscape of Peshawar. Believes in strict discipline and high academic standards.",
        email: "noman@benchmark.edu.pk",
        qualifications: ["M.A Education", "Educational Leadership"],
        yearsOfExperience: 20,
        achievements: [
            "Established Benchmark School System",
            "100% matric pass rate for 10 consecutive years"
        ]
    }
];

// Staff Members Data
export const staff = [
    {
        id: "shahid-khan",
        name: "Shahid Khan",
        title: "Principal",
        image: "/images/hassan-photo.jpg", // Update with actual image
        bio: "The pillar of our daily operations. Dedicated to ensuring a safe, structured, and nurturing environment for every student.",
        department: "Administration",
        email: "shahid@benchmark.edu.pk",
        qualifications: ["M.Ed", "School Administration"]
    }
    // Add more staff members as needed
];

// Academic Programs Data
export const academicPrograms = [
    {
        id: "montessori",
        title: "Preschool & Montessori",
        description: "Activity-based learning that builds confidence. We focus on curiosity and fun, not heavy school bags.",
        grades: "Pre-Nursery to KG",
        image: "/images/kid-photo.jpg",
        features: [
            "Play-based learning",
            "Small class sizes",
            "Experienced teachers",
            "Safe environment"
        ]
    },
    {
        id: "primary",
        title: "Primary & Character Building",
        description: "No ratta (rote learning). We build strong concepts in Math and Science while ensuring good moral character (Tarbiyat).",
        grades: "Grades 1 to 5",
        image: "/images/school-kids-1.jpg",
        features: [
            "Concept-based learning",
            "Character development",
            "Regular assessments",
            "Parent involvement"
        ]
    },
    {
        id: "secondary",
        title: "Secondary & Matriculation",
        description: "Serious preparation for Board exams. We focus on science practicals and high marks to secure their future in Medical or Engineering.",
        grades: "Grades 9 & 10 (BISE Peshawar)",
        image: "/images/exam-photo.jpg",
        features: [
            "Board exam preparation",
            "Science practicals",
            "Monthly tests",
            "Result-oriented approach"
        ]
    }
];

// Events Data - Enhanced with more events and details
export const events = [
    {
        id: "annual-day-2024",
        title: "Annual Day Celebration",
        date: "2024-12-15",
        time: "10:00 AM",
        description: "Annual day celebration with performances, awards, and speeches. Join us for a day of celebration and recognition of our students' achievements.",
        fullDescription: "Our Annual Day is a grand celebration of the academic year, featuring student performances, award ceremonies, and speeches from distinguished guests. This event showcases the talents and achievements of our students across academics, sports, and arts.",
        image: "/images/annual-day.JPG",
        location: "School Main Hall",
        type: "celebration",
        category: "celebration",
        featured: true,
        slug: "annual-day-2024"
    },
    {
        id: "sports-day-2024",
        title: "Sports Day",
        date: "2024-11-20",
        time: "8:00 AM",
        description: "Annual sports day with various competitions and activities. Students compete in track and field events, team sports, and fun activities.",
        fullDescription: "Sports Day is one of our most anticipated events of the year. Students from all grades participate in various athletic competitions including track and field events, team sports like cricket and football, and fun activities. The day promotes physical fitness, teamwork, and sportsmanship.",
        image: "/images/principal-shahid-playing-w-kids.jpg",
        location: "School Ground",
        type: "sports",
        category: "sports",
        featured: true,
        slug: "sports-day-2024"
    },
    {
        id: "mid-term-exams-2024",
        title: "Mid-term Examinations",
        date: "2024-10-14",
        time: "9:00 AM",
        description: "Comprehensive mid-term assessments across all subjects. Students sit for examinations to evaluate their progress.",
        fullDescription: "Mid-term examinations are comprehensive assessments that evaluate students' understanding and progress across all subjects. These exams help identify areas of strength and areas that need improvement, allowing teachers to adjust their teaching strategies accordingly.",
        image: "/images/exam-photo.jpg",
        location: "Main Campus",
        type: "academic",
        category: "academics",
        featured: false,
        slug: "mid-term-examinations-2024"
    },
    {
        id: "science-exhibition-2024",
        title: "Science Exhibition",
        date: "2024-10-15",
        time: "2:00 PM",
        description: "Students showcase research projects and experimental work. A display of innovation and scientific inquiry.",
        fullDescription: "Our Science Exhibition provides students with an opportunity to showcase their research projects, experiments, and scientific innovations. This event encourages scientific thinking, creativity, and hands-on learning. Parents and visitors can explore various projects and interact with our young scientists.",
        image: "/images/school photo.jpg",
        location: "Gymnasium",
        type: "academic",
        category: "academics",
        featured: false,
        slug: "science-exhibition-2024"
    },
    {
        id: "inter-house-cricket-2024",
        title: "Inter-house Cricket Tournament",
        date: "2024-10-24",
        time: "3:00 PM",
        description: "Houses compete in spirited cricket matches. A day of friendly competition and team spirit.",
        fullDescription: "The Inter-house Cricket Tournament brings together students from different houses in friendly but competitive matches. This event promotes teamwork, sportsmanship, and house spirit. Students cheer for their house teams and celebrate victories together.",
        image: "/images/school-kids-1.jpg",
        location: "Athletic Field",
        type: "sports",
        category: "sports",
        featured: false,
        slug: "inter-house-cricket-2024"
    },
    {
        id: "winter-break-ends-2024",
        title: "Winter Break Ends - Classes Resume",
        date: "2025-02-05",
        time: "8:00 AM",
        description: "Classes resume with renewed energy and focus. Students return refreshed and ready for the new term.",
        fullDescription: "After a well-deserved winter break, students return to school with renewed energy and enthusiasm. The new term brings fresh opportunities for learning, growth, and achievement. Teachers are ready to guide students through the remaining academic year.",
        image: "/images/school photo.jpg",
        location: "Main Campus",
        type: "academic",
        category: "academics",
        featured: false,
        slug: "winter-break-ends-2024"
    }
];

// Blog Posts Data
export const blogPosts = [
    {
        id: "blog-1",
        slug: "importance-of-discipline",
        title: "The Importance of Discipline in Education",
        excerpt: "Discipline is the foundation of academic excellence and character building.",
        content: `
            <h3>Introduction</h3>
            <p>Discipline is the foundation of academic excellence and character building. At Benchmark School System, we believe that discipline is not about punishment, but about creating an environment where students can thrive and reach their full potential.</p>
            
            <p>Our approach to discipline focuses on teaching students self-control, responsibility, and respect for themselves and others. Through consistent expectations and positive reinforcement, we help students develop the habits and attitudes that lead to success both in and out of the classroom.</p>
            
            <h4>Building Character Through Discipline</h4>
            <p>Character building is at the heart of our educational philosophy. We understand that academic success alone is not enough—students must also develop strong moral character, integrity, and the ability to make good decisions.</p>
            
            <blockquote>"Discipline is the bridge between goals and accomplishment." - Jim Rohn</blockquote>
            
            <p>Our monthly inspections, regular assessments, and structured routines help students develop the self-discipline needed to succeed in their studies and in life. These practices teach students to be accountable for their actions and to take pride in their work.</p>
            
            <h4>Conclusion</h4>
            <p>At Benchmark School System, discipline and character building go hand in hand. We are committed to providing an environment where students can develop both academically and personally, preparing them to be leaders in their communities and beyond.</p>
        `,
        author: "Noman Khan",
        authorImage: "/images/director-numan.jpg",
        date: "2024-01-15",
        image: "/images/school photo.jpg",
        category: "Education",
        tags: ["discipline", "education", "character"]
    }
    // Add more blog posts as needed
];

// FAQ Data
export const faqs = [
    {
        id: "faq-1",
        question: "What are the admission requirements?",
        answer: "Admission requirements include previous school records, entrance test, and parent interview. Please visit our admissions page for detailed information.",
        category: "admissions"
    },
    {
        id: "faq-2",
        question: "What is the fee structure?",
        answer: "Our fee structure is competitive and varies by grade level. Please contact our admissions office for detailed fee information.",
        category: "fees"
    },
    {
        id: "faq-3",
        question: "Do you offer scholarships?",
        answer: "Yes, we offer scholarships for top-performing students. Scholarships are available for students who excel in academics and demonstrate financial need.",
        category: "scholarships"
    },
    {
        id: "faq-4",
        question: "What are the school timings?",
        answer: "School timings are from 8:00 AM to 2:30 PM for regular classes. Extended hours are available for extracurricular activities.",
        category: "general"
    },
    {
        id: "faq-5",
        question: "Is transportation available?",
        answer: "Yes, we provide school van services for students. Please contact the administration office for routes and availability.",
        category: "transportation"
    }
];

// Statistics Data
export const statistics = [
    {
        id: "pass-rate",
        value: "100%",
        label: "Matric Pass Rate",
        description: "Consistent excellence in BISE Peshawar Board results year after year.",
        icon: "trophy"
    },
    {
        id: "position-holders",
        value: "50%",
        label: "Board Position Holders",
        description: "Students who secured Top 3 positions in regional board exams.",
        icon: "medal"
    },
    {
        id: "years",
        value: "10+",
        label: "Years of Excellence",
        description: "Serving the Peshawar community with dedication and trust.",
        icon: "calendar"
    },
    {
        id: "students",
        value: "1000+",
        label: "Students Enrolled",
        description: "A thriving community of learners across all grades.",
        icon: "users"
    }
];

// Testimonials Data
export const testimonials = [
    {
        id: "testimonial-1",
        name: "Dr. Arshad Khan",
        role: "Parent, Peshawar",
        image: "/images/hassan-photo.jpg", // Update with actual parent photo or use placeholder
        text: "The focus on Board Exam preparation is excellent. My son secured 94% in Matric thanks to the teachers' extra effort and the monthly test system.",
        rating: 5
    },
    {
        id: "testimonial-2",
        name: "Mrs. Salma Gul",
        role: "Parent, Peshawar",
        image: "/images/hassan-photo.jpg",
        text: "What I appreciate most is the discipline. It is a safe, structured environment where I know my daughter is learning good values along with her books.",
        rating: 5
    },
    {
        id: "testimonial-3",
        name: "Tariq Mehmood",
        role: "Parent, Peshawar",
        image: "/images/hassan-photo.jpg",
        text: "Very professional management. They keep parents updated on attendance, test marks, and behavior constantly. There are never any surprises.",
        rating: 5
    }
];

// Gallery Images Data - Enhanced with more images and categories
const galleryImagesData = [
    {
        id: "gallery-1",
        src: "/images/annual-day.JPG",
        alt: "Annual Day Celebration at Benchmark School System",
        category: "events",
        title: "Annual Day Celebration",
        thumbnail: "/images/annual-day.JPG"
    },
    {
        id: "gallery-2",
        src: "/images/school photo.jpg",
        alt: "Benchmark School System building",
        category: "campus",
        title: "School Building",
        thumbnail: "/images/school photo.jpg"
    },
    {
        id: "gallery-3",
        src: "/images/school-kids-1.jpg",
        alt: "Students at Benchmark School System",
        category: "students",
        title: "Students Learning",
        thumbnail: "/images/school-kids-1.jpg"
    },
    {
        id: "gallery-4",
        src: "/images/principal-shahid-playing-w-kids.jpg",
        alt: "Principal playing with students during Sports Day",
        category: "sports",
        title: "Sports Day Activities",
        thumbnail: "/images/principal-shahid-playing-w-kids.jpg"
    },
    {
        id: "gallery-5",
        src: "/images/exam-photo.jpg",
        alt: "Students taking examinations",
        category: "academics",
        title: "Examinations",
        thumbnail: "/images/exam-photo.jpg"
    },
    {
        id: "gallery-6",
        src: "/images/kid-photo.jpg",
        alt: "Young students at Benchmark School System",
        category: "students",
        title: "Young Learners",
        thumbnail: "/images/kid-photo.jpg"
    },
    {
        id: "gallery-7",
        src: "/images/Mr-Shahid-Khan.JPG",
        alt: "Principal Mr. Shahid Khan",
        category: "staff",
        title: "School Leadership",
        thumbnail: "/images/Mr-Shahid-Khan.JPG"
    },
    {
        id: "gallery-8",
        src: "/images/director-numan.jpg",
        alt: "Director Noman Khan",
        category: "staff",
        title: "School Director",
        thumbnail: "/images/director-numan.jpg"
    }
    // Add more gallery images as needed
];

export const galleryImages = galleryImagesData;

// Gallery Categories - calculated after galleryImages is defined
export const galleryCategories = [
    { id: "all", name: "All", count: galleryImagesData.length },
    { id: "events", name: "Events", count: galleryImagesData.filter(img => img.category === "events").length },
    { id: "campus", name: "Campus", count: galleryImagesData.filter(img => img.category === "campus").length },
    { id: "students", name: "Students", count: galleryImagesData.filter(img => img.category === "students").length },
    { id: "sports", name: "Sports", count: galleryImagesData.filter(img => img.category === "sports").length },
    { id: "academics", name: "Academics", count: galleryImagesData.filter(img => img.category === "academics").length },
    { id: "staff", name: "Staff", count: galleryImagesData.filter(img => img.category === "staff").length }
];

// Export all content
export const content = {
    schoolInfo,
    directors,
    staff,
    academicPrograms,
    events,
    blogPosts,
    faqs,
    statistics,
    testimonials,
    galleryImages
};

// Helper functions for content management
export const getDirectorBySlug = (slug) => {
    return directors.find(director => director.slug === slug);
};

export const getBlogPostBySlug = (slug) => {
    return blogPosts.find(post => post.slug === slug);
};

export const getEventById = (id) => {
    return events.find(event => event.id === id);
};

export const getFAQsByCategory = (category) => {
    return faqs.filter(faq => faq.category === category);
};

export const getGalleryImagesByCategory = (category) => {
    if (category === "all" || !category) {
        return galleryImages;
    }
    return galleryImages.filter(image => image.category === category);
};

// Event helper functions
export const getEventsByType = (type) => {
    return events.filter(event => event.type === type);
};

export const getEventsByCategory = (category) => {
    return events.filter(event => event.category === category);
};

export const getFeaturedEvents = () => {
    return events.filter(event => event.featured === true);
};

export const getUpcomingEvents = () => {
    const today = new Date();
    return events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= today;
    }).sort((a, b) => new Date(a.date) - new Date(b.date));
};

export const getPastEvents = () => {
    const today = new Date();
    return events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate < today;
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getEventBySlug = (slug) => {
    return events.find(event => event.slug === slug);
};

// Blog helper functions
export const getBlogPostsByCategory = (category) => {
    if (!category || category === "all") return blogPosts;
    return blogPosts.filter(post => post.category === category);
};

export const getBlogPostsByTag = (tag) => {
    return blogPosts.filter(post => post.tags && post.tags.includes(tag));
};

export const getRecentBlogPosts = (limit = 5) => {
    return [...blogPosts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
};

export const getFeaturedBlogPosts = () => {
    return blogPosts.filter(post => post.featured === true);
};

// Staff helper functions
export const getStaffByDepartment = (department) => {
    if (!department) return staff;
    return staff.filter(member => member.department === department);
};

export const getStaffByRole = (role) => {
    return staff.filter(member => member.role === role);
};

// Statistics helper functions
export const getStatisticById = (id) => {
    return statistics.find(stat => stat.id === id);
};

// Testimonials helper functions
export const getTestimonialsByRating = (minRating = 0) => {
    return testimonials.filter(testimonial => testimonial.rating >= minRating);
};

export const getFeaturedTestimonials = () => {
    return testimonials.filter(testimonial => testimonial.featured === true);
};

// Academic Programs helper functions
export const getProgramByLevel = (level) => {
    return academicPrograms.filter(program => program.level === level);
};

export const getProgramById = (id) => {
    return academicPrograms.find(program => program.id === id);
};

// Gallery helper functions
export const getGalleryImageById = (id) => {
    return galleryImages.find(image => image.id === id);
};

export const getGalleryImagesByTag = (tag) => {
    return galleryImages.filter(image => image.tags && image.tags.includes(tag));
};

// Event categories/types
export const eventTypes = [
    { id: "all", name: "All Events" },
    { id: "academic", name: "Academic" },
    { id: "sports", name: "Sports" },
    { id: "celebration", name: "Celebration" },
    { id: "activities", name: "Activities" }
];

// Gallery categories helper
export const getGalleryCategoriesWithCounts = () => {
    return galleryCategories.map(category => ({
        ...category,
        count: category.id === "all" 
            ? galleryImages.length 
            : galleryImages.filter(img => img.category === category.id).length
    }));
};

