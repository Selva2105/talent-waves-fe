import { Facebook, Instagram, Twitter, Globe, Waves } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 text-white mb-4">
              <Waves className='size-6' />
              <span className="text-xl font-semibold">Talent Waves</span>
            </div>
            <div className="space-y-2">
              <p>Call now: (319) 555-0115</p>
              <p className="text-sm">
                6391 Elgin St. Celina, Delaware 10299, New York, United States of America
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Candidate Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Candidate</h3>
            <ul className="space-y-2">
              <li><Link href="/browse-jobs" className="hover:text-white transition-colors">Browse Jobs</Link></li>
              <li><Link href="/browse-employers" className="hover:text-white transition-colors">Browse Employers</Link></li>
              <li><Link href="/candidate-dashboard" className="hover:text-white transition-colors">Candidate Dashboard</Link></li>
              <li><Link href="/saved-jobs" className="hover:text-white transition-colors">Saved Jobs</Link></li>
            </ul>
          </div>

          {/* Employers Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Employers</h3>
            <ul className="space-y-2">
              <li><Link href="/post-job" className="hover:text-white transition-colors">Post a Job</Link></li>
              <li><Link href="/browse-candidates" className="hover:text-white transition-colors">Browse Candidates</Link></li>
              <li><Link href="/employers-dashboard" className="hover:text-white transition-colors">Employers Dashboard</Link></li>
              <li><Link href="/applications" className="hover:text-white transition-colors">Applications</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/faqs" className="hover:text-white transition-colors">Faqs</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © 2021 Talent Waves - Job Portal. All rights Reserved
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Globe className="h-5 w-5" />
              <span className="sr-only">Website</span>
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

