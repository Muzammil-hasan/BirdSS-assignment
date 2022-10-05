import { TriangleDownRoundedIcon } from '@/components/icons/TriangleDownIcon';
import { NavLink as Link } from '@/components/utils/NavLink';
import NavData from '@/context/NavData';

export default function Sidebar() {
  return (
    <aside className="absolute w-1/5 h-full mt-1.5 top-32 hidden">
      <nav className="relative flex justify-center mt-36">
        <div className="w-0.25 bg-white absolute right-0 bottom-8 h-3/4" />
        <ul className="space-y-6">
          {NavData.map(({ Icon, name, path, subLinks }) => (
            <li key={name}>
              <Link
                to={path}
                activeClass={'active-link'}
                className="flex items-center px-3 text-xl font-normal py-7 rounded-r-3xl gap-x-5 text-lightGray hover:text-white transition-ease "
              >
                <Icon className="w-7 h-7" />
                <span className="flex items-center gap-x-4">
                  {name} {subLinks && <TriangleDownRoundedIcon className="w-4 h-4" />}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
