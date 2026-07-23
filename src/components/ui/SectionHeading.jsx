import AccentText from "@/components/ui/AccentText";

export default function SectionHeading({ id, prefix, accent }) {
  return (
    <h2 id={id} className="section-heading">
      {prefix} <AccentText>{accent}</AccentText>
    </h2>
  );
}
