'use client'
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollTopButton = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setShowScrollButton(true);
			} else {
				setShowScrollButton(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
    return (
        showScrollButton && (
            <Button
                onClick={scrollToTop}
                variant="default"
                className="fixed bottom-4 right-4 text-white p-4 rounded-full shadow-lg size-12 z-20"
                aria-label="Scroll to top"
            >
                <ChevronUp className="!w-6 !h-6" />
            </Button>
        )
    );
}

export default ScrollTopButton