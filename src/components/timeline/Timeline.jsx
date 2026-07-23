import TimelineItem from "@/components/timeline/TimelineItem";

export default function Timeline({ items, variant = "default" }) {
  return (
    <ol className="relative mx-auto w-full max-w-3xl px-0 sm:px-2">
      {items.map((item, index) => (
        <TimelineItem
          key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          meta={item.meta}
          badge={item.badge}
          description={item.description}
          responsibilities={item.responsibilities}
          variant={variant}
          isLast={index === items.length - 1}
        />
      ))}
    </ol>
  );
}
