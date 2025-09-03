"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Download, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useGames } from "@/contexts/GameContext"

export default function HomePage() {
  const { games } = useGames()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("All")

  const genres = ["All", "RPG", "Action", "FPS", "Sandbox", "Adventure"]

  const filteredGames = games.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenre === "All" || game.genre === selectedGenre
    return matchesSearch && matchesGenre
  })

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-red-600 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              GAME<span className="text-red-200">UNLOCKED</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-red-200 transition-colors">
                Home
              </Link>
              <Link href="/games" className="hover:text-red-200 transition-colors">
                All Games (A-Z)
              </Link>
              <Link href="/categories" className="hover:text-red-200 transition-colors">
                Categories
              </Link>
              <Link href="/latest" className="hover:text-red-200 transition-colors">
                Latest News
              </Link>
              <Link href="/support" className="hover:text-red-200 transition-colors">
                FAQ & Support
              </Link>
              <Link href="/requests" className="hover:text-red-200 transition-colors">
                Requests
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-white border-white hover:bg-white hover:text-red-600"
                >
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="secondary" size="sm">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 to-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            FREE <span className="text-red-500">PC GAMES</span>
          </h1>
          <h2 className="text-3xl font-light mb-6 text-gray-300">PRE-INSTALLED FOR PC</h2>
          <p className="text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
            Game Unlocked allows you to download your favorite games pre-installed without the cost.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
            <Download className="w-5 h-5 mr-2" />
            Browse Games
          </Button>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {genres.map((genre) => (
              <Button
                key={genre}
                variant={selectedGenre === genre ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedGenre(genre)}
                className={
                  selectedGenre === genre
                    ? "bg-red-600 hover:bg-red-700"
                    : "border-gray-600 text-gray-300 hover:bg-gray-800"
                }
              >
                {genre}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Added Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 flex items-center">
          <Calendar className="w-8 h-8 mr-3 text-red-500" />
          Recently Added ({filteredGames.length} games)
        </h2>
        {filteredGames.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No games found matching your criteria.</p>
            <p className="text-gray-500 text-sm mt-2">Try adjusting your search or filter settings.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {filteredGames.map((game) => (
              <Link key={game.id} href={`/game/${game.id}`}>
                <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={game.image || "/placeholder.svg?height=300&width=200"}
                        alt={game.title}
                        className="w-full h-64 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-2 right-2 bg-blue-600">PC</Badge>
                      <Badge className="absolute top-2 left-2 bg-green-600">{game.rating}</Badge>
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
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                GAME<span className="text-red-500">UNLOCKED</span>
              </h3>
              <p className="text-gray-400">
                Your ultimate destination for free PC games. Download and play the latest games without any cost.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/games" className="hover:text-white">
                    All Games
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="hover:text-white">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/latest" className="hover:text-white">
                    Latest
                  </Link>
                </li>
                <li>
                  <Link href="/requests" className="hover:text-white">
                    Requests
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/support" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/instructions" className="hover:text-white">
                    Instructions
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/dmca" className="hover:text-white">
                    DMCA
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GameUnlocked. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}