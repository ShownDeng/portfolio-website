"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CSAPPBookReview() {
  return (
    <div className="container mx-auto py-12 max-w-4xl">
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-1/3">
          <div className="sticky top-24 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/书籍-人性的弱点.jpeg" 
              alt="人性的弱点" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold mb-2">人性的弱点</h1>
          <h2 className="text-xl text-gray-600 mb-6">戴尔·卡耐基</h2>
          
          <div className="prose max-w-none dark:prose-invert">
            <h3>读书笔记与感悟</h3>
            
            <p>《人性的弱点》是一本关于人际关系和自我提升的经典著作，自1936年出版以来，一直是畅销书籍。这本书教给我很多关于如何与人相处、如何影响他人以及如何改善自己的方法。</p>
            
            <h4>关键收获</h4>
            
            <ol>
              <li>
                <strong>真诚的赞美与欣赏</strong> - 卡耐基强调，真诚的赞美是建立良好人际关系的基础。我学会了如何发现他人的优点并给予真诚的赞美，而不是过度批评。
              </li>
              <li>
                <strong>理解他人的观点</strong> - 书中教导我们要先理解，再被理解。站在他人的角度思考问题，能够更好地解决冲突和建立信任。
              </li>
              <li>
                <strong>避免争论</strong> - 卡耐基指出，在争论中很少有人能够真正说服对方。我学会了如何避免不必要的争论，寻找共同点而不是分歧。
              </li>
              <li>
                <strong>让对方有成就感</strong> - 给予他人重要感和成就感，是激励他人的有效方式。我开始尝试让身边的人感到自己的想法和贡献是重要的。
              </li>
            </ol>
            
            <h4 >实践应用</h4>
            
            <p>读完这本书后，我开始有意识地应用书中的原则。例如，在团队合作中，我更加注重倾听队友的想法，给予真诚的反馈，并尽量让每个人都能发挥自己的优势。这不仅改善了我的人际关系，也提高了团队的整体效率。</p>
            
            <p>在处理冲突时，我尝试站在对方的角度思考问题，寻找共同点而不是一味坚持己见。这种方法帮助我避免了许多不必要的争论，建立了更加和谐的关系。</p>
            
            <h4>反思</h4>
            
            <p>虽然《人性的弱点》提供了许多有价值的建议，但我也意识到，这些技巧需要真诚地应用，而不是作为操纵他人的工具。真正的人际关系建立在相互尊重和真诚的基础上，而不仅仅是技巧的运用。</p>
            
            <p>总的来说，这本书改变了我看待人际关系的方式，让我更加注重理解他人、真诚沟通和积极影响。我相信，这些原则不仅适用于个人生活，也适用于职业发展和团队合作。</p>
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