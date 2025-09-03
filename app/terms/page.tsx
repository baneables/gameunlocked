import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function TermsOfServicePage() {
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
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="text-gray-400 mb-6">Last updated: June 1, 2024</p>

            <div className="space-y-6 text-gray-300">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
                <p>
                  Welcome to GameUnlocked. These Terms of Service govern your use of our website located at
                  gameunlocked.com (together or individually "Service") operated by GameUnlocked. Our Privacy Policy
                  also governs your use of our Service and explains how we collect, safeguard and disclose information
                  that results from your use of our web pages. Your agreement with us includes these Terms and our
                  Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree
                  to be bound by them.
                </p>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Communications</h2>
                <p>
                  By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and
                  other information we may send. However, you may opt out of receiving any, or all, of these
                  communications from us by following the unsubscribe link or by emailing at support@gameunlocked.com.
                </p>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Content</h2>
                <p className="mb-3">
                  Our Service allows you to post, link, store, share and otherwise make available certain information,
                  text, graphics, videos, or other material ("Content"). You are responsible for Content that you post
                  on or through Service, including its legality, reliability, and appropriateness.
                </p>
                <p className="mb-3">By posting Content on or through Service, You represent and warrant that:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Content is yours (you own it) and/or you have the right to use it and the right to grant us the
                    rights and license as provided in these Terms.
                  </li>
                  <li>
                    That the posting of your Content on or through Service does not violate the privacy rights,
                    publicity rights, copyrights, contract rights or any other rights of any person or entity.
                  </li>
                </ul>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Prohibited Uses</h2>
                <p className="mb-3">
                  You may use Service only for lawful purposes and in accordance with Terms. You agree not to use
                  Service:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>In any way that violates any applicable national or international law or regulation.</li>
                  <li>
                    For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by
                    exposing them to inappropriate content or otherwise.
                  </li>
                  <li>
                    To transmit, or procure the sending of, any advertising or promotional material, including any "junk
                    mail", "chain letter," "spam," or any other similar solicitation.
                  </li>
                  <li>
                    To impersonate or attempt to impersonate Company, a Company employee, another user, or any other
                    person or entity.
                  </li>
                  <li>
                    In any way that infringes upon the rights of others, or in any way is illegal, threatening,
                    fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose
                    or activity.
                  </li>
                </ul>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Intellectual Property</h2>
                <p>
                  Service and its original content (excluding Content provided by users), features and functionality are
                  and will remain the exclusive property of GameUnlocked and its licensors. Service is protected by
                  copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks
                  and trade dress may not be used in connection with any product or service without the prior written
                  consent of GameUnlocked.
                </p>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Copyright Policy</h2>
                <p>
                  We respect the intellectual property rights of others. It is our policy to respond to any claim that
                  Content posted on Service infringes on the copyright or other intellectual property rights of any
                  person or entity. If you are a copyright owner, or authorized on behalf of one, and you believe that
                  the copyrighted work has been copied in a way that constitutes copyright infringement, please submit
                  your claim via email to dmca@gameunlocked.com, with the subject line: "Copyright Infringement" and
                  include in your claim a detailed description of the alleged Infringement.
                </p>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Disclaimer</h2>
                <p>
                  GameUnlocked provides links to content hosted on third-party websites. We do not host or upload any
                  content and have no ability to control third-party websites. We are not responsible for the accuracy,
                  copyright compliance, legality, or decency of material contained in websites listed in our search
                  results or linked to our Service.
                </p>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable law, in no event shall GameUnlocked, its affiliates,
                  directors, employees, agents, licensors or service providers be liable for any indirect, punitive,
                  incidental, special, consequential or exemplary damages, including without limitation damages for loss
                  of profits, goodwill, use, data or other intangible losses, that result from the use of, or inability
                  to use, the service.
                </p>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">9. Changes to Terms of Service</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                  revision is material we will try to provide at least 30 days' notice prior to any new terms taking
                  effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">10. Contact Us</h2>
                <p>
                  If you have any questions about these Terms, please contact us at{" "}
                  <a href="mailto:terms@gameunlocked.com" className="text-red-400 hover:underline">
                    terms@gameunlocked.com
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