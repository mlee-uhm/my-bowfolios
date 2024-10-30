/* eslint-disable import/extensions */
import { Container, Row } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { PageIDs } from '@/utilities/ids';
import pageStyle from '@/utilities/pageStyle';
import LuckyCardHelper from './LuckyCardHelper';

const ProfilesPage = async () => {
  const profiles = await prisma.profile.findMany();
  profiles.sort((a, b) => a.email.localeCompare(b.email));
  return (
    <Container id={PageIDs.profilesPage} style={pageStyle}>
      <Row xs={1} md={2} lg={4} className="g-2">
        {profiles.length > 0 && (
          <LuckyCardHelper profile={profiles[Math.floor(Math.random() * profiles.length)]} />
        )}
      </Row>
    </Container>
  );
};

export default ProfilesPage;
