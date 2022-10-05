export function InputFile({ label, name }: { label: string; name: string }) {
  return (
    <div className="flex flex-col items-center w-48 gap-y-5">
      <figure
        aria-label="hidden"
        className="flex flex-col items-center justify-center w-full shadow-outline h-44 max-h-44 rounded-2xl secondary-gradient gap-y-2"
      >
        <img src="/images/image-placeholder.png" alt="" className="w-24 h-24" />
        <figcaption className="text-[0.65rem] font-thin leading-normal text-center px-5">
          {label}
        </figcaption>
      </figure>
      <label htmlFor={name} className="cursor-pointer">
        <input name={name} type="file" className="cursor-pointer w-28" />
        <button className="pointer-events-none btn btn--secondary">Choose file</button>
      </label>
    </div>
  );
}
