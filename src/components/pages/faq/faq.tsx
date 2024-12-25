import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Breadcrumb, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbItem, BreadcrumbList, BreadcrumbLink } from "@/components/ui/breadcrumb"
import { faqSections } from "@/data/faq"

interface FAQItem {
    id: string
    question: string
    answer: string
}

interface FAQSection {
    title: string
    items: FAQItem[]
}

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header and Breadcrumb */}
            <header className="border-b bg-gray-100">
                <div className="container mx-auto px-8 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold">Terms & Conditions</h1>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Terms & Conditions</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                    </div>
                </div>
            </header>
            <div className="mx-auto max-w-3xl px-4 py-12">
                {faqSections.map((section, index) => (
                    <section key={index} className={index > 0 ? "mt-12 space-y-6" : "space-y-6"}>
                        <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {section.items.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="border rounded-lg px-4 data-[state=open]:border-blue-600"
                                >
                                    <AccordionTrigger className="data-[state=open]:text-blue-600 font-medium">{item.question}</AccordionTrigger>
                                    <AccordionContent>{item.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>
                ))}
            </div>
        </div>
    )
}

