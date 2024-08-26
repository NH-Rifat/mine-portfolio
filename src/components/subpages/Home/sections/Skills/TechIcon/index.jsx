export default function TechIcon({ component }) {
  const Component = component;
  return;
  <>
    <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
    <svg className="size-0 absolute">
      <linearGradient id="tech-icon-gradient" x1="0" x2="100%" y1="0" y2="100%">
        <stop offset="0%" stopColor="rgb(110 231 183)" />
        <stop offset="100%" stopColor="rgb(56 189 248)" />
      </linearGradient>
    </svg>
  </>;
}
