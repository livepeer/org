import { Container, Grid } from "@theme-ui/components";
import TeamMember from "./member";

const TeamSection = ({ teamMembers }) => {
  return (
    <Container>
      <Grid
        columns={[1, 2, 3, null, 4]}
        gap={3}
        sx={{ maxWidth: 1200, textAlign: "center", margin: "0 auto" }}>
        {teamMembers.map((t, i) => (
          <TeamMember
            key={i}
            fullname={t.fullname}
            role={t.role}
            image={t.image}
            twitter={t.twitter}
            linkedin={t.linkedin}
            github={t.github}
            medium={t.medium}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default TeamSection;
