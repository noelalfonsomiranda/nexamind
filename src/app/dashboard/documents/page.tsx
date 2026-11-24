import {
  PageHeader,
  Card,
  Button,
} from "@/components";


export default function DocumentsPage() {
  return (
    <>
      <PageHeader
        title="Documents"
        description="Upload and manage your knowledge base."
      />


      <Card>

        <div className="flex justify-between items-center">

          <p>
            No documents uploaded yet.
          </p>


          <Button>
            Upload Document
          </Button>

        </div>

      </Card>
    </>
  );
}