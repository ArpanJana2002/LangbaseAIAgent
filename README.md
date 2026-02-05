
# Langbase RAG AI Agent 🚀

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20-green.svg)](https://nodejs.org/)
[![Langbase](https://img.shields.io/badge/Langbase-AI-orange.svg)](https://langbase.com)

Serverless **Retrieval-Augmented Generation (RAG)** agent with **Langbase Memory** for FAQ answering.

**Live Demo**: [GitHub Repo](https://github.com/ArpanJana2002/LangbaseAIAgent)

## ✨ **Features**

- ✅ **RAG Pipeline**: Memory retrieval + LLM generation
- ✅ **Cohere Embeddings**: `cohere:embed-multilingual-v3.0` (FREE tier)
- ✅ **Langbase Pipes**: Serverless AI inference
- ✅ **TypeScript**: Fully typed, production-ready
- ✅ **Windows Dev**: Docker + minikube ready

## 🚀 **Quick Start**

```bash
# Clone & install
git clone https://github.com/ArpanJana2002/LangbaseAIAgent.git
cd LangbaseAIAgent
npm install

# 1. Create .env
cp .env.example .env
# Add LANGBASE_API_KEY=lb_secret_xxx...

# 2. Setup memory & upload FAQ
npx tsx create-memory.ts
npx tsx upload-docs.ts

# 3. Run RAG agent
npx tsx index.ts
```

**Output:**
```
Found 1 chunks
✅ Answer: "To get started: 1. Sign up at langbase.com 2. Generate API key..."
```

## 🏗️ **Architecture**

```
User Query → Memory Retrieve → System Prompt → Langbase Pipe → Answer
     ↓              ↓              ↓              ↓           ↓
"How do I..."  [FAQ chunks]   "Use ONLY this  "ai-support-  "1. Sign up at
                              context"         agent"       langbase.com..."
```

## 📁 **Project Structure**

```
├── src/
│   ├── agent.ts          # RAG logic (retrieve + generate)
│   ├── index.ts          # Main entrypoint
│   └── types.ts          # TypeScript interfaces
├── docs/
│   └── langbase-faq.txt  # Knowledge base
├── .env.example          # Environment template
├── .gitignore            # Node.js best practices
├── package.json          # Dependencies
└── tsconfig.json         # TypeScript config
```

## 🔧 **Setup Instructions**

### **1. Prerequisites**
- Node.js 20+
- Langbase account: [langbase.com](https://langbase.com)
- GitHub repo

### **2. Environment**
```bash
# .env
LANGBASE_API_KEY=lb_secret_your_key_here
```

### **3. Langbase Dashboard Setup**
1. **Memory**: `knowledge-base` (Cohere embeddings)
2. **Pipe**: `ai-support-agent` (Cohere `command-a-03-2025`)
3. **Documents**: `langbase-faq.txt` ✅

### **4. Development**
```bash
npm run dev     # Watch mode
npm run build   # TypeScript compile
npm run test    # Run tests
```

## 🛠️ **Key Files**

| File | Purpose | Status |
|------|---------|--------|
| `create-memory.ts` | Setup vector DB | ✅ Working |
| `upload-docs.ts` | Load FAQ knowledge | ✅ Working |
| `agent.ts` | RAG pipeline | ✅ Working |
| `index.ts` | Test runner | ✅ Working |

## 🔍 **How RAG Works**

```typescript
// 1. Retrieve relevant chunks
const chunks = await runMemoryAgent("How do I get started?");
// → Found 1 chunks

// 2. Generate answer with context
const answer = await runAiSupportAgent({ chunks, query });
// → "1. Sign up at langbase.com..."
```

## ⚙️ **Configuration**

| Setting | Value | Purpose |
|---------|-------|---------|
| `topK: 2` | Retrieval | Max chunks returned |
| `cohere:embed-multilingual-v3.0` | Embeddings | FREE multilingual |
| `command-a-03-2025` | LLM | Current Cohere model |

## 🚀 **Production Deployment**

```bash
# Vercel (serverless)
vercel --prod

# Docker
docker build -t rag-agent .
docker run -p 3000:3000 rag-agent
```

## 🤝 **Contributing**

1. Fork repo
2. `git checkout -b feature/xyz`
3. `npm test`
4. `git push origin feature/xyz`
5. PR to `main`



## 🙏 **Acknowledgments**

- [Langbase](https://langbase.com) - Serverless AI platform
- [Cohere](https://cohere.com) - Embeddings & LLMs
- Built by **Arpan Jana** for learning RAG agents
```

## **🚀 Deploy Documentation:**

```bash
# 1. Save as README.md
# 2. Commit & push
git add README.md
git commit -m "Add complete project documentation"
git push

# 3. GitHub renders automatically ✨
```

