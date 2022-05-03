import { useRouter } from 'next/router';

const Github = () => {
  const {
    query: { code },
  } = useRouter();
  console.log(code);
  return <></>;
};

export default Github;
