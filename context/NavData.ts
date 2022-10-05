import FinanceIcon from '@/components/icons/FinanceIcon';
import ProfileIcon from '@/components/icons/ProfileIcon';
import ProjectsIcon from '@/components/icons/ProjectsIcon';
import SupportIcon from '@/components/icons/SupportIcon';

export default [
  {
    name: 'Profile',
    path: '/profile',
    Icon: ProfileIcon,
  },
  {
    name: 'Projects',
    path: '/projects',
    Icon: ProjectsIcon,
    subLinks: [{ name: 'path', path: '/path', Icon: '' }],
  },
  {
    name: 'Finance',
    path: '/finance',
    Icon: FinanceIcon,
    subLinks: [{ name: 'path', path: '/path', Icon: '' }],
  },
  {
    name: 'Support',
    path: '/support',
    Icon: SupportIcon,
    subLinks: [{ name: 'path', path: '/path', Icon: '' }],
  },
];
