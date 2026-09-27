import { redirect } from "next/navigation";

export default async function StandingsRedirect({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  redirect(`/tournaments/${resolvedParams.id}`);
}
