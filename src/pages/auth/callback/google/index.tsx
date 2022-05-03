import { useRouter } from 'next/router';

const Google = () => {
  const {
    query: { code },
  } = useRouter();
  console.log(code);
  return <></>;
};

export default Google;
