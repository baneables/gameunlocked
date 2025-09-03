import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function LatestNewsPage() {
  const news = [
    {
      id: 1,
      title: "New AAA Games Added This Week",
      excerpt:
        "We've added several highly anticipated AAA titles to our collection this week, including the latest releases from top studios.",
      date: "June 5, 2024",
      category: "Updates",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: 2,
      title: "Website Performance Improvements",
      excerpt:
        "We've made significant improvements to our website's performance, resulting in faster loading times and a smoother browsing experience.",
      date: "June 3, 2024",
      category: "Announcements",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: 3,
      title: "New Download Servers Added",
      excerpt:
        "We've added new download servers to improve download speeds and reliability. Users should experience faster downloads across all regions.",
      date: "May 30, 2024",
      category: "Infrastructure",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: 4,
      title: "Most Requested Games of the Month",
      excerpt:
        "Check out the most requested games from our community this month. We're working hard to add these titles to our collection soon.",
      date: "May 25, 2024",
      category: "Community",
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: 5,
      title: "Indie Game Spotlight: Hidden Gems",
      excerpt:
        "Discover some amazing indie games that might have flown under your radar. These hidden gems offer unique gameplay experiences.",
      date: "May 20, 2024",
      category: "Features",
      image: "/placeholder.svg?height=300&width=600",
    },
  ]

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
        <h1 className="text-4xl font-bold mb-8">Latest News & Updates</h1>

        {/* Featured News */}
        <div className="mb-12">
          <Card className="bg-gray-800 border-gray-700 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Featured news"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <Badge className="bg-red-600 mb-4">Featured</Badge>
                <h2 className="text-2xl font-bold mb-4">Major Website Update: New Features and Improvements</h2>
                <p className="text-gray-300 mb-6">
                  We're excited to announce a major update to our website, featuring a completely redesigned interface,
                  faster download speeds, and many new quality-of-life improvements to enhance your gaming experience.
                </p>
                <div className="flex items-center text-sm text-gray-400 mb-6">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>June 8, 2024</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>5 min read</span>
                </div>
                <Button className="bg-red-600 hover:bg-red-700">Read More</Button>
              </div>
            </div>
          </Card>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <Card key={item.id} className="bg-gray-800 border-gray-700 overflow-hidden">
              <div className="h-48">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-blue-600">{item.category}</Badge>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{item.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{item.excerpt}</p>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800" disabled>
              Previous
            </Button>
            <Button variant="default" size="sm" className="bg-red-600 hover:bg-red-700">
              1
            </Button>
            <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              2
            </Button>
            <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              3
            </Button>
            <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}