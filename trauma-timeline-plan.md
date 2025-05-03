# Trauma Timeline App - Development Plan

## 1. App Concept
- Interactive, scrollable timeline of life events
- Ability to add events and periods
- Scrollable zoom in/out functionality for different life periods
- Personal reflective tool for understanding life journey

## 2. Technical Stack
- Frontend: Next.js with TypeScript
- State Management: Context API
- Styling: Tailwind CSS
- Data Storage: Local storage
- Animations: Framer Motion
- Development Environment: Nix devshells for reproducible builds and dependency management

## 3. Core Features (MVP)
- Timeline creation and customization
- Event/period addition with details (title, date, description, emotions)
- Scrollable zoom controls for timeline navigation
- Visual categorization of events

## 4. Data Model
```typescript
interface TimelineEvent {
  id: string;
  title: string;
  startDate: Date;
  endDate?: Date; // Optional for periods
  description: string;
  tags: string[];
  emotionalImpact?: number; // 1-10 scale
  color?: string;
}
```

## 5. Implementation Phases
### Phase 1: MVP
- Basic timeline visualization
- Simple event creation
- Timeline navigation
- Local storage integration
- Nix devshell setup for development environment

## 6. UI Components
- Timeline Container
- Event Cards
- Navigation Controls
- Event Editor
- Timeline Scale