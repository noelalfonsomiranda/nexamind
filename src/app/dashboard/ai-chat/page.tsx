import {
  Card,
  PageHeader
} from "@/components";


export default function AIChatPage() {
  return (
    <>
      <PageHeader
        title="AI Chat"
        description="Ask questions using your organization's knowledge."
      />


      <Card>

        <div className="h-[500px] flex items-center justify-center text-[var(--muted-foreground)]">

          Start a conversation

        </div>

      </Card>

    </>
  );
}