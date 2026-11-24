import {
  Card,
  PageHeader,
} from "@/components";


export default function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="Manage workspace preferences."
      />


      <Card>

        <div className="space-y-4">

          <div>
            Workspace Settings
          </div>


          <div>
            Notification Settings
          </div>


          <div>
            Security Settings
          </div>

        </div>

      </Card>
    </>
  );
}