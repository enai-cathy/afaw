import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Mphande Community Development Project",
      description:
        "We bring sustainable water systems to villages, ensuring every family has access to safe drinking water close to home.",
      image: "/images/project2.jpg",
    },
    {
      title: "Shibuyunji Women Solar-Powered Water Project",
      description:
        "When women and girls no longer walk miles for water, they reclaim time for education, family, and opportunity.",
      image: "/images/project1.jpg",
    },
    {
      title: "Safe Water in Schools",
      description:
        "We provide safe water, toilets, and hygiene education in schools so children can learn and thrive.",
      image: "/images/project3.jpg",
    },
  ];

  return (
    <section className="py-16 bg-blue-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
    See how your support transforms lives.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl w-full max-w-xl m-auto shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="text-center">
                <button className="mt-4 bg-blue-400 text-white rounded-lg p-2 font-medium hover:underline">
                  Learn More 
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
