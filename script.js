const {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  Stack,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} = MaterialUI;

const navItems = [
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "140+", label: "hours saved through audit workflow automation" },
  { value: "180+", label: "audit workpapers delivered with quality and speed" },
  { value: "1,100+", label: "attendees supported through event operations" },
];

const highlights = [
  {
    icon: "insights",
    title: "Audit Workflow Automation",
    description:
      "Built Excel-based tools that improved team efficiency by 30%, reduced repetitive effort, and saved more than 140 hours across 11 months at EY.",
    tags: ["Excel Automation", "Audit", "Efficiency"],
  },
  {
    icon: "groups",
    title: "Large-Scale Event Leadership",
    description:
      "Led planning, speaker coordination, and operational execution for high-visibility student events and startup-focused showcases.",
    tags: ["Operations", "PR", "Coordination"],
  },
  {
    icon: "edit_square",
    title: "Creative Expression",
    description:
      "Balanced analytical work with published Hindi writing, showing a communication style that is thoughtful, expressive, and memorable.",
    tags: ["Writing", "Poetry", "Communication"],
  },
];
