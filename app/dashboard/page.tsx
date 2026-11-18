import {
  Card,
  PageHeader,
} from "@/components";

export default async function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Overview of your NexaMind workspace."
      />

      <div className="grid gap-6 md:grid-cols-3">

        <Card>
          <h3 className="font-medium">
            Documents
          </h3>

          <p className="mt-2 text-3xl font-bold">
            24
          </p>
        </Card>


        <Card>
          <h3 className="font-medium">
            AI Conversations
          </h3>

          <p className="mt-2 text-3xl font-bold">
            128
          </p>
        </Card>


        <Card>
          <h3 className="font-medium">
            AI Agents
          </h3>

          <p className="mt-2 text-3xl font-bold">
            5
          </p>
        </Card>

      </div>
    </>
  );
}