import { FaHouseUser, FaRegUserCircle, FaHandHoldingUsd } from 'react-icons/fa';

export const navLinks = [
  {
    id: 1,
    url: '/',
    text: 'Home',
    icon: <FaHouseUser />,
  },
  {
    id: 2,
    url: '/roles',
    text: 'Users',
    icon: <FaHandHoldingUsd />,
  },
  {
    id: 3,
    url: '/users',
    text: 'Users',
    icon: <FaRegUserCircle />,
  },
];

export const userDataHeader = [
  'id',
  'name',
  'mobile',
  'email-id',
  'role',
  'status',
  'action',
];

export const userData = [
  {
    id: 123,
    name: 'Ramesh',
    mobile: '8756453402',
    email: 'ramesh@gmail.com',
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 124,
    name: 'Geeta',
    mobile: '9987654323',
    email: 'Geeta@gmail.com',
    role: 'Super Admin',
    status: 'Inactive',
  },
  {
    id: 125,
    name: 'Arun',
    mobile: '8865758485',
    email: 'Arun@gmail.com',
    role: 'Caller',
    status: 'Inactive',
  },
  {
    id: 126,
    name: 'Soham',
    mobile: '9734564565',
    email: 'Soham@gmail.com',
    role: 'Account',
    status: 'Active',
  },
  
];

export const roleDataHeader = ['id', 'role name', 'status', 'action'];

export const roleData = [
  {
    id: 123,
    role: 'Admin',
    status: 'Active',
  },
  {
    id: 124,
    role: 'Superadmin',
    status: 'Inactive',
  },
  {
    id: 125,
    role: 'Caller',
    status: 'Inactive',
  },
  {
    id: 126,
    role: 'Account',
    status: 'active',
  },
];
