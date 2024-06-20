const fs = require('fs');
import fs from fs;
import path from path;
import falso from @ngneat/falso;
import md5 from md5;

function createBadges(limit = 50) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const firstName = falso.randFirstName();
    const lastName = falso.randLastName();
    const email = falso.randEmail();

    result.push({
      id: falso.randUuid(),
      firstName,
      lastName,
      email,
      jobTitle: falso.randJobTitle(),
      twitter: `${firstName}${lastName}${falso.randUserName()}`,
      avatarUrl: `https://www.gravatar.com/avatar/${md5(email)}?d=identicon`,
    });
  }

  return result;
}

function main() {
  const data = {
    badges: createBadges(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();
