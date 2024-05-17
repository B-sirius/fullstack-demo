import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const roundsOfHashing = 10;

const prisma = new PrismaClient();

async function main() {
  const passwordSaka = await bcrypt.hash('SakaIsGreat', roundsOfHashing);
  const passwordBell = await bcrypt.hash('BellWhoAreYou', roundsOfHashing);

  const user1 = await prisma.user.upsert({
    where: { email: 'saka@wow.com' },
    update: {
      password: passwordSaka,
    },
    create: {
      email: 'saka@wow.com',
      name: 'Saka 7',
      password: passwordSaka,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'bell@wow.com' },
    update: {
      password: passwordBell,
    },
    create: {
      email: 'bell@wow.com',
      name: 'Bell 22',
      password: passwordBell,
    },
  });

  console.log({
    user1,
    user2,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
