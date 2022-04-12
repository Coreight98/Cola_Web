import styled from '@emotion/styled';

const Container = styled.div`
  cursor: pointer;
  width: 20rem;
  height: 24rem;
  background-color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 6px 2px rgb(215 214 214 / 45%);
  transform: translateY(0) translateX(0);
  /* transition: all 200ms ease-in-out; */
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.2s ease-in 0s, transform 0.2s ease-in 0s;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  &:hover {
    transform: translateY(-8px) translateX(2px);
    box-shadow: rgb(0 0 0 / 8%) 0px 12px 20px 0px;
  }
`;

const BoardImage = styled.div`
  padding-top: 52.1921%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: #ddddfd;
  width: 100%;
  position: relative;
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;
const TextWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }
  div {
    flex: 1 1 0%;
  }
`;
const Title = styled.h3`
  font-size: 1rem;
  margin: 0px 0px 0.25rem;
  line-height: 1.5;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${({ theme: { text } }) => text.colors.black};
`;
const BodyText = styled.p`
  margin: 0px 0px 1.5rem;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.5;
  height: 3.9375rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme: { text } }) => text.colors.darkGray};
`;
const SubInfo = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  color: ${({ theme: { text } }) => text.colors.gray};
`;
const Separator = styled.span`
  margin: 0 0.25rem;
`;
const DescriptionWrapper = styled.div`
  padding: 0.625rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f1f3f5; ;
`;
const UserInfo = styled.div`
  display: flex;
  img {
    object-fit: cover;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    margin-right: 0.5rem;
    background: #bbb;
  }
  b {
    color: ${({ theme: { text } }) => text.colors.black};
  }
`;
const Likes = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  svg {
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.5rem;
  }
`;
export { Container, BoardImage, TextWrapper, Title, SubInfo, Separator, BodyText, DescriptionWrapper, UserInfo, Likes };
