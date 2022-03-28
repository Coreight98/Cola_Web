import { useSession, signIn, signOut } from 'next-auth/client';

export default function Home() {
  const [session] = useSession();
  return (
    <div>
      {!session ? (
        <>
          <button onClick={() => signIn('google')}>LogIn</button>
        </>
      ) : (
        <>
          <button onClick={() => signOut()}>LogOut</button> <br />
        </>
      )}
    </div>
  );
}
