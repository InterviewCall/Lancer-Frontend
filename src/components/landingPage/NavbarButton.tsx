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
        'component-landingPage-NavbarButton px-2 py-5 font-semibold text-sm' + (className ? ' ' + className : '')
      }
    >
      {buttonName}
    </div>
  );
}