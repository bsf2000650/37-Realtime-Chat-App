import Button from "@/components/ui/Button";
import { db } from "@/lib/db"

export default async function Home() {
  await db.set('slam','slam')
  return (
    <>
        This is home page
    </>
  );
}
