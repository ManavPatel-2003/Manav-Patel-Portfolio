import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "End-to-End Data Warehousing Pipeline",
    description: "Data warehousing solution for an E-commerce enabling insightful decsion making using interactive Power BI dashboards.",
    image: "https://raw.githubusercontent.com/ManavPatel-2003/End-to-End-Data-Warehousing-Solution-for-E-commerce/refs/heads/main/images/ETL.png",
    tags: ["Python", "PySpark", "AWS S3", "AWS Glue", "AWS Redshift", "Power BI"],
    demoUrl: "#",
    githubUrl: "https://github.com/ManavPatel-2003/End-to-End-Data-Warehousing-Solution-for-E-commerce",
  },
  {
    id: 2,
    title: "BlogSpot",
    description:
      "An user friendly web application for writing and posting blogs.",
    image: "/projects/blogspot.png",
    tags: ["HTML", "Tailwind CSS", "Javascript", "React", "Appwrite (BaaS)"],
    demoUrl: "https://blog-spot-green.vercel.app/",
    githubUrl: "https://github.com/ManavPatel-2003/blog-Spot",
  },
  {
    id: 3,
    title: "Real Time Chat Application",
    description:
      "A chat web application where multiple users can chat in real time, create and join room for group chat.",
    image: "/projects/chat-app.jpg",
    tags: ["Flask", "Python", "Flask-SocketIO", "HTML", "CSS", "Javascript"],
    demoUrl: "https://chatapp-oz5j.onrender.com/",
    githubUrl: "https://github.com/ManavPatel-2003/ChatApp",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120"
                />
              </div>

                <h3 className="text-xl mt-2 font-semibold mb-1"> {project.title}</h3>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border border-indigo-700 rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      {project.title!="End-to-End Data Warehousing Pipeline"?<ExternalLink size={20} />:<></>}
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            <Github />More Projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
