import { Briefcase, Code, User, GraduationCap, School, School2Icon, School2, LucideSchool } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
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
                Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {/* <Code className="h-6 w-6 text-primary" /> */}
                  <GraduationCap className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Nirma University</h4>
                  <p className="text-muted-foreground">
                    B.Tech in Computer Science Engineering
                  </p>
                  <p className="text-muted-foreground">
                    2021-2025
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {/* <User className="h-6 w-6 text-primary" /> */}
                  <School className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Silver Bells Public School</h4>
                  <p className="text-muted-foreground">
                    Class 12
                  </p>
                  <p className="text-muted-foreground">
                    2020-2021
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {/* <Briefcase className="h-6 w-6 text-primary" /> */}
                  <School className="h-6 w-6 text-primary"/>
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Silver Bells Public School</h4>
                  <p className="text-muted-foreground">
                    Class 10
                  </p>
                  <p className="text-muted-foreground">
                    2018-2019
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
