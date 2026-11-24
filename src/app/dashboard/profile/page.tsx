import { getCurrentUser } from "@/lib/auth";
import {
  Card,
  PageHeader
} from "@/components";


export default async function ProfilePage() {
  const user = await getCurrentUser();
  return (
    <>
      <PageHeader
        title="Profile"
        description="Manage your personal information."
      />


      <Card>

        <div className="space-y-4">

          <div>
            <p className="text-sm text-[var(--muted-foreground)]">
              Name
            </p>

            <p className="font-medium">
              {user.name}
            </p>
          </div>


          <div>
            <p className="text-sm text-[var(--muted-foreground)]">
              Email
            </p>

            <p className="font-medium">
              {user.email}
            </p>
          </div>

          <div>
            <p className="text-sm text-[var(--muted-foreground)]">
              Role
            </p>

            <p className="font-medium">
              {user.role}
            </p>
          </div>

        </div>

      </Card>
    </>
  );
}