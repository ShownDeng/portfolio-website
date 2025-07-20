"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Send } from "lucide-react"
import Navbar from "@/components/navbar"
import { useState, useEffect } from "react"

export default function MessagePage() {
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [userIP, setUserIP] = useState<string>('')

  // 获取用户IP地址
  useEffect(() => {
    const getUserIP = async () => {
      try {
        // 使用更可靠的IP服务
        const ipServices = [
          { url: 'https://api.ipify.org?format=json', type: 'json', key: 'ip' },
          { url: 'https://ipapi.co/json/', type: 'json', key: 'ip' },
          { url: 'https://api.ip.sb/ip', type: 'text' },
          { url: 'https://ifconfig.me/ip', type: 'text' },
          { url: 'https://icanhazip.com', type: 'text' }
        ]
        
        for (const service of ipServices) {
          try {
            console.log(`尝试获取IP from: ${service.url}`)
            const response = await fetch(service.url, {
              method: 'GET',
              mode: 'cors',
              cache: 'no-cache'
            })
            
            if (response.ok) {
              if (service.type === 'json') {
                const data = await response.json()
                const ip = data[service.key!]
                if (ip) {
                  console.log(`成功获取IP: ${ip}`)
                  setUserIP(ip)
                  return
                }
              } else {
                const ip = (await response.text()).trim()
                if (ip && /^\d+\.\d+\.\d+\.\d+$/.test(ip)) {
                  console.log(`成功获取IP: ${ip}`)
                  setUserIP(ip)
                  return
                }
              }
            }
          } catch (err) {
            console.log(`${service.url} 失败:`, err)
            continue
          }
        }
        
        // 如果所有服务都失败，设置一个标记
        console.log('所有IP服务都失败，使用客户端检测')
        setUserIP('客户端检测失败')
      } catch (error) {
        console.log('IP获取过程出错:', error)
        setUserIP('获取失败')
      }
    }
    
    getUserIP()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEmailForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // 获取时间戳和浏览器信息
      const timestamp = new Date().toLocaleString('zh-CN', {
        timeZone: 'Asia/Shanghai',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })

      const userAgent = navigator.userAgent
      const currentIP = userIP || '正在获取...'

      // 创建增强的消息内容
      const enhancedMessage = `${emailForm.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 提交信息记录
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🕐 提交时间: ${timestamp}
🌐 用户IP: ${currentIP}
💻 浏览器: ${userAgent}
📄 来源页面: ${window.location.href}
🔍 屏幕分辨率: ${window.screen.width}x${window.screen.height}
🌍 时区: ${Intl.DateTimeFormat().resolvedOptions().timeZone}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`

      // 根据Netlify官方文档的要求提交表单
      const formData = new FormData()
      formData.append('form-name', 'contact')
      formData.append('name', emailForm.name)
      formData.append('email', emailForm.email)
      formData.append('subject', emailForm.subject)
      formData.append('message', enhancedMessage)
      
      // 添加隐藏字段来传递额外信息
      formData.append('timestamp', timestamp)
      formData.append('user_ip', currentIP)
      formData.append('user_agent', userAgent)
      formData.append('page_url', window.location.href)

      console.log('提交的表单数据:', {
        name: emailForm.name,
        email: emailForm.email,
        subject: emailForm.subject,
        ip: currentIP,
        timestamp: timestamp
      })

      const response = await fetch('/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded' 
        },
        body: new URLSearchParams(formData as any).toString()
      })

      if (response.ok) {
        setSubmitStatus('success')
        setEmailForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-gray-300 flex flex-col">
      <Navbar />

      <main className="container mx-auto flex-grow px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-mono text-gray-100 mb-4">Get in Touch</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to send me a message.
            </p>
          </div>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-white/20">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="h-5 w-5 text-gray-400" />
                <CardTitle className="text-gray-100">Send a Message</CardTitle>
              </div>
              <CardDescription className="text-gray-400">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* 隐藏表单：Netlify表单检测必需 */}
              <form 
                name="contact" 
                data-netlify="true"
                style={{ display: 'none' }}
              >
                <input type="text" name="name" />
                <input type="email" name="email" />
                <input type="text" name="subject" />
                <textarea name="message"></textarea>
                <input type="hidden" name="timestamp" />
                <input type="hidden" name="user_ip" />
                <input type="hidden" name="user_agent" />
                <input type="hidden" name="page_url" />
              </form>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* 隐藏字段：Netlify表单必需 */}
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-400">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      name="name"
                      value={emailForm.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name" 
                      className="bg-white/5 backdrop-blur-sm border-white/10 text-gray-200 rounded-lg transition-all duration-300 focus:bg-white/10 focus:border-white/20 hover:bg-white/10" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-400">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={emailForm.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Your email"
                      className="bg-white/5 backdrop-blur-sm border-white/10 text-gray-200 rounded-lg transition-all duration-300 focus:bg-white/10 focus:border-white/20 hover:bg-white/10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-gray-400">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={emailForm.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Subject of your message"
                    className="bg-white/5 backdrop-blur-sm border-white/10 text-gray-200 rounded-lg transition-all duration-300 focus:bg-white/10 focus:border-white/20 hover:bg-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={emailForm.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Your message"
                    rows={6}
                    className="bg-white/5 backdrop-blur-sm border-white/10 text-gray-200 resize-none rounded-lg transition-all duration-300 focus:bg-white/10 focus:border-white/20 hover:bg-white/10"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="text-green-400 text-sm bg-green-400/10 border border-green-400/20 rounded-lg p-3">
                    ✓ 邮件发送成功！感谢您的联系，我会尽快回复您。
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg p-3">
                    ✗ 发送失败，请稍后重试或通过其他方式联系我。
                  </div>
                )}
              </form>
            </CardContent>
            <CardFooter>
              <Button 
                type="submit"
                form="contact-form"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="w-full gap-2 rounded-[9px] bg-[#d5f365] text-black hover:shadow-[7px_5px_56px_-14px_#C3D900] active:scale-[0.97] active:shadow-[7px_5px_56px_-10px_#C3D900] transition-all duration-400 py-4 px-8"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? '发送中...' : 'Send Message'}
              </Button>
            </CardFooter>
          </Card>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-white/20">
              <CardHeader>
                <CardTitle className="text-gray-100 text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:example@example.com" className="text-gray-400 hover:text-white transition-colors">
                  example@example.com
                </a>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:shadow-zinc-800/50 hover:border-zinc-700">
              <CardHeader>
                <CardTitle className="text-gray-100 text-lg">Social Media</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">You can also reach me on LinkedIn, GitHub, or Twitter.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

