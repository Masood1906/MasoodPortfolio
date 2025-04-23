import { getBasePath } from '@/lib/path';
import Image from "next/image"

import { Download, Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            Mohammed<span className="text-primary">.dev</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="sm" className="hidden md:flex">
            <a href={`${getBasePath()}/resume.pdf`} download>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
            </Button>
            <Button asChild size="sm" className="hidden md:flex">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Mohammed Masood Ahmed</h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              Software Engineer specializing in AI & Front-End Development
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </a>
              </Button>
            </div>
            <div className="flex gap-4 pt-2">
              <a
                href="http://www.linkedin.com/in/masood-ahmed-mohammed-razaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/Masood1906"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:kaifrazaa4111@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary">
          <Image src={`${getBasePath()}/profile.jpg`} alt="Mohammed Masood Ahmed" fill className="object-cover" priority />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Professional Profile</h3>
              <p className="text-muted-foreground">
                Motivated and detail-oriented software graduate with a Master's in Software Design with Artificial
                Intelligence and a strong foundation in front-end development. Skilled in HTML, CSS, JavaScript, and
                responsive design principles, with hands-on experience in creating interactive web applications.
              </p>
              <p className="text-muted-foreground">
                Proven ability to learn quickly and apply modern technologies in academic and internship projects.
                Currently expanding technical expertise through a data science internship, while seeking an opportunity
                to grow as a front-end developer in a collaborative and innovative tech environment.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Career Objective</h3>
              <p className="text-muted-foreground">
                As a highly motivated AI and software design graduate, I aim to apply my expertise in machine learning,
                data science, and cloud technologies to create innovative, data-driven solutions. I am eager to
                contribute to cutting-edge projects in a dynamic environment where I can leverage my technical skills in
                Python, NLP, and AI to drive business impact, optimize processes, and continuously grow in the field of
                artificial intelligence.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="outline" className="bg-primary/10">
                  Python
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  Machine Learning
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  NLP
                </Badge>
                <Badge variant="outline" className="bg-primary/10">
                  Front-End Development
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Data Science Intern</CardTitle>
                  <CardDescription>Oeson Private Limited – Remote</CardDescription>
                </div>
                <Badge>March 2025 – Present</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  Collaborating with cross-functional teams to analyze real-world datasets and deliver data-driven
                  insights that support product and business strategy.
                </li>
                <li>
                  Designing and implementing machine learning models for classification and regression tasks using
                  Python (Pandas, Scikit-learn, XGBoost), with a focus on scalability and performance.
                </li>
                <li>
                  Automating data workflows from cleaning and feature engineering to visualization using tools like
                  NumPy, Seaborn.
                </li>
                <li>
                  Contributing to Agile development cycles, managing tasks through JIRA, and maintaining clean code and
                  documentation via Git and Confluence.
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Master of Science in Software Design with Artificial Intelligence</CardTitle>
                    <CardDescription>Technological University of Shannon Midlands Midwest (AIT)</CardDescription>
                  </div>
                  <Badge>Sep 2023 – Aug 2024</Badge>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Bachelor of Technology in Computer Science Engineering</CardTitle>
                    <CardDescription>Bharath University, Chennai, India</CardDescription>
                  </div>
                  <Badge>Jul 2019 – Jun 2023</Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <Tabs defaultValue="technical">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="ai">AI & ML</TabsTrigger>
              <TabsTrigger value="tools">Tools & Frameworks</TabsTrigger>
            </TabsList>
            <TabsContent value="technical" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">Python</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Advanced proficiency in data processing, automation, and application development
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">JavaScript</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Strong experience with modern JS, DOM manipulation, and interactive web applications
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">HTML/CSS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Expert in semantic markup, responsive design, and modern CSS techniques
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">Java</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Proficient in OOP principles, application development, and Spring framework
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">C/C++</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Working knowledge of memory management, data structures, and algorithms
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">SQL</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Strong database design, query optimization, and data management skills
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="ai" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">Deep Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Experience with neural networks, CNN, RNN architectures and frameworks
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">NLP</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Text processing, sentiment analysis, and language understanding models
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">Transformers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Working with BERT, T5, and other transformer architectures for various NLP tasks
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">Data Visualization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Creating insightful visualizations with Matplotlib, Seaborn, and other libraries
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">Computer Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Image processing, object detection, and pose estimation techniques
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="tools" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">Git & GitHub</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Version control, collaborative development, and CI/CD workflows
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">Docker</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Containerization, deployment, and environment management
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">Cloud Platforms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Experience with Azure and AWS services for application deployment
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">JIRA</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Project management, issue tracking, and Agile development processes
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">IDEs & Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Proficient with PyCharm, VS Code, Eclipse, and other development environments
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>AI-Driven AR Virtual Try-On Systems</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  Developed a virtual try-on system enabling users to visualize clothing using advanced computer vision
                  techniques, including pose estimation and garment segmentation.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Deep Learning</Badge>
                  <Badge variant="secondary">Computer Vision</Badge>
                  <Badge variant="secondary">GitHub Actions</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" disabled>
                  <ExternalLink className="mr-2 h-4 w-4" /> View Project
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Smart Extract: Intelligent Information Retrieval</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  Developed a robust system for extracting structured data from unstructured machinery manuals using OCR
                  and Named Entity Recognition (NER).
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">OCR</Badge>
                  <Badge variant="secondary">NLP</Badge>
                  <Badge variant="secondary">BERT</Badge>
                  <Badge variant="secondary">T5</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" disabled>
                  <ExternalLink className="mr-2 h-4 w-4" /> View Project
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Intrusion Detection using PCA with Random Forest</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  Led a team to develop an intrusion detection system using PCA and Random Forest. Responsible for
                  project planning, execution, and team coordination.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Selenium</Badge>
                  <Badge variant="secondary">Matplotlib</Badge>
                  <Badge variant="secondary">Random Forest</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full" disabled>
                  <ExternalLink className="mr-2 h-4 w-4" /> View Project
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">IBM AI Developer Professional Certificate</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Microsoft Azure Fundamentals (AZ-900)</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">IBM Python for Data Science and AI Development</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">SQL for Data Science - University of California</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">IBM Introduction to HTML, CSS & JavaScript</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-muted-foreground" />
                  <a
                    href="mailto:kaifrazaa4111@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    kaifrazaa4111@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-3 text-muted-foreground" />
                  <a
                    href="http://www.linkedin.com/in/masood-ahmed-mohammed-razaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    linkedin.com/in/masood-ahmed-mohammed-razaa
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 mr-3 text-muted-foreground" />
                  <a
                    href="https://github.com/Masood1906"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    github.com/Masood1906
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        placeholder="Your name"
                        className="w-full p-2 rounded-md border border-input bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="w-full p-2 rounded-md border border-input bg-background"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      placeholder="Subject"
                      className="w-full p-2 rounded-md border border-input bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message"
                      rows={4}
                      className="w-full p-2 rounded-md border border-input bg-background resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 md:py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mohammed Masood Ahmed. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="http://www.linkedin.com/in/masood-ahmed-mohammed-razaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Masood1906"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:kaifrazaa4111@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
