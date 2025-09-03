"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download, Calendar, HardDrive, Star, Users, Globe, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useGames } from "@/contexts/GameContext"

export default function GamePage({ params }: { params: { id: string } }) {
  const { getGame } = useGames()
  const [selectedScreenshot, setSelectedScreenshot] = useState(0)
  const gameId = Number.parseInt(params.id)
  const game = getGame(gameId)

  if (!game) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Game Not Found</h1>
          <p className="text-gray-400 mb-6">The game you're looking for doesn't exist or has been removed.</p>
          <Link href="/">
            <Button className="bg-red-600 hover:bg-red-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }

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
                Back to Games
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-4">{game.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-blue-600">{game.genre}</Badge>
                <Badge className="bg-green-600">{game.rating}</Badge>
                <Badge className="bg-purple-600">{game.size}</Badge>
              </div>
            </div>

            {/* Screenshots */}
            <div className="mb-8">
              <img
                src={game.screenshots?.[selectedScreenshot] || game.image || "/placeholder.svg"}
                alt={`${game.title} screenshot`}
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              {game.screenshots && game.screenshots.length > 0 && (
                <div className="flex gap-2 overflow-x-auto">
                  {game.screenshots.map((screenshot, index) => (
                    <img
                      key={index}
                      src={screenshot || "/placeholder.svg"}
                      alt={`Screenshot ${index + 1}`}
                      className={`w-20 h-12 object-cover rounded cursor-pointer border-2 ${
                        selectedScreenshot === index ? "border-red-500" : "border-gray-600"
                      }`}
                      onClick={() => setSelectedScreenshot(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-800">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="requirements">System Requirements</TabsTrigger>
                <TabsTrigger value="instructions">Instructions</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="mt-6">
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <p className="text-gray-300 leading-relaxed">{game.description}</p>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-red-500" />
                        <span className="text-sm">Developer: {game.developer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gamepad2 className="w-5 h-5 text-red-500" />
                        <span className="text-sm">Publisher: {game.publisher}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-red-500" />
                        <span className="text-sm">Release: {game.releaseDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-red-500" />
                        <span className="text-sm">Languages: {game.languages?.length || 0}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="requirements" className="mt-6">
                {game.systemRequirements ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-yellow-500">Minimum Requirements</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <strong>OS:</strong> {game.systemRequirements.minimum.os}
                          </div>
                          <div>
                            <strong>Processor:</strong> {game.systemRequirements.minimum.processor}
                          </div>
                          <div>
                            <strong>Memory:</strong> {game.systemRequirements.minimum.memory}
                          </div>
                          <div>
                            <strong>Graphics:</strong> {game.systemRequirements.minimum.graphics}
                          </div>
                          <div>
                            <strong>Storage:</strong> {game.systemRequirements.minimum.storage}
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-green-500">Recommended Requirements</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <strong>OS:</strong> {game.systemRequirements.recommended.os}
                          </div>
                          <div>
                            <strong>Processor:</strong> {game.systemRequirements.recommended.processor}
                          </div>
                          <div>
                            <strong>Memory:</strong> {game.systemRequirements.recommended.memory}
                          </div>
                          <div>
                            <strong>Graphics:</strong> {game.systemRequirements.recommended.graphics}
                          </div>
                          <div>
                            <strong>Storage:</strong> {game.systemRequirements.recommended.storage}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <p className="text-gray-400">System requirements not available for this game.</p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="instructions" className="mt-6">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-blue-500">Installation Instructions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {game.customInstructions ? (
                      <div className="whitespace-pre-line text-gray-300 leading-relaxed">{game.customInstructions}</div>
                    ) : (
                      <>
                        <ol className="list-decimal list-inside space-y-3 text-gray-300">
                          <li>Download the game files from one of the links provided</li>
                          <li>Extract the downloaded files using WinRAR or 7-Zip</li>
                          <li>Run the setup.exe file as administrator</li>
                          <li>Follow the installation wizard instructions</li>
                          <li>Copy the crack files from the CODEX folder to the game installation directory</li>
                          <li>Run the game as administrator</li>
                          <li>Enjoy the game!</li>
                        </ol>

                        <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-600 rounded-lg">
                          <h4 className="font-semibold text-yellow-500 mb-2">Important Notes:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                            <li>Disable your antivirus before installation</li>
                            <li>Make sure you have enough free space on your hard drive</li>
                            <li>Run the game as administrator if you encounter any issues</li>
                            <li>Update your graphics drivers for optimal performance</li>
                          </ul>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Download Section */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800 border-gray-700 sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5 text-red-500" />
                  Download Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {game.downloadLinks?.map((link, index) => (
                    <Button
                      key={index}
                      className="w-full justify-between bg-red-600 hover:bg-red-700"
                      onClick={() => window.open(link.url, "_blank")}
                    >
                      <span>{link.name}</span>
                      <span className="text-sm opacity-75">{link.size}</span>
                    </Button>
                  )) || <p className="text-gray-400 text-center">No download links available</p>}
                </div>

                <Separator className="my-6 bg-gray-600" />

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <HardDrive className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="font-semibold">File Size</div>
                      <div className="text-sm text-gray-400">{game.size}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <div>
                      <div className="font-semibold">Rating</div>
                      <div className="text-sm text-gray-400">
                        {game.rating} - {game.rating === "E" ? "Everyone" : game.rating === "M" ? "Mature" : "Teen"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-green-500" />
                    <div>
                      <div className="font-semibold">Languages</div>
                      <div className="text-sm text-gray-400">{game.languages?.join(", ") || "English"}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}