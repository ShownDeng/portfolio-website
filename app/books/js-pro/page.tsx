"use client"

import Link from "next/link"

export default function JSProBookReview() {
  return (
    <div className="container mx-auto py-12 max-w-4xl">
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-1/3">
          <div className="sticky top-24 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/书籍-Feel-Good-Productivity.jpeg" 
              alt="Feel Good Productivity" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold mb-2">Feel Good Productivity</h1>
          <h2 className="text-xl text-gray-600 mb-6">Ali Abdaal</h2>
          
          <div className="prose max-w-none dark:prose-invert">
            <h3>读书笔记与感悟</h3>
            
            <p>《Feel Good Productivity》是由医生、YouTuber和企业家Ali Abdaal撰写的一本关于生产力的书籍。这本书提出了一个革命性的观点：真正的生产力不是关于痛苦和自律，而是关于享受过程和感觉良好。</p>
            
            <h4>核心理念</h4>
            
            <p>Ali Abdaal在书中提出了"感觉良好生产力"的三个支柱：</p>
            
            <ol>
              <li>
                <strong>能量管理</strong> - 传统的生产力方法关注时间管理，而Ali认为能量管理更为重要。我学会了如何识别自己的高能量时段，并在这些时段安排重要任务。
              </li>
              <li>
                <strong>享受过程</strong> - 书中强调，当我们享受所做的事情时，我们自然会更有生产力。我开始思考如何让必要但枯燥的任务变得更有趣，例如通过游戏化或社交元素。
              </li>
              <li>
                <strong>目标与价值观一致</strong> - 当我们的工作与个人价值观和更大的目标一致时，我们会感到更有动力。我重新评估了自己的目标，确保它们与我真正关心的事物相符。
              </li>
            </ol>
            
            <h4>实践应用</h4>
            
            <p>读完这本书后，我对自己的工作方式进行了一些调整：</p>
            
            <ul>
              <li>我开始更加关注自己的能量水平，在精力充沛时处理创造性和复杂的任务，在能量较低时处理简单的行政工作。</li>
              <li>我尝试将工作与乐趣结合，例如在咖啡馆工作，或者与朋友一起进行"工作约会"。</li>
              <li>我重新思考了"拖延"的概念，不再将其视为懒惰的表现，而是将其视为对任务本身或工作环境的反馈信号。</li>
              <li>我开始使用"最小愉悦阈值"技术 - 找到让任务变得足够愉快以至于我愿意开始的最小改变。</li>
            </ul>
            
            <h4>反思</h4>
            
            <p>这本书改变了我对生产力的看法。以前，我认为生产力意味着强迫自己完成任务，即使这些任务让我感到痛苦。现在，我明白真正持久的生产力来自于创造一个让我感觉良好的工作环境和系统。</p>
            
            <p>当然，并非所有工作都能变得有趣，有时我们确实需要一些自律。但是，通过关注能量管理、寻找乐趣和与价值观保持一致，我发现自己不仅完成了更多工作，而且在这个过程中感觉更好。</p>
            
            <p>总的来说，《Feel Good Productivity》提供了一种更可持续、更人性化的生产力方法，这种方法不仅关注结果，也关注过程中的幸福感。我相信，这种方法不仅能提高生产力，还能改善整体生活质量。</p>
          </div>
          
          <div className="flex justify-center mt-12">
            <Link href="/books" className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
              返回书籍列表
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}