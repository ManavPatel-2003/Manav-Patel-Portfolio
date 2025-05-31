import { Briefcase, Code, User } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Experience 
          {/* <span className="text-primary"> </span> */}
        </h2>

        <div className="items-center">
          {/* <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Software Developer
            </h3>

            <p className="text-muted-foreground">
              A recent graduate with B.Tech in Computer Science and Engineering
              with a solid foundation in computer science fundamentals,
              an aspiring software developer with a strong foundation in programming and
              web development. 
            </p>

            <p className="text-muted-foreground">
            Passionate about building efficient, scalable applications. 
            Committed to continuous improvement and learning new technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div> */}

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {/* <Code className="h-6 w-6 text-primary" /> */}
                  <Briefcase className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Deloitte</h4>
                  <p className="text-muted-foreground">
                    ADMM Analyst Intern
                  </p>
                  <p className="text-muted-foreground">
                    January 2025 - Present
                  </p>
                  <p className="text-muted-foreground mt-5">
                    <ul className="list-disc">
                    <li>Developed end-to-end ETL pipelines to extract, transform and load data from diverse sources into a cloud-based data warehouse.</li>
                    <li>Implemented dashboards using PowerBI, providing insights on sales performance, inventory optimization and healthcare analytics.</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {/* <User className="h-6 w-6 text-primary" /> */}
                  <Briefcase className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">FX IS AI</h4>
                  <p className="text-muted-foreground">
                    Machine Learning Intern
                  </p>
                  <p className="text-muted-foreground">
                    May 2024 - July 2024
                  </p>
                  <p className="text-muted-foreground mt-5">
                    <ul className="list-disc">
                      <li>Built a conversational chatbot using Langchain, Ollama, Llama2 and streamlit.</li>
                      <li>Implemented DL algorithms on usecases such as stock price prediction, sentimental analysis, image classification and next word prediction.</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
