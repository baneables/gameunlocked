import Link from "next/link"
import { ArrowLeft, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AllGamesPage() {
  // This would be replaced with real data from your context
  const alphabetLinks = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  const games = [
    {
      id: 1,
      title: "Assassin's Creed Valhalla",
      image: "/placeholder.svg?height=300&width=200",
      genre: "Action",
      size: "45 GB",
      releaseDate: "2020",
    },
    {
      id: 2,
      title: "Battlefield 2042",
      image: "/placeholder.svg?height=300&width=200",
      genre: "FPS",
      size: "50 GB",
      releaseDate: "2021",
    },
    {
      id: 3,
      title: "Call of Duty: Warzone",
      image: "/placeholder.svg?height=300&width=200",
      genre: "FPS",
      size: "85 GB",
      releaseDate: "2020",
    },
    {
      id: 4,
      title: "Doom Eternal",
      image: "/placeholder.svg?height=300&width=200",
      genre: "FPS",
      size: "40 GB",
      releaseDate: "2020",
    },
    {
      id: 5,
      title: "Elden Ring",
      image: "/placeholder.svg?height=300&width=200",
      genre: "RPG",
      size: "60 GB",
      releaseDate: "2022",
    },
    {
      id: 6,
      title: "Forza Horizon 5",
      image: "/placeholder.svg?height=300&width=200",
      genre: "Racing",
      size: "110 GB",
      releaseDate: "2021",
    },
    // Add more games for each letter
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
        <h1 className="text-4xl font-bold mb-8">All Games (A-Z)</h1>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for games..."
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="w-[180px] bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700 text-white">
                <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                <SelectItem value="date-desc">Newest First</SelectItem>
                <SelectItem value="date-asc">Oldest First</SelectItem>
                <SelectItem value="size-desc">Size (Largest)</SelectItem>
                <SelectItem value="size-asc">Size (Smallest)</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Alphabet Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
            #
          </Button>
          {alphabetLinks.map((letter) => (
            <Button
              key={letter}
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              {letter}
            </Button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {games.map((game) => (
            <Link key={game.id} href={`/game/${game.id}`}>
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-blue-600">PC</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-2 line-clamp-2">{game.title}</h3>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <span>{game.genre}</span>
                      <span>{game.size}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{game.releaseDate}</div>
                  </div>
                </CardContent>
              </Card>
            </Link>
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
              ...
            </Button>
            <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              10
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