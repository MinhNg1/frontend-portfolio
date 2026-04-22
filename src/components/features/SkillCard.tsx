import Card from "../ui/Card";

export default function SkillCard() {
  return (
    <Card title="Skills" id="skills">
      <dl className="skills-dl">
        <dt>Frontend</dt>
        <dd>React · TypeScript · JavaScript · HTML · CSS · WordPress</dd>

        <dt>Backend</dt>
        <dd>Java · Spring Boot · Node.js · PHP · REST APIs · SQL</dd>

        <dt>Tools</dt>
        <dd>Git · CI/CD · Webpack · npm · Jira</dd>
      </dl>
    </Card>
  );
}