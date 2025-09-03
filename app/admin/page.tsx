"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Plus, Trash2, LogOut, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useGames } from "@/contexts/GameContext"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [newGame, setNewGame] = useState({
    title: "",
    genre: "",
    size: "",
    description: "",
    releaseDate: "",
    rating: "E",
    developer: "",
    publisher: "",
    downloadLinks: "",
    image: "",
    screenshots: "",
    customInstructions: "",
    systemRequirements: {
      minimum: {
        os: "",
        processor: "",
        memory: "",
        graphics: "",
        storage: "",
      },
      recommended: {
        os: "",
        processor: "",
        memory: "",
        graphics: "",
        storage: "",
      },
    },
  })
  const router = useRouter()
  const { games, addGame, deleteGame } = useGames()

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin")
    if (isAdmin === "true") {
      setIsAuthenticated(true)
    } else {
      router.push("/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isAdmin")
    localStorage.removeItem("userEmail")
    router.push("/")
  }

  const handleAddGame = () => {
    if (!newGame.title || !newGame.genre || !newGame.size || !newGame.description) {
      alert("Please fill in all required fields")
      return
    }

    const downloadLinks = newGame.downloadLinks
      .split("\n")
      .filter((link) => link.trim())
      .map((link) => {
        const parts = link.split("|")
        return {
          name: parts.length > 1 ? parts[0].trim() : "Download Link",
          url: parts.length > 1 ? parts[1].trim() : link.trim(),
          size: newGame.size,
        }
      })

    const screenshots = newGame.screenshots
      .split("\n")
      .filter((url) => url.trim())
      .map((url) => url.trim())

    addGame({
      title: newGame.title,
      genre: newGame.genre,
      size: newGame.size,
      description: newGame.description,
      releaseDate: newGame.releaseDate || new Date().toLocaleDateString(),
      rating: newGame.rating,
      developer: newGame.developer || "Unknown Developer",
      publisher: newGame.publisher || "Unknown Publisher",
      image: newGame.image || "/placeholder.svg?height=300&width=200",
      screenshots:
        screenshots.length > 0
          ? screenshots
          : [
              "/placeholder.svg?height=300&width=500",
              "/placeholder.svg?height=300&width=500",
              "/placeholder.svg?height=300&width=500",
            ],
      customInstructions: newGame.customInstructions,
      systemRequirements: {
        minimum: {
          os: newGame.systemRequirements.minimum.os || "Windows 10 64-bit",
          processor: newGame.systemRequirements.minimum.processor || "Intel Core i3 / AMD equivalent",
          memory: newGame.systemRequirements.minimum.memory || "4 GB RAM",
          graphics: newGame.systemRequirements.minimum.graphics || "DirectX 11 compatible",
          storage: newGame.systemRequirements.minimum.storage || `${newGame.size} available space`,
        },
        recommended: {
          os: newGame.systemRequirements.recommended.os || "Windows 10 64-bit",
          processor: newGame.systemRequirements.recommended.processor || "Intel Core i5 / AMD equivalent",
          memory: newGame.systemRequirements.recommended.memory || "8 GB RAM",
          graphics: newGame.systemRequirements.recommended.graphics || "DirectX 11 compatible",
          storage: newGame.systemRequirements.recommended.storage || `${newGame.size} available space`,
        },
      },
      downloadLinks:
        downloadLinks.length > 0
          ? downloadLinks
          : [
              { name: "Google Drive", url: "#", size: newGame.size },
              { name: "MEGA", url: "#", size: newGame.size },
              { name: "MediaFire", url: "#", size: newGame.size },
              { name: "Torrent", url: "#", size: newGame.size },
            ],
    })

    // Reset form
    setNewGame({
      title: "",
      genre: "",
      size: "",
      description: "",
      releaseDate: "",
      rating: "E",
      developer: "",
      publisher: "",
      downloadLinks: "",
      image: "",
      screenshots: "",
      customInstructions: "",
      systemRequirements: {
        minimum: {
          os: "",
          processor: "",
          memory: "",
          graphics: "",
          storage: "",
        },
        recommended: {
          os: "",
          processor: "",
          memory: "",
          graphics: "",
          storage: "",
        },
      },
    })

    setIsDialogOpen(false)
    setSuccessMessage(`Game "${newGame.title}" has been added successfully!`)
    setTimeout(() => setSuccessMessage(""), 5000)
  }

  const handleDeleteGame = (id: number, title: string) => {
    if (confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)) {
      deleteGame(id)
      setSuccessMessage(`Game "${title}" has been deleted successfully!`)
      setTimeout(() => setSuccessMessage(""), 5000)
    }
  }

  const filteredGames = games.filter((game) => game.title.toLowerCase().includes(searchTerm.toLowerCase()))

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div>Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-red-600 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold">
                GAME<span className="text-red-200">UNLOCKED</span>
              </Link>
              <Badge className="bg-yellow-600">Admin Panel</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">Welcome, Admin</span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="text-white border-white hover:bg-white hover:text-red-600"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Success Message */}
        {successMessage && (
          <Alert className="mb-6 border-green-600 bg-green-900/20">
            <AlertDescription className="text-green-400">{successMessage}</AlertDescription>
          </Alert>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-blue-500">{games.length}</div>
              <div className="text-sm text-gray-400">Total Games</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-500">
                {games.reduce((sum, game) => sum + (game.downloads || 0), 0)}
              </div>
              <div className="text-sm text-gray-400">Total Downloads</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-yellow-500">
                {games.filter((game) => game.status === "Active").length}
              </div>
              <div className="text-sm text-gray-400">Active Games</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-purple-500">0</div>
              <div className="text-sm text-gray-400">Pending Reviews</div>
            </CardContent>
          </Card>
        </div>

        {/* Game Management */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Game Management</CardTitle>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Game
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gray-800 border-gray-700 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Add New Game</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    {/* Basic Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-blue-400">Basic Information</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="title">Game Title *</Label>
                          <Input
                            id="title"
                            value={newGame.title}
                            onChange={(e) => setNewGame({ ...newGame, title: e.target.value })}
                            className="bg-gray-700 border-gray-600"
                            placeholder="Enter game title"
                          />
                        </div>
                        <div>
                          <Label htmlFor="genre">Genre *</Label>
                          <Select onValueChange={(value) => setNewGame({ ...newGame, genre: value })}>
                            <SelectTrigger className="bg-gray-700 border-gray-600">
                              <SelectValue placeholder="Select genre" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-700 border-gray-600">
                              <SelectItem value="RPG">RPG</SelectItem>
                              <SelectItem value="Action">Action</SelectItem>
                              <SelectItem value="FPS">FPS</SelectItem>
                              <SelectItem value="Adventure">Adventure</SelectItem>
                              <SelectItem value="Sandbox">Sandbox</SelectItem>
                              <SelectItem value="Strategy">Strategy</SelectItem>
                              <SelectItem value="Racing">Racing</SelectItem>
                              <SelectItem value="Sports">Sports</SelectItem>
                              <SelectItem value="Horror">Horror</SelectItem>
                              <SelectItem value="Simulation">Simulation</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor="size">File Size *</Label>
                          <Input
                            id="size"
                            placeholder="e.g., 50 GB"
                            value={newGame.size}
                            onChange={(e) => setNewGame({ ...newGame, size: e.target.value })}
                            className="bg-gray-700 border-gray-600"
                          />
                        </div>
                        <div>
                          <Label htmlFor="rating">Rating</Label>
                          <Select
                            value={newGame.rating}
                            onValueChange={(value) => setNewGame({ ...newGame, rating: value })}
                          >
                            <SelectTrigger className="bg-gray-700 border-gray-600">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-700 border-gray-600">
                              <SelectItem value="E">E - Everyone</SelectItem>
                              <SelectItem value="T">T - Teen</SelectItem>
                              <SelectItem value="M">M - Mature</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor="developer">Developer</Label>
                          <Input
                            id="developer"
                            placeholder="Game developer"
                            value={newGame.developer}
                            onChange={(e) => setNewGame({ ...newGame, developer: e.target.value })}
                            className="bg-gray-700 border-gray-600"
                          />
                        </div>
                        <div>
                          <Label htmlFor="publisher">Publisher</Label>
                          <Input
                            id="publisher"
                            placeholder="Game publisher"
                            value={newGame.publisher}
                            onChange={(e) => setNewGame({ ...newGame, publisher: e.target.value })}
                            className="bg-gray-700 border-gray-600"
                          />
                        </div>
                      </div>

                      <div className="mt-4">
                        <Label htmlFor="releaseDate">Release Date</Label>
                        <Input
                          id="releaseDate"
                          placeholder="e.g., December 10, 2020"
                          value={newGame.releaseDate}
                          onChange={(e) => setNewGame({ ...newGame, releaseDate: e.target.value })}
                          className="bg-gray-700 border-gray-600"
                        />
                      </div>

                      <div className="mt-4">
                        <Label htmlFor="description">Description *</Label>
                        <Textarea
                          id="description"
                          placeholder="Game description..."
                          value={newGame.description}
                          onChange={(e) => setNewGame({ ...newGame, description: e.target.value })}
                          className="bg-gray-700 border-gray-600 min-h-[100px]"
                        />
                      </div>
                    </div>

                    {/* Images */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-green-400">Images</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="image">Main Game Image URL</Label>
                          <Input
                            id="image"
                            placeholder="https://example.com/game-cover.jpg"
                            value={newGame.image}
                            onChange={(e) => setNewGame({ ...newGame, image: e.target.value })}
                            className="bg-gray-700 border-gray-600"
                          />
                          <p className="text-xs text-gray-400 mt-1">Recommended size: 300x400px</p>
                        </div>
                        <div>
                          <Label htmlFor="screenshots">Screenshot URLs (one per line)</Label>
                          <Textarea
                            id="screenshots"
                            placeholder="https://example.com/screenshot1.jpg&#10;https://example.com/screenshot2.jpg&#10;https://example.com/screenshot3.jpg"
                            value={newGame.screenshots}
                            onChange={(e) => setNewGame({ ...newGame, screenshots: e.target.value })}
                            className="bg-gray-700 border-gray-600"
                          />
                          <p className="text-xs text-gray-400 mt-1">Recommended size: 1920x1080px</p>
                        </div>
                      </div>
                    </div>

                    {/* System Requirements */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-yellow-400">System Requirements</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Minimum Requirements */}
                        <div>
                          <h4 className="font-medium mb-3 text-yellow-300">Minimum Requirements</h4>
                          <div className="space-y-3">
                            <div>
                              <Label htmlFor="min-os">Operating System</Label>
                              <Input
                                id="min-os"
                                placeholder="Windows 10 64-bit"
                                value={newGame.systemRequirements.minimum.os}
                                onChange={(e) =>
                                  setNewGame({
                                    ...newGame,
                                    systemRequirements: {
                                      ...newGame.systemRequirements,
                                      minimum: { ...newGame.systemRequirements.minimum, os: e.target.value },
                                    },
                                  })
                                }
                                className="bg-gray-700 border-gray-600"
                              />
                            </div>
                            <div>
                              <Label htmlFor="min-processor">Processor</Label>
                              <Input
                                id="min-processor"
                                placeholder="Intel Core i3-4340 / AMD FX-6300"
                                value={newGame.systemRequirements.minimum.processor}
                                onChange={(e) =>
                                  setNewGame({
                                    ...newGame,
                                    systemRequirements: {
                                      ...newGame.systemRequirements,
                                      minimum: { ...newGame.systemRequirements.minimum, processor: e.target.value },
                                    },
                                  })
                                }
                                className="bg-gray-700 border-gray-600"
                              />
                            </div>
                            <div>
                              <Label htmlFor="min-memory">Memory</Label>
                              <Input
                                id="min-memory"
                                placeholder="8 GB RAM"
                                value={newGame.systemRequirements.minimum.memory}
                                onChange={(e) =>
                                  setNewGame({
                                    ...newGame,
                                    systemRequirements: {
                                      ...newGame.systemRequirements,
                                      minimum: { ...newGame.systemRequirements.minimum, memory: e.target.value },
                                    },
                                  })
                                }
                                className="bg-gray-700 border-gray-600"
                              />
                            </div>
                            <div>
                              <Label htmlFor="min-graphics">Graphics</Label>
                              <Input
                                id="min-graphics"
                                placeholder="NVIDIA GeForce GTX 670 / AMD Radeon HD 7950"
                                value={newGame.systemRequirements.minimum.graphics}
                                onChange={(e) =>
                                  setNewGame({
                                    ...newGame,
                                    systemRequirements: {
                                      ...newGame.systemRequirements,
                                      minimum: { ...newGame.systemRequirements.minimum, graphics: e.target.value },
                                    },
                                  })
                                }
                                className="bg-gray-700 border-gray-600"
                              />
                            </div>
                            <div>
                              <Label htmlFor="min-storage">Storage</Label>
                              <Input
                                id="min-storage"
                                placeholder="50 GB available space"
                                value={newGame.systemRequirements.minimum.storage}
                                onChange={(e) =>
                                  setNewGame({
                                    ...newGame,
                                    systemRequirements: {
                                      ...newGame.systemRequirements,
                                      minimum: { ...newGame.systemRequirements.minimum, storage: e.target.value },
                                    },
                                  })
                                }
                                className="bg-gray-700 border-gray-600"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Recommended Requirements */}
                        <div>
                          <h4 className="font-medium mb-3 text-green-300">Recommended Requirements</h4>
                          <div className="space-y-3">
                            <div>
                              <Label htmlFor="rec-os">Operating System</Label>
                              <Input
                                id="rec-os"
                                placeholder="Windows 10 64-bit"
                                value={newGame.systemRequirements.recommended.os}
                                onChange={(e) =>
                                  setNewGame({
                                    ...newGame,
                                    systemRequirements: {
                                      ...newGame.systemRequirements,
                                      recommended: { ...newGame.systemRequirements.recommended, os: e.target.value },
                                    },
                                  })
                                }
                                className="bg-gray-700 border-gray-600"
                              />
                            </div>
                            <div>
                              <Label htmlFor="rec-processor">Processor</Label>
                              <Input
                                id="rec-processor"
                                placeholder="Intel Core i5-2500K / AMD Ryzen R5 1600X"
                                value={newGame.systemRequirements.recommended.processor}
                                onChange={(e) =>
                                  setNewGame({
                                    ...newGame,
                                    systemRequirements: {
                                      ...newGame.systemRequirements,
                                      recommended: {
                                        ...newGame.systemRequirements.recommended,
                                        processor: e.target.value,
                                      },
                                    },
                                  })
                                }
                                className="bg-gray-700 border-gray-600"
                              />
                            </div>
                            <div>
                              <Label htmlFor="rec-memory">Memory</Label>
                              <Input
                                id="rec-memory"
                                placeholder="12 GB RAM"
                                value={newGame.systemRequirements.recommended.memory}
                                onChange={(e) =>
                                  setNewGame({
                                    ...newGame,
                                    systemRequirements: {
                                      ...newGame.systemRequirements,
                                      recommended: {
                                        ...newGame.systemRequirements.recommended,
                                        memory: e.target.value,
                                      },
                                    },
                                  })
                                }
                                className="bg-gray-700 border-gray-600"
                              />
                            </div>
                            <div>
                              <Label htmlFor="rec-graphics">Graphics</Label>
                              <Input
                                id="rec-graphics"
                                placeholder="NVIDIA GeForce GTX 970 / AMD Radeon R9 390"
                                value={newGame.systemRequirements.recommended.graphics}
                                onChange={(e) =>
                                  setNewGame({
                                    ...newGame,
                                    systemRequirements: {
                                      ...newGame.systemRequirements,
                                      recommended: {
                                        ...newGame.systemRequirements.recommended,
                                        graphics: e.target.value,
                                      },
                                    },
                                  })
                                }
                                className="bg-gray-700 border-gray-600"
                              />
                            </div>
                            <div>
                              <Label htmlFor="rec-storage">Storage</Label>
                              <Input
                                id="rec-storage"
                                placeholder="50 GB available space"
                                value={newGame.systemRequirements.recommended.storage}
                                onChange={(e) =>
                                  setNewGame({
                                    ...newGame,
                                    systemRequirements: {
                                      ...newGame.systemRequirements,
                                      recommended: {
                                        ...newGame.systemRequirements.recommended,
                                        storage: e.target.value,
                                      },
                                    },
                                  })
                                }
                                className="bg-gray-700 border-gray-600"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Custom Instructions */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-purple-400">Installation Instructions</h3>
                      <div>
                        <Label htmlFor="instructions">Custom Installation Instructions</Label>
                        <Textarea
                          id="instructions"
                          placeholder="1. Download the game files from one of the links provided&#10;2. Extract the downloaded files using WinRAR or 7-Zip&#10;3. Run the setup.exe file as administrator&#10;4. Follow the installation wizard instructions&#10;5. Copy the crack files to the game directory&#10;6. Run the game as administrator&#10;7. Enjoy!"
                          value={newGame.customInstructions}
                          onChange={(e) => setNewGame({ ...newGame, customInstructions: e.target.value })}
                          className="bg-gray-700 border-gray-600 min-h-[120px]"
                        />
                        <p className="text-xs text-gray-400 mt-1">Leave empty to use default instructions</p>
                      </div>
                    </div>

                    {/* Download Links */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-red-400">Download Links</h3>
                      <div>
                        <Label htmlFor="links">Download Links (one per line, format: Name|URL)</Label>
                        <Textarea
                          id="links"
                          placeholder="Google Drive|https://drive.google.com/file/d/example&#10;MEGA|https://mega.nz/file/example&#10;MediaFire|https://www.mediafire.com/file/example&#10;Torrent|magnet:?xt=urn:btih:example"
                          value={newGame.downloadLinks}
                          onChange={(e) => setNewGame({ ...newGame, downloadLinks: e.target.value })}
                          className="bg-gray-700 border-gray-600"
                        />
                        <p className="text-xs text-gray-400 mt-1">Leave empty to use placeholder links</p>
                      </div>
                    </div>

                    <Button onClick={handleAddGame} className="w-full bg-red-600 hover:bg-red-700 text-lg py-3">
                      Add Game to Website
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search games..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-700 border-gray-600"
                />
              </div>
            </div>

            {/* Games Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4">Game Title</th>
                    <th className="text-left py-3 px-4">Genre</th>
                    <th className="text-left py-3 px-4">Size</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Downloads</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredGames.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-8 text-gray-400">
                        {searchTerm
                          ? "No games found matching your search."
                          : "No games available. Add your first game!"}
                      </td>
                    </tr>
                  ) : (
                    filteredGames.map((game) => (
                      <tr key={game.id} className="border-b border-gray-700 hover:bg-gray-750">
                        <td className="py-3 px-4 font-medium">{game.title}</td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary">{game.genre}</Badge>
                        </td>
                        <td className="py-3 px-4">{game.size}</td>
                        <td className="py-3 px-4">
                          <Badge className="bg-green-600">{game.status || "Active"}</Badge>
                        </td>
                        <td className="py-3 px-4">{(game.downloads || 0).toLocaleString()}</td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <Link href={`/game/${game.id}`}>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white"
                              >
                                View
                              </Button>
                            </Link>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                              onClick={() => handleDeleteGame(game.id, game.title)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}