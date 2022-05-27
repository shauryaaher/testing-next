import { useRouter } from "next/router";
import Link from "next/link";

export default function DynDyn() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1>Hello, {id}.</h1>
      <Link href="/">
        <a>Go to homepage</a>
      </Link>
    </>
  );
}
