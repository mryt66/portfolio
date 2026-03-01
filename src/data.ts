import type { SkillCategory, Interest } from "./types";

export const skills: SkillCategory[] = [
  {
    label: "ML / DL Frameworks",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face"],
  },
  {
    label: "Data & Vision",
    items: ["pandas", "NumPy", "OpenCV", "scikit-image", "SpaCy"],
  },
  {
    label: "LLM & Agents",
    items: ["Pydantic AI", "LangChain", "Langfuse", "RAGAS"],
  },
  {
    label: "Inference & APIs",
    items: ["vLLM", "Ollama", "OpenAI", "Google GenAI", "Mistral AI", "MCPs"],
  },
  {
    label: "Vector Databases",
    items: ["FAISS", "ChromaDB", "Weaviate"],
  },
  {
    label: "DevOps & Backend",
    items: ["Docker", "Kubernetes", "Azure DevOps", "CI/CD", "FastAPI"],
  },
  {
    label: "Cloud & Storage",
    items: ["Azure AI", "Azure ML", "Azure Kubernetes Service", "S3"],
  },
  {
    label: "Monitoring & MLOps",
    items: ["Grafana", "OpenTelemetry", "Wandb", "MLflow", "Portainer"],
  },
  {
    label: "Fine-tuning",
    items: ["Unsloth", "Nvidia NeMo", "LLaMA-Factory", "LoRA"],
  },
  {
    label: "Development Tools",
    items: ["Git", "GitLab", "Jira"],
  },
  {
    label: "Databases & OS",
    items: ["SQL", "NoSQL", "Linux"],
  },
];

export const interests: Interest[] = [
  { name: "Running", icon: "run" },
  { name: "Bouldering", icon: "boulder" },
  { name: "Board Games", icon: "board" },
  { name: "Cooking", icon: "cook" },
];

export const projectsData = [
  {
    title: "Assembler RAG Chat",
    description:
      "FastAPI backend providing Retrieval-Augmented Generation chat over a knowledge base built from PDF and .prg source files. Embeds document chunks with SentenceTransformer, retrieves via FAISS, and queries Google Gemini for responses. Conversations are persisted in SQLite. Includes Docker deployment and optional Langfuse tracing.",
    tags: ["FastAPI", "FAISS", "Gemini", "Docker", "RAG", "SentenceTransformer"],
    repo: "https://github.com/mryt66/Assembler_rag",
    expandable: true,
    images: ["projects/assembler_rag.png"],
  },
  {
    title: "AAC Detection — Explainable AI Pipeline",
    description:
      "Automated medical image analysis pipeline for detecting and scoring aortic arch calcifications (AAC) on radiological images. A two-stage approach first localizes the aortic arch with YOLO, then classifies the calcification degree with VGG19. The pipeline includes multiple explainability methods to interpret model predictions.",
    tags: ["YOLO", "VGG19", "LIME", "Grad-CAM", "Medical Imaging", "XAI", "Python"],
    repo: "",
    expandable: true,
    images: ["projects/aac-pipeline.png"],
    xaiMethods: [
      {
        name: "LIME",
        desc: "Generates local interpretable explanations by perturbing input regions and observing output changes, highlighting which areas most influence the classification.",
      },
      {
        name: "Grad-CAM",
        desc: "Uses gradient information flowing into the final convolutional layer to produce a heatmap highlighting important regions for the predicted class.",
      },
      {
        name: "Saliency Maps",
        desc: "Computes the gradient of the output with respect to the input image, revealing which pixels have the most influence on the prediction.",
      },
      {
        name: "KernelSHAP",
        desc: "Applies Shapley values via a weighted linear regression to attribute each superpixel's contribution to the final prediction.",
      },
      {
        name: "Integrated Gradients",
        desc: "Accumulates gradients along a straight path from a baseline to the input, providing an axiomatic attribution of each pixel's importance.",
      },
    ],
  },
  {
    title: "Flappy Bird — DQN Agent",
    description:
      "A Deep Q-Network agent trained in a Unity environment to play Flappy Bird. Unity provides the game simulation while Python handles the neural network and learning loop. Includes experiment tracking with Wandb and a Pygame visualization.",
    tags: ["PyTorch", "DQN", "Unity", "Wandb", "Python"],
    repo: "https://github.com/mryt66/Flappy-bird-rl",
    expandable: true,
    images: ["projects/Flappy_bird.gif"],
  },
  {
    title: "Multimodal RAG — The Batch",
    description:
      "End-to-end RAG system with multimodal capabilities (text + images) built for The Batch news articles. Features text-only, image-only, or combined queries with smart weighting, a Streamlit chat interface, automatic RAGAS evaluation, and an analytics dashboard. Powered by ChromaDB, CLIP, and Gemini 2.5 Flash.",
    tags: ["ChromaDB", "CLIP", "Gemini", "Streamlit", "RAG", "RAGAS"],
    repo: "https://github.com/mryt66/MM-RAG-The-batch",
    demo: "https://www.youtube.com/watch?v=VPcpVOfJV_8",
    expandable: true,
    images: ["projects/mm_rag.png"],
  },
  {
    title: "ATTA — Voice Chatbot",
    description:
      "Voice chatbot that receives audio input, transcribes it with a fine-tuned Whisper model (marcsixtysix/whisper-base-pl), processes the text through a fine-tuned Gemma-3 model via Ollama, and returns synthesized speech via edge_tts. Full pipeline running on FastAPI.",
    tags: ["Whisper", "Ollama", "FastAPI", "edge_tts", "Fine-tuning", "Gemma"],
    repo: "https://github.com/mryt66/ATTA",
    expandable: true,
    images: [],
  },
];
