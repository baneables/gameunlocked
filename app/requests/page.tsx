"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Search, ThumbsUp, MessageSquare, Clock, CheckCircle, XCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function RequestsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [newRequest, setNewRequest] = useState({
    title: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const requests = [
    {
      id: 1,
      title: "Starfield",
      description: "Please add the latest version of Starfield with all DLCs.",
      status: "pending",
      votes: 42,
      comments: 8,
      date: "2 days ago",
      user: "gamer123",
    },
    {
      id: 2,
      title: "FIFA 24",
      description: "Looking for FIFA 24 with updated rosters.",
      status: "approved",
      votes: 37,
      comments: 5,
      date: "3 days ago",
      user: "soccerfan",
    },
    {
      id: 3,
      title: "Hogwarts Legacy",
      description: "Can you add Hogwarts Legacy with all updates?",
      status: "completed",
      votes: 65,
      comments: 12,
      date: "1 week ago",
      user: "wizardgamer",
    },
    {
      id: 4,
      title: "Diablo IV",
      description: "Please add Diablo IV with the latest season content.",
      status: "pending",
      votes: 29,
      comments: 4,
      date: "4 days ago",
      user: "demonslayer",
    },
    {
      id: 5,
      title: "Spider-Man 2",
      description: "Looking for Spider-Man 2 for PC if available.",
      status: "rejected",
      votes: 18,
      comments: 7,
      date: "5 days ago",
      user: "webswinger",
      rejectionReason: "Not available on PC yet",
    },
  ]

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSuccessMessage("Your request has been submitted successfully!")
      setNewRequest({ title: "", description: "" })
      setTimeout(() => setSuccessMessage(""), 5000)
    }, 1500)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-yellow-600">Pending</Badge>
      case "approved":
        return <Badge className="bg-blue-600">Approved</Badge>
      case "completed":
        return <Badge className="bg-green-600">Completed</Badge>
      case "rejected":
        return <Badge className="bg-red-600">Rejected</Badge>
      default:
        return <Badge className="bg-gray-600">Unknown</Badge>
    }
  }

  const filteredRequests = requests.filter((request) => request.title.toLowerCase().includes(searchTerm.toLowerCase()))

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
        <h1 className="text-4xl font-bold mb-8">Game Requests</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Request Form */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800 border-gray-700 sticky top-4">
              <CardHeader>
                <CardTitle>Submit a Request</CardTitle>
              </CardHeader>
              <CardContent>
                {successMessage && (
                  <Alert className="mb-4 border-green-600 bg-green-900/20">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <AlertDescription className="text-green-400">{successMessage}</AlertDescription>
                  </Alert>
                )}
                <form onSubmit={handleSubmitRequest} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Game Title</Label>
                    <Input
                      id="title"
                      placeholder="Enter game title"
                      value={newRequest.title}
                      onChange={(e) => setNewRequest({ ...newRequest, title: e.target.value })}
                      className="bg-gray-700 border-gray-600"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide details about the game version, DLCs, etc."
                      value={newRequest.description}
                      onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
                      className="bg-gray-700 border-gray-600 min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-blue-900/20 border border-blue-600 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">Request Guidelines:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                    <li>Check if the game already exists on our site</li>
                    <li>Provide specific details about the version you want</li>
                    <li>Be patient as we process requests in order of popularity</li>
                    <li>Vote on existing requests instead of creating duplicates</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Requests List */}
          <div className="lg:col-span-2">
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search requests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5 bg-gray-800">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="approved">Approved</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="rejected">Rejected</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-6">
                <div className="space-y-4">
                  {filteredRequests.length === 0 ? (
                    <div className="text-center py-12 bg-gray-800 rounded-lg">
                      <p className="text-gray-400">No requests found matching your search.</p>
                    </div>
                  ) : (
                    filteredRequests.map((request) => (
                      <Card key={request.id} className="bg-gray-800 border-gray-700">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-xl">{request.title}</CardTitle>
                              <p className="text-sm text-gray-400 mt-1">
                                Requested by {request.user} • {request.date}
                              </p>
                            </div>
                            {getStatusBadge(request.status)}
                          </div>
                        </CardHeader>
                        <CardContent className="py-2">
                          <p className="text-gray-300">{request.description}</p>
                          {request.status === "rejected" && request.rejectionReason && (
                            <div className="mt-3 p-2 bg-red-900/20 border border-red-600 rounded text-sm">
                              <span className="font-semibold text-red-400">Reason:</span> {request.rejectionReason}
                            </div>
                          )}
                        </CardContent>
                        <CardFooter className="flex justify-between pt-2">
                          <div className="flex space-x-4">
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                              <ThumbsUp className="w-4 h-4 mr-1" />
                              {request.votes}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                              <MessageSquare className="w-4 h-4 mr-1" />
                              {request.comments}
                            </Button>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>
                              {request.status === "completed"
                                ? "Added"
                                : request.status === "rejected"
                                  ? "Rejected"
                                  : "Updated"}{" "}
                              {request.date}
                            </span>
                          </div>
                        </CardFooter>
                      </Card>
                    ))
                  )}
                </div>
              </TabsContent>

              <TabsContent value="pending" className="mt-6">
                <div className="space-y-4">
                  {filteredRequests.filter((r) => r.status === "pending").length === 0 ? (
                    <div className="text-center py-12 bg-gray-800 rounded-lg">
                      <p className="text-gray-400">No pending requests found.</p>
                    </div>
                  ) : (
                    filteredRequests
                      .filter((r) => r.status === "pending")
                      .map((request) => (
                        <Card key={request.id} className="bg-gray-800 border-gray-700">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-xl">{request.title}</CardTitle>
                                <p className="text-sm text-gray-400 mt-1">
                                  Requested by {request.user} • {request.date}
                                </p>
                              </div>
                              {getStatusBadge(request.status)}
                            </div>
                          </CardHeader>
                          <CardContent className="py-2">
                            <p className="text-gray-300">{request.description}</p>
                          </CardContent>
                          <CardFooter className="flex justify-between pt-2">
                            <div className="flex space-x-4">
                              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                <ThumbsUp className="w-4 h-4 mr-1" />
                                {request.votes}
                              </Button>
                              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                <MessageSquare className="w-4 h-4 mr-1" />
                                {request.comments}
                              </Button>
                            </div>
                            <div className="flex items-center text-sm text-gray-400">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>Updated {request.date}</span>
                            </div>
                          </CardFooter>
                        </Card>
                      ))
                  )}
                </div>
              </TabsContent>

              {/* Similar structure for other tabs */}
              <TabsContent value="approved" className="mt-6">
                <div className="space-y-4">
                  {filteredRequests.filter((r) => r.status === "approved").length === 0 ? (
                    <div className="text-center py-12 bg-gray-800 rounded-lg">
                      <p className="text-gray-400">No approved requests found.</p>
                    </div>
                  ) : (
                    filteredRequests
                      .filter((r) => r.status === "approved")
                      .map((request) => (
                        <Card key={request.id} className="bg-gray-800 border-gray-700">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-xl">{request.title}</CardTitle>
                                <p className="text-sm text-gray-400 mt-1">
                                  Requested by {request.user} • {request.date}
                                </p>
                              </div>
                              {getStatusBadge(request.status)}
                            </div>
                          </CardHeader>
                          <CardContent className="py-2">
                            <p className="text-gray-300">{request.description}</p>
                          </CardContent>
                          <CardFooter className="flex justify-between pt-2">
                            <div className="flex space-x-4">
                              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                <ThumbsUp className="w-4 h-4 mr-1" />
                                {request.votes}
                              </Button>
                              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                <MessageSquare className="w-4 h-4 mr-1" />
                                {request.comments}
                              </Button>
                            </div>
                            <div className="flex items-center text-sm text-gray-400">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>Updated {request.date}</span>
                            </div>
                          </CardFooter>
                        </Card>
                      ))
                  )}
                </div>
              </TabsContent>

              <TabsContent value="completed" className="mt-6">
                <div className="space-y-4">
                  {filteredRequests.filter((r) => r.status === "completed").length === 0 ? (
                    <div className="text-center py-12 bg-gray-800 rounded-lg">
                      <p className="text-gray-400">No completed requests found.</p>
                    </div>
                  ) : (
                    filteredRequests
                      .filter((r) => r.status === "completed")
                      .map((request) => (
                        <Card key={request.id} className="bg-gray-800 border-gray-700">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-xl">{request.title}</CardTitle>
                                <p className="text-sm text-gray-400 mt-1">
                                  Requested by {request.user} • {request.date}
                                </p>
                              </div>
                              {getStatusBadge(request.status)}
                            </div>
                          </CardHeader>
                          <CardContent className="py-2">
                            <p className="text-gray-300">{request.description}</p>
                          </CardContent>
                          <CardFooter className="flex justify-between pt-2">
                            <div className="flex space-x-4">
                              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                <ThumbsUp className="w-4 h-4 mr-1" />
                                {request.votes}
                              </Button>
                              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                <MessageSquare className="w-4 h-4 mr-1" />
                                {request.comments}
                              </Button>
                            </div>
                            <div className="flex items-center text-sm text-gray-400">
                              <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                              <span>Added {request.date}</span>
                            </div>
                          </CardFooter>
                        </Card>
                      ))
                  )}
                </div>
              </TabsContent>

              <TabsContent value="rejected" className="mt-6">
                <div className="space-y-4">
                  {filteredRequests.filter((r) => r.status === "rejected").length === 0 ? (
                    <div className="text-center py-12 bg-gray-800 rounded-lg">
                      <p className="text-gray-400">No rejected requests found.</p>
                    </div>
                  ) : (
                    filteredRequests
                      .filter((r) => r.status === "rejected")
                      .map((request) => (
                        <Card key={request.id} className="bg-gray-800 border-gray-700">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-xl">{request.title}</CardTitle>
                                <p className="text-sm text-gray-400 mt-1">
                                  Requested by {request.user} • {request.date}
                                </p>
                              </div>
                              {getStatusBadge(request.status)}
                            </div>
                          </CardHeader>
                          <CardContent className="py-2">
                            <p className="text-gray-300">{request.description}</p>
                            {request.rejectionReason && (
                              <div className="mt-3 p-2 bg-red-900/20 border border-red-600 rounded text-sm">
                                <span className="font-semibold text-red-400">Reason:</span> {request.rejectionReason}
                              </div>
                            )}
                          </CardContent>
                          <CardFooter className="flex justify-between pt-2">
                            <div className="flex space-x-4">
                              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                <ThumbsUp className="w-4 h-4 mr-1" />
                                {request.votes}
                              </Button>
                              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                <MessageSquare className="w-4 h-4 mr-1" />
                                {request.comments}
                              </Button>
                            </div>
                            <div className="flex items-center text-sm text-gray-400">
                              <XCircle className="w-4 h-4 mr-1 text-red-500" />
                              <span>Rejected {request.date}</span>
                            </div>
                          </CardFooter>
                        </Card>
                      ))
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}