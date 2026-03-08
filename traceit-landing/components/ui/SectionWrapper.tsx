import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper = ({ children, className, id }: SectionWrapperProps) => {
  return (
    <section id={id} className={cn("py-16", className)}>
      {children}
    </section>
  );
};

export default SectionWrapper;
