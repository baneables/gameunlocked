"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SupportPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openFaqs, setOpenFaqs] = useState<number[]>([0]) // First FAQ open by default

  const toggleFaq = (index: number) => {
    if (openFaqs.includes(index)) {
      setOpenFaqs(openFaqs.filter((i) => i !== index))
    } else {
      setOpenFaqs([...openFaqs, index])
    }
  }

  const faqCategories = [
    {
      id: "general",
      title: "General",
      faqs: [
        {
          question: "Is this website legal?",
          answer:
            "Our website provides information about games and links to download them. We do not host any files on our servers. All games are hosted on third-party servers. We encourage users to support game developers by purchasing games they enjoy.",
        },
        {
          question: "Do I need to register to download games?",
          answer:
            "No, registration is not required to download games from our website. However, creating an account allows you to track your downloads, receive notifications about game updates, and participate in our community.",
        },
        {
          question: "Are the games safe to download?",
          answer:
            "We do our best to ensure all games are safe to download. However, we recommend using antivirus software when downloading and installing any files from the internet. Always follow the installation instructions carefully.",
        },
        {
          question: "How often do you add new games?",
          answer:
            "We add new games regularly, typically within a few days of their release or when a crack becomes available. You can check our 'Latest' page for recent additions or follow us on social media for updates.",
        },
      ],
    },
    {
      id: "downloads",
      title: "Downloads",
      faqs: [
        {
          question: "Why are downloads so slow?",
          answer:
            "Download speeds depend on various factors including your internet connection, the server load, and your location. We offer multiple download options including direct downloads and torrents. Torrents may provide faster speeds depending on the number of seeders.",
        },
        {
          question: "What should I do if a download link is broken?",
          answer:
            "If you encounter a broken download link, please report it through our contact form or in the comments section of the game page. We'll fix it as soon as possible.",
        },
        {
          question: "Why do some games have multiple parts?",
          answer:
            "Larger games are often split into multiple parts to make downloading easier, especially for users with unstable internet connections. You need to download all parts before extracting the game.",
        },
        {
          question: "Do I need a VPN to download games?",
          answer:
            "While not strictly necessary, using a VPN is recommended, especially when downloading via torrents. A VPN helps protect your privacy and may prevent your ISP from throttling your connection.",
        },
      ],
    },
    {
      id: "installation",
      title: "Installation",
      faqs: [
        {
          question: "Why does my antivirus flag the game files?",
          answer:
            "Antivirus software may flag crack files as malicious due to the way they modify game files to bypass DRM. These are usually false positives. However, always download games from trusted sources and scan files before running them.",
        },
        {
          question: "What do I do if the game crashes on startup?",
          answer:
            "Common solutions include: updating your graphics drivers, installing required software (DirectX, Visual C++ Redistributables), running the game as administrator, disabling antivirus temporarily, and ensuring your system meets the minimum requirements.",
        },
        {
          question: "Why am I missing DLL files?",
          answer:
            "Missing DLL errors usually occur when your system is missing required Visual C++ Redistributables or DirectX components. Install the latest versions of these packages, which are often included in the game folder or can be downloaded from Microsoft's website.",
        },
        {
          question: "How do I apply a crack to the game?",
          answer:
            "Typically, you need to copy the files from the crack folder to the game's installation directory, overwriting the original files when prompted. Always follow the specific instructions provided with each game.",
        },
      ],
    },
  ]

  const filteredFaqs = faqCategories.map((category) => ({
    ...category,
    faqs: category.faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  }))

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
        <h1 className="text-4xl font-bold mb-8">FAQ & Support</h1>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link href="/instructions">
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all cursor-pointer h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-red-600 p-3 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Installation Instructions</h3>
                <p className="text-gray-400">Detailed guides on how to install games properly</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/contact">
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all cursor-pointer h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-blue-600 p-3 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Contact Support</h3>
                <p className="text-gray-400">Get help with specific issues not covered in the FAQ</p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/requests">
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all cursor-pointer h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-green-600 p-3 rounded-full mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Request a Game</h3>
                <p className="text-gray-400">Can't find what you're looking for? Submit a request</p>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* FAQ Tabs */}
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800">
              {faqCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {faqCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                {filteredFaqs.find((cat) => cat.id === category.id)?.faqs.length === 0 ? (
                  <div className="text-center py-12 bg-gray-800 rounded-lg">
                    <p className="text-gray-400">No FAQs found matching your search.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredFaqs
                      .find((cat) => cat.id === category.id)
                      ?.faqs.map((faq, index) => (
                        <Card key={index} className="bg-gray-800 border-gray-700">
                          <CardContent className="p-0">
                            <button
                              className="w-full flex justify-between items-center p-4 text-left"
                              onClick={() => toggleFaq(index)}
                            >
                              <h3 className="font-semibold text-lg">{faq.question}</h3>
                              {openFaqs.includes(index) ? (
                                <ChevronUp className="w-5 h-5 text-gray-400" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                              )}
                            </button>
                            {openFaqs.includes(index) && (
                              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700">{faq.answer}</div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Still Need Help */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer to your question, feel free to contact our support team.
          </p>
          <Link href="/contact">
            <Button className="bg-red-600 hover:bg-red-700">Contact Support</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}