import clsx from 'clsx';
import Link from 'next/link';

type Props = { className?: string };

export default function Logo({ className = '' }: Props) {
  return (
    <Link href={'/'}>
      <a className={clsx('flex items-center gap-x-2', { [className]: className })}>
        <img src="/images/logo.png" alt="logo" className="object-contain w-12 h-auto lg:w-28" />
        <p className="text-xs font-semibold lg:text-2xl">Ramaera industries</p>
      </a>
    </Link>
  );
}
