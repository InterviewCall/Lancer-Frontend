export default function HeroSectionHighlightOptions({
  header,
  content,
}: {
  header: string;
  content: string;
}) {
  return (
    <div className="component-landingPage-HeroSectionHighlightOptions px-2 py-3 border border-gray-300 bg-gray-100">
      <div className="component-landingPage-HeroSectionHighlightOptions text-md font-bold text-center ">{header}</div>
      <div className="component-landingPage-HeroSectionHighlightOptions text-xs font-light text-center">{content}</div>
    </div>
  );
}