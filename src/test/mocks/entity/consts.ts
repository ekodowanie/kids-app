import { ROLES } from '../../../user/entities/user.entity';

export const predefinedAdmin = [{
  id: '1',
  name: 'Admin',
  surname: 'Kids',
  email: 'admin@kids.com',
  dateOfBirth: '2000-01-01',
  address: 'admin 1',
  phone: '+48 700 600 500',
  role: ROLES.ADMIN,
}];

export const predefinedUser = [{
  id: '1',
  name: 'User',
  surname: 'Kids',
  email: 'user@kids.com',
  dateOfBirth: '2000-01-01',
  address: 'admin 1',
  phone: '+48 700 600 500',
  role: ROLES.USER,
}];
