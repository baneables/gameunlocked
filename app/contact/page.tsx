"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, MessageSquare, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSuccessMessage("Your message has been sent successfully! We'll get back to you soon.")
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
      })
      setTimeout(() => setSuccessMessage(""), 5000)
    }, 1500)
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
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <p className="text-gray-400 mb-8 text-center max-w-2xl mx-auto">
          Have a question, suggestion, or need help with a game? Fill out the form below and we'll get back to you as
          soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <div className="space-y-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-600 p-3 rounded-full">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-400">support@gameunlocked.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 p-3 rounded-full">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Discord</h3>
                      <p className="text-gray-400">discord.gg/gameunlocked</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-lg">Before Contacting Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5" />
                      <span>Check our FAQ section for common issues and solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5" />
                      <span>For game requests, please use our dedicated Requests page</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5" />
                      <span>Include as much detail as possible about your issue</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                {successMessage && (
                  <Alert className="mb-6 border-green-600 bg-green-900/20">
                    <AlertDescription className="text-green-400">{successMessage}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-gray-700 border-gray-600"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-gray-700 border-gray-600"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        className="bg-gray-700 border-gray-600"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={handleSelectChange}>
                        <SelectTrigger className="bg-gray-700 border-gray-600">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="download">Download Issues</SelectItem>
                          <SelectItem value="installation">Installation Problems</SelectItem>
                          <SelectItem value="broken">Broken Links</SelectItem>
                          <SelectItem value="suggestion">Suggestions</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your issue or question in detail..."
                      className="bg-gray-700 border-gray-600 min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}