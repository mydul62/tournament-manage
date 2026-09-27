import { redirect } from "next/navigation";

export default async function FixturesRedirect({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  redirect(`/tournaments/${resolvedParams.id}`);
}
