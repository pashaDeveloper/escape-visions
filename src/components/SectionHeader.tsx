import { useEffect, useRef, useState } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  align?: "center" | "right" | "left";
}

const SectionHeader = ({ title, subtitle, align = "right" }: SectionHeaderProps) => {
  const [isInView, setIsInView] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const alignmentClass = align === "center" ? "text-center items-center" : align === "right" ? "text-right items-end" : "text-left items-start";

  return (
    <div ref={headerRef} className={`mb-12 flex flex-col ${alignmentClass} animate-fade-in-up`}>
      <h2 className={`text-4xl md:text-5xl font-bold mb-4 animated-underline ${isInView ? "in-view" : ""}`}>
        {title}
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
