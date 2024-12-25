interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

interface FAQSection {
    title: string;
    items: FAQItem[];
}

export const faqSections: FAQSection[] = [
    {
        title: "Your Account",
        items: [
            {
                id: "account-1",
                question: "How do I create an account on Talent Waves?",
                answer: "Creating an account is simple! Click on the 'Sign Up' button, choose between Candidate or Employer account type, fill in your details including email and password, and follow the verification process. Once verified, you can start using Talent Waves immediately."
            },
            {
                id: "account-2",
                question: "How can I reset my password if I forget it?",
                answer: "To reset your password, click on the 'Forgot Password' link on the login page. Enter your registered email address, and we'll send you a password reset link. Follow the link to create a new password and regain access to your account."
            },
            {
                id: "account-3",
                question: "Can I change my account type after registration?",
                answer: "Yes, you can change your account type by contacting our support team. However, note that changing from a Candidate to an Employer account may require additional verification and documentation to ensure platform integrity."
            },
            {
                id: "account-4",
                question: "How can I update my account information?",
                answer: "You can update your account information by logging in and navigating to your Profile Settings. Here you can modify your personal details, contact information, and notification preferences. Remember to save your changes before leaving the page."
            }
        ]
    },
    {
        title: "Employers and Jobs",
        items: [
            {
                id: "employer-1",
                question: "How do I post a job on Talent Waves?",
                answer: "To post a job, log in to your employer account, click on 'Post a Job', fill in the job details including title, description, requirements, and benefits. Review the information and click 'Publish' to make your job listing live on our platform."
            },
            {
                id: "employer-2",
                question: "What are the costs associated with posting jobs?",
                answer: "We offer various flexible pricing plans for employers. The basic plan allows you to post a limited number of jobs monthly, while premium plans offer additional features like featured listings, advanced candidate filtering, and priority support."
            },
            {
                id: "employer-3",
                question: "How can I manage multiple job postings?",
                answer: "Our employer dashboard provides comprehensive tools to manage all your job postings. You can edit, pause, or close job listings, view applicant profiles, and track application status all in one place."
            },
            {
                id: "employer-4",
                question: "How do I screen and filter candidates?",
                answer: "Our platform offers advanced filtering tools to screen candidates based on skills, experience, location, and other criteria. You can also use our AI-powered matching system to find the most suitable candidates for your positions."
            }
        ]
    },
    {
        title: "Candidates and Resumes",
        items: [
            {
                id: "candidate-1",
                question: "How do I create an effective profile?",
                answer: "To create an effective profile, ensure you complete all sections including work experience, education, skills, and a professional summary. Add relevant certifications and keep your information up-to-date. Use keywords related to your target roles for better visibility."
            },
            {
                id: "candidate-2",
                question: "Can I upload multiple resumes?",
                answer: "Yes, you can upload multiple versions of your resume to target different job types or industries. Our system allows you to manage multiple resumes and choose which one to use when applying for specific positions."
            },
            {
                id: "candidate-3",
                question: "How can I track my job applications?",
                answer: "The Applications Dashboard shows all your submitted applications, their current status, and any messages from employers. You can also set up email notifications to stay updated on application progress."
            },
            {
                id: "candidate-4",
                question: "What makes my profile stand out to employers?",
                answer: "To stand out, keep your profile complete and current, highlight quantifiable achievements, add a professional photo, and regularly update your skills. Engage with our platform's features like skill assessments and certifications to validate your expertise."
            }
        ]
    }
]