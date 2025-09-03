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
    title: "Elden Ring",
    image: "https://imgur.com/a/xCzrazf.png",
    screenshots: [
      "https://steamunlocked.net/wp-content/uploads/2025/06/Elden-Ring-Nightreign-Free-Download.png",
    ],
    description:
      "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between. A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected.",
    genre: "RPG",
    developer: "FromSoftware",
    publisher: "Bandai Namco",
    releaseDate: "February 25, 2022",
    size: "60 GB",
    rating: "M",
    languages: ["English", "Spanish", "French", "German", "Italian", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10",
        processor: "INTEL CORE I5-8400 or AMD RYZEN 3 3300X",
        memory: "12 GB RAM",
        graphics: "NVIDIA GEFORCE GTX 1060 3 GB or AMD RADEON RX 580 4 GB",
        storage: "60 GB available space",
      },
      recommended: {
        os: "Windows 10/11",
        processor: "INTEL CORE I7-8700K or AMD RYZEN 5 3600X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GEFORCE GTX 1070 8 GB or AMD RADEON RX VEGA 56 8 GB",
        storage: "60 GB available space",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "https://drive.marketcat.io/drive/s/NhrhrsZFHArDddMlm8zpKrOX0QDpJ7", size: "60 GB" },
      { name: "GoFile", url: "https://gofile.io/d/GKO1B8", size: "60 GB" },
      { name: "MediaFire", url: "http://www.mediafire.com/file/zsit5mjjkx90tl5", size: "60 GB (Split)" },
      { name: "Rapidshare", url: "https://rapidshare.co/d/qxaLA3FMOFPSfe", size: "60 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Block the game in your firewall\n5. Play the game!",
    status: "Active",
    downloads: 15420,
  },
  {
    id: 2,
    title: "Baldur's Gate 3",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power. Mysterious abilities are awakening inside you, drawn from a Mind Flayer parasite planted in your brain.",
    genre: "RPG",
    developer: "Larian Studios",
    publisher: "Larian Studios",
    releaseDate: "August 3, 2023",
    size: "122 GB",
    rating: "M",
    languages: ["English", "French", "German", "Spanish", "Polish", "Russian", "Chinese"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel i5-4690 / AMD FX 8350",
        memory: "8 GB RAM",
        graphics: "Nvidia GTX 970 / AMD RX 480 (4GB+ of VRAM)",
        storage: "150 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel i7-8700K / AMD r5 3600",
        memory: "16 GB RAM",
        graphics: "Nvidia 2060 Super / AMD RX 5700 XT (8GB+ of VRAM)",
        storage: "150 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "122 GB (Split)" },
      { name: "MEGA", url: "#", size: "122 GB (Split)" },
      { name: "MediaFire", url: "#", size: "122 GB (Split)" },
      { name: "Torrent", url: "#", size: "122 GB" },
    ],
    customInstructions:
      "1. Extract all parts using WinRAR or 7-Zip\n2. Run the installer\n3. Copy the crack files to the installed game directory\n4. Run the game as administrator\n5. Enjoy!",
    status: "Active",
    downloads: 18750,
  },
  {
    id: 3,
    title: "Cyberpunk 2077",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content.",
    genre: "Action",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    releaseDate: "December 10, 2020",
    size: "70 GB",
    rating: "M",
    languages: ["English", "Spanish", "French", "German", "Italian", "Polish", "Portuguese", "Russian", "Japanese"],
    systemRequirements: {
      minimum: {
        os: "Windows 10",
        processor: "Intel Core i5-3570K or AMD FX-8310",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 970 or AMD Radeon RX 470",
        storage: "70 GB available space (SSD recommended)",
      },
      recommended: {
        os: "Windows 10",
        processor: "Intel Core i7-4790 or AMD Ryzen 3 3200G",
        memory: "12 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 6GB / GTX 1660 Super or AMD Radeon RX 590",
        storage: "70 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "70 GB" },
      { name: "MEGA", url: "#", size: "70 GB" },
      { name: "MediaFire", url: "#", size: "70 GB (Split)" },
      { name: "Torrent", url: "#", size: "70 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 25680,
  },
  {
    id: 4,
    title: "Hogwarts Legacy",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. Embark on a journey through familiar and new locations as you explore and discover magical beasts, customize your character and craft potions.",
    genre: "RPG",
    developer: "Avalanche Software",
    publisher: "Warner Bros. Games",
    releaseDate: "February 10, 2023",
    size: "85 GB",
    rating: "T",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6600 (3.3 GHz) or AMD Ryzen 5 1400 (3.2 GHz)",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 960 4GB or AMD Radeon RX 470 4GB",
        storage: "85 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-8700 (3.2 GHz) or AMD Ryzen 5 3600 (3.6 GHz)",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1080 Ti or AMD Radeon RX 5700 XT",
        storage: "85 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "85 GB (Split)" },
      { name: "MEGA", url: "#", size: "85 GB (Split)" },
      { name: "MediaFire", url: "#", size: "85 GB (Split)" },
      { name: "Torrent", url: "#", size: "85 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the EMPRESS folder to the installed game directory\n4. Block the game in your firewall\n5. Play the game!",
    status: "Active",
    downloads: 19870,
  },
  {
    id: 5,
    title: "Starfield",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Starfield is the first new universe in 25 years from Bethesda Game Studios. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey.",
    genre: "RPG",
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    releaseDate: "September 6, 2023",
    size: "125 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Polish", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 version 21H1 (10.0.19043.0)",
        processor: "AMD Ryzen 5 2600X, Intel Core i7-6800K",
        memory: "16 GB RAM",
        graphics: "AMD Radeon RX 5700, NVIDIA GeForce 1070 Ti",
        storage: "125 GB available space SSD required",
      },
      recommended: {
        os: "Windows 10/11 with updates",
        processor: "AMD Ryzen 5 3600X, Intel i5-10600K",
        memory: "16 GB RAM",
        graphics: "AMD Radeon RX 6800 XT, NVIDIA GeForce RTX 2080",
        storage: "125 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "125 GB (Split)" },
      { name: "MEGA", url: "#", size: "125 GB (Split)" },
      { name: "MediaFire", url: "#", size: "125 GB (Split)" },
      { name: "Torrent", url: "#", size: "125 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 22340,
  },
  {
    id: 6,
    title: "Red Dead Redemption 2",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "America, 1899. The end of the wild west era has begun. After a robbery goes badly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee. With federal agents and bounty hunters massing on their heels, the gang must rob, steal and fight their way across America.",
    genre: "Action",
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    releaseDate: "December 5, 2019",
    size: "150 GB",
    rating: "M",
    languages: [
      "English",
      "French",
      "Italian",
      "German",
      "Spanish",
      "Japanese",
      "Korean",
      "Polish",
      "Portuguese",
      "Russian",
    ],
    systemRequirements: {
      minimum: {
        os: "Windows 10 (April 2018 Update)",
        processor: "Intel Core i5-2500K / AMD FX-6300",
        memory: "8 GB RAM",
        graphics: "Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB",
        storage: "150 GB available space",
      },
      recommended: {
        os: "Windows 10 (April 2018 Update)",
        processor: "Intel Core i7-4770K / AMD Ryzen 5 1500X",
        memory: "12 GB RAM",
        graphics: "Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
        storage: "150 GB available space",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "150 GB (Split)" },
      { name: "MEGA", url: "#", size: "150 GB (Split)" },
      { name: "MediaFire", url: "#", size: "150 GB (Split)" },
      { name: "Torrent", url: "#", size: "150 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the EMPRESS folder to the installed game directory\n4. Block the game in your firewall\n5. Play the game!",
    status: "Active",
    downloads: 28950,
  },
  {
    id: 7,
    title: "God of War",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
    genre: "Action",
    developer: "Santa Monica Studio",
    publisher: "PlayStation PC LLC",
    releaseDate: "January 14, 2022",
    size: "70 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel i5-2500k (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 960 (4 GB) or AMD R9 290X (4 GB)",
        storage: "70 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel i5-6600k (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)",
        storage: "70 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "70 GB" },
      { name: "MEGA", url: "#", size: "70 GB" },
      { name: "MediaFire", url: "#", size: "70 GB (Split)" },
      { name: "Torrent", url: "#", size: "70 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the FLT folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 21560,
  },
  {
    id: 8,
    title: "Resident Evil 4 Remake",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Agent Leon S. Kennedy has been sent to rescue the president's kidnapped daughter in a secluded European village.",
    genre: "Horror",
    developer: "CAPCOM Co., Ltd.",
    publisher: "CAPCOM Co., Ltd.",
    releaseDate: "March 24, 2023",
    size: "60 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 (64 bit)",
        processor: "AMD Ryzen 3 1200 / Intel Core i5-7500",
        memory: "8 GB RAM",
        graphics: "AMD Radeon RX 560 with 4GB VRAM / NVIDIA GeForce GTX 1050 Ti with 4GB VRAM",
        storage: "60 GB available space",
      },
      recommended: {
        os: "Windows 10 (64 bit)/Windows 11 (64 bit)",
        processor: "AMD Ryzen 5 3600 / Intel Core i7 8700",
        memory: "16 GB RAM",
        graphics: "AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070",
        storage: "60 GB available space",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "60 GB" },
      { name: "MEGA", url: "#", size: "60 GB" },
      { name: "MediaFire", url: "#", size: "60 GB (Split)" },
      { name: "Torrent", url: "#", size: "60 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the EMPRESS folder to the installed game directory\n4. Block the game in your firewall\n5. Play the game!",
    status: "Active",
    downloads: 18790,
  },
  {
    id: 9,
    title: "Assassin's Creed Valhalla",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Become Eivor, a legendary Viking raider on a quest for glory. Explore England's Dark Ages as you raid your enemies, grow your settlement, and build your political power.",
    genre: "Action",
    developer: "Ubisoft Montreal",
    publisher: "Ubisoft",
    releaseDate: "November 10, 2020",
    size: "80 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 (64-bit only)",
        processor: "AMD Ryzen 3 1200 3.1 GHz / Intel Core i5-4460 3.2 GHz",
        memory: "8 GB RAM",
        graphics: "AMD R9 380 / NVIDIA GeForce GTX 960 (4 GB VRAM)",
        storage: "80 GB available space",
      },
      recommended: {
        os: "Windows 10 (64-bit only)",
        processor: "AMD Ryzen 5 1600 3.2 GHz / Intel Core i7-4790 3.6 GHz",
        memory: "8 GB RAM",
        graphics: "AMD RX 570 / NVIDIA GeForce GTX 1060 (6 GB VRAM)",
        storage: "80 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "80 GB (Split)" },
      { name: "MEGA", url: "#", size: "80 GB (Split)" },
      { name: "MediaFire", url: "#", size: "80 GB (Split)" },
      { name: "Torrent", url: "#", size: "80 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the EMPRESS folder to the installed game directory\n4. Block the game in your firewall\n5. Play the game!",
    status: "Active",
    downloads: 24680,
  },
  {
    id: 10,
    title: "The Last of Us Part I",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Experience the emotional storytelling and unforgettable characters in The Last of Us. In a ravaged civilization, Joel, a weary protagonist, is hired to smuggle 14-year-old Ellie out of a military quarantine zone.",
    genre: "Action",
    developer: "Naughty Dog",
    publisher: "PlayStation PC LLC",
    releaseDate: "March 28, 2023",
    size: "75 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 (Version 1909 or newer)",
        processor: "AMD Ryzen 5 1500X, Intel Core i7-4770K",
        memory: "16 GB RAM",
        graphics: "AMD Radeon RX 470 (4 GB), NVIDIA GeForce GTX 970 (4 GB)",
        storage: "100 GB SSD",
      },
      recommended: {
        os: "Windows 10 (Version 1909 or newer)",
        processor: "AMD Ryzen 5 3600X, Intel Core i7-8700",
        memory: "16 GB RAM",
        graphics: "AMD Radeon RX 5700 XT (8 GB), NVIDIA GeForce RTX 2070 SUPER (8 GB)",
        storage: "100 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "75 GB (Split)" },
      { name: "MEGA", url: "#", size: "75 GB (Split)" },
      { name: "MediaFire", url: "#", size: "75 GB (Split)" },
      { name: "Torrent", url: "#", size: "75 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 19870,
  },
  {
    id: 11,
    title: "Marvel's Spider-Man Remastered",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "In Marvel's Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story. Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel's New York.",
    genre: "Action",
    developer: "Insomniac Games",
    publisher: "PlayStation PC LLC",
    releaseDate: "August 12, 2022",
    size: "65 GB",
    rating: "T",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-4160, 3.6 GHz or AMD equivalent",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 950 or AMD Radeon RX 470",
        storage: "75 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-4670, 3.4 Ghz or AMD Ryzen5 1600, 3.2 Ghz",
        memory: "16 GB RAM",
        graphics: "NVIDIA GTX 1060 6GB or AMD Radeon RX 580 8GB",
        storage: "75 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "65 GB" },
      { name: "MEGA", url: "#", size: "65 GB" },
      { name: "MediaFire", url: "#", size: "65 GB (Split)" },
      { name: "Torrent", url: "#", size: "65 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 22450,
  },
  {
    id: 12,
    title: "Dying Light 2 Stay Human",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Over twenty years ago in Harran, we fought the virus—and lost. Now, we're losing again. The City, one of the last large human settlements, is torn by conflict. You are a wanderer with the power to change the fate of The City.",
    genre: "Action",
    developer: "Techland",
    publisher: "Techland",
    releaseDate: "February 4, 2022",
    size: "60 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Polish", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 7",
        processor: "Intel Core i3-9100 / AMD Ryzen 3 2300X",
        memory: "8 GB RAM",
        graphics: "NVIDIA® GeForce® GTX 1050 Ti / AMD Radeon™ RX 560 (4GB VRAM)",
        storage: "60 GB available space",
      },
      recommended: {
        os: "Windows 10",
        processor: "AMD / Intel CPU running at 3.6 GHz or higher: AMD Ryzen 5 3600X or Intel i5-8600K or newer",
        memory: "16 GB RAM",
        graphics: "NVIDIA® GeForce RTX™ 2060 6GB or AMD RX Vega 56 8GB or newer",
        storage: "60 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "60 GB" },
      { name: "MEGA", url: "#", size: "60 GB" },
      { name: "MediaFire", url: "#", size: "60 GB (Split)" },
      { name: "Torrent", url: "#", size: "60 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the EMPRESS folder to the installed game directory\n4. Block the game in your firewall\n5. Play the game!",
    status: "Active",
    downloads: 17890,
  },
  {
    id: 13,
    title: "Forza Horizon 5",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Your Ultimate Horizon Adventure awaits! Explore the vibrant and ever-evolving open world landscapes of Mexico with limitless, fun driving action in hundreds of the world's greatest cars.",
    genre: "Racing",
    developer: "Playground Games",
    publisher: "Xbox Game Studios",
    releaseDate: "November 9, 2021",
    size: "110 GB",
    rating: "E",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 version 15063.0 or higher",
        processor: "Intel i5-4460 or AMD Ryzen 3 1200",
        memory: "8 GB RAM",
        graphics: "NVidia GTX 970 OR AMD RX 470",
        storage: "110 GB available space",
      },
      recommended: {
        os: "Windows 10 version 15063.0 or higher",
        processor: "Intel i5-8400 or AMD Ryzen 5 1500X",
        memory: "16 GB RAM",
        graphics: "NVidia GTX 1070 OR AMD RX 590",
        storage: "110 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "110 GB (Split)" },
      { name: "MEGA", url: "#", size: "110 GB (Split)" },
      { name: "MediaFire", url: "#", size: "110 GB (Split)" },
      { name: "Torrent", url: "#", size: "110 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the EMPRESS folder to the installed game directory\n4. Block the game in your firewall\n5. Play the game!",
    status: "Active",
    downloads: 26780,
  },
  {
    id: 14,
    title: "Sekiro: Shadows Die Twice",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Game of the Year - The Game Awards 2019. Carve your own clever path to vengeance in an all-new adventure from developer FromSoftware. In Sekiro: Shadows Die Twice you are the 'one-armed wolf', a disgraced and disfigured warrior.",
    genre: "Action",
    developer: "FromSoftware",
    publisher: "Activision",
    releaseDate: "March 22, 2019",
    size: "25 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 7 64-bit | Windows 8 64-bit | Windows 10 64-bit",
        processor: "Intel Core i3-2100 | AMD FX-6300",
        memory: "4 GB RAM",
        graphics: "NVIDIA GeForce GTX 760 | AMD Radeon HD 7950",
        storage: "25 GB available space",
      },
      recommended: {
        os: "Windows 7 64-bit | Windows 8 64-bit | Windows 10 64-bit",
        processor: "Intel Core i5-2500K | AMD Ryzen 5 1400",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 970 | AMD Radeon RX 570",
        storage: "25 GB available space",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "25 GB" },
      { name: "MEGA", url: "#", size: "25 GB" },
      { name: "MediaFire", url: "#", size: "25 GB" },
      { name: "Torrent", url: "#", size: "25 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 19870,
  },
  {
    id: 15,
    title: "Horizon Zero Dawn Complete Edition",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Experience Aloy's legendary quest to unravel the mysteries of a future Earth ruled by Machines. Use devastating tactical attacks against your prey and explore a majestic open world in this award-winning action RPG!",
    genre: "Action",
    developer: "Guerrilla",
    publisher: "PlayStation PC LLC",
    releaseDate: "August 7, 2020",
    size: "70 GB",
    rating: "T",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bits",
        processor: "Intel Core i5-2500K@3.3GHz or AMD FX 6300@3.5GHz",
        memory: "8 GB RAM",
        graphics: "Nvidia GeForce GTX 780 (3 GB) or AMD Radeon R9 290 (4GB)",
        storage: "100 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bits",
        processor: "Intel Core i7-4770K@3.5GHz or Ryzen 5 1500X@3.5GHz",
        memory: "16 GB RAM",
        graphics: "Nvidia GeForce GTX 1060 (6 GB) or AMD Radeon RX 580 (8GB)",
        storage: "100 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "70 GB" },
      { name: "MEGA", url: "#", size: "70 GB" },
      { name: "MediaFire", url: "#", size: "70 GB (Split)" },
      { name: "Torrent", url: "#", size: "70 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 21340,
  },
  // Adding 35 more games to reach 50 total
  {
    id: 16,
    title: "Grand Theft Auto V",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, they must pull off a series of dangerous heists to survive.",
    genre: "Action",
    developer: "Rockstar North",
    publisher: "Rockstar Games",
    releaseDate: "April 14, 2015",
    size: "95 GB",
    rating: "M",
    languages: ["English", "Spanish", "French", "Italian", "German"],
    systemRequirements: {
      minimum: {
        os: "Windows 8.1 64-bit",
        processor: "Intel Core 2 Quad CPU Q6600 @ 2.40GHz / AMD Phenom 9850 Quad-Core Processor",
        memory: "4 GB RAM",
        graphics: "NVIDIA 9800 GT 1GB / AMD HD 4870 1GB",
        storage: "95 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5 3470 @ 3.2GHz / AMD X8 FX-8350 @ 4GHz",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 660 2GB / AMD HD 7870 2GB",
        storage: "95 GB available space",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "95 GB" },
      { name: "MEGA", url: "#", size: "95 GB" },
      { name: "MediaFire", url: "#", size: "95 GB (Split)" },
      { name: "Torrent", url: "#", size: "95 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the RELOADED folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 35000,
  },
  {
    id: 17,
    title: "The Witcher 3: Wild Hunt",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "A story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences. In The Witcher you play as the professional monster hunter, Geralt of Rivia.",
    genre: "RPG",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    releaseDate: "May 19, 2015",
    size: "35 GB",
    rating: "M",
    languages: ["English", "Spanish", "French", "German", "Polish"],
    systemRequirements: {
      minimum: {
        os: "Windows 7 64-bit",
        processor: "Intel CPU Core i5-2500K 3.3GHz / AMD CPU Phenom II X4 940",
        memory: "6 GB RAM",
        graphics: "Nvidia GPU GeForce GTX 660 / AMD GPU Radeon HD 7870",
        storage: "35 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel CPU Core i7 3770 3.4 GHz / AMD CPU AMD FX-8350 4 GHz",
        memory: "8 GB RAM",
        graphics: "Nvidia GPU GeForce GTX 770 / AMD GPU Radeon R9 290",
        storage: "35 GB available space",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "35 GB" },
      { name: "MEGA", url: "#", size: "35 GB" },
      { name: "MediaFire", url: "#", size: "35 GB (Split)" },
      { name: "Torrent", url: "#", size: "35 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the NOSTEAM folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 31200,
  },
  {
    id: 18,
    title: "Call of Duty: Modern Warfare II",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Call of Duty: Modern Warfare II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.",
    genre: "FPS",
    developer: "Infinity Ward",
    publisher: "Activision",
    releaseDate: "October 28, 2022",
    size: "125 GB",
    rating: "M",
    languages: ["English", "Spanish", "French", "German", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-6100 / AMD Ryzen 3 1200",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 960 / AMD Radeon RX 470",
        storage: "125 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6600K / AMD Ryzen 5 1400",
        memory: "12 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
        storage: "125 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "125 GB (Split)" },
      { name: "MEGA", url: "#", size: "125 GB (Split)" },
      { name: "MediaFire", url: "#", size: "125 GB (Split)" },
      { name: "Torrent", url: "#", size: "125 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the EMPRESS folder to the installed game directory\n4. Block the game in your firewall\n5. Play the game!",
    status: "Active",
    downloads: 28900,
  },
  {
    id: 19,
    title: "Minecraft",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Minecraft is a game about placing blocks and going on adventures. Explore randomly generated worlds and build amazing things from the simplest of homes to the grandest of castles.",
    genre: "Sandbox",
    developer: "Mojang Studios",
    publisher: "Microsoft Studios",
    releaseDate: "November 18, 2011",
    size: "1 GB",
    rating: "E",
    languages: ["English", "Spanish", "French", "German", "Portuguese"],
    systemRequirements: {
      minimum: {
        os: "Windows 7",
        processor: "Intel Core i3-3210 3.2 GHz / AMD A8-7600 APU 3.1 GHz",
        memory: "4 GB RAM",
        graphics: "Intel HD Graphics 4000 / AMD Radeon R5 series",
        storage: "4 GB available space",
      },
      recommended: {
        os: "Windows 10",
        processor: "Intel Core i5-4690 3.5GHz / AMD A10-7800 APU 3.5 GHz",
        memory: "8 GB RAM",
        graphics: "GeForce 700 Series / AMD Radeon Rx 200 Series",
        storage: "4 GB available space",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "1 GB" },
      { name: "MEGA", url: "#", size: "1 GB" },
      { name: "MediaFire", url: "#", size: "1 GB" },
      { name: "Torrent", url: "#", size: "1 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run the launcher\n3. Create an offline account\n4. Play the game!",
    status: "Active",
    downloads: 50000,
  },
  {
    id: 20,
    title: "FIFA 24",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "EA SPORTS FC 24 welcomes you to The World's Game: the most true-to-football experience ever with HyperMotionV, PlayStyles optimised by Opta, and an enhanced Frostbite Engine.",
    genre: "Sports",
    developer: "EA Sports",
    publisher: "Electronic Arts",
    releaseDate: "September 29, 2023",
    size: "50 GB",
    rating: "E",
    languages: ["English", "Spanish", "French", "German", "Italian", "Portuguese"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5 6600k or AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 570",
        storage: "100 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7 9700K or AMD Ryzen 7 2700X",
        memory: "12 GB RAM",
        graphics: "NVIDIA GeForce RTX 3060 or AMD Radeon RX 6600 XT",
        storage: "100 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "50 GB" },
      { name: "MEGA", url: "#", size: "50 GB" },
      { name: "MediaFire", url: "#", size: "50 GB (Split)" },
      { name: "Torrent", url: "#", size: "50 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the STEAMPUNKS folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 24500,
  },
  // Continue adding more games...
  {
    id: 21,
    title: "Doom Eternal",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Hell's armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity.",
    genre: "FPS",
    developer: "id Software",
    publisher: "Bethesda Softworks",
    releaseDate: "March 20, 2020",
    size: "80 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 7 64-bit / Windows 10 64-bit",
        processor: "Intel Core i5 @ 3.3 GHz or better, or AMD Ryzen 3 @ 3.1 GHz or better",
        memory: "8 GB RAM",
        graphics:
          "NVIDIA GeForce GTX 1050Ti (4GB), GTX 1060 (3GB), GTX 1650 (4GB) or AMD Radeon R9 280(3GB), AMD Radeon R9 290 (4GB), RX 470 (4GB)",
        storage: "80 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-6700K or better, or AMD Ryzen 7 1800X or better",
        memory: "8 GB RAM",
        graphics:
          "NVIDIA GeForce GTX 1060 (6GB), NVIDIA GeForce GTX 1070, NVIDIA GeForce GTX 1080, NVIDIA GeForce RTX 2060, NVIDIA GeForce RTX 3060 or AMD RX 480 (8GB), AMD RX 570 (4GB), AMD RX 580 (8GB), AMD RX Vega 56 (8GB), AMD RX 6600 XT (8GB)",
        storage: "80 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "80 GB" },
      { name: "MEGA", url: "#", size: "80 GB" },
      { name: "MediaFire", url: "#", size: "80 GB (Split)" },
      { name: "Torrent", url: "#", size: "80 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 19500,
  },
  {
    id: 22,
    title: "Battlefield 2042",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Battlefield 2042 is a first-person shooter that marks the return to the iconic all-out warfare of the franchise. In a near-future world transformed by disorder, adapt and overcome dynamically-changing battlegrounds with the help of your squad and a cutting-edge arsenal.",
    genre: "FPS",
    developer: "DICE",
    publisher: "Electronic Arts",
    releaseDate: "November 19, 2021",
    size: "100 GB",
    rating: "T",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "AMD Ryzen 5 3600 / Intel Core i5 6600K",
        memory: "8 GB RAM",
        graphics: "AMD Radeon RX 560 / NVIDIA GeForce GTX 1050 Ti",
        storage: "100 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "AMD Ryzen 7 2700X / Intel Core i7 4790",
        memory: "16 GB RAM",
        graphics: "AMD Radeon RX 6600 XT / NVIDIA GeForce RTX 3060",
        storage: "100 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "100 GB (Split)" },
      { name: "MEGA", url: "#", size: "100 GB (Split)" },
      { name: "MediaFire", url: "#", size: "100 GB (Split)" },
      { name: "Torrent", url: "#", size: "100 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the EMPRESS folder to the installed game directory\n4. Block the game in your firewall\n5. Play the game!",
    status: "Active",
    downloads: 16800,
  },
  {
    id: 23,
    title: "Mortal Kombat 1",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Discover a reborn Mortal Kombat Universe created by the Fire God Liu Kang. Mortal Kombat 1 ushers in a new era of the iconic franchise with a new fighting system, game modes, and Fatalities!",
    genre: "Fighting",
    developer: "NetherRealm Studios",
    publisher: "Warner Bros. Games",
    releaseDate: "September 19, 2023",
    size: "100 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6600 / AMD Ryzen 3 1300X",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 980 / AMD Radeon RX 470",
        storage: "100 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 1080 Ti / AMD Radeon RX 5700 XT",
        storage: "100 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "100 GB (Split)" },
      { name: "MEGA", url: "#", size: "100 GB (Split)" },
      { name: "MediaFire", url: "#", size: "100 GB (Split)" },
      { name: "Torrent", url: "#", size: "100 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the EMPRESS folder to the installed game directory\n4. Block the game in your firewall\n5. Play the game!",
    status: "Active",
    downloads: 14200,
  },
  {
    id: 24,
    title: "Diablo IV",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Join the fight for Sanctuary in Diablo IV, the ultimate action RPG adventure. Experience the critically acclaimed campaign and new seasonal content.",
    genre: "RPG",
    developer: "Blizzard Entertainment",
    publisher: "Blizzard Entertainment",
    releaseDate: "June 6, 2023",
    size: "90 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 version 1909 or newer",
        processor: "Intel Core i5-2500K or AMD FX-8350",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 660 or AMD Radeon R9 280",
        storage: "90 GB SSD",
      },
      recommended: {
        os: "Windows 10 version 1909 or newer",
        processor: "Intel Core i5-4670K or AMD Ryzen 1300X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 970 or AMD Radeon RX 470",
        storage: "90 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "90 GB (Split)" },
      { name: "MEGA", url: "#", size: "90 GB (Split)" },
      { name: "MediaFire", url: "#", size: "90 GB (Split)" },
      { name: "Torrent", url: "#", size: "90 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the EMPRESS folder to the installed game directory\n4. Block the game in your firewall\n5. Play the game!",
    status: "Active",
    downloads: 21300,
  },
  {
    id: 25,
    title: "Street Fighter 6",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Powered by RE ENGINE, Street Fighter 6 spans three distinct game modes, including World Tour, Fighting Ground and Battle Hub. Here, fighters from across the globe gather to leave their mark and determine who's truly the strongest.",
    genre: "Fighting",
    developer: "Capcom",
    publisher: "Capcom",
    releaseDate: "June 2, 2023",
    size: "60 GB",
    rating: "T",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 (64 bit)",
        processor: "Intel Core i5-7500 / AMD Ryzen 3 1200",
        memory: "8 GB RAM",
        graphics: "GTX 1060 (VRAM 6GB) / Radeon RX 580 (VRAM 8GB)",
        storage: "60 GB available space",
      },
      recommended: {
        os: "Windows 10 (64 bit) / Windows 11 (64 bit)",
        processor: "Intel Core i7-8700 / AMD Ryzen 5 3600",
        memory: "16 GB RAM",
        graphics: "RTX 2070 / Radeon RX 6700 XT",
        storage: "60 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "60 GB" },
      { name: "MEGA", url: "#", size: "60 GB" },
      { name: "MediaFire", url: "#", size: "60 GB (Split)" },
      { name: "Torrent", url: "#", size: "60 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the EMPRESS folder to the installed game directory\n4. Block the game in your firewall\n5. Play the game!",
    status: "Active",
    downloads: 18700,
  },
  {
    id: 26,
    title: "Alan Wake 2",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Alan Wake 2 is a survival horror game with an intense atmosphere and a twisted, layered, psychological horror story. Featuring two playable protagonists, the game brings together the supernatural horror and mystery of Alan Wake with the investigative thriller elements of Control.",
    genre: "Horror",
    developer: "Remedy Entertainment",
    publisher: "Epic Games Publishing",
    releaseDate: "October 27, 2023",
    size: "90 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i5-7600K / AMD Ryzen 5 2600",
        memory: "16 GB RAM",
        graphics: "GeForce GTX 1070 / Radeon RX 5600 XT",
        storage: "90 GB available space",
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-8700K / AMD Ryzen 7 3700X",
        memory: "32 GB RAM",
        graphics: "GeForce RTX 3070 / Radeon RX 6800 XT",
        storage: "90 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "90 GB (Split)" },
      { name: "MEGA", url: "#", size: "90 GB (Split)" },
      { name: "MediaFire", url: "#", size: "90 GB (Split)" },
      { name: "Torrent", url: "#", size: "90 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 15600,
  },
  {
    id: 27,
    title: "Spider-Man: Miles Morales",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "In the latest adventure in the Marvel's Spider-Man universe, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man.",
    genre: "Action",
    developer: "Insomniac Games",
    publisher: "PlayStation PC LLC",
    releaseDate: "November 18, 2022",
    size: "52 GB",
    rating: "T",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-4160, 3.6 GHz or AMD equivalent",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 950 or AMD Radeon RX 470",
        storage: "75 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-4670, 3.4 Ghz or AMD Ryzen5 1600, 3.2 Ghz",
        memory: "16 GB RAM",
        graphics: "NVIDIA GTX 1060 6GB or AMD Radeon RX 580 8GB",
        storage: "75 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "52 GB" },
      { name: "MEGA", url: "#", size: "52 GB" },
      { name: "MediaFire", url: "#", size: "52 GB (Split)" },
      { name: "Torrent", url: "#", size: "52 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 19200,
  },
  {
    id: 28,
    title: "Lies of P",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Lies of P is a thrilling soulslike that takes the story of Pinocchio, turns it on its head, and sets it against the darkly elegant backdrop of the Belle Epoque era.",
    genre: "Action",
    developer: "Neowiz",
    publisher: "Neowiz",
    releaseDate: "September 19, 2023",
    size: "50 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64bit",
        processor: "AMD Ryzen 3 1200 / Intel Core i3-6300",
        memory: "8 GB RAM",
        graphics: "AMD Radeon RX 560 4GB / NVIDIA GeForce GTX 960 4GB",
        storage: "50 GB available space",
      },
      recommended: {
        os: "Windows 10 64bit",
        processor: "AMD Ryzen 5 1400 / Intel Core i5-6500",
        memory: "16 GB RAM",
        graphics: "AMD Radeon RX 6500 XT 4GB / NVIDIA GeForce GTX 1060 6GB",
        storage: "50 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "50 GB" },
      { name: "MEGA", url: "#", size: "50 GB" },
      { name: "MediaFire", url: "#", size: "50 GB (Split)" },
      { name: "Torrent", url: "#", size: "50 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 12800,
  },
  {
    id: 29,
    title: "Armored Core VI: Fires of Rubicon",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "A mysterious new substance called Coral was discovered on the remote planet Rubicon 3. As an independent mercenary, you are tasked with infiltrating Rubicon and stealing the Coral, battling against the planet's PCA and RLF factions.",
    genre: "Action",
    developer: "FromSoftware",
    publisher: "Bandai Namco",
    releaseDate: "August 25, 2023",
    size: "60 GB",
    rating: "T",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10",
        processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
        memory: "12 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 590",
        storage: "60 GB available space",
      },
      recommended: {
        os: "Windows 10/11",
        processor: "Intel Core i7-8700K / AMD Ryzen 5 3600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 6600",
        storage: "60 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "60 GB" },
      { name: "MEGA", url: "#", size: "60 GB" },
      { name: "MediaFire", url: "#", size: "60 GB (Split)" },
      { name: "Torrent", url: "#", size: "60 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 14500,
  },
  {
    id: 30,
    title: "Remnant 2",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Remnant 2 is the sequel to the best-selling game Remnant: From the Ashes that pits survivors of humanity against new deadly creatures and god-like bosses across terrifying worlds.",
    genre: "Action",
    developer: "Gunfire Games",
    publisher: "Gearbox Publishing",
    releaseDate: "July 25, 2023",
    size: "80 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Win 10",
        processor: "Intel Core i5-7600 / AMD Ryzen 5 2600",
        memory: "16 GB RAM",
        graphics: "GeForce GTX 1650 / AMD Radeon RX 5500 XT",
        storage: "80 GB available space",
      },
      recommended: {
        os: "Win 10",
        processor: "Intel Core i5-10400 / AMD Ryzen 5 3600",
        memory: "16 GB RAM",
        graphics: "GeForce RTX 2060 / AMD Radeon RX 6600",
        storage: "80 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "80 GB" },
      { name: "MEGA", url: "#", size: "80 GB" },
      { name: "MediaFire", url: "#", size: "80 GB (Split)" },
      { name: "Torrent", url: "#", size: "80 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 11900,
  },
  {
    id: 31,
    title: "Dead Space Remake",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "The sci-fi survival horror classic Dead Space returns, completely rebuilt from the ground up by Motive Studios to offer a deeper and more immersive experience.",
    genre: "Horror",
    developer: "Motive Studio",
    publisher: "Electronic Arts",
    releaseDate: "January 27, 2023",
    size: "50 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Ryzen 5 2600x, Core i5 8600",
        memory: "16 GB RAM",
        graphics: "AMD RX 5700, GTX 1070",
        storage: "50 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Ryzen 5 5600X, Core i5 11600K",
        memory: "16 GB RAM",
        graphics: "RX 6700 XT, RTX 2070",
        storage: "50 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "50 GB" },
      { name: "MEGA", url: "#", size: "50 GB" },
      { name: "MediaFire", url: "#", size: "50 GB (Split)" },
      { name: "Torrent", url: "#", size: "50 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 17300,
  },
  {
    id: 32,
    title: "Atomic Heart",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Atomic Heart is an adventure first-person shooter, events of which unfolds in an alternative universe during the high noon of the Soviet Union.",
    genre: "FPS",
    developer: "Mundfish",
    publisher: "Focus Entertainment",
    releaseDate: "February 21, 2023",
    size: "90 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 (20H1 version or newer, 64-bit)",
        processor: "AMD Ryzen 3 1200 or Intel Core i5-2500",
        memory: "8 GB RAM",
        graphics: "4 GB VRAM, AMD Radeon R9 380 or NVIDIA GeForce GTX 960",
        storage: "90 GB available space",
      },
      recommended: {
        os: "Windows 10 (20H1 version or newer, 64-bit)",
        processor: "AMD Ryzen 5 2600X or Intel Core i7-7700HQ",
        memory: "16 GB RAM",
        graphics: "8 GB VRAM, AMD RX 6700 XT or NVIDIA GeForce RTX 2070",
        storage: "90 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "90 GB (Split)" },
      { name: "MEGA", url: "#", size: "90 GB (Split)" },
      { name: "MediaFire", url: "#", size: "90 GB (Split)" },
      { name: "Torrent", url: "#", size: "90 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 13700,
  },
  {
    id: 33,
    title: "Tekken 8",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Get ready for the next chapter in the legendary fighting game franchise, Tekken 8. Powered by Unreal Engine 5 and exclusively available on PlayStation 5, Xbox Series X|S, and PC Digital.",
    genre: "Fighting",
    developer: "Bandai Namco Studios",
    publisher: "Bandai Namco",
    releaseDate: "January 26, 2024",
    size: "100 GB",
    rating: "T",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6600K / AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 1050Ti / AMD Radeon R9 380X",
        storage: "100 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-7700K / AMD Ryzen 5 2600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce RTX 2070 / AMD Radeon RX 5700 XT",
        storage: "100 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "100 GB (Split)" },
      { name: "MEGA", url: "#", size: "100 GB (Split)" },
      { name: "MediaFire", url: "#", size: "100 GB (Split)" },
      { name: "Torrent", url: "#", size: "100 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the EMPRESS folder to the installed game directory\n4. Block the game in your firewall\n5. Play the game!",
    status: "Active",
    downloads: 16200,
  },
  {
    id: 34,
    title: "Palworld",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Fight, farm, build and work alongside mysterious creatures called 'Pals' in this completely new multiplayer, open world survival and crafting game!",
    genre: "Survival",
    developer: "Pocket Pair",
    publisher: "Pocket Pair",
    releaseDate: "January 19, 2024",
    size: "40 GB",
    rating: "T",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 or later (64-Bit)",
        processor: "i5-3570K 3.4 GHz 4 Core",
        memory: "16 GB RAM",
        graphics: "GeForce GTX 1050 (2GB)",
        storage: "40 GB available space",
      },
      recommended: {
        os: "Windows 10 or later (64-Bit)",
        processor: "i9-9900K 3.6 GHz 8 Core",
        memory: "32 GB RAM",
        graphics: "GeForce RTX 2070",
        storage: "40 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "40 GB" },
      { name: "MEGA", url: "#", size: "40 GB" },
      { name: "MediaFire", url: "#", size: "40 GB (Split)" },
      { name: "Torrent", url: "#", size: "40 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 32100,
  },
  {
    id: 35,
    title: "Granblue Fantasy Relink",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "A grand adventure in the skies awaits! Form a crew with friends or venture forth as a solo player. With a vast world to explore and a myriad of islands floating in the great blue sky, an adventure calls!",
    genre: "RPG",
    developer: "Cygames",
    publisher: "Cygames",
    releaseDate: "February 1, 2024",
    size: "90 GB",
    rating: "T",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit / Windows 11 64-bit",
        processor: "Intel Core i3-9100 / AMD Ryzen 3 3200G",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB",
        storage: "90 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit / Windows 11 64-bit",
        processor: "Intel Core i7-8700 / AMD Ryzen 5 3600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce RTX 3070 / AMD Radeon RX 6700 XT",
        storage: "90 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "90 GB (Split)" },
      { name: "MEGA", url: "#", size: "90 GB (Split)" },
      { name: "MediaFire", url: "#", size: "90 GB (Split)" },
      { name: "Torrent", url: "#", size: "90 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 9800,
  },
  {
    id: 36,
    title: "Skull and Bones",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Enter the perilous paradise of Skull and Bones, a co-op pirate open world action-RPG experience, as you rise from an outcast to become an infamous pirate captain.",
    genre: "Action",
    developer: "Ubisoft Singapore",
    publisher: "Ubisoft",
    releaseDate: "February 16, 2024",
    size: "65 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 (64-bit only)",
        processor: "Intel Core i7-4790 / AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 570",
        storage: "65 GB available space",
      },
      recommended: {
        os: "Windows 10 (64-bit only)",
        processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1660 Ti / AMD Radeon RX 5600 XT",
        storage: "65 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "65 GB" },
      { name: "MEGA", url: "#", size: "65 GB" },
      { name: "MediaFire", url: "#", size: "65 GB (Split)" },
      { name: "Torrent", url: "#", size: "65 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the EMPRESS folder to the installed game directory\n4. Block the game in your firewall\n5. Play the game!",
    status: "Active",
    downloads: 8900,
  },
  {
    id: 37,
    title: "Helldivers 2",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "The Galaxy's Last Line of Offence. Enlist in the Helldivers and join the fight for freedom across a hostile galaxy in a fast, frantic, and ferocious third-person shooter.",
    genre: "Action",
    developer: "Arrowhead Game Studios",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "February 8, 2024",
    size: "100 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10",
        processor: "Intel Core i7-4790K or AMD Ryzen 5 1500X",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 1050 Ti or AMD Radeon RX 560",
        storage: "100 GB available space",
      },
      recommended: {
        os: "Windows 10",
        processor: "Intel Core i7-9700K or AMD Ryzen 7 2700X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce RTX 2060 or AMD Radeon RX 6600XT",
        storage: "100 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "100 GB (Split)" },
      { name: "MEGA", url: "#", size: "100 GB (Split)" },
      { name: "MediaFire", url: "#", size: "100 GB (Split)" },
      { name: "Torrent", url: "#", size: "100 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 25600,
  },
  {
    id: 38,
    title: "Pacific Drive",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Face the supernatural dangers of the Olympic Exclusion Zone with nothing but your car and your wits. Scavenge resources, load up your trusty station wagon, and drive like your life depends on it in this thrilling survival adventure.",
    genre: "Survival",
    developer: "Ironwood Studios",
    publisher: "Kepler Interactive",
    releaseDate: "February 22, 2024",
    size: "20 GB",
    rating: "T",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
        storage: "20 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-10700K / AMD Ryzen 7 3700X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce RTX 3070 / AMD Radeon RX 6700 XT",
        storage: "20 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "20 GB" },
      { name: "MEGA", url: "#", size: "20 GB" },
      { name: "MediaFire", url: "#", size: "20 GB" },
      { name: "Torrent", url: "#", size: "20 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 7200,
  },
  {
    id: 39,
    title: "Enshrouded",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "You are Flameborn, last ember of hope of a dying race. Awaken, survive the terror of a corrupting fog, and reclaim the lost beauty of your kingdom. Venture into a vast world, vanquish punishing bosses, build grand halls and forge your path in this co-op survival action RPG.",
    genre: "Survival",
    developer: "Keen Games",
    publisher: "Keen Games",
    releaseDate: "January 24, 2024",
    size: "60 GB",
    rating: "T",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6400 (2.7 GHz 4 Core) / AMD Ryzen 5 1500X (3.5 GHz 4 Core) or equivalent",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 (req. 6GB VRAM) / AMD Radeon RX 580 (req. 8GB VRAM)",
        storage: "60 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel i7-8700 (3.2 GHz 6 Core) / AMD Ryzen 7 2700X (3.7 GHz 8 Core) or equivalent",
        memory: "16 GB RAM",
        graphics: "NVIDIA RTX 2070 Super (req. 8GB VRAM) / AMD Radeon RX 6700 XT (req. 12GB VRAM)",
        storage: "60 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "60 GB" },
      { name: "MEGA", url: "#", size: "60 GB" },
      { name: "MediaFire", url: "#", size: "60 GB (Split)" },
      { name: "Torrent", url: "#", size: "60 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 11400,
  },
  {
    id: 40,
    title: "Last Epoch",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Uncover the past to protect the future, in this temporal Action-RPG. Master deep character customization to create your perfect build, explore vast skill trees, and experience a compelling story where your choices matter.",
    genre: "RPG",
    developer: "Eleventh Hour Games",
    publisher: "Eleventh Hour Games",
    releaseDate: "February 21, 2024",
    size: "35 GB",
    rating: "T",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 x64",
        processor: "Intel Core i5-2500K / AMD FX-4350",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 660 Ti / AMD Radeon R9 270X",
        storage: "35 GB available space",
      },
      recommended: {
        os: "Windows 10 x64",
        processor: "Intel Core i5-6500 / AMD Ryzen 3 1200",
        memory: "16 GB RAM",
        graphics: "NVIDIA GTX 1060 / AMD RX 580",
        storage: "35 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "35 GB" },
      { name: "MEGA", url: "#", size: "35 GB" },
      { name: "MediaFire", url: "#", size: "35 GB" },
      { name: "Torrent", url: "#", size: "35 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 8700,
  },
  {
    id: 41,
    title: "Nightingale",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Nightingale is a PVE open-world survival crafting game played solo or cooperatively with friends. Build, craft, fight and explore as you venture through mystical portals into a variety of amazing and fantastical realms.",
    genre: "Survival",
    developer: "Inflexion Games",
    publisher: "Inflexion Games",
    releaseDate: "February 20, 2024",
    size: "70 GB",
    rating: "T",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-Bit",
        processor: "Intel Core i5-4430 / AMD FX-6300",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
        storage: "70 GB available space",
      },
      recommended: {
        os: "Windows 10 64-Bit",
        processor: "Intel Core i7-8700K / AMD Ryzen 5 3600X",
        memory: "32 GB RAM",
        graphics: "NVIDIA GeForce RTX 2070 / AMD Radeon RX 6700 XT",
        storage: "70 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "70 GB" },
      { name: "MEGA", url: "#", size: "70 GB" },
      { name: "MediaFire", url: "#", size: "70 GB (Split)" },
      { name: "Torrent", url: "#", size: "70 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 6800,
  },
  {
    id: 42,
    title: "Suicide Squad: Kill the Justice League",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "From the creators of the Batman Arkham series, Suicide Squad: Kill the Justice League is a genre-defying third-person action shooter where the ultimate band of misfits must do the impossible: Kill the Justice League.",
    genre: "Action",
    developer: "Rocksteady Studios",
    publisher: "Warner Bros. Games",
    releaseDate: "February 2, 2024",
    size: "95 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1070 / AMD Radeon RX Vega 56",
        storage: "95 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-10700K / AMD Ryzen 7 3700X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce RTX 2080 / AMD Radeon RX 6800 XT",
        storage: "95 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "95 GB (Split)" },
      { name: "MEGA", url: "#", size: "95 GB (Split)" },
      { name: "MediaFire", url: "#", size: "95 GB (Split)" },
      { name: "Torrent", url: "#", size: "95 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the EMPRESS folder to the installed game directory\n4. Block the game in your firewall\n5. Play the game!",
    status: "Active",
    downloads: 12300,
  },
  {
    id: 43,
    title: "Persona 3 Reload",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Step into the shoes of a transfer student thrust into an unexpected fate when entering the hour 'hidden' between one day and the next. Awaken an incredible power and chase the mysteries of the Dark Hour, fight for your friends, and leave a mark on their memories forever.",
    genre: "RPG",
    developer: "Atlus",
    publisher: "Atlus",
    releaseDate: "February 2, 2024",
    size: "30 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-4790, 3.4 GHz | AMD Ryzen 5 1400, 3.2 GHz",
        memory: "8 GB RAM",
        graphics: "Nvidia GeForce GTX 650 Ti, 2 GB | AMD Radeon R7 360, 2 GB",
        storage: "30 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-4790, 3.4 GHz | AMD Ryzen 5 1400, 3.2 GHz",
        memory: "8 GB RAM",
        graphics: "Nvidia GeForce GTX 760, 4 GB | AMD Radeon HD 7870, 4 GB",
        storage: "30 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "30 GB" },
      { name: "MEGA", url: "#", size: "30 GB" },
      { name: "MediaFire", url: "#", size: "30 GB" },
      { name: "Torrent", url: "#", size: "30 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 15900,
  },
  {
    id: 44,
    title: "Hellblade 2: Senua's Saga",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "The sequel to the award winning Hellblade: Senua's Sacrifice, Senua returns in a brutal journey of survival through the myth and torment of Viking Iceland.",
    genre: "Action",
    developer: "Ninja Theory",
    publisher: "Xbox Game Studios",
    releaseDate: "May 21, 2024",
    size: "70 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel i5-8400 / AMD Ryzen 5 2600",
        memory: "16 GB RAM",
        graphics: "GTX 1070 / RX 5700",
        storage: "70 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel i5-10600K / AMD Ryzen 5 3600X",
        memory: "16 GB RAM",
        graphics: "RTX 3080 / RX 6800 XT",
        storage: "70 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "70 GB" },
      { name: "MEGA", url: "#", size: "70 GB" },
      { name: "MediaFire", url: "#", size: "70 GB (Split)" },
      { name: "Torrent", url: "#", size: "70 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 13500,
  },
  {
    id: 45,
    title: "Dragon's Dogma 2",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Dragon's Dogma 2 is a single player, narrative driven action-RPG that challenges the players to choose their own experience – from the appearance of their Arisen, their vocation, their party, how to approach different situations and more.",
    genre: "RPG",
    developer: "Capcom",
    publisher: "Capcom",
    releaseDate: "March 22, 2024",
    size: "70 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 (64 bit)/Windows 11 (64 bit)",
        processor: "Intel Core i5 10600 / AMD Ryzen 5 3600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1070 / AMD Radeon RX 5500 XT with 8GB VRAM",
        storage: "70 GB available space",
      },
      recommended: {
        os: "Windows 10 (64 bit)/Windows 11 (64 bit)",
        processor: "Intel Core i7-10700KF / AMD Ryzen 5 3600X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce RTX 2080 / AMD Radeon RX 6700",
        storage: "70 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "70 GB" },
      { name: "MEGA", url: "#", size: "70 GB" },
      { name: "MediaFire", url: "#", size: "70 GB (Split)" },
      { name: "Torrent", url: "#", size: "70 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the EMPRESS folder to the installed game directory\n4. Block the game in your firewall\n5. Play the game!",
    status: "Active",
    downloads: 18200,
  },
  {
    id: 46,
    title: "Rise of the Ronin",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "In 1863, Japan is split between the pro-shogunate and anti-shogunate factions. The fate of the world will be decided in 3 years, and the path the player chooses will determine the outcome.",
    genre: "Action",
    developer: "Team Ninja",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "March 22, 2024",
    size: "50 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-8700K / AMD Ryzen 5 3600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB",
        storage: "50 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-10700K / AMD Ryzen 7 3700X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce RTX 2070 / AMD Radeon RX 6700 XT",
        storage: "50 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "50 GB" },
      { name: "MEGA", url: "#", size: "50 GB" },
      { name: "MediaFire", url: "#", size: "50 GB (Split)" },
      { name: "Torrent", url: "#", size: "50 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 9600,
  },
  {
    id: 47,
    title: "Unicorn Overlord",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Traverse a vibrant world, assemble units and direct them in large-scale battles. Perform heroic deeds and grow renown throughout the five nations. Cultivate relationships and gather allies.",
    genre: "Strategy",
    developer: "Vanillaware",
    publisher: "Atlus",
    releaseDate: "March 8, 2024",
    size: "13 GB",
    rating: "T",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-6100 / AMD FX-4350",
        memory: "6 GB RAM",
        graphics: "NVIDIA GeForce GTX 750 Ti / AMD Radeon R7 260X",
        storage: "13 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
        storage: "13 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "13 GB" },
      { name: "MEGA", url: "#", size: "13 GB" },
      { name: "MediaFire", url: "#", size: "13 GB" },
      { name: "Torrent", url: "#", size: "13 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 5400,
  },
  {
    id: 48,
    title: "Princess Peach: Showtime!",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Princess Peach's trip to the Sparkle Theater goes off script when the wicked Grape and the Sour Bunch steal the show! Partner with the theater's guardian, Stella, to call curtains on this tragedy by using a powerful ribbon and taking on several starring roles.",
    genre: "Adventure",
    developer: "Nintendo EPD",
    publisher: "Nintendo",
    releaseDate: "March 22, 2024",
    size: "2.8 GB",
    rating: "E",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-6100 / AMD FX-4350",
        memory: "4 GB RAM",
        graphics: "NVIDIA GeForce GTX 750 Ti / AMD Radeon R7 260X",
        storage: "5 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
        storage: "5 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "2.8 GB" },
      { name: "MEGA", url: "#", size: "2.8 GB" },
      { name: "MediaFire", url: "#", size: "2.8 GB" },
      { name: "Torrent", url: "#", size: "2.8 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Install Yuzu or Ryujinx emulator\n3. Load the game ROM in the emulator\n4. Configure controller settings\n5. Play the game!",
    status: "Active",
    downloads: 8900,
  },
  {
    id: 49,
    title: "Stellar Blade",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Save humanity from extinction in this electrifying story-driven action adventure. The future of humanity is balanced on the edge of a blade. Ravaged by strange, powerful creatures, Earth has been abandoned, and what is left of the decimated human race has fled to a Colony in outer space.",
    genre: "Action",
    developer: "Shift Up",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "April 26, 2024",
    size: "50 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Japanese", "Korean", "Portuguese", "Russian"],
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
        storage: "50 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-10700K / AMD Ryzen 7 3700X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce RTX 2070 / AMD Radeon RX 6700 XT",
        storage: "50 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "50 GB" },
      { name: "MEGA", url: "#", size: "50 GB" },
      { name: "MediaFire", url: "#", size: "50 GB (Split)" },
      { name: "Torrent", url: "#", size: "50 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 14700,
  },
    {
    id: 50,
    title: "Minecraft",
    image: "/placeholder.svg?height=300&width=200",
    screenshots: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    description:
      "Save humanity from extinction in this electrifying story-driven action adventure. The future of humanity is balanced on the edge of a blade. Ravaged by strange, powerful creatures, Earth has been abandoned, and what is left of the decimated human race has fled to a Colony in outer space.",
    genre: "Sandbox",
    developer: "Mojang",
    publisher: "Mojang",
    releaseDate: "May 17, 2009",
    size: "2 GB",
    rating: "M",
    languages: ["English", "French", "Italian", "German", "Spanish", "Portuguese", "and more"],
    systemRequirements: {
      minimum: {
        os: "Windows 8 32-bit",
        processor: "Intel Pentium D / AMD Athlon 64 (K8) 2.6 GH",
        memory: "3 GB RAM",
        graphics: "Nvidia GeForce 9600 GT / AMD Radeon HD 2400 con OpenGL 3.1",
        storage: "1 GB available space",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3 / AMD Athlon II (K10) 2.8 GHz",
        memory: "5 GB RAM",
        graphics: "GeForce 2xx Series / AMD Radeon HD 5xxx Series con OpenGL 3.3",
        storage: "2 GB SSD",
      },
    },
    downloadLinks: [
      { name: "Google Drive", url: "#", size: "50 GB" },
      { name: "MEGA", url: "#", size: "50 GB" },
      { name: "MediaFire", url: "#", size: "50 GB (Split)" },
      { name: "Torrent", url: "#", size: "50 GB" },
    ],
    customInstructions:
      "1. Extract the game using WinRAR or 7-Zip\n2. Run setup.exe and install the game\n3. Copy the crack from the CODEX folder to the installed game directory\n4. Install all required software: DirectX, Visual C++ Redistributables\n5. Play the game!",
    status: "Active",
    downloads: 14700,
  },
  {
    id: 51,
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