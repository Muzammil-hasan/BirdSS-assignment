type Props = { className?: string };

export default function MembershipIcon({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2335 0C18.3098 0 19.9991 2.05486 19.9991 4.57943L20 7.544C20 7.77029 19.9265 7.98971 19.7953 8.14971C19.6651 8.31086 19.4874 8.40114 19.3023 8.40114C18.5702 8.40114 17.9749 9.11886 17.9749 10.0011C17.9749 10.8834 18.5702 11.6011 19.3023 11.6011C19.6874 11.6011 20 11.9851 20 12.4583V15.4206C20 17.9451 18.3107 20 16.2344 20H3.76558C1.6893 20 0 17.9451 0 15.4206V12.4583C0 11.9851 0.312558 11.6011 0.697674 11.6011C1.42977 11.6011 2.02512 10.8834 2.02512 10.0011C2.02512 9.144 1.45395 8.49714 0.697674 8.49714C0.512558 8.49714 0.334884 8.40686 0.204651 8.24571C0.0734884 8.08571 0 7.86629 0 7.64L0.000930233 4.57943C0.000930233 2.05486 1.69023 0 3.76651 0H16.2335ZM16.2335 1.71429H12.4177L12.4182 3.90994C12.4182 4.38309 12.1057 4.76709 11.7206 4.76709C11.3354 4.76709 11.0229 4.38309 11.0229 3.90994L11.0223 1.71429H3.76651C2.45953 1.71429 1.39628 3 1.39628 4.57943L1.39535 6.88571C2.57395 7.24114 3.42047 8.48229 3.42047 10.0011C3.42047 11.5349 2.55907 12.8286 1.39535 13.2046V15.4206C1.39535 17 2.4586 18.2857 3.76558 18.2857H11.0223L11.0229 16.5846C11.0229 16.1103 11.3354 15.7274 11.7206 15.7274C12.1057 15.7274 12.4182 16.1103 12.4182 16.5846L12.4177 18.2857H16.2344C17.5414 18.2857 18.6047 17 18.6047 15.4206V13.2046C17.4409 12.8286 16.5795 11.5349 16.5795 10.0011C16.5795 8.46629 17.44 7.17371 18.6047 6.79771L18.6037 4.57943C18.6037 3 17.5405 1.71429 16.2335 1.71429ZM11.7206 6.29086C12.1057 6.29086 12.4182 6.67486 12.4182 7.148V12.6577C12.4182 13.1309 12.1057 13.5149 11.7206 13.5149C11.3354 13.5149 11.0229 13.1309 11.0229 12.6577V7.148C11.0229 6.67486 11.3354 6.29086 11.7206 6.29086Z"
        fill="currentColor"
      />
    </svg>
  );
}
