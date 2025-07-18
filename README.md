# Arsalion AI Agent

**A free, open-source AI super agent powered by Google Gemini Pro, Groq, LocalAI, and SearXNG - with zero subscription costs!**

Built on the robust AgentGPT foundation, Arsalion AI Agent delivers enterprise-grade autonomous AI capabilities using only free and open-source resources. Perfect for developers, researchers, and businesses seeking powerful AI automation without recurring expenses.

## 🚀 Features

### 🆓 **100% Free Infrastructure**
- **Google Gemini Pro**: Advanced LLM capabilities with generous free tier
- **Groq**: Lightning-fast LLM inference (up to 500 tokens/second)
- **LocalAI**: Self-hosted, offline AI models (Phi-3 Mini, CodeLlama)
- **SearXNG**: Privacy-focused, self-hosted search engine
- **No subscription fees or usage limits!**

### 🤖 **Autonomous AI Capabilities**
- Multi-step task planning and execution
- Web search and data gathering
- Document analysis and generation
- Code writing and debugging
- Research and summarization
- Goal-oriented task completion

### 🔧 **Developer-Friendly**
- Docker Compose setup (one command deployment)
- TypeScript/JavaScript frontend (Next.js 13)
- Python backend (FastAPI)
- MySQL database with Prisma ORM
- RESTful API endpoints
- Extensible plugin architecture

### 🎨 **Modern Interface**
- Responsive web interface
- Real-time chat with AI agents
- Task progress visualization
- Custom agent configuration
- Mobile-friendly design

## 🔗 **Comparison with Other Platforms**

| Feature | Arsalion AI | AgentGPT | Manus.im | Scout.new |
|---------|-------------|----------|----------|-----------|
| **Cost** | Free | Freemium | Paid | Paid |
| **AI Providers** | Multiple Free | OpenAI Only | Multiple Paid | Anthropic |
| **Self-Hosted** | ✅ | ✅ | ❌ | ❌ |
| **Offline Capable** | ✅ (LocalAI) | ❌ | ❌ | ❌ |
| **Search Integration** | Free (SearXNG) | Paid (Serper) | Paid | Built-in |
| **Code Generation** | ✅ | ✅ | ✅ | ✅ |
| **Web Automation** | ✅ | Limited | ✅ | ✅ |
| **API Access** | Free & Open | Limited | Paid | Paid |

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- 4GB+ RAM
- 10GB+ disk space

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/Arsalion-AI-Agent.git
cd Arsalion-AI-Agent
```

### 2. One-Command Setup
```bash
chmod +x setup.sh
./setup.sh
```

### 3. Access Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **SearXNG**: http://localhost:8080
- **LocalAI**: http://localhost:8081

## ⚙️ Configuration

### Environment Variables

Create `.env` file in project root:

```bash
# Database
DATABASE_URL="mysql://user:password@arsalion_db:3306/arsalion_ai"

# Authentication
NEXTAUTH_SECRET="your-secure-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# Google Gemini Pro (Free Tier: 15 requests/minute)
GOOGLE_GEMINI_API_KEY="your-gemini-api-key"

# Groq (Free Tier: 14,400 requests/day)
GROQ_API_KEY="your-groq-api-key"

# SearXNG (Self-hosted, no key needed)
SEARXNG_URL="http://searxng:8080"

# LocalAI (Self-hosted, no key needed)
LOCALAI_URL="http://localai:8080"

# Optional: Fallback to OpenAI
OPENAI_API_KEY="your-openai-key"
```

### Free API Keys Setup

#### Google Gemini Pro (Free)
1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Create free account
3. Generate API key
4. Free tier: 15 requests/minute, 1 million tokens/month

#### Groq (Free)
1. Visit [Groq Console](https://console.groq.com/)
2. Sign up for free account
3. Generate API key
4. Free tier: 14,400 requests/day

## 🛠️ Usage Examples

### Basic Agent Interaction
```python
# Start a new agent
agent = await create_agent(
    name="Research Assistant",
    goal="Research the latest developments in AI",
    model="gemini-pro"
)

# Execute task
result = await agent.execute()
```

### Custom Tool Integration
```python
# Add custom search capabilities
agent.add_tool(SearXNGSearch())
agent.add_tool(LocalAIAnalysis())
```

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Next.js       │    │   FastAPI       │    │   MySQL         │
│   Frontend      │◄──►│   Backend       │◄──►│   Database      │
│   (Port 3000)   │    │   (Port 8000)   │    │   (Port 3306)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   SearXNG       │    │   LocalAI       │    │   External APIs │
│   (Port 8080)   │    │   (Port 8081)   │    │   (Gemini/Groq) │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 📊 Performance

### Speed Comparison (Tokens/Second)
- **Groq (Mixtral-8x7B)**: ~500 tokens/sec
- **LocalAI (Phi-3)**: ~50-100 tokens/sec
- **Gemini Pro**: ~30-50 tokens/sec
- **OpenAI GPT-4**: ~20-30 tokens/sec

### Resource Usage
- **RAM**: 2-4GB (depending on LocalAI models)
- **CPU**: 2+ cores recommended
- **Storage**: 5-15GB (models + data)

## 🔒 Security & Privacy

- **Self-hosted**: Complete data control
- **No telemetry**: Zero data collection
- **Offline capable**: LocalAI for sensitive tasks
- **Open source**: Fully auditable code
- **Privacy-first search**: SearXNG with no tracking

## 🐳 Docker Services

| Service | Purpose | Port |
|---------|---------|------|
| `arsalion-frontend` | Next.js web interface | 3000 |
| `arsalion-platform` | FastAPI backend | 8000 |
| `arsalion_db` | MySQL database | 3306 |
| `searxng` | Self-hosted search | 8080 |
| `localai` | Local AI models | 8081 |

## 📚 Development

### Local Development Setup
```bash
# Frontend development
cd next
bun install
bun run dev

# Backend development
cd platform
poetry install
poetry run uvicorn reworkd_platform.main:app --reload

# Database migrations
cd next
bunx prisma migrate dev
```

### Adding New AI Providers
1. Create service in `platform/reworkd_platform/services/`
2. Add configuration in `platform/reworkd_platform/settings.py`
3. Update multi-provider factory
4. Test integration

## 🚨 Troubleshooting

### Common Issues

**Docker containers not starting:**
```bash
docker-compose down -v
docker system prune -f
./setup.sh
```

**LocalAI models not loading:**
```bash
docker-compose logs localai
# Check localai/models/preload_models.yaml
```

**Search not working:**
```bash
curl http://localhost:8080/search?q=test
# Check searxng/settings.yml
```

**Frontend build errors:**
```bash
cd next
rm -rf node_modules .next
bun install
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[AgentGPT](https://github.com/reworkd/AgentGPT)**: Foundation framework
- **[Google Gemini](https://ai.google.dev/)**: Free AI capabilities
- **[Groq](https://groq.com/)**: High-speed inference
- **[LocalAI](https://localai.io/)**: Self-hosted AI models
- **[SearXNG](https://searxng.org/)**: Privacy-focused search

---

**🌟 Star this repository if Arsalion AI Agent helps you build amazing AI applications for free!**

*Built with ❤️ for the open-source AI community*