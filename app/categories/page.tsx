import Link from "next/link"
import { ArrowLeft, Gamepad2, Sword, Crosshair, Car, ClubIcon as Football, Puzzle, Rocket, Dices } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CategoriesPage() {
  const categories = [
    {
      id: "action",
      name: "Action",
      icon: <Sword className="w-8 h-8" />,
      count: 245,
      color: "from-red-500 to-orange-500",
    },
    {
      id: "fps",
      name: "FPS",
      icon: <Crosshair className="w-8 h-8" />,
      count: 187,
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: "rpg",
      name: "RPG",
      icon: <Gamepad2 className="w-8 h-8" />,
      count: 156,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "racing",
      name: "Racing",
      icon: <Car className="w-8 h-8" />,
      count: 89,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "sports",
      name: "Sports",
      icon: <Football className="w-8 h-8" />,
      count: 76,
      color: "from-yellow-500 to-amber-500",
    },
    {
      id: "puzzle",
      name: "Puzzle",
      icon: <Puzzle className="w-8 h-8" />,
      count: 64,
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: "simulation",
      name: "Simulation",
      icon: <Rocket className="w-8 h-8" />,
      count: 58,
      color: "from-teal-500 to-green-500",
    },
    {
      id: "strategy",
      name: "Strategy",
      icon: <Dices className="w-8 h-8" />,
      count: 52,
      color: "from-orange-500 to-red-500",
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
        <h1 className="text-4xl font-bold mb-8">Game Categories</h1>
        <p className="text-gray-400 mb-8 max-w-3xl">
          Browse our extensive collection of games by category. Click on any category to see all games in that genre.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.id}`}>
              <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${category.color} p-6 flex items-center justify-between`}>
                    <div className="bg-black/30 p-3 rounded-full">{category.icon}</div>
                    <div className="text-right">
                      <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                      <p className="text-white/80">{category.count} games</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-400">
                      Browse all {category.name.toLowerCase()} games in our collection. From classics to the latest
                      releases.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Popular Tags */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Popular Tags</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Open World",
              "Multiplayer",
              "Adventure",
              "Survival",
              "Horror",
              "Sci-Fi",
              "Fantasy",
              "Indie",
              "Co-op",
              "Battle Royale",
              "Stealth",
              "Zombies",
              "Platformer",
              "Sandbox",
              "Story Rich",
              "Anime",
              "Racing",
              "Shooter",
              "Roguelike",
              "Tactical",
            ].map((tag) => (
              <Button key={tag} variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}