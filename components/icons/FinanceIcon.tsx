type Props = { className?: string };

export default function FinanceIcon({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.39014 2.39206V19.4882C2.39014 21.1576 3.73772 22.5052 5.4071 22.5052H22.5033"
        stroke="currentColor"
        strokeWidth="1.50848"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.4071 17.4769L10.0231 12.0866C10.7874 11.2016 12.145 11.1413 12.9696 11.976L13.925 12.9314C14.7496 13.756 16.1073 13.7057 16.8716 12.8207L21.4976 7.42035"
        stroke="currentColor"
        strokeWidth="1.50848"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
