import Logo from '@/components/elements/Logo';
import BellIcon from '@/components/icons/BellIcon';
import { TriangleDownIcon } from '@/components/icons/TriangleDownIcon';
import { useMenuContext } from '@/context/MenuContext';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Header() {
  const [open, setOpen] = useMenuContext();

  return (
    <header className="flex items-center justify-between px-4 py-4 lg:px-8 stroke stroke-bottom">
      <Logo />
      <div className="flex items-center gap-x-3 lg:gap-x-6">
        <button>
          <BellIcon className="w-5 h-5 lg:w-7 lg:h-7" />
        </button>

        {/* Hidden in mobile */}
        <button className="items-center hidden text-sm truncate gap-x-2 lg:flex">
          English &#40;UK&#41; <TriangleDownIcon className="w-3.5 h-3.5" />
        </button>

        <button onClick={() => setOpen((prev: boolean) => !prev)} className="lg:hidden">
          {!open ? <Bars3Icon className="w-6 h-6" /> : <XMarkIcon className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
}
