import React from 'react';
import { Mail, Heart, Star, Users } from 'lucide-react';

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 min-h-screen flex items-center justify-center p-4">
      {/* 页面容器，居中显示内容 */}
      <div className="w-full max-w-3xl mx-auto p-10 bg-white rounded-3xl shadow-2xl border border-gray-100">
        
        {/* 个人介绍区域 */}
        <div className="text-center">
          {/* 标题 */}
          <div className="mb-8">
            <h1 class="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              我是 Rebecca
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <span className="text-sm font-medium">互联网程序员转型创业者</span>
              <Star className="w-4 h-4 fill-current text-yellow-400" />
            </div>
          </div>

          {/* 个人头像 */}
          <div className="relative mb-8">
            <img 
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" 
              alt="Rebecca个人头像"
              className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl ring-4 ring-blue-100"
            />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-600 text-white rounded-full p-2 shadow-lg">
                <Heart className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* 服务特点卡片 */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 text-sm">个人成长指导</h3>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
              <Heart className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 text-sm">1对1深度交流</h3>
            </div>
            <div className="bg-green-50 p-4 rounded-xl border border-green-100">
              <Star className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-800 text-sm">量身定制建议</h3>
            </div>
          </div>

          {/* 介绍内容 */}
          <div className="space-y-6 text-left max-w-2xl mx-auto">
            {/* 第一段：个人简介与背景 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border-l-4 border-blue-400">
              <p className="text-gray-700 leading-relaxed text-lg">
                我是一位互联网程序员转型创业者，专注于个人成长指导。我坚信，在个性化的指导和支持下，每个人都能释放潜力，实现目标。
              </p>
            </div>

            {/* 第二段：1对1交流服务介绍 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border-l-4 border-purple-400">
              <p className="text-gray-700 leading-relaxed text-lg">
                我的1对1交流服务旨在为你提供一个安全、私密且高效的空间。我们将共同深入探讨你的挑战、困惑和愿望。无论你是想制定清晰的职业发展路径，解决生活中的难题，还是单纯需要一个倾听者，我都会提供量身定制的建议和支持。
              </p>
            </div>

            {/* 第三段：服务优势与行动号召 */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-2xl border-l-4 border-green-400">
              <p className="text-gray-700 leading-relaxed text-lg">
                每一次的交流都是一次成长的机会。我将以开放、真诚和专业的态度陪伴你。如果你准备好开启这段旅程，请随时点击下面的按钮联系我。我期待着与你对话。
              </p>
            </div>
          </div>
        </div>

        {/* 联系/购买按钮区域 */}
        <div className="mt-10 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">准备开始你的成长之旅？</h3>
            <p className="text-gray-600 mb-4">让我们一起探索你的无限可能</p>
            
            <a 
              href="mailto:rebecca9715@163.com?subject=预约1对1交流&body=你好Rebecca，我希望预约1对1交流服务。"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
            >
              <Mail className="w-5 h-5" />
              预约1对1交流
            </a>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            点击按钮将自动打开邮件客户端，你也可以直接发送邮件至：
            <span className="font-semibold text-blue-600">rebecca9715@163.com</span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;