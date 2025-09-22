export default function NavbarButton({
  buttonName,
  className,
}: {
  buttonName: string;
  className?: string;
}) {
  return (
    <div
      className={
        'component-landingPage-NavbarButton px-10 sm:px-2 py-2 sm:py-5 font-semibold text-sm hover:cursor-pointer ' + (className ? ' ' + className : '')
      }
    >
      {buttonName}
    </div>
  );
}