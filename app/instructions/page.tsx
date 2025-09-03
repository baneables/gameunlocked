import Link from "next/link"
import { ArrowLeft, Download, Shield, AlertTriangle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function InstructionsPage() {
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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Download & Installation Instructions</h1>

          {/* Important Notice */}
          <Alert className="mb-8 border-yellow-600 bg-yellow-900/20">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            <AlertDescription className="text-yellow-400">
              <strong>Important:</strong> Always disable your antivirus software before downloading and installing games
              to avoid false positive detections.
            </AlertDescription>
          </Alert>

          {/* General Instructions */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-6 h-6 text-red-500" />
                General Download Instructions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-4 text-gray-300">
                <li>
                  <strong>Choose a download link:</strong> Select from Google Drive, MEGA, MediaFire, or Torrent based
                  on your preference.
                </li>
                <li>
                  <strong>Download the files:</strong> Some games may be split into multiple parts. Download all parts
                  before proceeding.
                </li>
                <li>
                  <strong>Extract the files:</strong> Use WinRAR, 7-Zip, or similar software to extract the downloaded
                  files.
                </li>
                <li>
                  <strong>Disable antivirus:</strong> Temporarily disable your antivirus software to prevent
                  interference.
                </li>
                <li>
                  <strong>Run the installer:</strong> Execute the setup file as administrator.
                </li>
                <li>
                  <strong>Apply the crack:</strong> Copy crack files to the game installation directory if required.
                </li>
                <li>
                  <strong>Launch the game:</strong> Run the game executable as administrator.
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* System Requirements */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-500" />
                Before You Download
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-400">System Requirements</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Check minimum system requirements for each game</li>
                    <li>• Ensure sufficient free disk space</li>
                    <li>• Update your graphics drivers</li>
                    <li>• Have a stable internet connection</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-yellow-400">Required Software</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• WinRAR or 7-Zip for extraction</li>
                    <li>• Microsoft Visual C++ Redistributables</li>
                    <li>• DirectX (latest version)</li>
                    <li>• .NET Framework (if required)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Troubleshooting */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-orange-500" />
                Common Issues & Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-red-400">Game won't start</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                    <li>Run the game as administrator</li>
                    <li>Install Microsoft Visual C++ Redistributables</li>
                    <li>Update DirectX and graphics drivers</li>
                    <li>Check if crack files are properly applied</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-red-400">Antivirus blocking files</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                    <li>Add game folder to antivirus exclusions</li>
                    <li>Temporarily disable real-time protection</li>
                    <li>Restore quarantined files</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-red-400">Missing DLL files</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                    <li>Install Visual C++ Redistributables (all versions)</li>
                    <li>Download missing DLL from official sources</li>
                    <li>Run Windows System File Checker (sfc /scannow)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Safety Tips */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                Safety & Legal Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-green-400">Safety Tips</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Only download from trusted sources</li>
                    <li>Scan files with antivirus after downloading</li>
                    <li>Create system restore points before installation</li>
                    <li>Keep your system and drivers updated</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-yellow-400">Legal Notice</h3>
                  <p className="text-sm text-gray-400">
                    These games are provided for educational and testing purposes. We encourage users to support
                    developers by purchasing official copies. GameUnlocked is not responsible for any legal issues that
                    may arise from downloading copyr GameUnlocked is not responsible for any legal issues that may arise
                    from downloading copyrighted material. Please respect intellectual property rights and local laws.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}