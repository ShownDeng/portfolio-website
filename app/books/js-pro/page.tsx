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
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">📖</span>
              读书笔记与感悟
            </h3>
            
            <p>《Feel Good Productivity》是由医生、YouTuber和企业家Ali Abdaal撰写的一本关于生产力的书籍。这本书提出了一个革命性的观点：真正的生产力不是关于痛苦和自律，而是关于享受过程和感觉良好。Ali Abdaal在书中提出了"感觉良好生产力"的八个支柱：</p>
            
            
            <ol>
              <li className="bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🤠</span>
                  关于支线任务与乐趣
                </h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>通过激发支线的兴趣去推动主线</li>
                  <li>在日常生活中探索新鲜事物，寻找乐趣</li>
                  <li>学会在工作中寻找乐趣，把工作当作游戏（当然这很难）</li>
                  <li>轻松氛围可以提升幸福感和工作效率</li>
                </ul>
              </li>
              <li className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🥳</span>
                  关于失败与态度
                </h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>恣意而为的失败，往往是我们徒然耗费大量精力的根源</li>
                  <li>决定成功的并不是你失败了多少次，而是你如何看待失败并从中获取经验</li>
                  <li>自信不是与生俱来的，而是在学习的过程中养成的</li>
                  <li>悲观者永远正确，乐观者永远向前</li>
                </ul>
              </li>
              <li className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🥸</span>
                  关于掌控感（三步提高）
                </h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>模拟人格：假设自己就是一个超级自信的人（翻转自信开关）。</li>
                  <li>提升能力：对于一个未知事物尝试去教别人（即使本身也不懂），在教中发现问题并学习。</li>
                  <li>掌控过程：学会去掌控完成任务的过程。如果不能选择做什么，依然可以选择如何做。结果并非总能掌控，但过程和心态往往可以。</li>
                  <li>悲观者永远正确，乐观者永远向前</li>
                </ul>
              </li>
              <li className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🤪</span>
                  关于人际关系
                </h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>人群也是有力量的，遇见好的人可以提高我们的心智，让我们效率更高。</li>
                  <li>过度沟通 (Overcommunication)</li>
                  <li>积极面：通过对他人的赞赏使团队更加团结；提升团队整体能量和氛围</li>
                  <li>消极面：</li>
                  <ol>
                  <li><span className="font-medium">客观 (Objective)</span>：客观发现并描述问题，不带偏见</li>
                  <li><span className="font-medium">结果 (Result)</span>：说明带来的影响或结果</li>
                  <li><span className="font-medium">转移 (Transfer)</span>：将注意力转移到解决方案上，团结力量解决问题</li>
                </ol>
                </ul>  
              </li>

              <li className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🥸</span>
                  关于目标设定与行动
                </h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>探寻根本原因 (Ask Why): 每次做决定时，应该问自己五次为什么做这个决定，探寻最根本的理由，是否对最终的目标有利。不仅用于解释错误，也可判断任务是否值得做。</li>
                  <li>目标转为行动 (Ask What): Turning your abstract purpose into a set of concrete goals and actions. 把目标量化和可视化，强调每个目标需清晰可衡量 (clear and quantifiable)。</li>
                  <li>设定NICE目标:</li>
                  <ol>
                    <li><span className="font-medium">短期 (Near-term)</span>： 帮助我们专注于旅程中需要采取的具体步骤（如每日/每周目标），避免被更宏大的目标所压倒。保持清晰方向，减少压力，一步步推进，维持动力。</li>
                    <li><span className="font-medium">侧重投入 (Input-based)</span>：强调执行过程（如"散步10分钟"、"写100字"），而非遥远抽象的结果（如"减重5公斤"）。关注当下能做之事。</li>
                    <li><span className="font-medium">可控 (Controllable)</span>：设定在自身控制范围内的、实际的目标（如"每天分配20分钟给该任务"），避免外部环境干扰。</li>
                    <li><span className="font-medium">赋能 (Energising)</span>：结合寻找乐趣、增强掌控感、人际协作等多种方法提升执行过程的积极性和效率。</li>
                  </ol>
                  <li>认知重评 (Cognitive Reappraisal): 指改变我们对某个情境的解读（认知重评），从而在情感上感觉更好。通过调整对事件、思想或情感的看法，帮助我们体验到更积极的情绪反应。例如应用 10/10/10法则：遇到问题，思考它10分钟后有何影响？10周后呢？10年后呢？通常会发现，当前的担忧/失败不会永远定义我们，恐惧的重要性也随时间消减。</li>
                  <li>计划重要性：尽管没有任何战斗能够完全按照预定的计划进行，但没有任何战斗是没有计划的。计划为行动提供了方向和框架。在行动前问：未完成的三大原因？如何避免它们干扰？谁能帮助我坚持？现在能做什么提高完成几率？为计划的变量做准备（“如果X发生，我将做Y”）。就像面前有个任务，你为什么不去做，原因是什么，当遇到某个原因时应该做什么，做的过程中谁可以提供帮助，本质是流程化。</li>
                </ul>
              </li>

              <li className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🥸</span>
                  关于情绪阻碍 (尤其恐惧)
                </h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>理解恐惧：询问自己为何不开始？害怕什么？恐惧来源？</li>
                  <li>减少恐惧：运用10/10/10法则或其他方法审视恐惧是否被夸大。</li>
                  <li>克服恐惧：若害怕他人看法，提醒自己：多数人并未过多关注你。人们自我意识强但不常评判他人。</li>
                </ul> 
              </li>

              <li className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🥸</span>
                  关于注意力与精力管理
                </h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>切换成本 (Switching Costs): 人脑适合单线程，频繁切换任务会降低效率。</li>
                  <li>专注力消耗: 长时间高度专注于单一任务也会耗尽认知资源，导致专注力下降。</li>
                  <li className="mb-4">精力恢复 (Recharge): <span className="font-semibold">CALM法则</span></li>
                </ul>
                <div className="pl-6 mb-4">
                  <p className="mb-2">寻找能让你感受到以下状态的活动或项目：</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li><span className="font-medium">有成就感</span> (Competent)</li>
                    <li><span className="font-medium">自由自主</span> (Autonomous)</li>
                    <li><span className="font-medium">无拘束</span> (Liberated)</li>
                    <li><span className="font-medium">放松平和</span> (Mellow)</li>
                  </ul>
                </div>
                <div className="pl-6 space-y-3">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <p className="font-medium mb-1">🌿 拥抱自然</p>
                    <p>即使短暂的接触绿色环境（散步、引入室内植物或鸟鸣声）也具有变革性影响。</p>
                  </div>
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <p className="font-medium mb-1">🧘‍♂️ 战略性无为</p>
                    <p>有时最具赋能的事情就是彻底休息，什么也不做。今天少做，明天会更好。</p>
                  </div>
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <p className="font-medium mb-1">🎨 非功利空间</p>
                    <p>生活在培养与个人发展无直接联系的兴趣爱好，作为恢复精力的港湾。生活并非始终紧绷；留出邂逅惊喜和快乐的余地。</p>
                  </div>
                </div>
              </li>
              <li className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🥸</span>
                  关于行动与调整
                </h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>在忙碌的生活里，做自己内心想做的事，这些事可以与工作完全无关。</li>
                  <li>第三步最关键：执行 (Execute)。作出改变。观察这些改变带来的影响：它对我的情绪、能量和效率有什么影响？</li>
                  <li>询问自己每个新方法：这对我有什么作用？效率是一个不断发展的领域，你也在不断进化。</li>
                  <li>要想持续“感觉良好”的高效率，需将当下的行动与更深层的自我意识保持一致。找出对你真正重要的事物——并让你的行为与之契合。</li>
                </ul>
              </li>
            </ol>
<div className="my-8">
  <img
    src="/Feel-good-productivity-mind.png"
    alt="Feel Good Productivity Mind Map"
    className="w-full h-auto rounded-lg shadow-lg"
  />
  <p className="text-sm text-gray-400 mt-2 text-center">
    Feel Good Productivity 思维导图
  </p>
</div>
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🤔</span>
              实践应用
            </h4>
            <ul className="space-y-2 list-disc pl-5">
              <li>开始关注自己的能量水平，在精力充沛时处理创造性和复杂的任务，在能量较低时处理简单的行政工作。同时，将自己的兴趣融入工作，如将对自己的学习效率进行可视化。</li>
              <li>尝试在不同地方学习，多与朋友探讨，例如在咖啡馆工作，或者与朋友一起进行"工作约会"。</li>
              <li>设定专门的休息时间。</li>
              <li>思考情绪的来源。</li>
            </ul>
            
            <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🧐</span>
              反思
            </h4>
            <ul className="space-y-2 list-disc pl-5">
              <li>这本书改变了我对生产力的看法。以前，我认为生产力意味着强迫自己完成任务，即使这些任务让我感到痛苦。现在，我明白真正持久的生产力来自于创造一个让我感觉良好的工作环境和系统。当然，并非所有工作都能变得有趣，有时我们确实需要一些自律。但是，通过关注能量管理、寻找乐趣和与价值观保持一致，我发现自己不仅完成了更多工作，而且在这个过程中感觉更好。</li>
            </ul>
            
     
            
            
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