export type Accordion = {
    title: string
    icon: React.ReactNode
    isOpen: boolean
    onToggle: () => void
    children: React.ReactNode
  }