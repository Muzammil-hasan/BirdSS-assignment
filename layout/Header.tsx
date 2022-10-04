import Logo from '@/components/elements/Logo';
import BellIcon from '@/components/icons/BellIcon';
import TriangleDownIcon from '@/components/icons/TriangleDownIcon';

export default function Header() {
  return (
    <header className="relative flex items-center justify-between px-4 py-4 lg:px-8">
      <Logo />

      <div className="flex items-center gap-x-3 lg:gap-x-6">
        <button>
          <BellIcon className="w-5 h-5 lg:w-7 lg:h-7" />
        </button>

        <button className="flex items-center text-xs truncate lg:text-sm gap-x-2">
          English &#40;UK&#41; <TriangleDownIcon className="w-2 h-2 lg:w-3.5 lg:h-3.5" />
        </button>
      </div>
      <span className="block w-[85%] h-0.5 ml-auto bg-white absolute lg:bottom-4 bottom-0 lg:right-10 inset-x-4" />
    </header>
  );
}
