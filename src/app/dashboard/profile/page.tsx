import { getCurrentUser } from "@/lib/auth";
import {
  Card,
  PageHeader,
} from "@/components";


export default async function ProfilePage() {
  const user = await getCurrentUser();

  if (!user) {
    return null;
  }

  const membership = user.memberships[0];

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
              Organization
            </p>
            <p className="font-medium">
              {membership?.organization.name}
            </p>
          </div>

          <div>
            <p className="text-sm text-[var(--muted-foreground)]">
              Role
            </p>
            <p className="font-medium">
              {membership?.role}
            </p>
          </div>

        </div>
      </Card>
    </>
  );
}