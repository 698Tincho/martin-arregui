/** Text that rolls up to a copy of itself when its link or button is hovered (CSS only). */
export default function Roll({ children }: { children: string }) {
  return (
    <span className="roll">
      <span className="roll-inner" data-text={children}>
        {children}
      </span>
    </span>
  );
}
