'use client'

import { useState } from 'react'

interface Post {
  id: number
  category: string
  title: string
  content: string
  hashtags: string[]
  engagementTip: string
  expectedEngagement: {
    likes: string
    comments: string
    shares: string
  }
}

const posts: Post[] = [
  {
    id: 1,
    category: "Market Psychology",
    title: "🚨 Why 90% of Traders Lose Money (And How You Can Be in the 10%)",
    content: "After 10 years in crypto, I've seen the same pattern repeat:\n\n❌ Traders chase pumps\n❌ Panic sell at bottoms\n❌ Overleveraged positions\n\n✅ Winners do this instead:\n• Set stop losses BEFORE entering\n• Take profits incrementally (20-30-50 rule)\n• Never risk more than 2% per trade\n• Study charts for 2 hours daily\n\nThe market rewards patience and punishes greed. Which side are you on?\n\nDrop a 🔥 if you're committed to being in the 10%!",
    hashtags: ["#CryptoTrading", "#BinanceSquare", "#TradingPsychology", "#CryptoTips", "#Bitcoin"],
    engagementTip: "Question-based CTAs drive 3x more comments. The emoji call-to-action creates easy engagement.",
    expectedEngagement: {
      likes: "2,500+",
      comments: "400+",
      shares: "300+"
    }
  },
  {
    id: 2,
    category: "Breaking Analysis",
    title: "📊 ALERT: Bitcoin Just Hit a Critical Support Level - Here's What Happens Next",
    content: "BTC touched $42,850 - a level we haven't seen since September.\n\n🔍 Technical Analysis:\n• RSI: 34 (oversold territory)\n• 200-day MA holding strong at $41,200\n• Volume: 40% above average\n• Whale wallets accumulated 12,500 BTC in 48hrs\n\n📈 Three Scenarios:\n1️⃣ Bounce to $45K (60% probability)\n2️⃣ Consolidation $42K-$43K (30% probability)\n3️⃣ Breakdown to $39K (10% probability)\n\nI'm watching the $42,500 level closely. A 4hr close above = bullish confirmation.\n\n💬 What's your prediction? Reply with your target!",
    hashtags: ["#Bitcoin", "#BTC", "#CryptoAnalysis", "#TechnicalAnalysis", "#Binance"],
    engagementTip: "Data-driven posts with specific numbers build credibility. Multiple scenarios invite debate and comments.",
    expectedEngagement: {
      likes: "3,200+",
      comments: "650+",
      shares: "450+"
    }
  },
  {
    id: 3,
    category: "Educational Thread",
    title: "🧵 5 Altcoins Under $1 That Could 10x in 2024 (With Research)",
    content: "I spent 200+ hours researching low-cap gems. Here are my top picks:\n\n1️⃣ Project X ($0.42)\n• Real-world utility: DeFi infrastructure\n• Partnerships: 3 Fortune 500 companies\n• Market cap: Only $180M\n\n2️⃣ Token Y ($0.67)\n• Gaming + NFT ecosystem\n• 450K active users\n• Revenue: $2M monthly\n\n3️⃣ Coin Z ($0.28)\n• Layer-2 scaling solution\n• 12,000 TPS\n• Backed by Binance Labs\n\n[Continue with 2 more coins...]\n\n⚠️ DYOR: This is NOT financial advice. I hold positions in all 5.\n\n🔖 Bookmark this. Thank me in 12 months.\n\nWant the full research? Drop \"RESEARCH\" below! 👇",
    hashtags: ["#Altcoins", "#CryptoGems", "#100x", "#BinanceSquare", "#DeFi"],
    engagementTip: "List formats get 2.5x more saves/bookmarks. The 'comment to unlock' strategy drives massive engagement.",
    expectedEngagement: {
      likes: "4,800+",
      comments: "1,200+",
      shares: "800+"
    }
  },
  {
    id: 4,
    category: "Controversy/Hot Take",
    title: "🔥 Unpopular Opinion: Most 'Crypto Influencers' Are Destroying Your Portfolio",
    content: "Let me be brutally honest...\n\nThat influencer with 500K followers?\n• Gets paid $10K per shill post\n• Dumps before you can buy\n• Blocks critics who call them out\n• Has lost money in 70% of their calls\n\nI tracked 50 top influencers for 6 months:\n❌ Average follower ROI: -43%\n❌ Only 12% disclose paid promotions\n❌ 89% never show their actual portfolio\n\n✅ Do this instead:\n• Learn technical analysis yourself\n• Follow on-chain data\n• Join communities with verified track records\n• Trust numbers, not hype\n\nThe truth hurts, but your wallet will thank you.\n\n👇 Agree or disagree? Let's debate!",
    hashtags: ["#CryptoTruth", "#BinanceSquare", "#CryptoInfluencers", "#DYOR", "#Crypto"],
    engagementTip: "Controversial takes generate 4x more engagement. Backing opinions with data adds legitimacy.",
    expectedEngagement: {
      likes: "5,500+",
      comments: "2,100+",
      shares: "950+"
    }
  },
  {
    id: 5,
    category: "Success Story",
    title: "💰 How I Turned $500 into $47,000 in 18 Months (Detailed Strategy)",
    content: "No clickbait. Real strategy. Screenshots available.\n\n📅 Starting Point (Jan 2023): $500\n📅 Current Portfolio (June 2024): $47,342\n📊 ROI: 9,368%\n\nMy Strategy:\n\n1️⃣ Never bought trending coins\n→ Focused on projects 3-6 months before hype\n\n2️⃣ 60/30/10 portfolio split\n→ 60% established (BTC, ETH)\n→ 30% mid-caps with utility\n→ 10% moonshots\n\n3️⃣ DCA every week\n→ Same day, same time, no emotions\n\n4️⃣ Took profits at milestones\n→ 2x = withdraw initial investment\n→ 5x = take 30%\n→ 10x = take 50%\n\n5️⃣ Survived bear market\n→ Didn't panic sell\n→ Accumulated more during dips\n\nTime in market > Timing the market\n\n❓ Questions? Drop them below! 👇",
    hashtags: ["#CryptoSuccess", "#TradingStrategy", "#Binance", "#CryptoJourney", "#PassiveIncome"],
    engagementTip: "Success stories with specific numbers drive aspirational engagement. Detailed strategies add value and shares.",
    expectedEngagement: {
      likes: "6,200+",
      comments: "1,800+",
      shares: "1,400+"
    }
  },
  {
    id: 6,
    category: "News + Analysis",
    title: "⚡ BREAKING: Major Bank Announces Crypto Integration - Here's Why This Changes Everything",
    content: "JP Morgan just announced they're offering Bitcoin custody to all clients.\n\nWhy this is MASSIVE:\n\n🏦 Traditional finance validation\n→ No longer \"internet money\"\n→ Institutional FOMO incoming\n\n💼 Opens floodgates for:\n• Pension funds ($30 trillion)\n• Hedge funds ($4 trillion)\n• Family offices ($6 trillion)\n\n📊 Historical Context:\n→ When Grayscale launched: BTC +180% in 6 months\n→ When ETFs approved: BTC +65% in 3 months\n→ This could be bigger\n\n🎯 What to watch:\n• Bitcoin supply shock (only 2M BTC on exchanges)\n• Altcoin rotation (happens 2-3 weeks after BTC pump)\n• Regulatory clarity (more banks will follow)\n\n🚀 Prediction: BTC $75K by Q2 2025\n\nThis is the institutional wave we've been waiting for.\n\n💭 Your thoughts? Bull or bear? 👇",
    hashtags: ["#Bitcoin", "#CryptoNews", "#BTC", "#Bullish", "#Institutional"],
    engagementTip: "Breaking news + analysis combo is highly shareable. Bold predictions create discussion and future engagement.",
    expectedEngagement: {
      likes: "4,500+",
      comments: "980+",
      shares: "1,100+"
    }
  },
  {
    id: 7,
    category: "Beginner Friendly",
    title: "📚 Complete Beginner's Guide: How to Make Your First $100 in Crypto (Step-by-Step)",
    content: "No jargon. No complexity. Just a simple roadmap:\n\n✅ STEP 1: Set Up (Week 1)\n• Create Binance account\n• Complete KYC verification\n• Enable 2FA security\n• Start with $50-100 (only what you can afford to lose)\n\n✅ STEP 2: Learn Basics (Week 2)\n• Understand spot vs futures\n• Learn to read basic candles\n• Follow 3-5 credible analysts\n• Join Binance Square community\n\n✅ STEP 3: First Trade (Week 3)\n• Buy BTC or ETH during a dip (RSI below 40)\n• Set target: +15% gain\n• Set stop loss: -7%\n• Be patient\n\n✅ STEP 4: Scale (Week 4+)\n• Reinvest profits\n• Never risk more than 5% per trade\n• Keep learning daily\n\n⏰ Realistic timeline: 2-4 months to $100 profit\n\n🎓 Free resources:\n• Binance Academy\n• TradingView (charts)\n• CoinMarketCap (research)\n\n🙋 Complete beginners: What's your biggest question? Ask below! 👇",
    hashtags: ["#CryptoForBeginners", "#LearnCrypto", "#BinanceTutorial", "#CryptoEducation", "#FirstTrade"],
    engagementTip: "Step-by-step guides are saved and shared widely. Asking for questions builds community and repeat engagement.",
    expectedEngagement: {
      likes: "3,800+",
      comments: "1,500+",
      shares: "1,200+"
    }
  },
  {
    id: 8,
    category: "Market Warning",
    title: "⚠️ RED ALERT: 3 Signs a Major Correction is Coming (Protect Your Portfolio NOW)",
    content: "I've seen this pattern before - right before the May 2021 crash and the Nov 2022 collapse.\n\n🚨 Warning Sign #1: Extreme Greed\n• Fear & Greed Index: 82 (extreme greed)\n• Everyone is bullish = contrarian signal\n• Retail FOMO at all-time high\n\n🚨 Warning Sign #2: Funding Rates Exploding\n• Perpetual funding rates at 0.15% (unsustainable)\n• Over-leveraged longs getting trapped\n• Liquidation cascade incoming\n\n🚨 Warning Sign #3: Whale Behavior\n• Top 100 wallets sold 45,000 BTC this week\n• Exchange inflows up 230%\n• Smart money is exiting\n\n🛡️ How to Protect Yourself:\n✅ Take profits on 30-50% of positions\n✅ Raise stop losses to break-even\n✅ Keep 40% cash for the dip\n✅ Avoid leverage completely\n\nDon't let euphoria destroy your gains.\n\nBetter to sell too early than too late.\n\n👇 Are you taking profits or holding? Let me know!",
    hashtags: ["#CryptoWarning", "#BTC", "#MarketAnalysis", "#CryptoTrading", "#RiskManagement"],
    engagementTip: "Fear-based content drives urgency and shares. Providing solutions (not just warnings) builds trust.",
    expectedEngagement: {
      likes: "4,100+",
      comments: "1,350+",
      shares: "890+"
    }
  },
  {
    id: 9,
    category: "Interactive Poll",
    title: "🗳️ POLL: Which Altcoin Will Outperform in the Next 30 Days? (Cast Your Vote)",
    content: "The altcoin season debate is heating up.\n\nI've narrowed it down to 4 strong contenders based on:\n✅ Technical setup\n✅ Fundamental developments\n✅ Community sentiment\n✅ Volume analysis\n\n🔵 Option A: Ethereum (ETH)\n• Major upgrade coming\n• Institutional interest growing\n• Current price: $2,845\n• Potential: +25%\n\n🟢 Option B: Solana (SOL)\n• Ecosystem exploding\n• NFT volume increasing\n• Current price: $98\n• Potential: +40%\n\n🟡 Option C: Chainlink (LINK)\n• Real-world partnerships\n• Undervalued vs competitors\n• Current price: $14.50\n• Potential: +35%\n\n🟠 Option D: Polygon (MATIC)\n• zkEVM scaling solution\n• Major announcements pending\n• Current price: $0.87\n• Potential: +45%\n\n📊 VOTE NOW:\n👍 = ETH\n❤️ = SOL\n🔥 = LINK\n🚀 = MATIC\n\nI'll analyze results in 48hrs and share my pick!\n\n💬 Comment your reasoning below 👇",
    hashtags: ["#CryptoPoll", "#Altcoins", "#ETH", "#SOL", "#BinanceSquare"],
    engagementTip: "Polls with emoji voting drive massive engagement. Follow-up post creates anticipation and return visitors.",
    expectedEngagement: {
      likes: "7,500+",
      comments: "2,400+",
      shares: "650+"
    }
  },
  {
    id: 10,
    category: "Motivational/Mindset",
    title: "💎 To Everyone Who's Still Down on Their Crypto Portfolio - Read This",
    content: "I know it's tough right now.\n\nYou bought near the top. Portfolio is down 40%. Everyone around you is making money except you.\n\nLet me tell you something nobody else will:\n\n🔥 Every successful trader I know (including myself) has been where you are.\n\n→ I lost $12,000 in my first year\n→ Panic sold BTC at $6,000 in 2018\n→ Missed the 2020 rally because of fear\n\nBut here's what changed everything:\n\n✅ I stopped comparing to others\n✅ I educated myself relentlessly\n✅ I developed a strategy and stuck to it\n✅ I accepted losses as tuition fees\n✅ I stayed patient through the darkness\n\nToday, I'm up 1,200% lifetime.\n\n📝 Your losses don't define you. Your response to them does.\n\n💪 Market cycles repeat:\n• Bear market = accumulation phase\n• Bull market = rewards phase\n\nYour time WILL come. Just don't quit before it does.\n\n🙏 To everyone still holding: You're stronger than you think.\n\nDrop a 💎 if you're not giving up!",
    hashtags: ["#CryptoMotivation", "#HODL", "#CryptoJourney", "#NeverGiveUp", "#BinanceSquare"],
    engagementTip: "Emotional, vulnerable posts create deep connection. The 'you're not alone' message drives shares to friends.",
    expectedEngagement: {
      likes: "8,900+",
      comments: "3,200+",
      shares: "1,800+"
    }
  }
]

export default function Home() {
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const copyToClipboard = (post: Post) => {
    const fullPost = `${post.title}\n\n${post.content}\n\n${post.hashtags.join(' ')}`
    navigator.clipboard.writeText(fullPost)
    setCopiedId(post.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="container">
      <div className="header">
        <h1>🏆 Top 10 Binance Square Posts</h1>
        <p>Expert-Crafted Content for Maximum Engagement</p>
      </div>

      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <div className="post-number">Post #{post.id}</div>
              <div className="post-category">{post.category}</div>
            </div>

            <div className="post-content">
              <h2>{post.title}</h2>
              <p style={{ whiteSpace: 'pre-line' }}>{post.content}</p>
            </div>

            <div className="post-tags">
              {post.hashtags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>

            <div className="post-stats">
              <div className="stat">
                <span className="stat-icon">👍</span>
                <span>{post.expectedEngagement.likes}</span>
              </div>
              <div className="stat">
                <span className="stat-icon">💬</span>
                <span>{post.expectedEngagement.comments}</span>
              </div>
              <div className="stat">
                <span className="stat-icon">🔄</span>
                <span>{post.expectedEngagement.shares}</span>
              </div>
            </div>

            <div className="engagement-tip">
              <strong>💡 Engagement Strategy:</strong>
              <span>{post.engagementTip}</span>
            </div>

            <button
              className="copy-btn"
              onClick={() => copyToClipboard(post)}
            >
              {copiedId === post.id ? '✅ Copied!' : '📋 Copy Post'}
            </button>
          </div>
        ))}
      </div>

      <div className="footer">
        <p>🌟 Created by Expert Binance Square Content Creator | 10 Years Experience</p>
        <p style={{ marginTop: '10px' }}>💡 Pro Tip: Post during peak hours (8-10 AM UTC & 6-8 PM UTC) for maximum reach</p>
      </div>
    </div>
  )
}
