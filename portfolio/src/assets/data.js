import ml from './imgs/ml.png'
import tools from './imgs/tools.png'
import agents from './imgs/agents.png'
import edu from './imgs/edu.png'

export const profile = {
  name: "Masoud Karimi",
  role: "Generative AI Engineer",
  profile: "Multidisciplinary AI engineer with 2+ years building production-grade intelligent systems — from LLM-powered multi-agent pipelines to advanced computer vision models. I bridge research and engineering: prototype fast, ship clean, scale confidently.",
  github: "https://github.com/itsmasoudkarimi",
  linkedin: "https://linkedin.com/in/masoud-karimi",
  email: "itsmasoudkarimi@gmail.com",
  location: "Turin, Italy",
  highlights: ["LLM Agents", "RAG / KG", "Diffusion Models", "Multi-GPU", "FastAPI", "Docker"],
}

export const stats = [
  { label: "YEARS", value: "2+" },
  { label: "ROLES", value: "2" },
  { label: "PROJECTS", value: "4" },
]

export const education = {
  id: "Education",
  image: edu,
  content: "Education: M.Sc. in Computer Engineering - AI & Data Analytics",
  at: "Politecnico di Torino",
}

export const left_side = {
  Education: [
    {
      id: "M.Sc.",
      content: "Computer Engineering",
      sub: "AI & Data Analytics",
      at: "Politecnico di Torino",
      period: "2022 – 2025",
    },
    {
      id: "B.Sc.",
      content: "Computer Engineering",
      at: "Persian Gulf University",
      period: "2018 – 2022",
    },
  ],
  Language: [
    { id: "English",  content: "Professional",  level: 88 },
    { id: "Italian",  content: "Intermediate",   level: 52 },
    { id: "Persian",  content: "Native",          level: 100 },
  ],
}

export const right_content = {
  Experiences: [
    {
      startDate: "Oct 2025",
      endDate: "Present",
      company: "Zirak — Collaborator @Reply",
      role: "Generative AI Engineer",
      employmentType: "Full-Time",
      workMode: "Hybrid",
      location: "Turin, Italy",
      projects: [
        {
          name: "Test Scripter Agent",
          customer: "Customer A",
          description:
            "Designed and implemented AI agents for automated test-code generation and QA workflows, developing backend services to orchestrate multi-agent systems on Microsoft Azure.",
          bulet_point: [
            "Architected a pipeline mapping GitHub repos into a knowledge graph + vector DB for hybrid RAG",
            "Built and deployed containerised AI agents for automated test-code generation",
            "Developed an orchestrator to manage agent execution within multi-agent pipelines",
            "Implemented WebSocket-based real-time communication between backend and frontend",
            "Applied Chain-of-Thought, few-shot, and structured prompting for LLM-based agents",
          ],
          stack: ["Python", "LangGraph", "LangChain", "RAG", "Neo4j", "Vector DB", "Knowledge Graph", "Docker", "FastAPI", "WebSocket", "Prompt Engineering", "Multithreaded Programming"],
        },
        {
          name: "Test Designer Agent",
          customer: "Customer B",
          description:
            "Built a full-stack AI agent platform with a React frontend, Flask backend, and LangGraph-powered agents communicating in real time over WebSocket, with MCP integration for tool and context management.",
          bulet_point: [
            "Developed the React frontend for real-time agent interaction and conversation UI",
            "Implemented MCP (Model Context Protocol) server and client for structured tool and context management",
            "Built LangGraph-based conversational agents with stateful multi-turn logic",
            "Designed Flask backend services to orchestrate agent execution and handle API routing",
            "Implemented WebSocket layer for low-latency live communication between frontend and agent backend",
          ],
          stack: ["React", "JavaScript", "LangGraph", "Python", "Flask", "WebSocket", "MCP", "LangChain"],
        },
      ],
    },
    {
      startDate: "Sep 2024",
      endDate: "Oct 2025",
      company: "Politecnico di Torino",
      role: "AI Researcher & ML Engineer",
      employmentType: "Full-Time",
      workMode: "Hybrid",
      location: "Turin, Italy",
      projects: [
        {
          name: "DARE Project",
          customer: "Computer Vision & Synthetic Data",
          description:
            "Built advanced computer vision pipelines combining guided latent diffusion, OOD detection, semantic data augmentation, and explainable AI to improve synthetic data generation and weakly supervised segmentation.",
          bulet_point: [
            "Fine-tuned a guided latent diffusion model (VAE + DDPM + DDIM) for synthetic image–mask generation — up to 10% IoU improvement across object categories",
            "Trained a supervised contrastive learning model for OOD detection (92% F1), then used it to clean training pools and boost downstream task accuracy",
            "Designed a semantic-search-based data augmentation pipeline over embedding space to expand training data for generative models",
            "Applied XAI (Grad-CAM, prototype learning, affinity networks) for pseudo-mask generation in weakly supervised segmentation",
          ],
          stack: [
            "PyTorch", "DDPM", "DDIM", "VAE", "VLM (Gemma-3)",
            "OpenCV", "Grad-CAM", "CRFs", "Weights & Biases",
            "Spark", "HPC", "Multi-GPU", "Mixed Precision", "Gradient Checkpointing",
          ],
        },
        {
          name: "DIVINE Project",
          customer: "Multi-label Classification",
          description:
            "Implemented a transformer-based multi-label image classification approach using set-based prediction, with a custom curriculum learning strategy to address severe class imbalance on long-tailed datasets.",
          bulet_point: [
            "Implemented Query2Label (Q2L) transformer for multi-label classification — captures inter-label dependencies via set-based prediction",
            "Designed a curriculum learning strategy that reorganises data sampling by label frequency and model confidence to address extreme class imbalance",
          ],
          stack: ["PyTorch", "Torchvision", "Python", "OpenCV", "Pandas", "NumPy", "TensorBoard"],
        },
      ],
    },
  ],
  Skills: {
    "Machine Learning & Deep Learning": [
      "Synthetic Data Generation — Diffusion Models (DDPM, DDIM, VAE)",
      "Out-of-Distribution (OOD) Detection & Contrastive Learning",
      "Semantic Segmentation — Supervised & Weakly Supervised",
      "Explainable AI (XAI): Grad-CAM, Prototype Learning",
      "Curriculum Learning & Data Augmentation Strategies",
      "Multi-label & Multi-class Image Classification",
      "Parameter-Efficient Fine-Tuning (LoRA, Adapters)",
    ],
    "Agentic AI & LLM Systems": [
      "Multi-agent orchestration with LangGraph / LangChain",
      "Hybrid RAG — vector databases + knowledge graphs (Neo4j)",
      "ReAct agents with tool-calling & stateful memory",
      "Chain-of-Thought, few-shot & structured prompting",
      "Local LLM deployment via Ollama",
    ],
    "Engineering & Infrastructure": [
      "Python, C, Java, JavaScript / React",
      "PyTorch, TensorFlow, JAX — including multi-GPU & mixed precision",
      "FastAPI, Node.js, WebSockets, RESTful APIs",
      "Neo4j, PostgreSQL, SQLAlchemy, MongoDB",
      "Docker, Linux, Bash, SLURM, HPC clusters",
      "Spark, Hadoop, Pandas, NumPy, Scikit-learn",
    ],
  },
}
