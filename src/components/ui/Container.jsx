import { cn } from "@/lib/cn";

export default function Container({ children, className = "" }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px]", className)}>{children}</div>
  );
}
