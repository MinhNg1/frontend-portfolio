import Header from "./components/Header";
import Footer from "./components/Footer";

import Card from "./components/ui/Card";
import Grid from "./components/ui/Grid";
import Stack from "./components/ui/Stack";

import SkillCard from "./components/features/SkillCard";
import { projects } from "./data/projects";

export default function App() {
  return (
    <div className="container">
      <Stack gap={6}>
        <Header />

        <Grid>
          <Card title="About" id="about">
            <p>
              Front-End / Full-Stack Developer focused on React,
              TypeScript, and accessible UI systems.
            </p>
          </Card>

          <SkillCard />

          <Card title="Experience" id="experience">
            <ul>
              <li>Built React apps with REST APIs</li>
              <li>Worked with WordPress & HTML emails</li>
              <li>Focused on performance & accessibility</li>
            </ul>
          </Card>
        </Grid>

        <Card title="Projects" id="projects" noBorder>
          <ul className="project-list">
            {projects.map((p) => (
              <li key={p.id}>
                <a href={p.link} className="project-link">
                  <div className="project-card">
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <p><strong>Tech:</strong> {p.tech.join(" · ")}</p>
                    <span className="project-link-text">View Code →</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Card>

        <Footer />
      </Stack>
    </div>
  );
}