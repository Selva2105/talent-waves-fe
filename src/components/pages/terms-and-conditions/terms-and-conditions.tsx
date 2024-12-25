import { Breadcrumb, BreadcrumbLink, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbPage, BreadcrumbList } from "@/components/ui/breadcrumb";

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen">
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

            {/* Main Content */}
            <main className="mx-auto max-w-7xl px-4 py-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr,250px]">
                    {/* Content */}
                    <div className="space-y-8">
                        <section id="terms">
                            <h2 className="mb-4 text-2xl font-bold">01. Terms & Condition</h2>
                            <div className="prose max-w-none space-y-4">
                                <p>
                                    Welcome to TalentWaves. By accessing and using our platform, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our services.
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>These terms constitute a legally binding agreement between you and TalentWaves.</li>
                                    <li>By using our services, you confirm that you are at least 18 years of age and have the legal capacity to enter into contracts.</li>
                                    <li>You agree to provide accurate, current, and complete information during registration and maintain it.</li>
                                    <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                                    <li>Any unauthorized use of your account must be reported to us immediately.</li>
                                </ul>
                            </div>
                        </section>

                        <section id="limitations">
                            <h2 className="mb-4 text-2xl font-bold">02. Limitations</h2>
                            <div className="prose max-w-none space-y-4">
                                <p>
                                    While using our platform, you acknowledge and agree to the following limitations and restrictions on the use of our services:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>You may not use our platform for any illegal or unauthorized purposes.</li>
                                    <li>We reserve the right to modify, suspend, or terminate services at any time without prior notice.</li>
                                    <li>TalentWaves is not responsible for any loss or damage resulting from your use of our services.</li>
                                    <li>We may impose limits on certain features or restrict access to parts of the service without notice.</li>
                                    <li>Content posted on our platform must comply with our community guidelines and applicable laws.</li>
                                </ul>
                            </div>
                        </section>

                        <section id="security">
                            <h2 className="mb-4 text-2xl font-bold">03. Security</h2>
                            <div className="prose max-w-none space-y-4">
                                <p>
                                    We prioritize the security of your data and have implemented appropriate technical and organizational measures to protect your information. However, no method of transmission over the internet is 100% secure. By using our platform, you acknowledge:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Your responsibility to maintain the security of your account credentials.</li>
                                    <li>The importance of using strong passwords and enabling two-factor authentication when available.</li>
                                    <li>That you will not attempt to breach our security measures or access unauthorized areas.</li>
                                    <li>Your obligation to report any security vulnerabilities you discover.</li>
                                </ul>
                            </div>
                        </section>

                        <section id="privacy">
                            <h2 className="mb-4 text-2xl font-bold">04. Privacy Policy</h2>
                            <div className="prose max-w-none space-y-4">
                                <p>
                                    Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you consent to:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>The collection and processing of your personal data as described in our Privacy Policy.</li>
                                    <li>The use of cookies and similar technologies to enhance your experience.</li>
                                    <li>Receiving communications from us regarding our services and updates.</li>
                                    <li>The sharing of your information with third parties as outlined in our Privacy Policy.</li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    {/* Table of Contents */}
                    <div className="rounded-lg border bg-white p-4 lg:sticky lg:top-4 lg:h-fit">
                        <h3 className="mb-4 text-sm font-medium text-muted-foreground">TABLE OF CONTENTS</h3>
                        <nav>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#terms" className="text-muted-foreground hover:text-primary">
                                        01. Terms & Condition
                                    </a>
                                </li>
                                <li>
                                    <a href="#limitations" className="text-muted-foreground hover:text-primary">
                                        02. Limitations
                                    </a>
                                </li>
                                <li>
                                    <a href="#security" className="text-muted-foreground hover:text-primary">
                                        03. Security
                                    </a>
                                </li>
                                <li>
                                    <a href="#privacy" className="text-muted-foreground hover:text-primary">
                                        04. Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </main>
        </div>
    )
}

