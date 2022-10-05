type Props = { className?: string };

export default function ProjectsIcon({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4399 0.0438014C11.9389 0.0438014 12.3438 0.448122 12.3438 0.946302C12.3438 1.44448 11.9389 1.8488 11.4399 1.8488H6.93361C3.81933 1.8488 1.80782 3.97871 1.80782 7.27464V17.2792C1.80782 20.5751 3.81933 22.705 6.93361 22.705H17.5684C20.6827 22.705 22.6954 20.5751 22.6954 17.2792V12.4321C22.6954 11.934 23.1004 11.5296 23.5993 11.5296C24.0983 11.5296 24.5032 11.934 24.5032 12.4321V17.2792C24.5032 21.6039 21.7156 24.51 17.5684 24.51H6.93361C2.78646 24.51 0 21.6039 0 17.2792V7.27464C0 2.94985 2.78646 0.0438014 6.93361 0.0438014H11.4399ZM21.9369 1.10105L23.4036 2.56551C24.1183 3.27788 24.5112 4.22491 24.51 5.2333C24.51 6.2417 24.1171 7.18752 23.4036 7.89869L14.3536 16.9345C13.6896 17.5976 12.8049 17.9634 11.8649 17.9634H7.35013C7.10668 17.9634 6.87286 17.8647 6.70293 17.6902C6.53299 17.5169 6.44019 17.2823 6.44622 17.038L6.55951 12.4906C6.58241 11.5857 6.94759 10.7349 7.58876 10.0936H7.58997L16.5965 1.10105C18.0693 -0.367017 20.4641 -0.367017 21.9369 1.10105ZM15.8546 4.39337L8.8675 11.3703C8.55535 11.682 8.37818 12.0959 8.36733 12.5351L8.27694 16.1584H11.8649C12.3229 16.1584 12.7519 15.9815 13.0761 15.6578L20.1054 8.63754L15.8546 4.39337ZM17.8741 2.37779L17.1321 3.11664L21.3829 7.362L22.1261 6.62195C22.4973 6.25132 22.7022 5.75796 22.7022 5.2333C22.7022 4.70744 22.4973 4.21287 22.1261 3.84225L20.6593 2.37779C19.8916 1.61367 18.643 1.61367 17.8741 2.37779Z"
        fill="currentColor"
      />
    </svg>
  );
}
