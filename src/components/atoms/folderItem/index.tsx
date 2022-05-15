import { Dispatch, SetStateAction } from 'react';
import FolderIcon from '@atoms/FolderIcon';
import { FolderTitleWrapper, BtnAddTodo } from './styles';
const FolderItem = ({
  id,
  color,
  setIsEdit,
}: {
  id: string;
  color: string;
  setIsEdit?: Dispatch<SetStateAction<any>>;
}) => {
  return (
    <FolderTitleWrapper
      onClick={() =>
        setIsEdit !== undefined &&
        setIsEdit({
          id,
          color,
        })
      }
    >
      <div>
        <span>
          <FolderIcon color={color} />
        </span>
        <span>{'폴더명'}</span>
      </div>
      <BtnAddTodo onClick={() => {}}>{'>'}</BtnAddTodo>
    </FolderTitleWrapper>
  );
};

export default FolderItem;
