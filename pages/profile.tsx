import { InputFile } from '@/components/elements/Inputs';
import DangerIcon from '@/components/icons/DangerIcon';
import { StarGrayIcon, StarIcon } from '@/components/icons/StarIcon';
import KYCData from '@/context/KYCData';
import tabsData from '@/context/TabsData';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment } from 'react';

export default function Profile() {
  return (
    <section className="min-h-screen">
      <Tab.Group>
        <Tab.List
          className={'flex items-start lg:justify-start justify-between gap-x-4 lg:gap-x-20'}
        >
          {tabsData.map(({ Icon, description, name }) => (
            <Tab key={name} as={Fragment}>
              {({ selected }) => (
                <button
                  className={clsx(
                    'lg:w-2/5 w-1/2 text-left text-lightGray hover:text-white transition-ease outline-none group flex flex-col items-center lg:items-start',
                    { 'text-white font-medium': selected }
                  )}
                >
                  <h2
                    className={clsx(
                      'flex items-center text-lg lg:text-[1.75rem] capitalize gap-x-2  after:bg-lightGray stroke stroke-bottom-sm',
                      { 'after:bg-white': selected }
                    )}
                  >
                    {name} <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </h2>
                  <p className="mt-3 text-xs font-light text-center lg:text-left lg:text-sm">
                    {description}
                  </p>
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          <KYCTab />
          <MembershipTab />
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}

function KYCTab() {
  return (
    <Tab.Panel className={'lg:my-24 my-12'}>
      <p className="px-8 text-xs font-medium text-center lg:px-0 lg:text-base lg:text-left">
        <span className="text-sm lg:text-lg text-danger">Note:</span> Upload only .jpg/jpeg or .png
        extension image file !!
      </p>

      <form className="flex flex-col items-center w-full mt-20 gap-y-20">
        <div className="flex flex-col items-center justify-center w-full lg:items-start lg:flex-row lg:flex-wrap lg:gap-x-12 gap-y-16">
          {KYCData.map(({ label, name }) => (
            <InputFile key={name} label={label} name={name} />
          ))}
        </div>
        <button className="btn btn--primary">Submit</button>
      </form>
    </Tab.Panel>
  );
}

function MembershipTab() {
  return (
    <Tab.Panel className={'lg:my-24 my-12'}>
      <p className="text-sm font-light text-center lg:text-3xl lg:text-left">
        You have applied for Basic membership
      </p>

      <div className="mt-16 space-y-16 lg:mx-44">
        <div className="flex flex-col items-center justify-between gap-6 mx-10 lg:mx-0">
          <button className="w-full btn btn--secondary">
            Basic <StarIcon className="w-4 h-4" />
          </button>
          <button className="w-full btn btn--secondary text-lightGray shadow-lightGray">
            <span>Advance</span> <StarGrayIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col items-center py-4 text-base font-medium lg:text-3xl gap-y-2 rounded-xl shadow-outline-sm text-gradient-gray">
          <p className="inline-flex items-center gap-x-2">
            <DangerIcon className="w-4 h-4 lg:w-8 lg:h-8" /> You need to pay
          </p>
          <p>₹ 250 to subscribe this membership</p>
        </div>
        <button className="mx-auto btn btn--primary">Pay Now</button>
      </div>
    </Tab.Panel>
  );
}
