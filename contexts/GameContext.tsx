"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface Game {
  id: number
  title: string
  image?: string
  screenshots?: string[]
  size: string
  genre: string
  releaseDate: string
  rating: string
  description: string
  developer?: string
  publisher?: string
  languages?: string[]
  customInstructions?: string
  systemRequirements?: {
    minimum: {
      os: string
      processor: string
      memory: string
      graphics: string
      storage: string
    }
    recommended: {
      os: string
      processor: string
      memory: string
      graphics: string
      storage: string
    }
  }
  downloadLinks?: Array<{
    name: string
    url: string
    size: string
  }>
  status?: string
  downloads?: number
}

interface GameContextType {
  games: Game[]
  addGame: (game: Omit<Game, "id">) => void
  updateGame: (id: number, game: Partial<Game>) => void
  deleteGame: (id: number) => void
  getGame: (id: number) => Game | undefined
}

const GameContext = createContext<GameContextType | undefined>(undefined)

const initialGames: Game[] = [
  {
    id: 1,
    title: "R.E.P.O",
    image: "https://imgur.com/a/OIk8CGK",
    screenshots: [
      "https://imgur.com/a/1I7pF1q",
      "https://imgur.com/a/0GlkLGs",
      "https://imgur.com/a/288MRI6",
      "https://imgur.com/a/cF6p4b9",
    ],
    description:
      "R.E.P.O. is an online co-op horror game featuring physics, proximity voice chat and scary monsters. You and up to 5 friends can venture into terrifying environments to extract valuable objects using your physics-based grabbing tool. Even the monsters are affected by Newton's law of gravity! Under the employ of a mysterious computer intelligence. It is your job to locate, transport and extract valuable items from the haunted remains of a long lost humanity. ...but know when to stay quiet. Transport anything from heavy pianos to fragile ceramics and use teamwork to make sure that the precious cargo will safely reach its destination. Robotic enhancements increase your chances! Use your hard earned cash [SURPLUS] to purchase upgrades and weapons from your heartless [GENEROUS] creator.",
    genre: "Horror",
    developer: "semiwork",
    publisher: "semiwork",
    releaseDate: "26 FEB 2025",
    size: "475 GB",
    rating: "T",
    languages: ["English", "Spanish"],
    systemRequirements: {
      minimum: {
        os: "Windows 10",
        processor: "Core i5 6600",
        memory: "8 GB de RAM",
        graphics: "GTX 970",
        storage: "1 GB de espacio disponible",
      },
      recommended: {
        os: "Windows 11",
        processor: "Intel Core i7 8700",
        memory: "8 GB de RAM",
        graphics: "GTX 1070",
        storage: "1 GB de espacio disponible",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "https://drive.google.com/file/d/1ocF6gs-s7Xak9DpJ6V5G71qzfsaR6ikl/view?usp=drive_link", size: "475 MB" },
      { name: "MediaFire", url: "https://www.mediafire.com/file/5er4lpq5cwi8njh/R.E.P.O.v0.1.2.32.zip/file", size: "475 MB" },
      { name: "MEGA", url: "https://mega.nz/file/mJFn2BiI#LSUzusjeprAVdWQBOnFMN3iAliDgxlpfoXsYuuC3Hbc", size: "475 MB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Block the game in your firewall\n5. Play the game!",
    status: "Active",
    downloads: 15420,
  },
  {
    id: 2,
    title: "Ghost of Tsushima Director's Cut",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "A storm is coming. Venture beyond what you thought possible as a samurai warrior to forge a new path and wage an unconventional war for the freedom of Tsushima. Challenge opponents with your katana, master the bow to eliminate distant threats, develop stealth tactics to ambush enemies in order to win over the mongols.",
    genre: "Action",
    developer: "Sucker Punch Productions",
    publisher: "PlayStation PC LLC",
    releaseDate: "May 16, 2024",
    size: "75 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-7700HQ / AMD Ryzen 5 1500X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 960 / AMD Radeon RX 5500 XT",
        storage: "75 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-8600 / AMD Ryzen 5 3600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5600 XT",
        storage: "75 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "75 GB" },
      { name: "MEGA", url: "#", size: "75 GB" },
      { name: "MediaFire", url: "#", size: "75 GB (Split)" },
      { name: "Torrent", url: "#", size: "75 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 22800,
  },
]

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [games, setGames] = useState<Game[]>([])

  // Load games from localStorage on mount
  useEffect(() => {
    const savedGames = localStorage.getItem("gameunlocked-games")
    if (savedGames) {
      try {
        setGames(JSON.parse(savedGames))
      } catch (error) {
        console.error("Error loading games from localStorage:", error)
        setGames(initialGames)
      }
    } else {
      setGames(initialGames)
    }
  }, [])

  // Save games to localStorage whenever games change
  useEffect(() => {
    if (games.length > 0) {
      localStorage.setItem("gameunlocked-games", JSON.stringify(games))
    }
  }, [games])

  const addGame = (gameData: Omit<Game, "id">) => {
    const newId = Math.max(...games.map((g) => g.id), 0) + 1
    const newGame: Game = {
      ...gameData,
      id: newId,
      status: "Active",
      downloads: 0,
      image: gameData.image || "/placeholder.svg?height=300&width=200",
      screenshots: gameData.screenshots || [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
      developer: gameData.developer || "Unknown Developer",
      publisher: gameData.publisher || "Unknown Publisher",
      languages: gameData.languages || ["English"],
      systemRequirements: gameData.systemRequirements || {
        minimum: {
          os: "Windows 10 64-bit",
          processor: "Intel Core i3 / AMD equivalent",
          memory: "4 GB RAM",
          graphics: "DirectX 11 compatible",
          storage: `${gameData.size} available space`,
        },
        recommended: {
          os: "Windows 10 64-bit",
          processor: "Intel Core i5 / AMD equivalent",
          memory: "8 GB RAM",
          graphics: "DirectX 11 compatible",
          storage: `${gameData.size} available space`,
        },
      },
      downloadLinks: gameData.downloadLinks || [
        { name: "Google Drive", url: "#", size: gameData.size },
        { name: "MEGA", url: "#", size: gameData.size },
        { name: "MediaFire", url: "#", size: gameData.size },
        { name: "Torrent", url: "#", size: gameData.size },
      ],
    }

    setGames((prevGames) => [...prevGames, newGame])
  }

  const updateGame = (id: number, gameData: Partial<Game>) => {
    setGames((prevGames) => prevGames.map((game) => (game.id === id ? { ...game, ...gameData } : game)))
  }

  const deleteGame = (id: number) => {
    setGames((prevGames) => prevGames.filter((game) => game.id !== id))
  }

  const getGame = (id: number) => {
    return games.find((game) => game.id === id)
  }

  return (
    <GameContext.Provider
      value={{
        games,
        addGame,
        updateGame,
        deleteGame,
        getGame,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export function useGames() {
  const context = useContext(GameContext)
  if (context === undefined) {
    throw new Error("useGames must be used within a GameProvider")
  }
  return context

}
