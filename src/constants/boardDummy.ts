export interface IBoard {
  boardPk: number;
  enrollmentDate: string;
  title: string;
  preview: string;
  profileImage: string;
  name: string;
  comments: number;
  likes: number;
}

export function makeDummyBoards(number: number) {
  const dummy: IBoard[] = [];
  for (let i = 0; i < number; i++) {
    const data: IBoard = {
      boardPk: Math.round(Math.random() * 10000),
      enrollmentDate: new Date().toLocaleString(),
      title: `Test Title ${i + 1}`,
      preview: `Test Preview contents... ${i + 1}`,
      profileImage:
        'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=',
      name: `Tester${i + 1}`,
      comments: Math.round(Math.random() * 100),
      likes: Math.round(Math.random() * 100),
    };

    dummy.push(data);
  }
  return dummy;
}
export const dummyBoards = makeDummyBoards(15);
