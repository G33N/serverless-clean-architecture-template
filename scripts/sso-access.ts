/* eslint-disable no-console, camelcase */

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import * as path from 'path';
import { decode, encode } from 'ini';
import { homedir } from 'os';
import { SSO } from 'aws-sdk';

const readConfig = (profile: string) => {
  const content = decode(readFileSync(path.resolve(homedir(), './.aws/config'), 'utf-8'));

  if (profile.includes('.')) {
    const [name, key] = profile.split('.');
    return content[`profile ${name}`][key];
  }

  return content[`profile ${profile}`];
};

const readDefaultCredentials = () => {
  const content = decode(readFileSync(path.resolve(homedir(), './.aws/credentials'), 'utf-8'));

  if ('default' in content) {
    return content.default;
  }

  return {};
};

const readCredentials = () => {
  const content = decode(readFileSync(path.resolve(homedir(), './.aws/credentials'), 'utf-8'));

  if ('default' in content) {
    delete content.default;
  }

  return content;
};

const writeCredentials = (credentials: any) => {
  const allCredentials = readCredentials();

  allCredentials.default = credentials;

  return writeFileSync(path.resolve(homedir(), './.aws/credentials'), encode(allCredentials));
};

const getAccessData = (): any => {
  return readdirSync(path.resolve(homedir(), './.aws/sso/cache')).reduce((token, file) => {
    if (file.includes('json')) {
      const content = JSON.parse(readFileSync(path.resolve(homedir(), './.aws/sso/cache', file), 'utf-8'));

      if (content.accessToken) {
        return content;
      }

      return token;
    }
    return null;
  });
};

const myArgs: any = {};

process.argv.slice(2).forEach((arg) => {
  const [key, value] = arg.split('=');

  myArgs[key] = value;
});

const profile = myArgs.profile || process.env.AWS_PROFILE;

if (!profile) {
  console.error('The profile argument is required and was not defined [profile={profile-name}]');
  process.exit(1);
}

const { aws_expiration, aws_profile } = readDefaultCredentials();

if (aws_profile === profile && Math.floor((+aws_expiration - new Date().getTime()) / 1000) > 0) {
  console.log('Current session is still valid');
  process.exit(0);
}

const accessData = getAccessData();

if (accessData === '') {
  console.error(`Please login to SSO (aws sso login --profile ${profile})`);
  process.exit(1);
}

const { sso_role_name, sso_account_id, sso_region } = readConfig(profile);

new SSO({
  region: sso_region,
})
  .getRoleCredentials({
    accessToken: accessData.accessToken,
    roleName: sso_role_name,
    accountId: sso_account_id,
  })
  .promise()
  .then((result) => {
    const { roleCredentials } = result;

    if (roleCredentials === undefined) {
      throw new Error('There was an error getting credentials');
    }

    return {
      aws_access_key_id: roleCredentials.accessKeyId,
      aws_secret_access_key: roleCredentials.secretAccessKey,
      aws_session_token: roleCredentials.sessionToken,
      aws_expiration: roleCredentials.expiration,
      aws_profile: profile,
    };
  })
  /* eslint-disable-next-line promise/always-return */
  .then((credentials) => {
    writeCredentials(credentials);
  })
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
