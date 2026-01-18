import ml from './imgs/ml.png'
import tools from './imgs/tools.png'
import agents from './imgs/agents.png'
import edu from './imgs/edu.png'


export const  personal_data = [{content:"Masoud Karimi", id:"name"}, {id:"role", content:"Generative AI Engineer"},{id:"Education", at:"Politecnico di Torino", content:"M.Sc. in Computer Engineering - AI & Data Analytics @ Politecnico di Torino"} , {id:"Email", content:"itsmasoudkarimi@gmail.com"}, {id:"Location", content:"Turin, Italy"}]
export const profile = {
  name: "Masoud Karimi",
  role: "Generative AI Engineer",
  profile: "I’m a multidisciplinary AI specialist with over two years of experience designing and building intelligent, ML-driven software and AI agents from concept to launch.."
}

export const education = {id:"Education", image:edu, content:"Education: M.Sc. in Computer Engineering - AI & Data Analytics", at:"Politecnico di Torino"}
export const left_side = {
  Contact: [
    {id: "Email", content: "itsmasoudkarimi@gmail .com"}, 
    {id: "Address", content:"Turin, Italy"},
  ],
  Education: [
    {id: "M.Sc.", content:"Computer Engineering - AI & Data Analytics" , at:" at Politecnico of Turin"},
    {id: "B.Sc.", content:"Computer Engineering" , at:"at Persian Golf University"},
  ],
  Language: [
    {id: "English", content:"Proficional"},
    {id: "Italian", content:"Intermediate"},
  ]
  
}

export const right_content = { 
  Experiences:[
    {
      startDate: "Oct. 2025",
      endDate: "Present",
      company: "Zirak (Collaborator @Reply)",
      role: "Generative AI Engineer",
      employmentType: "Full-Time",
      workMode: "Hybrid",
      description:
        "Designed and implemented AI agents for automated test-code generation and QA workflows, while developing backend services to orchestrate multi-agent systems. Supported the deployment of AI agents and services on Microsoft Azure and collaborated closely with engineering teams to ensure scalable, reliable, and maintainable AI solutions.",
      location: "Turin, Italy",
      bulet_point: [
        "Architected a pipeline to map GitHub repositories into a knowledge graph and vector database for hybrid RAG",
        "Built and deployed containerized AI agents for automated test-code generation",
        "Developed an orchestrator to manage agent execution within multi-agent pipelines",
        "Implemented WebSocket-based real-time communication between backend and frontend services",
        "Applied advanced prompt engineering for LLM-based agents, including Chain-of-Thought, few-shot, and structured prompting",      
        ],
      stack:["Python", "LangGraph", "LangChain", "RAG", "Neo4j", "Vector-database", "Knowledge-Graph", "Docker", "Fastapi", "WebSocket", "Chain-of-Thought", "Prompt engineering", "Multithreaded Programming"],
    },
    {
      startDate: "Sep 2024",
      endDate: "Oct 2025",
      company: "Politecnico di Torino",
      role: "Applied AI Researcher",
      project: "DARE project",
      employmentType: "Full-Time",
      workMode: "Hybrid",
      description:
        "Developed advanced computer vision pipelines combining guided latent diffusion, OOD detection, semantic data augmentation, and explainable AI to improve synthetic data generation, dataset quality, and weakly supervised segmentation.",
      location: "Turin, Italy",
      bulet_point: [
        "Developed and fine-tune prompt-driven high-resolution synthetic image–mask dataset using a guided latent diffusion model (VAE + DDPM), leveraging DDIM sampling and classifier-free guidance to improve image–mask alignment, achieving up to 10% IoU gains across object categories.",
        "Trained a supervised contrastive learning model for out-of-distribution (OOD) detection, reaching 92% F1 score, and used it to clean image pools, inorder to enhancing downstream task accuracy",
        "Designing data augmentation pipeline by leveraging semantic search within the embedding space to retrieve similar samples from unlabeled data, thereby expanding the training dataset for improved generative model performance.",
        "Used Explainable AI (XAI) for pseudo-mask generation in weakly supervised segmentation, combining prototype learning and an affinity network to improve localization and segmentation accuracy. Leading to more reliable pseudo-labels and improved performance in low-annotation segmentation scenarios.",
      ],
      stack:[
        "PyTorch",
        "Torchvision",
        "Python",
        "VLM (Gemma-3)",
        "DDPM",
        "DDIM",
        "VAE",
        "OpenCV",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Scikit-learn",
        "Grad-CAM",
        "Conditional Random Fields (CRFs)",
        "Weights & Biases (W&B)",
        "Spark",
        "HPC",
        "Multi-GPU programming",
        "Mixed-precision modeling",
        "Gradient checkpointing",
      ],
    },
    {
      startDate: "Jun 2025",
      endDate: "Aug 2025",
      company: "Politecnico di Torino",
      role: "Machine Learning Engineer",
      project: "DIVINE Project",
      employmentType: "Full-Time",
      workMode: "Hybrid",
      description:
        "Implemented a transformer-based multi-label image classification approach using set-based prediction, complemented by a curriculum learning strategy to address severe class imbalance and improve performance on complex, long-tailed datasets.",
      location: "Turin, Italy",
      bulet_point: [
        "Implemented a Query2Label (Q2L)-based transformer architecture for multi-label image classification, leveraging set-based prediction to capture inter-label dependencies and contextual relationships in complex image datasets.", 
        "Addressed extreme class imbalance using a custom curriculum learning strategy, progressively increasing training difficulty by reorganizing data sampling based on label frequency and model confidence.",
      ],
      stack:[
        "PyTorch",
        "Torchvision",
        "Python",
        "OpenCV",
        "Pandas",
        "NumPy",
        "TensorBoard",
      ],
    },
  ],
  Skills: 
    {
      "Machine Learning | Deep Learning" : 
      [
        "Synthetic Data Generation using Diffusion Models",
        "Out-of-Distribution (OOD) Detection",
        "Semantic Segmentation (Supervised, Weakly Supervised)",
        "Explainable AI (XAI)",
        "Curriculum learning",
        "Image Classification (multi-class, multi-label)",
        "Model Adaptation: Parameter-efficient fine-tuning (e.g., Adapters, LoRA)",
    ],
      "Agentic AI & Autonomous Systems" : 
      [
        "ReAct-based agents with tool-calling",
        "Retrieval-Augmented Generation (RAG)",
        "Stateful agents with episodic and instructional memory for long-term context retention",
        "Chain-of-Thought and few-shot prompting",
        "Deployed LLMs locally via Ollama",
    ],
      "Frameworks | Tools" : 
      [
        "Python, C, Java, JavaScript, React, PyTorch, TensorFlow, JAX",
        "LangGraph, LangChain",
        "Spark, Hadoop, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn",
        "Neo4j, PostgreSQL, SQLAlchemy (ORM), MongoDB",
        "Node.js, FastAPI, RESTful APIs",
        "Linux, Bash, SLURM, HPC clusters, Docker",
      ]
    },

};