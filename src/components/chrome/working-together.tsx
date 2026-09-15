export function WorkingTogether({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-2xl shadow-soft transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-lift">
        <video
          className="block w-full origin-center transition-transform duration-500 ease-out hover:scale-[1.03]"
          autoPlay
          muted
          loop
          playsInline
          poster="/characters/geekett-bobby-work.webp"
          aria-label="Geekett on her laptop while Builder Bot Bobby plans the calendar"
        >
          <source src="/characters/working-together.mp4" type="video/mp4" />
        </video>
      </div>
      <p className="mt-3 text-center text-sm text-muted">
        Bella builds. Bobby assists. You launch.
      </p>
    </div>
  );
}
