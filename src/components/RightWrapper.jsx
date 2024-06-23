import ButtonRight from "./ButtonRight";


// eslint-disable-next-line react/prop-types
function RightWrapper ({onClick}) {
  return (
    <>
    <aside className="">
        <div>
            <ButtonRight onClick={onClick}/>
        </div>
    </aside>
    
    </>
  );
}

export default RightWrapper;
