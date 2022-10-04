import clsx from 'clsx';
import Link from 'next/link';

type Props = { className?: string };

export default function Logo({ className = '' }: Props) {
  return (
    <Link href={'/'}>
      <a className={clsx('flex items-center gap-x-2', { [className]: className })}>
        <img
          src="/images/logo.png"
          alt="logo"
          className="object-contain h-auto lg:w-[7.5rem] w-14"
        />
        <p className="-mt-2 text-sm font-semibold lg:text-3xl">Ramaera industries</p>
      </a>
    </Link>
  );
}
