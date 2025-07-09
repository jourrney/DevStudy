interface Props {
  name: string;
  color: string;
}

// 컴포넌트 정의
export const Hello = ({ name, color = "blue" }: Props) => {
  return <div style={{ color }}> Hello {name} </div>;
};

/*
// 위를 아래로 풀어서 사용 가능
function Hello({name, color} : Props) {
    return <div style={{color}}>Hello {name}</div>
}
*/

export default Hello;
