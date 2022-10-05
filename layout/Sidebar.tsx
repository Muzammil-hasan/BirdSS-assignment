import { TriangleDownRoundedIcon } from '@/components/icons/TriangleDownIcon';
import { NavLink as Link } from '@/components/utils/NavLink';
import { useMenuContext } from '@/context/MenuContext';
import NavData from '@/context/NavData';
import clsx from 'clsx';

export default function Sidebar() {
  const [open, setOpen] = useMenuContext();

  return (
    <div>
      <aside
        className={clsx(
          'absolute w-1/2 lg:w-1/5 h-full mt-1.5 lg:top-32 top-[4.5rem] transition-ease lg:translate-x-0 lg:opacity-100 secondary-gradient lg:bg-none shadow-xl lg:shadow-none',
          `${!open ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`
        )}
      >
        <nav className="flex justify-center mt-10 lg:mt-36 stroke stroke-right">
          <ul className="space-y-2 lg:space-y-5">
            {NavData.map(({ Icon, name, path, subLinks }) => (
              <li key={name} onClick={() => setOpen(false)}>
                <Link
                  to={path}
                  activeClass={'active-link'}
                  className="flex items-center p-3 text-sm font-normal lg:px-3 lg:text-lg lg:py-7 rounded-r-3xl gap-x-5 text-lightGray hover:text-white transition-ease "
                >
                  <Icon className="lg:w-7 lg:h-7 w-3.5 h-3.5" />
                  <span className="flex items-center gap-x-4">
                    {name}{' '}
                    {subLinks && <TriangleDownRoundedIcon className="w-2 h-2 lg:w-4 lg:h-4" />}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
