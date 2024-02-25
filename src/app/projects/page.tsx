import React from "react";
import Project from "@/components/Project";
import projectDetails from "@/data/projectDetails";
import Title from "@/components/design/Title";

export default function ProjectsPage() {
  return (
    <main className="container mx-auto max-width pt-10 mb-20">
      <section>
        <Title tag="h1">Projetos</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            projectDetails.map(
              ({
                title,
                image,
                description,
                technologies,
                previewLink,
                githubLink,
              }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  technologies={technologies}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}
