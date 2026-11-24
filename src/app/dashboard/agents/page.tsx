import {
  Card,
  Button,
  PageHeader,
} from "@/components";


export default function AgentsPage() {
  return (
    <>
      <PageHeader
        title="AI Agents"
        description="Create automated AI workflows."
      />


      <Card>

        <div className="flex justify-between">

          <p>
            No AI agents created.
          </p>


          <Button>
            Create Agent
          </Button>

        </div>

      </Card>
    </>
  );
}