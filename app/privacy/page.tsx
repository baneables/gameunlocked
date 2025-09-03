import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-red-600 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              GAME<span className="text-red-200">UNLOCKED</span>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-red-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Card className="bg-gray-800 border-gray-700 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-gray-400 mb-6">Last updated: June 1, 2024</p>

            <div className="space-y-6 text-gray-300">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
                <p>
                  Welcome to GameUnlocked. We respect your privacy and are committed to protecting your personal data.
                  This privacy policy will inform you about how we look after your personal data when you visit our
                  website and tell you about your privacy rights and how the law protects you.
                </p>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
                <p className="mb-3">
                  We may collect, use, store and transfer different kinds of personal data about you which we have
                  grouped together as follows:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Identity Data</strong> includes username or similar identifier.
                  </li>
                  <li>
                    <strong>Contact Data</strong> includes email address.
                  </li>
                  <li>
                    <strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version,
                    time zone setting and location, browser plug-in types and versions, operating system and platform,
                    and other technology on the devices you use to access this website.
                  </li>
                  <li>
                    <strong>Usage Data</strong> includes information about how you use our website and services.
                  </li>
                </ul>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
                <p className="mb-3">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your
                  personal data in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To register you as a new user.</li>
                  <li>To provide and improve our services to you.</li>
                  <li>To manage our relationship with you.</li>
                  <li>To administer and protect our business and this website.</li>
                  <li>To deliver relevant website content to you.</li>
                  <li>
                    To use data analytics to improve our website, products/services, marketing, customer relationships
                    and experiences.
                  </li>
                </ul>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Cookies</h2>
                <p>
                  We use cookies and similar tracking technologies to track the activity on our website and hold certain
                  information. Cookies are files with a small amount of data which may include an anonymous unique
                  identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
                  sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Data Security</h2>
                <p>
                  We have put in place appropriate security measures to prevent your personal data from being
                  accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we
                  limit access to your personal data to those employees, agents, contractors and other third parties who
                  have a business need to know.
                </p>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Data Retention</h2>
                <p>
                  We will only retain your personal data for as long as necessary to fulfill the purposes we collected
                  it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                </p>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Your Legal Rights</h2>
                <p className="mb-3">
                  Under certain circumstances, you have rights under data protection laws in relation to your personal
                  data, including the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Request access to your personal data.</li>
                  <li>Request correction of your personal data.</li>
                  <li>Request erasure of your personal data.</li>
                  <li>Object to processing of your personal data.</li>
                  <li>Request restriction of processing your personal data.</li>
                  <li>Request transfer of your personal data.</li>
                  <li>Right to withdraw consent.</li>
                </ul>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">8. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy
                  Policy.
                </p>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">9. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:privacy@gameunlocked.com" className="text-red-400 hover:underline">
                    privacy@gameunlocked.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}