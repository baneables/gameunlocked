import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function DMCAPage() {
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
            <h1 className="text-3xl font-bold mb-6">DMCA Policy</h1>
            <p className="text-gray-400 mb-6">Last updated: June 1, 2024</p>

            <div className="space-y-6 text-gray-300">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
                <p>
                  GameUnlocked respects the intellectual property rights of others and expects its users to do the same.
                  In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), the text of which may be
                  found on the U.S. Copyright Office website at http://www.copyright.gov/legislation/dmca.pdf,
                  GameUnlocked will respond expeditiously to claims of copyright infringement committed using the
                  GameUnlocked service that are reported to our designated copyright agent.
                </p>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Notification of Claimed Copyright Infringement</h2>
                <p className="mb-3">
                  If you are a copyright owner, or are authorized to act on behalf of one, or authorized to act under
                  any exclusive right under copyright, please report alleged copyright infringements taking place on or
                  through the Site by completing the following DMCA Notice of Alleged Infringement and delivering it to
                  our designated copyright agent. Upon receipt of the Notice as described below, GameUnlocked will take
                  whatever action, in its sole discretion, it deems appropriate, including removal of the challenged
                  material from the Site.
                </p>
                <p className="mb-3">DMCA Notice of Alleged Infringement ("Notice"):</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>
                    Identify the copyrighted work that you claim has been infringed, or if multiple copyrighted works
                    are covered by this Notice, you may provide a representative list of the copyrighted works that you
                    claim have been infringed.
                  </li>
                  <li>
                    Identify the material that you claim is infringing (or to be the subject of infringing activity) and
                    that is to be removed or access to which is to be disabled, and information reasonably sufficient to
                    permit us to locate the material, including at a minimum, if applicable, the URL of the link shown
                    on the Site where such material may be found.
                  </li>
                  <li>Provide your mailing address, telephone number, and, if available, email address.</li>
                  <li>
                    Include both of the following statements in the body of the Notice:
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>
                        "I hereby state that I have a good faith belief that the disputed use of the copyrighted
                        material is not authorized by the copyright owner, its agent, or the law (e.g., as a fair use)."
                      </li>
                      <li>
                        "I hereby state that the information in this Notice is accurate and, under penalty of perjury,
                        that I am the owner, or authorized to act on behalf of the owner, of the copyright or of an
                        exclusive right under the copyright that is allegedly infringed."
                      </li>
                    </ul>
                  </li>
                  <li>Provide your full legal name and your electronic or physical signature.</li>
                </ol>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Counter-Notification</h2>
                <p className="mb-3">
                  If you believe that your content that was removed (or to which access was disabled) is not infringing,
                  or that you have the authorization from the copyright owner, the copyright owner's agent, or pursuant
                  to the law, to post and use the material in your content, you may send a counter-notification
                  containing the following information to our copyright agent:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Your physical or electronic signature;</li>
                  <li>
                    Identification of the content that has been removed or to which access has been disabled and the
                    location at which the content appeared before it was removed or disabled;
                  </li>
                  <li>
                    A statement that you have a good faith belief that the content was removed or disabled as a result
                    of mistake or a misidentification of the content; and
                  </li>
                  <li>
                    Your name, address, telephone number, and email address, a statement that you consent to the
                    jurisdiction of the federal court in [Your Jurisdiction], and a statement that you will accept
                    service of process from the person who provided notification of the alleged infringement.
                  </li>
                </ol>
                <p className="mt-3">
                  If a counter-notification is received by our copyright agent, GameUnlocked may send a copy of the
                  counter-notification to the original complaining party informing that person that it may replace the
                  removed content or cease disabling it in 10 business days. Unless the copyright owner files an action
                  seeking a court order against the content provider, member or user, the removed content may be
                  replaced, or access to it restored, in 10 to 14 business days or more after receipt of the
                  counter-notice, at GameUnlocked's sole discretion.
                </p>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Repeat Infringer Policy</h2>
                <p>
                  In accordance with the DMCA and other applicable law, GameUnlocked has adopted a policy of
                  terminating, in appropriate circumstances and at GameUnlocked's sole discretion, users who are deemed
                  to be repeat infringers. GameUnlocked may also at its sole discretion limit access to the Site and/or
                  terminate the accounts of any users who infringe any intellectual property rights of others, whether
                  or not there is any repeat infringement.
                </p>
              </section>

              <Separator className="bg-gray-700" />

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Contact Information</h2>
                <p>
                  Please contact our designated agent to receive notification of claimed infringement at the following
                  address:
                </p>
                <div className="mt-3 p-4 bg-gray-700 rounded-lg">
                  <p>DMCA Agent</p>
                  <p>GameUnlocked</p>
                  <p>Email: dmca@gameunlocked.com</p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}