"use client";
import getCurrentUser from "./actions/getCurrentUser";
import GoogleLoginForm from "./components/auth/GoogleLoginForm";
import LogoutButton from "./components/auth/LogoutButton";
import Link from "next/link";

const Home = async () => {
  const currentUser = await getCurrentUser();
  return currentUser ? (
    <>
      <div>ログイン中: ログインしてた時のUIは後で考える</div>
      <LogoutButton />

      <Link href="/card" color={"black"}>
        カード一覧
      </Link>
    </>
  ) : (
    <GoogleLoginForm />
  );
};

export default Home;
