import { cn } from "@/lib/cn";
import Container from "@/components/ui/Container";

export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  ...props
}) {
  return (
    <section
      id={id}
      className={cn("section-shell bg-[#1f242d]", className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
