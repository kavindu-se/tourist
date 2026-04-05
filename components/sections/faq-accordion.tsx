import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type FaqItem = {
  q: string;
  a: string;
};

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="rounded-3xl border border-[var(--line)] bg-white px-6 py-2">
      {items.map((item, i) => (
        <AccordionItem value={`item-${i}`} key={item.q}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
